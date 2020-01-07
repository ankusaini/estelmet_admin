import { Component, OnInit, Input } from '@angular/core';
import { User, UserProductPreference } from 'src/app/shared/Models/user.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StaticDataService } from 'src/app/shared/services/data/static-data.service';
import { ProductClass, ProductCategory, ProductType, ProductShape, ProductTemper } from 'src/app/shared/Models/product.model.';

@Component({
  selector: 'app-user-trade-details',
  templateUrl: './user-trade-details.component.html',
  styleUrls: ['./user-trade-details.component.scss']
})
export class UserTradeDetailsComponent implements OnInit {

  @Input() selectedUser : User;
  private tradeDetails : FormGroup;

  productClassList : ProductClass[];
  productCategoryList : ProductCategory[];
  productTypeList : ProductType[];
  productShapeList : ProductShape[];
  productTemporList : ProductTemper[];

  constructor(
    private _fb : FormBuilder,
    private _staticData : StaticDataService
  ) { }

  ngOnInit() {
    if(this.selectedUser) {
      this.getProductCategory();
      this.getProductClass();
      this.getProductType();
      // this.getProductTempor();
      this.getProductShape();

      this.tradeDetails = this._fb.group({
        productType : new FormControl('',[Validators.required]),
        productCategory : new FormControl('',[Validators.required]),
        productShape : new FormControl('',[Validators.required]),
        productClass : new FormControl('',[Validators.required]),
        lengthMin : new FormControl('',[Validators.required]),
        lengthMax : new FormControl('',[Validators.required]),
        widthMin : new FormControl('',[Validators.required]),
        widthMax :  new FormControl('',[Validators.required]),
        thicknessMin : new FormControl('',[Validators.required]),
        thicknessMax : new FormControl('',[Validators.required]),
        temporMin : new FormControl('',[Validators.required]),
        temporMax : new FormControl('',[Validators.required]),
        monthlyRequirement: new FormControl("", [Validators.required])
      })  
    } else {
      console.log("error code");
    }    
  }

  addMore() {
    let data : UserProductPreference = {};
    data.productClass = this.tradeDetails.value.productClass;
    data.productCategory = this.tradeDetails.value.productCategory;
    data.productShape = this.tradeDetails.value.productShape;
    data.productType = this.tradeDetails.value.productType;
    data.lengthRange = this.tradeDetails.value.lengthMin.toString() + " - " + this.tradeDetails.value.lengthMax.toString();
    data.widthRange = this.tradeDetails.value.widthMin.toString() + " - " + this.tradeDetails.value.widthMax.toString();
    data.thicknessRange = this.tradeDetails.value.thicknessMin.toString() + " - " + this.tradeDetails.value.thicknessMax.toString();
    data.temperRange = this.tradeDetails.value.temporMin.toString() + " - " + this.tradeDetails.value.temporMax.toString();
    data.monthlyRequirement = this.tradeDetails.value.monthlyRequirement;

    this.selectedUser.userDetail.userProductPreference.push(data);
    this.tradeDetails.reset();
  }

  getProductType() {
    this._staticData.getProductType().subscribe(data=>{
      this.productTypeList = data;
    })
  }

  getProductClass() {
    this._staticData.getProductClass().subscribe(data=>{
      this.productClassList = data;
    })
  }

  getProductCategory() {
    this._staticData.getAllProductCategory().subscribe(data=>{
      this.productCategoryList = data;
    })
  }

  getProductShape() {
    this._staticData.getProductShape().subscribe(data=>{
      this.productShapeList = data;
    })
  }

}
