import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialClassificationSpecificationComponent } from './components/material-classification-specification/material-classification-specification.component';
import { AddProductCartComponent } from './components/add-product-cart/add-product-cart.component';

@NgModule({
  declarations: [MaterialClassificationSpecificationComponent, AddProductCartComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    MaterialClassificationSpecificationComponent, AddProductCartComponent
  ]
})
export class SharedModule { }
