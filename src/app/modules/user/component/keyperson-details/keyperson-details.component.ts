import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-keyperson-details',
  templateUrl: './keyperson-details.component.html',
  styleUrls: ['./keyperson-details.component.scss']
})
export class KeypersonDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  keyPersonDetails = new FormGroup({
      keyPersonId1: new FormControl("", [Validators.required]),
      keyPersonId2: new FormControl("", [Validators.required]),
      fullName1: new FormControl("", [Validators.required]),
      fullName2: new FormControl("", [Validators.required]),
      designation1: new FormControl("", [Validators.required]),
      designation2: new FormControl("", [Validators.required]),
      mobile1: new FormControl("", [Validators.required]),
      mobile2: new FormControl("", [Validators.required]),
      email1: new FormControl("", [Validators.required]),
      email2: new FormControl("", [Validators.required])
        });

        keyPersonDetailSubmit()
        {
          console.log("keyPersonDetailSubmit",this.keyPersonDetails)
        }
}
