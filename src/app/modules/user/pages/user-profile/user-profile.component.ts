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

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  public activeTab: string;

  public editProfile: boolean;
  public editProfileIcon: string;

  public editContact: boolean;
  public editContactIcon: string;

  public editOtherInfo: boolean;
  public editOtherInfoIcon: string;

  public albums: Array<IAlbum>;
  private subscription: Subscription;

  selectedUser : User;

  constructor(
    private lightbox: Lightbox,
    private _userService : UserDataService,
    private lightboxEvent: LightboxEvent,
    private lighboxConfig: LightboxConfig
  ) {
    this.activeTab = "home";

    this.editProfile = false;
    this.editProfileIcon = "icon-edit";

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

    this._userService.items$.subscribe(data=>{
      this.selectedUser = data;
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

  print(events) {
    console.log(events);
    console.log(this.selectedUser);
  }
}
