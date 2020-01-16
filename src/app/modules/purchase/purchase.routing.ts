import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMRComponent } from "src/app/modules/purchase/pages/mr/create-mr/create-mr.component";
import { ViewMRComponent } from "src/app/modules/purchase/pages/mr/view-mr/view-mr.component";

import { SearchViewPcComponent } from './pages/purchase-confirmation/search-view-pc/search-view-pc.component';
import { PcApprovalComponent } from './pages/purchase-confirmation/pc-approval/pc-approval.component';

import { MrApporvalComponent } from "src/app/modules/purchase/pages/mr/mr-apporval/mr-apporval.component";
import { MrEditComponent } from "src/app/modules/purchase/pages/mr/mr-edit/mr-edit.component";
import { SearchViewGrnComponent } from './pages/grnModule/search-view-grn/search-view-grn.component';
import { GrnApprovalComponent } from './pages/grnModule/grn-approval/grn-approval.component';


const routes: Routes = [

  {
    path: 'createMr',
    component: CreateMRComponent
  },
  {
    path: 'searchViewMr',
    component: ViewMRComponent
  },
   {
    path: 'mrApproval',
    component: MrApporvalComponent
  },
   {
    path: 'mrEdit/:id',
    component: MrEditComponent
  },
//   {
//     path: 'mrOverview',
//     component: MrOverviewComponent
//   },
//   {
//     path: 'createPo',
//     component: CreatePurchaseOrderComponent
//   },
//   {
//     path: 'createPc',
//     component: CreatePcComponent
//   },
  {
    path: 'searchPc',
    component: SearchViewPcComponent
  },
//   {
//     path: 'pcOverview',
//     component: PcOverviewComponent
//   },
//   {
//     path: 'lotWithPc',
//     component: CreateLotWithPcComponent
//   },
//   {
//     path: 'lotWithoutPc',
//     component: CreateLotWithoutPcComponent
//   },
//   {
//     path: 'lotMt',
//     component: CreateLotMtSelfComponent
//   },
//   {
//     path: 'searchLot',
//     component: SearchViewLotComponent
//   },
//   {
//     path: 'grnLot',
//     component: GrnPurchaseInvoiceComponent
//   },
//   {
//     path: 'grnTransport',
//     component: GrnTransportDetailsComponent
//   },
//   {
//     path: 'grnjobWrk',
//     component: GrnJobWorkChalanComponent
//   },
//   {
//     path: 'grnMt',
//     component: GrnMtSelfComponent
//   },
  {
    path: 'searchGrn',
    component: SearchViewGrnComponent
  },
//   {
//     path: 'mrApproval',
//     component: MrApprovalComponent
//   },
  {
    path: 'pcApproval',
    component: PcApprovalComponent
  },
//   {
//     path: 'lotOverview',
//     component: LotOverviewComponent
//   },
//   {
//     path: 'lotApproval',
//     component: LotApprovalComponent
//   },
//   {
//     path: 'grnOverview',
//     component: GrnOverviewComponent
//   },
  {
    path: 'grnApproval',
    component: GrnApprovalComponent
  },
//   {
//     path: 'mrEdit',
//     component: MrEditComponent
//   },
//   {
//     path: 'pcEdit',
//     component: PcEditComponent
//   },
//   {
//     path: 'grnEdit',
//     component: GrnEditComponent
//   },
//   {
//     path: 'lotEdit',
//     component: EditLotComponent
//   },
//   {
//     path: 'purchaseQuote',
//     component: PurchaseQuoteComponent
//   },
//   {
//     path: 'purchaseLink',
//     component: PurchaseLinkComponent
//   },
//   {
//     path: 'editPQ',
//     component: EditPqLinkComponent
//   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
