import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Purchase } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from 'src/app/modules/purchase/services/purchase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-po-list',
  templateUrl: './po-list.component.html',
  styleUrls: ['./po-list.component.scss']
})
export class PoListComponent implements OnInit {
  public poList: Purchase[] = [];
  public selectedPO: Purchase;
  @Output() selectedPOData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private purchaseService: PurchaseService, private router: Router) {
    this.getAllPurchaseByTypeAndStatus('PURCHASE_ORDER', 'APPROVED');

  }

  ngOnInit() {
  }

  getAllPurchaseByTypeAndStatus(type, status) {
    let url = '/purchase/getAllPurchaseByTypeAndStatus/' + type + '/' + status;
    console.log('url', url)
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe(
      data => {
        console.log('data', data)
        this.poList = data.purchaseList;
        console.log('data', this.poList)
      },
      error => { }
    );
  }

  getSelectedPO(mr) {
    this.selectedPO = mr;
    console.log('selected', mr)
    this.selectedPOData.emit(this.selectedPO);
  }
}
