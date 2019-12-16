import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLoadingSlipComponent } from './loading-slip/create-loading-slip/create-loading-slip.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDatepickerModule, NgbTabsetModule, NgbDropdownModule, NgbTooltipModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryModule } from '../inventory/inventory.module';
import { UsersListModule } from '../users/users-list/users-list.module';
import { DispatchRoutingModule } from './dispatch-routing.module';
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
import { LightboxModule } from 'ngx-lightbox';
import { EditSiComponent } from './sales-invoice/edit-si/edit-si.component';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule,
    InventoryModule,
    UsersListModule,
    DispatchRoutingModule,
    NgbTabsetModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ],
  declarations: [
    CreateLoadingSlipComponent,
    CreateDeliveryOrderComponent,
    AddKataWeightComponent,
    SearchViewDoComponent,
    CreateSiComponent,
    SearchSiComponent,
    DoOverviewComponent,
    DoApprovalComponent,
    LoadingSlipOverviewComponent,
    GenerateInvoiceComponent,
    SiOverviewComponent,
    DoEditComponent,
    EditSiComponent
  ]
})
export class DispatchModule { }
