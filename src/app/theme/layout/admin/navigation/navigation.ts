import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  permissions?:string[];
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'collapse',
    icon: 'feather icon-home',
    children: [
      {
        id: 'userDash',
        title: 'Users',
        type: 'item',
        url: '/dashboard/default'
      },
      {
        id: 'purchasDash',
        title: 'Purchase',
        type: 'item',
        url: '/dashboard/sale'
      },
      {
        id: 'inventoryDash',
        title: 'Inventory',
        type: 'item',
        url: '/dashboard/crm'
      },
      {
        id: 'processDash',
        title: 'Processing',
        type: 'item',
        url: '/dashboard/project'
      },
      {
        id: 'salesDash',
        title: 'Sales',
        type: 'item',
        url: '/dashboard/analytics'
      },
      // {
      //   id: 'project',
      //   title: 'Project',
      //   type: 'item',
      //   url: '/dashboard/project'
      // }
    ]
  },
  {
    id: 'userTitle',
    title: 'Users',
    type: 'group',
    icon: 'feather icon-layout',
    permissions:['USER_CREATE_PRIVILEGE','USER_DELETE_PRIVILEGE','USER_UPDATE_PRIVILEGE'],
    children: [
      {
        id: 'user',
        title: 'Users',
        type: 'collapse',
        icon: 'feather icon-user',
        children: [
          {
            id: 'CreateUser',
            title: 'Create User',
            type: 'item',
            url: '/users/createUser',
            target: false,
          },
          {
            id: 'SearchViewUser',
            title: 'Search & View User',
            type: 'item',
            url: '/users/list',
            target: false,
          },
          {
            id: 'userOverview',
            title: 'User Overview',
            type: 'item',
            url: '/users/profile/1',
            target: false,
          },
          {
            id: 'approvalUser',
            title: 'User Approval',
            permissions:['USER_DELETE_PRIVILEGE','USER_UPDATE_PRIVILEGE'],
            type: 'item',
            url: '/users/userApproval',
            target: false,
          }
        ]
      },

      {
        id: 'groupUser',
        title: 'Users Group',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
          {
            id: 'CreateUserGroup',
            title: 'Create User Group',
            type: 'item',
            url: '/users/createGroup',
            target: false,
          },
          {
            id: 'SearchViewUserGroup',
            title: 'Search & View User Group',
            type: 'item',
            url: '/users/searchGroup',
            target: false,
          },
          {
            id: 'overviewGroup',
            title: 'Overview Group',
            type: 'item',
            url: '/users/groupOverview',
            target: false,
          },
          {
            id: 'approvalGroup',
            title: 'Group Approval',
            permissions:['USER_DELETE_PRIVILEGE','USER_UPDATE_PRIVILEGE'],
            type: 'item',
            url: '/users/groupApproval',
            target: false,
          },
          // {
          //   id: 'EditGroup',
          //   title: 'Edit Group',
          //   type: 'item',
          //   url: '/users/editGroup',
          //   target: false,
          // }
        ]
      },
    ]
  },


  {
    id: 'purchaseHead',
    title: 'Purchase',
    type: 'group',
    icon: 'feather icon-layout',
    permissions:['PURCHASE_CREATE_PRIVILEGE','PURCHASE_DELETE_PRIVILEGE','PURCHASE_UPDATE_PRIVILEGE'],
    children: [
      {
        id: 'materialRequirement',
        title: 'Material Requirement',
        icon: 'feather icon-layers',
        type: 'collapse',
        children: [
          {
            id: 'CreateMR',
            title: 'Create MR',
            type: 'item',
            url: '/purchase/createMr',
            target: false,
          },
          {
            id: 'SearchViewMR',
            title: 'Search & View MR',
            type: 'item',
            url: '/purchase/searchViewMr',
            target: false,
          },
          {
            id: 'mrOverview',
            title: 'MR Overview',
            type: 'item',
            url: '/purchase/pcOverview', 
            target: false,
          },
          {
            id: 'mrApproval',
            title: 'MR Approval',
            type: 'item',
            permissions:['PURCHASE_DELETE_PRIVILEGE','PURCHASE_UPDATE_PRIVILEGE'],
            url: '/purchase/mrApproval',
            target: false,
          },
          // {
          //   id: 'mrEdit',
          //   title: 'MR Edit',
          //   type: 'item',
          //   url: '/purchase/mrEdit',
          //   target: false,
          // },
        ]
      },
      {
        id: 'purchaseOrder',
        title: 'Purchase Order',
        icon: 'feather icon-file-text',
        type: 'collapse',
        children: [
          {
            id: 'createPurchaseOrder',
            title: 'Create Purchase Quotation',
            type: 'item',
            url: '/purchase/createPo',
            target: false,
          },
          {
            id: 'PurchaseQuote',
            title: 'Purchase Quote',
            type: 'item',
            url: '/purchase/purchaseQuote',
            target: false,
          },
          {
            id: 'PurchaseView',
            title: 'Search & View PQ',
            type: 'item',
            url: '/purchase/viewPO',
            target: false,
          },
          {
            id: 'PurchaseLink',
            title: ' Send Purchase Quotation',
            type: 'item',
            url: '/purchase/purchaseLink',
            target: false,
          },
          {
            id: 'PoOverview',
            title: ' Purchase Order Overview',
            type: 'item',
            url: '/purchase/pcOverview',
            target: false,
          },
          // {
          //   id: 'PurchaseEdit',
          //   title: ' Edit Purchase Quotation',
          //   type: 'item',
          //   url: '/purchase/editPQ',
          //   target: false,
          // },
        ]
      },
      {
        id: 'purchaseConfirmation',
        title: 'Purchase Confirmation',
        icon: 'feather icon-thumbs-up',
        type: 'collapse',
        children: [
          {
            id: 'CreatePc',
            title: 'Create PC',
            type: 'item',
            url: '/purchase/createPc',
            target: false,
          },
          {
            id: 'searchViewPC',
            title: 'Search & View PC',
            type: 'item',
            url: '/purchase/searchPc',
            target: false,
          },
          {
            id: 'pcOverview',
            title: 'PC Overview',
            type: 'item',
            url: '/purchase/pcOverview',
            target: false,
          },
          {
            id: 'pcApproval',
            title: 'PC Approval',
            type: 'item',
            permissions:['PURCHASE_DELETE_PRIVILEGE','PURCHASE_UPDATE_PRIVILEGE'],
            url: '/purchase/pcApproval',
            target: false,
          },
          // {
          //   id: 'PcEdit',
          //   title: 'PC Edit',
          //   type: 'item',
          //   url: '/purchase/pcEdit',
          //   target: false,
          // },
        ]
      },
      {
        id: 'purchaseLot',
        title: 'Purchase Lot',
        icon: 'feather icon-box',
        type: 'collapse',
        children: [
          {
            id: 'lotWithpc',
            title: 'Create LOT',
            type: 'item',
            url: '/purchase/lotWithPc',
            target: false,
          },
          // {
          //   id: 'lotWithoutPc',
          //   title: 'Create LOT Without PC',
          //   type: 'item',
          //   url: '/purchase/lotWithoutPc',
          //   target: false,
          // },
          // {
          //   id: 'lotMtSelfJob',
          //   title: 'Create LOT (MT & Self Job)',
          //   type: 'item',
          //   url: '/purchase/lotMt',
          //   target: false,
          // },
          {
            id: 'SearchViewLot',
            title: 'Search & View LOT',
            type: 'item',
            url: '/purchase/searchLot',
            target: false,
          },
          {
            id: 'lotOverview',
            title: 'LOT Overview',
            type: 'item',
            url: '/purchase/lotOverview',
            target: false,
          },
          {
            id: 'lotApproval',
            title: 'LOT Approval',
            type: 'item',
            url: '/purchase/lotApproval',  
            permissions:['PURCHASE_DELETE_PRIVILEGE','PURCHASE_UPDATE_PRIVILEGE'],

            target: false,
          },
          // {
          //   id: 'EditApproval',
          //   title: 'LOT Edit',
          //   type: 'item',
          //   url: '/purchase/lotEdit',
          //   target: false,
          // },
        ]
      },
      {
        id: 'grnModule',
        title: 'GRN Module',
        icon: 'feather icon-command',
        type: 'collapse',
        children: [
          {
            id: 'grnCreate',
            title: 'Create GRN',
            type: 'item',
            url: '/purchase/grnLot'
          },
          // {
          //   id: 'jobWrkGrn',
          //   title: 'Job Work Chalan',
          //   type: 'item',
          //   url: '/purchase/grnLot',
          //   target: false,
          // },
          // {
          //   id: 'mtSelfGrn',
          //   title: 'MT & Self Job Work',
          //   type: 'item',
          //   url: '/purchase/grnLot',
          //   target: false,
          // },
          {
            id: 'SearchViewGrn',
            title: 'Search & View GRN',
            type: 'item',
            url: '/purchase/searchGrn',
            target: false,
          },
          {
            id: 'grnOverview',
            title: 'GRN Overview',
            type: 'item',
            url: '/purchase/grnOverview',
            target: false,
          },
          {
            id: 'grnApproval',
            title: 'GRN Approval',
            type: 'item',
            url: '/purchase/grnApproval',
            permissions:['PURCHASE_DELETE_PRIVILEGE','PURCHASE_UPDATE_PRIVILEGE'],
            target: false,
          },
          // {
          //   id: 'GrnEdit',
          //   title: 'GRN Edit',
          //   type: 'item',
          //   url: '/purchase/grnEdit',
          //   target: false,
          // }
        ]
      }
    ]
  },
  {
    id: 'inventoryHeading',
    title: 'Inventory',
    type: 'group',
    permissions:['INVENTORY_CREATE_PRIVILEGE','INVENTORY_DELETE_PRIVILEGE','INVENTORY_UPDATE_PRIVILEGE'],
    children: [
      {
        id: 'inventory',
        title: 'Inventory',
        type: 'collapse',
        icon: 'feather icon-grid',
        children: [
          {
            id: 'addProduct',
            title: 'Add Product',
            type: 'item',
            url: '/inventory/addProduct',
            target: false,
          },
          {
            id: 'searchProduct',
            title: 'Search & View Product',
            type: 'item',
            url: '/inventory/searchProduct',
            target: false,
          },
          {
            id: 'overviewProduct',
            title: 'Product Overview',
            type: 'item',
            url: '/inventory/productOverview',
            target: false,
          },
          {
            id: 'approvalProduct',
            title: 'Product Approval',
            type: 'item',
            url: '/inventory/productApproval',
            permissions:['INVENTORY_DELETE_PRIVILEGE','INVENTORY_UPDATE_PRIVILEGE'],

            target: false,
          },
          // {
          //   id: 'EditProduct',
          //   title: 'Edit Product',
          //   type: 'item',
          //   url: '/inventory/editProduct',
          //   target: false,
          // }
        ]
      },
      {
        id: 'processing',
        title: 'Processing',
        type: 'collapse',
        icon: 'feather icon-sliders',
        children: [
          {
            id: 'createProcessing',
            title: 'Create Processing Id',
            type: 'item',
            url: '/processing/createProcessing',
            target: false,
          },
          {
            id: 'updateProcessing',
            title: 'Update Processing Id',
            type: 'item',
            url: '/processing/updateProcessing',
            target: false,
          },
          {
            id: 'searchProcessing',
            title: 'Search & View Processing',
            type: 'item',
            url: '/processing/searchProcessing',
            target: false,
          },
          {
            id: 'processingOverview',
            title: 'Processing Overview',
            type: 'item',
            url: '/processing/processingOverview',
            target: false,
          },
          {
            id: 'approvalProcessing',
            title: 'Processing Approval',
            type: 'item',
            url: '/processing/processingApproval',
            permissions:['INVENTORY_DELETE_PRIVILEGE','INVENTORY_UPDATE_PRIVILEGE'],
            target: false,
          },
          // {
          //   id: 'EditProcessing',
          //   title: 'Edit Processing',
          //   type: 'item',
          //   url: '/processing/editProcessing',
          //   target: false,
          // },
          // {
          //   id: 'COProcessing',
          //   title: 'CO to Processing',
          //   type: 'item',
          //   url: '/processing/convertCOProcessing',
          //   target: false,
          // },
          // {
          //   id: 'MergeProduct',
          //   title: 'Merge Product',
          //   type: 'item',
          //   url: '/processing/mergeProduct',
          //   target: false,
          // }
        ]
      },
    ]
  },
  {
    id: 'salesHeading',
    title: 'Sales',
    type: 'group',
    permissions:['SALES_CREATE_PRIVILEGE','SALES_DELETE_PRIVILEGE','SALES_UPDATE_PRIVILEGE'],
    children: [
      // {
      //   id: 'salesLead',
      //   title: 'Sales Lead',
      //   type: 'collapse',
      //   icon: 'feather icon-shopping-cart',
      //   children: [
          // {
          //   id: 'createSalesLead',
          //   title: 'Create Sales lead',
          //   type: 'item',
          //   url: '/salesLead/createSalesLead',
          //   target: false,
          // },
          // {
          //   id: 'searchSalesLead',
          //   title: 'Search Sales lead',
          //   type: 'item',
          //   url: '/salesLead/searchSalesLead',
          //   target: false,
          // },
          // {
          //   id: 'OverviewSalesLead',
          //   title: 'Sales lead Overview',
          //   type: 'item',
          //   url: '/salesLead/slOverview',
          //   target: false,
          // },
          // {
          //   id: 'EditSalesLead',
          //   title: 'Edit Sales lead',
          //   type: 'item',
          //   url: '/salesLead/editSl',
          //   target: false,
          // }
      //   ]
      // },
      {
        id: 'salesTab',
        title: 'Sales',
        type: 'collapse',
        icon: 'feather icon-shopping-cart',
        
        children: [
          {
            id: 'directSales',
            title: 'Direct Sales',
            type: 'collapse',
            children: [
              {
                id: 'salesOfferLot',
                title: 'Sales Offer LOT',
                type: 'collapse',
                children: [
                  {
                    id: 'salesOfferCreate',
                    title: 'Create Sales Offer',
                    type: 'item',
                    url: '/sales/createSo',
                    target: false,
                  },
                  // {
                  //   id: 'salesOfferCustomer',
                  //   title: 'Create SO by Customer',
                  //   type: 'item',
                  //   url: '/sales/createSoCustomer',
                  //   target: false,
                  // },
                  {
                    id: 'searchSalesOffer',
                    title: 'Search View Customer',
                    type: 'item',
                    url: '/sales/searchSo',
                    target: false,
                  },
                  // {
                  //   id: 'sendSOCustomer',
                  //   title: 'Send SO to Customers',
                  //   type: 'item',
                  //   url: '/sales/sendSO',
                  //   target: false,
                  // },
                  {
                    id: 'soOverviewTab',
                    title: 'SO Overview',
                    type: 'item',
                    url: '/sales/soOverview',
                    target: false,
                  },
                  {
                    id: 'approvalSo',
                    title: 'SO Approval',
                    type: 'item',
                    permissions:['SALES_DELETE_PRIVILEGE','SALES_UPDATE_PRIVILEGE'],
                    url: '/sales/soApproval',
                    target: false,
                  },
                  // {
                  //   id: 'EditSO',
                  //   title: 'SO Edit',
                  //   type: 'item',
                  //   url: '/sales/soEdit',
                  //   target: false,
                  // },
                ]
              },
            ]
          },
          {
            id: 'salesWebsite',
            title: 'Website Sales',
            type: 'collapse',
            children: [
              {
                id: 'offerTradeLead',
                title: 'TradeLead Offer',
                type: 'collapse',
                children: [
                  {
                    id: 'createTradeLead',
                    title: 'Create TradeLead',
                    type: 'item',
                    url: '/sales/createTradelead',
                    target: false,
                  },
                  {
                    id: 'searchTradeLead',
                    title: 'Search & View TradeLead',
                    type: 'item',
                    url: '/sales/searchTradlead',
                    target: false,
                  },
                  // {
                  //   id: 'uploadTradeLead',
                  //   title: 'Upload TradeLead',
                  //   type: 'item',
                  //   url: '/sales/uploadtl',
                  //   target: false,
                  // },
                  // {
                  //   id: 'overviewTradeLead',
                  //   title: 'TradeLead Overview',
                  //   type: 'item',
                  //   url: '/sales/tlOverview',
                  //   target: false,
                  // },
                  // {
                  //   id: 'EditTradeLead',
                  //   title: 'Edit TradeLead',
                  //   type: 'item',
                  //   url: '/sales/tlEdit',
                  //   target: false,
                  // },
                ]
              },
              {
                id: 'auctionOffer',
                title: 'Auction Offer Lot',
                type: 'collapse',
                children: [
                  {
                    id: 'createAuctionOffer',
                    title: 'Create Auction LOT',
                    type: 'item',
                    // url: '/layout/static',
                    url: '/sales/createAuction',
                    target: false,
                  },
                  {
                    id: 'searchAuctionOffer',
                    title: 'Search Auction LOT',
                    type: 'item',
                    // url: '/layout/static',
                    url: '/sales/searchAuction',
                    target: false,
                  },
                  {
                    id: 'scheduleAuctionOffer',
                    title: 'Schedule Auction LOT',
                    type: 'item',
                    // url: '/layout/static',
                    url: '/sales/scheduleAuction',
                    target: false,
                  },
                  {
                    id: 'sendAuctionOffer',
                    title: 'Send Auction Notification',
                    type: 'item',
                    // url: '/layout/static',
                    url: '/sales/sendAuctionOffer',
                    target: false,
                  },
                  {
                    id: 'overviewAuctionOffer',
                    title: 'Auction Overview',
                    type: 'item',
                    // url: '/layout/static',
                    url: '/sales/overviewAuction',
                    target: false,
                  }
                ]
              },
            ]
          },
          // {
          //   id: 'customerOrder',
          //   title: 'Customer Order (CO)',
          //   type: 'collapse',
          //   children: [
          //     {
          //       id: 'createCustomerOrder',
          //       title: 'Create CO LOT Id',
          //       type: 'item',
          //       url: '/sales/createCO',
          //       target: false,
          //     },
          //     {
          //       id: 'SearchCustomerOrder',
          //       title: 'Search & View CO LOT',
          //       type: 'item',
          //       url: '/sales/searchCo',
          //       target: false,
          //     },
          //     {
          //       id: 'overviewCustomerOrder',
          //       title: 'CO LOT Overview',
          //       type: 'item',
          //       url: '/layout/fixed',
          //       target: false,
          //     },
          //   ]
          // },
          {
            id: 'salesConfirmation',
            title: 'Sales Confirmation (SC)',
            type: 'collapse',
            children: [
              {
                id: 'createSalesConfirmation',
                title: 'Create SC LOT ID',
                type: 'item',
                url: '/sales/createSc',
                target: false,
              },
              {
                id: 'searchSalesConfirmation',
                title: 'Search & View SC',
                type: 'item',
                url: '/sales/searchSc',
                target: false,
              },
              {
                id: 'overviewSalesConfirmation',
                title: 'SC Overview',
                type: 'item',
                url: '/sales/scOverview',
                target: false,
              },
              {
                id: 'approvalSalesConfirmation',
                title: 'SC Approval',
                type: 'item',
                permissions:['SALES_DELETE_PRIVILEGE','SALES_UPDATE_PRIVILEGE'],

                url: '/sales/scApproval',
                target: false,
              },
              {
                id: 'EditSalesConfirmation',
                title: 'SC Edit',
                type: 'item',
                url: '/sales/scEdit',
                target: false,
              },
            ]
          }
        ]
      },
      {
        id: 'dispatch',
        title: 'Dispatch',
        type: 'collapse',
        icon: 'feather icon-copy',
        children: [
          {
            id: 'load',
            title: 'Create Loading Slip',
            type: 'item',
            url: '/dispatch/loadingSlip',
            target: false,
          },
          {
            id: 'loadOverview',
            title: 'Loading Slip Overview',
            type: 'item',
            url: '/dispatch/loadSlipOverview',
            target: false,
          },
          {
            id: 'deliveryOrder',
            title: 'Delivery Order',
            type: 'collapse',
            children: [
              {
                id: 'createDeliveryOrder',
                title: 'Create Delivery Order',
                type: 'item',
                url: '/dispatch/createDo',
                target: false,
              },
              {
                id: 'kataWeight',
                title: 'Add Kata Weight',
                type: 'item',
                url: '/dispatch/addKata',
                target: false,
              },
              {
                id: 'searchViewDo',
                title: 'Search & View DO',
                type: 'item',
                url: '/dispatch/searchDo',
                target: false,
              },
              {
                id: 'overviewDeliveryOrder',
                title: 'DO Overview',
                type: 'item',
                url: '/dispatch/doOverview',
                target: false,
              },
              {
                id: 'approvalDeliveryOrder',
                title: 'DO Approval',
                type: 'item',
                permissions:['SALES_DELETE_PRIVILEGE','SALES_UPDATE_PRIVILEGE'],

                url: '/dispatch/doApproval',
                target: false,
              },
              {
                id: 'EditDeliveryOrder',
                title: 'DO edit',
                type: 'item',
                url: '/dispatch/doEdit',
                target: false,
              },
            ]
          },
          {
            id: 'salesInvoice',
            title: 'Sales Invoice',
            type: 'collapse',
            children: [
              {
                id: 'createSalesInvoice',
                title: 'Create Sales Invoice',
                type: 'item',
                url: '/dispatch/createSi',
                target: false,
              },
              {
                id: 'searchSalesInvoice',
                title: 'Search & View SI',
                type: 'item',
                url: '/dispatch/searchSi',
                target: false,
              },
              {
                id: 'overviewSalesInvoice',
                title: 'SI Overview',
                type: 'item',
                url: '/dispatch/siOverview',
                target: false,
              },
              {
                id: 'generateInvoice',
                title: 'Invoice',
                type: 'item',
                url: '/dispatch/generateInvoice',
                target: false,
              },
              {
                id: 'EditInvoice',
                title: 'Edit Invoice',
                type: 'item',
                url: '/dispatch/siEdit',
                target: false,
              },
            ]
          },
        ]
      },
    ]
  },
  {
    id: 'setup',
    title: 'Setup',
    type: 'group',
    permissions:['WEBSITE_CREATE_PRIVILEGE','WEBSITE_DELETE_PRIVILEGE','WEBSITE_UPDATE_PRIVILEGE'],
    children: [
      {
        id: 'superAdmin',
        title: 'Super Admin',
        type: 'collapse',
        icon: 'feather icon-user-check',
        children: [
          {
            id: 'addPrice',
            title: 'Add Price',
            type: 'item',
            url: '/super/addPrice',
            target: false,
          },
          {
            id: 'createCustomerCredit',
            title: 'Customer Credit Limit',
            type: 'item',
            url: '/super/creditLimit',
            target: false,
          }
        ]
      },
      {
        id: 'setupTab',
        title: 'Setup',
        type: 'collapse',
        icon: 'feather icon-settings',
        children: [
          {
            id: 'createCompany',
            title: 'Own Company',
            type: 'item',
            url: '/setup/ownCompany',
            target: false,
          },
          {
            id: 'createWarehouse',
            title: 'Warehouse',
            type: 'item',
            url: '/setup/ownWarehouse',
            target: false,
          },
          {
            id: 'creatType',
            title: 'Product Type',
            type: 'item',
            url: '/setup/createType',
            target: false,
          },
          {
            id: 'createCategory',
            title: 'Product Category',
            type: 'item',
            url: '/setup/createCategory',
            target: false,
          },
          {
            id: 'createShape',
            title: 'Product Shape',
            type: 'item',
            url: '/setup/createShape',
            target: false,
          },
          {
            id: 'createClass',
            title: 'Product Class',
            type: 'item',
            url: '/setup/createClass',
            target: false,
          },
          {
            id: 'createTemper',
            title: 'Product Temper',
            type: 'item',
            url: '/setup/createTemper',
            target: false,
          },
          {
            id: 'createCoating',
            title: 'Product Coating',
            type: 'item',
            url: '/setup/createCoating',
            target: false,
          },
          {
            id: 'createOiling',
            title: 'Product Oiling',
            type: 'item',
            url: '/setup/createOiling',
            target: false,
          },
          {
            id: 'createSurface',
            title: 'Product Surface',
            type: 'item',
            url: '/setup/createSurface',
            target: false,
          },
          {
            id: 'createOrigin',
            title: 'Product Origin',
            type: 'item',
            url: '/setup/createOrigin',
            target: false,
          },
          {
            id: 'createAnnealing',
            title: 'Product Annealing',
            type: 'item',
            url: '/setup/createAnnealing',
            target: false,
          },
          {
            id: 'createDefect',
            title: 'Product Defect',
            type: 'item',
            url: '/setup/createDefect',
            target: false,
          },
          {
            id: 'createFinish',
            title: 'Product Finish',
            type: 'item',
            url: '/setup/createFinish',
            target: false,
          },
          {
            id: 'createPackaging',
            title: 'Product Packaging',
            type: 'item',
            url: '/setup/createPackaging',
            target: false,
          },
          {
            id: 'createHardness',
            title: 'Product Hardness',
            type: 'item',
            url: '/setup/createHardness',
            target: false,
          },
          {
            id: 'createWeightBridge',
            title: 'Weigh Bridge',
            type: 'item',
            url: '/setup/createWeighBridge',
            target: false,
          },
          {
            id: 'createMachineDetails',
            title: 'Machine Details',
            type: 'item',
            url: '/setup/createMachine',
            target: false,
          },
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
