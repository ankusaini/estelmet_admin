import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { TextMaskModule } from 'angular2-text-mask';
import { SelectModule } from 'ng-select';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { UserApprovalComponent } from 'src/app/modules/user/pages/user-approval/user-approval.component';
import { UsersListComponent } from 'src/app/modules/user/pages/users-list/users-list.component';
import { ShareModule } from 'src/app/shared/shared.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CompanyDetailsComponent } from './component/company-details/company-details.component';
import { CreateGroupIdComponent } from './component/create-group-id/create-group-id.component';
import { KeypersonDetailsComponent } from './component/keyperson-details/keyperson-details.component';
import { PersonalDetailsComponent } from './component/personal-details/personal-details.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { TradeDetailsComponent } from './component/trade-details/trade-details.component';
import { UserBuisnessComponent } from './component/user-buisness/user-buisness.component';
import { UserKeyPersonComponent } from './component/user-key-person/user-key-person.component';
import { UserPersonalDetailComponent } from './component/user-personal-detail/user-personal-detail.component';
import { UserSelectionComponent } from './component/user-selection/user-selection.component';
import { UserTradeDetailsComponent } from './component/user-trade-details/user-trade-details.component';
import { CreateUserGroupComponent } from './pages/create-user-group/create-user-group.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { GroupApprovalComponent } from './pages/group-approval/group-approval.component';
import { UserGroupEditviewComponent } from './pages/user-group-editview/user-group-editview.component';
import { UserGroupListComponent } from './pages/user-group-list/user-group-list.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserRoutingModule } from './user.routing';
import { GroupOverviewComponent } from './pages/group-overview/group-overview.component';
import { UserOverviewComponent } from './pages/user-overview/user-overview.component';


@NgModule({
  declarations: [
    CreateUserComponent,
    PersonalDetailsComponent,
    CompanyDetailsComponent,
    KeypersonDetailsComponent,
    TradeDetailsComponent,
    TermsConditionsComponent,
    UsersListComponent,
    CreateUserGroupComponent,
    CreateGroupIdComponent,
    UserSelectionComponent,
    UserGroupListComponent,
    GroupApprovalComponent,
    UserGroupEditviewComponent,
    UserPersonalDetailComponent,
    UserKeyPersonComponent,
    UserProfileComponent,
    UserTradeDetailsComponent,
    UserBuisnessComponent,
    UserApprovalComponent,
    GroupOverviewComponent,
    UserOverviewComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    ShareModule,
    DataTablesModule,
    FileUploadModule,
    SelectModule,
    NgbTabsetModule
  ]
})
export class UserModule { }
