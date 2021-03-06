import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMRComponent } from "src/app/modules/purchase/pages/mr/view-mr/view-mr.component";
import { CreateMRComponent } from "src/app/modules/purchase/pages/mr/create-mr/create-mr.component";
import { ArchwizardModule } from "ng2-archwizard/dist";
import { ShareModule } from "src/app/shared/shared.module";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { PurchaseModule } from "src/app/modules/purchase/purchase.module";
import { MrApporvalComponent } from './mr-apporval/mr-apporval.component';
import { NgbTabsetModule } from "@ng-bootstrap/ng-bootstrap";
import { MrEditComponent } from './mr-edit/mr-edit.component';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [CreateMRComponent,ViewMRComponent, MrApporvalComponent, MrEditComponent],
  imports: [
    CommonModule,
    ArchwizardModule,
    ShareModule,
    SharedModule,
    NgbTabsetModule,
    DataTablesModule,
    ToastrModule.forRoot()

  ]
})
export class MrModule { }
