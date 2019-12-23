import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMRComponent } from './pages/create-mr/create-mr.component';
import { PurchaseRoutingModule } from './purchaserouting';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';



@NgModule({
  declarations: [CreateMRComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule,
    ArchwizardModule,
    TextMaskModule
  ]
})
export class PurchaseModule { }
