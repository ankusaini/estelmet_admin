import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormInput } from './create-user-model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateUserComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  //need to change the model
  formInput: FormInput;
  public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor() {
    this.isSubmit = false;
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
      userType: ''
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
