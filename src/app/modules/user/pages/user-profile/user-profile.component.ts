import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbum, IEvent, Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/Models/user.model';
import { UserDataService } from 'src/app/shared/services/data/userData.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ids } from 'src/app/shared/Models/ids.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public activeTab: string;
  public Ids: any;

  public editContact: boolean;
  public editContactIcon: string;

  public editOtherInfo: boolean;
  public editOtherInfoIcon: string;

  public albums: Array<IAlbum>;
  private subscription: Subscription;

  selectedUser: User;
  status = false;
  id: any;

  isPersonalValid = 'valid';
  isBusinessValid = 'valid';
  isKeyPersonValid = 'valid';
  isTradeValid = 'valid';


  constructor(
    private lightbox: Lightbox,
    private route: ActivatedRoute,
    private userDataService: UserDataService,
    private userService: UserService,
    private lightboxEvent: LightboxEvent,
    private lighboxConfig: LightboxConfig,
    private toastrService: ToastrService
  ) {
    this.Ids = ids;
    this.activeTab = 'home';


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
    this.route.params.subscribe(param => {
      this.id = Number(param.id);
    });
    this.userDataService.items$.subscribe(data => {
      this.selectedUser = data;
      if (!Object.keys(this.selectedUser).length) {
        this.getUserById(this.id);
      } else {
        this.status = true;
      }
    });
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

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this.subscription.unsubscribe();
    }
  }

  updateUser() {
    if (
      this.isPersonalValid === 'valid' &&
      this.isBusinessValid === 'valid' &&
      this.isKeyPersonValid === 'valid' &&
      this.isTradeValid === 'valid') {
      console.log(this.selectedUser);
      const path = '/users/updateUser';
      this.userService.updateUser(path,this.selectedUser).subscribe(
        data => {
          this.toastrService.success('User updated successfully!');
        }, error => {
          console.log(error);
        }
      );
    } else {
      this.toastrService.error('Please fill valid Details!');
    }
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(res => {
      this.selectedUser = res;
      this.status = true;
    });
  }

  checkPersonal(isValid) {
    this.isPersonalValid = isValid;
  }

  checkBusiness(isValid) {
    this.isBusinessValid = isValid;
  }

  checkKeyPerson(isValid) {
    this.isKeyPersonValid = isValid;
  }

  checkTrade(isValid) {
    this.isTradeValid = isValid;
  }
}
