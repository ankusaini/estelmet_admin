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
import { SearchAuctionComponent } from './pages/websiteSales/search-auction/search-auction.component';
import { CreateAuctionComponent } from './pages/websiteSales/create-auction/create-auction.component';
import { SoOverviewComponent } from './pages/directSales/so-overview/so-overview.component';
import { ScOverviewComponent } from './pages/salesConfirmation/sc-overview/sc-overview.component';
import { CustomerOrderComponent } from './pages/customer-order/customer-order.component';
import { SearchViewCOComponent } from './components/search-view-co/search-view-co.component';


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
    },
    {
        path: 'searchAuction',
        component: SearchAuctionComponent
    },
    {
        path: 'createAuction',
        component: CreateAuctionComponent
    },
    {
        path: 'soOverview',
        component: SoOverviewComponent
    },
    {
        path: 'scOverview',
        component: ScOverviewComponent
    },
    {
        path: 'createCO',
        component: CustomerOrderComponent
    },
    {
        path: 'searchCo',
        component: SearchViewCOComponent
    }

];

// children: [
//     {
//       id: 'createAuctionOffer',
//       title: 'Create Auction LOT',
//       type: 'item',
//       // url: '/layout/static',
//       url: '/createAuction',
//       target: false,
//     },
//     {
//       id: 'searchAuctionOffer',
//       title: 'Search Auction LOT',
//       type: 'item',
//       // url: '/layout/static',
//       url: '/searchAuction',
//       target: false,
//     },
//     {
//       id: 'scheduleAuctionOffer',
//       title: 'Schedule Auction LOT',
//       type: 'item',
//       // url: '/layout/static',
//       url: 'scheduleAuction',
//       target: false,
//     },
//     {
//       id: 'sendAuctionOffer',
//       title: 'Send Auction Notification',
//       type: 'item',
//       // url: '/layout/static',
//       url: 'sendAuctionOffer',
//       target: false,
//     },
//     {
//       id: 'overviewAuctionOffer',
//       title: 'Auction Overview',
//       type: 'item',
//       // url: '/layout/static',
//       url: 'overviewAuction',
//       target: false,
//     }
//   ]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SalesRoutingModule { }