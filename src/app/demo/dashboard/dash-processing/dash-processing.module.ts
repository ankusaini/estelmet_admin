import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashProcessingComponent } from './dash-processing.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [DashProcessingComponent]
})
export class DashProcessingModule { }
