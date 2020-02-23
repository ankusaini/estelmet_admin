import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { ToastrService } from 'ngx-toastr';

function MaxwidthConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minWidth = (c.parent.get("widthMin"));
  const maxWidth = (c.parent.get("widthMax"));
  if(!maxWidth || ! minWidth) return;
  if(maxWidth.value < minWidth.value) {
    return { invalid: true};
  } 
}

function MaxthicknessConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minThickness = (c.parent.get("thicknessMin"));
  const maxThickness = (c.parent.get("thicknessMax"));
  if(!maxThickness || ! minThickness) return;
  if(maxThickness.value < minThickness.value) {
    return { invalid: true};
  } 
}
@Component({
  selector: 'app-other-details-tradelead',
  templateUrl: './other-details-tradelead.component.html',
  styleUrls: ['./other-details-tradelead.component.scss']
})
export class OtherDetailsTradeleadComponent implements OnInit {
  @Output() otherDetailsData: EventEmitter<any> = new EventEmitter<any>();
  otherDeatilsForm: FormGroup;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.otherDeatilsForm = new FormGroup({
      grossQuantity: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
      location: new FormControl("", [Validators.required]),
      thicknessMin: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
      thicknessMax: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxthicknessConfirming]),
      widthMin: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
      widthMax: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxwidthConfirming])
    });
  }

  submitOtherDetailsForm() {
    if(this.otherDeatilsForm.valid) {
      this.otherDetailsData.emit(this.otherDeatilsForm.value);
    }else {
      this.toastr.error("Error! Invalid Details!");
    }
  }

  get f() {
    return this.otherDeatilsForm.controls;
  }

}
