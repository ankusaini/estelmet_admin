import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-keyperson-details",
  templateUrl: "./keyperson-details.component.html",
  styleUrls: ["./keyperson-details.component.scss"]
})
export class KeypersonDetailsComponent implements OnInit {

  @Output() key_person : EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  keyPersonDetails = new FormGroup({
    keyPersonId1: new FormControl("", ),
    keyPersonId2: new FormControl("", ),
    fullName1: new FormControl("", [Validators.required]),
    fullName2: new FormControl("", [Validators.required]),
    designation1: new FormControl("", [Validators.required]),
    designation2: new FormControl("", [Validators.required]),
    mobile1: new FormControl("", [Validators.required]),
    mobile2: new FormControl("", [Validators.required]),
    email1: new FormControl("", [Validators.required]),
    email2: new FormControl("", [Validators.required])
  });

  keyPersonDetailSubmit() {
    if(this.keyPersonDetails.status == 'VALID') {
      this.key_person.emit(this.keyPersonDetails.value);
    } else {
      console.log("keyPersonDetailSubmit", this.keyPersonDetails);
    }
  }
}
