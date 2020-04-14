import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AddProductCartComponent } from './components/add-product-cart/add-product-cart.component';
import {
  MaterialClassificationSpecificationComponent
} from './components/material-classification-specification/material-classification-specification.component';
import { MrListComponent } from './components/mr-list/mr-list.component';
import { OtpComponent } from './components/otp/otp.component';
import { PoListComponent } from './components/po-list/po-list.component';
import { ProdListWithProdIdComponent } from './components/prod-list-with-prod-id/prod-list-with-prod-id.component';
import { PurchasrListFullDetailsComponent } from './components/purchasr-list-full-details/purchasr-list-full-details.component';
import { TransportDetailsComponent } from './components/transport-details/transport-details.component';
import { TransporterDoComponent } from './components/transporter-do/transporter-do.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgxPermissionsModule } from "ngx-permissions";

@NgModule({
  declarations: [
    MaterialClassificationSpecificationComponent,
    AddProductCartComponent,
    MrListComponent,
    OtpComponent,
    TransportDetailsComponent,
    ProdListWithProdIdComponent,
    PurchasrListFullDetailsComponent,
    PoListComponent,
    UserListComponent,
    TransporterDoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TextMaskModule,
    ArchwizardModule,
    NgbDatepickerModule,
    DataTablesModule
  ],
  exports: [
    MaterialClassificationSpecificationComponent,
    AddProductCartComponent,
    PurchasrListFullDetailsComponent,
    MrListComponent,
    TransportDetailsComponent,
    PoListComponent, UserListComponent, TransporterDoComponent,
    ProdListWithProdIdComponent,
     NgxPermissionsModule
  ]
})
export class ShareModule { }
