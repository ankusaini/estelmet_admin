import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMRComponent } from "src/app/modules/purchase/pages/mr/view-mr/view-mr.component";
import { CreateMRComponent } from "src/app/modules/purchase/pages/mr/create-mr/create-mr.component";
import { ArchwizardModule } from "ng2-archwizard/dist";
import { ShareModule } from "src/app/shared/shared.module";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { PurchaseModule } from "src/app/modules/purchase/purchase.module";
import { NgbTabsetModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from 'ngx-toastr';
import { CreateLotComponent } from "src/app/modules/purchase/pages/purchaseLot/create-lot/create-lot.component";
import { CreateLotMtSelfComponent } from "src/app/modules/purchase/component/create-lot-mt-self/create-lot-mt-self.component";
import { CreateLotWithoutPcComponent } from "src/app/modules/purchase/component/create-lot-without-pc/create-lot-without-pc.component";
import { CreateLotWithPcComponent } from "src/app/modules/purchase/component/create-lot-with-pc/create-lot-with-pc.component";




@NgModule({
  declarations: [CreateLotComponent,CreateLotMtSelfComponent,CreateLotWithPcComponent,CreateLotWithoutPcComponent ],
  imports: [
    CommonModule,
    ArchwizardModule,
    ShareModule,
    SharedModule,
    NgbTabsetModule,
        ToastrModule.forRoot()

  ]
})
export class PurchaseLotModule { }
