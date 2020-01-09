import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTradleadComponent } from './pages/websiteSales/search-tradlead/search-tradlead.component';
import { SearchViewSoComponent } from './pages/directSales/search-view-so/search-view-so.component';
import { SearchViewScComponent } from './pages/salesConfirmation/search-view-sc/search-view-sc.component';


const routes: Routes= [
    {
        path: 'searchTradlead',
        component: SearchTradleadComponent
    },
    {
        path: 'searchSo',
        component: SearchViewSoComponent
    },
    {
        path: 'searchSc',
        component: SearchViewScComponent
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SalesRoutingModule { }