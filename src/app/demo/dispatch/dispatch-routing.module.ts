import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLoadingSlipComponent } from './loading-slip/create-loading-slip/create-loading-slip.component';
import { CreateDeliveryOrderComponent } from './delivery-order/create-delivery-order/create-delivery-order.component';
import { AddKataWeightComponent } from './delivery-order/add-kata-weight/add-kata-weight.component';
import { SearchViewDoComponent } from './delivery-order/search-view-do/search-view-do.component';
import { CreateSiComponent } from './sales-invoice/create-si/create-si.component';
import { SearchSiComponent } from './sales-invoice/search-si/search-si.component';
import { DoOverviewComponent } from './delivery-order/do-overview/do-overview.component';
import { DoApprovalComponent } from './delivery-order/do-approval/do-approval.component';
import { LoadingSlipOverviewComponent } from './loading-slip/loading-slip-overview/loading-slip-overview.component';
import { GenerateInvoiceComponent } from './sales-invoice/generate-invoice/generate-invoice.component';
import { SiOverviewComponent } from './sales-invoice/si-overview/si-overview.component';
import { DoEditComponent } from './delivery-order/do-edit/do-edit.component';
import { EditSiComponent } from './sales-invoice/edit-si/edit-si.component';

const routes: Routes = [
    {
        path: 'loadingSlip',
        component: CreateLoadingSlipComponent,
    },
    {
        path: 'createDo',
        component: CreateDeliveryOrderComponent,
    },
    {
        path: 'addKata',
        component: AddKataWeightComponent,
    },
    {
        path: 'searchDo',
        component: SearchViewDoComponent,
    },
    {
        path: 'createSi',
        component: CreateSiComponent,
    },
    {
        path: 'searchSi',
        component: SearchSiComponent,
    },
    {
        path: 'doOverview',
        component: DoOverviewComponent,
    },
    {
        path: 'doApproval',
        component: DoApprovalComponent,
    },
    {
        path: 'loadSlipOverview',
        component: LoadingSlipOverviewComponent,
    },
    {
        path: 'generateInvoice',
        component: GenerateInvoiceComponent,
    },
    {
        path: 'siOverview',
        component: SiOverviewComponent,
    },
    {
        path: 'doEdit',
        component: DoEditComponent,
    },
    {
        path: 'siEdit',
        component: EditSiComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DispatchRoutingModule { }

