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
@Component({
  selector: 'app-pc-edit',
  templateUrl: './pc-edit.component.html',
  styleUrls: ['./pc-edit.component.css']
})
export class PcEditComponent implements OnInit {
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
      console.log("id: "+ this.pcId);

      if(this.pcId) {
        let url = "/purchase/find/" + this.pcId;
        this.purchaseService.findRequstObjectById(url).subscribe(
          data => {
            this.pcResponse = data;
            this.productList = this.pcResponse.productList;
            this.showData = true;
            console.log("response", this.pcResponse);
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

    this.staticData.getProductShape().subscribe( data => {
      this.productShapeList= data.map(shapeObj => shapeObj.productShape)
        .filter(shapeObj => shapeObj!== null);
      console.log("shapeList: ", this.productShapeList);
    });


  }
}
