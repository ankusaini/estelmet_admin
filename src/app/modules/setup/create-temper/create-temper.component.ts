import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { ProductTemper } from 'src/app/shared/Models/product.model.';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-temper',
  templateUrl: './create-temper.component.html',
  styleUrls: ['./create-temper.component.scss']
})
export class CreateTemperComponent implements OnInit {

  productTemperList : ProductTemper[];
  productTemperFormGroup : FormGroup;

  constructor(private ProductTemper : StaticDataService,private _commonService:CommonService) {

    this.productTemperFormGroup = new FormGroup({
       id : new FormControl(""),
       productTemper : new FormControl("",Validators.required),
      // description :  new FormControl("",Validators.required)
       parentId : new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
    this.getTemper();
  }

  getTemper(){
    this.ProductTemper.getProductTempor().subscribe(data=>{
      this.productTemperList = data;
    });
  }

  saveTemper(){
    console.log(this.productTemperFormGroup);
    if(this.productTemperFormGroup.valid) {
     // this.productTypeForm.reset();
      this._commonService.saveProductTemper(this.productTemperFormGroup.value).subscribe(res=>{
        console.log(res);
        this.productTemperList.push(res);
        this.ProductTemper.saveProductTempor(this.productTemperList);
      });
    } else {
      console.log('all fields are nessessary');
    }
  }

  deleteTemper(productTemper : ProductTemper){
    this._commonService.deleteProductTemper(productTemper.id.toString()).subscribe(res=>{
      this.productTemperList = this.productTemperList.filter(element => {
        return element!=productTemper
      });
      this.ProductTemper.saveProductTempor(this.productTemperList);
    });
  }

}
