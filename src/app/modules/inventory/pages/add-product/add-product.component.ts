import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormInput } from "src/app/modules/inventory/pages/add-product/add-product-form.model";
import { Grn } from 'src/app/shared/Models/purchase.model';
import { Product } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

showGroup = true;
  // public isSubmit2: boolean;
  // formInput: FormInput;
  // public maskIP = [/\d/, '.', /\d/, /\d/];
  grnList: Grn[];
  productList : Product[] = [];

  constructor() {
    // this.isSubmit2 = false;
    this.basicSwal();
  }
  ngOnInit() {
    // this.formInput = {
    //   email: '',
    //   password: '',
    //   confirmPassword: '',
    //   requiredInput: '',
    //   url: '',
    //   phone: '',
    //   type: '',
    //   category: '',
    //   shape: '',
    //   class: '',
    //   thickMin: '',
    //   thickMax: '',
    //   companyName: '',
    //   warehouse: '',
    //   address: '',
    //   file: '',
    //   switcher: ''
    // };
  }
  // save(form: any) {
  //   if (!form.valid) {
  //     this.isSubmit2 = true;
  //     return;
  //   }
  //   this.showGroup = false;
  // }
  basicSwal() {
    Swal.fire({
      title: 'Add Product With',
      input: 'select',
      inputOptions: {
        purchaseInvoice: 'Purchase Invoice',
        withoutPurchaseInvoice: 'Without Purchase Invoice',
        jobWorkChalan: 'Job Work Chalan',
        materialTransfer: 'Material Transfer',
      },
      inputPlaceholder: 'Select Product Type',
      allowOutsideClick: false,
      confirmButtonText: 'Select',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function(resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select Product Type');
          }
        });
      }
    }).then( selectedType => {
      if(selectedType !== "") {
        console.log("selected type", selectedType);
      }
    });
  }

  getSelectedGrnId(grnId) {
    console.log("in add-product component", grnId);
  }

  getProductData(productData) {
    console.log("product Data is in add product comp: ", productData);
    this.productList.push(productData);
  }
  
}
