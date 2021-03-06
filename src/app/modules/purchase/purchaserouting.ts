import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMRComponent } from 'src/app/modules/purchase/pages/mr/create-mr/create-mr.component';
import { MrApporvalComponent } from 'src/app/modules/purchase/pages/mr/mr-apporval/mr-apporval.component';
import { MrEditComponent } from 'src/app/modules/purchase/pages/mr/mr-edit/mr-edit.component';
import { ViewMRComponent } from 'src/app/modules/purchase/pages/mr/view-mr/view-mr.component';
import { LotOverviewComponent } from './pages/purchaseLot/lot-overview/lot-overview.component';

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
  //   {
  //     path: 'searchPc',
  //     component: SearchViewPcComponent
  //   },
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
  //   {
  //     path: 'searchGrn',
  //     component: SearchGrnComponent
  //   },
  //   {
  //     path: 'mrApproval',
  //     component: MrApprovalComponent
  //   },
  //   {
  //     path: 'pcApproval',
  //     component: PcApprovalComponent
  //   },
    {
      path: 'lotOverview',
      component: LotOverviewComponent
    },
  //   {
  //     path: 'lotApproval',
  //     component: LotApprovalComponent
  //   },
  //   {
  //     path: 'grnOverview',
  //     component: GrnOverviewComponent
  //   },
  //   {
  //     path: 'grnApproval',
  //     component: GrnApprovalComponent
  //   },
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
