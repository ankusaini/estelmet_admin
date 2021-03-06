import { Component, OnInit, ViewChild } from '@angular/core';
import { Purchase } from "src/app/shared/Models/purchase.model";
import { RequestP } from "src/app/shared/Models/RequestResponse";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ids } from 'src/app/shared/Models/ids.model';
import { PurchasrListFullDetailsComponent } from "src/app/shared/components/purchasr-list-full-details/purchasr-list-full-details.component";


@Component({
  selector: 'app-pc-approval',
  templateUrl: './pc-approval.component.html',
  styleUrls: ['./pc-approval.component.css']
})
export class PcApprovalComponent implements OnInit {
  selectedTab: string = "PENDING";
  public request : RequestP={};
  public Ids: any;
  public selectedPuchaseList: Purchase[] = [];
  constructor(
            private purchaseService: PurchaseService,
            private router:Router,
            private toastrService:ToastrService) {
              this.Ids = ids;
             }

  @ViewChild(PurchasrListFullDetailsComponent,{static:false}) child:PurchasrListFullDetailsComponent;
  ngOnInit() {
    this.selectedPuchaseList = [];
  }

    onTabChange(tab) {
    

    
    if (tab && tab.nextId == "rejectedTab") {
      this.selectedTab = "REJECTED";
    }
    if (tab && tab.nextId == "pendingTab") {
      this.selectedTab = "PENDING";
    }
    if (tab && tab.nextId == "approvedTab") {
      this.selectedTab = "APPROVED";
    }
    //Emptying basket on tab change
    this.selectedPuchaseList=[];
  }
 
  getPurchaseData(data)
  {
    this.selectedPuchaseList=data;
    console.log(this.selectedPuchaseList);
  }


    removeSelectedPurchase(purchase:Purchase) {
    const index: number = this.selectedPuchaseList.indexOf(purchase);
    if (index !== -1) {
      this.selectedPuchaseList.splice(index, 1);
    }
  }




    changeStatusOfSelectedPurchase(status) {
    if (this.selectedPuchaseList.length == 0) {
      this.toastrService.warning("Select at least one!");
    } else {
      // let path = "/purchase/updatePurchase";

      for (let i = 0; i < this.selectedPuchaseList.length; i++) {
        this.selectedPuchaseList[i].status = status;
         this.request.purchase=this.selectedPuchaseList[i];
        this.purchaseService.updatePurchase(this.request).subscribe(
          data => {
            this.selectedPuchaseList=[];
            console.log(this.selectedPuchaseList);
          //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
          //   return false;
          // };
          this.child.getData();
          //this.selectedTab = "PENDING";
              
          },
          error => {}
        );
      }
      this.toastrService.success("Selected PC(s) status changes successfully!")
    }
  }


}
