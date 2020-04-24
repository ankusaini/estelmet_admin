import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { UserRole, Status, UserMini } from '../../../shared/Models/user.model';

@Component({
  selector: 'app-create-sales-lead',
  templateUrl: './create-sales-lead.component.html',
  styleUrls: ['./create-sales-lead.component.css']
})
export class CreateSalesLeadComponent implements OnInit {

  public salesLeadForm: FormGroup = new FormGroup({
    customerOrderId: new FormControl(''),
    sellerCompanyName : new FormControl('', [Validators.required]),
    sellerAddress : new FormControl('', [Validators.required]),
    sellerPANNo : new FormControl('', [Validators.required]),
    sellerGSTNo : new FormControl('', [Validators.required]),
    sellerStateCode : new FormControl('', [Validators.required]),
    buyerCompanyName : new FormControl('', [Validators.required]),
    buyerAddress : new FormControl('', [Validators.required]),
    buyerPANNo : new FormControl('', [Validators.required]),
    buyerGSTNo : new FormControl('', [Validators.required]),
    buyerStateCode : new FormControl('', [Validators.required]),
    customerOrderNo : new FormControl('', [Validators.required]),
    customerOrderDate : new FormControl('', [Validators.required]),
    customerOrderValidity : new FormControl('', [Validators.required]),
    salesId: new FormControl('', [Validators.required]),
    gstInvoice : new FormControl('', [Validators.required]),
    loadingUnloadingCharges : new FormControl('', [Validators.required]),
    packagingCharges : new FormControl('', [Validators.required]),
    deliveryCharges : new FormControl('', [Validators.required]),
    anyOtherCharges : new FormControl('', [Validators.required]),
    modeofPayment : new FormControl('', [Validators.required]),
    paymentTerms : new FormControl('', [Validators.required]),
    creditLimit : new FormControl('', [Validators.required]),
    currentOutstanding : new FormControl('', [Validators.required]),
    contactPersonName : new FormControl('', [Validators.required]),
    contactPersonNumber : new FormControl('', [Validators.required]),
    contactPersonWNumber: new FormControl('', [Validators.required]),
    contactPersonEmail: new FormControl('', [Validators.required]),
  });
  userMini: UserMini[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUserByUserNameAndCompany(UserRole.CUSTOMER, Status.APPROVED).subscribe(
      data => this.userMini = data
    );
  }

  get f() {
    return this.salesLeadForm.controls;
  }

}
