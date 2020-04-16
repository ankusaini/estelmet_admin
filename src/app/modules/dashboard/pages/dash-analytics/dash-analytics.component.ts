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
      console.log(data.data)
       this.approvedTLCount = data.data.TRADE_LEAD_LOT_APPROVED_COUNT;
      this.rejectedTLCount = data.data.TRADE_LEAD_LOT_REJECTED_COUNT;
      this.pendingTLCount = data.data.TRADE_LEAD_LOT_PENDING_COUNT;

      this.approvedDOCount = data.data.DELIVERY_ORDER_APPROVED_COUNT;
      this.rejectedDOCount = data.data.DELIVERY_ORDER_REJECTED_COUNT;
      this.pendingDOCount = data.data.DELIVERY_ORDER_PENDING_COUNT;

      this.approvedSCCount = data.data.SALES_CONFIRMATION_APPROVED_COUNT;
      this.rejectedSCCount = data.data.SALES_CONFIRMATION_REJECTED_COUNT;
      this.pendingSCCount = data.data.SALES_CONFIRMATION_PENDING_COUNT;

      this.approvedSOCount = data.data.SALES_OFFER_LOT_APPROVED_COUNT;
      this.rejectedSOCount = data.data.SALES_OFFER_LOT_REJECTED_COUNT;
      this.pendingSOCount = data.data.SALES_OFFER_LOT_PENDING_COUNT;

      //keys being changed on every deloy for dashboard
      // this.totalSOCount = (data.data.SalesType.SALES_OFFER_LOT_PENDING[0][0] + data.data.SALES_OFFER_LOT_APPROVED[0][0] + data.data.SALES_OFFER_LOT_REJECTED[0][0]);
      // this.totalSOCountWt = (Number(data.data.SALES_OFFER_LOT_PENDING[0][1]) + Number(data.data.SALES_OFFER_LOT_APPROVED[0][1]) +Number(data.data.SALES_OFFER_LOT_REJECTED[0][1]));

      // // console.log(this.totalSOCountWt);
     //  this.totalDOCount = (data.data.DELIVERY_ORDER_PENDING[0][0] + data.data.DELIVERY_ORDER_APPROVED[0][0] + data.data.DELIVERY_ORDER_REJECTED[0][0]);
      //   this.totalDOCountWt = (Number(data.data.DELIVERY_ORDER_PENDING[0][1]) + Number(data.data.DELIVERY_ORDER_APPROVED[0][1]) + Number(data.data.DELIVERY_ORDER_REJECTED[0][1]));
    
       //  this.totalTLCount = (data.data.TRADE_LEAD_LOT_PENDING[0][0] + data.data.TRADE_LEAD_LOT_APPROVED[0][0] + data.data.TRADE_LEAD_LOT_REJECTED[0][0]);
      //         this.totalTLCountWt = (Number(data.data.TRADE_LEAD_LOT_PENDING[0][1]) + Number(data.data.TRADE_LEAD_LOT_APPROVED[0][1]) + Number(data.data.TRADE_LEAD_LOT_REJECTED[0][1]));


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
