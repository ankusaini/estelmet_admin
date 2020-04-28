import { Component, OnInit } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';

@Component({
  selector: 'app-assign-user',
  templateUrl: './assign-user.component.html',
  styleUrls: ['./assign-user.component.css']
})
export class AssignUserComponent implements OnInit {
  keepSorted = true;
  key = 'key';
  display = 'value';
  filter = false;
  confirmed: Array<any> = [
    { key: 1, value: 'ROLE_SUPER_ADMIN' },
    { key: 2, value: 'ROLE_USER_ADMIN' },
    { key: 6, value: 'ROLE_PURCHASE_APPROVER' },
    { key: 7, value: 'ROLE_PURCHASE_EXECUTOR' },
  ];
  disabled = false;
  format: any = DualListComponent.DEFAULT_FORMAT;
  source: Array<any> = [
    { key: 1, value: 'ROLE_SUPER_ADMIN' },
    { key: 2, value: 'ROLE_USER_ADMIN' },
    { key: 3, value: 'ROLE_USER_APPROVER' },
    { key: 4, value: 'ROLE_USER_EXECUTOR' },
    { key: 5, value: 'ROLE_PURCHASE_ADMIN' },
    { key: 6, value: 'ROLE_PURCHASE_APPROVER' },
    { key: 7, value: 'ROLE_PURCHASE_EXECUTOR' },
    { key: 8, value: 'ROLE_INVENTORY_ADMIN' },
    { key: 9, value: 'ROLE_INVENTORY_APPROVER' },
    { key: 10, value: 'ROLE_INVENTORY_EXECUTOR' },
    { key: 11, value: 'ROLE_SALES_ADMIN' },
    { key: 12, value: 'ROLE_SALES_APPROVER' },
    { key: 13, value: 'ROLE_SALES_EXECUTOR' },
    { key: 14, value: 'ROLE_WEBSITE_ADMIN' },
    { key: 15, value: 'ROLE_CUSTOMER' },
    { key: 16, value: 'ROLE_SUPPLIER' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
