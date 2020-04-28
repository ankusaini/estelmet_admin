import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Processing } from 'src/app/shared/Models/processing.model';
import { Product, ProductCategory } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import Swal from 'sweetalert2';
import { ProcessingService } from '../../service/processing.service';
import { WizardComponent } from 'ng2-archwizard/dist';

@Component({
  selector: 'app-create-processing',
  templateUrl: './create-processing.component.html',
  styleUrls: ['./create-processing.component.css']
})
export class CreateProcessingComponent implements OnInit {
  @ViewChild('wizard', {static: false}) wizard: WizardComponent;

  showGroup = true;
  public isSubmit: boolean;
  processingType = '';
  public ProductList: Product[];
  productCategoryList: ProductCategory[];
  private processing: Processing;
  selectedProductList: Product[] = [];
  selectedProductCategory: ProductCategory;
  // formInput: FormInput;
  // public maskIP = [/\d/, '.', /\d/, /\d/];


  constructor(
    private processingService: ProcessingService,
    private toastr: ToastrService,
    private router: Router,
    private staticData: StaticDataService) {
    this.isSubmit = false;
  }
  ngOnInit() {

    this.basicSwal();

    const url = '/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED';
    this.processingService.getAllProductByProductStageAndStatus(url).subscribe(data => {
      this.ProductList = data;
    });
    this.staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryList = data;
    });
  }
  basicSwal() {
    Swal.fire({
      title: 'Processing Type!',
      input: 'select',
      inputOptions: {
        SHEARING: 'Shearing',
        BLANKING: 'Blanking',
        ASSORTING: 'Assorting',
      },
      inputPlaceholder: '-Select-',
      allowOutsideClick: false,
      width:'300px',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Create',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function(resolve, reject) {
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
      } else if(processingType.dismiss === Swal.DismissReason.cancel){
        console.log("dismiss Called");
        this.router.navigate(['/dashboard/default']);
      }
    });
  }
  // save(form: any) {
  //   if (!form.valid) {
  //     this.isSubmit = true;
  //     return;
  //   }
  //   alert('success');
  // }

  getSelectMrData(data) {
    this.processing = data;

    const selectedPC = this.productCategoryList.filter(obj => {
      return obj.productCategory === data.productCategory;
    });

    if (selectedPC) {
      this.processing.productCategory = selectedPC[0];
    }
    this.wizard.navigation.goToNextStep();
  }

  getSelectedProductList(selectedProductList) {
    this.selectedProductList = selectedProductList;

  }


  addProcessing() {
    if (this.selectedProductList.length === 0) {
      this.toastr.warning('Please select any product');
    } else {
      this.processing.productList = this.selectedProductList;
      this.processing.processingType = this.processingType;
      const url = '/inventory/productProcessing/addProductProcessing';
      this.processingService.addProcessing(url, this.processing).subscribe(data => {
        console.log("Data",data.productProcessingId)
        this.toastr.success('Record saved successfully.Generated ID:'+data.productProcessingId);
        this.router.navigateByUrl('/processing/editProcessing/'+data.productProcessingId);
      }, error => {
        this.toastr.warning('something went wrong');
      });
    }
  }
}
