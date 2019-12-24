import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { SelectGrnComponent } from './component/select-grn/select-grn.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SelectModule } from 'ng-select';
import { FileUploadModule } from '@iplab/ngx-file-upload'
import { InventoryRoutingModule } from "src/app/modules/inventory/inventory.routing";
import { MaterialClassificationSpecificationComponent } from "src/app/shared/components/material-classification-specification/material-classification-specification.component";
import { AddProductCartComponent } from "src/app/shared/components/add-product-cart/add-product-cart.component";
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductApprovalComponent } from './pages/product-approval/product-approval.component';
import { ProductOverviewComponent } from './pages/product-overview/product-overview.component';
import { SearchViewProductComponent } from './pages/search-view-product/search-view-product.component';
import { LightboxModule } from "ngx-lightbox";
import {
  NgbDropdownModule,
  NgbDatepickerModule,
  NgbTabsetModule,
  NgbTooltipModule,
  NgbCarouselModule
} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [AddProductComponent, SelectGrnComponent,MaterialClassificationSpecificationComponent,AddProductCartComponent, EditProductComponent, ProductApprovalComponent, ProductOverviewComponent, SearchViewProductComponent],
  imports: [
  CommonModule,
    InventoryRoutingModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    FileUploadModule,
    SelectModule,
     NgbDatepickerModule,
    NgbTabsetModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ]
})
export class InventoryModule { }
