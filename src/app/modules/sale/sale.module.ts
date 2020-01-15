import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { CreateSoComponent } from './pages/directSales/create-so/create-so.component';
import { CreateSoIdComponent } from './components/create-so-id/create-so-id.component';
import { SelectProductComponent } from './components/select-product/select-product.component';
import { CreateTradleadComponent } from './pages/websiteSales/create-tradlead/create-tradlead.component';
import { CreateSoIdTradeleadComponent } from './components/create-so-id-tradelead/create-so-id-tradelead.component';
import { SelectProductTradeleadComponent } from './components/select-product-tradelead/select-product-tradelead.component';
import { OtherDetailsTradeleadComponent } from './components/other-details-tradelead/other-details-tradelead.component';




@NgModule({
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
    SoApprovalComponent,
    CreateSoComponent,
    CreateSoIdComponent,
    SelectProductComponent,
    CreateTradleadComponent,
    CreateSoIdTradeleadComponent,
    SelectProductTradeleadComponent,
    OtherDetailsTradeleadComponent
  ]
})
export class SaleModule { }
