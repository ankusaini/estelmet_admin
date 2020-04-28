import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserGroup, Status } from 'src/app/shared/Models/user.model';
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
  limit = 10;
  offset = 1;
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
      width:'300px',
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

    this.userService.getAllUserByUserGroupRoleAndStatus(selectedRole, Status.PENDING, this.limit, this.offset ).subscribe(
      data => {
        this.pendingUserGroupList = data;
      },
      error => { }
    );
  }

  getApprovedUserGroupList(selectedRole) {
      this.userService.getAllUserByUserGroupRoleAndStatus(selectedRole, Status.APPROVED, this.limit, this.offset ).subscribe(
      data => {
        this.approvedUserGroupList = data;
      },
      error => { }
    );
  }

  getRejectedUserGroupList(selectedRole) {
      this.userService.getAllUserByUserGroupRoleAndStatus(selectedRole, Status.REJECTED, this.limit, this.offset ).subscribe(
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
          .updateUserGroup( this.selectedUserGroupList[i])
          .subscribe(
            data => {
              console.log('user group created', data);
              this.toastrService.success('Selected User(s) status changes successfully!');
             
              console.log(this.selectedUserType);

            },
            error => {
              console.log(error);
            }
          );

      }
         this.selectedUserGroupList = [];
              this.rejectedUserGroupList=undefined;
              this.pendingUserGroupList=undefined;
              this.approvedUserGroupList=undefined;
              this.getPendingUserGroupList(this.selectedUserType);
              this.getApprovedUserGroupList(this.selectedUserType);
              this.getRejectedUserGroupList(this.selectedUserType);
    }
  }

  navigateToEditView(userGroup) {
    this.router.navigate(['/users/editGroup',userGroup.userGroupId]);
    // const url = '/users/editGroup/' + userGroupId;
    // this.router.navigateByUrl(url);
  }
}
