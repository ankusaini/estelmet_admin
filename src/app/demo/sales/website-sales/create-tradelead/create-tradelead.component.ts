import { Component, OnInit } from '@angular/core';
import { FormInput } from '../../direct-sales/create-so/create-so-form-model';

@Component({
  selector: 'app-create-tradelead',
  templateUrl: './create-tradelead.component.html',
  styleUrls: ['./create-tradelead.component.css']
})
export class CreateTradeleadComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  public isSubmit2: boolean;
  formInput: FormInput;
  public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor() {
    this.isSubmit = false;
    this.isSubmit2 = false;
  }


  ngOnInit() {
    this.formInput = {
      email: '',
      password: '',
      confirmPassword: '',
      requiredInput: '',
      url: '',
      phone: '',
      type: '',
      category: '',
      shape: '',
      class: '',
      thickMin: '',
      thickMax: '',
      companyName: '',
      warehouse: '',
      address: '',
      file: '',
      switcher: '',
      soId: ''
    };
  }
  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    this.showGroup = false;
  }
}