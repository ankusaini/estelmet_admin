import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectMrComponent } from './components/select-mr/select-mr.component';
import { SelectProcessingComponent } from './components/select-processing/select-processing.component';
import { ProcessingListComponent } from './components/processing-list/processing-list.component';

import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDatepickerModule, NgbTabsetModule, NgbDropdownModule, NgbTooltipModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryModule } from "src/app/modules/inventory/inventory.module";
import { LightboxModule } from "ngx-lightbox";
import { CreateProcessingComponent } from "src/app/modules/processing/pages/create-processing/create-processing.component";
import { UpdateProcessingComponent } from "src/app/modules/processing/pages/update-processing/update-processing.component";
import { ProcessingApprovalComponent } from "src/app/modules/processing/pages/processing-approval/processing-approval.component";
import { EditProcessingComponent } from "src/app/modules/processing/pages/edit-processing/edit-processing.component";
import { ConvertCoProcessingComponent } from "src/app/modules/processing/pages/convert-co-processing/convert-co-processing.component";
import { MergeProductComponent } from "src/app/modules/processing/pages/merge-product/merge-product.component";
import { ProcessingOverviewComponent } from "src/app/modules/processing/pages/processing-overview/processing-overview.component";
import { SearchProcessingComponent } from "src/app/modules/processing/pages/search-processing/search-processing.component";


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
    NgbTabsetModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ],
  declarations: [SelectMrComponent, SelectProcessingComponent, ProcessingListComponent,
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
