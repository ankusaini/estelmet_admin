import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryService } from "src/app/modules/inventory/service/inventory.service";
import { Product, ProductStage, Status } from "src/app/shared/Models/product.model.";
import { ToastrService } from "ngx-toastr";
import { WizardComponent } from "ng2-archwizard/dist";
import { Processing } from "src/app/shared/Models/processing.model";
import { ProcessingService } from "src/app/modules/processing/service/processing.service";

@Component({
  selector: 'app-merge-product',
  templateUrl: './merge-product.component.html',
  styleUrls: ['./merge-product.component.css']
})
export class MergeProductComponent implements OnInit {

    @ViewChild('wizard', {static: false}) wizard: WizardComponent;

    selectedProductType;
  constructor(private inventoryService: InventoryService, private toastr: ToastrService,
  private processingService: ProcessingService) { }

  productList: Product[];
  selectedProductList: Product[];
    public processing: Processing;

  
  ngOnInit() {

    //  const url = '/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED';
     const url = '/inventory/getAllProductByStatus/APPROVED';
    this.inventoryService.getAllProductByProductStageAndStatus(url).subscribe(data => {
      this.productList = data;
      console.log("productList",this.productList);
    }, error => {
      console.log(error);
    });
  }

   getSelectedProductList(selectedProductList) {
    this.selectedProductList = selectedProductList;
  }

  checkProduct()
  {
    if(this.selectedProductList && this.selectedProductList.length>0)
      {
        this.selectedProductList.forEach(element => {
          element.productStage=ProductStage.REJECTED;
          element.status=Status.PROCESSED
        });
       this.wizard.navigation.goToNextStep(); 
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
          console.log("first Id",firstProductId);
       data.productStage=ProductStage.ACTIVE;
      data.status=Status.PENDING;
          data.productId={
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
        this.processing={};
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
