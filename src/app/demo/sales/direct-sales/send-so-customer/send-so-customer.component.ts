import { Component, OnInit } from '@angular/core';
import { FormInput } from './send-so-form-model';


@Component({
  selector: 'app-send-so-customer',
  templateUrl: './send-so-customer.component.html',
  styleUrls: ['./send-so-customer.component.css']
})
export class SendSoCustomerComponent implements OnInit { 
  showGroup = true;
  public isSubmit: boolean;
  formInput: FormInput;
  constructor() { }


  ngOnInit() {
    this.formInput = {
     soId: ''
    };
  }

}
