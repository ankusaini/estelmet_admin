import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-processing',
  templateUrl: './select-processing.component.html',
  styleUrls: ['./select-processing.component.scss']
})
export class SelectProcessingComponent implements OnInit {

  @Input() processingIdList: any[];
  @Input() processingType: string;
  @Output() selectedProcessingId : EventEmitter<any> = new EventEmitter<any>();

  selectProcessingIdForm: FormGroup;


  constructor() { }

  ngOnInit() {
    // console.log("in select processing ",this.processingIdList);
    this.selectProcessingIdForm = new FormGroup({
      processingId: new FormControl("", [Validators.required])
    });
  }

  submitProcessingId() {
    console.log(this.selectProcessingIdForm.value);
    this.selectedProcessingId.emit(this.selectProcessingIdForm.value);
  }

}
