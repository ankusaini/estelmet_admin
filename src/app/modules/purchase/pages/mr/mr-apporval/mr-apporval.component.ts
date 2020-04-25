import { Component, OnInit } from '@angular/core';
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Purchase } from "src/app/shared/Models/purchase.model";
import { RequestP } from "src/app/shared/Models/RequestResponse";
import { ToastrService } from "ngx-toastr";
import { ids } from 'src/app/shared/Models/ids.model';

@Component({
  selector: "app-mr-apporval",
  templateUrl: "./mr-apporval.component.html",
  styleUrls: ["./mr-apporval.component.scss"]
})
export class MrApporvalComponent implements OnInit {
  selectedTab: string='PENDING';
  public Ids: any;

  constructor(private purchaseService: PurchaseService,private toastr:ToastrService) {
    this.Ids = ids;
  }
 public request : RequestP={};
  public pendingMrList: Purchase[];

  public rejectedMrList: Purchase[];

  public approvedMrList: Purchase[];

  public selectedMrList: Purchase[] = [];

  ngOnInit() {
    this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "PENDING");
    this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "APPROVED");
    this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "REJECTED");
  }

  getAllPurchaseByTypeAndStatus(type, status) {
    // let url = "/purchase/getAllPurchaseByTypeAndStatus/" + type + "/" + status;
    // console.log("url", url);
    this.purchaseService.getAllPurchaseByTypeAndStatus(type, status).subscribe(
      data => {
        if (status == "PENDING") {
          this.pendingMrList = data.purchaseList;
          console.log(this.pendingMrList);
        }
        if (status == "APPROVED") {
          this.approvedMrList = data.purchaseList;
        }
        if (status == "REJECTED") {
          this.rejectedMrList = data.purchaseList;
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
    console.log("selecyed tab", this.selectedTab);
    this.selectedMrList = [];
  }

  addMrToList(mr:Purchase)
  {
     const index: number = this.selectedMrList.indexOf(mr);
    if (index == -1) {
      this.selectedMrList.push(mr);
    } else {
      this.toastr.error("Already added");
     
    }
  }

    removeSelectedUserd(mr:Purchase) {
    const index: number = this.selectedMrList.indexOf(mr);
    if (index !== -1) {
      this.selectedMrList.splice(index, 1);
    }
  }


  changeStatusOfSelectedMR(status) {
    if (this.selectedMrList.length == 0) {
      this.toastr.warning("select at least one record");
    } else {
      // let path = "/purchase/updatePurchase";

      for (let i = 0; i < this.selectedMrList.length; i++) {
        this.selectedMrList[i].status = status;
         this.request.purchase=this.selectedMrList[i];
        this.purchaseService.updatePurchase(this.request).subscribe(
          data => {

            this.pendingMrList = undefined;
            this.rejectedMrList = undefined;
            this.approvedMrList = undefined;

            this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "PENDING");
            this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "APPROVED");
            this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "REJECTED");
            this.selectedMrList = [];
            this.toastr.success("Record successfully saved");
          
          },
          error => {
            console.log(error);
          }
        );
        
      }
      
    }
  }

}
