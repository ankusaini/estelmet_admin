import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {
  ProductAnnealing, ProductCategory, ProductClass, ProductCoating,
  ProductDefect, ProductFinish, ProductHardness, ProductOiling,
  ProductOrigin, ProductPackaging, ProductShape, ProductStage,
  ProductSurfaceCoating, ProductTemper, ProductType
} from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { Warehouse } from '../../Models/warehouse';


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


@Component({
  selector: 'app-material-classification-specification',
  templateUrl: './material-classification-specification.component.html',
  styleUrls: ['./material-classification-specification.component.scss']
})
export class MaterialClassificationSpecificationComponent implements OnInit, OnChanges {
  constructor(private staticData: StaticDataService, private toastr: ToastrService) { }

  @Input() grntype: any = '';
  @Input() component = '';
  @Output() productData: EventEmitter<any> = new EventEmitter<any>();
  selectedGrnType: string;
  warehouse: Warehouse = null;

  productClassList: ProductClass[];
  productCategoryList: ProductCategory[];
  productTypeList: ProductType[];
  productShapeList: ProductShape[];

  productHarndessList: ProductHardness[];
  productTemperList: ProductTemper[];

  productCoatingList: ProductCoating[];
  productDefectList: ProductDefect[];
  productOriginList: ProductOrigin[];
  productOilingList: ProductOiling[];
  productSurfaceList: ProductSurfaceCoating[];
  productAnnealingList: ProductAnnealing[];
  productFinishList: ProductFinish[];
  productPackagingList: ProductPackaging[];

  public productForm: FormGroup;

  ngOnInit() {
    this.getProductType();
    this.getProductCategory();
    this.getProductShape();
    this.getProductClass();

    this.getProductHardness();
    this.getProductTemper();

    this.getProductCoating();
    this.getProductDefect();
    this.getProductOrigin();
    this.getProductOiling();
    this.getProductSurface();
    this.getProductAnnealing();
    this.getProductFinish();
    this.getProductPackaging();
    this.createForm();

    if (this.component === 'purchase') {
      this.productForm.removeControl('gpId');
      this.productForm.removeControl('warehouse');

    }
  }

  createForm() {
    this.productForm = new FormGroup({
      // productId: new FormControl(""),
      // productType:new FormGroup({

      productType: new FormGroup({
        id: new FormControl('', [Validators.required]),
        productType: new FormControl('', [Validators.required])
      }),
      productCategory: new FormGroup({
        id: new FormControl('', [Validators.required]),
        productCategory: new FormControl('', [Validators.required])
      }),
      productShape: new FormGroup({
        id: new FormControl('', [Validators.required]),
        productShape: new FormControl('', [Validators.required])
      }),
      productClass: new FormGroup({
        id: new FormControl('', [Validators.required]),
        productClass: new FormControl('', [Validators.required])
      }),
      thicknessMin: new FormControl('', [Validators.required]),
      thicknessMax: new FormControl('', [CustomValidator.compondValueValidate, Validators.required, MaxthicknessConfirming]),
      widthMin: new FormControl('', [Validators.required]),
      widthMax: new FormControl('', [MaxwidthConfirming, Validators.required, CustomValidator.compondValueValidate]),
      lengthMin: new FormControl('', [Validators.required]),
      lengthMax: new FormControl('', [MaxlengthConfirming, Validators.required, CustomValidator.compondValueValidate]),
      hardnessMin: new FormGroup({
        id: new FormControl('', [Validators.required]),
        productHardness: new FormControl('', [Validators.required])
      }),
      hardnessMax: new FormGroup({
        id: new FormControl('', [Validators.required]),
        productHardness: new FormControl('', [Validators.required,])
      }),
      temperMin: new FormGroup({
        id: new FormControl('', [Validators.required]),
        productTemper: new FormControl('', [Validators.required])
      }),
      temperMax: new FormGroup({
        id: new FormControl('', [Validators.required]),
        productTemper: new FormControl('', [Validators.required])
      }),

      heigth: new FormControl('', [CustomValidator.compondValueValidate, Validators.required]),
      productCoating: new FormGroup({
        id: new FormControl(''),
        productCoating: new FormControl('')
      }),
      productDefect: new FormGroup({
        id: new FormControl(''),
        productDefect: new FormControl('')
      }),
      productOrigin: new FormGroup({
        id: new FormControl(''),
        productOrigin: new FormControl('')
      }),
      productOiling: new FormGroup({
        id: new FormControl(''),
        productOiling: new FormControl('')
      }),
      productSurfaceCoating: new FormGroup({
        id: new FormControl(''),
        productSurfaceCoating: new FormControl('')
      }),
      productAnnealing: new FormGroup({
        id: new FormControl(''),
        productAnnealing: new FormControl('')
      }),
      productFinish: new FormGroup({
        id: new FormControl(''),
        productFinish: new FormControl('')
      }),
      productPackaging: new FormGroup({
        id: new FormControl(''),
        productPackaging: new FormControl('')
      }),
      gwt: new FormControl('', [CustomValidator.compondValueValidate, Validators.required]),
      nwt: new FormControl('', [CustomValidator.compondValueValidate, Validators.required]),
      remarks: new FormControl(''),
      status: new FormControl('PENDING'),
      gpId: new FormControl(''),
      productStage: new FormControl(''),
      warehouse: new FormControl(this.warehouse)
    });

  }

