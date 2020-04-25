import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperRoutingModule } from './super-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPriceComponent } from './add-price/add-price.component';
import { CustomerCreditLimitComponent } from './customer-credit-limit/customer-credit-limit.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ChangeRoleComponent } from './change-role/change-role.component';

@NgModule({
  imports: [
    CommonModule,
    SuperRoutingModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule
  ],
  declarations: [
    AddPriceComponent,
    CustomerCreditLimitComponent,
    AddEmployeeComponent,
    ChangeRoleComponent
  ]
})
export class SuperModule { }
