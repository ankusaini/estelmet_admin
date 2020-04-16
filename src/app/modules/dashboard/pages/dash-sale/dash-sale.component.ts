import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Purchase } from 'src/app/shared/Models/purchase.model';
import { MonthlyProfit1 } from './chart/monthly-profit-1';
import { MonthlyProfit2 } from './chart/monthly-profit-2';
import { SecEcommerceChartBar } from './chart/sec-ecommerce-chart-bar';
import { SecEcommerceChartLine } from './chart/sec-ecommerce-chart-line';
import { SeoAnalyticChart1 } from './chart/seo-analytic-chart-1';
import { SeoAnalyticChart2 } from './chart/seo-analytic-chart-2';
import { SeoAnalyticChart3 } from './chart/seo-analytic-chart-3';
import { SeoAnalyticChart4 } from './chart/seo-analytic-chart-4';
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { ids } from "src/app/shared/Models/ids.model";

@Component({
  selector: 'app-dash-sale',
  templateUrl: './dash-sale.component.html',
  styleUrls: ['./dash-sale.component.scss']
})
export class DashSaleComponent implements OnInit {
  selectedType: any = 'MATERIAL_REQUIREMENT';
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public seoChartData4: any;
  public secEcommerceChartDataLine: any;
  public secEcommerceChartDataBar: any;
  public monthlyProfitChartData1: any;
  public monthlyProfitChartData2: any;

  public purchaseList: Purchase[] = [];



  public Ids: any;


  public totalMRCount = 0;

  public totalMRCountWt = 0;

  public approvedMRCount = 0;

  public pendingMRCount = 0;

  public rejectedMRCount = 0;


  // variable for PO
  public totalPOCount = 0;

  public totalPOCountWt = 0;

  public approvedPOCount = 0;

  public pendingPOCount = 0;

  public rejectedPOCount = 0;


  //PC
  public totalPCCount = 0;
  public totalPCCountWt = 0;
  public approvedPCCount = 0;

  public pendingPCCount = 0;

  public rejectedPCCount = 0;

  // variable for PURCHASE LO
  public totalPLCount = 0;
  public totalPLCountWt = 0;
  public approvedPLCount = 0;

  public pendingPLCount = 0;

  public rejectedPLCount = 0;

  constructor(private sharedService: PurchaseService,
    private toastrService: ToastrService) {
    this.seoChartData1 = SeoAnalyticChart1.seoChartData;
    this.seoChartData2 = SeoAnalyticChart2.seoChartData;
    this.seoChartData3 = SeoAnalyticChart3.seoChartData;
    this.seoChartData4 = SeoAnalyticChart4.seoChartData;
    this.secEcommerceChartDataLine = SecEcommerceChartLine.saleChartData;
    this.secEcommerceChartDataBar = SecEcommerceChartBar.saleChartData;
    this.monthlyProfitChartData1 = MonthlyProfit1.saleChartData;
    this.monthlyProfitChartData2 = MonthlyProfit2.saleChartData;
    this.Ids = ids;
  }

  ngOnInit() {
    this.getAllPurchase();
    this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "APPROVED");


  }


  getAllPurchase() {
    const url = '/purchase/dashboard';
    this.sharedService.getAllResponse(url).subscribe(data => {
      console.log(data);
      this.approvedPLCount = data.LOT_APPROVED_COUNT;
      this.rejectedPLCount = data.LOT_REJECTED_COUNT;
      this.pendingPLCount = data.LOT_PENDING_COUNT;

      this.approvedPCCount = data.PURCHASE_CONFIRMATION_APPROVED_COUNT;
      this.rejectedPCCount = data.PURCHASE_CONFIRMATION_REJECTED_COUNT;
      this.pendingPCCount = data.PURCHASE_CONFIRMATION_PENDING_COUNT;

      this.approvedPOCount = data.PURCHASE_ORDER_APPROVED_COUNT;
      this.rejectedPOCount = data.PURCHASE_ORDER_REJECTED_COUNT;
      this.pendingPOCount = data.PURCHASE_ORDER_PENDING_COUNT;

      this.approvedMRCount = data.MATERIAL_REQURIMENT_APPROVED_COUNT;
      this.rejectedMRCount = data.MATERIAL_REQURIMENT_REJECTED_COUNT;
      this.pendingMRCount = data.MATERIAL_REQURIMENT_PENDING_COUNT;

      this.totalMRCount = (data.MATERIAL_REQURIMENT_PENDING[0][0] + data.MATERIAL_REQURIMENT_APPROVED[0][0] + data.MATERIAL_REQURIMENT_REJECTED[0][0]);
      this.totalMRCountWt = (Number(data.MATERIAL_REQURIMENT_PENDING[0][1]) + Number(data.MATERIAL_REQURIMENT_APPROVED[0][1]) +Number(data.MATERIAL_REQURIMENT_REJECTED[0][1]));

      console.log(this.totalMRCountWt);
      this.totalPCCount = (data.PURCHASE_CONFIRMATION_PENDING[0][0] + data.PURCHASE_CONFIRMATION_APPROVED[0][0] + data.PURCHASE_CONFIRMATION_REJECTED[0][0]);
        this.totalPCCountWt = (Number(data.PURCHASE_CONFIRMATION_PENDING[0][1]) + Number(data.PURCHASE_CONFIRMATION_APPROVED[0][1]) + Number(data.PURCHASE_CONFIRMATION_REJECTED[0][1]));
    
        this.totalPLCount = (data.LOT_PENDING[0][0] + data.LOT_APPROVED[0][0] + data.LOT_REJECTED[0][0]);
              this.totalPLCountWt = (Number(data.LOT_PENDING[0][1]) + Number(data.LOT_APPROVED[0][1]) + Number(data.LOT_REJECTED[0][1]));

      //  this.totalPOCount= (data.PURCHASE_ORDER_PENDING[0][0]+data.PURCHASE_ORDER_APPROVED[0][0]+data.PURCHASE_ORDER_REJECTED[0][0]);
      //  this.totalPOCountWt= (data.PURCHASE_ORDER_PENDING[0][1]+data.PURCHASE_ORDER_APPROVED[0][1]+data.PURCHASE_ORDER_REJECTED[0][1]);

      console.log(this.totalMRCount);

    }, error => {
      this.toastrService.error('Something Went Wrong');
    });
  }


  getAllPurchaseByTypeAndStatus(type, status) {
    this.selectedType = type;
    this.sharedService.getAllPurchaseByTypeAndStatus(type, status).subscribe(
      data => {
        console.log("data", data)
        this.purchaseList = data.purchaseList;
      },
      error => { }
    );
  }

}
