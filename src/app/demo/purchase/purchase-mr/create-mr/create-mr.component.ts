import { Component, OnInit } from '@angular/core';
import { FormInput } from './create-mr-form-model';

@Component({
  selector: 'app-create-mr',
  templateUrl: './create-mr.component.html',
  styleUrls: ['./create-mr.component.css']
})
export class CreateMrComponent implements OnInit {
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
      switcher: ''
    };
  }
  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    this.showGroup = false;
  }
  save2(form: any) {
    if (!form.valid) {
      this.isSubmit2 = true;
      return;
    }
    alert('Product successfully add');
  }
}
