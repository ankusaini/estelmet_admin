import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import csc from 'country-state-city'
@Component({
  selector: "app-company-details",
  templateUrl: "./company-details.component.html",
  styleUrls: ["./company-details.component.scss"]
})
export class CompanyDetailsComponent implements OnInit {
  @Output() company_details: EventEmitter<any> = new EventEmitter<any>();
  countryList: any;
  state_list: any;
  city_list: any;

  constructor() {}

  ngOnInit() {
    this.getAllCountry();
  }
  getAllCountry() {
    this.countryList = csc.getAllCountries();
  }
  getAllState(countryId) {
    this.state_list = csc.getStatesOfCountry(countryId);
  }
  getAllCity(stateId){
    this.city_list = csc.getCitiesOfState(stateId);
  }
  public companyDetailsForm = new FormGroup({
    userDetailId: new FormControl(""),
    companyName: new FormControl("", [Validators.required]),
    address1: new FormControl("",[Validators.required]),
    address2: new FormControl(""),
    gst: new FormControl("", [Validators.required]),
    otp: new FormControl("", ),
    numberOfEmployees: new FormControl("", []),
    country: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    pinCode: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]),
    mobile1: new FormControl(""),
    mobile2: new FormControl(""),
    emailBusiness: new FormControl(""),
    annualTurnover1: new FormControl(""),
    annualTurnover2: new FormControl(""),
    annualTurnover3: new FormControl("")
  });
  //  annualTurnOver:new FormArray([this.initializeAnnualTurnOver()]),
  // public initializeAnnualTurnOver(): FormGroup {
  //   return new FormGroup({
  //     annualTurnoverId: new FormControl("", [Validators.required]),
  //     year: new FormControl("", [Validators.required]),
  //     turnover: new FormControl("", [Validators.required])
  //   });
  // }

  companyDetailsSubmit() {
    if (this.companyDetailsForm.valid) {
      this.company_details.emit(this.companyDetailsForm.value);
    } else console.log("company details", this.companyDetailsForm);
  }
  get f() {
    return this.companyDetailsForm.controls;
  }
}
