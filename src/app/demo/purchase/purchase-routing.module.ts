import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMrComponent } from './purchase-mr/create-mr/create-mr.component';
import { SearchViewMrComponent } from './purchase-mr/search-view-mr/search-view-mr.component';
import { MrOverviewComponent } from './purchase-mr/mr-overview/mr-overview.component';
import { CreatePurchaseOrderComponent } from './purchase-order/create-purchase-order/create-purchase-order.component';
import { CreatePcComponent } from './purchase-confirmation/create-pc/create-pc.component';
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
import { PcApprovalComponent } from './purchase-confirmation/pc-approval/pc-approval.component';
import { LotOverviewComponent } from './purchase-lot/lot-overview/lot-overview.component';
import { LotApprovalComponent } from './purchase-lot/lot-approval/lot-approval.component';
import { GrnOverviewComponent } from './purchase-grn/grn-overview/grn-overview.component';
import { GrnApprovalComponent } from './purchase-grn/grn-approval/grn-approval.component';
import { MrEditComponent } from './purchase-mr/mr-edit/mr-edit.component';
import { PcEditComponent } from './purchase-confirmation/pc-edit/pc-edit.component';
import { GrnEditComponent } from './purchase-grn/grn-edit/grn-edit.component';
import { EditLotComponent } from './purchase-lot/edit-lot/edit-lot.component';
import { PurchaseQuoteComponent } from './purchase-order/purchase-quote/purchase-quote.component';
import { PurchaseLinkComponent } from './purchase-order/purchase-link/purchase-link.component';
import { EditPqLinkComponent } from './purchase-order/edit-pq-link/edit-pq-link.component';

const routes: Routes = [
  {
    path: 'createMr',
    component: CreateMrComponent
  },
  {
    path: 'searchViewMr',
    component: SearchViewMrComponent
  },
  {
    path: 'mrOverview',
    component: MrOverviewComponent
  },
  {
    path: 'createPo',
    component: CreatePurchaseOrderComponent
  },
  {
    path: 'createPc',
    component: CreatePcComponent
  },
  {
    path: 'searchPc',
    component: SearchViewPcComponent
  },
  {
    path: 'pcOverview',
    component: PcOverviewComponent
  },
  {
    path: 'lotWithPc',
    component: CreateLotWithPcComponent
  },
  {
    path: 'lotWithoutPc',
    component: CreateLotWithoutPcComponent
  },
  {
    path: 'lotMt',
    component: CreateLotMtSelfComponent
  },
  {
    path: 'searchLot',
    component: SearchViewLotComponent
  },
  {
    path: 'grnLot',
    component: GrnPurchaseInvoiceComponent
  },
  {
    path: 'grnTransport',
    component: GrnTransportDetailsComponent
  },
  {
    path: 'grnjobWrk',
    component: GrnJobWorkChalanComponent
  },
  {
    path: 'grnMt',
    component: GrnMtSelfComponent
  },
  {
    path: 'searchGrn',
    component: SearchGrnComponent
  },
  {
    path: 'mrApproval',
    component: MrApprovalComponent
  },
  {
    path: 'pcApproval',
    component: PcApprovalComponent
  },
  {
    path: 'lotOverview',
    component: LotOverviewComponent
  },
  {
    path: 'lotApproval',
    component: LotApprovalComponent
  },
  {
    path: 'grnOverview',
    component: GrnOverviewComponent
  },
  {
    path: 'grnApproval',
    component: GrnApprovalComponent
  },
  {
    path: 'mrEdit',
    component: MrEditComponent
  },
  {
    path: 'pcEdit',
    component: PcEditComponent
  },
  {
    path: 'grnEdit',
    component: GrnEditComponent
  },
  {
    path: 'lotEdit',
    component: EditLotComponent
  },
  {
    path: 'purchaseQuote',
    component: PurchaseQuoteComponent
  },
  {
    path: 'purchaseLink',
    component: PurchaseLinkComponent
  },
  {
    path: 'editPQ',
    component: EditPqLinkComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
