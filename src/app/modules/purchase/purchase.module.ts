import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutingModule } from './purchase.routing';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { ShareModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MrModule } from "src/app/modules/purchase/pages/mr/mr.module";
import { CreateMrIdComponent } from './component/create-mr-id/create-mr-id.component';
import { SearchViewPcComponent } from './pages/purchase-confirmation/search-view-pc/search-view-pc.component';
import { SearchViewLotComponent } from './pages/purchaseLot/search-view-lot/search-view-lot.component';
import { PcApprovalComponent } from './pages/purchase-confirmation/pc-approval/pc-approval.component';
// import { PurchasrListFullDetailsComponent } from 'src/app/shared/components/purchasr-list-full-details/purchasr-list-full-details.component';

import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    CreateMrIdComponent,
    SearchViewPcComponent,
    SearchViewLotComponent,
    // PurchasrListFullDetailsComponent,
    PcApprovalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PurchaseRoutingModule,
    ArchwizardModule,
    TextMaskModule,
    ShareModule,
    NgbTabsetModule,
    DataTablesModule,
    MrModule,
   ToastrModule.forRoot()
  ]
})
export class PurchaseModule { }
