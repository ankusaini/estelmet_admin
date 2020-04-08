import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import csc from 'country-state-city';
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from 'src/app/Validators/custom-validator';
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }
  get f() {
    return this.companyDetailsForm.controls;
  }

  @Output() companyDetails: EventEmitter<any> = new EventEmitter<any>();
  countryList: any;
  stateList: any;
  cityList: any;
  public companyDetailsForm = new FormGroup(
    {
      userDetailId: new FormControl(''),
      companyName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      address1: new FormControl('', [
        Validators.required,
        CustomValidator.addressValidation
      ]),
      address2: new FormControl('', [CustomValidator.addressValidation]),
      gst: new FormControl('', [Validators.required]),
      otp: new FormControl(''),
      numberOfEmployees: new FormControl('', [CustomValidator.numberUpdateDurationValidation]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pinCode: new FormControl('', [
        Validators.required,
        CustomValidator.pinCodeValidation
      ]),
      mobile1: new FormControl('', [CustomValidator.contactNumberValidation]),
      mobile2: new FormControl('', [CustomValidator.contactNumberValidation]),
      emailBusiness: new FormControl('', [CustomValidator.emailValidation]),
      annualTurnover1: new FormControl('', [CustomValidator.compondValueValidate]),
      annualTurnover2: new FormControl('', [CustomValidator.compondValueValidate]),
      annualTurnover3: new FormControl('', [CustomValidator.compondValueValidate])
    });

  ngOnInit() {
    this.getAllCountry();
  }
  getAllCountry() {
    this.countryList = csc.getAllCountries();
  }
  getAllState(countryId) {
    this.stateList = csc.getStatesOfCountry(countryId);
  }
  getAllCity(stateId) {
    this.cityList = csc.getCitiesOfState(stateId);
  }

  companyDetailsSubmit() {
    console.log('click');
    if (this.companyDetailsForm.valid) {
      this.companyDetails.emit(this.companyDetailsForm.value);
    } else {
      console.log('company details', this.companyDetailsForm);
      this.toastrService.error('Details are invalid!');
    }
  }
}
