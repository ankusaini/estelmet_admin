import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-other-details',
  templateUrl: './other-details.component.html',
  styleUrls: ['./other-details.component.scss']
})
export class OtherDetailsComponent implements OnInit {

  public otherDetails: FormGroup;
  @Output() outputOtherDetails: EventEmitter<any> = new EventEmitter<any>();

  constructor(private toastr: ToastrService ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.otherDetails = new FormGroup({
      gstInvoice : new FormControl('', [Validators.required]),
      loadingUnloadingCharges : new FormControl('', [Validators.required]),
      packagingCharges : new FormControl('', [Validators.required]),
      deliveryCharges : new FormControl('', [Validators.required]),
      anyOtherCharges : new FormControl('', [Validators.required]),
    })
  }

  submitDetails() {
    if(this.otherDetails.valid) {
      this.outputOtherDetails.emit(this.otherDetails.value);
    } else {
      this.toastr.error("Invalid details!");
    }
  }

}
