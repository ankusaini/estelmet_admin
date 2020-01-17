import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePcComponent } from './create-pc/create-pc.component';
import { ArchwizardModule } from "ng2-archwizard/dist";
import { ShareModule } from "src/app/shared/shared.module";
import { SharedModule } from "src/app/theme/shared/shared.module";


@NgModule({
  declarations: [CreatePcComponent],
  imports: [
    
    CommonModule,
    ArchwizardModule,
    ShareModule,
    SharedModule,
  ]
})
export class PurchaseConfirmationModule { }
