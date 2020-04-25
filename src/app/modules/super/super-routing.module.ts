import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPriceComponent } from './add-price/add-price.component';
import { CustomerCreditLimitComponent } from './customer-credit-limit/customer-credit-limit.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ChangeRoleComponent } from './change-role/change-role.component';

const routes: Routes = [
  {
    path: 'addPrice',
    component: AddPriceComponent
  },
  {
    path: 'creditLimit',
    component: CustomerCreditLimitComponent
  },
  {
    path: 'addemployee',
    component: AddEmployeeComponent
  },
  {
    path: 'changerole',
    component: ChangeRoleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperRoutingModule { }
