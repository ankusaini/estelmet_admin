import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Purchase } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from 'src/app/shared/services/purchase.service';
import { MonthlyProfit1 } from './chart/monthly-profit-1';
import { MonthlyProfit2 } from './chart/monthly-profit-2';
import { SecEcommerceChartBar } from './chart/sec-ecommerce-chart-bar';
import { SecEcommerceChartLine } from './chart/sec-ecommerce-chart-line';
import { SeoAnalyticChart1 } from './chart/seo-analytic-chart-1';
import { SeoAnalyticChart2 } from './chart/seo-analytic-chart-2';
import { SeoAnalyticChart3 } from './chart/seo-analytic-chart-3';
import { SeoAnalyticChart4 } from './chart/seo-analytic-chart-4';

@Component({
  selector: 'app-dash-sale',
  templateUrl: './dash-sale.component.html',
  styleUrls: ['./dash-sale.component.scss']
})
export class DashSaleComponent implements OnInit {
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public seoChartData4: any;
  public secEcommerceChartDataLine: any;
  public secEcommerceChartDataBar: any;
  public monthlyProfitChartData1: any;
  public monthlyProfitChartData2: any;

  public purchaseList: Purchase[] = [];

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
  }

  ngOnInit() {
    this.getAllPurchase();

  }


  getAllPurchase() {
    const url = '/purchase/getAllPurchase';
    this.sharedService.getAllResponse(url).subscribe(data => {
      if (data && data.purchaseList) {
        this.purchaseList = data.purchaseList;
      }
    }, error => {
      this.toastrService.error('Something Went Wrong');
    });
  }

}
