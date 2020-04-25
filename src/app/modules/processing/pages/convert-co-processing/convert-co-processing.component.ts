import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from "ng2-archwizard/dist";
import { Product } from "src/app/shared/Models/product.model.";
import { CustomerOrder } from "src/app/shared/Models/customer-order.model";
import { SalesServiceService } from "src/app/modules/sale/services/sales-service.service";
import { ToastrService } from "ngx-toastr";
import { Processing } from "src/app/shared/Models/processing.model";

@Component({
  selector: 'app-convert-co-processing',
  templateUrl: './convert-co-processing.component.html',
  styleUrls: ['./convert-co-processing.component.css']
})
export class ConvertCoProcessingComponent implements OnInit {

  @ViewChild("wizard", { static: false }) wizard: WizardComponent;
  public selectedCo: any;
  public customerOrderList: CustomerOrder[];
  private processing: Processing;
  public ProductList: Product[];
  selectedProductList: Product[] = [];

  constructor(private salesService: SalesServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllCustomerOrder();
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
    this.processing = data;
    this.processing.productList=this.selectedProductList;
  }
}
