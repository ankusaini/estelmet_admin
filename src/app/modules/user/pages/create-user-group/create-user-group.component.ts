import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { UserService } from "src/app/shared/services/user.service";
import { Router } from '@angular/router';
import { WizardComponent } from 'ng2-archwizard/dist';

@Component({
  selector: 'app-create-user-group',
  templateUrl: './create-user-group.component.html',
  styleUrls: ['./create-user-group.component.scss']
})
export class CreateUserGroupComponent implements OnInit {
  @ViewChild("wizard", { static: true }) wizard: WizardComponent;

  public selectedUserType:any;
  constructor(public userService:UserService,public router:Router) { }
  public firstFormData:any;
  public secondFormData:any;
  public userArray: FormArray;
  public showSecondWizard:boolean=false;
 public userGroupForm = new FormGroup({
    userGroupId: new FormControl("" ),
    userRole: new FormControl(""),
    status: new FormControl("APPROVED"),
    userGroupName: new FormControl(""),
    productType: new FormControl(""),
    productCategory: new FormControl(""),
    minThickness: new FormControl(""),
    maxThickness: new FormControl(""),
    minWidth: new FormControl(""),
    maxWidth: new FormControl(""),
    minTemper: new FormControl(""),
    maxTemper: new FormControl(""),
    userGroupNoOfUser: new FormControl(""),
    userGroupDate: new FormControl(""),
    alias: new FormControl(""),
    createdDate: new FormControl(""),
    user:new FormArray([])
  });

  initialiseFormGroup() : FormGroup
  {
    return new FormGroup({
      id:new FormControl('')
    })
  }
  ngOnInit() {
  }

  getGroupIdData(data)
  {
    this.showSecondWizard=true;
    this.firstFormData=data;
    this.selectedUserType=data.userRole;
    this.userGroupForm.patchValue(data);
    this.wizard.navigation.goToNextStep();

    
  }
      getSelectedUser(selectedUser)
      {
        this.userArray = this.userGroupForm.get('user') as FormArray;
        this.secondFormData=selectedUser;
        selectedUser.forEach(element => {
          this.userArray.push(new FormGroup({
            id:new FormControl(element.id)
          }));

        });
        let path="/users/group/createUserGroup";
        console.log("path",path);
        this.userService.createUserGroup(path,this.userGroupForm.value).subscribe(data=>{
            console.log("user group created",data)
            this.router.navigate(['/users/editGroup',data.userGroupId]);
        },error=>{

        });
        
      }

      onStep1Next(event)
      {
        console.log("event is ",event);
      }
}
