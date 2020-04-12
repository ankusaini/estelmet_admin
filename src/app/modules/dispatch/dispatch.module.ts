import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchRoutingModule } from "src/app/modules/dispatch/dispatch.routing";
import { CreateLoadingSlipComponent } from "src/app/modules/dispatch/pages/create-loading-slip/create-loading-slip.component";
import { CreateDeliveryOrderComponent } from "src/app/modules/dispatch/pages/create-delivery-order/create-delivery-order.component";
import { AddKataWeightComponent } from "src/app/modules/dispatch/pages/add-kata-weight/add-kata-weight.component";
import { SearchViewDoComponent } from "src/app/modules/dispatch/pages/search-view-do/search-view-do.component";
import { CreateSiComponent } from "src/app/modules/dispatch/pages/create-si/create-si.component";
import { SearchSiComponent } from "src/app/modules/dispatch/pages/search-si/search-si.component";
import { DoOverviewComponent } from "src/app/modules/dispatch/pages/do-overview/do-overview.component";
import { DoApprovalComponent } from "src/app/modules/dispatch/pages/do-approval/do-approval.component";
import { GenerateInvoiceComponent } from "src/app/modules/dispatch/pages/generate-invoice/generate-invoice.component";
import { SiOverviewComponent } from "src/app/modules/dispatch/pages/si-overview/si-overview.component";
import { DoEditComponent } from "src/app/modules/dispatch/pages/do-edit/do-edit.component";
import { EditSiComponent } from "src/app/modules/dispatch/pages/edit-si/edit-si.component";
import { DataTablesModule } from "angular-datatables";



import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDatepickerModule, NgbTabsetModule, NgbDropdownModule, NgbTooltipModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryModule } from '../inventory/inventory.module';
import { LightboxModule } from "ngx-lightbox";
import { ShareModule } from "src/app/shared/shared.module";
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { LoadingSlipOverviewComponent } from './pages/loading-slip-overview/loading-slip-overview.component';


@NgModule({
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
    EditSiComponent,
    InvoiceDetailsComponent
  ],
  imports: [
    CommonModule,
    DispatchRoutingModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule,
    DispatchRoutingModule,
    NgbTabsetModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule,
    ShareModule
  ]
})
export class DispatchModule { }
