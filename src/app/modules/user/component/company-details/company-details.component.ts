import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { CustomValidator } from "src/app/Validators/custom-validator";
import csc from 'country-state-city'
import { ToastrService } from 'ngx-toastr';
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

  constructor(private toastrService: ToastrService) {}

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
    companyName: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    address1: new FormControl("",[
      Validators.required,
      CustomValidator.addressValidation
    ]),
    address2: new FormControl("", [ CustomValidator.addressValidation]),
    gst: new FormControl("", [Validators.required]),
    otp: new FormControl("", ),
    numberOfEmployees: new FormControl("",[CustomValidator.numberUpdateDurationValidation]),
    country: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    pinCode: new FormControl("", [
      Validators.required,
      CustomValidator.pinCodeValidation
    ]),
    mobile1: new FormControl("",[CustomValidator.contactNumberValidation]),
    mobile2: new FormControl("", [CustomValidator.contactNumberValidation]),
    emailBusiness: new FormControl("", [CustomValidator.emailValidation]),
    annualTurnover1: new FormControl("",[CustomValidator.compondValueValidate]),
    annualTurnover2: new FormControl("",[CustomValidator.compondValueValidate]),
    annualTurnover3: new FormControl("",[CustomValidator.compondValueValidate])
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
    } else {
      console.log("company details", this.companyDetailsForm);
      this.toastrService.error("Details are invalid!");
    }
  }
  get f() {
    return this.companyDetailsForm.controls;
  }
}
