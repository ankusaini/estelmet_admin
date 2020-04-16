import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SalesServiceService } from '../../services/sales-service.service';
import { ToastrService } from 'ngx-toastr';
import { Sales } from 'src/app/shared/Models/sales.model';

@Component({
  selector: 'app-select-customer-order-id',
  templateUrl: './select-customer-order-id.component.html',
  styleUrls: ['./select-customer-order-id.component.scss']
})
export class SelectCustomerOrderIdComponent implements OnInit {
  public salesList: Sales[];
  @Output() outputSelected: EventEmitter<any> = new EventEmitter<any>();
  public selectedProduct: Sales;
  public selectedId:any;

  constructor(private salesservice: SalesServiceService,
              private toastr: ToastrService) { }

  ngOnInit() {
    let url = "/sales/getAllSalesByTypeAndStatus/SALES_OFFER_LOT/APPROVED";
    this.salesservice.getAllSalesByTypeAndStatus(url).subscribe(
      data => {
        this.salesList = data.salesList;
      },error => {
        console.log(error);
      }
    )
  }

  selectProduct(sale: Sales) {
    this.selectedProduct = sale;
    this.selectedId=sale.id;
    console.log(sale);
  }

  submitSelected() {
    if(this.selectedProduct) {
      this.outputSelected.emit(this.selectedProduct);
    }else {
      this.toastr.error("Error! Select at least one");
    }
  }

}
