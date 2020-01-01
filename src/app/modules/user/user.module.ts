import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user.routing";
import { CreateUserComponent } from "./pages/create-user/create-user.component";
import { PersonalDetailsComponent } from "./component/personal-details/personal-details.component";
import { CompanyDetailsComponent } from "./component/company-details/company-details.component";
import { KeypersonDetailsComponent } from "./component/keyperson-details/keyperson-details.component";
import { TradeDetailsComponent } from "./component/trade-details/trade-details.component";
import { TermsConditionsComponent } from "./component/terms-conditions/terms-conditions.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextMaskModule } from "angular2-text-mask";
import { ArchwizardModule } from "ng2-archwizard/dist";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { SelectModule } from "ng-select";
import { FileUploadModule } from "@iplab/ngx-file-upload";
import { UsersListComponent } from "src/app/modules/user/pages/users-list/users-list.component";
import { DataTablesModule } from "angular-datatables";
import { CreateUserGroupComponent } from "./pages/create-user-group/create-user-group.component";
import { CreateGroupIdComponent } from "./component/create-group-id/create-group-id.component";
import { UserSelectionComponent } from "./component/user-selection/user-selection.component";
import { UserGroupListComponent } from "./pages/user-group-list/user-group-list.component";
import { GroupApprovalComponent } from "./pages/group-approval/group-approval.component";
import { NgbTabsetModule } from "@ng-bootstrap/ng-bootstrap";
import { UserGroupEditviewComponent } from "./pages/user-group-editview/user-group-editview.component";
import { UserPersonalDetailComponent } from "./component/user-personal-detail/user-personal-detail.component";
import { UserKeyPersonComponent } from "./component/user-key-person/user-key-person.component";
import { UserTradeDetailsComponent } from "./component/user-trade-details/user-trade-details.component";
import { UserBuisnessComponent } from "./component/user-buisness/user-buisness.component";
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


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
    UserBuisnessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    ArchwizardModule,
    SharedModule,
    DataTablesModule,
    FileUploadModule,
    SelectModule,
    NgbTabsetModule
  ]
})
export class UserModule {}
