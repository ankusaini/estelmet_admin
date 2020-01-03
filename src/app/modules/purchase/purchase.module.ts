import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutingModule } from './purchaserouting';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { ShareModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MrModule } from "src/app/modules/purchase/pages/mr/mr.module";
import { CreateMrIdComponent } from './component/create-mr-id/create-mr-id.component';


@NgModule({
  declarations: [CreateMrIdComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule,
    ArchwizardModule,
    TextMaskModule,
    ShareModule,
    SharedModule,
    DataTablesModule,
    MrModule,
  ]
})
export class PurchaseModule { }
