import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMRComponent } from './pages/create-mr/create-mr.component';
import { PurchaseRoutingModule } from './purchaserouting';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { ShareModule } from 'src/app/shared/shared.module';
import { ViewMRComponent } from './pages/view-mr/view-mr.component';
import { DataTablesModule } from 'angular-datatables';
import { PcApprovalComponent } from './pages/purchase-confirmation/pc-approval/pc-approval.component';
import { PcEditComponent } from 'src/app/demo/purchase/purchase-confirmation/pc-edit/pc-edit.component';


@NgModule({
  declarations: [CreateMRComponent, ViewMRComponent,PcApprovalComponent,PcEditComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule,
    ArchwizardModule,
    TextMaskModule,
    ShareModule,
    DataTablesModule
  ]
})
export class PurchaseModule { }
