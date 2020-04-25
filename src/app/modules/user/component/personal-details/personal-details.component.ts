import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';
import { CustomValidator } from 'src/app/Validators/custom-validator';


function passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) { return; }
  const pwd = c.parent.get('password');
  const cpwd = c.parent.get('cpassword');
  if (!pwd || !cpwd) { return; }
  if (pwd.value !== cpwd.value) {
    return { invalid: true };
  }
}
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  @Output() prsonalData: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedRole :EventEmitter<any> = new EventEmitter<any>();
  bodyText: string;
  otp: number = null;
  enterOTP = false;
  markAsComplete = false;

  userDTO = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    mobile: new FormControl('', [
      Validators.required,
      CustomValidator.contactNumberValidation
    ]),
    email: new FormControl('', [
      Validators.required,
      CustomValidator.emailValidation
    ]),
    password: new FormControl('', [Validators.required]), // ,CustomValidator.passwordValidation
    cpassword: new FormControl('', [Validators.required, passwordConfirming]),
    userRole: new FormControl('', [Validators.required]),
    otp: new FormControl(),
  });

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  get f() {
    return this.userDTO.controls;
  }

  personalDetailSubmit() {
    if (this.userDTO.valid) {
      this.prsonalData.emit(this.userDTO.value);
    } else {
      this.toastrService.error('Details are invalid!');
    }

  }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  SendOTP() {
    this.enterOTP = true;
    if (
      this.userDTO.controls.mobile.value !== '' &&
      this.userDTO.controls.email.value !== ''
    ) {
      const mobile = this.userDTO.controls.mobile.value;
      const email = this.userDTO.controls.email.value;
      this.userService.sendOTP(mobile, email).subscribe(
        data => {
          if (data.message === 'Success') {
            this.toastrService.success('OTP sent successfully.');
          } else {
            this.toastrService.error('Error sending OTP.');
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  verifyOTP() {
    if (!this.userDTO.controls.otp.value) {
      this.toastrService.error('Invalid OTP');
      return;
    }
    const mobile = this.userDTO.controls.mobile.value;
    const otp = this.userDTO.controls.otp.value;
    this.userService.verifyOtp(mobile, otp).subscribe(
      data => {
        if (data.message === 'Success') {
          this.markAsComplete = true;
          this.toastrService.success('OTP verified');
        } else {
          this.toastrService.error('Invalid OTP');
        }
      },
      error => {
        this.toastrService.error('Invalid OTP');
      }
    );
  }

  checkEmail() {
    this.userService.existsByEmailId(this.userDTO.value.email).subscribe(
      data => {
        if (data.data) {
          this.userDTO.get('email').setValue('');
          this.toastrService.error('Email Already Exists');
        }
      }
    );
  }


  getSelectedUser(event)
  {
    console.log(event);
    this.selectedRole.emit(event);
  }
}
