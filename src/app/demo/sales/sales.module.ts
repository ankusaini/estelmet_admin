import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDatepickerModule, NgbTabsetModule, NgbDropdownModule, NgbTooltipModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateSoComponent } from './direct-sales/create-so/create-so.component';
import { InventoryModule } from '../inventory/inventory.module';
import { CreateSoByCustomerComponent } from './direct-sales/create-so-by-customer/create-so-by-customer.component';
import { SearchViewSoComponent } from './direct-sales/search-view-so/search-view-so.component';
import { SendSoCustomerComponent } from './direct-sales/send-so-customer/send-so-customer.component';
import { UsersListModule } from '../users/users-list/users-list.module';
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
import { TradeleadOverviewComponent } from './website-sales/tradelead-overview/tradelead-overview.component';
import { SoEditComponent } from './direct-sales/so-edit/so-edit.component';
import { LightboxModule } from 'ngx-lightbox';
import { TlEditComponent } from './website-sales/tl-edit/tl-edit.component';
import { ScEditComponent } from './create-sc/sc-edit/sc-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SalesRoutingModule,
    CommonModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule,
    InventoryModule,
    UsersListModule,
    NgbTabsetModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ],
  declarations: [
    CreateSoComponent,
    CreateSoByCustomerComponent,
    SearchViewSoComponent,
    SendSoCustomerComponent,
    CreateTradeleadComponent,
    SearchTradeleadComponent,
    UploadTradeleadComponent,
    CustomerOrderComponent,
    SearchViewCoComponent,
    CreateScComponent,
    SearchScComponent,
    SoOverviewComponent,
    SoApprovalComponent,
    ScOverviewComponent,
    ScApprovalComponent,
    TradeleadOverviewComponent,
    SoEditComponent,
    TlEditComponent,
    ScEditComponent
  ]
})
export class SalesModule { }
