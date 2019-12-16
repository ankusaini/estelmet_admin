import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMrComponent } from './purchase-mr/create-mr/create-mr.component';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { SearchViewMrComponent } from './purchase-mr/search-view-mr/search-view-mr.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MrOverviewComponent } from './purchase-mr/mr-overview/mr-overview.component';
import { CreatePurchaseOrderComponent } from './purchase-order/create-purchase-order/create-purchase-order.component';
import { CreatePcComponent } from './purchase-confirmation/create-pc/create-pc.component';
import { NgbDatepickerModule, NgbTabsetModule, NgbDropdownModule, NgbTooltipModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchViewPcComponent } from './purchase-confirmation/search-view-pc/search-view-pc.component';
import { PcOverviewComponent } from './purchase-confirmation/pc-overview/pc-overview.component';
import { CreateLotWithPcComponent } from './purchase-lot/create-lot-with-pc/create-lot-with-pc.component';
import { CreateLotWithoutPcComponent } from './purchase-lot/create-lot-without-pc/create-lot-without-pc.component';
import { CreateLotMtSelfComponent } from './purchase-lot/create-lot-mt-self/create-lot-mt-self.component';
import { SearchViewLotComponent } from './purchase-lot/search-view-lot/search-view-lot.component';
import { GrnPurchaseInvoiceComponent } from './purchase-grn/grn-purchase-invoice/grn-purchase-invoice.component';
import { GrnTransportDetailsComponent } from './purchase-grn/grn-transport-details/grn-transport-details.component';
import { GrnJobWorkChalanComponent } from './purchase-grn/grn-job-work-chalan/grn-job-work-chalan.component';
import { GrnMtSelfComponent } from './purchase-grn/grn-mt-self/grn-mt-self.component';
import { SearchGrnComponent } from './purchase-grn/search-grn/search-grn.component';
import { MrApprovalComponent } from './purchase-mr/mr-approval/mr-approval.component';
import { InventoryModule } from '../inventory/inventory.module';
import { PcApprovalComponent } from './purchase-confirmation/pc-approval/pc-approval.component';
import { LotOverviewComponent } from './purchase-lot/lot-overview/lot-overview.component';
import { LotApprovalComponent } from './purchase-lot/lot-approval/lot-approval.component';
import { GrnOverviewComponent } from './purchase-grn/grn-overview/grn-overview.component';
import { GrnApprovalComponent } from './purchase-grn/grn-approval/grn-approval.component';
import { PoOverviewComponent } from './purchase-order/po-overview/po-overview.component';
import { SearchViewPoComponent } from './purchase-order/search-view-po/search-view-po.component';
import { MrEditComponent } from './purchase-mr/mr-edit/mr-edit.component';
import { LightboxModule } from 'ngx-lightbox';
import { PcEditComponent } from './purchase-confirmation/pc-edit/pc-edit.component';
import { GrnEditComponent } from './purchase-grn/grn-edit/grn-edit.component';
import { EditLotComponent } from './purchase-lot/edit-lot/edit-lot.component';
import { PurchaseQuoteComponent } from './purchase-order/purchase-quote/purchase-quote.component';
import { PurchaseLinkComponent } from './purchase-order/purchase-link/purchase-link.component';
import { EditPqLinkComponent } from './purchase-order/edit-pq-link/edit-pq-link.component';

@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule,
    NgbTabsetModule,
    InventoryModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ],
  declarations: [
    CreateMrComponent,
    SearchViewMrComponent,
    MrOverviewComponent,
    CreatePurchaseOrderComponent,
    CreatePcComponent,
    SearchViewPcComponent,
    PcOverviewComponent,
    CreateLotWithoutPcComponent,
    CreateLotWithPcComponent,
    CreateLotMtSelfComponent,
    SearchViewLotComponent,
    GrnPurchaseInvoiceComponent,
    GrnTransportDetailsComponent,
    GrnJobWorkChalanComponent,
    GrnMtSelfComponent,
    SearchGrnComponent,
    MrApprovalComponent,
    PcApprovalComponent,
    LotOverviewComponent,
    LotApprovalComponent,
    GrnOverviewComponent,
    GrnApprovalComponent,
    PoOverviewComponent,
    SearchViewPoComponent,
    MrEditComponent,
    PcEditComponent,
    GrnEditComponent,
    EditLotComponent,
    PurchaseQuoteComponent,
    PurchaseLinkComponent,
    EditPqLinkComponent
  ]
})
export class PurchaseModule { }
