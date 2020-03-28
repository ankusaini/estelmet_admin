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
        companyName : new FormControl(this.selectedUser.businessDetails.companyName,[Validators.required, Validators.minLength(3)]),
        address1 : new FormControl(this.selectedUser.businessDetails.address1,[Validators.required,  CustomValidator.addressValidation]),
        address2 : new FormControl(this.selectedUser.businessDetails.address2,[ CustomValidator.addressValidation]),
        city : new FormControl(this.selectedUser.businessDetails.city,[Validators.required]),
        state : new FormControl(this.selectedUser.businessDetails.state,[Validators.required]),
        pincode : new FormControl(this.selectedUser.businessDetails.pinCode,[Validators.required, CustomValidator.pinCodeValidation]),
        gst : new FormControl(this.selectedUser.businessDetails.gst,[Validators.required]),
        emailBusiness : new FormControl(this.selectedUser.businessDetails.businessEmail,[CustomValidator.emailValidation]),
        mobile1 : new FormControl(this.selectedUser.businessDetails.mobile,[CustomValidator.contactNumberValidation]),
      })  
    } else {
      console.log("error code");
    }    
  }

  ngAfterContentChecked(): void {
    if(this.selectedUser && this.buisnessDetailForm){
      this.selectedUser.businessDetails.companyName = this.buisnessDetailForm.value.companyName;
      this.selectedUser.businessDetails.address1 = this.buisnessDetailForm.value.address1;
      this.selectedUser.businessDetails.address2 = this.buisnessDetailForm.value.address2;
      this.selectedUser.businessDetails.city = this.buisnessDetailForm.value.city;
      this.selectedUser.businessDetails.state = this.buisnessDetailForm.value.state;
      this.selectedUser.businessDetails.pinCode = this.buisnessDetailForm.value.pinCode;
      this.selectedUser.businessDetails.gst = this.buisnessDetailForm.value.gst;
      this.selectedUser.businessDetails.businessEmail = this.buisnessDetailForm.value.emailBusiness;
      this.selectedUser.businessDetails.mobile = this.buisnessDetailForm.value.mobile1;
      this.check.emit(this.buisnessDetailForm.valid ? 'valid': 'invalid');

    }
   }

   get f() {
    return this.buisnessDetailForm.controls;
  }

}
