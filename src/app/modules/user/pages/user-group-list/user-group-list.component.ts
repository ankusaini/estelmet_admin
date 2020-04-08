import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserGroup } from 'src/app/shared/Models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-group-list',
  templateUrl: './user-group-list.component.html',
  styleUrls: ['./user-group-list.component.scss']
})
export class UserGroupListComponent implements OnInit {
  // /users/group//users/group/getAllUserGroupByUserRoleAndStatus/CUSTOMER/APPROVED+/CUSTOMER/APPROVED
  constructor(
    private userService: UserService,
    private router: Router,
    private toastrService: ToastrService) {
    this.basicSwal();
  }
  public userGroupList: any[] = [];
  public selectedUserGroupList: UserGroup[] = [];

  ngOnInit() { }
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
      if (selectedRole !== '') {
        console.log('selected role', selectedRole);
        const url =
          '/users/group/getAllUserGroupByUserRoleAndStatus?userRole=' +
          selectedRole.value +
          '&status=APPROVED&limit=10&offset=1';

        this.userService.getAllUserByUserGroupRoleAndStatus(url).subscribe(
          data => {
            this.userGroupList = data;
            console.log('user group list', this.userGroupList);
          },
          error => { }
        );
      }
    });
  }

  addUserGroup(userGroup: UserGroup) {
    const index: number = this.selectedUserGroupList.indexOf(userGroup);
    if (index === -1) {
      this.selectedUserGroupList.push(userGroup);
    } else {
      // alert("already added");
      this.toastrService.info('Product already added!');
    }
  }
  removeSelectedUserd(userGroup: UserGroup) {
    const index: number = this.selectedUserGroupList.indexOf(userGroup);
    if (index !== -1) {
      this.selectedUserGroupList.splice(index, 1);
    }
  }

  navigateToEditView(userGroupId) {
    // this.router.navigate(['/users/profile',user.id]);
    const url = '/users/editGroup/' + userGroupId;
    this.router.navigateByUrl(url);
  }
}
