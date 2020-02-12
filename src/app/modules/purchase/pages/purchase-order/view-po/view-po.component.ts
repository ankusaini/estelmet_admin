import { Component, OnInit } from '@angular/core';
import { Purchase } from "src/app/shared/Models/purchase.model";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-view-po',
  templateUrl: './view-po.component.html',
  styleUrls: ['./view-po.component.scss']
})
export class ViewPoComponent implements OnInit {
 public poList: Purchase[]=[];
public selectedPOList: Purchase[]=[];
  constructor(private purchaseService: PurchaseService,private router:Router,private toastrService:ToastrService) {
    this.getAllPurchaseByTypeAndStatus("PURCHASE_CONFIRMATION", "APPROVED");
  }

  ngOnInit() {}

  getAllPurchaseByTypeAndStatus(type, status) {
    let url = "/purchase/getAllPurchaseByTypeAndStatus/" + type + "/" + status;
    console.log("url",url)
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe(
      data => {
        
        this.poList = data.purchaseList;
        console.log("data",this.poList)
      },
      error => {}
    );
  }

  addMrToList(mr)
  {
    const index: number = this.selectedPOList.indexOf(mr);
    if (index == -1) {
      this.selectedPOList.push(mr);
    } else {
      this.toastrService.warning("record already added");
    }
  }

  removeMr(mr) {
    const index: number = this.selectedPOList.indexOf(mr);
    if (index !== -1) {
      this.selectedPOList.splice(index, 1);
    }
  }
  

  routeToEditMr(id)
  {
    this.router.navigateByUrl("/purchase/editPQ/"+id);
  }

}
