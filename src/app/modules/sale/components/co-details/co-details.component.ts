import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerOrder } from 'src/app/shared/Models/customer-order.model';

@Component({
  selector: 'app-co-details',
  templateUrl: './co-details.component.html',
  styleUrls: ['./co-details.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CoDetailsComponent implements OnInit, OnChanges {

  public coDetails: FormGroup;
  @Output() coData: EventEmitter<any> = new EventEmitter<any>();
  @Input() custumerOrderData: CustomerOrder;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.createForm();
    if(this.custumerOrderData) {
      this.coDetails.patchValue(this.custumerOrderData);
    }
  }

  ngOnChanges() {
    if(this.custumerOrderData) {
      this.coDetails.patchValue(this.custumerOrderData);
    }
  }

  createForm() {
    this.coDetails = new FormGroup({
      customerOrderNo : new FormControl('', [Validators.required]),
      customerOrderDate : new FormControl('', [Validators.required]),
      customerOrderValidity : new FormControl('', [Validators.required]),
    });
  }

  submitCoDetails() {
    if(this.coDetails.valid) {
      this.coData.emit(this.coDetails.value);
    } else {
      this.toastr.error("Invalid Details!");
    }
  }

  get f() {
    return this.coDetails.controls;
  }

}
