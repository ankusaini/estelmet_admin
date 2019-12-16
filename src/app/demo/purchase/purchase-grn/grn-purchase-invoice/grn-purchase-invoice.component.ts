import { Component, OnInit } from '@angular/core';
import { FormInput } from 'src/app/demo/users/create-group/create-group-form.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grn-purchase-invoice',
  templateUrl: './grn-purchase-invoice.component.html',
  styleUrls: ['./grn-purchase-invoice.component.css']
})
export class GrnPurchaseInvoiceComponent implements OnInit {
  showGroup = true;
  public isSubmit2: boolean;
  formInput: FormInput;
  public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor() {
    this.isSubmit2 = false;
    this.basicSwal();
  }
  ngOnInit() {
  }
  save(form: any) {
    if (!form.valid) {
      this.isSubmit2 = true;
      return;
    }
    this.showGroup = false;
  }
  basicSwal() {
    Swal.fire({
      title: 'Create GRN With',
      input: 'select',
      inputOptions: {
        purchaseInvoice: 'Purchase Invoice',
        withoutPurchaseInvoice: 'Without Purchase Invoice',
        jobWorkChalan: 'Job Work Chalan',
        materialTransfer: 'MT 7 self Job Work',
      },
      inputPlaceholder: 'Select GRN Type',
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
    });
  }
}
