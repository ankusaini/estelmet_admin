import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Purchase, PurchaseType } from '../../Models/purchase.model';
import { PurchaseService } from 'src/app/modules/purchase/services/purchase.service';
import { ToastrService } from 'ngx-toastr';
import { ids } from '../../Models/ids.model';

@Component({
  selector: 'app-purchasr-list-full-details',
  templateUrl: './purchasr-list-full-details.component.html',
  styleUrls: ['./purchasr-list-full-details.component.scss']
})
export class PurchasrListFullDetailsComponent implements OnInit {
  @Input('tabSelected') selectedTab: string;
  public Ids: any;

  purchaseData: any;
  // list coming from parent selected tab
  purchaseList: Purchase[];

  // emitting on every add
  @Output() selectedPurchaseData: EventEmitter<any> = new EventEmitter<any>();

  public addedPurchaseList: Purchase[] = [];

  constructor(private purchaseService: PurchaseService, private toastrService: ToastrService) {
    this.Ids = ids;
   }

  ngOnInit() {
    // console.log('in purchaseList ' + this.selectedTab);
    // const url = '/purchase/getAllPurchaseByTypeAndStatus/PURCHASE_CONFIRMATION/' + this.selectedTab;
   this.getData();
  }

  getData()
  {
     this.purchaseService.getAllPurchaseByTypeAndStatus(PurchaseType.PURCHASE_CONFIRMATION, this.selectedTab).subscribe(data => {
      this.purchaseData = data;
      this.purchaseList = this.purchaseData.purchaseList;
      console.log('purchaseList ' + this.purchaseList);
    });
  }
  // emitting on every add so that parent can show the list
  addPurchaseToList(purchase) {
    // check if already added
    const index: number = this.addedPurchaseList.indexOf(purchase);
    if (index === -1) {
      this.addedPurchaseList.push(purchase);
      this.selectedPurchaseData.emit(this.addedPurchaseList);
    } else {
      this.toastrService.warning('record already added');
    }
  }
}
