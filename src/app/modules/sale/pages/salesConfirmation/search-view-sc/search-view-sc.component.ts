import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/shared/Models/sales.model';
import { SalesServiceService } from '../../../services/sales-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-view-sc',
  templateUrl: './search-view-sc.component.html',
  styleUrls: ['./search-view-sc.component.scss']
})
export class SearchViewScComponent implements OnInit {
  public dataList: any;
  salesList: Sales[];
  public selectedSalesList: Sales[] = [];

  constructor(private salesService: SalesServiceService,
            private router: Router,
            private toastrService: ToastrService) { }

  ngOnInit() {
    let url="/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/APPROVED";
    this.salesService.getAllSalesByTypeAndStatus(url).subscribe( data => {
      this.dataList = data;
      this.salesList= this.dataList.salesList;
      // console.log("your list is: "+ this.salesList);
    }, error =>{
      }
    );
  }

  addToSelectedList(sale: Sales) {
    const index: number = this.selectedSalesList.indexOf(sale);
    if (index == -1) {
      this.selectedSalesList.push(sale);
    } else {
      this.toastrService.warning("record already added!");
    }
  }

  removeFromSelectedList(sale: Sales) {
    const index: number = this.selectedSalesList.indexOf(sale);
    if (index !== -1) {
      this.selectedSalesList.splice(index, 1);
    }
  }

  routerToScEdit(id) {
    this.router.navigateByUrl("/sales/scEdit/"+id);
  }


}
