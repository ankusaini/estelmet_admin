import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from "ng2-archwizard/dist";
import { ShareModule } from "src/app/shared/shared.module";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { EditPoComponent } from './edit-po/edit-po.component';
import { PoEmailSmsComponent } from './po-email-sms/po-email-sms.component';
import { CreatePoComponent } from './create-po/create-po.component';

@NgModule({
  declarations: [
    EditPoComponent,
    // PoEmailSmsComponent,
    // CreatePoComponent
  ],
  imports: [
    
    CommonModule,
    ArchwizardModule,
    ShareModule,
    SharedModule,
  ]
})
export class PurchaseOrderModule { }
