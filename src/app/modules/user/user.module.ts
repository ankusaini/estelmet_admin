import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { PersonalDetailsComponent } from './component/personal-details/personal-details.component';
import { CompanyDetailsComponent } from './component/company-details/company-details.component';
import { KeypersonDetailsComponent } from './component/keyperson-details/keyperson-details.component';
import { TradeDetailsComponent } from './component/trade-details/trade-details.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextMaskModule } from 'angular2-text-mask';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SelectModule } from 'ng-select';
import { FileUploadModule } from '@iplab/ngx-file-upload'


@NgModule({
  declarations: [CreateUserComponent, PersonalDetailsComponent, CompanyDetailsComponent, KeypersonDetailsComponent, TradeDetailsComponent, TermsConditionsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    FileUploadModule,
    SelectModule
  ]
})
export class UserModule { }
