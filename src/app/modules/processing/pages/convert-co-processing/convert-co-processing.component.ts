import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from "ng2-archwizard/dist";
import { Product, ProductCategory } from "src/app/shared/Models/product.model.";
import { CustomerOrder } from "src/app/shared/Models/customer-order.model";
import { SalesServiceService } from "src/app/modules/sale/services/sales-service.service";
import { ToastrService } from "ngx-toastr";
import { Processing } from "src/app/shared/Models/processing.model";
import { ProcessingService } from "src/app/modules/processing/service/processing.service";
import { StaticDataService } from "src/app/shared/services/data/staticData.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-convert-co-processing',
  templateUrl: './convert-co-processing.component.html',
  styleUrls: ['./convert-co-processing.component.css']
})
export class ConvertCoProcessingComponent implements OnInit {

  @ViewChild("wizard", { static: false }) wizard: WizardComponent;
  public selectedCo: any;
  processingType;
  public customerOrderList: CustomerOrder[];
  private processing: Processing;
  public ProductList: Product[];
   productCategoryList: ProductCategory[];
  selectedProductList: Product[] = [];

  constructor(private salesService: SalesServiceService, private toastr: ToastrService,
  private processingService: ProcessingService,
private staticData: StaticDataService,private router:Router) { }

  ngOnInit() {
    this.getAllCustomerOrder();
     this.staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryList = data;
    });
  }

  getAllCustomerOrder() {
    this.salesService.getAllCustomerOrder().subscribe(res => {
      this.customerOrderList = res;
      console.log(this.customerOrderList);
    });
  }


  getSelectedProductList(data) {
    this.selectedProductList = data;
  }


  checkNextStep() {
    if(this.selectedProductList && this.selectedProductList.length>0)
      {
          this.wizard.navigation.goToNextStep();
      }
      else
        {
          this.toastr.warning("Please select any product");
        }
  }


  checkCo() {
    if (this.selectedCo == undefined || this.selectedCo == '') {
      this.toastr.warning("Please select any Customer Order");
    }
    else {
      let salesId = this.selectedCo;

      if(salesId)
        {
      this.salesService.getProductBySalesId(salesId).subscribe(res => {
        this.ProductList = res;
        this.wizard.navigation.goToNextStep();
      })    
    }
    else
      {
        this.toastr.warning("Can not move to next step");
      }
    }
  }





  getSelectMrData(data)
  {
    console.log("Data is ",data);
    this.processing = data;

    const selectedPC = this.productCategoryList.filter(obj => {
      return obj.productCategory === data.productCategory;
    });

    if (selectedPC) {
      this.processing.productCategory = selectedPC[0];
    }

    this.processing.processingType=data.processingType;
    this.processing.productList=this.selectedProductList;

     const url = '/inventory/productProcessing/updateProcessing';
      this.processingService.updateProcessing(url, this.processing).subscribe(data => {
        // console.log("Data",data.productProcessingId)
        this.toastr.success('Converted succeessfully');
         this.router.navigateByUrl('/processing/editProcessing/'+data.productProcessingId);
      }, error => {
        this.toastr.warning('something went wrong');
      });
  }
}
