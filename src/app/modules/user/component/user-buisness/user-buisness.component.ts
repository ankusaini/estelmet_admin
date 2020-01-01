import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/Models/user.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-buisness',
  templateUrl: './user-buisness.component.html',
  styleUrls: ['./user-buisness.component.scss']
})
export class UserBuisnessComponent implements OnInit {

  @Input() selectedUser : User;
  private buisnessDetailForm : FormGroup

  constructor(
    private _fb : FormBuilder,
  ) { }

  ngOnInit() {
    if(this.selectedUser) {
      this.buisnessDetailForm = this._fb.group({
        companyName : new FormControl(this.selectedUser.userDetail.companyName,[Validators.required]),
        address1 : new FormControl(this.selectedUser.userDetail.address1,[Validators.required]),
        address2 : new FormControl(this.selectedUser.userDetail.address2,[Validators.required]),
        city : new FormControl(this.selectedUser.userDetail.city,[Validators.required]),
        state : new FormControl(this.selectedUser.userDetail.state,[Validators.required]),
        pincode : new FormControl(this.selectedUser.userDetail.pinCode,[Validators.required]),
        gst : new FormControl(this.selectedUser.userDetail.gst,[Validators.required]),
        emailBusiness : new FormControl(this.selectedUser.userDetail.emailBusiness,[Validators.required]),
        mobile1 : new FormControl(this.selectedUser.userDetail.mobile1,[Validators.required]),
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
    }
   }

}
