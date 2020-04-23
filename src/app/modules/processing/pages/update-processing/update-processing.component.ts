import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ProcessingService } from '../../service/processing.service';
import { Router } from '@angular/router';
import { WizardComponent } from 'ng2-archwizard/dist';
import { Product } from 'src/app/shared/Models/product.model.';
import { ToastrService } from 'ngx-toastr';
import { Processing } from 'src/app/shared/Models/processing.model';

@Component({
  selector: 'app-update-processing',
  templateUrl: './update-processing.component.html',
  styleUrls: ['./update-processing.component.css']
})
export class UpdateProcessingComponent implements OnInit {
  @ViewChild('wizard', {static: false}) wizard: WizardComponent;
  public processingType: string = "";
  public processingList: any[];
  public processingIdList: any[];
  public selectedProcessingId: any;
  public selectedProductList: Product[] = [];
  private processing: Processing = undefined;

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
      if(processingType.value) {
        this.processingType = processingType.value.toString().toUpperCase();
        console.log(this.processingType);
        let url = "/inventory/productProcessing/getAllProductProcessingByProcessingTypeAndStatus/"+ this.processingType +"/APPROVED";
        console.log(url);
        this.processingService.getAllProductProcessingByProcessingTypeAndStatus(url).subscribe( data => {
          this.processingList = data;
          this.processingIdList = this.processingList.map(processing => processing.productProcessingId);
          console.log(this.processingIdList);
        });
      } else if(processingType.dismiss === Swal.DismissReason.cancel){
        console.log("dismiss Called");
        this.router.navigate(['/dashboard/default']);
      }
    });
  }

  getSelectedProcessingId(id) {
    console.log(id);
    this.selectedProcessingId = id;
    console.log(this.selectedProcessingId);
    this.wizard.navigation.goToNextStep();
  }


  getProductData(data) {
    console.log(data);
    this.selectedProductList.push(data);
    console.log(this.selectedProductList);
  }

  submitProcessing() {
    if(this.selectedProductList.length > 0) {
      alert("working");
      console.log(this.selectedProductList);
      // console.log(this.processing.productList);
      this.processing.productList = [];
      // this.selectedProductList.forEach(ele => {
      //   this.processing.productList.push(ele);
      // });
      this.processing.productList = this.selectedProductList;
      this.processing.processingType = this.processingType;
      const url = '/inventory/productProcessing/updateProcessing';
      this.processingService.updateProcessing(url, this.processing).subscribe(data => {
        // console.log("Data",data.productProcessingId)
        this.toastr.success('Record updated successfully.Generated Id:'+data.productProcessingId);
        // this.router.navigateByUrl('/processing/editProcessing/'+data.productProcessingId);
      }, error => {
        this.toastr.warning('something went wrong');
      });
    } else {
      this.toastr.error("Please select at least one product!");
    }
  }
}
