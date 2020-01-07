import { Component, OnInit } from '@angular/core';
import { FormInput } from './customer-order-form-model';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  formInput: FormInput;
  public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor() {
    this.isSubmit = false;
   }
  ngOnInit() {
    this.formInput = {
      customerId: '',
      companyId: '',
      lotType: '',
      warId: '',
      category: '',
      shape: '',
      grosswt: '',
      netwt: '',
    };
  }
  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    alert('success');
  }
}
