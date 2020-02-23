import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from 'ng2-archwizard/dist';

@Component({
  selector: 'app-create-tradlead',
  templateUrl: './create-tradlead.component.html',
  styleUrls: ['./create-tradlead.component.scss']
})
export class CreateTradleadComponent implements OnInit {

  @ViewChild("wizard", {static: false}) wizard: WizardComponent
  showGroup = true;
  public isSubmit: boolean;
  // public isSubmit2: boolean;
  // formInput: FormInput;
  // public maskIP = [/\d/, '.', /\d/, /\d/];
  constructor() {
    this.isSubmit = false;
    // this.isSubmit2 = false;
  }


  ngOnInit() {
    // this.formInput = {
    //   email: '',
    //   password: '',
    //   confirmPassword: '',
    //   requiredInput: '',
    //   url: '',
    //   phone: '',
    //   type: '',
    //   category: '',
    //   shape: '',
    //   class: '',
    //   thickMin: '',
    //   thickMax: '',
    //   companyName: '',
    //   warehouse: '',
    //   address: '',
    //   file: '',
    //   switcher: '',
    //   soId: ''
    // };
  }
  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    this.showGroup = false;
  }

  getCreateSoId(data: any) {
    console.log("Your Data is: "+ data.companyName);
    console.log("Your Data is: "+ data.warehouseName);
    console.log("Your Data is: "+ data.productCategory);
    console.log("Your Data is: "+ data.productShape);
    this.wizard.navigation.goToNextStep();
  }

  getSelectProductData(data: any) {
    console.log(data);
    this.wizard.navigation.goToNextStep();
  }

  getOtherDetailsData(data: any) {
    console.log(data);
  }

}
