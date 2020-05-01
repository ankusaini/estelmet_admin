import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IAlbum, IEvent, Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
import { MachineDetail } from 'src/app/shared/Models/machineDetails.model';
import { Product } from 'src/app/shared/Models/product.model.';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { ProcessingService } from '../../service/processing.service';
import { ToastrService } from 'ngx-toastr';
import { Processing } from 'src/app/shared/Models/processing.model';
@Component({
  selector: 'app-edit-processing',
  templateUrl: './edit-processing.component.html',
  styleUrls: ['./edit-processing.component.css']
})
export class EditProcessingComponent implements OnInit {
  public processingId: any;
  public processingType:any;
  routerSubscription: any;
  public processingData: Processing;
  public productList: Product[];
  processingDetails: FormGroup;
  productDetails: FormGroup;
  public machineDetailList: MachineDetail[];
  public machineDetailIdList: any[];
  public widthShow:any='';

  // public productCategoryList: any[];
  // public productShapeList: any[];
  // public productTypeList: any[];
  // public productClassList: any[];
  // public productHardnessList: any[];
  // public productDefectList: any[];
  // public productOilingList: any[];
  // public productAnnealingList: any[];
  // public productCoatingList: any[];
  // public productOriginList: any[];
  // public productSurfaceList: any[];
  // public productFinishList: any[];


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

  constructor(
    private lightbox: Lightbox,
    private lightboxEvent: LightboxEvent,
    private lighboxConfig: LightboxConfig,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private processingService: ProcessingService,
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
    this.lighboxConfig.fadeDuration = 1;
  }

