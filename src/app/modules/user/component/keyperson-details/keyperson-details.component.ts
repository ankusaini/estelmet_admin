import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from 'src/app/Validators/custom-validator';

@Component({
  selector: "app-keyperson-details",
  templateUrl: "./keyperson-details.component.html",
  styleUrls: ["./keyperson-details.component.scss"]
})
export class KeypersonDetailsComponent implements OnInit {

  @Output() key_person : EventEmitter<any> = new EventEmitter<any>();

  constructor(private toastrService: ToastrService) {}

  ngOnInit() {}

  keyPersonDetails = new FormGroup({
    keyPersonId1: new FormControl("", ),
    keyPersonId2: new FormControl("", ),
    fullName1: new FormControl("", [Validators.required, Validators.minLength(3)]),
    fullName2: new FormControl("", [Validators.required, Validators.minLength(3)]),
    designation1: new FormControl("", [Validators.required]),
    designation2: new FormControl("", [Validators.required]),
    mobile1: new FormControl("", [Validators.required, CustomValidator.contactNumberValidation]),
    mobile2: new FormControl("", [Validators.required, CustomValidator.contactNumberValidation]),
    email1: new FormControl("", [Validators.required, CustomValidator.emailValidation]),
    email2: new FormControl("", [Validators.required, CustomValidator.emailValidation])
  });

  keyPersonDetailSubmit() {
    if(this.keyPersonDetails.valid) {
      this.key_person.emit(this.keyPersonDetails.value);
    } else {
      // console.log("keyPersonDetailSubmit", this.keyPersonDetails);
      this.toastrService.error("Details are invalid!");
    }
  }

  get f()
  {
   return this.keyPersonDetails.controls;
  }
}
