import { Component, OnInit } from '@angular/core';
import { FormInput } from './create-lot-form.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-lot-with-pc',
  templateUrl: './create-lot-with-pc.component.html',
  styleUrls: ['./create-lot-with-pc.component.css']
})
export class CreateLotWithPcComponent implements OnInit { 
  showGroup = true;
  public isSubmit: boolean;
  formInput: FormInput;
  constructor() {
    this.isSubmit = false;
    this.basicSwal();
   }
   successSwal() {
    Swal.fire('Success!', 'New Lot Created!', 'success');
  }
  ngOnInit() {
    this.formInput = {
      pcId: '',
    };
  } 
  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    this. successSwal();
  }
  basicSwal() {
    Swal.fire({
      title: 'Create LOT With',
      input: 'select',
      inputOptions: {
        purchaseInvoice: 'Purchase Invoice',
        withoutPurchaseInvoice: 'Without Purchase Invoice',
        jobWorkChalan: 'Job Work Chalan',
        materialTransfer: 'MT 7 self Job Work',
      },
      inputPlaceholder: 'Select LOT Type',
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
