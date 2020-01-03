import { Component, OnInit } from "@angular/core";
import {
  IAlbum,
  IEvent,
  Lightbox,
  LIGHTBOX_EVENT,
  LightboxConfig,
  LightboxEvent
} from "ngx-lightbox";
import { Subscription } from "rxjs";
import { UserDataService } from 'src/app/shared/services/data/userData.service';
import { User } from 'src/app/shared/Models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  public activeTab: string;

  public editContact: boolean;
  public editContactIcon: string;

  public editOtherInfo: boolean;
  public editOtherInfoIcon: string;

  public albums: Array<IAlbum>;
  private subscription: Subscription;

  selectedUser : User;
  status : boolean = false;
  id: any;

  constructor(
    private lightbox: Lightbox,
    private _route : ActivatedRoute,
    private _userDataService : UserDataService,
    private _userService : UserService,
    private lightboxEvent: LightboxEvent,
    private lighboxConfig: LightboxConfig
  ) {
    this.activeTab = "home";


    this.editContact = false;
    this.editContactIcon = "icon-edit";

    this.editOtherInfo = false;
    this.editOtherInfoIcon = "icon-edit";

    this.albums = [];
    for (let i = 1; i <= 6; i++) {
      const album = {
        src: "assets/images/light-box/l" + i + ".jpg",
        caption: "Image " + i + " caption here",
        thumb: "assets/images/light-box/sl" + i + ".jpg"
      };

      this.albums.push(album);
    }
    lighboxConfig.fadeDuration = 1;
    this._route.params.subscribe(param=>{
      this.id = param['id'];
    })
    this._userDataService.items$.subscribe(data=>{
      this.selectedUser = data;
      if(!Object.keys(this.selectedUser).length){
        this.getUserById(this.id);
      } else{
        this.status = true;
      }
      console.log(this.selectedUser);
    })
  }

  ngOnInit() {}

  open(index: number): void {
    this.subscription = this.lightboxEvent.lightboxEvent$.subscribe(
      (event: IEvent) => this._onReceivedEvent(event)
    );
    this.lightbox.open(this.albums, index, {
      wrapAround: true,
      showImageNumberLabel: true
    });
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this.subscription.unsubscribe();
    }
  }

  updateUser() {
    console.log(this.selectedUser);
    this._userService.updateUser(this.selectedUser);
  }

  getUserById(id:any) {
    this._userService.getUserById(id).subscribe(res=>{
      this.selectedUser = res;
      this.status = true;
    })
  }
}
