import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, UserProductPreference } from 'src/app/shared/Models/user.model';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { ProductClass, ProductCategory, ProductType, ProductShape, ProductTemper } from 'src/app/shared/Models/product.model.';
import { CustomValidator } from 'src/app/Validators/custom-validator';


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
  const minTemper = (c.parent.get("temporMin"));
  const maxTemper = (c.parent.get("temporMax"));
  if(!maxTemper || ! minTemper) return;
  if(maxTemper.value < minTemper.value) {
    return { invalid: true};
  } 
}

@Component({
  selector: 'app-user-trade-details',
  templateUrl: './user-trade-details.component.html',
  styleUrls: ['./user-trade-details.component.scss']
})
export class UserTradeDetailsComponent implements OnInit {

  @Input() selectedUser : User;
  @Output() check : EventEmitter<string> = new EventEmitter<string>();
  editProfile: boolean = false;

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

      this.createForm();
    } else {
      console.log("error code");
    }    
  }

  createForm() {
    this.tradeDetails = this._fb.group({
      productType : new FormControl('',[Validators.required]),
      productCategory : new FormControl('',[Validators.required]),
      productShape : new FormControl('',[Validators.required]),
      productClass : new FormControl('',[Validators.required]),
      lengthMin : new FormControl('',[Validators.required, CustomValidator.compondValueValidate]),
      lengthMax : new FormControl('',[Validators.required, CustomValidator.compondValueValidate, MaxlengthConfirming]),
      widthMin : new FormControl('',[Validators.required, CustomValidator.compondValueValidate]),
      widthMax :  new FormControl('',[Validators.required, CustomValidator.compondValueValidate, MaxwidthConfirming]),
      thicknessMin : new FormControl('',[Validators.required, CustomValidator.compondValueValidate]),
      thicknessMax : new FormControl('',[Validators.required, CustomValidator.compondValueValidate, MaxthicknessConfirming]),
      temporMin : new FormControl('',[Validators.required, CustomValidator.compondValueValidate]),
      temporMax : new FormControl('',[Validators.required, CustomValidator.compondValueValidate, MaxtemperConfirming]),
      monthlyRequirement: new FormControl("", [Validators.required, CustomValidator.compondValueValidate])
    });
  }

  addMore() {
    let data : UserProductPreference = {};
    data.productClass = this.tradeDetails.value.productClass;
    data.productCategory = this.tradeDetails.value.productCategory;
    data.productShape = this.tradeDetails.value.productShape;
    data.productType = this.tradeDetails.value.productType;
    data.lengthMin = this.tradeDetails.value.lengthMin;
    data.lengthMax = this.tradeDetails.value.lengthMax;
    data.widthMin = this.tradeDetails.value.widthMin
    data.widthMax = this.tradeDetails.value.widthMax;
    data.thicknessMin = this.tradeDetails.value.thicknessMin
    data.thicknessMax = this.tradeDetails.value.thicknessMax;
    data.temperMin = this.tradeDetails.value.temporMin;
    data.temperMax = this.tradeDetails.value.temporMax;
    data.monthlyRequirement = this.tradeDetails.value.monthlyRequirement;

    this.selectedUser.userProductPreference.push(data);
    this.check.emit('valid');

    // this.tradeDetails.reset();
    // this.resetForm();
    this.createForm();
    this.editProfile = false;
  }

  // resetForm() {

  // }

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

  // get f(): FormArray {
	// 	return this.keyPersonDetails.get('details') as FormArray;
  // }
  
  get f() {
    return this.tradeDetails.controls;
  }

}
