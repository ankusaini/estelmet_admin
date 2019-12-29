import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductCategory } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  public ProductCategoryList : ProductCategory[];
  productCategoryForm : FormGroup;
  constructor(private productCategory : StaticDataService) { 

     this.productCategoryForm = new FormGroup({
      id:new FormControl(""),
      parentId:new FormControl("",Validators.required),
      productCategory:new FormControl("",Validators.required),
      description:new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
     this.getCategory();
  }

  getCategory(){
    this.productCategory.getAllProductCategory().subscribe(data=>{
       this.ProductCategoryList = data;
    });
  }

}
