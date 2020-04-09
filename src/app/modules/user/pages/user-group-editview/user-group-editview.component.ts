import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAlbum, Lightbox, LightboxConfig, LightboxEvent } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
import { User, UserGroup } from 'src/app/shared/Models/user.model';
import { UserDataService } from 'src/app/shared/services/data/userData.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ids } from 'src/app/shared/Models/ids.model';
@Component({
  selector: 'app-user-group-editview',
  templateUrl: './user-group-editview.component.html',
  styleUrls: ['./user-group-editview.component.scss']
})
export class UserGroupEditviewComponent implements OnInit {
  groupId: any;
  public selectedUserGroup: UserGroup;
  public doNotShowBack: any = 'doNotShowBack';
  public selectedUserType: any;
  public userGroupList: User[];

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
  public Ids: any;  

  constructor(
    private lightbox: Lightbox,
    private lightboxEvent: LightboxEvent,
    private lighboxConfig: LightboxConfig,
    private route: ActivatedRoute,
    private userDataService: UserDataService,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.Ids = ids;
    this.routerSubscription = this.route.url.subscribe(params => {
      this.groupId = this.route.snapshot.params.groupId;
      if (this.groupId) {
        const url = '/users/group/find?userGroupId=' + this.groupId;
        this.userService.findUserGroupById(url).subscribe(
          data => {
            this.selectedUserGroup = data;
            this.userGroupList = data.user;
          },
          error => {
            console.log('error');
          }
        );
      }
    });
    // /users/group/find/12
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
  ngOnDestroy() {
    try {
      this.routerSubscription.unsubscribe();
    } catch (e) {
      console.log(e);
    }
  }

  getUserType() {
    if (this.selectedUserGroup) {
      this.selectedUserType = this.selectedUserGroup.userRole;
      this.userDataService.addGroup(this.selectedUserGroup).subscribe(() => {
        this.editProfile = !this.editProfile;
      });
    }
  }

  goToView(user: User) {
    this.userDataService.add(user).subscribe(() => {
      // this.router.navigateByUrl('/users/find?userId='+ user.id);
      this.router.navigate(['/users/profile', user.userDetialId]);
    });
  }

  updateGroup(data) {
    console.log(data);
    this.selectedUserGroup.user = [];
    this.selectedUserGroup.user = data;
    const path = '/users/group/createUserGroup';
    console.log('path', path);
    this.userService.createUserGroup(path, this.selectedUserGroup).subscribe(data => {
      console.log('user group created', data);
      this.toastr.success("User updated successfully!");
      this.router.navigate(['/users/editGroup', this.selectedUserGroup.userGroupId]);
    }, error => {

    });
    console.log(this.selectedUserGroup.user);
  }
}
