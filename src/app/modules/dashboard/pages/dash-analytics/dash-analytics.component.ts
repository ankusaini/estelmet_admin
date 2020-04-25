import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmountProcessed} from './chart/amount-processed';
import {AmountSpent} from './chart/amount-spent';
import {ProfitProcessed} from './chart/profit-processed';
import {SeoAnalytics1} from './chart/seo-analytics-1';
import {TrafficChart1} from './chart/traffic-chart-1';
import {SeoChart1} from './chart/seo-chart-1';
import {SeoChart2} from './chart/seo-chart-2';
import {SeoChart3} from './chart/seo-chart-3';
import { ApexChartService } from "src/app/theme/shared/components/chart/apex-chart/apex-chart.service";
import { SalesServiceService } from "src/app/modules/sale/services/sales-service.service";
import { Sales } from "src/app/shared/Models/sales.model";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { ids } from "src/app/shared/Models/ids.model";

@Component({
  selector: 'app-dash-analytics',
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export class DashAnalyticsComponent implements OnInit {
   selectedType: any = 'SALES_OFFER_LOT';
  public salesList: Sales[];



  public Ids: any;

  // MR -SO
  public totalSOCount = 0;

  public totalSOCountWt = 0;

  public approvedSOCount = 0;

  public pendingSOCount = 0;

  public rejectedSOCount = 0;


  // variable for PO - SC
  public totalSCCount = 0;

  public totalSCCountWt = 0;

  public approvedSCCount = 0;

  public pendingSCCount = 0;

  public rejectedSCCount = 0;


  //PC DO
  public totalDOCount = 0;
  public totalDOCountWt = 0;
  public approvedDOCount = 0;

  public pendingDOCount = 0;

  public rejectedDOCount = 0;

  // variable for PURCHASE PL -TL
  public totalTLCount = 0;
  public totalTLCountWt = 0;
  public approvedTLCount = 0;

  public pendingTLCount = 0;

  public rejectedTLCount = 0;



  constructor(private salesService: SalesServiceService,private sharedService: PurchaseService,) {
    this.Ids=ids;
  }

  ngOnInit() {
      this.getAllSales();
      this.getAllSalesByTypeAndStatusCheck('SALES_OFFER_LOT','APPROVED')

  }

  getAllSales()
  {

    const url = '/sales/dashboard';
    this.sharedService.getAllResponse(url).subscribe(data => {
      console.log(data)
       this.approvedTLCount = data.TRADE_LEAD_LOT_APPROVED_COUNT;
      this.rejectedTLCount = data.TRADE_LEAD_LOT_REJECTED_COUNT;
      this.pendingTLCount = data.TRADE_LEAD_LOT_PENDING_COUNT;

      this.approvedDOCount = data.DELIVERY_ORDER_APPROVED_COUNT;
      this.rejectedDOCount = data.DELIVERY_ORDER_REJECTED_COUNT;
      this.pendingDOCount = data.DELIVERY_ORDER_PENDING_COUNT;

      this.approvedSCCount = data.SALES_CONFIRMATION_APPROVED_COUNT;
      this.rejectedSCCount = data.SALES_CONFIRMATION_REJECTED_COUNT;
      this.pendingSCCount = data.SALES_CONFIRMATION_PENDING_COUNT;

      this.approvedSOCount = data.SALES_OFFER_LOT_APPROVED_COUNT;
      this.rejectedSOCount = data.SALES_OFFER_LOT_REJECTED_COUNT;
      this.pendingSOCount = data.SALES_OFFER_LOT_PENDING_COUNT;

      //keys being changed on every deloy for dashboard
        // if(data.SALES_OFFER_LOT_PENDING && data.SALES_OFFER_LOT_PENDING.length>0)
        //   {
        //     this.totalSOCount += data.SALES_OFFER_LOT_PENDING[0][0];
        //     this.totalSOCountWt += Number(data.SALES_OFFER_LOT_PENDING[0][1]);
        //   }
        //   if(data.SALES_OFFER_LOT_APPROVED && data.SALES_OFFER_LOT_APPROVED.length>0)
        //   {
        //     this.totalSOCount += data.SALES_OFFER_LOT_APPROVED[0][0];
        //     this.totalSOCountWt += Number(data.SALES_OFFER_LOT_APPROVED[0][1]);
        //   }
        //   if(data.SALES_OFFER_LOT_REJECTED && data.SALES_OFFER_LOT_REJECTED.length>0)
        //   {
        //     this.totalSOCount += data.SALES_OFFER_LOT_REJECTED[0][0];
        //     this.totalSOCountWt += Number(data.SALES_OFFER_LOT_REJECTED[0][1]);
        //   }

          if(data.DELIVERY_ORDER_PENDING && data.DELIVERY_ORDER_PENDING.length>0)
          {
            this.totalDOCount += data.DELIVERY_ORDER_PENDING[0][0];
            this.totalDOCountWt += Number(data.DELIVERY_ORDER_PENDING[0][1]);
          }
          if(data.DELIVERY_ORDER_APPROVED && data.DELIVERY_ORDER_APPROVED.length>0)
          {
            this.totalDOCount += data.DELIVERY_ORDER_APPROVED[0][0];
            this.totalDOCountWt += Number(data.DELIVERY_ORDER_APPROVED[0][1]);
          }
          if(data.DELIVERY_ORDER_REJECTED && data.DELIVERY_ORDER_REJECTED.length>0)
          {
            this.totalDOCount += data.DELIVERY_ORDER_REJECTED[0][0];
            this.totalDOCountWt += Number(data.DELIVERY_ORDER_REJECTED[0][1]);
          }

          if(data.TRADE_LEAD_LOT_PENDING && data.TRADE_LEAD_LOT_PENDING.length>0)
          {
            this.totalTLCount += data.TRADE_LEAD_LOT_PENDING[0][0];
            this.totalTLCountWt += Number(data.TRADE_LEAD_LOT_PENDING[0][1]);
          }
          if(data.TRADE_LEAD_LOT_APPROVED && data.TRADE_LEAD_LOT_APPROVED.length>0)
          {
            this.totalTLCount += data.TRADE_LEAD_LOT_APPROVED[0][0];
            this.totalTLCountWt += Number(data.TRADE_LEAD_LOT_APPROVED[0][1]);
          }
          if(data.TRADE_LEAD_LOT_REJECTED && data.TRADE_LEAD_LOT_REJECTED.length>0)
          {
            this.totalTLCount += data.TRADE_LEAD_LOT_REJECTED[0][0];
            this.totalTLCountWt += Number(data.TRADE_LEAD_LOT_REJECTED[0][1]);
          }


          if(data.SALES_CONFIRMATION_PENDING && data.SALES_CONFIRMATION_PENDING.length>0)
          {
            this.totalSCCount += data.SALES_CONFIRMATION_PENDING[0][0];
            this.totalSCCountWt += Number(data.SALES_CONFIRMATION_PENDING[0][1]);
          }
          if(data.SALES_CONFIRMATION_APPROVED && data.SALES_CONFIRMATION_APPROVED.length>0)
          {
            this.totalSCCount += data.SALES_CONFIRMATION_APPROVED[0][0];
            this.totalSCCountWt += Number(data.SALES_CONFIRMATION_APPROVED[0][1]);
          }
          if(data.SALES_CONFIRMATION_REJECTED && data.SALES_CONFIRMATION_REJECTED.length>0)
          {
            this.totalSCCount += data.SALES_CONFIRMATION_REJECTED[0][0];
            this.totalSCCountWt += Number(data.SALES_CONFIRMATION_REJECTED[0][1]);
          }




    });
  }

  getAllSalesByTypeAndStatusCheck(type,status)
  {
    this.selectedType=type;
     this.salesService.getAllSalesByTypeAndStatusCheck(type,status).subscribe(data => {
      this.salesList= data.salesList;
      },
      error => { 
        console.log(error);
      }
    );
  }
  

}
