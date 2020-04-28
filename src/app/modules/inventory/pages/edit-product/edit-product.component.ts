import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IAlbum, IEvent, Lightbox, LightboxEvent, LIGHTBOX_EVENT, LightboxConfig } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
import { Product, Status } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { InventoryService } from '../../service/inventory.service';
import { ToastrService } from "ngx-toastr";



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public activeTab: string;
  public editProfile1: boolean;
  public editProfile2: boolean;
  public price = 'NA';
  public editProfile: boolean;
  public editProfileIcon: string;

  public editContact: boolean;
  public editContactIcon: string;

  public editOtherInfo: boolean;
  public editOtherInfoIcon: string;

  public albums: Array<IAlbum>;
  private subscription: Subscription;
  routerSubscription: any;
  productId: any;
  public productResponse: any;
  public productList: Product[]=[];
  productIdForm: FormGroup;
  productDetailForm: FormGroup;

  public productCategoryList: any[];
  public productShapeList: any[];
  public productTypeList: any[];
  public productClassList: any[];
  public productHardnessList: any[];
  public productDefectList: any[];
  public productOilingList: any[];
  public productAnnealingList: any[];
  public productCoatingList: any[];
  public productOriginList: any[];
  public productSurfaceList: any[];
  public productFinishList: any[];
  public productTemperList: any[];

  public productCategoryListFull: any[];
  public productShapeListFull: any[];
  public productTypeListFull: any[];
  public productClassListFull: any[];
  public productHardnessListFull: any[];
  public productDefectListFull: any[];
  public productOilingListFull: any[];
  public productAnnealingListFull: any[];
  public productCoatingListFull: any[];
  public productOriginListFull: any[];
  public productSurfaceListFull: any[];
  public productFinishListFull: any[];
  public productTemperListFull: any[];



  constructor(
    private lightbox: Lightbox,
    private lightboxEvent: LightboxEvent,
    private route: ActivatedRoute,
    private lighboxConfig: LightboxConfig,
    private inventoryService: InventoryService,
    private staticData: StaticDataService,
    private toastr:ToastrService
  ) {
    this.activeTab = 'home';

    this.editProfile = false;
    this.editProfileIcon = 'icon-edit';

    this.editContact = false;
    this.editContactIcon = 'icon-edit';

    this.editOtherInfo = false;
    this.editOtherInfoIcon = 'icon-edit';

    this.albums = [];
    for (let i = 1; i <= 6; i++) {
      const album = {
        src: 'assets/images/light-box/l' + i + '.jpg',
        caption: 'Image ' + i + ' caption here',
        thumb: 'assets/images/light-box/sl' + i + '.jpg'
      };

      this.albums.push(album);
    }
    this.lighboxConfig.fadeDuration = 1;
  }

  ngOnInit() {
    this.routerSubscription = this.route.url.subscribe(params => {
      this.productId = this.route.snapshot.params.id;

      if (this.productId) {
        const url = '/inventory/find/' + this.productId;
        this.inventoryService.findRequstObjectById(url).subscribe(data => {
          console.log("Response is", data)
          this.productResponse = data;
          // this.inventoryService.calculatePrice(data).subscribe(
          //   p => this.price = p
          // );
          this.productIdForm = new FormGroup({
            productId: new FormControl(this.productResponse.productId, [Validators.required]),
            title: new FormControl(this.productResponse.title, [Validators.required]),
            purchaseId: new FormControl(this.productResponse.purchaseId, [Validators.required]),
            grnId: new FormControl(this.productResponse.grnId, [Validators.required]),
            companyId: new FormControl(this.productResponse.warehouse.companyId, [Validators.required]),
            WarehouseName: new FormControl(this.productResponse.warehouse.name, [Validators.required])
          });

          this.productDetailForm = new FormGroup({
            productType: new FormControl(this.productResponse.productType.productType, [Validators.required]),
            productCategory: new FormControl(this.productResponse.productCategory.productCategory, [Validators.required]),
            productShape: new FormControl(this.productResponse.productShape.productShape, [Validators.required]),
            productClass: new FormControl(this.productResponse.productClass.productClass, [Validators.required]),
            thicknessMin: new FormControl(this.productResponse.thicknessMin, [Validators.required]),
            thicknessMax: new FormControl(this.productResponse.thicknessMax, [Validators.required]),
            widthMin: new FormControl(this.productResponse.widthMin, [Validators.required]),
            widthMax: new FormControl(this.productResponse.widthMax, [Validators.required]),
            lengthMin: new FormControl(this.productResponse.lengthMin, [Validators.required]),
            lengthMax: new FormControl(this.productResponse.lengthMax, [Validators.required]),
            temperMin: new FormControl(this.productResponse.temperMin.productTemper, [Validators.required]),
            temperMax: new FormControl(this.productResponse.temperMax.productTemper, [Validators.required]),
            hardnessMin: new FormControl(this.productResponse.hardnessMin.productHardness, [Validators.required]),
            hardnessMax: new FormControl(this.productResponse.hardnessMax.productHardness, [Validators.required]),
            productCoating: new FormControl(this.productResponse.productCoating != null ? this.productResponse.productCoating.productCoating : '', [Validators.required]),
            productDefect: new FormControl(this.productResponse.productDefect != null ? this.productResponse.productDefect.productDefect : '', [Validators.required]),
            productOrigin: new FormControl(this.productResponse.productOrigin != null ? this.productResponse.productOrigin.productOrigin : '', [Validators.required]),
            productOiling: new FormControl(this.productResponse.productOiling != null ? this.productResponse.productOiling.productOiling : '', [Validators.required]),
            productSurfaceCoating: new FormControl(this.productResponse.productSurfaceCoating != null ? this.productResponse.productSurfaceCoating.productSurfaceCoating : '', [Validators.required]),
            productAnnealing: new FormControl(this.productResponse.productAnnealing != null ? this.productResponse.productAnnealing.productAnnealing : '', [Validators.required]),
            productFinish: new FormControl(this.productResponse.productFinish != null ? this.productResponse.productFinish.productFinish : '', [Validators.required]),
            gwt: new FormControl(this.productResponse.gwt, [Validators.required]),
            nwt: new FormControl(this.productResponse.nwt, [Validators.required]),
            remarks: new FormControl(''),
            heigth: new FormControl(this.productResponse.heigth, [Validators.required])
          });

        }, error => {
          console.log(error);
        });
      }
    });

    this.staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryListFull = data;
      this.productCategoryList = data.map(categoryObj => categoryObj.productCategory)
        .filter(categoryObj => categoryObj !== null);

    });

    this.staticData.getProductShape().subscribe(data => {
      this.productShapeListFull = data;
      this.productShapeList = data.map(shapeObj => shapeObj.productShape)
        .filter(shapeObj => shapeObj !== null);
    });

    this.staticData.getProductType().subscribe(data => {
      this.productTypeListFull = data;
      this.productTypeList = data.map(typeObj => typeObj.productType)
        .filter(typeObj => typeObj !== null);
      console.log(this.productTypeList);
    });

    this.staticData.getProductClass().subscribe(data => {
      this.productClassListFull = data;
      this.productClassList = data.map(classObj => classObj.productClass)
        .filter(classObj => classObj !== null);
    });

    this.staticData.getAllHardness().subscribe(data => {
      this.productHardnessListFull = data;
      this.productHardnessList = data.map(hardnessObj => hardnessObj.productHardness)
        .filter(hardnessObj => hardnessObj !== null);
    });

    this.staticData.getAllProductCoating().subscribe(data => {
      this.productCoatingListFull = data;
      this.productCoatingList = data.map(coatingObj => coatingObj.productCoating)
        .filter(coatingObj => coatingObj !== null);
    });

    this.staticData.getAllDefect().subscribe(data => {
      this.productDefectListFull = data;
      this.productDefectList = data.map(defectObj => defectObj.productDefect)
        .filter(defectObj => defectObj !== null);
    });

    this.staticData.getAllOrigin().subscribe(data => {
      this.productOriginListFull = data;
      this.productOriginList = data.map(originObj => originObj.productOrigin)
        .filter(originObj => originObj !== null);
    });


    this.staticData.getAllSurface().subscribe(data => {
      this.productSurfaceListFull = data;
      this.productSurfaceList = data.map(surfaceObj => surfaceObj.productSurfaceCoating)
        .filter(surfaceObj => surfaceObj !== null);
    });

    this.staticData.getAllAnnealing().subscribe(data => {
      this.productAnnealingListFull = data;
      this.productAnnealingList = data.map(annealingObj => annealingObj.productAnnealing)
        .filter(annealingObj => annealingObj !== null);
    });

    this.staticData.getAllFinish().subscribe(data => {
      this.productFinishListFull = data;
      this.productFinishList = data.map(finishObj => finishObj.productFinish)
        .filter(finishObj => finishObj !== null);
    });

    this.staticData.getAllProductOiling().subscribe(data => {
      this.productOilingListFull = data;
      this.productOilingList = data.map(oilingObj => oilingObj.productOiling)
        .filter(oilingObj => oilingObj !== null);

    });

    this.staticData.getProductTempor().subscribe(data => {
      this.productTemperListFull = data;
      this.productTemperList = data.map(typeObj => typeObj.productTemper)
        .filter(typeObj => typeObj !== null);
    });



  }

  open(index: number): void {
    this.subscription = this.lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));
    this.lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this.subscription.unsubscribe();
    }
  }

  saveProductId() {
    console.log('submitted data of productid is: ', this.productIdForm.value);
  }

  submitProductDetails() {
    console.log('submitted data of productDetails is: ', this.productDetailForm.value);
    this.productResponse.gwt = this.productDetailForm.controls.gwt.value;
    this.productResponse.lengthMin = this.productDetailForm.controls.lengthMin.value;
    this.productResponse.lengthMax = this.productDetailForm.controls.lengthMax.value;
    this.productResponse.nwt = this.productDetailForm.controls.nwt.value;
    this.productResponse.thicknessMax = this.productDetailForm.controls.thicknessMax.value;
    this.productResponse.thicknessMin = this.productDetailForm.controls.thicknessMin.value;
    this.productResponse.widthMax = this.productDetailForm.controls.widthMax.value;
    this.productResponse.widthMin = this.productDetailForm.controls.widthMin.value;
    this.productResponse.heigth = this.productDetailForm.controls.heigth.value;
    this.productResponse.remarks = this.productDetailForm.controls.remarks.value;
    this.productResponse.status = Status.PENDING;

    let value = this.productHardnessListFull.filter(data => {
      return data.productHardness == this.productDetailForm.controls.hardnessMax.value;
    }
    );
    if (value && value.length > 0) {
      this.productResponse.hardnessMax = value[0];
    }

    let value2 = this.productHardnessListFull.filter(data => {
      return data.productHardness == this.productDetailForm.controls.hardnessMin.value;
    }
    );

    if (value2 && value2.length > 0) {
      this.productResponse.hardnessMin = value2[0];
    }


    let value3 = this.productTypeListFull.filter(data => {
      return data.productType == this.productDetailForm.controls.productType.value;
    }
    );
    if (value3 && value3.length > 0) {
      this.productResponse.productType = value3[0];
    }


    let value4 = this.productCategoryListFull.filter(data => {
      return data.productCategory == this.productDetailForm.controls.productCategory.value;
    }
    );
    if (value4 && value4.length > 0) {
      this.productResponse.productCategory = value4[0];
    }


    let value5 = this.productShapeListFull.filter(data => {
      return data.productShape == this.productDetailForm.controls.productShape.value;
    }
    );
    if (value5 && value5.length > 0) {
      this.productResponse.productShape = value5[0];
    }


    let value6 = this.productClassListFull.filter(data => {
      return data.productClass == this.productDetailForm.controls.productClass.value;
    }
    );
    if (value6 && value6.length > 0) {
      this.productResponse.productClass = value6[0];
    }

    let value7 = this.productTemperListFull.filter(data => {
      return data.productTemper == this.productDetailForm.controls.temperMin.value;
    }
    );
    if (value7 && value7.length > 0) {
      this.productResponse.temperMin = value7[0];
    }

    let value8 = this.productTemperListFull.filter(data => {
      return data.productTemper == this.productDetailForm.controls.temperMax.value;
    }
    );
    if (value8 && value8.length > 0) {
      this.productResponse.temperMax = value8[0];
    }

    this.productList.push(this.productResponse);

    this.inventoryService.updateProduct(this.productList).subscribe(data=>{
        console.log("updated");
        this.toastr.success("Product updated successfully");
    },error=>{
      console.log("data",error);
    })


  }
}
