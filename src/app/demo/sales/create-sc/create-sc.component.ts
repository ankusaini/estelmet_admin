import { Component, OnInit } from '@angular/core';
import { FormInput } from '../customer-order/customer-order-form-model';

@Component({
  selector: 'app-create-sc',
  templateUrl: './create-sc.component.html',
  styleUrls: ['./create-sc.component.css']
})
export class CreateScComponent implements OnInit {
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
