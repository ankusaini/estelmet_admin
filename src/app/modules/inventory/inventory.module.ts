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



@NgModule({
  declarations: [AddProductComponent, SelectGrnComponent,MaterialClassificationSpecificationComponent,AddProductCartComponent],
  imports: [
  CommonModule,
    InventoryRoutingModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    FileUploadModule,
    SelectModule
  ]
})
export class InventoryModule { }
