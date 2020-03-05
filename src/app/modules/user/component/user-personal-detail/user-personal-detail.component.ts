  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/Models/user.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/Validators/custom-validator';

@Component({
  selector: 'app-user-personal-detail',
  templateUrl: './user-personal-detail.component.html',
  styleUrls: ['./user-personal-detail.component.scss']
})
export class UserPersonalDetailComponent implements OnInit {

  @Input() selectedUser : User;
  @Output() check : EventEmitter<string> = new EventEmitter<string>();

  private prsnlDetailForm : FormGroup;
  public editProfile: boolean;
  public editProfileIcon: string;

  constructor(
    private _fb : FormBuilder
  ) {
    this.editProfile = false;
    this.editProfileIcon = "icon-edit";
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if(this.selectedUser) {
      this.prsnlDetailForm = this._fb.group({
        firstName : new FormControl(this.selectedUser.firstName,[Validators.required, Validators.minLength(2)]),
        lastName : new FormControl(this.selectedUser.lastName,[Validators.required, Validators.minLength(2)]),
        userRole : new FormControl(this.selectedUser.userRole,[Validators.required]),
        mobile : new FormControl(this.selectedUser.mobile,[Validators.required, CustomValidator.contactNumberValidation]),
        email : new FormControl(this.selectedUser.email,[Validators.required, CustomValidator.emailValidation]),
      })  
    } else {
      console.log("error code");
    }    
  }

  ngAfterContentChecked(): void {
   if(this.selectedUser && this.prsnlDetailForm){
    this.selectedUser.firstName = this.prsnlDetailForm.value.firstName;
    this.selectedUser.lastName = this.prsnlDetailForm.value.lastName;
    this.selectedUser.userRole = this.prsnlDetailForm.value.userRole;
    this.selectedUser.mobile = this.prsnlDetailForm.value.mobile;
    this.selectedUser.email = this.prsnlDetailForm.value.email;
    this.check.emit(this.prsnlDetailForm.valid ? 'valid': 'invalid');
   }
  }

  // checkStatus() { 
  //   console.log(this.selectedUser);
  //   this.check.emit('valid');
  // }

  get f() {
    return this.prsnlDetailForm.controls;
  }

}