  ngOnInit() {
    this.routerSubscription = this.route.url.subscribe(params => {
      this.processingId = this.route.snapshot.params.id;

      if (this.processingId) {
        const url = '/inventory/productProcessing/find/' + this.processingId;
        this.processingService.findProductById(url).subscribe(data => {
          this.processingData = data;
          this.processingType=this.processingData.processingType;
         
          console.log(this.processingData);
          this.productList = this.processingData.productList;

          // form initate
          this.processingDetails = new FormGroup({
            productProcessingId: new FormControl(this.processingData.productProcessingId, [Validators.required]),
            contractorId: new FormControl(this.processingData.contractorId, [Validators.required]),
            jobWorkType: new FormControl(this.processingData.jobWorkType, [Validators.required]),
            machineDetailId: new FormControl(this.processingData.machineDetailId, [Validators.required]),
            companyId: new FormControl('COM-' + this.processingData.companyId, [Validators.required]),
            warehouseId: new FormControl('WAR-' + this.processingData.warehouseId, [Validators.required])
          });

          // this.productDetails = new FormGroup({
          //   productType: new FormControl('', [Validators.required]),
          //   productCategory: new FormControl('', [Validators.required]),
          //   productShape: new FormControl('', [Validators.required]),
          //   productClass: new FormControl('', [Validators.required]),
          //   thicknessMin: new FormControl('', [Validators.required]),
          //   thicknessMax: new FormControl('', [Validators.required]),
          //   widthMin: new FormControl('', [Validators.required]),
          //   widthMax: new FormControl('', [Validators.required]),
          //   lengthMin: new FormControl('', [Validators.required]),
          //   lengthMax: new FormControl('', [Validators.required]),
          //   temperMin: new FormControl('', [Validators.required]),
          //   temperMax: new FormControl('', [Validators.required]),
          //   productHardness: new FormControl('', [Validators.required]),
          //   productCoating: new FormControl('', [Validators.required]),
          //   productDefect: new FormControl('', [Validators.required]),
          //   productOrigin: new FormControl('', [Validators.required]),
          //   productOiling: new FormControl('', [Validators.required]),
          //   productSurfaceCoating: new FormControl('', [Validators.required]),
          //   productAnnealing: new FormControl('', [Validators.required]),
          //   productFinish: new FormControl('', [Validators.required]),
          //   gwt: new FormControl('', [Validators.required]),
          //   nwt: new FormControl('', [Validators.required]),
          //   lengthToBeCut: new FormControl(''),
          //   remarks: new FormControl('')
          // });
        });
      }
    });

    const machineUrl = '/inventory/getAllMachineDetail';
    this.processingService.getMachineDetails(machineUrl).subscribe(data => {
      this.machineDetailList = data;
      this.machineDetailIdList = this.machineDetailList.map(machineObj => machineObj.id);
    }, error => {
      console.log(error);
    });

  //   this.staticData.getAllProductCategory().subscribe(data => {
  //     this.productCategoryList = data.map(categoryObj => categoryObj.productCategory)
  //       .filter(categoryObj => categoryObj !== null);
  //   });

  //   this.staticData.getProductShape().subscribe(data => {
  //     this.productShapeList = data.map(shapeObj => shapeObj.productShape)
  //       .filter(shapeObj => shapeObj !== null);
  //   });

  //   this.staticData.getProductType().subscribe(data => {
  //     this.productTypeList = data.map(typeObj => typeObj.productType)
  //       .filter(typeObj => typeObj !== null);
  //   });

  //   this.staticData.getProductClass().subscribe(data => {
  //     this.productClassList = data.map(classObj => classObj.productClass)
  //       .filter(classObj => classObj !== null);
  //   });

  //   this.staticData.getAllHardness().subscribe(data => {
  //     this.productHardnessList = data.map(hardnessObj => hardnessObj.productHardness)
  //       .filter(hardnessObj => hardnessObj !== null);
  //   });

  //   this.staticData.getAllProductCoating().subscribe(data => {
  //     this.productCoatingList = data.map(coatingObj => coatingObj.productCoating)
  //       .filter(coatingObj => coatingObj !== null);
  //   });

  //   this.staticData.getAllDefect().subscribe(data => {
  //     this.productDefectList = data.map(defectObj => defectObj.productDefect)
  //       .filter(defectObj => defectObj !== null);
  //   });

  //   this.staticData.getAllOrigin().subscribe(data => {
  //     this.productOriginList = data.map(originObj => originObj.productOrigin)
  //       .filter(originObj => originObj !== null);
  //   });


  //   this.staticData.getAllSurface().subscribe(data => {
  //     this.productSurfaceList = data.map(surfaceObj => surfaceObj.productSurfaceCoating)
  //       .filter(surfaceObj => surfaceObj !== null);
  //   });

  //   this.staticData.getAllAnnealing().subscribe(data => {
  //     this.productAnnealingList = data.map(annealingObj => annealingObj.productAnnealing)
  //       .filter(annealingObj => annealingObj !== null);
  //   });

  //   this.staticData.getAllFinish().subscribe(data => {
  //     this.productFinishList = data.map(finishObj => finishObj.productFinish)
  //       .filter(finishObj => finishObj !== null);
  //   });

  //   this.staticData.getAllProductOiling().subscribe(data => {
  //     this.productOilingList = data.map(oilingObj => oilingObj.productOiling)
  //       .filter(oilingObj => oilingObj !== null);
  //   });
  // }

  // open(index: number): void {
  //   this.subscription = this.lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));
  //   this.lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
  // }

  // private _onReceivedEvent(event: IEvent): void {
  //   if (event.id === LIGHTBOX_EVENT.CLOSE) {
  //     this.subscription.unsubscribe();
  //   }
  }

  // submitProductDetails() {
  //   console.log(this.productDetails.value);
  // }

  // submitProcessingDetails() {
  //   if(this.processingDetails.valid) {
  //     this.processingData.jobWorkType = this.processingDetails.value.jobWorkType;
  //     this.processingData.machineDetailId = this.processingDetails.value.machineDetailId;

  //   } else {
  //     this.toastr.error("Invalid Details!");
  //   }
  // }

  getProductData(data) {
    console.log(data);
    //setting warehouse of Processing in newly added product
    data.warehouse={
      id:this.processingData.warehouseId
    }
    this.productList.push(data);
    console.log(this.productList);
    this.editProfile = false; 
  }

   deleteProduct(mr) {
    const index: number = this.productList.indexOf(mr);

    if (index !== -1) {
      this.productList.splice(index, 1);
    }
  }

  updateProcessing() {
    if(this.processingDetails.valid) {
      //check to be discuees for productlengthh 0
      console.log(this.processingData);
    this.processingData.jobWorkType = this.processingDetails.value.jobWorkType;
    this.processingData.machineDetailId = this.processingDetails.value.machineDetailId;
    this.processingData.productList = this.productList;
    // let url = '/processing/updateProcessing';
    let url = '/inventory/productProcessing/updateProcessing';
    this.processingService.updateProcessing(url, this.processingData).subscribe( res => {
      console.log(res);
      this.toastr.success("Update Successfully!");
    }, error => {
      console.log(error);
    })
    } else {
      this.toastr.error("Invalid Details!");
    }
  }

}
