import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutingModule } from './purchase.routing';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';

import {
  NgbTabsetModule,
  NgbDatepickerModule
} from "@ng-bootstrap/ng-bootstrap";
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { ShareModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MrModule } from "src/app/modules/purchase/pages/mr/mr.module";
import { CreateMrIdComponent } from './component/create-mr-id/create-mr-id.component';
import { SearchViewPcComponent } from './pages/purchase-confirmation/search-view-pc/search-view-pc.component';
import { SearchViewLotComponent } from './pages/purchaseLot/search-view-lot/search-view-lot.component';
import { PcApprovalComponent } from './pages/purchase-confirmation/pc-approval/pc-approval.component';
// import { PurchasrListFullDetailsComponent } from 'src/app/shared/components/purchasr-list-full-details/purchasr-list-full-details.component';

import { ToastrModule } from 'ngx-toastr';
import { SearchViewGrnComponent } from './pages/grnModule/search-view-grn/search-view-grn.component';
import { GrnApprovalComponent } from './pages/grnModule/grn-approval/grn-approval.component';
import { PcEditComponent } from './pages/purchase-confirmation/pc-edit/pc-edit.component';
import { PurchaseConfirmationModule } from "src/app/modules/purchase/pages/purchase-confirmation/purchase-confirmation.module";
import { LotApprovalComponent } from './pages/purchaseLot/lot-approval/lot-approval.component';
import { EditGrnComponent } from './pages/grnModule/edit-grn/edit-grn.component';
import { EditLotComponent } from './pages/purchaseLot/edit-lot/edit-lot.component';
import { ViewPoComponent } from './pages/purchase-order/view-po/view-po.component';
import { FormsModule } from "@angular/forms";
import { CreatePoComponent } from './pages/purchase-order/create-po/create-po.component';
import { PoEmailSmsComponent } from './pages/purchase-order/po-email-sms/po-email-sms.component';
import { PurchaseOrderModule } from "src/app/modules/purchase/pages/purchase-order/purchase-order.module";




@NgModule({
  declarations: [
    CreateMrIdComponent,
    SearchViewPcComponent,
    SearchViewLotComponent,
    // PurchasrListFullDetailsComponent,
    PcApprovalComponent,
    SearchViewGrnComponent,
    GrnApprovalComponent,
    PcEditComponent,
    LotApprovalComponent,
    EditGrnComponent,
    EditLotComponent,
    ViewPoComponent,
    CreatePoComponent,
    PoEmailSmsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PurchaseRoutingModule,
    ArchwizardModule,
    TextMaskModule,
    ShareModule,
    NgbTabsetModule,
    DataTablesModule,
    MrModule,
    PurchaseConfirmationModule,
    NgbDatepickerModule,
    FormsModule,
    TextMaskModule,
    PurchaseOrderModule,

   ToastrModule.forRoot()
  ]
})
export class PurchaseModule { }
