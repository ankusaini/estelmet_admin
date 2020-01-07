import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductOiling } from 'src/app/shared/Models/product.model.';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-oiling',
  templateUrl: './create-oiling.component.html',
  styleUrls: ['./create-oiling.component.scss']
})
export class CreateOilingComponent implements OnInit {

  productOilingFormGroup : FormGroup;

  productOilingList : ProductOiling[];

  constructor(private productOiling : StaticDataService,private _commonService : CommonService) {

    this.productOilingFormGroup = new FormGroup({

      id : new FormControl(""),
    productOiling : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required),
    parentId : new FormControl("",Validators.required),
    });
   }

  ngOnInit() {
    this.getOiling();
  }

  getOiling(){
    this.productOiling.getAllProductOiling().subscribe(data=>{
      this.productOilingList = data;
    });
  }

  saveOiling(){
    if(this.productOilingFormGroup.valid){
      this._commonService.saveProductOiling(this.productOilingFormGroup.value).subscribe(res=>{
        console.log(res);
        this.productOilingList.push(res);
        this.productOiling.saveProductOiling(this.productOilingList);
      });
    }else{
      console.log("All fields are necessary");
    }
  }

  deleteOiling(productOiling : ProductOiling){
    this._commonService.deleteProductOiling(productOiling.id.toString()).subscribe(res=>{
      this.productOilingList = this.productOilingList.filter(element => {
        return element!=productOiling
      });
      this.productOiling.saveProductOiling(this.productOilingList);
    });
  }

}
