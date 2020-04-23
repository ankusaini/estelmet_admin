import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../../../../shared/Models/product.model.';

@Component({
  selector: 'app-nav-search-product',
  templateUrl: './nav-search-product.component.html',
  styleUrls: ['./nav-search-product.component.scss']
})
export class NavSearchProductComponent implements OnInit {

  @Input() productList: Product[] = [];
  constructor() { }

  ngOnInit() {
  }

}
