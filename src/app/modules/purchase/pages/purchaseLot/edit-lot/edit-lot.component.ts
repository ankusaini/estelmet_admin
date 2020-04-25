import { Component, OnInit } from '@angular/core';
import {IAlbum,Lightbox, LightboxConfig, LightboxEvent} from 'ngx-lightbox';
import {Subscription} from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Product } from "src/app/shared/Models/product.model.";
import { ResponseP, RequestP } from "src/app/shared/Models/RequestResponse";
import { Status } from "src/app/shared/Models/user.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-edit-lot',
  templateUrl: './edit-lot.component.html',
  styleUrls: ['./edit-lot.component.scss']
})
export class EditLotComponent implements OnInit {

  showData: boolean;
  lotId: any;
  public activeTab: string;
  public editProfile1: boolean;

  public editProfile: boolean;
  public editProfileIcon: string;

  public editContact: boolean;
  public editContactIcon: string;

  public editOtherInfo: boolean;
  public editOtherInfoIcon: string;

  public albums: Array<IAlbum>;


    private subscription: Subscription;
  routerSubscription: any;
  public mrResponse: ResponseP;
  public request: RequestP = {};
  public productList: Product[] = [];

  constructor(private lightbox: Lightbox, private route: ActivatedRoute,private lightboxEvent: LightboxEvent, private lighboxConfig: LightboxConfig,
  private purchaseService: PurchaseService,
private toastr:ToastrService) {
     this.routerSubscription = this.route.url.subscribe(params => {
      this.lotId = this.route.snapshot.params.id;

      if (this.lotId) {
        // let url = "/purchase/find/" + this.lotId;
        this.purchaseService.findPurchase(this.lotId).subscribe(
          data => {
            this.mrResponse = data;
            this.productList = data.productList;
            this.showData = true;
            console.log("response", this.mrResponse);
          },
          error => {
            console.log("error");
          }
        );
      }
    });
   
   
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
  }



    updateLot() {
    console.log('productlist', this.productList);
    if (this.productList && this.productList.length === 0) {
      // alert('please save at least one record');
 this.toastr.warning("Please save at least one record");
    } else {
      for (let index in this.productList) {
        this.productList[index].warehouse = this.mrResponse.warehouse;
      }
      //   console.log("final",this.productList)
      this.request.productList = this.productList;
      this.mrResponse.purchase.status = Status.PENDING;
      this.request.purchase = this.mrResponse.purchase;
      // this.request.purchase.status='PENDING'

      console.log('request object is ', this.request);
      // let path = "/purchase/updatePurchaseWithProduct";
      // let path = "/purchase/updatePurchase";
      this.purchaseService.updatePurchaseWithProduct(this.request).subscribe(
        data => {
           this.toastr.success("Lot updated successfully");
          // let path1="/inventory/updateProduct/";
          // this.purchaseService.updateProduct(path1,this.productList)
        },
        error => {
          console.log('error is', error);
        }
      );
    }
  }

   getProductData(data) {
    this.productList.push(data);
    this.editProfile = !this.editProfile;
    console.log("productList", this.productList);
  }

}
