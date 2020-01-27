import { Component, OnInit } from '@angular/core';
import {IAlbum, IEvent, Lightbox, LIGHTBOX_EVENT, LightboxConfig, LightboxEvent} from 'ngx-lightbox';
import {Subscription} from 'rxjs';

import { Product } from 'src/app/shared/Models/product.model.';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../service/inventory.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaticDataService } from 'src/app/shared/services/data/static-data.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

 public activeTab: string;
  public editProfile1: boolean;
  public editProfile2: boolean;

  public editProfile: boolean;
  public editProfileIcon: string;

  public editContact: boolean;
  public editContactIcon: string;

  public editOtherInfo: boolean;
  public editOtherInfoIcon: string;

  public albums: Array<IAlbum>;
  private subscription: Subscription;
  routerSubscription: any;
  productId : any;
  public productResponse: any;
  public productList: Product[];
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

  constructor(private lightbox: Lightbox,
             private lightboxEvent: LightboxEvent,
             private lighboxConfig: LightboxConfig,
             private route: ActivatedRoute,
             private inventoryService: InventoryService,
             private staticData: StaticDataService
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
    lighboxConfig.fadeDuration = 1;
  }

  ngOnInit() {
    this.routerSubscription = this.route.url.subscribe( params => {
      this.productId = this.route.snapshot.params.id;
      console.log("id is: ", this.productId); 

      if(this.productId) {
        let url = "/inventory/find/" + this.productId;
        this.inventoryService.findRequstObjectById(url).subscribe( data => {
          this.productResponse = data;
          console.log("productData is : ", this.productResponse);

          this.productIdForm = new FormGroup({
            productId : new FormControl(this.productResponse.productId, [Validators.required]),
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
            productClass: new FormControl(this.productResponse.productClass.productClass,[Validators.required]),
            thicknessMin: new FormControl(this.productResponse.thicknessMin, [Validators.required]),
            thicknessMax: new FormControl(this.productResponse.thicknessMax, [Validators.required]),
            widthMin: new FormControl(this.productResponse.widthMin, [Validators.required]),
            widthMax: new FormControl(this.productResponse.widthMax, [Validators.required]),
            lengthMin: new FormControl(this.productResponse.lengthMin, [Validators.required]),
            lengthMax: new FormControl(this.productResponse.lengthMax, [Validators.required]),
            temperMin: new FormControl(this.productResponse.temperMin, [Validators.required]),
            temperMax: new FormControl(this.productResponse.temperMax, [Validators.required]),
            productHardness: new FormControl(this.productResponse.hardnessMax.productHardness, [Validators.required]),
            productCoating: new FormControl(this.productResponse.productCoating, [Validators.required]),
            productDefect: new FormControl(this.productResponse.productDefect, [Validators.required]),
            productOrigin: new FormControl(this.productResponse.productOrigin, [Validators.required]),
            productOiling: new FormControl(this.productResponse.productOiling, [Validators.required]),
            productSurfaceCoating: new FormControl(this.productResponse.productSurfaceCoating, [Validators.required]),
            productAnnealing: new FormControl(this.productResponse.productAnnealing, [Validators.required]),
            productFinish: new FormControl(this.productResponse.productFinish, [Validators.required]),
            gwt: new FormControl(this.productResponse.gwt, [Validators.required]),
            nwt: new FormControl(this.productResponse.nwt, [Validators.required]),
            remarks: new FormControl("")
          });

        }, error => {
          console.log(error);
        });
      }
    });

    this.staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryList= data.map(categoryObj => categoryObj.productCategory)
        .filter(categoryObj => categoryObj!== null);
      console.log("categoryList: ", this.productCategoryList);

    });

    this.staticData.getProductShape().subscribe( data => {
      this.productShapeList= data.map(shapeObj => shapeObj.productShape)
        .filter(shapeObj => shapeObj!== null);
      console.log("shapeList: ", this.productShapeList);
    });

    this.staticData.getProductType().subscribe( data => {
      this.productTypeList= data.map(typeObj => typeObj.productType)
        .filter(typeObj => typeObj!== null);
      console.log("typeList: ", this.productTypeList);
    });

    this.staticData.getProductClass().subscribe( data => {
      this.productClassList = data.map(classObj => classObj.productClass)
      .filter(classObj => classObj!== null);
      console.log("classList: ", this.productClassList);
    });

    this.staticData.getAllHardness().subscribe( data => {
      this.productHardnessList = data.map(hardnessObj => hardnessObj.productHardness)
      .filter(hardnessObj => hardnessObj!== null);
      console.log("HardnessList: ", this.productHardnessList);
    });

    this.staticData.getAllProductCoating().subscribe( data => {
      this.productCoatingList = data.map(coatingObj => coatingObj.productCoating)
      .filter(coatingObj => coatingObj!== null);
      console.log("CoatingList: ", this.productCoatingList);
    });

    this.staticData.getAllDefect().subscribe( data => {
      this.productDefectList = data.map(defectObj => defectObj.productDefect)
      .filter(defectObj => defectObj!== null);
      console.log("defectList: ", this.productDefectList);
    });

    this.staticData.getAllOrigin().subscribe( data => {
      this.productOriginList = data.map(originObj => originObj.productOrigin)
      .filter(originObj => originObj!== null);
      console.log("OriginList: ", this.productOriginList);
    });

    
    this.staticData.getAllSurface().subscribe( data => {
      this.productSurfaceList = data.map(surfaceObj => surfaceObj.productSurfaceCoating)
      .filter(surfaceObj => surfaceObj!== null);
      console.log("surfaceList: ", this.productSurfaceList);
    });

    this.staticData.getAllAnnealing().subscribe( data => {
      this.productAnnealingList = data.map(annealingObj => annealingObj.productAnnealing)
      .filter(annealingObj => annealingObj!== null);
      console.log("annealingList: ", this.productAnnealingList);
    });

    this.staticData.getAllFinish().subscribe( data => {
      this.productFinishList = data.map(finishObj => finishObj.productFinish)
      .filter(finishObj => finishObj!== null);
      console.log("finishList: ", this.productFinishList);
    });

    this.staticData.getAllProductOiling().subscribe( data => {
      this.productOilingList = data.map(oilingObj => oilingObj.productOiling)
      .filter(oilingObj => oilingObj!== null);
      console.log("oilingList: ", this.productOilingList);
      
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
    console.log("submitted data of productid is: ", this.productIdForm.value);
  }

  submitProductDetails() {
    console.log("submitted data of productDetails is: ", this.productDetailForm.value);

  }
}
