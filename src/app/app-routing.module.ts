import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/user/user.module').then(module => module.UserModule)
      },
      {
        path: 'purchase',
        loadChildren: () => import('./demo/purchase/purchase.module').then(module => module.PurchaseModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./modules/inventory/inventory.module').then(module => module.InventoryModule)
      },
      {
        path: 'processing',
        loadChildren: () => import('./demo/processing/processing.module').then(module => module.ProcessingModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('./demo/sales/sales.module').then(module => module.SalesModule)
      },
      {
        path: 'dispatch',
        loadChildren: () => import('./demo/dispatch/dispatch.module').then(module => module.DispatchModule)
      },
      // {
      //   path: 'setup',
      //   loadChildren: () => import('./modules/setup/setup.module').then(module => module.SetupModule)
      // },
       {
        path: 'setup',
        loadChildren: () => import('./demo/setup/setup.module').then(module => module.SetupModule)
      },
      {
        path: 'super',
        loadChildren: () => import('./demo/super/super.module').then(module => module.SuperModule)
      },
      {
        path: 'salesLead',
        loadChildren: () => import('./demo/salesLead/salesLead.module').then(module => module.SalesLeadModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
