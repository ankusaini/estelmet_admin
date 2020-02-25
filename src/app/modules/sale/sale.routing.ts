import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTradleadComponent } from './pages/websiteSales/search-tradlead/search-tradlead.component';
import { SearchViewSoComponent } from './pages/directSales/search-view-so/search-view-so.component';
import { SearchViewScComponent } from './pages/salesConfirmation/search-view-sc/search-view-sc.component';
import { ScApprovalComponent } from './pages/salesConfirmation/sc-approval/sc-approval.component';
import { SoApprovalComponent } from './pages/directSales/so-approval/so-approval.component';
import { CreateSoComponent } from './pages/directSales/create-so/create-so.component';
import { CreateTradleadComponent } from './pages/websiteSales/create-tradlead/create-tradlead.component';
import { SoEditComponent } from './pages/directSales/so-edit/so-edit.component';
import { TlEditComponent } from './pages/websiteSales/tl-edit/tl-edit.component';
import { CreateScComponent } from './pages/salesConfirmation/create-sc/create-sc.component';
import { ScEditComponent } from './pages/salesConfirmation/sc-edit/sc-edit.component';


const routes: Routes= [
    {
        path: 'createSo',
        component: CreateSoComponent
    },
    {
        path: 'searchSo',
        component: SearchViewSoComponent
    },
    {
        path: 'soEdit/:id',
        component: SoEditComponent
    },
    {
        path: 'createTradelead',
        component: CreateTradleadComponent
    },
    {
        path: 'searchTradlead',
        component: SearchTradleadComponent
    },
    {
        path: 'searchSc',
        component: SearchViewScComponent
    },
    {
        path: 'scApproval',
        component: ScApprovalComponent
    },
    {
        path: 'soApproval',
        component: SoApprovalComponent
    },
    {
        path: 'createSc',
        component: CreateScComponent
    },
    {
        path: 'tlEdit/:id',
        component: TlEditComponent
    },
    {
        path: 'scEdit/:id',
        component: ScEditComponent
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SalesRoutingModule { }