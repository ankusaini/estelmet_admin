import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { ProductCategory, ProductClass, ProductShape, ProductTemper, ProductType } from '../../../../shared/Models/product.model.';


function MaxlengthConfirming(c: AbstractControl): any {
  if (!c.parent || !c) { return; }
  const minLength = (c.parent.get('lengthMin'));
  const maxLength = (c.parent.get('lengthMax'));
  if (!maxLength || !minLength) { return; }
  if (Number(maxLength.value) < Number(minLength.value)) {
    return { invalid: true };
  }
}

function MaxwidthConfirming(c: AbstractControl): any {
  if (!c.parent || !c) { return; }
  const minWidth = (c.parent.get('widthMin'));
  const maxWidth = (c.parent.get('widthMax'));
  if (!maxWidth || !minWidth) { return; }
  if (Number(maxWidth.value) < Number(minWidth.value)) {
    return { invalid: true };
  }
}

function MaxthicknessConfirming(c: AbstractControl): any {
  if (!c.parent || !c) { return; }
  const minThickness = (c.parent.get('thicknessMin'));
  const maxThickness = (c.parent.get('thicknessMax'));
  if (!maxThickness || !minThickness) { return; }
  if (Number(maxThickness.value) < Number(minThickness.value)) {
    return { invalid: true };
  }
}

function MaxtemperConfirming(c: AbstractControl): any {
  if (!c.parent || !c) { return; }
  const minTemper = (c.parent.get('temperMin'));
  const maxTemper = (c.parent.get('temperMax'));
  if (!maxTemper || !minTemper) { return; }
  if (Number(maxTemper.value) < Number(minTemper.value)) {
    return { invalid: true };
  }
}

@Component({
  selector: 'app-trade-details',
  templateUrl: './trade-details.component.html',
  styleUrls: ['./trade-details.component.scss']
})
export class TradeDetailsComponent implements OnInit {
  public thickMask = [/\d/, '.', /\d/, /\d/, /\d/];
  @Output() tradeDetail: EventEmitter<TempData[]> = new EventEmitter<TempData[]>();
  public tradeArr: TempData[] = [];
  tradeDetails = new FormGroup({
    userProductPreferenceId: new FormControl(''),
    productType: new FormControl('', [Validators.required]),
    productCategory: new FormControl('', [Validators.required]),
    productShape: new FormControl('', [Validators.required]),
    productClass: new FormControl('', [Validators.required]),
    thicknessMin: new FormControl('', [Validators.required, CustomValidator.compondValueValidate]),
    thicknessMax: new FormControl('', [Validators.required, CustomValidator.compondValueValidate, MaxthicknessConfirming]),
    temperMin: new FormControl('', [Validators.required, CustomValidator.compondValueValidate]),
    temperMax: new FormControl('', [Validators.required, CustomValidator.compondValueValidate, MaxtemperConfirming]),
    lengthMin: new FormControl('', [CustomValidator.compondValueValidate]),
    lengthMax: new FormControl('', [CustomValidator.compondValueValidate, MaxlengthConfirming]),
    widthMin: new FormControl('', [CustomValidator.compondValueValidate]),
    widthMax: new FormControl('', [CustomValidator.compondValueValidate, MaxwidthConfirming]),
    monthlyRequirement: new FormControl('', [Validators.required, CustomValidator.compondValueValidate])
  });
  productClassList: ProductClass[];
  productCategoryList: ProductCategory[];
  productTypeList: ProductType[];
  productShapeList: ProductShape[];
  productTemporList: ProductTemper[];
  countryList: any;

  constructor(
    private staticData: StaticDataService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getProductCategory();
    this.getProductClass();
    this.getProductType();
    this.getProductShape();
  }

  tradeDetailsFormOnSubmit() {
    if (this.tradeArr.length > 0) {
      this.tradeDetail.emit(this.tradeArr);
    } else {
      this.toastrService.error('Details are invalid!');
    }
  }

  addMore() {
    if (this.tradeDetails.valid) {
      this.tradeArr.push(this.tradeDetails.value);
      this.tradeDetails.reset();
    } else {
      this.toastrService.error('Invalid');
    }
  }

  getProductType() {
    this.staticData.getProductType().subscribe(data => {
      this.productTypeList = data;
    });
  }

  getProductClass() {
    this.staticData.getProductClass().subscribe(data => {
      this.productClassList = data;

    });
  }

  getProductCategory() {
    this.staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryList = data;
    });
  }


  getProductShape() {
    this.staticData.getProductShape().subscribe(data => {
      this.productShapeList = data;
    });
  }

  get f() {
    return this.tradeDetails.controls;
  }
  getProductTempor() {
    this.staticData.getProductTempor().subscribe(data => {
      this.productTemporList = data;
    });
  }
}

interface TempData {
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
  monthlyRequirement: string;
}
