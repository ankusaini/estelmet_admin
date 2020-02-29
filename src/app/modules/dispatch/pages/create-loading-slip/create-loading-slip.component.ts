import { Component, OnInit, ViewChild } from '@angular/core';
import { DispatchService } from '../../services/dispatch.service';
import { ToastrService } from 'ngx-toastr';
import { Sales, DeliveryOrder } from 'src/app/shared/Models/sales.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WizardComponent } from 'ng2-archwizard/dist';
import { Product, Status, ProductStage } from 'src/app/shared/Models/product.model.';
import { RequestP } from 'src/app/shared/Models/RequestResponse';

@Component({
  selector: 'app-create-loading-slip',
  templateUrl: './create-loading-slip.component.html',
  styleUrls: ['./create-loading-slip.component.css']
})
export class CreateLoadingSlipComponent implements OnInit {
  @ViewChild("wizard", {static: false}) wizard: WizardComponent;
  public salesList: Sales[];
  selectScIdForm: FormGroup;
  productIdForm: FormGroup;
  public productList: Product[];
  public deliveryOrder: DeliveryOrder;
  public selectedProductList: Product[] =[];
  // public selectedScId: any;
  request: RequestP = {};
  // productRequest: RequestP = {};

  constructor(
    private dispatchService: DispatchService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getScIdList();
    this.createScIdForm();
    this.createProductIdForm();
  }

  createProductIdForm() {
    this.productIdForm = new FormGroup({
      productId: new FormControl("")
    })
  }

  createScIdForm() {
    this.selectScIdForm = new FormGroup({
      salesId: new FormControl("",[Validators.required])
    })
  }

  getScIdList() {
    let url = "/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/APPROVED";
    this.dispatchService.getAllSalesByTypeAndStatus(url).subscribe(
      data => {
        this.salesList = data.salesList;
        console.log(this.salesList);
      }, error => {
        console.log(error);
      }
    )
  }

  submitScId() {
    if(this.selectScIdForm.valid) {
      // this.selectedScId = this.selectScIdForm.value.scId;
      // console.log(this.selectedScId);
      this.deliveryOrder = this.selectScIdForm.value;
      let url = "/inventory/sales/" + this.selectScIdForm.value.salesId;
      this.dispatchService.getAllProductsByTypeAndStatus(url).subscribe(
        data => {
          this.productList = data;
          console.log(this.productList);
        }
      )
      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.warning("Please select Id!");
    }
  }

  get f() {
    return this.selectScIdForm.controls;
  }

  submitProductId() {
    let id = this.productIdForm.value.productId;
    let index = -2;
    let selectedproduct;
    console.log(id);
    this.productList.forEach(product => {
      if(product.productId == id) {
        console.log(product.productId);
        index = this.selectedProductList.indexOf(product);
        selectedproduct = product;
      } 
    });
    console.log(index);
    let productindex = this.productList.indexOf(selectedproduct);
    console.log(productindex);
    if(index == -1 && productindex !== -1) {
      this.selectedProductList.push(selectedproduct);
      console.log(this.selectedProductList);
    }
    if(index !== -1 && productindex !== -1) {
      this.toastr.warning("Product already added");
    }
    if(index == -2) {
      this.toastr.warning("Product not found in product list!");
    }
    this.createProductIdForm();

  }

  // updateProductList() {
  //   if(this.selectedProductList.length > 0) {
  //     this.wizard.navigation.goToNextStep();
  //   } else {
  //     this.toastr.error("Select at least one!");
  //   }
  // }


  saveRecord() {
    this.request.deliveryOrder = this.deliveryOrder;
    this.request.productList = [];
    console.log(this.request);

    

    // this.productRequest.productList = this.selectedProductList;

    console.log(this.selectedProductList);

    let url = "/sales/createDeliveryOrder";
    this.dispatchService.saveRequestObject(url, this.request).subscribe(
      data => {
        this.selectedProductList.forEach(product => {
          product.status = Status.REJECTED;
          product.productStage = ProductStage.SOLD_OUT;
          console.log(data);
        });
        let productUrl = "/inventory/updateProduct/";
        this.dispatchService.updateProductObject(productUrl, this.selectedProductList).subscribe(
          data => {
            this.toastr.success("Record saved Successfully!");
          }, error => {
            console.log(error);
          }
        )
      }, error => {
      console.log(error);
    }
    )

  }

}
