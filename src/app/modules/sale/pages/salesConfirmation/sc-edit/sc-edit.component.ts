import { Component, OnInit } from '@angular/core';
import {IAlbum, Lightbox, LightboxConfig, LightboxEvent} from 'ngx-lightbox';
import {Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SalesServiceService } from '../../../services/sales-service.service';
import { ResponseP } from 'src/app/shared/Models/RequestResponse';

@Component({
  selector: 'app-sc-edit',
  templateUrl: './sc-edit.component.html',
  styleUrls: ['./sc-edit.component.scss']
})
export class ScEditComponent implements OnInit {
  routerSubscription: any;
  public scId: any;
  public response: ResponseP;


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
              private salesService: SalesServiceService
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
    this.routerSubscription = this.route.url.subscribe(
      params => {
        this.scId = this.route.snapshot.params.id;


        let url = "/sales/find/" + this.scId;
        this.salesService.findRequstObjectById(url).subscribe(
          data => {
            this.response = data;
            console.log(this.response);
          }, error => {
            console.log(error);
          }
        )


      }
    )
  }

}
