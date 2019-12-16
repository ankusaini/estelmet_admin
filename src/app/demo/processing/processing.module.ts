import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDatepickerModule, NgbTabsetModule, NgbDropdownModule, NgbTooltipModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProcessingRoutingModule } from './processing-routing.module';
import { CreateProcessingComponent } from './create-processing/create-processing.component';
import { InventoryModule } from '../inventory/inventory.module';
import { UpdateProcessingComponent } from './update-processing/update-processing.component';
import { SearchProcessingComponent } from './search-processing/search-processing.component';
import { ProcessingApprovalComponent } from './processing-approval/processing-approval.component';
import { ProcessingOverviewComponent } from './processing-overview/processing-overview.component';
import { EditProcessingComponent } from './edit-processing/edit-processing.component';
import { LightboxModule } from 'ngx-lightbox';
import { ConvertCoProcessingComponent } from './convert-co-processing/convert-co-processing.component';
import { MergeProductComponent } from './merge-product/merge-product.component';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule,
    ProcessingRoutingModule,
    InventoryModule,
    NgbTabsetModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ],
  declarations: [
    CreateProcessingComponent,
    UpdateProcessingComponent,
    SearchProcessingComponent,
    ProcessingApprovalComponent,
    ProcessingOverviewComponent,
    EditProcessingComponent,
    ConvertCoProcessingComponent,
    MergeProductComponent
  ]
})
export class ProcessingModule { }
