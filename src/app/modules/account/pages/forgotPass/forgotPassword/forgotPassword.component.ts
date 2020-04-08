import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public enterOTP = false;

  public otpForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required])
  });

  public verifyOtpForm: FormGroup = new FormGroup({
    otp: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  SendOTP() {
    // localhost:8020/estelmet/common/sendOtp?number=8860974843&email=ajay@gmail.com"
    if (
      this.otpForm.controls.mobile.value !== '' &&
      this.otpForm.controls.email.value !== ''
    ) {
      const mobile = this.otpForm.controls.mobile.value;
      const email = this.otpForm.controls.email.value;
      this.userService.sendOTP(mobile, email).subscribe(
        () => {
          this.enterOTP = true;
        },
        () => {
          this.toastr.error('Enter Email and Mobile No.');
        }
      );
    } else {
      this.toastr.error('Enter Email and Mobile No.');
    }
  }



  changePwd() {
    if (this.verifyOtpForm.valid) {
      const url = '/forgetPassword?mobile=' +
        this.otpForm.value.mobile + '&otp=' +
        this.verifyOtpForm.value.otp;

      const body = {
        newPassword: this.verifyOtpForm.value.newPassword,
        confirmPassword: this.verifyOtpForm.value.confirmPassword
      };

      this.userService.forgetPassword(url, body).subscribe(
        data => {
          this.toastr.success('Password successfully changed!');
          this.router.navigateByUrl('/account/login');
        }, error => {
          this.toastr.error('Enter Email and Mobile No.');
        }
      );
    } else {
      this.toastr.error('Enter all Fields');
    }

  }

  resendOTP() {
    this.verifyOtpForm.reset();
    const mobile = this.otpForm.controls.mobile.value;
    const email = this.otpForm.controls.email.value;
    this.userService.sendOTP(mobile, email).subscribe();
  }

}
