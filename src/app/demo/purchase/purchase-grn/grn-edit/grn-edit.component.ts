import { Component, OnInit } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig, LightboxEvent } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-grn-edit',
  templateUrl: './grn-edit.component.html',
  styleUrls: ['./grn-edit.component.css']
})
export class GrnEditComponent implements OnInit {
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

  constructor(private lightbox: Lightbox, private lightboxEvent: LightboxEvent, private lighboxConfig: LightboxConfig) {
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
  }
}
