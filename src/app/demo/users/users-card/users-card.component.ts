import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormInput } from './user-card-form-model';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersCardComponent implements OnInit {
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
