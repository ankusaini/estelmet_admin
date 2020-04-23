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
import { ShareModule } from 'src/app/shared/shared.module';
import { SoEditComponent } from './pages/directSales/so-edit/so-edit.component';
import { TlEditComponent } from './pages/websiteSales/tl-edit/tl-edit.component';
import { CreateScComponent } from './pages/salesConfirmation/create-sc/create-sc.component';
import { ScEditComponent } from './pages/salesConfirmation/sc-edit/sc-edit.component';
import { SelectCustomerOrderIdComponent } from './components/select-customer-order-id/select-customer-order-id.component';
import { EnterCustomerDetailsComponent } from './components/enter-customer-details/enter-customer-details.component';
import { CustomerOrderDetailsComponent } from './components/customer-order-details/customer-order-details.component';
import { OtherDetailsComponent } from './components/other-details/other-details.component';
import { CreateAuctionComponent } from './pages/websiteSales/create-auction/create-auction.component';
import { SearchAuctionComponent } from './pages/websiteSales/search-auction/search-auction.component';
import { CreateAuctionIdComponent } from './components/create-auction-id/create-auction-id.component';
import { SoOverviewComponent } from './pages/directSales/so-overview/so-overview.component';
import { ScOverviewComponent } from './pages/salesConfirmation/sc-overview/sc-overview.component';
import { CustomerOrderComponent } from './pages/customer-order/customer-order.component';
import { SearchViewCOComponent } from './components/search-view-co/search-view-co.component';
import { SelectDetailsCreateLotComponent } from './components/select-details-create-lot/select-details-create-lot.component';
import { CoDetailsComponent } from './components/co-details/co-details.component';
import { SearchViewOfferComponent } from './components/search-view-offer/search-view-offer.component';





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
    LightboxModule, 
    ShareModule
  ],
  declarations: [
    SearchTradleadComponent,
    SearchViewSoComponent,
    SearchViewScComponent,
    ScApprovalComponent,
    SoApprovalComponent,
    CreateSoComponent,
    CreateSoIdComponent,
    SoOverviewComponent,
    SelectProductComponent,
    CreateTradleadComponent,
    CreateSoIdTradeleadComponent,
    SelectProductTradeleadComponent,
    OtherDetailsTradeleadComponent,
    SoEditComponent,
    TlEditComponent,
    CreateScComponent,
    ScEditComponent,
    SelectCustomerOrderIdComponent,
    EnterCustomerDetailsComponent,
    CustomerOrderDetailsComponent,
    OtherDetailsComponent,
    CreateAuctionComponent,
    SearchAuctionComponent,
    CreateAuctionIdComponent,
    ScOverviewComponent,
    CustomerOrderComponent,
    SearchViewCOComponent,
    SelectDetailsCreateLotComponent,
    CoDetailsComponent,
    SearchViewOfferComponent
  ]
})
export class SaleModule { }
