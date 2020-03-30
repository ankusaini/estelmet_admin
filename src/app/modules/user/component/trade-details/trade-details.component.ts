import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { ProductClass, ProductCategory, ProductTemper, ProductType, ProductShape } from '../../../../shared/Models/product.model.';
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { ApiService } from 'src/app/shared/services/api.service';


function MaxlengthConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minLength = (c.parent.get("lengthMin"));
  const maxLength = (c.parent.get("lengthMax"));
  if(!maxLength || ! minLength) return;
  if(maxLength.value < minLength.value) {
    return { invalid: true};
  } 
}

function MaxwidthConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minWidth = (c.parent.get("widthMin"));
  const maxWidth = (c.parent.get("widthMax"));
  if(!maxWidth || ! minWidth) return;
  if(maxWidth.value < minWidth.value) {
    return { invalid: true};
  } 
}

function MaxthicknessConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minThickness = (c.parent.get("thicknessMin"));
  const maxThickness = (c.parent.get("thicknessMax"));
  if(!maxThickness || ! minThickness) return;
  if(maxThickness.value < minThickness.value) {
    return { invalid: true};
  } 
}

function MaxtemperConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minTemper = (c.parent.get("temperMin"));
  const maxTemper = (c.parent.get("temperMax"));
  if(!maxTemper || ! minTemper) return;
  if(maxTemper.value < minTemper.value) {
    return { invalid: true};
  } 
}



@Component({
  selector: "app-trade-details",
  templateUrl: "./trade-details.component.html",
  styleUrls: ["./trade-details.component.scss"]
})
export class TradeDetailsComponent implements OnInit {
  public thickMask = [/\d/, '.', /\d/, /\d/, /\d/,];
  @Output() trade_detail : EventEmitter<tempData[]> = new EventEmitter<tempData[]>();
  public tradeArr : tempData[] =[];

  productClassList : ProductClass[];
  productCategoryList : ProductCategory[];
  productTypeList : ProductType[];
  productShapeList : ProductShape[];
  productTemporList : ProductTemper[];
  countryList: any;

  constructor(
    private _staticData : StaticDataService,
    private toastrService: ToastrService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.getProductCategory();
    this.getProductClass();
    this.getProductType();
    this.getProductShape(); 
  }

  tradeDetails = new FormGroup({
    userProductPreferenceId: new FormControl(""),
    productType: new FormControl("", [Validators.required]),
    productCategory: new FormControl("", [Validators.required]),
    productShape: new FormControl("", [Validators.required]),
    productClass: new FormControl("", [Validators.required]),
    thicknessMin: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
    thicknessMax: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxthicknessConfirming]),
    temperMin: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
    temperMax: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxtemperConfirming]),
    lengthMin: new FormControl("", [CustomValidator.compondValueValidate]),
    lengthMax: new FormControl("", [CustomValidator.compondValueValidate, MaxlengthConfirming]),
    widthMin: new FormControl("",[CustomValidator.compondValueValidate]),
    widthMax: new FormControl("", [CustomValidator.compondValueValidate, MaxwidthConfirming]),
    monthlyRequirement: new FormControl("", [Validators.required, CustomValidator.compondValueValidate])
  });

  tradeDetailsFormOnSubmit() {
    if(this.tradeArr.length > 0) {
      this.trade_detail.emit(this.tradeArr);
    } else {
      this.toastrService.error("Details are invalid!");
    }
  }

  addMore() {
    if(this.tradeDetails.valid) {
      this.tradeArr.push(this.tradeDetails.value);
      this.tradeDetails.reset();
    } else {
      this.toastrService.error("Invalid");
      console.log(this.tradeDetails.value);
    }
  }

  getProductType() {
    this._staticData.getProductType().subscribe(data=>{
      this.productTypeList = data;
      console.log(this.productTypeList);
    })
  }

  getProductClass() {
    this._staticData.getProductClass().subscribe(data=>{
      this.productClassList = data;
      console.log(this.productClassList);

    })
  }

  getProductCategory() {
    this._staticData.getAllProductCategory().subscribe(data=>{
      this.productCategoryList = data;
      console.log("category",this.productCategoryList);

    })
  }

  
  getProductShape() {
    this._staticData.getProductShape().subscribe(data=>{
      this.productShapeList = data;
      console.log(this.productShapeList);

    })
  }

  get f()
  {
    return this.tradeDetails.controls;
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
