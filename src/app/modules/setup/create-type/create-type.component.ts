import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from "src/app/shared/services/product.service";
import { ProductType } from "src/app/shared/Models/product.model.";
import { StaticDataService } from 'src/app/shared/services/data/static-data.service';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.scss']
})
export class CreateTypeComponent implements OnInit {

  public productTypeList:ProductType[];
  constructor(
    private _staticData : StaticDataService,
    private productService : ProductService
  ) { }

    productTypeForm = new FormGroup({
    id: new FormControl(""),
    productCode: new FormControl('',[Validators.required,Validators.minLength(2)]),
    productType: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required]),
  });

  ngOnInit() {
    this.getProductTypeList();
  }

  getProductTypeList()
  {
    this._staticData.getProductType().subscribe(data=>{
      console.log("data is",data);
      //list
      this.productTypeList=data;
    },error=>{
      console.log("error");
    })
  }



  productTypeOnSubmit()
  {

    if(this.productTypeForm.invalid)
      {
        console.log("form invalid")
        alert("invalid form")
      }
    else
      {
        console.log("inside fun");
        this.productService.setProductType(this.productTypeForm.value).subscribe(data=>{
          console.log("product saved");
          //this.getproductList();
        },error=>{

        })

      }
  }
}
