import { Component, OnInit } from '@angular/core';
import { FormInput } from './create-processing-form-model';
import Swal from 'sweetalert2';
import { ProcessingService } from '../../service/processing.service';
import { Product, ProductCategory } from "src/app/shared/Models/product.model.";
import { Processing } from "src/app/shared/Models/processing.model";
import { ToastrService } from "ngx-toastr";
import { StaticDataService } from "src/app/shared/services/data/staticData.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-processing',
  templateUrl: './create-processing.component.html',
  styleUrls: ['./create-processing.component.css']
})
export class CreateProcessingComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  processingType: string = "";
  public ProductList: Product[];
  productCategoryList: ProductCategory[];
  private processing:Processing;
  selectedProductList: Product[]=[];
  selectedProductCategory:ProductCategory;
  // formInput: FormInput;
  // public maskIP = [/\d/, '.', /\d/, /\d/];


  constructor(
          private processingService: ProcessingService,
          private toastr:ToastrService,
          private router: Router,
          private staticData: StaticDataService) {
    this.isSubmit = false;
   }
  ngOnInit() {

    this.basicSwal();

    let url = "/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED";
    this.processingService.getAllProductByProductStageAndStatus(url).subscribe(data => {
      this.ProductList = data;
      console.log(this.ProductList);
    });
      this.staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryList= data;
      console.log("categoryList: ", this.productCategoryList);
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
      confirmButtonText: 'Create',
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
      if(processingType != "") {
        this.processingType = processingType.value.toString().toUpperCase();
        console.log('processingType: '+ this.processingType);
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
    this.processing=data;
    
    let selectedPC=this.productCategoryList.filter(obj=>{
      return obj.productCategory==data.productCategory
    });
  
    if(selectedPC)
      {
        this.processing.productCategory=selectedPC[0];
      }
  }

    getSelectedProductList(selectedProductList) {
    this.selectedProductList = selectedProductList;

  }


  addProcessing()
  {
    if(this.selectedProductList.length==0)
      {
        this.toastr.warning("Please select any product");
      }
      else
        {
          this.processing.productList=this.selectedProductList;
          this.processing.processingType=this.processingType;
          console.log("Full processning",this.processing)
          let url="/inventory/productProcessing/addProductProcessing";
          this.processingService.addProcessing(url,this.processing).subscribe(data=>{
            this.toastr.success("Record saved successfully");
            this.router.navigateByUrl("/processing/processingApproval");
          },error=>{
            this.toastr.warning("something went wrong");
          })
        }
  }
}
