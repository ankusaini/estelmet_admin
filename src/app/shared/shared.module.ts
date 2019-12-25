import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialClassificationSpecificationComponent } from './components/material-classification-specification/material-classification-specification.component';
import { AddProductCartComponent } from './components/add-product-cart/add-product-cart.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';


@NgModule({
  declarations: [MaterialClassificationSpecificationComponent, AddProductCartComponent],
  imports: [
    CommonModule,
    SharedModule,
    TextMaskModule,
    ArchwizardModule
  ],
  exports:[
    MaterialClassificationSpecificationComponent, AddProductCartComponent
  ]
})
export class ShareModule { }
