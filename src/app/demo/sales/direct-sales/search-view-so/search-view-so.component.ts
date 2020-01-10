import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { SalesService } from 'src/app/shared/services/sales.service';
=======
>>>>>>> b287ef4732261c07494a94a01edc5a8ad408a4c9

@Component({
  selector: 'app-search-view-so',
  templateUrl: './search-view-so.component.html',
  styleUrls: ['./search-view-so.component.css']
})
export class SearchViewSoComponent implements OnInit {
<<<<<<< HEAD
  public dataList: any;

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    let url="/sales/getAllSalesByTypeAndStatus/SALES_OFFER_LOT/APPROVED";
    this.salesService.getAllSalesByTypeAndStatus(url).subscribe(data => {
      this.dataList= data;
      console.log("your Data is: "+ data);
      },
      error => { }
    );
=======

  constructor() { }

  ngOnInit() {
>>>>>>> b287ef4732261c07494a94a01edc5a8ad408a4c9
  }

}
