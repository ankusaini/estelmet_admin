import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/Models/user.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/Validators/custom-validator';

@Component({
  selector: 'app-user-buisness',
  templateUrl: './user-buisness.component.html',
  styleUrls: ['./user-buisness.component.scss']
})
export class UserBuisnessComponent implements OnInit {

  @Input() selectedUser : User;
  @Output() check : EventEmitter<string> = new EventEmitter<string>();

  private buisnessDetailForm : FormGroup;
  public editProfile: boolean;
  public editProfileIcon: string;

  constructor(
    private _fb : FormBuilder,
  ) { 
    this.editProfile = false;
    this.editProfileIcon = "icon-edit";
  }

  ngOnInit() {
    if(this.selectedUser) {
      this.buisnessDetailForm = this._fb.group({
        companyName : new FormControl(this.selectedUser.userDetail.companyName,[Validators.required, Validators.minLength(3)]),
        address1 : new FormControl(this.selectedUser.userDetail.address1,[Validators.required,  CustomValidator.addressValidation]),
        address2 : new FormControl(this.selectedUser.userDetail.address2,[ CustomValidator.addressValidation]),
        city : new FormControl(this.selectedUser.userDetail.city,[Validators.required]),
        state : new FormControl(this.selectedUser.userDetail.state,[Validators.required]),
        pincode : new FormControl(this.selectedUser.userDetail.pinCode,[Validators.required, CustomValidator.pinCodeValidation]),
        gst : new FormControl(this.selectedUser.userDetail.gst,[Validators.required]),
        emailBusiness : new FormControl(this.selectedUser.userDetail.emailBusiness,[CustomValidator.emailValidation]),
        mobile1 : new FormControl(this.selectedUser.userDetail.mobile1,[CustomValidator.contactNumberValidation]),
      })  
    } else {
      console.log("error code");
    }    
  }

  ngAfterContentChecked(): void {
    if(this.selectedUser && this.buisnessDetailForm){
      this.selectedUser.userDetail.companyName = this.buisnessDetailForm.value.companyName;
      this.selectedUser.userDetail.address1 = this.buisnessDetailForm.value.address1;
      this.selectedUser.userDetail.address2 = this.buisnessDetailForm.value.address2;
      this.selectedUser.userDetail.city = this.buisnessDetailForm.value.city;
      this.selectedUser.userDetail.state = this.buisnessDetailForm.value.state;
      this.selectedUser.userDetail.pinCode = this.buisnessDetailForm.value.pinCode;
      this.selectedUser.userDetail.gst = this.buisnessDetailForm.value.gst;
      this.selectedUser.userDetail.emailBusiness = this.buisnessDetailForm.value.emailBusiness;
      this.selectedUser.userDetail.mobile1 = this.buisnessDetailForm.value.mobile1;
      this.check.emit(this.buisnessDetailForm.valid ? 'valid': 'invalid');

    }
   }

   get f() {
    return this.buisnessDetailForm.controls;
  }

}
