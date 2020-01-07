import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UsersListComponent } from "src/app/modules/user/pages/users-list/users-list.component";
import { CreateUserGroupComponent } from "src/app/modules/user/pages/create-user-group/create-user-group.component";
import { UserGroupListComponent } from "src/app/modules/user/pages/user-group-list/user-group-list.component";
import { GroupApprovalComponent } from "src/app/modules/user/pages/group-approval/group-approval.component";
import { UserGroupEditviewComponent } from "src/app/modules/user/pages/user-group-editview/user-group-editview.component";
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserApprovalComponent } from "src/app/modules/user/pages/user-approval/user-approval.component";


const routes: Routes = [
  {
    path: 'createUser',
    component : CreateUserComponent
  },
  {
    path: 'profile/:id',
    component : UserProfileComponent
    // loadChildren: () => import('./pages/user-profile/user-profile.module').then(module => module.UserProfileModule)
  },
  {
      path: 'list',
    component : UsersListComponent
  },
   {
      path: 'userApproval',
    component : UserApprovalComponent
  },
   {
      path: 'createGroup',
    component : CreateUserGroupComponent
  },
  {
      path: 'searchGroup',
    component : UserGroupListComponent
  },
    {
      path: 'groupApproval',
    component : GroupApprovalComponent
  },
   {
      path: 'editGroup',
    component : UserGroupEditviewComponent
  },
  {
      path: 'editGroup/:groupId',
    component : UserGroupEditviewComponent
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
