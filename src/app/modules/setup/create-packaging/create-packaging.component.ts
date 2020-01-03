import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/Data/static-data.service';
import { ProductPackaging } from 'src/app/shared/Models/product.model.';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/http/commonService';

@Component({
  selector: 'app-create-packaging',
  templateUrl: './create-packaging.component.html',
  styleUrls: ['./create-packaging.component.scss']
})
export class CreatePackagingComponent implements OnInit {

  productPackagingFormGroup : FormGroup;
  productPackagingList : ProductPackaging[];
  constructor(private productPackaging : StaticDataService,private _commonService  : CommonService) { 
    this.productPackagingFormGroup = new FormGroup({
      id : new FormControl(""),
      productPackaging : new FormControl("",Validators.required),
      description : new FormControl("",Validators.required),
      parentId : new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
    this.getPackaging();
  }

  getPackaging(){
    this.productPackaging.getAllPackaging().subscribe(data=>{
      this.productPackagingList = data;
    });
  }

  savePackaging(){
    if(this.productPackagingFormGroup.valid){
      this._commonService.saveProductPackaging(this.productPackagingFormGroup.value).subscribe(res=>{
        this.productPackagingList.push(res);
        this.productPackaging.saveProductPackaging( this.productPackagingList);
      });
    }else{
      console.log("All fields are necessary");
    }
  }

  deletePackaging(productPackage : ProductPackaging){
    this._commonService.deleteProductPackaging(productPackage.id.toString()).subscribe(res=>{
      this.productPackagingList = this.productPackagingList.filter(element => {
        return element!=productPackage
      });
      this.productPackaging.saveProductPackaging(this.productPackagingList);
    });
  }

}
