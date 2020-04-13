import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/shared/Models/sales.model';
import { SalesServiceService } from '../../../services/sales-service.service';
import { RequestP } from "src/app/shared/Models/RequestResponse";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sc-approval',
  templateUrl: './sc-approval.component.html',
  styleUrls: ['./sc-approval.component.scss']
})
export class ScApprovalComponent implements OnInit {

  selectedTab: string = "PENDING";
  pendingData: any;
  approvedData: any;
  rejectedData: any;
  public pendingList : Sales[];
  public approvedList : Sales[];
  public rejectedList : Sales[];
  public selectedSalesList: Sales[] = [];
  public request : RequestP ={};


  constructor(private salesService: SalesServiceService,
              private toastr: ToastrService) { }

  ngOnInit() {
   
    this.getPendingList();
    this.getApprovedList();
    this.getRejectedList();
   
  }

  getPendingList() {
    let pendingUrl = "/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/PENDING";
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
    let approvedUrl = "/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/APPROVED";
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
    let rejectedUrl = "/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/REJECTED";
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
