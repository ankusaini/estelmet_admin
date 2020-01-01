import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {  ProductCategory,  ProductType,  } from '../../../../shared/Models/product.model.';
import { StaticDataService } from "src/app/shared/services/data/static-data.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-group-id',
  templateUrl: './create-group-id.component.html',
  styleUrls: ['./create-group-id.component.scss']
})
export class CreateGroupIdComponent implements OnInit {

    @Output() groupData : EventEmitter<any> = new EventEmitter<any>();


  constructor(private _staticData : StaticDataService) { }
  productCategoryList : ProductCategory[];
  productTypeList : ProductType[];

    createGroupForm = new FormGroup({
    userGroupId: new FormControl(""),
    userGroupName: new FormControl("", ),
    productType: new FormControl("", [Validators.required]),
    productCategory: new FormControl("", [Validators.required]),
    minThickness: new FormControl("", [Validators.required]),
    maxThickness: new FormControl("", [Validators.required]),
    userRole: new FormControl("", [Validators.required]),
  });
  
  ngOnInit() {
        this.getProductType();
    this.getProductCategory();

  }
  getProductCategory() {
    this._staticData.getAllProductCategory().subscribe(data=>{
      this.productCategoryList = data;
    })
  }
   getProductType() {
    this._staticData.getProductType().subscribe(data=>{
      this.productTypeList = data;
    })
  }

    createGroupSubmit() {
      let userGroupName=this.createGroupForm.controls.productType.value+"-"+this.createGroupForm.controls.productCategory.value+"-"+this.createGroupForm.controls.minThickness.value+"-"+this.createGroupForm.controls.maxThickness.value;
      this.createGroupForm.controls.userGroupName.patchValue(userGroupName);

    if(this.createGroupForm.valid) {
      this.groupData.emit(this.createGroupForm.value);
    } else {
      console.log("disable");
    }
  }

}
