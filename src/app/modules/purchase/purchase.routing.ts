import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMRComponent } from 'src/app/modules/purchase/pages/mr/create-mr/create-mr.component';
import { MrApporvalComponent } from 'src/app/modules/purchase/pages/mr/mr-apporval/mr-apporval.component';
import { MrEditComponent } from 'src/app/modules/purchase/pages/mr/mr-edit/mr-edit.component';
import { ViewMRComponent } from 'src/app/modules/purchase/pages/mr/view-mr/view-mr.component';
import { CreatePcComponent } from 'src/app/modules/purchase/pages/purchase-confirmation/create-pc/create-pc.component';
import { CreatePoComponent } from 'src/app/modules/purchase/pages/purchase-order/create-po/create-po.component';
import { EditPoComponent } from 'src/app/modules/purchase/pages/purchase-order/edit-po/edit-po.component';
import { PoEmailSmsComponent } from 'src/app/modules/purchase/pages/purchase-order/po-email-sms/po-email-sms.component';
import { ViewPoComponent } from 'src/app/modules/purchase/pages/purchase-order/view-po/view-po.component';
import { CreateLotComponent } from 'src/app/modules/purchase/pages/purchaseLot/create-lot/create-lot.component';
import { CreateGrnComponent } from './pages/grnModule/create-grn/create-grn.component';
import { EditGrnComponent } from './pages/grnModule/edit-grn/edit-grn.component';
import { GrnApprovalComponent } from './pages/grnModule/grn-approval/grn-approval.component';
import { SearchViewGrnComponent } from './pages/grnModule/search-view-grn/search-view-grn.component';
import { PcApprovalComponent } from './pages/purchase-confirmation/pc-approval/pc-approval.component';
import { PcEditComponent } from './pages/purchase-confirmation/pc-edit/pc-edit.component';
import { SearchViewPcComponent } from './pages/purchase-confirmation/search-view-pc/search-view-pc.component';
import { EditLotComponent } from './pages/purchaseLot/edit-lot/edit-lot.component';
import { LotApprovalComponent } from './pages/purchaseLot/lot-approval/lot-approval.component';
import { SearchViewLotComponent } from './pages/purchaseLot/search-view-lot/search-view-lot.component';
import { PcOverviewComponent } from './pages/purchase-confirmation/pc-overview/pc-overview.component';
import { LotOverviewComponent } from './pages/purchaseLot/lot-overview/lot-overview.component';
import { GrnOverviewComponent } from './pages/grnModule/grn-overview/grn-overview.component';

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
  {
    path: 'createPo',
    component: CreatePoComponent
  },
  {
    path: 'purchaseQuote',
    component: PoEmailSmsComponent
  },
  {
    path: 'viewPO',
    component: ViewPoComponent
  },
  {
    path: 'editPQ/:id',
    component: EditPoComponent
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
  //   {
  //     path: 'lotWithPc',
  //     component: CreateLotWithPcComponent
  //   },
  //   {
  //     path: 'lotWithoutPc',
  //     component: CreateLotWithoutPcComponent
  //   },
    {
      path: 'lotOverview',
      component: LotOverviewComponent
    },
  {
    path: 'searchLot',
    component: SearchViewLotComponent
  },
  {
    path: 'grnLot',
    component: CreateGrnComponent
  },
  {
    path: 'grnOverview',
    component: GrnOverviewComponent
  },
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

  {
    path: 'lotWithPc',
    component: CreateLotComponent
  },
  {
    path: 'lotApproval',
    component: LotApprovalComponent
  },
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
  {
    path: 'pcEdit/:id',
    component: PcEditComponent
  },
  {
    path: 'grnEdit/:id',
    component: EditGrnComponent
  },
  {
    path: 'lotEdit/:id',
    component: EditLotComponent
  },
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
