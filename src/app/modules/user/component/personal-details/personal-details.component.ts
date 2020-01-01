import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { CustomValidator } from "src/app/Validators/custom-validator";
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
  
  @Output() prsonalData : EventEmitter<any> = new EventEmitter<any>();

  userDTO = new FormGroup({
    // this.utils.noWhitespaceValidator,CustomValidator.emailValidate
    id: new FormControl(""),
    firstName: new FormControl("", [Validators.required,Validators.minLength(2)]),
    lastName: new FormControl("", [Validators.required,Validators.minLength(2)]),
    mobile: new FormControl("", [Validators.required,   CustomValidator.contactNumberValidation]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required,Validators.minLength(8),
      Validators.maxLength(20)]),
    cpassword: new FormControl("", [Validators.required,passwordConfirming]),
    userRole: new FormControl("", [Validators.required]),
    // status: new FormControl("", [Validators.required])
  });
  
  constructor() {}

  get f()
  {
    return this.userDTO.controls;
  }
  ngOnInit() {}

  personalDetailSubmit() {
    if(this.userDTO.valid) {
      this.prsonalData.emit(this.userDTO.value);
    } else {
      console.log("disable");
    }
  }
}
