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
  });
  customer: UserMini[];
  broker: UserMini[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUserByUserNameAndCompany(UserRole.CUSTOMER, Status.APPROVED).subscribe(
      data => this.customer = data
    );
    this.userService.getAllUserByUserNameAndCompany(UserRole.AGENT, Status.APPROVED).subscribe(
      data => this.broker = data
    );
  }

  get f() {
    return this.salesLeadForm.controls;
  }

}
