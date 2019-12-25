import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.scss']
})
export class CreateTypeComponent implements OnInit {

  constructor() { }

    userDTO = new FormGroup({
    // this.utils.noWhitespaceValidator,CustomValidator.emailValidate
    id: new FormControl(""),
    productType: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required]),
  });

  ngOnInit() {
  }

}
