import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SalesServiceService } from '../../services/sales-service.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-select-product-tradelead',
  templateUrl: './select-product-tradelead.component.html',
  styleUrls: ['./select-product-tradelead.component.scss']
})
export class SelectProductTradeleadComponent implements OnInit {
  @Output() ouputSelectedList: EventEmitter<any> = new EventEmitter<any>();
  public productList: Product[];
  public selectedProductList: Product[];

  constructor(private salesService: SalesServiceService,
              private toastr: ToastrService
              ) { }

  ngOnInit() {
    let url = "/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED";
    this.salesService.getAllProductByProductStageAndStatus(url).subscribe(
      data => {
        this.productList = data;
      }
    )
  }

  getSelectedList(data) {
      this.selectedProductList = data;
  }

  submitSelectProductData() {
    if(this.selectedProductList) {
      this.ouputSelectedList.emit(this.selectedProductList);
    } else {
      this.toastr.error("Error! Selected atleast one product.");
    }

  }

}
