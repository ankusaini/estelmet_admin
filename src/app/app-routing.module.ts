import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/authgaurd/authGuard.service';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/user/user.module').then(module => module.UserModule)
      },
      {
        path: 'purchase',
        loadChildren: () => import('./modules/purchase/purchase.module').then(module => module.PurchaseModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./modules/inventory/inventory.module').then(module => module.InventoryModule)
      },
      {
        path: 'processing',
        loadChildren: () => import('./modules/processing/processing.module').then(module => module.ProcessingModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('./modules/sale/sale.module').then(module => module.SaleModule)
      },
      {
        path: 'dispatch',
        loadChildren: () => import('./modules/dispatch/dispatch.module').then(module => module.DispatchModule)
      },
      {
        path: 'setup',
        loadChildren: () => import('./modules/setup/setup.module').then(module => module.SetupModule)
      },
      {
        path: 'super',
        loadChildren: () => import('./modules/super/super.module').then(module => module.SuperModule)
      },
      {
        path: 'salesLead',
        loadChildren: () => import('./modules/salesLead/salesLead.module').then(module => module.SalesLeadModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'maintenance',
        pathMatch: 'full'
      },
      {
        path: 'account',
        loadChildren: () => import('./modules/account/account.module').then(module => module.AccountModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./modules/account/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
