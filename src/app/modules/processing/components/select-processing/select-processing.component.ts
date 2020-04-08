import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-processing',
  templateUrl: './select-processing.component.html',
  styleUrls: ['./select-processing.component.scss']
})
export class SelectProcessingComponent implements OnInit {

  @Input() processingIdList: any[];
  @Input() processingType: string;
  @Output() selectedProcessingId: EventEmitter<any> = new EventEmitter<any>();

  selectProcessingIdForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.selectProcessingIdForm = new FormGroup({
      processingId: new FormControl('', [Validators.required])
    });
  }

  submitProcessingId() {
    this.selectedProcessingId.emit(this.selectProcessingIdForm.value);
  }

}
