import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WizardComponent } from 'ng2-archwizard/dist';
import { ToastrService } from 'ngx-toastr';
import { Product, ProductStage, Status } from 'src/app/shared/Models/product.model.';
import { RequestP } from 'src/app/shared/Models/RequestResponse';
import { DeliveryOrder, Sales } from 'src/app/shared/Models/sales.model';
import { DispatchService } from '../../services/dispatch.service';

@Component({
  selector: 'app-create-loading-slip',
  templateUrl: './create-loading-slip.component.html',
  styleUrls: ['./create-loading-slip.component.css']
})
export class CreateLoadingSlipComponent implements OnInit {
  @ViewChild('wizard', { static: false }) wizard: WizardComponent;
  public salesList: Sales[];
  selectScIdForm: FormGroup;
  productIdForm: FormGroup;
  public productList: Product[];
  public deliveryOrder: DeliveryOrder;
  public selectedProductList: Product[] = [];
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
      productId: new FormControl('')
    });
  }

  createScIdForm() {
    this.selectScIdForm = new FormGroup({
      salesId: new FormControl('', [Validators.required])
    });
  }

  getScIdList() {
    const url = '/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/APPROVED';
    this.dispatchService.getAllSalesByTypeAndStatus(url).subscribe(
      data => {
        this.salesList = data.salesList;
      }, error => {
        console.log(error);
      }
    );
  }

  submitScId() {
    if (this.selectScIdForm.valid) {
      this.deliveryOrder = this.selectScIdForm.value;
      const url = '/inventory/sales/' + this.selectScIdForm.value.salesId;
      this.dispatchService.getAllProductsByTypeAndStatus(url).subscribe(
        data => {
          this.productList = data;
        }
      );
      this.wizard.navigation.goToNextStep();
    } else {
      this.toastr.warning('Please select ID!');
    }
  }

  get f() {
    return this.selectScIdForm.controls;
  }

  submitProductId() {
    const id = this.productIdForm.value.productId;
    let index = -2;
    let selectedproduct;
    this.productList.forEach(product => {
      if (product.productId == id) {
        index = this.selectedProductList.indexOf(product);
        selectedproduct = product;
      }
    });
    const productindex = this.productList.indexOf(selectedproduct);
    if (index == -1 && productindex != -1) {
      this.selectedProductList.push(selectedproduct);
    }
    if (index !== -1 && productindex !== -1) {
      this.toastr.warning('Product already added');
    }
    if (index == -2) {
      this.toastr.warning('Product not found in product list!');
    }
    this.createProductIdForm();

  }

  saveRecord() {
    this.request.deliveryOrder = this.deliveryOrder;
    this.request.productList = [];
    const url = '/sales/createDeliveryOrder';
    this.dispatchService.saveRequestObject(url, this.request).subscribe(
      data => {
        this.selectedProductList.forEach(product => {
          product.status = Status.REJECTED;
          product.productStage = ProductStage.SOLD_OUT;
        });
        const productUrl = '/inventory/updateProduct/';
        this.dispatchService.updateProductObject(productUrl, this.selectedProductList).subscribe(
          () => {
            this.toastr.success('Record saved Successfully!');
          }, error => {
            console.log(error);
          }
        );
      }, error => {
        console.log(error);
      }
    );

  }



 
}
