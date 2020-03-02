import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLoadingSlipComponent } from "src/app/modules/dispatch/pages/create-loading-slip/create-loading-slip.component";
import { CreateDeliveryOrderComponent } from "src/app/modules/dispatch/pages/create-delivery-order/create-delivery-order.component";
import { AddKataWeightComponent } from "src/app/modules/dispatch/pages/add-kata-weight/add-kata-weight.component";
import { SearchViewDoComponent } from "src/app/modules/dispatch/pages/search-view-do/search-view-do.component";
import { CreateSiComponent } from "src/app/modules/dispatch/pages/create-si/create-si.component";
import { SearchSiComponent } from "src/app/modules/dispatch/pages/search-si/search-si.component";
import { DoOverviewComponent } from "src/app/modules/dispatch/pages/do-overview/do-overview.component";
import { DoApprovalComponent } from "src/app/modules/dispatch/pages/do-approval/do-approval.component";
// import { LoadingSlipOverviewComponent } from "src/app/demo/dispatch/loading-slip/loading-slip-overview/loading-slip-overview.component";
import { GenerateInvoiceComponent } from "src/app/modules/dispatch/pages/generate-invoice/generate-invoice.component";
import { DoEditComponent } from "src/app/modules/dispatch/pages/do-edit/do-edit.component";
import { SiOverviewComponent } from "src/app/modules/dispatch/pages/si-overview/si-overview.component";
import { EditSiComponent } from "src/app/modules/dispatch/pages/edit-si/edit-si.component";




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
    // {
    //     path: 'loadSlipOverview',
    //     component: LoadingSlipOverviewComponent,
    // },
    {
        path: 'generateInvoice',
        component: GenerateInvoiceComponent,
    },
    {
        path: 'siOverview',
        component: SiOverviewComponent,
    },
    {
        path: 'doEdit/:id',
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