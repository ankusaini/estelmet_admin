import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/shared/services/user.service";
import { User } from "src/app/shared/Models/user.model";
import { Purchase } from "src/app/shared/Models/purchase.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-po-email-sms',
  templateUrl: './po-email-sms.component.html',
  styleUrls: ['./po-email-sms.component.scss']
})
export class PoEmailSmsComponent implements OnInit {

  constructor(private userService: UserService,private toastrService:ToastrService) { }
  public userList: User[];
  public selectedUserList: User[] = [];
  public selectedPO:Purchase;
  ngOnInit() {
    this.getAllUserByUserRoleAndStatus('APPROVED','SUPPLIER');
  }
   selectUser(user: User) {
    const index: number = this.selectedUserList.indexOf(user);
    if (index == -1) {
      this.selectedUserList.push(user);
    } else {
      this.toastrService.warning("record already added");
    }
  }
  removeUser(user) {
    const index: number = this.selectedUserList.indexOf(user);
    if (index !== -1) {
      this.selectedUserList.splice(index, 1);
    }
  }

  getSelectedPO(data)
  {
    this.selectedPO=data;
    console.log("selected  po is",this.selectedPO);
  }

  getAllUserByUserRoleAndStatus(status,userType)
  {
    let url =
      "/users/getAllUsersByUserRoleAndStatus/" + userType + "/APPROVED";

    this.userService.getAllUserByUserRoleAndStatus(url).subscribe(
      data => {
        this.userList = data;
       
      },
      error => {}
    );
  }
}
