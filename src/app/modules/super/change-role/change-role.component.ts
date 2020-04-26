import { Component, OnInit } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';

@Component({
  selector: 'app-change-role',
  templateUrl: './change-role.component.html',
  styleUrls: ['./change-role.component.css']
})
export class ChangeRoleComponent implements OnInit {
  
  simpleOption = [
    { vlaue: "INVENTORY_CREATE_PRIVILEGE", label: "INVENTORY_CREATE_PRIVILEGE" },
    { vlaue: "INVENTORY_DELETE_PRIVILEGE", label: "INVENTORY_DELETE_PRIVILEGE" },
    { vlaue:  "INVENTORY_UPDATE_PRIVILEGE", label:  "INVENTORY_UPDATE_PRIVILEGE" },
    { vlaue: "PURCHASE_CREATE_PRIVILEGE", label: "PURCHASE_CREATE_PRIVILEGE" },
    { vlaue: "PURCHASE_DELETE_PRIVILEGE", label: "PURCHASE_DELETE_PRIVILEGE" },
    { vlaue: "PURCHASE_UPDATE_PRIVILEGE", label: "PURCHASE_UPDATE_PRIVILEGE" },
    { vlaue: "SALES_CREATE_PRIVILEGE", label: "SALES_CREATE_PRIVILEGE" },
    { vlaue: "SALES_DELETE_PRIVILEGE", label: "SALES_DELETE_PRIVILEGE" },
    { vlaue: "SALES_UPDATE_PRIVILEGE", label: "SALES_UPDATE_PRIVILEGE" },
    { vlaue: "SUPPLIER_PRIVILEGE", label: "SUPPLIER_PRIVILEGE" },
    { vlaue: "USER_CREATE_PRIVILEGE", label: "USER_CREATE_PRIVILEGE" },
    { vlaue: "USER_DELETE_PRIVILEGE", label: "USER_DELETE_PRIVILEGE" },
    { vlaue: "USER_UPDATE_PRIVILEGE", label: "USER_UPDATE_PRIVILEGE" },
    { vlaue: "WEBSITE_CREATE_PRIVILEGE", label: "WEBSITE_CREATE_PRIVILEGE" },
    { vlaue:  "WEBSITE_DELETE_PRIVILEGE", label:  "WEBSITE_DELETE_PRIVILEGE" },
    { vlaue: "WEBSITE_UPDATE_PRIVILEGE", label: "WEBSITE_UPDATE_PRIVILEGE" },
  ]
  constructor() { }

  ngOnInit() {
  }

}
