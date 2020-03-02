import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from "src/app/modules/dashboard/dashboard.routing";
import { DashDefaultComponent } from "src/app/modules/dashboard/pages/dash-default/dash-default.component";
import { DashSaleComponent } from "src/app/modules/dashboard/pages/dash-sale/dash-sale.component";
import { DashCrmComponent } from "src/app/modules/dashboard/pages/dash-crm/dash-crm.component";
import { DashProjectComponent } from "src/app/modules/dashboard/pages/dash-project/dash-project.component";
import { DashAnalyticsComponent } from "src/app/modules/dashboard/pages/dash-analytics/dash-analytics.component";import { SharedModule } from "src/app/theme/shared/shared.module";
import { ShareModule } from "src/app/shared/shared.module";



@NgModule({
  declarations: [DashDefaultComponent,DashSaleComponent,DashCrmComponent,DashProjectComponent,DashAnalyticsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ShareModule
  ]
})
export class DashboardModule { }
