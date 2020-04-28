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
import { SelectModule } from 'ng-select';
import {AngularDualListBoxModule} from 'angular-dual-listbox';
import { SearchPriceComponent } from './search-price/search-price.component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AssignUserComponent } from './assign-user/assign-user.component';

@NgModule({
  imports: [
    CommonModule,
    SuperRoutingModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule,
    SelectModule,
    AngularDualListBoxModule,
    FileUploadModule,
  ],
  declarations: [
    AddPriceComponent,
    CustomerCreditLimitComponent,
    AddEmployeeComponent,
    ChangeRoleComponent,
    SearchPriceComponent,
    SearchEmployeeComponent,
    AssignUserComponent
  ]
})
export class SuperModule { }
