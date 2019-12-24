import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialClassificationSpecificationComponent } from './components/material-classification-specification/material-classification-specification.component';
import { AddProductCartComponent } from './components/add-product-cart/add-product-cart.component';
import { MrListComponent } from './components/mr-list/mr-list.component';
import { TransportDetailsComponent } from './components/transport-details/transport-details.component';
import { ProdListWithProdIdComponent } from './components/prod-list-with-prod-id/prod-list-with-prod-id.component';
import { PurchasrListFullDetailsComponent } from './components/purchasr-list-full-details/purchasr-list-full-details.component';

@NgModule({
  declarations: [MaterialClassificationSpecificationComponent, AddProductCartComponent, MrListComponent, TransportDetailsComponent, ProdListWithProdIdComponent, PurchasrListFullDetailsComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    MaterialClassificationSpecificationComponent, AddProductCartComponent
  ]
})
export class SharedModule { }
