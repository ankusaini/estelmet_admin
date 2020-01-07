import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSoComponent } from './direct-sales/create-so/create-so.component';
import { CreateSoByCustomerComponent } from './direct-sales/create-so-by-customer/create-so-by-customer.component';
import { SearchViewSoComponent } from './direct-sales/search-view-so/search-view-so.component';
import { SendSoCustomerComponent } from './direct-sales/send-so-customer/send-so-customer.component';
import { CreateTradeleadComponent } from './website-sales/create-tradelead/create-tradelead.component';
import { SearchTradeleadComponent } from './website-sales/search-tradelead/search-tradelead.component';
import { UploadTradeleadComponent } from './website-sales/upload-tradelead/upload-tradelead.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { SearchViewCoComponent } from './customer-order/search-view-co/search-view-co.component';
import { CreateScComponent } from './create-sc/create-sc.component';
import { SearchScComponent } from './create-sc/search-sc/search-sc.component';
import { SoOverviewComponent } from './direct-sales/so-overview/so-overview.component';
import { SoApprovalComponent } from './direct-sales/so-approval/so-approval.component';
import { ScOverviewComponent } from './create-sc/sc-overview/sc-overview.component';
import { ScApprovalComponent } from './create-sc/sc-approval/sc-approval.component';
import { SoEditComponent } from './direct-sales/so-edit/so-edit.component';
import { TlEditComponent } from './website-sales/tl-edit/tl-edit.component';
import { ScEditComponent } from './create-sc/sc-edit/sc-edit.component';

const routes: Routes = [
  {
    path: 'createSo',
    component: CreateSoComponent
  },
  {
    path: 'createSoCustomer',
    component: CreateSoByCustomerComponent
  },
  {
    path: 'searchSo',
    component: SearchViewSoComponent
  },
  {
    path: 'sendSO',
    component: SendSoCustomerComponent
  },
  {
    path: 'createTradelead',
    component: CreateTradeleadComponent
  },
  {
    path: 'searchTradlead',
    component: SearchTradeleadComponent
  },
  {
    path: 'uploadtl',
    component: UploadTradeleadComponent
  },
  {
    path: 'createCO',
    component: CustomerOrderComponent
  },
  {
    path: 'searchCo',
    component: SearchViewCoComponent
  },
  {
    path: 'createSc',
    component: CreateScComponent
  },
  {
    path: 'searchSc',
    component: SearchScComponent
  },
  {
    path: 'soOverview',
    component: SoOverviewComponent
  },
  {
    path: 'soApproval',
    component: SoApprovalComponent
  },
  {
    path: 'scOverview',
    component: ScOverviewComponent
  },
  {
    path: 'scApproval',
    component: ScApprovalComponent
  },
  {
    path: 'soEdit',
    component: SoEditComponent
  },
  {
    path: 'tlEdit',
    component: TlEditComponent
  },
  {
    path: 'scEdit',
    component: ScEditComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
