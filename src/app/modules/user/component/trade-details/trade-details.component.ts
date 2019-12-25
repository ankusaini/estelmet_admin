import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { StaticDataService } from 'src/app/shared/services/data/static-data.service';
import { ProductClass, ProductCategory, ProductTemper, ProductType, ProductShape } from '../../../../shared/Models/product.model.';


@Component({
  selector: "app-trade-details",
  templateUrl: "./trade-details.component.html",
  styleUrls: ["./trade-details.component.scss"]
})
export class TradeDetailsComponent implements OnInit {

  @Output() trade_detail : EventEmitter<tempData[]> = new EventEmitter<tempData[]>();
  public tradeArr : tempData[] = [];

  productClassList : ProductClass[];
  productCategoryList : ProductCategory[];
  productTypeList : ProductType[];
  productShapeList : ProductShape[];
  productTemporList : ProductTemper[];

  constructor(
    private _staticData : StaticDataService,
  ) {}

  ngOnInit() {
    this.getProductCategory();
    this.getProductClass();
    this.getProductType();
    this.getProductTempor();
    this.getProductShape();
  }

  tradeDetails = new FormGroup({
    userProductPreferenceId: new FormControl("", []),
    productType: new FormControl("", [Validators.required]),
    productCategory: new FormControl("", [Validators.required]),
    productShape: new FormControl("", [Validators.required]),
    productClass: new FormControl("", [Validators.required]),
    thicknessMin: new FormControl("", [Validators.required]),
    thicknessMax: new FormControl("", [Validators.required]),
    temperMin: new FormControl("", [Validators.required]),
    temperMax: new FormControl("", [Validators.required]),
    lengthMin: new FormControl("", [Validators.required]),
    lengthMax: new FormControl("", [Validators.required]),
    widthMin: new FormControl("", [Validators.required]),
    widthMax: new FormControl("", [Validators.required]),
    monthlyRequirement: new FormControl("", [Validators.required])
  });



  tradeDetailsFormOnSubmit() {
    if(this.tradeArr.length > 0) {
      this.trade_detail.emit(this.tradeArr);
    } else {
      console.log("trade details", this.tradeDetails);
    }
  }

  addMore() {
    if(this.tradeDetails.valid) {
      this.tradeArr.push(this.tradeDetails.value);
      this.tradeDetails.reset();
    } else {
      console.log(this.tradeDetails.value);
    }
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

  getProductTempor() {
    this._staticData.getProductTempor().subscribe(data=>{
      this.productTemporList = data;
    })
  }
}

interface tempData {
  userProductPreferenceId: string;
  productType: string;
  productCategory: string;
  productShape: string;
  productClass: string;
  thicknessMin: string;
  thicknessMax: string;
  temperMin: string;
  temperMax: string;
  lengthMin: string;
  lengthMax: string;
  widthMin: string;
  widthMax: string;
  monthlyRequirement:string; 
}
