import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTabsetModule, NgbDropdownModule, NgbTooltipModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { LightboxModule } from 'ngx-lightbox';

import { SalesRoutingModule } from './sale.routing';
import { SearchTradleadComponent } from './pages/websiteSales/search-tradlead/search-tradlead.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SearchViewSoComponent } from './pages/directSales/search-view-so/search-view-so.component';
import { SearchViewScComponent } from './pages/salesConfirmation/search-view-sc/search-view-sc.component';
import { ScApprovalComponent } from './pages/salesConfirmation/sc-approval/sc-approval.component';
import { SoApprovalComponent } from './pages/directSales/so-approval/so-approval.component';

=======
>>>>>>> b287ef4732261c07494a94a01edc5a8ad408a4c9



@NgModule({
<<<<<<< HEAD
  imports: [
    CommonModule,
    DataTablesModule,
    SalesRoutingModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule,
    NgbTabsetModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ],
  declarations: [
    SearchTradleadComponent,
    SearchViewSoComponent,
    SearchViewScComponent,
    ScApprovalComponent,
    SoApprovalComponent
=======
  declarations: [],
  imports: [
    CommonModule
>>>>>>> b287ef4732261c07494a94a01edc5a8ad408a4c9
  ]
})
export class SaleModule { }
