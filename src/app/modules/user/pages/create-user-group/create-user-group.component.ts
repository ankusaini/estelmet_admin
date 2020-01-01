import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: 'app-create-user-group',
  templateUrl: './create-user-group.component.html',
  styleUrls: ['./create-user-group.component.scss']
})
export class CreateUserGroupComponent implements OnInit {

  public selectedUserType:any;
  constructor(public userService:UserService) { }
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
        console.log("path",path)
        this.userService.createUserGroup(path,this.userGroupForm.value).subscribe(data=>{
            console.log("user group created",data)
        },error=>{

        })
      }

      onStep1Next(event)
      {
        console.log("event is ",event);
      }
}
