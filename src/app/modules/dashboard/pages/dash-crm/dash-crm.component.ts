import { Component, OnInit } from '@angular/core';
import {TotLeadChart} from './chart/tot-lead-chart';
import {TotVendorChart} from './chart/tot-vendor-chart';
import {TotInvoiceChart} from './chart/tot-invoice-chart';
import {MonthlyProfit3} from './chart/monthly-profit-3';
import {ClientMap1} from './chart/client-map-1';
import {ClientMap3} from './chart/client-map-3';
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { ProductCategory } from "src/app/shared/Models/product.model.";

@Component({
  selector: 'app-dash-crm',
  templateUrl: './dash-crm.component.html',
  styleUrls: ['./dash-crm.component.scss']
})
export class DashCrmComponent implements OnInit {



  public totalTPCount = 0;
  public totalTPCountWt = 0;
  public approvedTPCount = 0;
  public pendingTPCount = 0;
  public rejectedTPCount = 0;


  // variable for TF
  public totalTFCount = 0;
  public totalTFCountWt = 0;
  public approvedTFCount = 0;
  public pendingTFCount = 0;
  public rejectedTFCount = 0;


  //PC
  public totalGLCount = 0;
  public totalGLCountWt = 0;
  public approvedGLCount = 0;
  public pendingGLCount = 0;
  public rejectedGLCount = 0;

  // variable for PURCHASE LO
  public totalPCRCCount = 0;
  public totalPCRCCountWt = 0;
  public approvedPCRCCount = 0;
  public pendingPCRCCount = 0;
  public rejectedPCRCCount = 0;

  constructor(private sharedService: PurchaseService) {

  }

  

  ngOnInit() {
     let category :ProductCategory={
        "id" : 1, "productCategory" : "tp"
      }
    this.getAllProduct(category,1);
    let category2 :ProductCategory={
        "id" : 2, "productCategory" : "tfs"
      }
    this.getAllProduct(category2,2);
     let category3 :ProductCategory={
        "id" : 3, "productCategory" : "gl"
      }
    this.getAllProduct(category3,3);
    let category4 :ProductCategory={
        "id" : 4, "productCategory" : "pcrc"
      }
    this.getAllProduct(category4,4);

  }

   getAllProduct(category,id) {
     console.log("calling")
     
     this.sharedService.getAllProductsForDashboard(category).subscribe(data=>{
      console.log("data",data);
      if(id == 1)
        {
          this.pendingTPCount= data.body.PENDING[0][0];
          this.approvedTPCount=data.body.APPROVED[0][0];
          this.rejectedTPCount=data.body.REJECTED[0][0];
          this.totalTPCount=data.body.tp[0][0];
          this.totalTPCountWt=data.body.tp[0][1];
        }

        if(id == 2)
        {
          this.pendingTFCount= data.body.PENDING[0][0];
          this.approvedTFCount=data.body.APPROVED[0][0];
          this.rejectedTFCount=data.body.REJECTED[0][0];
          this.totalTFCount=data.body.tfs[0][0];
          this.totalTFCountWt=data.body.tfs[0][1];
        }

        if(id == 3)
        {
          this.pendingGLCount= data.body.PENDING[0][0];
          this.approvedGLCount=data.body.APPROVED[0][0];
          this.rejectedGLCount=data.body.REJECTED[0][0];
          this.totalGLCount=data.body.gl[0][0];
          this.totalGLCountWt=data.body.gl[0][1];
        }

        if(id == 4)
        {
          this.pendingPCRCCount= data.body.PENDING[0][0];
          this.approvedPCRCCount=data.body.APPROVED[0][0];
          this.rejectedPCRCCount=data.body.REJECTED[0][0];
          this.totalPCRCCount=data.body.pcrc[0][0];
          this.totalPCRCCountWt=data.body.pcrc[0][1];
        }
     },error=>{
       console.log("err");
     });
   }
}
