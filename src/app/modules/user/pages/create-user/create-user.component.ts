import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import csc from 'country-state-city';
import { WizardComponent } from 'ng2-archwizard/dist';
import { ToastrService } from 'ngx-toastr';
import { Status, UserDetail } from 'src/app/shared/Models/user.model';
import { UserDataService } from 'src/app/shared/services/data/userData.service';
import { UserService } from 'src/app/shared/services/user.service';
import { BusinessDetails, ProductStage } from './../../../../shared/Models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CreateUserComponent implements OnInit {
  @ViewChild('wizard', { static: true }) wizard: WizardComponent;
  showGroup = true;
  public isSubmit: boolean;
  public userDto: UserDetail = {};

  constructor(
    private userService: UserService,
    private userDataService: UserDataService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.isSubmit = false;
  }

  ngOnInit() { }

  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
    this.showGroup = false;
  }

  getPersonData(data: any) {
    console.log(data);
    this.userDto.id = '';
    this.userDto.firstName = data.firstName;
    this.userDto.lastName = data.lastName;
    this.userDto.mobile = data.mobile;
    this.userDto.emailId = data.email;
    this.userDto.password = data.password;
    this.userDto.userRole = data.userRole;
    this.userDto.status = Status.PENDING;
    this.userDto.image = '';
    // this.wizard.navigation.canGoToStep(2);
    this.wizard.navigation.goToNextStep();
  }

  companyDetailData(data: any) {
    console.log(data);
    this.userDto.businessDetails = [];
    const tempobj: BusinessDetails = {};
    tempobj.businessDetailId = '';
    tempobj.companyName = data.companyName;
    tempobj.address1 = data.address1;
    tempobj.address2 = data.address2;
    tempobj.gst = data.gst;
    tempobj.otp = data.otp;
    tempobj.numberOfEmployees = data.numberOfEmployees;
    tempobj.country = csc.getCountryById(data.country).name;
    tempobj.state = csc.getStateById(data.state).name;
    tempobj.city = csc.getCityById(data.city).name;
    tempobj.pinCode = data.pinCode;
    tempobj.mobile = data.mobile1;
    tempobj.mobile = data.mobile2;
    tempobj.businessEmail = data.emailBusiness;
    //
    tempobj.creditLimit = '';
    tempobj.currentOutstanding = '';
    tempobj.daysPayableOutstanding = '';
    tempobj.landline = '';
    this.userDto.businessDetails.push(tempobj);
    this.userDto.annualTurnover = [];

    this.userDto.annualTurnover.push({
      annualTurnoverId: '',
      year: '2016-2017',
      turnover: data.annualTurnover1
    });

    this.userDto.annualTurnover.push({
      annualTurnoverId: '',
      year: '2017-2018',
      turnover: data.annualTurnover2
    });

    this.userDto.annualTurnover.push({
      annualTurnoverId: '',
      year: '2018-2019',
      turnover: data.annualTurnover3
    });
    console.log(this.userDto);
    // this.isCompanyDetailData = true;
    // this.wizard.navigation.canGoToStep(3);
    this.wizard.navigation.goToNextStep();


  }

  tradeData(data: any[]) {
    this.userDto.userProductPreference = [];
    // console.log(data);

    data.forEach(ele => {
      this.userDto.userProductPreference.push({
        productType: ele.productType,
        productCategory: ele.productCategory,
        productClass: ele.productClass,
        productShape: ele.productShape,
        thicknessMin: ele.thicknessMin,
        thicknessMax: ele.thicknessMax,
        widthMin: ele.widthMin,
        widthMax: ele.widthMax,
        temperMin: ele.temperMin,
        temperMax: ele.temperMax,
        lengthMin: ele.lengthMin,
        lengthMax: ele.lengthMax,
        monthlyRequirement: ele.monthlyRequirement,
        //
        hardnessMax: '',
        hardnessMin: '',
        productStage: ProductStage.PRODUCT_PREFERENCE,
        heigth: '',
        gwt: '',
        nwt: '',
        remarks: '',
        title: ''
      });
    });

    console.log(this.userDto.userProductPreference);
    // this.wizard.navigation.canGoToStep(4);
    this.wizard.navigation.goToNextStep();


  }

  keyPersonData(data: any) {
    this.userDto.keyPerson = [];
    this.userDto.keyPerson.push({
      keyPersonId: '',
      name: data.fullName1,
      designation: data.designation1,
      email1: data.email1,
      mobile1: data.mobile1,
      email2: '',
      mobile2: ''
    });
    this.userDto.keyPerson.push({
      keyPersonId: '',
      name: data.fullName2,
      designation: data.designation2,
      email1: data.email2,
      mobile1: data.mobile2,
      email2: '',
      mobile2: ''
    });
    // this.wizard.navigation.canGoToStep(5);
    this.wizard.navigation.goToNextStep();
  }

  finalSubmit() {
    this.userService.saveUser(this.userDto).subscribe(data => {
      this.userDataService.add(data);
      this.wizard.navigation.reset();
      this.router.navigate(['/users/profile', data.id]);
      this.toastrService.success('Your account created successfully!');
    }, error => {
      console.log(error);
    });
  }

}
