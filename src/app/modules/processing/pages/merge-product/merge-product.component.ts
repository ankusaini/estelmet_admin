import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryService } from "src/app/modules/inventory/service/inventory.service";
import { Product, ProductStage, Status } from "src/app/shared/Models/product.model.";
import { ToastrService } from "ngx-toastr";
import { WizardComponent } from "ng2-archwizard/dist";
import { Processing } from "src/app/shared/Models/processing.model";
import { ProcessingService } from "src/app/modules/processing/service/processing.service";
import { StaticDataService } from "src/app/shared/services/data/staticData.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-merge-product',
  templateUrl: './merge-product.component.html',
  styleUrls: ['./merge-product.component.css']
})
export class MergeProductComponent implements OnInit {
  productCategoryListFull: any[];

    @ViewChild('wizard', {static: false}) wizard: WizardComponent;

    selectedProductType;
  constructor(private inventoryService: InventoryService, private toastr: ToastrService,
  private processingService: ProcessingService,private staticData:StaticDataService) { }
      selectMrIdForm: FormGroup;
productList: Product[];
    productCategoryList: any[];

  selectedProductList: Product[];
    public processing: Processing;

      priorityList: any =
    {
      IMMEDIATE: 'Immediate',
      ONE_DAY: 'Within One Day', TWO_DAY: 'Within Two Day', THREE_DAY: 'Within Three Day', MORE_THEN_THREE_DAY: 'More Than Three Day'
    };




  ngOnInit() {

    //  const url = '/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED';
     const url = '/inventory/getAllProductByStatus/APPROVED';
    this.inventoryService.getAllProductByProductStageAndStatus(url).subscribe(data => {
      this.productList = data;
    }, error => {
      console.log(error);
    });

    this.staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryListFull = data;
        this.productCategoryList = data.map(categoryObj => categoryObj.productCategory)
        .filter(categoryObj => categoryObj !== null);
    });


     this.selectMrIdForm = new FormGroup({
      jobWorkType: new FormControl('', [Validators.required]),
      productCategory: new FormControl('', [Validators.required]),
      priorityLevel: new FormControl('', [Validators.required]),
      
      // customerCompanyId: new FormControl("")
    });

  }

   getSelectedProductList(selectedProductList) {
    this.selectedProductList = selectedProductList;
  }

  checkProduct()
  {
    if(this.selectedProductList && this.selectedProductList.length>0)
      {
        if(this.selectMrIdForm.invalid)
          {
            this.toastr.warning("Please fill all the values")
          }
          else
            {
              this.processing=this.selectMrIdForm.value;
              console.log(this.selectMrIdForm.value.productCategory);
const selectedPC = this.productCategoryListFull.filter(obj => {
      return obj.productCategory === this.selectMrIdForm.value.productCategory;
    });
    if (selectedPC) {
      this.processing.productCategory = selectedPC[0];
    }
        this.selectedProductList.forEach(element => {
          element.productStage=ProductStage.PROCESSED;
          // element.status=Status.PROCESSED
           element.status=Status.ONHOLD;
        });
       this.wizard.navigation.goToNextStep(); 
            }
      }
      else
        {
      this.toastr.warning("Please select atleast one product");
        }
  }



    getProductData(data) {
      //here set the Prodyct parent as first of selceted list
      if(this.selectedProductList && this.selectedProductList.length>0)
        {
          let firstProductId=this.selectedProductList[0].productId;
          let warehouse=this.selectedProductList[0].warehouse;
          // console.log("first Id",firstProductId);
       data.productStage=ProductStage.ACTIVE;
       data.warehouse=warehouse;
      data.status=Status.PENDING;
          data.product={
            productId:firstProductId
          }
      //data.product.productId=firstProductId;
    this.selectedProductList.push(data);
    console.log("now selected list",this.selectedProductList)
        }
  }



  mergeProduct()
  {

     if(this.selectedProductList.length > 0) {
        

        this.processing.status=Status.PENDING;
      this.processing.productList = this.selectedProductList;
      // this.processing.processingType = this.processingType;
      const url = '/inventory/productProcessing/updateProcessing';
      this.processingService.updateProcessing(url, this.processing).subscribe(data => {
        console.log("merged",data);
        this.toastr.success('Product merged successfully');
      }, error => {
        this.toastr.warning('something went wrong');
      });
    } else {
      this.toastr.error("Please select at least one product!");
    }
  }

}
