import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductOrigin } from 'src/app/shared/Models/product.model.';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-origin',
  templateUrl: './create-origin.component.html',
  styleUrls: ['./create-origin.component.scss']
})
export class CreateOriginComponent implements OnInit {

  productOriginFormGroup : FormGroup;
  productOriginList: ProductOrigin[];

  constructor(private productOrigin : StaticDataService,private _commonService : CommonService) {

    this.productOriginFormGroup = new FormGroup({
      id : new FormControl(""),
    productOrigin : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required),
    parentId  : new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
    this.getOrigin();
  }

  getOrigin(){
    this.productOrigin.getAllOrigin().subscribe(data=>{
      this.productOriginList = data;
    });
  }

  saveOrigin(){
    if(this.productOriginFormGroup.valid){
      this._commonService.saveProductOrigin(this.productOriginFormGroup.value).subscribe(res=>{
        this.productOriginList.push(res);
        this.productOrigin.saveProductOrigin(this.productOriginList);
      });
    }else{
      console.log("All fields are necessary");
    }
  }

  deleteCoating(productOrigin : ProductOrigin){
    this._commonService.deleteProductOrigin(productOrigin.id.toString()).subscribe(res=>{
      this.productOriginList = this.productOriginList.filter(element => {
        return element!=productOrigin
      });
      this.productOrigin.saveProductOrigin(this.productOriginList);
    });
  }

}