  ngOnChanges() {
    console.log(this.grntype);
    // if(this.grntype === 'withoutPurchaseInvoice') {
    //  this.selectedGrnType = 'WITHOUT_PC';
    // } if(this.grntype === 'PURCHASE_INVOICE') {
    //  this.selectedGrnType = 'WITH_PC';
    // } if(this.grntype === 'jobWorkChalan') {
    //  this.selectedGrnType = 'JOB_WORK_OTHER';
    // } if(this.grntype === 'materialTransfer') {
    //   this.selectedGrnType = 'MATERIAL_TRANSFER';
    // }
  }

  getProductHardness() {
    this.staticData.getAllHardness().subscribe(data => {
      this.productHarndessList = data;
    });
  }

  getProductTemper() {
    this.staticData.getProductTempor().subscribe(data => {
      this.productTemperList = data;
    });
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

  getProductCoating() {
    this.staticData.getAllProductCoating().subscribe(data => {
      this.productCoatingList = data;
    });
  }

  getProductAnnealing() {
    this.staticData.getAllAnnealing().subscribe(data => {
      this.productAnnealingList = data;
    });
  }

  getProductFinish() {
    this.staticData.getAllFinish().subscribe(data => {
      this.productFinishList = data;
    });
  }

  getProductPackaging() {
    this.staticData.getAllPackaging().subscribe(data => {
      this.productPackagingList = data;
    });
  }

  getProductSurface() {
    this.staticData.getAllSurface().subscribe(data => {
      this.productSurfaceList = data;
    });
  }

  getProductDefect() {
    this.staticData.getAllDefect().subscribe(data => {
      this.productDefectList = data;
    });
  }

  getProductOrigin() {
    this.staticData.getAllOrigin().subscribe(data => {
      this.productOriginList = data;
    });
  }

  getProductOiling() {
    this.staticData.getAllProductOiling().subscribe(data => {
      this.productOilingList = data;
    });
  }

  productFormOnSubmit() {
    console.log(this.productForm);
    if (this.productForm.invalid) {
      // alert("form invalid");
      this.toastr.error('Error! Invalid details.');
    } else {
      // this.productForm.get('productStage').patchValue(this.selectedGrnType);
      if (this.component === 'purchase') {
        this.productForm.get('productStage').patchValue(ProductStage.TEMP);
      } else {
        this.productForm.get('productStage').patchValue(ProductStage.JOB_WORK_OTHERS);
      }
      this.productData.emit(this.productForm.value);
      // this.resetForm();
      this.createForm();
    }
  }

  // resetForm() {
  //   this.productForm.controls.thicknessMax.reset();
  //   this.productForm.controls.thicknessMin.reset();
  // }

  setValue(event, type) {
    this.productForm.controls[type]['controls'][type].patchValue(
      event.target.options[event.target.options.selectedIndex].text
    );
  }

  setValueTwoField(event, type1, type2) {
    this.productForm.controls[type1]['controls'][type2].patchValue(
      event.target.options[event.target.options.selectedIndex].text
    );
  }

  get f() {
    return this.productForm.controls;
  }

  // get f2()
  // {
  //   let form = this.productForm.get('productShape') as FormGroup;
  //   console.log("working fine", form.controls)
  //   return form.controls;
  // }
}
