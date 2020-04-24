import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-co-details',
  templateUrl: './co-details.component.html',
  styleUrls: ['./co-details.component.scss']
})
export class CoDetailsComponent implements OnInit {

  public coDetails: FormGroup;
  @Output() coData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.createForm();
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
