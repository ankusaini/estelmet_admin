import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSalesLeadComponent } from './create-sales-lead/create-sales-lead.component';
import { SearchSalesLeadComponent } from './search-sales-lead/search-sales-lead.component';
import { SlOverviewComponent } from './sl-overview/sl-overview.component';
import { SlEditComponent } from './sl-edit/sl-edit.component';

const routes: Routes = [
  {
    path: 'createSalesLead',
    component: CreateSalesLeadComponent,
  },
  {
    path: 'searchSalesLead',
    component: SearchSalesLeadComponent,
  },
  {
    path: 'slOverview',
    component: SlOverviewComponent,
  },
  {
    path: 'editSl',
    component: SlEditComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesLeadRoutingModule { }
