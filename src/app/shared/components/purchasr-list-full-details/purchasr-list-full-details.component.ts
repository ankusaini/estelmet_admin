import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchasr-list-full-details',
  templateUrl: './purchasr-list-full-details.component.html',
  styleUrls: ['./purchasr-list-full-details.component.scss']
})
export class PurchasrListFullDetailsComponent implements OnInit {
  @Input('tabSelected') selectedTab: string;
  constructor() { }

  ngOnInit() {
    console.log("in purchaseList" +this.selectedTab);
  }

}
