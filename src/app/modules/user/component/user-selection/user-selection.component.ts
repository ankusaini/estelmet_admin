import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { User, UserGroup } from "src/app/shared/Models/user.model";
import { UserDataService } from 'src/app/shared/services/data/userData.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-user-selection",
  templateUrl: "./user-selection.component.html",
  styleUrls: ["./user-selection.component.scss"],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class UserSelectionComponent implements OnInit {
  public userList2: User[];
  public selectedUserList: User[] = [];
  @Output() userData: EventEmitter<any> = new EventEmitter<any>();
  @Input() doNotShowBack: any;
  @Input() selectedUserType :string;
  // @Input() selectedUserGroup : UserGroup;
  public limit=15;
  public offset=1;
  public selectedType : string;


  constructor(
    private userService: UserService,
    private userDataService : UserDataService,
    private _cd : ChangeDetectorRef,
    private toastService: ToastrService,
  ) {
    this.userDataService.userRoleData$.subscribe(data=>{
      this.selectedType = data;
      console.log(this.selectedType);
      if(this.selectedType != ""){
        this.getAllUserByUserRoleAndStatus(this.selectedType);
        this.selectedUserList = [];
      }
    });
    this.userDataService.group$.subscribe(data=>{
      console.log(data);
      this.selectedUserList = data.user;
      this.getAllUserByUserRoleAndStatus(data.userRole);
    })
  }

  ngOnInit() {
    console.log("doNotShowBack", this.doNotShowBack);
    console.log("in user slect", this.selectedType);
  }

  getAllUserByUserRoleAndStatus(selectedUserType) {

    this.userService.getAllUserByUserRoleAndStatus(selectedUserType,'APPROVED',this.limit,this.offset).subscribe(
      data => {
        this.userList2 = data;
        console.log("userlist", this.userList2);
        this._cd.detectChanges();
      },
      error => {
        console.log(error);
      }
    );
  }

  selectUser(user: User) {
    const index: number = this.selectedUserList.indexOf(user);
    if (index == -1) {
      this.selectedUserList.push(user);
    } else {
      this.toastService.warning("Product already added!");
    }
  }
  removeUser(user) {
    const index: number = this.selectedUserList.indexOf(user);
    if (index !== -1) {
      this.selectedUserList.splice(index, 1);
    }
  }

  userSelectionSubmit() {
    if (this.selectedUserList.length == 0) {
      this.toastService.warning("Please select any user!");
    } else {
      this.userData.emit(this.selectedUserList);
    }
  }
}
