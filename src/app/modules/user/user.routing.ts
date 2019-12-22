import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';


const routes: Routes = [
  {
    path: '',
    component : CreateUserComponent,
    children: [
      {
        path: 'profile',
        // loadChildren: () => import('./user-profile/user-profile.module').then(module => module.UserProfileModule)
      },
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
    //   {
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
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }