import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/shared/services/sales.service';

@Component({
  selector: 'app-search-tradelead',
  templateUrl: './search-tradelead.component.html',
  styleUrls: ['./search-tradelead.component.css']
})
export class SearchTradeleadComponent implements OnInit {

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
  }

}
