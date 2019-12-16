import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSalesLeadComponent } from './create-sales-lead/create-sales-lead.component';
import { SalesLeadRoutingModule } from './salesLead-routing-module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDatepickerModule, NgbTabsetModule, NgbDropdownModule, NgbTooltipModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryModule } from '../inventory/inventory.module';
import { SearchSalesLeadComponent } from './search-sales-lead/search-sales-lead.component';
import { SlOverviewComponent } from './sl-overview/sl-overview.component';
import { SlEditComponent } from './sl-edit/sl-edit.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  imports: [
    CommonModule,
    SalesLeadRoutingModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule,
    NgbTabsetModule,
  InventoryModule,
  NgbDropdownModule,
  NgbTooltipModule,
  NgbCarouselModule,
  LightboxModule
  ],
  declarations: [
    CreateSalesLeadComponent,
    SearchSalesLeadComponent,
    SlOverviewComponent,
    SlEditComponent
  ]
})
export class SalesLeadModule { }
