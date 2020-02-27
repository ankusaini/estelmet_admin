import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { User } from 'src/app/shared/Models/user.model';
import { SalesServiceService } from '../../services/sales-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-order-details',
  templateUrl: './customer-order-details.component.html',
  styleUrls: ['./customer-order-details.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CustomerOrderDetailsComponent implements OnInit {
  @Output() transportData: EventEmitter<any> = new EventEmitter<any>(); 
  transportDetailsForm: FormGroup;
  customerList: User[];
  transportList: User[];

  constructor(
    private salesService: SalesServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.createTransportForm();
    this.getCustomerList();
    this.getTransportList();
  }

  createTransportForm() {
    this.transportDetailsForm = new FormGroup({
      customerId: new FormControl("", [Validators.required]),
      transportId: new FormControl("", [Validators.required]),
      expectedDate: new FormControl(""),
      netWt: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),      
      grossWt: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
      coilsBundle: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
      materialDescription: new FormControl("", [Validators.minLength(3)]), 
      lorryNumber: new FormControl("", [CustomValidator.alphanumericSpecialCharacterValidate]),
      lorryType: new FormControl("")
    });
  }

  get f() {
    return this.transportDetailsForm.controls;
  }

  getCustomerList() {
    let url = "/users/getAllUsersByUserRoleAndStatus/CUSTOMER/APPROVED";
    this.salesService.getAllUsersByUserRoleAndStatus(url).subscribe(
      data => {
        this.customerList = data;
        console.log(this.customerList)
      }, error=> {
        console.log(error);
      }
    )
  }

  getTransportList() {
    let url = "/users/getAllUsersByUserRoleAndStatus/TRANSPORTER/APPROVED";
    this.salesService.getAllUsersByUserRoleAndStatus(url).subscribe(
      data => {
        this.transportList = data;
        console.log(this.transportList)
      }, error => {
        console.log(error);
      }
    )
  }

  submitTransportData() {
    if(this.transportDetailsForm.valid) {
      this.transportData.emit(this.transportDetailsForm.value);
    }else {
      this.toastr.error("Error! Invalid Data.")
    }
  }

}
