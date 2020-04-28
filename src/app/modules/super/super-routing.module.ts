import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPriceComponent } from './add-price/add-price.component';
import { CustomerCreditLimitComponent } from './customer-credit-limit/customer-credit-limit.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ChangeRoleComponent } from './change-role/change-role.component';
import { SearchPriceComponent } from './search-price/search-price.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AssignUserComponent } from './assign-user/assign-user.component';

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
  {
    path: 'searchprice',
    component: SearchPriceComponent
  },
  {
    path: 'searchemployee',
    component: SearchEmployeeComponent
  },
  {
    path: 'assignuser',
    component: AssignUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperRoutingModule { }
