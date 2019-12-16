import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGroupComponent } from './create-group/create-group.component';
import { SearchViewGroupComponent } from './search-view-group/search-view-group.component';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { UserApprovalComponent } from './user-approval/user-approval.component';
import { GroupApprovalComponent } from './group-approval/group-approval.component';
import { GroupEditComponent } from './group-edit/group-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./user-profile/user-profile.module').then(module => module.UserProfileModule)
      },
      {
        path: 'card',
        loadChildren: () => import('./users-card/users-card.module').then(module => module.UsersCardModule)
      },
      {
        path: 'list',
        loadChildren: () => import('./users-list/users-list.module').then(module => module.UsersListModule)
      },
      {
        path: 'createGroup',
        component: CreateGroupComponent
      },
      {
        path: 'searchGroup',
        component: SearchViewGroupComponent
      },
      {
        path: 'groupOverview',
        component: GroupOverviewComponent
      },
      {
        path: 'userApproval',
        component: UserApprovalComponent
      },
      {
        path: 'groupApproval',
        component: GroupApprovalComponent
      },
      {
        path: 'editGroup',
        component: GroupEditComponent
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
