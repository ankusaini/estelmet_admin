import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
import { UserService } from "src/app/shared/services/user.service";
import { User, UserGroup } from "src/app/shared/Models/user.model";
import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs";
@Component({
  selector: "app-group-approval",
  templateUrl: "./group-approval.component.html",
  styleUrls: ["./group-approval.component.scss"]
})
export class GroupApprovalComponent implements OnInit {
  selectedTab: string='PENDING';

  public pendingUserGroupList: UserGroup[] = [];
  public approvedUserGroupList: UserGroup[] = [];
  public rejectedUserGroupList: UserGroup[] = [];

  public selectedUserGroupList:UserGroup[]=[];

  constructor(private userService: UserService) {
    this.basicSwal();
  }

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
        this.getPendingUserGroupList(selectedRole.value);
        this.getApprovedUserGroupList(selectedRole.value);
        this.getRejectedUserGroupList(selectedRole.value);
      }
    });
  }

  ngOnInit() {}

  getPendingUserGroupList(selectedRole) {
    let url =
      "/users/group/getAllUserGroupByUserRoleAndStatus/" +
      selectedRole +
      "/PENDING";

    this.userService.getAllUserByUserGroupRoleAndStatus(url).subscribe(
      data => {
        this.pendingUserGroupList = data;
      },
      error => {}
    );
  }

  getApprovedUserGroupList(selectedRole) {
    let url =
      "/users/group/getAllUserGroupByUserRoleAndStatus/" +
      selectedRole +
      "/APPROVED";

    this.userService.getAllUserByUserGroupRoleAndStatus(url).subscribe(
      data => {
        this.approvedUserGroupList = data;
      },
      error => {}
    );
  }

  getRejectedUserGroupList(selectedRole) {
    let url =
      "/users/group/getAllUserGroupByUserRoleAndStatus/" +
      selectedRole +
      "/REJECTED";

    this.userService.getAllUserByUserGroupRoleAndStatus(url).subscribe(
      data => {
        this.rejectedUserGroupList = data;
        console.log("user group list", this.rejectedUserGroupList);
      },
      error => {}
    );
  }
  onTabChange(tab) {
    if (tab && tab.activeId == "rejectedTab") {
      this.selectedTab = "PENDING";
    }
    if (tab && tab.activeId == "pendingTab") {
      this.selectedTab = "APPROVED";
    }
     if (tab && tab.activeId == "approvedTab") {
      this.selectedTab = "REJECTED";
    }
  }

    selectUser(userGroup:UserGroup)
  {
     const index: number = this.selectedUserGroupList.indexOf(userGroup);
    if (index == -1) {
    this.selectedUserGroupList.push(userGroup);
    }
  else{
    alert("already added");
  }

  }

  changeStatusOfSelectedGroup(status)
  {
    if(this.selectedUserGroupList.length==0)
      {
        alert("select at least one");
      }
      else
        {
          
        }
  }
}
 