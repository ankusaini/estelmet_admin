import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserGroupComponent } from 'src/app/modules/user/pages/create-user-group/create-user-group.component';
import { GroupApprovalComponent } from 'src/app/modules/user/pages/group-approval/group-approval.component';
import { UserApprovalComponent } from 'src/app/modules/user/pages/user-approval/user-approval.component';
import { UserGroupEditviewComponent } from 'src/app/modules/user/pages/user-group-editview/user-group-editview.component';
import { UserGroupListComponent } from 'src/app/modules/user/pages/user-group-list/user-group-list.component';
import { UsersListComponent } from 'src/app/modules/user/pages/users-list/users-list.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { GroupOverviewComponent } from './pages/group-overview/group-overview.component';
import { NgxPermissionsGuard } from "ngx-permissions";

const routes: Routes = [
  {
    path: 'createUser',
    component: CreateUserComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions:
      {
        only: ['USER_CREATE_PRIVILEGE', 'USER_DELETE_PRIVILEGE', 'USER_UPDATE_PRIVILEGE']
      }
    }
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
    canActivate: [NgxPermissionsGuard]
    // loadChildren: () => import('./pages/user-profile/user-profile.module').then(module => module.UserProfileModule)
  },
  {
    path: 'list',
    component: UsersListComponent
  },
  {
    path: 'userApproval',
    component: UserApprovalComponent
  },
  {
    path: 'createGroup',
    component: CreateUserGroupComponent
  },
  {
    path: 'searchGroup',
    component: UserGroupListComponent
  },
  {
    path: 'groupApproval',
    component: GroupApprovalComponent
  },
  //  {
  //     path: 'editGroup',
  //   component : UserGroupEditviewComponent
  // },
  {
    path: 'editGroup/:groupId',
    component: UserGroupEditviewComponent
  },
  {
    path: 'groupOverview',
    component: GroupOverviewComponent
  },

  // children: [
  //   {
  //     path: 'list',
  //     component:
  //     // loadChildren: () => import('./user-profile/user-profile.module').then(module => module.UserProfileModule)
  //   },
  //   {
  //     path: 'card',
  //     loadChildren: () => import('./users-card/users-card.module').then(module => module.UsersCardModule)
  //   },
  //   {
  //     path: 'list',
  //     loadChildren: () => import('./users-list/users-list.module').then(module => module.UsersListModule)
  //   },
  //   {
  //     path: 'createGroup',
  //     component: CreateGroupComponent
  //   },
  //   {
  //     path: 'searchGroup',
  //     component: SearchViewGroupComponent
  //   },
  //   {
  //     path: 'groupOverview',
  //     component: GroupOverviewComponent
  //   },
  // ,  {
  //     path: 'userApproval',
  //     component: UserApprovalComponent
  //   },
  //   {
  //     path: 'groupApproval',
  //     component: GroupApprovalComponent
  //   },
  //   {
  //     path: 'editGroup',
  //     component: GroupEditComponent
  //   },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
