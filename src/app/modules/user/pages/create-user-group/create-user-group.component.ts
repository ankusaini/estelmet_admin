import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WizardComponent } from 'ng2-archwizard/dist';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-user-group',
  templateUrl: './create-user-group.component.html',
  styleUrls: ['./create-user-group.component.scss']
})
export class CreateUserGroupComponent implements OnInit {
  @ViewChild('wizard', { static: true }) wizard: WizardComponent;

  public selectedUserType: any;
  constructor(public userService: UserService, public router: Router) { }
  public firstFormData: any;
  public secondFormData: any;
  public userArray: FormArray;
  public showSecondWizard = false;
  public userGroupForm = new FormGroup({
    userGroupId: new FormControl(''),
    userRole: new FormControl(''),
    status: new FormControl('APPROVED'),
    userGroupName: new FormControl(''),
    productType: new FormControl(''),
    productCategory: new FormControl(''),
    thicknessMin: new FormControl(''),
    thicknessMax: new FormControl(''),
    widthMin: new FormControl(''),
    widthMax: new FormControl(''),
    temperMin: new FormControl(''),
    temperMax: new FormControl(''),
    userGroupNoOfUser: new FormControl(''),
    userGroupDate: new FormControl(''),
    alias: new FormControl(''),
    createdDate: new FormControl(''),
  });

  //   export interface UserGroup {
  //     userGroupId?: string;
  //     user?: UserDetail[];
  //     userRole?: UserRole;
  //     status?: Status;
  //     userGroupName?: string;
  //     productType?: string;
  //     productCategory?: string;
  //     thicknessMin?: string;
  //     thicknessMax?: string;
  //     widthMin?: string;
  //     widthMax?: string;
  //     temperMin?: string;
  //     temperMax?: string;
  //     userGroupNoOfUser?: string;
  //     userGroupDate?: string;
  //     alias?: string;
  //     createdDate?: string;
  // }

  initialiseFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl('')
    });
  }
  ngOnInit() {
  }

  getGroupIdData(data) {
    this.showSecondWizard = true;
    this.firstFormData = data;
    this.selectedUserType = data.userRole;
    this.userGroupForm.patchValue(data);
    this.wizard.navigation.goToNextStep();


  }
  getSelectedUser(selectedUser) {
    this.userArray = this.userGroupForm.get('user') as FormArray;
    this.secondFormData = selectedUser;
    this.userGroupForm.value.user = [];
    selectedUser.forEach(element => {
      // this.userArray.push(new FormGroup({
      //   id:new FormControl(element.userDetialId)
      // }));
      this.userGroupForm.value.user.push(element);

    });
    this.userService.createUserGroup(this.userGroupForm.value).subscribe(data => {
      console.log('user group created', data);
      this.router.navigate(['/users/editGroup', data.userGroupId]);
    }, error => {
    });

  }

  onStep1Next(event) {
    console.log('event is ', event);
  }
}
