import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import Swal from "sweetalert2";
import { DataTableDirective } from "angular-datatables";
import { UserService } from "src/app/shared/services/user.service";
import { User, UserGroup } from "src/app/shared/Models/user.model";
import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-group-list",
  templateUrl: "./user-group-list.component.html",
  styleUrls: ["./user-group-list.component.scss"]
})
export class UserGroupListComponent implements OnInit {
  // /users/group//users/group/getAllUserGroupByUserRoleAndStatus/CUSTOMER/APPROVED+/CUSTOMER/APPROVED
  constructor(private userService: UserService, public router: Router) {
    this.basicSwal();
  }
  public userGroupList: any;
  public selectedUserGroupList: UserGroup[] = [];

  ngOnInit() {}
  basicSwal() {
    Swal.fire({
      title: "Select Group Type",
      input: "select",
      inputOptions: {
        CUSTOMER: "Customer Group",
        SUPPLIER: "Supplier Group",
        AGENT: "Agent Group",
        CONTRACTOR: "Contractor Group",
        TRANSPORTER: "Transporter Group"
      },
      inputPlaceholder: "Select Group Type",
      allowOutsideClick: false,
      confirmButtonText: "Search",
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function(resolve, reject) {
          if (value !== "") {
            resolve();
          } else {
            resolve("You need to select user group type");
          }
        });
      }
    }).then(selectedRole => {
      if (selectedRole != "") {
        console.log("selected role", selectedRole);
        let url =
          "/users/group/getAllUserGroupByUserRoleAndStatus/" +
          selectedRole.value +
          "/APPROVED";

        this.userService.getAllUserByUserGroupRoleAndStatus(url).subscribe(
          data => {
            this.userGroupList = data;
            console.log("user group list", this.userGroupList);
          },
          error => {}
        );
      }
    });
  }

  addUserGroup(userGroup: UserGroup) {
    const index: number = this.selectedUserGroupList.indexOf(userGroup);
    if (index == -1) {
      this.selectedUserGroupList.push(userGroup);
    } else {
      alert("already added");
    }
  }
  removeSelectedUserd(userGroup: UserGroup) {
    const index: number = this.selectedUserGroupList.indexOf(userGroup);
    if (index !== -1) {
      this.selectedUserGroupList.splice(index, 1);
    }
  }

  navigateToEditView(userGroupId) {
    let url = "users/editGroup/" + userGroupId;
    this.router.navigateByUrl(url);
  }
}
