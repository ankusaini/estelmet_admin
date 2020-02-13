import { Component, OnInit } from '@angular/core';
import { Grn } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from '../../../services/purchase.service';
import { ToastrService } from "ngx-toastr";
import { RequestP } from 'src/app/shared/Models/RequestResponse';


@Component({
  selector: 'app-grn-approval',
  templateUrl: './grn-approval.component.html',
  styleUrls: ['./grn-approval.component.scss']
})
export class GrnApprovalComponent implements OnInit {
  selectedTab: string = "PENDING";
  pendingData: any;
  approvedData: any;
  rejectedData: any;
  public pendingList : Grn[];
  public approvedList : Grn[];
  public rejectedList : Grn[];
  public request: RequestP = {};
  public selectedGrnList: Grn[]= [];

  constructor(private purchaseService: PurchaseService,
              private toastr:ToastrService) { }

  ngOnInit() {
   this.getAllGrnByStatus("PENDING");
   this.getAllGrnByStatus("APPROVED");
   this.getAllGrnByStatus("REJECETED");
    // this.selectedGrnList=[];
  }

  getAllGrnByStatus(status) {
    if(status=='PENDING') {
      let pendingUrl="/purchase/getAllGrnByStatus/PENDING";
      this.purchaseService.getAllGrnByStatus(pendingUrl)
      .subscribe( data => {
        this.pendingData = data;
          this.pendingList = this.pendingData.grnList;
          console.log("Your Data is "+this.pendingList);
      }, 
      error => {
        console.log(error);
      });
    }
    if(status=='APPROVED') {
      let approvedUrl="/purchase/getAllGrnByStatus/APPROVED";
      this.purchaseService.getAllGrnByStatus(approvedUrl).subscribe( data => {
        this.approvedData = data;
          this.approvedList = this.approvedData.grnList;
          console.log("Your Data is "+this.approvedList);
        }, 
      error => {
        console.log(error);
      });
    }
    if(status=='REJECETED') {
      let rejectedUrl="/purchase/getAllGrnByStatus/REJECTED";
      this.purchaseService.getAllGrnByStatus(rejectedUrl).subscribe( data => {
        this.rejectedData = data;
          this.rejectedList = this.rejectedData.grnList;
          console.log("Your Data is "+this.rejectedList);
      }, 
      error => {
        console.log(error);
      });
    }

  }

  onTabChange(tab) {
    // alert("tab "+ tab.activeId);
    if (tab && tab.activeId == "rejectedTab") {
      this.selectedTab = "PENDING";
    }
    if (tab && tab.activeId == "pendingTab") {
      this.selectedTab = "APPROVED";
    }
    if (tab && tab.activeId == "approvedTab") {
      this.selectedTab = "REJECTED";
    }
    console.log("selected tab", this.selectedTab);
    this.selectedGrnList=[];

  }

  addToSelectedList(grn: Grn) {
    console.log(grn);
    const index: number = this.selectedGrnList.indexOf(grn);
    if (index == -1) {
      this.selectedGrnList.push(grn);
      console.log(this.selectedGrnList);
    } else {
      this.toastr.error("Already added");
    }
    
  }

  removeFromSelectedList(grn: Grn) {
    console.log(grn);
    const index: number = this.selectedGrnList.indexOf(grn);
    if (index !== -1) {
      this.selectedGrnList.splice(index, 1);
    }
  }

  changeStatusOfSelectedGrn(status) {
    if(this.selectedGrnList.length ==0) {
      this.toastr.warning("Please select atleast one record");
    } 
    else {
      // incomplete url and request body

       let path = "/purchase/updatePurchase";
   
        for (let i = 0; i < this.selectedGrnList.length; i++) {
        this.selectedGrnList[i].status = status;
         this.request.grn=this.selectedGrnList[i];
        this.purchaseService.updateRequestObject(path,this.request).subscribe(
          data => {
           this.getAllGrnByStatus("PENDING");
             this.getAllGrnByStatus("APPROVED");
             this.getAllGrnByStatus("REJECETED");
    this.selectedGrnList = [];
          },
          error => {}
        );
      }
      this.toastr.success("Selected Grn(s) status changes successfully");

    }
  }

}
