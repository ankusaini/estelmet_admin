import { Component, OnInit } from '@angular/core';
import {IAlbum, IEvent, Lightbox, LIGHTBOX_EVENT, LightboxConfig, LightboxEvent} from 'ngx-lightbox';
import {Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ResponseP } from 'src/app/shared/Models/RequestResponse';
import { Product, ProductCategory, ProductShape } from 'src/app/shared/Models/product.model.';
import { SalesServiceService } from '../../../services/sales-service.service';
import { Sales } from 'src/app/shared/Models/sales.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { CustomValidator } from 'src/app/Validators/custom-validator';
import { ToastrService } from 'ngx-toastr';

function MaxlengthConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minLength = (c.parent.get("lengthMin"));
  const maxLength = (c.parent.get("lengthMax"));
  if(!maxLength || ! minLength) return;
  if(Number(maxLength.value) < Number(minLength.value)) {
    return { invalid: true};
  } 
}

function MaxwidthConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minWidth = (c.parent.get("widthMin"));
  const maxWidth = (c.parent.get("widthMax"));
  if(!maxWidth || ! minWidth) return;
  if(Number(maxWidth.value) < Number(minWidth.value)) {
    return { invalid: true};
  } 
}

function MaxthicknessConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minThickness = (c.parent.get("thicknessMin"));
  const maxThickness = (c.parent.get("thicknessMax"));
  if(!maxThickness || ! minThickness) return;
  if(Number(maxThickness.value) < Number(minThickness.value)) {
    return { invalid: true};
  } 
}

function MaxtemperConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minTemper = (c.parent.get("productTemperMin"));
  const maxTemper = (c.parent.get("productTemperMax"));
  if(!maxTemper || ! minTemper) return;
  if(Number(maxTemper.value) < Number(minTemper.value)) {
    return { invalid: true};
  } 
}


@Component({
  selector: 'app-so-edit',
  templateUrl: './so-edit.component.html',
  styleUrls: ['./so-edit.component.scss']
})
export class SoEditComponent implements OnInit {

  routerSubscription: any;
  public soId: any;
  soResponse: ResponseP;
  public productList: Product[];
  soDetailsForm: FormGroup;
  addProductDetails : FormGroup;
  productCategoryList: any[];
  productShapeList: any[];
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

  constructor(private lightbox: Lightbox,
           private lightboxEvent: LightboxEvent,
            private lighboxConfig: LightboxConfig,
            private route: ActivatedRoute,
            private salesService: SalesServiceService,
            private staticData: StaticDataService,
            private toastr: ToastrService
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

    this.routerSubscription = this.route.url.subscribe(
      params => {
        this.soId = this.route.snapshot.params.id;

        if(this.soId) {
          let url = "/sales/find/" + this.soId;
          this.salesService.findRequstObjectById(url).subscribe(
            data => {
              this.soResponse = data;

              this.soDetailsForm = new FormGroup({
                id : new FormControl("SO-"+this.soResponse.sales.id, [Validators.required]),
                title: new FormControl(this.soResponse.sales.title, [Validators.required]),
                productCategory: new FormControl(this.soResponse.sales.productCategory, [Validators.required]),
                productShape: new FormControl(this.soResponse.sales.productShape, [Validators.required]),
                companyName: new FormControl(this.soResponse.company.name, [Validators.required]),
                warehouseAddress: new FormControl(this.soResponse.warehouse.address, [Validators.required])
              });
    
              this.addProductDetails = new FormGroup({
                productType : new FormControl("",[Validators.required]),
                productCategory: new FormControl("", [Validators.required]),
                productShape: new FormControl("", [Validators.required]),
                productClass: new FormControl("", [Validators.required]),
                thicknessMin: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
                thicknessMax: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxthicknessConfirming]),
                widthMin: new FormControl("", [CustomValidator.compondValueValidate]),
                widthMax: new FormControl("", [CustomValidator.compondValueValidate, MaxwidthConfirming]),
                lengthMin: new FormControl("", [CustomValidator.compondValueValidate]),
                lengthMax: new FormControl("", [CustomValidator.compondValueValidate, MaxlengthConfirming]),
                productTemperMin: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
                productTemperMax: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxtemperConfirming]),
                productHardness: new FormControl("", [Validators.required]),
                productCoating: new FormControl("", [Validators.required]),
                productDefect: new FormControl("", [Validators.required]),
                productOrigin: new FormControl("", [Validators.required]),
                productOiling: new FormControl("", [Validators.required]),
                productSurfaceCoating: new FormControl("", [Validators.required]),
                productAnnealing: new FormControl("", [Validators.required]),
                productFinish: new FormControl("", [Validators.required]),
                gwt: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
                nwt: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
                remarks: new FormControl("", [Validators.minLength(3)])
              });
  

            }, error => {
              console.log(error);
            }
          );

          let productListUrl = "/inventory/getAllProductByProductStageAndStatus/ACTIVE/APPROVED";
          this.salesService.getAllProductByProductStageAndStatus(productListUrl).subscribe(
            data => {
              this.productList = data;
            }, error => {
              console.log(error);
            }
          );

        }

      }, error => {
        console.log(error);
      }
    );

    this.staticData.getAllProductCategory().subscribe(data => {
      // this.productCategoryList = data;
      this.productCategoryList= data.map(categoryObj => categoryObj.productCategory)
        .filter(categoryObj => categoryObj!== null);
      console.log("categoryList: ", this.productCategoryList);

    });

    this.staticData.getProductShape().subscribe( data => {
      // this.productShapeList = data;
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

  submitSoDetails() {
   if(this.soDetailsForm.valid) {
    console.log(this.soDetailsForm.value);
   } else {
     this.toastr.error("Error! Invalid Details.");
   }
  }

  submitProductDetails() {
    if(this.addProductDetails.valid) {
      console.log("product details: ", this.addProductDetails.value);
    }
    else {
      this.toastr.error("Error! Invalid Details.")
    }
    
  }

  get f1() {
    return this.soDetailsForm.controls;
  }

  get f() {
    return this.addProductDetails.controls;
  }

}
