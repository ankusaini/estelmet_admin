import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/authgaurd/user.service';
import { User } from '../../../shared/Models/user.model';
import { DualListComponent } from 'angular-dual-listbox';

@Component({
  selector: 'app-change-role',
  templateUrl: './change-role.component.html',
  styleUrls: ['./change-role.component.css']
})
export class ChangeRoleComponent implements OnInit {
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
  employeeList: User[] = [];
  constructor(private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.userService.getAllAccount().subscribe(data => this.employeeList = data);
  }

}
