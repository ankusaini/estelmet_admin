import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { CreateGroupComponent } from './create-group/create-group.component';
import { TextMaskModule } from 'angular2-text-mask';
import { SearchViewGroupComponent } from './search-view-group/search-view-group.component';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { UsersListComponent } from './users-list/users-list.component';
import { GroupApprovalComponent } from './group-approval/group-approval.component';
import { UserApprovalComponent } from './user-approval/user-approval.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupEditComponent } from './group-edit/group-edit.component';
@NgModule({
  declarations: [
    CreateGroupComponent,
    SearchViewGroupComponent,
    GroupOverviewComponent,
    GroupApprovalComponent,
    UserApprovalComponent,
    GroupEditComponent
  ],
  imports: [
    ArchwizardModule,
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    DataTablesModule,
    FormsModule,
    TextMaskModule,
    NgbTabsetModule
  ]
})
export class UsersModule { }
