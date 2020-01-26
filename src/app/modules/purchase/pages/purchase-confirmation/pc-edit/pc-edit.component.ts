import { Component, OnInit } from '@angular/core';
import {IAlbum, Lightbox, LightboxConfig, LightboxEvent} from 'ngx-lightbox';
import {Subscription} from 'rxjs';
import { PurchaseService } from '../../../services/purchase.service';
import { ResponseP } from 'src/app/shared/Models/RequestResponse';
import { Product, ProductCategory } from 'src/app/shared/Models/product.model.';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from 'src/app/shared/Models/purchase.model';
import { Company } from 'src/app/shared/Models/company.model.';
import { Warehouse } from 'src/app/shared/Models/warehouse';
import { StaticDataService } from 'src/app/shared/services/data/static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-pc-edit',
  templateUrl: './pc-edit.component.html',
  styleUrls: ['./pc-edit.component.css']
})
export class PcEditComponent implements OnInit{
  public activeTab: string;
  public editProfile1: boolean;
  public editProfile2: boolean;
  public editProfile3: boolean;
  public editProfile4: boolean;

  public editProfile: boolean;
  public editProfileIcon: string;

  public editContact: boolean;
  public editContactIcon: string;

  public editOtherInfo: boolean;
  public editOtherInfoIcon: string;

  public albums: Array<IAlbum>;

  private subscription: Subscription;
  routerSubscription: any;
  pcId : any;
  public pcResponse: ResponseP;
  public productList: Product[];
  showData: boolean;
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
  pcDetails : FormGroup;
  addProductDetails : FormGroup;
  transportDetails: FormGroup;

  constructor(
              private lightbox: Lightbox,
              private lightboxEvent: LightboxEvent, 
              private lighboxConfig: LightboxConfig,
              private purchaseService: PurchaseService,
              private route: ActivatedRoute,
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
  

  }

  ngOnInit() {

    this.routerSubscription = this.route.url.subscribe( params => {
      this.pcId = this.route.snapshot.params.id;
      console.log("id: ", this.pcId);

      if(this.pcId) {
        let url = "/purchase/find/" + this.pcId;
        this.purchaseService.findRequstObjectById(url).subscribe(
          data => {
            this.pcResponse = data;
            this.productList = this.pcResponse.productList;
            this.showData = true;
            console.log("response", this.pcResponse);
            this.pcDetails = new FormGroup({
              productCategory: new FormControl(this.pcResponse.purchase.productCategory,[Validators.required]),
              productShape: new FormControl(this.pcResponse.purchase.productShape,[Validators.required]),
              comapnyName: new FormControl(this.pcResponse.company.name, [Validators.required]),
              warehouseName: new FormControl(this.pcResponse.warehouse.name,[Validators.required])
            });

            this.addProductDetails = new FormGroup({
              productType : new FormControl("",[Validators.required]),
              productCategory: new FormControl("", [Validators.required]),
              productShape: new FormControl("", [Validators.required]),
              productClass: new FormControl("", [Validators.required]),
              thicknessMin: new FormControl("", [Validators.required]),
              thicknessMax: new FormControl("", [Validators.required]),
              widthMin: new FormControl("", [Validators.required]),
              widthMax: new FormControl("", [Validators.required]),
              lengthMin: new FormControl("", [Validators.required]),
              lengthMax: new FormControl("", [Validators.required]),
              productTemperMin: new FormControl("", [Validators.required]),
              productTemperMax: new FormControl("", [Validators.required]),
              productHardness: new FormControl("", [Validators.required]),
              productCoating: new FormControl("", [Validators.required]),
              productDefect: new FormControl("", [Validators.required]),
              productOrigin: new FormControl("", [Validators.required]),
              productOiling: new FormControl("", [Validators.required]),
              productSurfaceCoating: new FormControl("", [Validators.required]),
              productAnnealing: new FormControl("", [Validators.required]),
              productFinish: new FormControl("", [Validators.required]),
              gwt: new FormControl("", [Validators.required]),
              nwt: new FormControl("", [Validators.required]),
              remarks: new FormControl("")
            });

            
            this.transportDetails = new FormGroup({
              supplierId: new FormControl(this.pcResponse.purchase.supplierId,[Validators.required]),
              transportId: new FormControl(this.pcResponse.purchase.transportId, [Validators.required]),
              expectedDate: new FormControl(this.pcResponse.purchase.expectedDate, [Validators.required]),
              invoice: new FormControl("", [Validators.required]),
              grossWt: new FormControl(this.pcResponse.purchase.grossWt, [Validators.required]),
              netWt: new FormControl(this.pcResponse.purchase.netWt,[ Validators.required]),
              materialDescription: new FormControl(this.pcResponse.purchase.materialDescription, [Validators.required]),
              coilsBundle: new FormControl(this.pcResponse.purchase.coilsBundle, [Validators.required]),
              containerNumber: new FormControl(this.pcResponse.purchase.containerNumber, [Validators.required]),
              lorryNumber: new FormControl(this.pcResponse.purchase.lorryNumber, [Validators.required]),
              driverName: new FormControl("", [Validators.required]), 
              driverMobile: new FormControl("", [Validators.required])
            });
             
          },
          error => {
            console.log("error");
          }
        );
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

  
  submitPcDetails() {
    console.log("pcDeatails are: ", this.pcDetails.value);
  }

  submitProductDetails() {
    console.log("product details: ", this.addProductDetails.value);
  }

  submitTransportDetails() {
    console.log("transport Details: ", this.transportDetails.value);
  }
}
