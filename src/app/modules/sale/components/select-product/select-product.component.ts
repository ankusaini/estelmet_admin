import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/Models/product.model.';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss']
})
export class SelectProductComponent implements OnInit {
  @Input() productList: Product[];
  @Output() outputselectedList : EventEmitter<any> =new EventEmitter<any>();
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
      this.outputselectedList.emit(this.selectedList);
      // alert("submitted!");
    }
    else {
      this.toastr.warning("Select at least one product!");
    }
  }

}
