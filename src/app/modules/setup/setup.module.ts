import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTypeComponent } from './create-type/create-type.component';
import { SetupRoutingModule } from "src/app/modules/setup/setup.routing";
import { DataTablesModule } from "angular-datatables";
import { FormsModule } from "@angular/forms";
import { TextMaskModule } from "angular2-text-mask/dist/angular2TextMask";
import { NgbTabsetModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { CreateClassComponent } from './create-class/create-class.component';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [CreateTypeComponent, CreateClassComponent],
  imports: [
    CommonModule,
    SetupRoutingModule,
    CommonModule,
    SharedModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    TextMaskModule,
    NgbTabsetModule,
  ]
})
export class SetupModule { 
}
