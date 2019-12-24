import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from "src/app/modules/inventory/pages/add-product/add-product.component";
import { EditProductComponent } from "src/app/modules/inventory/pages/edit-product/edit-product.component";
import { ProductOverviewComponent } from "src/app/modules/inventory/pages/product-overview/product-overview.component";
import { ProductApprovalComponent } from "src/app/modules/inventory/pages/product-approval/product-approval.component";
import { SearchViewProductComponent } from "src/app/modules/inventory/pages/search-view-product/search-view-product.component";


const routes: Routes = [
  {
    path: 'addProduct',
    component : AddProductComponent,
  },
 
      {
        path: 'editProduct',
        component: EditProductComponent
      }
   ,
      {
        path: 'productOverview',
        component: ProductOverviewComponent
      }
   
      ,
         {
        path: 'productApproval',
        component: ProductApprovalComponent
      }
   ,
      {
        path: 'searchProduct',
        component: SearchViewProductComponent
      }
   
    ]
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
