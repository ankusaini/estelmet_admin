import { Component, OnInit } from "@angular/core";
import { Sales, DeliveryOrder } from "src/app/shared/Models/sales.model";
import { DispatchService } from "src/app/modules/dispatch/services/dispatch.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { RequestP } from "src/app/shared/Models/RequestResponse";

@Component({
  selector: "app-do-approval",
  templateUrl: "./do-approval.component.html",
  styleUrls: ["./do-approval.component.css"]
})
export class DoApprovalComponent implements OnInit {
  public datalist :any;
    selectedTab: string='PENDING';
 public request : RequestP={};

  public approvedDeliveryOrderlist: DeliveryOrder[] = [];
  public rejecetdDeliveryOrderlist: DeliveryOrder[] = [];
  public pendingDeliveryOrderlist: DeliveryOrder[] = [];

  public selectdeliveryOrderList: DeliveryOrder[] = [];

  constructor(
    private dispatchService: DispatchService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getDOByStatus("APPROVED");
    this.getDOByStatus("PENDING");
    this.getDOByStatus("REJECTED");
  }

  getDOByStatus(status) {
    let url = "/sales/getAllDeliveryOrderByStatus/" + status;

    this.dispatchService.getAllDeliveryOrderByStatus(url).subscribe(
      data => {
        this.datalist=data;
        if (status == "PENDING") {
          this.pendingDeliveryOrderlist = this.datalist.deliveryOrderList;
        }
        if (status == "APPROVED") {
          this.approvedDeliveryOrderlist = this.datalist.deliveryOrderList;
        }
        if (status == "REJECTED") {
          this.rejecetdDeliveryOrderlist = this.datalist.deliveryOrderList;
        }
      },
      error => {}
    );
  }

   onTabChange(tab) {
    console.log("tab ", tab);
    //here tab.activeId means kon se tab se aaya hai

    
    if (tab && tab.nextId == "rejectedTab") {
      this.selectedTab = "REJECTED";
    }
    if (tab && tab.nextId == "pendingTab") {
      this.selectedTab = "PENDING";
    }
    if (tab && tab.nextId == "approvedTab") {
      this.selectedTab = "APPROVED";
    }
    this.selectdeliveryOrderList = [];
  }

    addDOToList(mr)
  {
     const index: number = this.selectdeliveryOrderList.indexOf(mr);
    if (index == -1) {
      this.selectdeliveryOrderList.push(mr);
    } else {
      this.toastr.error("Already added");
     
    }
  }

    removeSelectedDO(mr) {
    const index: number = this.selectdeliveryOrderList.indexOf(mr);
    if (index !== -1) {
      this.selectdeliveryOrderList.splice(index, 1);
    }
  }

  changeStatusOfSelectedDO(status) {
    if (this.selectdeliveryOrderList.length == 0) {
      this.toastr.warning("select at least one record");
    } else {
      let path = "/sales/updateSales";

      for (let i = 0; i < this.selectdeliveryOrderList.length; i++) {
      this.selectdeliveryOrderList[i].status = status;
         this.request.deliveryOrder=this.selectdeliveryOrderList[i];
        console.log("request object",this.request)
        this.dispatchService.updateRequestObject(path,this.request).subscribe(
          data => {
           
      this.getDOByStatus("APPROVED");
    this.getDOByStatus("PENDING");
    this.getDOByStatus("REJECTED");
     this.selectdeliveryOrderList = [];
          },
          error => {}
        );
this.toastr.success("Record successfully saved");
      }
      
    }
  }

}
