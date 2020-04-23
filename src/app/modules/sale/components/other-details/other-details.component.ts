import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/Validators/custom-validator';

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
      loadingUnloadingCharges : new FormControl('', [Validators.required, CustomValidator.compondValueValidate]),
      packagingCharges : new FormControl('', [Validators.required, CustomValidator.compondValueValidate]),
      deliveryCharges : new FormControl('', [Validators.required, CustomValidator.compondValueValidate]),
      anyOtherCharges : new FormControl('', [Validators.required, CustomValidator.compondValueValidate]),
      // 
      contactPersonName : new FormControl('', [Validators.required, Validators.minLength(3)]),
      contactPersonNumber : new FormControl('', [Validators.required, CustomValidator.contactNumberValidation]),
      contactPersonWNumber: new FormControl('', [Validators.required, CustomValidator.contactNumberValidation]),
      contactPersonEmail: new FormControl('', [Validators.required, Validators.email]),
      // 
      modeofPayment : new FormControl('', [Validators.required]),
      paymentTerms : new FormControl('', [Validators.required]),
      creditLimit : new FormControl('', [Validators.required]),
      currentOutstanding : new FormControl('', [Validators.required]),
      
    })
  }

  submitDetails() {
    if(this.otherDetails.valid) {
      this.outputOtherDetails.emit(this.otherDetails.value);
    } else {
      this.toastr.error("Invalid details!");
    }
  }

  get f() {
    return this.otherDetails.controls;
  }
}
