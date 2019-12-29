import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from "src/app/shared/services/product.service";
import { ProductType } from "src/app/shared/Models/product.model.";
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.scss']
})
export class CreateTypeComponent implements OnInit {

  public productTypeList:ProductType[];
  constructor(private productService:StaticDataService) { }

    productTypeForm = new FormGroup({
    id: new FormControl(""),
    productCode: new FormControl('',[Validators.required,Validators.minLength(2)]),
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

    if(this.productTypeForm.invalid)
      {
        console.log("form invalid")
        alert("invalid form")
      }
    else
      {
        console.log("inside fun");
        this.productTypeList.push(this.productTypeForm.value);
        this.productService.saveProductType(this.productTypeForm.value);

      }
  }
}
