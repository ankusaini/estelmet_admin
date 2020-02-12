import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';

import { CustomValidator } from "src/app/Validators/custom-validator";

import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
function passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) return;
  const pwd = c.parent.get("password");
  const cpwd = c.parent.get("cpassword");
  if (!pwd || !cpwd) return;
  if (pwd.value !== cpwd.value) {
    return { invalid: true };
  }
}
@Component({
  selector: "app-personal-details",
  templateUrl: "./personal-details.component.html",
  styleUrls: ["./personal-details.component.scss"]
})
export class PersonalDetailsComponent implements OnInit {

      //public fileUploadControl = new FileUploadControl(FileUploadValidators.filesLimit(1));

  public uploadedFiles: Array<File> = [];
  @Output() prsonalData : EventEmitter<any> = new EventEmitter<any>();
  @Output() imageData:EventEmitter<any>=new EventEmitter<any>();
  bodyText : string;
  otp : number = null;
  enterOTP : boolean = false;
  markAsComplete : boolean = false;

  userDTO = new FormGroup({
    // this.utils.noWhitespaceValidator,CustomValidator.emailValidate
    id: new FormControl(""),
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(2)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(2)
    ]),
    mobile: new FormControl("", [
      Validators.required,
      CustomValidator.contactNumberValidation
    ]),
    email: new FormControl("", [
      Validators.required, 
      CustomValidator.emailValidation
    ]),
    password: new FormControl("", [Validators.required]), //,CustomValidator.passwordValidation
    cpassword: new FormControl("", [Validators.required,passwordConfirming]),
    userRole: new FormControl("", [Validators.required]),
    // otp: new FormControl("", [Validators.required]),
     otp: new FormControl(""),
    // status: new FormControl("", [Validators.required])
  });
  
  constructor(
    private _userService : UserService,
    private toastrService: ToastrService
  ) {}

  get f() {
    return this.userDTO.controls;
  }

  personalDetailSubmit() {
    console.log("uploadfile",this.uploadedFiles);
     if (this.userDTO.valid) {
       this.prsonalData.emit(this.userDTO.value);
       this.imageData.emit(this.uploadedFiles);
     } else {
      this.toastrService.error("Details are invalid!");

     }

    //let path ="/uploadImage/user/"+22;
    //  this._userService.uploadImage(this.uploadedFiles[0],path).subscribe(res=>{
   //      console.log("image uploaded")
   //   },error=>{

   //   })
  }

  uploadPhoto()
  {
    if(this.uploadedFiles[0]){
      console.log("files",this.uploadedFiles[0]);
      let path ="/uploadImage/user/"+22;
      this._userService.uploadImage(this.uploadedFiles[0],path).subscribe(res=>{
          console.log("image uploaded")
      },error=>{

      })
    } else {
      this.toastrService.error("Upload photo!");
    }

  }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  // openModal(id: string) {
  //   this.modalService.open(id);
  // }

  // closeModal(id: string) {
  //   this.nextStep = true;
  //   this.modalService.close(id);
  // }
  SendOTP() {
    this.enterOTP = true;
    if (
      this.userDTO.controls.mobile.value != "" &&
      this.userDTO.controls.email.value != ""
    ) {
      let url =
        "/users/sendOtp/" +
        this.userDTO.controls.mobile.value +
        "/" +
        this.userDTO.controls.email.value;
      this._userService.sendOTP(url).subscribe(
        data => {
          console.log(data);
        },
        error => {}
      );
    }
  }

  verifyOTP() {
    let url =
    "/users/verifyOtp/" +
    this.userDTO.controls.mobile.value + 
    "/" +
    this.userDTO.controls.otp.value;
  this._userService.sendOTP(url).subscribe(
    data => {
     console.log(data);
     if(data.message=='otp_verified')
      {
     this.markAsComplete = true;
      }
    else
      {
        alert("Invalid OTP")
      }
    },
    error => {}
  );
  }

  


}
