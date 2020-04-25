import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDefaultRoutingModule } from './dash-default-routing.module';
import { DashDefaultComponent } from './dash-default.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashDefaultComponent],
  imports: [
    CommonModule,
    DashDefaultRoutingModule,
    SharedModule,
    NgbTooltipModule,
    NgbPopoverModule
  ]
})
export class DashDefaultModule { }
