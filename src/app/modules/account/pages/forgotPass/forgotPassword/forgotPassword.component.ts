import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public enterOTP: boolean = false;

  public otpForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required])
  });

  public verifyOtpForm: FormGroup = new FormGroup({
    otp: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private _userService : UserService,
    private toastr: ToastrService,
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  SendOTP() {
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
          this.enterOTP = true;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.toastr.error("Enter Email and Mobile No.")
    }
  }

  

  changePwd() {
    if(this.verifyOtpForm.valid) {
      let url = "/forgetPassword?mobile=" +
      this.otpForm.value.mobile + "&otp=" +
      this.verifyOtpForm.value.otp;

      const body = {
        newPassword: this.verifyOtpForm.value.newPassword,
        confirmPassword: this.verifyOtpForm.value.confirmPassword
      };

      this._userService.forgetPassword(url, body).subscribe(
        data => {
          console.log(data);
          this.toastr.success("Password successfully changed!");
          this.router.navigateByUrl('/account/login');
        }, error=> {
          console.log(error);
        }
      )
    } else {
      this.toastr.error("Enter all Fields");
    }
    
  }

  resendOTP() {
    this.verifyOtpForm.reset();
    let url = '/common/resendOtp?number=' + this.otpForm.value.mobile;
    this._userService.sendOTP(url).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    ) 
  }

}
