import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ProcessingService } from '../../service/processing.service';
import { Router } from '@angular/router';
import { WizardComponent } from 'ng2-archwizard/dist';
import { Product, ProductStage, Status } from 'src/app/shared/Models/product.model.';
import { ToastrService } from 'ngx-toastr';
import { Processing } from 'src/app/shared/Models/processing.model';

@Component({
  selector: 'app-update-processing',
  templateUrl: './update-processing.component.html',
  styleUrls: ['./update-processing.component.css']
})
export class UpdateProcessingComponent implements OnInit {
  selectedProcessing: Processing;
  @ViewChild('wizard', { static: false }) wizard: WizardComponent;
  public processingType: string = "";
  public processingList: any[];
  public processingIdList: any[];
  public selectedProcessingId: any;
  public selectedProductList: Product[] = [];
  public processingProductList: Product[] = [];
  public  processing: Processing;
  public myComp: any = 'processing';
  public currentSelectedPRoduct: Product;


  constructor(
    private router: Router,
    private toastr: ToastrService,
    private processingService: ProcessingService) { }

  ngOnInit() {
    this.basicSwal();
  }
  basicSwal() {
    Swal.fire({
      title: 'Processing Type!',
      input: 'select',
      inputOptions: {
        Shearing: 'Shearing',
        Blanking: 'Blanking',
        Assorting: 'Assorting',
      },
      inputPlaceholder: '-Select-',
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Select',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select Processing Type');
          }
        });
      }
    }).then(processingType => {
      if (processingType.value) {
        this.processingType = processingType.value.toString().toUpperCase();
        let url = "/inventory/productProcessing/getAllProductProcessingByProcessingTypeAndStatus/" + this.processingType + "/APPROVED";
       
        this.processingService.getAllProductProcessingByProcessingTypeAndStatus(url).subscribe(data => {
          this.processingList = data;
          this.processingIdList = this.processingList.map(processing => processing.productProcessingId);
          console.log(this.processingIdList);
        });
      } else if (processingType.dismiss === Swal.DismissReason.cancel) {
        this.router.navigate(['/dashboard/default']);
      }
    });
  }

  getSelectedProcessingId(id) {
    this.selectedProcessingId = id;

    let selectedProcessing = this.processingList.filter(data => {
      return data.productProcessingId == Number(this.selectedProcessingId.processingId)
    });
    //here selectedProceessing will come
    if (selectedProcessing && selectedProcessing.length > 0) {
      this.processingProductList = selectedProcessing[0].productList;
      this.selectedProcessing=selectedProcessing[0];
      this.wizard.navigation.goToNextStep();
    }
    else {
      this.toastr.warning("No product in this processing");
    }
  }


  getProductData(data) {
    if (this.currentSelectedPRoduct == undefined) {
      this.toastr.warning("Please select the product and try again")
    }
    else {
      data.productStage = ProductStage.ACTIVE;
      data.warehouse = this.currentSelectedPRoduct.warehouse;
      data.status = Status.PENDING;
      data.product = {
        productId: this.currentSelectedPRoduct.productId
      }
      let index = this.processingProductList.findIndex(obj => obj.productId == this.currentSelectedPRoduct.productId);
    if (index >= -1) {
      this.processingProductList[index].productStage = ProductStage.PROCESSED;
      this.processingProductList[index].status = Status.REJECTED;
    }
      this.selectedProductList.push(data);
    }
  }

  selectedProductId(product) {
    this.currentSelectedPRoduct = product;
    
    this.toastr.success("Product selected");
    this.currentSelectedPRoduct.productStage = ProductStage.REJECTED;
    this.currentSelectedPRoduct.status = Status.PROCESSED;

  }
  submitProcessing() {
    if (this.selectedProductList.length > 0) {
      // console.log(this.processing.productList);
      this.processing=this.selectedProcessing
      console.log("processing",this.processing);
      this.processing.productList = [];
      this.processingProductList.forEach(ele => {
      this.selectedProductList.push(ele);
      });
      this.processing.productList = this.selectedProductList;

      this.processing.processingType = this.processingType;
      const url = '/inventory/productProcessing/updateProcessing';
      this.processingService.updateProcessing(url, this.processing).subscribe(data => {
        // console.log("Data",data.productProcessingId)
        this.toastr.success('Record updated successfully');
        this.router.navigateByUrl('/processing/editProcessing/'+data.productProcessingId);
      }, error => {
        this.toastr.warning('something went wrong');
      });
    } else {
      this.toastr.error("Please select at least one product!");
    }
  }
}
