import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserGroup } from 'src/app/shared/Models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';
import { ids } from 'src/app/shared/Models/ids.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-group-approval',
  templateUrl: './group-approval.component.html',
  styleUrls: ['./group-approval.component.scss']
})
export class GroupApprovalComponent implements OnInit {
  selectedTab = 'PENDING';
  selectedUserType: any;
  public pendingUserGroupList: UserGroup[];
  public approvedUserGroupList: UserGroup[];
  public rejectedUserGroupList: UserGroup[];
  public Ids: any;
  // public selectedRole: string ='';
  public selectedUserGroupList: UserGroup[] = [];

  constructor(private userService: UserService,
    private router: Router,
     private toastrService: ToastrService) {
    this.basicSwal();
    this.Ids = ids;
  }

  basicSwal() {
    Swal.fire({
      title: 'Select Group Type',
      input: 'select',
      inputOptions: {
        CUSTOMER: 'Customer Group',
        SUPPLIER: 'Supplier Group',
        AGENT: 'Agent Group',
        CONTRACTOR: 'Contractor Group',
        TRANSPORTER: 'Transporter Group'
      },
      inputPlaceholder: 'Select Group Type',
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Search',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function(resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select user group type');
          }
        });
      }
    }).then(selectedRole => {
      if (selectedRole.value) {
        this.selectedUserType = selectedRole.value;
        this.getPendingUserGroupList(selectedRole.value);
        this.getApprovedUserGroupList(selectedRole.value);
        this.getRejectedUserGroupList(selectedRole.value);
      } else if(selectedRole.dismiss === Swal.DismissReason.cancel){
        console.log("dismiss Called");
        this.router.navigate(['/dashboard/default']);
      }
    });
  }

  ngOnInit() { }

  getPendingUserGroupList(selectedRole) {
    const url =
      '/users/group/getAllUserGroupByUserRoleAndStatus?userRole=' + selectedRole + '&status=PENDING&limit=10&offset=1';

    this.userService.getAllUserByUserGroupRoleAndStatus(url).subscribe(
      data => {
        this.pendingUserGroupList = data;
      },
      error => { }
    );
  }

  getApprovedUserGroupList(selectedRole) {
    const url =
      '/users/group/getAllUserGroupByUserRoleAndStatus?userRole=' + selectedRole + '&status=APPROVED&limit=10&offset=1';

    this.userService.getAllUserByUserGroupRoleAndStatus(url).subscribe(
      data => {
        this.approvedUserGroupList = data;
      },
      error => { }
    );
  }

  getRejectedUserGroupList(selectedRole) {
    const url =
      '/users/group/getAllUserGroupByUserRoleAndStatus?userRole=' + selectedRole + '&status=REJECTED&limit=10&offset=1';

    this.userService.getAllUserByUserGroupRoleAndStatus(url).subscribe(
      data => {
        this.rejectedUserGroupList = data;
        console.log('user group list', this.rejectedUserGroupList);
      },
      error => { }
    );
  }
  onTabChange(tab) {
    if (tab && tab.nextId === 'rejectedTab') {
      this.selectedTab = 'REJECTED';
    }
    if (tab && tab.nextId === 'pendingTab') {
      this.selectedTab = 'PENDING';
    }
    if (tab && tab.nextId === 'approvedTab') {
      this.selectedTab = 'APPROVED';
    }
    this.selectedUserGroupList = [];
  }

  selectUser(userGroup: UserGroup) {
    const index: number = this.selectedUserGroupList.indexOf(userGroup);
    if (index === -1) {
      this.selectedUserGroupList.push(userGroup);
    } else {
      this.toastrService.warning('Product already added!');
    }
  }

  removeUserGroup(user) {
    const index: number = this.selectedUserGroupList.indexOf(user);
    if (index !== -1) {
      this.selectedUserGroupList.splice(index, 1);
    }
  }



  changeStatusOfSelectedGroup(status) {
    if (this.selectedUserGroupList.length === 0) {
      this.toastrService.warning('Select at least one product!');
    } else {
      const path = '/users/group/updateUserInGroup';
      console.log('path', path);
      for (let i = 0; i < this.selectedUserGroupList.length; i++) {
        this.selectedUserGroupList[i].status = status;

        // let idList = this.selectedUserGroupList.map(user => {
        //   return user.userGroupId;
        // });
        // // let idList = [1, 2, 3];
        // const ids = idList.toString();
        // console.log(idList);
        // console.log(idList.toString());

        // let path = "/users/group/updateStatusInGroup?userGroupIds=" + ids + "&status=" + status;



        this.userService
          .updateUserGroup(path, this.selectedUserGroupList[i])
          .subscribe(
            data => {
              console.log('user group created', data);
              this.toastrService.success('Selected User(s) status changes successfully!');
              this.selectedUserGroupList = [];
              this.getPendingUserGroupList(this.selectedUserType);
              this.getApprovedUserGroupList(this.selectedUserType);
              this.getRejectedUserGroupList(this.selectedUserType);
              console.log(this.selectedUserType);

            },
            error => {
              console.log(error);
            }
          );

      }
    }
  }
}
