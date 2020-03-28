import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public otpForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required])
  });
  constructor(private _userService : UserService,) { }

  ngOnInit() {
  }

  SendOTP() {
    // this.enterOTP = true;
    // localhost:8020/estelmet/common/sendOtp?number=8860974843&email=ajay@gmail.com"
    if (
      this.otpForm.controls.mobile.value != "" &&
      this.otpForm.controls.email.value != ""
    ) {
      let url = "/common/sendOtp?number=" +
       this.otpForm.controls.mobile.value + 
       "&email=" + this.otpForm.controls.email.value;
      // let url =
      //   "/users/sendOtp/" +
      //   this.otpForm.controls.mobile.value +
      //   "/" +
      //   this.otpForm.controls.email.value;
        console.log(url);
      this._userService.sendOTP(url).subscribe(
        data => {
          console.log(data);
        },
        error => {}
      );
    }
  }

}
