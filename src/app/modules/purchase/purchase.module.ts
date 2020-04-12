import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
// import { PurchasrListFullDetailsComponent } from 'src/app/shared/components/purchasr-list-full-details/purchasr-list-full-details.component';
import { ToastrModule } from 'ngx-toastr';
import { MrModule } from 'src/app/modules/purchase/pages/mr/mr.module';
import { PurchaseConfirmationModule } from 'src/app/modules/purchase/pages/purchase-confirmation/purchase-confirmation.module';
import { PurchaseOrderModule } from 'src/app/modules/purchase/pages/purchase-order/purchase-order.module';
import { PurchaseLotModule } from 'src/app/modules/purchase/pages/purchaseLot/purchaselot.module';
import { ShareModule } from 'src/app/shared/shared.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PcOverviewComponent } from '../purchase/pages/purchase-confirmation/pc-overview/pc-overview.component';
import { ViewMRComponent } from '../purchase/pages/view-mr/view-mr.component';
import { CreateMrIdComponent } from './component/create-mr-id/create-mr-id.component';
import { SupplierComponent } from './component/supplier/supplier.component';
import { CreateGrnComponent } from './pages/grnModule/create-grn/create-grn.component';
import { EditGrnComponent } from './pages/grnModule/edit-grn/edit-grn.component';
import { GrnApprovalComponent } from './pages/grnModule/grn-approval/grn-approval.component';
import { SearchViewGrnComponent } from './pages/grnModule/search-view-grn/search-view-grn.component';
import { PcApprovalComponent } from './pages/purchase-confirmation/pc-approval/pc-approval.component';
import { PcEditComponent } from './pages/purchase-confirmation/pc-edit/pc-edit.component';
import { SearchViewPcComponent } from './pages/purchase-confirmation/search-view-pc/search-view-pc.component';
import { CreatePoComponent } from './pages/purchase-order/create-po/create-po.component';
import { PoEmailSmsComponent } from './pages/purchase-order/po-email-sms/po-email-sms.component';
import { ViewPoComponent } from './pages/purchase-order/view-po/view-po.component';
import { EditLotComponent } from './pages/purchaseLot/edit-lot/edit-lot.component';
import { LotApprovalComponent } from './pages/purchaseLot/lot-approval/lot-approval.component';
import { SearchViewLotComponent } from './pages/purchaseLot/search-view-lot/search-view-lot.component';
import { PurchaseRoutingModule } from './purchase.routing';
import { LotOverviewComponent } from './pages/purchaseLot/lot-overview/lot-overview.component';
import { GrnOverviewComponent } from './pages/grnModule/grn-overview/grn-overview.component';


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
    PoEmailSmsComponent,
     CreateGrnComponent,
    SupplierComponent,
    PcOverviewComponent,
    ViewMRComponent,
    LotOverviewComponent,
    GrnOverviewComponent
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
    PurchaseLotModule,
   ToastrModule.forRoot()
  ]
})
export class PurchaseModule { }
