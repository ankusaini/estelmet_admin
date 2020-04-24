import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/authgaurd/authGuard.service';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

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
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule),

      },
      {
        path: 'users',
        loadChildren: () => import('./modules/user/user.module').then(module => module.UserModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['USER_CREATE_PRIVILEGE', 'USER_DELETE_PRIVILEGE', 'USER_UPDATE_PRIVILEGE'],
            redirectTo: 'account/login'
          }
        }
      },
      {
        path: 'purchase',
        loadChildren: () => import('./modules/purchase/purchase.module').then(module => module.PurchaseModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['PURCHASE_CREATE_PRIVILEGE', 'PURCHASE_DELETE_PRIVILEGE1', 'PURCHASE_UPDATE_PRIVILEGE1'],
            redirectTo: 'login'
          }
        }
      },
      {
        path: 'inventory',
        loadChildren: () => import('./modules/inventory/inventory.module').then(module => module.InventoryModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['INVENTORY_CREATE_PRIVILEGE', 'INVENTORY_DELETE_PRIVILEGE', 'INVENTORY_UPDATE_PRIVILEGE'],
            redirectTo: 'login'
          }
        }
      },
      {
        path: 'processing',
        loadChildren: () => import('./modules/processing/processing.module').then(module => module.ProcessingModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['INVENTORY_CREATE_PRIVILEGE', 'INVENTORY_DELETE_PRIVILEGE', 'INVENTORY_UPDATE_PRIVILEGE'],
            redirectTo: 'login'
          }
        }
      },
      {
        path: 'salesLead',
        loadChildren: () => import('./modules/salesLead/salesLead.module').then(module => module.SalesLeadModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['SALES_CREATE_PRIVILEGE', 'SALES_DELETE_PRIVILEGE', 'SALES_UPDATE_PRIVILEGE'],
            redirectTo: 'login'
          }
        }
      },
      {
        path: 'sales',
        loadChildren: () => import('./modules/sale/sale.module').then(module => module.SaleModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['SALES_CREATE_PRIVILEGE', 'SALES_DELETE_PRIVILEGE', 'SALES_UPDATE_PRIVILEGE'],
            redirectTo: 'login'
          }
        }
      },
      {
        path: 'dispatch',
        loadChildren: () => import('./modules/dispatch/dispatch.module').then(module => module.DispatchModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['SALES_CREATE_PRIVILEGE', 'SALES_DELETE_PRIVILEGE', 'SALES_UPDATE_PRIVILEGE'],
            redirectTo: 'login'
          }
        }
      },
      {
        path: 'setup',
        loadChildren: () => import('./modules/setup/setup.module').then(module => module.SetupModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['WEBSITE_CREATE_PRIVILEGE', 'WEBSITE_DELETE_PRIVILEGE', 'WEBSITE_UPDATE_PRIVILEGE'],
            redirectTo: 'login'
          }
        }
      },
      {
        path: 'super',
        loadChildren: () => import('./modules/super/super.module').then(module => module.SuperModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['WEBSITE_CREATE_PRIVILEGE', 'WEBSITE_DELETE_PRIVILEGE', 'WEBSITE_UPDATE_PRIVILEGE'],
            redirectTo: 'login'
          }
        }
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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
