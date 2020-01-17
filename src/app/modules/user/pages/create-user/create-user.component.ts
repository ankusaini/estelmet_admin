import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UserService } from 'src/app/shared/services/user.service';
import { User, Status } from 'src/app/shared/Models/user.model';
import { UserDataService } from 'src/app/shared/services/data/userData.service';
import { Router } from '@angular/router';
import csc from 'country-state-city';

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CreateUserComponent implements OnInit {
  showGroup = true;
  public isSubmit: boolean;
  public userDto : User = {};
  public uploadedFiles: Array<File> = [];

  constructor(
    private _userService : UserService,
    private _userDataService : UserDataService,
    private _router : Router
  ) {
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
    this.userDto.mobile = data.mobile;
    this.userDto.email = data.email;
    this.userDto.password = data.password;
    this.userDto.userRole = data.userRole;
    this.userDto.status = Status.PENDING;
  }
  getImageData(data:any)
  { 
    this.uploadedFiles=data;
    console.log("image is",this.uploadedFiles);
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
    this.userDto.userDetail.country = csc.getCountryById(data.country).name;
    this.userDto.userDetail.state = csc.getStateById(data.state).name;
    this.userDto.userDetail.city = csc.getCityById(data.city).name;
    this.userDto.userDetail.pinCode = data.pinCode;
    this.userDto.userDetail.mobile1 = data.mobile1;
    this.userDto.userDetail.mobile2 = data.mobile2
    this.userDto.userDetail.emailBusiness = data.emailBusiness;
    this.userDto.userDetail.annualTurnover = [];

    this.userDto.userDetail.annualTurnover.push({
      annualTurnoverId : "",
      year : '2016-2017',
      turnover : data.annualTurnover1
    });

    this.userDto.userDetail.annualTurnover.push({
      annualTurnoverId : "",
      year : '2017-2018',
      turnover : data.annualTurnover2
    });

    this.userDto.userDetail.annualTurnover.push({
      annualTurnoverId : "",
      year : '2018-2019',
      turnover : data.annualTurnover3
    });
    console.log(this.userDto);
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
    this._userService.saveUser(this.userDto).subscribe(data=>{
      console.log(data);
      this._userDataService.add(data);
      this._router.navigate(['/users/profile',data.id]);
      // let path ="/uploadImage/user/"+data.id;
      // this._userService.uploadImage(this.uploadedFiles[0],path).subscribe(res=>{
      //    this._router.navigate(['/users/profile',data.id]);
      // },error=>{

      // })
      
    },error=>{
      
    });
  }
}