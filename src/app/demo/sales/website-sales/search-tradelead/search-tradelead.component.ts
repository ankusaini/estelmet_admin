import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { SalesService } from 'src/app/shared/services/sales.service';
=======
>>>>>>> b287ef4732261c07494a94a01edc5a8ad408a4c9

@Component({
  selector: 'app-search-tradelead',
  templateUrl: './search-tradelead.component.html',
  styleUrls: ['./search-tradelead.component.css']
})
export class SearchTradeleadComponent implements OnInit {

<<<<<<< HEAD
  public salesData : any;
  // public salesList: any;
  constructor(private salesService: SalesService) { }

  ngOnInit() {
    let url= "/sales/getAllSalesByTypeAndStatus/TRADE_LEAD_LOT/APPROVED";
    this.salesService.getAllSalesByTypeAndStatus(url)
      .subscribe(data => {
        this.salesData = data;
        console.log("Your data is: "+ data);
      },
      error => {}
    );
=======
  constructor() { }

  ngOnInit() {
>>>>>>> b287ef4732261c07494a94a01edc5a8ad408a4c9
  }

}
