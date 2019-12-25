import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

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
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    mobile: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    cpassword: new FormControl("", [Validators.required]),
    userRole: new FormControl("", [Validators.required]),
    // status: new FormControl("", [Validators.required])
  });
  
  constructor() {}

  ngOnInit() {}

  personalDetailSubmit() {
    if(this.userDTO.valid) {
      this.prsonalData.emit(this.userDTO.value);
    } else {
      console.log("disable");
    }
  }
}
