import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { User } from "src/app/shared/Models/user.model";
import { UserDataService } from 'src/app/shared/services/data/userData.service';

@Component({
  selector: "app-user-selection",
  templateUrl: "./user-selection.component.html",
  styleUrls: ["./user-selection.component.scss"]
})
export class UserSelectionComponent implements OnInit {
  public userList: User[];
  public selectedUserList: User[] = [];
  @Output() userData: EventEmitter<any> = new EventEmitter<any>();
  @Input() doNotShowBack: any;
  
  public selectedType : string;


  constructor(
    private userService: UserService,
    private userDataService : UserDataService
  ) {
    this.userDataService.userRoleData$.subscribe(data=>{
      this.selectedType = data;
      console.log(this.selectedType);
      if(this.selectedType != ""){
        this.getAllUserByUserRoleAndStatus(this.selectedType);
        this.selectedUserList = [];
      }
    });
  }

  ngOnInit() {
    console.log("doNotShowBack", this.doNotShowBack);
    console.log("in user slect", this.selectedType);
  }

  getAllUserByUserRoleAndStatus(selectedUserType) {
    let url =
      "/users/getAllUsersByUserRoleAndStatus/" + selectedUserType + "/APPROVED";

    this.userService.getAllUserByUserRoleAndStatus(url).subscribe(
      data => {
        this.userList = data;
        console.log("userlist", this.userList);
      },
      error => {}
    );
  }

  selectUser(user: User) {
    const index: number = this.selectedUserList.indexOf(user);
    if (index == -1) {
      this.selectedUserList.push(user);
    } else {
      alert("already added");
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
      alert("please ssleect any user");
    } else {
      this.userData.emit(this.selectedUserList);
    }
  }
}
