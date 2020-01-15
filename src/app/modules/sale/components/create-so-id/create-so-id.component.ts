import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-so-id',
  templateUrl: './create-so-id.component.html',
  styleUrls: ['./create-so-id.component.scss']
})
export class CreateSoIdComponent implements OnInit {

  @Output() createSoId: EventEmitter<any> = new EventEmitter<any>();

  salesDto = new FormGroup({
    id : new FormControl(""),
    companyName: new FormControl("", [Validators.required]),
    warehouseName: new FormControl("", [Validators.required]),
    productCategory: new FormControl("", [Validators.required]),
    productShape: new FormControl("", [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  get f()
  {
    return this.salesDto.controls;
  }

  createSoIdSubmit() {
    if(this.salesDto.valid) {
      this.createSoId.emit(this.salesDto.value);
    }
  }

}
