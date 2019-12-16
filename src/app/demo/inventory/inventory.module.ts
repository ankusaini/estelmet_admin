import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDatepickerModule, NgbTabsetModule, NgbDropdownModule, NgbTooltipModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductCartComponent } from './add-product-cart/add-product-cart.component';
import { SearchViewProductComponent } from './search-view-product/search-view-product.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductApprovalComponent } from './product-approval/product-approval.component';
import { AddProductJobChalanComponent } from './add-product-job-chalan/add-product-job-chalan.component';
import { AddProductMtSelfComponent } from './add-product-mt-self/add-product-mt-self.component';
import { AddProductWithoutPcComponent } from './add-product-without-pc/add-product-without-pc.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    NgbDatepickerModule,
    NgbTabsetModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ],
  exports: [
    AddProductCartComponent, AddProductComponent
  ],
  declarations: [
    AddProductComponent,
    AddProductCartComponent,
    SearchViewProductComponent,
    ProductOverviewComponent,
    ProductApprovalComponent,
    AddProductJobChalanComponent,
    AddProductMtSelfComponent,
    AddProductWithoutPcComponent,
    EditProductComponent
  ]
})
export class InventoryModule { }
