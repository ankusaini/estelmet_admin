import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User, UserDetail } from 'src/app/shared/Models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';
import { ids } from 'src/app/shared/Models/ids.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-approval',
  templateUrl: './user-approval.component.html',
  styleUrls: ['./user-approval.component.css']
})
export class UserApprovalComponent implements OnInit {
  selectedTab = 'PENDING';
  public Ids: any;

  public pendingUserList: User[];
  public approvedUserList: User[];
  public rejectedUserList: User[];
  public selectedRole: any;

  public selectedUserList: User[] = [];
  public limit=15;
  public offset=1;

  constructor(private userService: UserService,
    private router: Router,
    private toastrService: ToastrService) {
      this.Ids = ids;
    this.basicSwal();
  }

  basicSwal() {
    Swal.fire({
      title: 'Select User Type',
      input: 'select',
      inputOptions: {
        CUSTOMER: 'Customer',
        SUPPLIER: 'Supplier ',
        AGENT: 'Agent ',
        CONTRACTOR: 'Contractor ',
        TRANSPORTER: 'Transporter '
      },
      inputPlaceholder: 'Select User Type',
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Search',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select user type');
          }
        });
      }
    }).then(selectedRole => {
      if (selectedRole.value) {
        this.selectedRole = selectedRole.value;
        this.getPendingUserList(selectedRole.value);
        this.getApprovedUserList(selectedRole.value);
        this.getRejectedUserList(selectedRole.value);
      } else if(selectedRole.dismiss === Swal.DismissReason.cancel){
        console.log("dismiss Called");
        this.router.navigate(['/dashboard/default']);
      }
    });
  }

  ngOnInit() { }

  getPendingUserList(selectedRole) {

    this.userService.getAllUserByUserRoleAndStatus(selectedRole,'PENDING',this.limit,this.offset).subscribe(
      data => {
        this.pendingUserList = data;
        console.log(this.pendingUserList);
      },
      error => {
        console.log(error);
      }
    );
  }

  getApprovedUserList(selectedRole) {
   
    this.userService.getAllUserByUserRoleAndStatus(selectedRole,'APPROVED',this.limit,this.offset).subscribe(
      data => {
        this.approvedUserList = data;
        console.log(this.approvedUserList);
      },
      error => {
        console.log(error);
      }
    );
  }

  getRejectedUserList(selectedRole) {

    this.userService.getAllUserByUserRoleAndStatus(selectedRole,'REJECTED',this.limit,this.offset).subscribe(
      data => {
        this.rejectedUserList = data;
        console.log('user group list', this.rejectedUserList);
      },
      error => {
        console.log(error);
      }
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

    this.selectedUserList = [];
  }

  selectUser(user: User) {
    const index: number = this.selectedUserList.indexOf(user);
    if (index === -1) {
      this.selectedUserList.push(user);
    } else {
      this.toastrService.warning('Product already added!');
    }
  }

  changeStatusOfSelectedUser(status) {
    if (this.selectedUserList.length === 0) {
      this.toastrService.warning('Select at least one product!');
    } else {
      const path = '/users/updateUser';
      // let idList = this.selectedUserList.map(user => {
      //   return user.userDetialId;
      // });
      // const ids = idList.toString();
      // console.log(idList);
      // console.log(idList.toString());

      // let path = "/users/updateUser?userDetailIds=" + ids + "&status=" + status;


      for (let i = 0; i < this.selectedUserList.length; i++) {
        this.selectedUserList[i].status = status;

        this.userService.updateUser(path, this.selectedUserList[i]).subscribe(
          // this.userService.updateUser(path).subscribe(
          data => {
            this.toastrService.success('Selected User(s) status changes successfully!');
            this.pendingUserList = undefined;
            this.approvedUserList = undefined;
            this.rejectedUserList = undefined;
            this.selectedUserList = [];
            this.getPendingUserList(this.selectedRole);
            this.getApprovedUserList(this.selectedRole);
            this.getRejectedUserList(this.selectedRole);

            // page refresh here
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }

  removeUser(user: UserDetail) {
    let index = this.selectedUserList.indexOf(user);
    this.selectedUserList.splice(index, 1);
  }
}
