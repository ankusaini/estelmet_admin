import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

       public companyDetailsForm = new FormGroup({
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
    annualTurnover1: new FormControl("", [Validators.required]),
    annualTurnover2: new FormControl("", [Validators.required]),
    annualTurnover3: new FormControl("", [Validators.required]),
   

  });
//  annualTurnOver:new FormArray([this.initializeAnnualTurnOver()]),
    public initializeAnnualTurnOver(): FormGroup {
    return new FormGroup({
      annualTurnoverId: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
      turnover: new FormControl("", [Validators.required])
    });
  }

  companyDetailsSubmit()
  {
    console.log("company details",this.companyDetailsForm)
  }
}

 
