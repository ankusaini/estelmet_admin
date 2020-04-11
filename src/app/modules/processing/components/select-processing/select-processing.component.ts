import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ids } from 'src/app/shared/Models/ids.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-processing',
  templateUrl: './select-processing.component.html',
  styleUrls: ['./select-processing.component.scss']
})
export class SelectProcessingComponent implements OnInit {

  @Input() processingIdList: any[];
  public Ids: any;
  @Input() processingType: string;
  @Output() selectedProcessingId: EventEmitter<any> = new EventEmitter<any>();

  selectProcessingIdForm: FormGroup;


  constructor(private toastr: ToastrService) {
    this.Ids = ids;
   }

  ngOnInit() {
    this.selectProcessingIdForm = new FormGroup({
      processingId: new FormControl('', [Validators.required])
    });
  }

  submitProcessingId() {
    if(this.selectProcessingIdForm.valid) {
      this.selectedProcessingId.emit(this.selectProcessingIdForm.value);
    } else {
      this.toastr.error("Please select Id!");
    }
  }

}
