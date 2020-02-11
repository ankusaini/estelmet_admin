import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import Swal from "sweetalert2";
import { DataTableDirective } from "angular-datatables";
import { UserService } from "src/app/shared/services/user.service";
import { User, UserGroup } from "src/app/shared/Models/user.model";
import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: "app-user-approval",
  templateUrl: "./user-approval.component.html",
  styleUrls: ["./user-approval.component.css"]
})
export class UserApprovalComponent implements OnInit {
  selectedTab: string = "PENDING";

  public pendingUserList: UserGroup[];
  public approvedUserList: UserGroup[];
  public rejectedUserList: UserGroup[];

  public selectedUserList: UserGroup[] = [];

  constructor(private userService: UserService,    
              private toastrService: ToastrService) {
    this.basicSwal();
  }

  basicSwal() {
    Swal.fire({
      title: "Select User Type",
      input: "select",
      inputOptions: {
        CUSTOMER: "Customer",
        SUPPLIER: "Supplier ",
        AGENT: "Agent ",
        CONTRACTOR: "Contractor ",
        TRANSPORTER: "Transporter "
      },
      inputPlaceholder: "Select User Type",
      allowOutsideClick: false,
      confirmButtonText: "Search",
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function(resolve, reject) {
          if (value !== "") {
            resolve();
          } else {
            resolve("You need to select user type");
          }
        });
      }
    }).then(selectedRole => {
      if (selectedRole != "") {
        this.getPendingUserList(selectedRole.value);
        this.getApprovedUserList(selectedRole.value);
        this.getRejectedUserList(selectedRole.value);
      }
    });
  }

  ngOnInit() {}

  getPendingUserList(selectedRole) {
    let url =
      "/users/getAllUsersByUserRoleAndStatus/" + selectedRole + "/PENDING";

    this.userService.getAllUserByUserRoleAndStatus(url).subscribe(
      data => {
        this.pendingUserList = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getApprovedUserList(selectedRole) {
    let url =
      "/users/getAllUsersByUserRoleAndStatus/" + selectedRole + "/APPROVED";

    this.userService.getAllUserByUserRoleAndStatus(url).subscribe(
      data => {
        this.approvedUserList = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getRejectedUserList(selectedRole) {
    let url =
      "/users/getAllUsersByUserRoleAndStatus/" + selectedRole + "/REJECTED";

    this.userService.getAllUserByUserRoleAndStatus(url).subscribe(
      data => {
        this.rejectedUserList = data;
        console.log("user group list", this.rejectedUserList);
      },
      error => {
        console.log(error);
      }
    );
  }
  onTabChange(tab) {
    console.log("tab ", tab);
   if (tab && tab.nextId == "rejectedTab") {
      this.selectedTab = "REJECTED";
    }
    if (tab && tab.nextId == "pendingTab") {
      this.selectedTab = "PENDING";
    }
    if (tab && tab.nextId == "approvedTab") {
      this.selectedTab = "APPROVED";
    }
    console.log("selecyed tab", this.selectedTab);
    this.selectedUserList = [];
  }

  selectUser(userGroup: UserGroup) {
    const index: number = this.selectedUserList.indexOf(userGroup);
    if (index == -1) {
      this.selectedUserList.push(userGroup);
    } else {
      this.toastrService.info("already added!");
    }
  }

  changeStatusOfSelectedUser(status) {
    if (this.selectedUserList.length == 0) {
      this.toastrService.warning("select at least one!");
    } else {
      let path = "/users/updateUser";

      for (let i = 0; i < this.selectedUserList.length; i++) {
        this.selectedUserList[i].status = status;

        this.userService.updateUser(path,this.selectedUserList[i]).subscribe(
          data => {
            
             this.selectedUserList = [];
             //page refresh here
          },
          error => {}
        );
      }
      this.toastrService.success("Selected User(s) status changes successfully!")
    }
  }
}
