import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductCategory } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  public ProductCategoryList : ProductCategory[];
  productCategoryForm : FormGroup;
  constructor(private productCategory : StaticDataService, private _commonService : CommonService) { 

     this.productCategoryForm = new FormGroup({
      id:new FormControl(""),
      // parentId:new FormControl("",Validators.required),
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

  saveCategory(){
    console.log(this.productCategoryForm);
    if(this.productCategoryForm.valid) {
     // this.productTypeForm.reset();
      this._commonService.saveProductCategory(this.productCategoryForm.value).subscribe(res=>{
        console.log(res);
        this.ProductCategoryList.push(res);
        this.productCategory.saveProductCategory(this.ProductCategoryList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteCategory(productCategory : ProductCategory){
    this._commonService.deleteProductCategory(productCategory.id.toString()).subscribe(res=>{
      this.ProductCategoryList = this.ProductCategoryList.filter(element => {
        return element!=productCategory
      });
      this.productCategory.saveProductCategory(this.ProductCategoryList);
    });
  }
}
