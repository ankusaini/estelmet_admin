import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormInput } from "./create-user-model";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CreateUserComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  public userDto : userDto = {};

  constructor() {
    this.isSubmit = false;
  }

  ngOnInit() {}

  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    this.showGroup = false;
  }

  getPersonData(data: any) {
    console.log(data);
    this.userDto.id = "";
    this.userDto.firstName = data.firstName;
    this.userDto.lastName = data.lastName;
    this.userDto.mobile = data.lastName;
    this.userDto.email = data.email;
    this.userDto.password = data.password;
    this.userDto.userRole = data.userRole;
    this.userDto.status = "PENDING";
  }

  companyDetailData(data: any) {
    console.log(data);
    this.userDto.userDetail = {};
    this.userDto.userDetail.userDetailId = ""
    this.userDto.userDetail.companyName = data.companyName;
    this.userDto.userDetail.address1 = data.address1;
    this.userDto.userDetail.address2 = data.address2;
    this.userDto.userDetail.gst = data.gst;
    this.userDto.userDetail.otp = data.otp;
    this.userDto.userDetail.numberOfEmployees = data.numberOfEmployees;
    this.userDto.userDetail.country = data.country;
    this.userDto.userDetail.state = data.state;
    this.userDto.userDetail.city = data.city;
    this.userDto.userDetail.pinCode = data.pincode;
    this.userDto.userDetail.mobile1 = data.mobile1;
    this.userDto.userDetail.mobile2 = data.mobile2
    this.userDto.userDetail.emailBusiness = data.emailBusiness;
    this.userDto.userDetail.annualTurnOver = [];

    this.userDto.userDetail.annualTurnOver.push({
      annualTurnoverId : "",
      year : '2019-2020',
      turnover : data.annualTurnover1
    });

    this.userDto.userDetail.annualTurnOver.push({
      annualTurnoverId : "",
      year : '2018-2019',
      turnover : data.annualTurnover2
    });

    this.userDto.userDetail.annualTurnOver.push({
      annualTurnoverId : "",
      year : '2017-2018',
      turnover : data.annualTurnover3
    });
    
  }

  tradeData(data: any[]) {
    this.userDto.userDetail.userProductPreference = []
    // console.log(data);

    data.forEach(ele =>{
      this.userDto.userDetail.userProductPreference.push({
        productType : ele.productType,
        productCategory : ele.productCategory,
        productClass : ele.productClass,
        productShape : ele.productShape,
        thicknessRange : ele.thicknessMin +' - '+ ele.thicknessMax,
        widthRange : ele.widthMin +' - '+ ele.widthMax,
        temperRange : ele.temperMin +' - '+ ele.temperMax,
        lengthRange : ele.lengthMin +' - '+ ele.lengthMax,
        monthlyRequirement : ele.monthlyRequirement
      })
    })

    console.log(this.userDto.userDetail.userProductPreference);
  }

  keyPersonData(data: any) {
    this.userDto.userDetail.keyPerson = [];

    this.userDto.userDetail.keyPerson.push({
      keyPersonId: "",
      name: data.fullName1,
      designation: data.designation1,
      email1: data.email1,
      mobile1: data.mobile1,
      email2: "",
      mobile2: ""
    });

    this.userDto.userDetail.keyPerson.push({
      keyPersonId: "",
      name: data.fullName2,
      designation: data.designation2,
      email1: data.email2,
      mobile1: data.mobile2,
      email2: "",
      mobile2: ""
    });
  }

  final_submit(data: boolean) {
    console.log(this.userDto);
  }
}

interface userDto {
  userDetail ?: userDetail
  id ?: string,
  firstName ?: string,
  lastName ?: string,
  mobile ?: string,
  email ?: string,
  password ?: string,
  userRole ?: string,
  status ?: string,
}

interface userDetail {
  userDetailId ?: string;
  companyName ?: string;
  address1 ?: string;
  address2 ?: string;
  gst ?: string;
  otp ?: string;
  numberOfEmployees ?: string; 
  country ?: string;
  state ?: string;
  city ?: string;
  pinCode ?: string;
  mobile1 ?:   string;
  mobile2 ?: string;
  emailBusiness ?: string;
  annualTurnOver ?: annualTurnover[];
  keyPerson ?: keyPerson[];
  userProductPreference ?: userProductPreference[];
}

interface userProductPreference {
  productType ?: string;
  productCategory ?: string;
  productShape ?: string;
  productClass ?: string;
  thicknessRange ?: string;
  widthRange ?: string;
  temperRange ?: string;
  lengthRange ?: string;
  monthlyRequirement ?: string;
}

interface keyPerson {
  keyPersonId: string;
  name?: string;
  designation?: string;
  email1?: string;
  email2?: string;
  mobile1?: string;
  mobile2?: string;
}

interface annualTurnover {
  annualTurnoverId ?: string,
  year ?: string,
  turnover ?: string
}