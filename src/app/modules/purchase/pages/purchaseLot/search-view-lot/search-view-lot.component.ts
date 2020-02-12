import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../../services/purchase.service';
import { Purchase } from 'src/app/shared/Models/purchase.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-view-lot',
  templateUrl: './search-view-lot.component.html',
  styleUrls: ['./search-view-lot.component.scss']
})
export class SearchViewLotComponent implements OnInit {
  public purchaseData: any;
  public purchaseList: Purchase[];
  public selectedPurchaseList: Purchase[];


  constructor(private purchaseService: PurchaseService,
              private router: Router) { }

  ngOnInit() {
    let url = "/purchase/getAllPurchaseByTypeAndStatus/LOT/APPROVED";
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe(data => {
      this.purchaseData = data;
      this.purchaseList = this.purchaseData.purchaseList;
      console.log("List is: " + this.purchaseList);
    });
    this.selectedPurchaseList = [];
  }

  addPurchaseToList(purchase) {
    const index: number = this.selectedPurchaseList.indexOf(purchase);
    if (index == -1) {
      this.selectedPurchaseList.push(purchase);
    } else {
      alert("already added");
    }
  }

  removePurchase(purchase) {
    const index: number = this.selectedPurchaseList.indexOf(purchase);
    if (index !== -1) {
      this.selectedPurchaseList.splice(index, 1);
    }
  }

  navigateToEdit(id) {
    this.router.navigateByUrl("purchase/lotEdit/" + id);
  }

}
