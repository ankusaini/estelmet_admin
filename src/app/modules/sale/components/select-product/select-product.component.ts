import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/Models/product.model.';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss']
})
export class SelectProductComponent implements OnInit {
  @Input() productList: Product[];
  public selectedList: Product[] = [];

  constructor(private toastr: ToastrService) { }

  ngOnInit() {

  }

  getProductSelectedList(data) {
    if(data) {
      this.selectedList = data;
    }
  }

  finalSubmit() {
    if(this.selectedList.length >0) {
      alert("submitted!");
    }
    else {
      this.toastr.warning("Select at least one product!");
    }
  }

}
