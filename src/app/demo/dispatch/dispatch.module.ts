import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDatepickerModule, NgbTabsetModule, NgbDropdownModule, NgbTooltipModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryModule } from '../inventory/inventory.module';
import { UsersListModule } from '../users/users-list/users-list.module';
import { DispatchRoutingModule } from './dispatch-routing.module';
import { LightboxModule } from "ngx-lightbox";


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
 
  ]
})
export class DispatchModule { }
