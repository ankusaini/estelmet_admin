import { Component, OnInit } from '@angular/core';
import {ProductCategory, ProductShape, ProductClass
} from 'src/app/shared/Models/product.model.';
@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {
  productCategory: ProductCategory[] = [];
  productShape: ProductShape[] = [];
  productClass: ProductClass[] = [];
  constructor() { }

  ngOnInit() {
  }

}
