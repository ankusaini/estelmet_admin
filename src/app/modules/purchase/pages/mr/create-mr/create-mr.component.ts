import { Component, OnInit } from '@angular/core';
import { Company } from "src/app/shared/Models/company.model.";
import { Warehouse } from "src/app/shared/Models/warehouse";
import {
  ProductCategory,
  ProductShape
} from "src/app/shared/Models/product.model.";
import { StaticDataService } from "src/app/shared/services/data/static-data.service";

@Component({
  selector: 'app-create-mr',
  templateUrl: './create-mr.component.html',
  styleUrls: ['./create-mr.component.scss']
})
export class CreateMRComponent implements OnInit {

   public companyList:Company[];
   public warehouseList:Warehouse[];
   public productShapeList:ProductShape[];
   public productCategoryList:ProductCategory[];   
  constructor(private productService:StaticDataService) { }

  ngOnInit() {
    this.getAllCompany();
    this.getAllwarehouseList();
    this.getAllproductShapeList();
    this.getAllproductCategoryList();
  }

  getAllCompany()
  {
 this.productService.getAllCompany().subscribe(data=>{
      this.companyList = data;
    });
  }

  getAllwarehouseList()
  {

  }

  getAllproductCategoryList()
  {
      this.productService.getAllProductCategory().subscribe(data=>{
      this.productCategoryList = data;
    });
  }

  getAllproductShapeList()
  {
    this.productService.getProductShape().subscribe(data=>{
      this.productShapeList = data;
    });
  }
}
