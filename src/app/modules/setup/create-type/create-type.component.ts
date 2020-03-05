import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from "src/app/shared/services/product.service";
import { ProductType } from "src/app/shared/Models/product.model.";
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.scss']
})
export class CreateTypeComponent implements OnInit {

  public productTypeList:ProductType[];
 
  constructor(private productService:StaticDataService, private _commonService : CommonService) { }

    productTypeForm = new FormGroup({
    id: new FormControl(""),
    // productCode: new FormControl('',[Validators.required,Validators.minLength(2)]),
    productType: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required]),
  });

  ngOnInit() {
    this.getType();
  }

  getType(){
    this.productService.getProductType().subscribe(data=>{
      this.productTypeList = data;
    });
  }


  productTypeOnSubmit()
  {
    console.log(this.productTypeForm);
    if(this.productTypeForm.valid) {
     // this.productTypeForm.reset();
      this._commonService.saveProductType(this.productTypeForm.value).subscribe(res=>{
        console.log(res);
        this.productTypeList.push(res);
        this.productService.saveProductType(this.productTypeList);
      })
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteType(productType : ProductType){
    this._commonService.deleteProductType(productType.id.toString()).subscribe(res=>{
      this.productTypeList = this.productTypeList.filter(element => {
        return element!=productType
      });
      this.productService.saveProductType(this.productTypeList);
    });
  }

}
