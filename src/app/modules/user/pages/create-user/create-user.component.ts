import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormInput } from './create-user-model';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";

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

     public userDetailFormGroup = new FormGroup({
    userDetailId: new FormControl("", [Validators.required]),
    companyName: new FormControl("", [Validators.required]),
    address1: new FormControl("", [Validators.required]),
    address2: new FormControl("", [Validators.required]),
    gst: new FormControl("", [Validators.required]),
    otp: new FormControl("", [Validators.required]),
    numberOfEmployees: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    pinCode: new FormControl("", [Validators.required]),
    mobile1: new FormControl("", [Validators.required]),
    mobile2: new FormControl("", [Validators.required]),
    emailBusiness: new FormControl("", [Validators.required]),
    annualTurnOver:new FormArray([this.initializeAnnualTurnOver()]),
    keyPerson: new FormArray([this.initializeKeyPerson()]),
    userProductPreference:new FormArray([this.initializeUserProductPreferences()])

  });
   public initializeAnnualTurnOver(): FormGroup {
    return new FormGroup({
      annualTurnoverId: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
      turnover: new FormControl("", [Validators.required])
    });
  }

    public initializeKeyPerson(): FormGroup {
    return new FormGroup({
      keyPersonId: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      designation: new FormControl("", [Validators.required]),
       mobile1: new FormControl("", [Validators.required]),
      mobile2: new FormControl("", [Validators.required]),
      email1: new FormControl("", [Validators.required]),
      email2: new FormControl("", [Validators.required])
    });
  }

  public initializeUserProductPreferences(): FormGroup {
    return new FormGroup({
      userProductPreferenceId: new FormControl("", [Validators.required]),
      productType: new FormControl("", [Validators.required]),
      productCategory: new FormControl("", [Validators.required]),
       productShape: new FormControl("", [Validators.required]),
      productClass: new FormControl("", [Validators.required]),
      thicknessRange: new FormControl("", [Validators.required]),
      temperRange: new FormControl("", [Validators.required]),
        lengthRange: new FormControl("", [Validators.required]),
      widthRange: new FormControl("", [Validators.required]),
      monthlyRequirement: new FormControl("", [Validators.required])
    });
  }
   /*-------- apply validations on device form --------------- */
  userDTO = new FormGroup({
    // this.utils.noWhitespaceValidator,CustomValidator.emailValidate
    userDetail: this.userDetailFormGroup,
    id: new FormControl(""),
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required]),
    mobile: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    userRole: new FormControl("",[Validators.required]),
    status: new FormControl("",[Validators.required]),
    
    
  });

   
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

  getPersonData(data : any) {
    console.log(data);
  }

  companyDetailData(data : any) {
    console.log(data);
  }

  tradeData(data : any) {
    console.log(data);
  }

  keyPersonData(data : any) {
    console.log(data);
  }

  final_submit(data : boolean) {
    console.log(data);
  }
}
