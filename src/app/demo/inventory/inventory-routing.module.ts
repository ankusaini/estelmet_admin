import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductCartComponent } from './add-product-cart/add-product-cart.component';
import { SearchViewProductComponent } from './search-view-product/search-view-product.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductApprovalComponent } from './product-approval/product-approval.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
    {
        path: 'addProduct',
        component: AddProductComponent
    },
    {
        path: 'addProductCart',
        component: AddProductCartComponent
    },
    {
        path: 'searchProduct',
        component: SearchViewProductComponent
    },
    {
        path: 'productOverview',
        component: ProductOverviewComponent
    },
    {
        path: 'productApproval',
        component: ProductApprovalComponent
    },
    {
        path: 'editProduct',
        component: EditProductComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InventoryRoutingModule { }
