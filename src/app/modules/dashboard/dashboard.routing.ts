import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashDefaultComponent } from "src/app/modules/dashboard/pages/dash-default/dash-default.component";
import { DashSaleComponent } from "src/app/modules/dashboard/pages/dash-sale/dash-sale.component";
import { DashCrmComponent } from "src/app/modules/dashboard/pages/dash-crm/dash-crm.component";
import { DashProjectComponent } from "src/app/modules/dashboard/pages/dash-project/dash-project.component";
import { DashAnalyticsComponent } from "src/app/modules/dashboard/pages/dash-analytics/dash-analytics.component";





const routes: Routes = [
    {
        path: 'default',
        component: DashDefaultComponent,
    },
    {
        path: 'sale',
        component: DashSaleComponent,
    },
    {
        path: 'crm',
        component: DashCrmComponent,
    },
    {
        path: 'project',
        component: DashProjectComponent,
    },
    {
        path: 'analytics',
        component: DashAnalyticsComponent,
    },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }