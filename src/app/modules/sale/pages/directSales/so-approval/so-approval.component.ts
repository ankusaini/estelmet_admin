import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/shared/Models/sales.model';
import { RequestP } from "src/app/shared/Models/RequestResponse";
import { SalesServiceService } from '../../../services/sales-service.service';
import { Product } from 'src/app/shared/Models/product.model.';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ids } from 'src/app/shared/Models/ids.model';


@Component({
  selector: 'app-so-approval',
  templateUrl: './so-approval.component.html',
  styleUrls: ['./so-approval.component.scss']
})
export class SoApprovalComponent implements OnInit {
  selectedTab: string = "PENDING";
  pendingData: any;
  approvedData: any;
  rejectedData: any;
  public pendingList : Sales[];
  public approvedList : Sales[];
  public rejectedList : Sales[];
  selectedSalesList: Sales[] = [];
  public request : RequestP ={};
  public Ids: any;


  constructor(private salesService: SalesServiceService,
    private toastr: ToastrService,
    private router: Router) {
      this.Ids = ids;
     }

  ngOnInit() {
    this.getPendingList();
    this.getApprovedList();
    this.getRejectedList();    
  }

  getPendingList() {
    let pendingUrl = "/sales/getAllSalesByTypeAndStatus/SALES_OFFER_LOT/PENDING";
    this.salesService.getAllSalesByTypeAndStatus(pendingUrl).subscribe(
      data => {
        this.pendingData = data;
        this.pendingList = this.pendingData.salesList;
        // console.log("Your Data is "+this.pendingList);
      },
      error => {
        console.log(error);
      }
    );
  }

  getApprovedList() {
    let approvedUrl = "/sales/getAllSalesByTypeAndStatus/SALES_OFFER_LOT/APPROVED";
    this.salesService.getAllSalesByTypeAndStatus(approvedUrl).subscribe(
      data => {
        this.approvedData = data;
        this.approvedList = this.approvedData.salesList;
        // console.log("Your Data is "+this.approvedList);
      },
      error => {
        console.log(error);
      }
    );
  }

  getRejectedList() {
    let rejectedUrl = "/sales/getAllSalesByTypeAndStatus/SALES_OFFER_LOT/REJECTED";
    this.salesService.getAllSalesByTypeAndStatus(rejectedUrl).subscribe(
      data => {
        this.rejectedData = data;
        this.rejectedList = this.rejectedData.salesList;
        // console.log("Your Data is "+this.rejectedList);
      },
      error => {
        console.log(error);
      }
    );

  }

  onTabChange(tab) {
    // alert("tab "+ tab.nextId);
    if (tab && tab.nextId == "rejectedTab") {
      this.selectedTab = "REJECTED";
    }
    if (tab && tab.nextId == "pendingTab") {
      this.selectedTab = "PENDING";
    }
    if (tab && tab.nextId == "approvedTab") {
      this.selectedTab = "APPROVED";
    }
    console.log("selected tab", this.selectedTab);
    this.selectedSalesList = [];
    }


  addToSelectedList(sale) {
    const index = this.selectedSalesList.indexOf(sale);
    if (index == -1) {
      this.selectedSalesList.push(sale);
    } else {
      this.toastr.warning("Product already added");
    }
  }

  removeFromSelectedList(sale)
  {
  
    const index: number = this.selectedSalesList.indexOf(sale);
    console.log("index",index)
    if (index !== -1) {
      this.selectedSalesList.splice(index, 1);
    }
  }


  changeStatusOfSelectedSales(status) {
    if (this.selectedSalesList.length == 0) {
      this.toastr.warning("Select at least one!");
    } else {
      let path = "/sales/updateSales";

      for (let i = 0; i < this.selectedSalesList.length; i++) {
        this.selectedSalesList[i].status = status;
         this.request.sales=this.selectedSalesList[i];
        this.salesService.updateRequestObject(path, this.request).subscribe(
          data => {
            this.rejectedList=undefined;
              this.pendingList=undefined;
              this.approvedList=undefined;
            this.getPendingList();
            this.getApprovedList();
            this.getRejectedList(); 
            this.selectedTab = "PENDING";
            this.selectedSalesList=[];            
          },
          error => {}
        );
      }
      this.toastr.success("Selected Sale(s) status changes successfully!")
    }
  }

}
