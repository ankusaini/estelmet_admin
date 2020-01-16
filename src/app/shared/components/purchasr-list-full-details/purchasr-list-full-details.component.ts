import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Purchase } from '../../Models/purchase.model';
import { PurchaseService } from 'src/app/modules/purchase/services/purchase.service';

@Component({
  selector: 'app-purchasr-list-full-details',
  templateUrl: './purchasr-list-full-details.component.html',
  styleUrls: ['./purchasr-list-full-details.component.scss']
})
export class PurchasrListFullDetailsComponent implements OnInit {
  @Input('tabSelected') selectedTab: string;

  purchaseData: any;
  //list coming from parent selected tab
  purchaseList: Purchase[];

  //emitting on every add
    @Output() selectedPurchaseData: EventEmitter<any> = new EventEmitter<any>();

    public addedPurchaseList: Purchase[]=[];

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    console.log("in purchaseList " +this.selectedTab);
    let url="/purchase/getAllPurchaseByTypeAndStatus/PURCHASE_CONFIRMATION/"+this.selectedTab;
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe( data => {
      this.purchaseData=data;
      this.purchaseList= this.purchaseData.purchaseList;
      console.log("purchaseList " + this.purchaseList);
    });
  }

  //emitting on every add so that parent can show the list
  addPurchaseToList(purchase)
  {
    //check if already added
     const index: number = this.addedPurchaseList.indexOf(purchase);
    if (index == -1) {
      this.addedPurchaseList.push(purchase);
          this.selectedPurchaseData.emit(this.addedPurchaseList)

    } else {
      alert("already added");
    }
    
  }


}
