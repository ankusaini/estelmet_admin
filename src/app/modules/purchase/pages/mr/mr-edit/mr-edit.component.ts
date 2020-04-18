import { Component, OnInit } from '@angular/core';
import { IAlbum, IEvent, Lightbox, LIGHTBOX_EVENT, LightboxConfig, LightboxEvent } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RequestP, ResponseP } from 'src/app/shared/Models/RequestResponse';
import { PurchaseService } from 'src/app/modules/purchase/services/purchase.service';
import { Product } from 'src/app/shared/Models/product.model.';
import { Status } from 'src/app/shared/Models/user.model';
@Component({
  selector: 'app-mr-edit',
  templateUrl: './mr-edit.component.html',
  styleUrls: ['./mr-edit.component.scss']
})
export class MrEditComponent implements OnInit {
  showData: boolean;
  mrId: any;
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

  constructor(
    private lightbox: Lightbox,
    private route: ActivatedRoute,
    private lightboxEvent: LightboxEvent,
    private lighboxConfig: LightboxConfig,
    private purchaseService: PurchaseService
  ) {
    this.routerSubscription = this.route.url.subscribe(params => {
      this.mrId = this.route.snapshot.params.id;

      if (this.mrId) {
        // let url = "/purchase/find/" + this.mrId;
        this.purchaseService.findPurchase(this.mrId).subscribe(
          data => {
            this.mrResponse = data;
            this.productList = data.productList;
            this.showData = true;
            console.log('response', this.mrResponse);
          },
          error => {
            console.log('error');
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

  ngOnInit() { }

  open(index: number): void {
    this.subscription = this.lightboxEvent.lightboxEvent$.subscribe(
      (event: IEvent) => this._onReceivedEvent(event)
    );
    this.lightbox.open(this.albums, index, {
      wrapAround: true,
      showImageNumberLabel: true
    });
  }

  getProductData(data) {
    this.productList.push(data);
    this.editProfile = !this.editProfile;
    console.log('productList', this.productList);
  }

  updateMr() {
    console.log('productlist', this.productList);
    if (this.productList && this.productList.length === 0) {
      alert('please save at least one record');
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
          alert('Mr Updated');
          // let path1="/inventory/updateProduct/";
          // this.purchaseService.updateProduct(path1,this.productList)
        },
        error => {
          console.log('error is', error);
        }
      );
    }
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this.subscription.unsubscribe();
    }
  }
}
