import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/Models/user.model';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidator } from 'src/app/Validators/custom-validator';

@Component({
  selector: 'app-user-key-person',
  templateUrl: './user-key-person.component.html',
  styleUrls: ['./user-key-person.component.scss']
})
export class UserKeyPersonComponent implements OnInit {

  @Input() selectedUser : User;
  @Output() check : EventEmitter<string> = new EventEmitter<string>();

  private keyPersonDetails : FormGroup;
  data = [
    {
      editProfile : false,
      editProfileIcon : "icon-edit",
    },
    {
      editProfile : false,
      editProfileIcon : "icon-edit"
    }
  ]

  constructor(
    private _fb : FormBuilder
  ) { }

  ngOnInit() {
    if(this.selectedUser) {
      this.keyPersonDetails = this._fb.group({
        details : this._fb.array(this.addKeyPerson())
      });
      console.log(this.keyPersonDetails);
    }
  }

  addKeyPerson() : FormGroup[] {
    let tempArray : FormGroup[] = [];
    this.selectedUser.userDetail.keyPerson.forEach(element => {
        let tempForm : FormGroup;
        tempForm = this._fb.group({
          name : new FormControl(element.name,[Validators.required, Validators.minLength(3)]),
          designation : new FormControl(element.designation,[Validators.required]),
          email1 : new FormControl(element.email1,[Validators.required, CustomValidator.emailValidation]),
          mobile1 : new FormControl(element.mobile1,[Validators.required, CustomValidator.contactNumberValidation])
        });
        tempArray.push(tempForm);
    });
    return tempArray;
  }

  ngAfterContentChecked(): void {
    if(this.selectedUser && this.keyPersonDetails){
      let tempArray = this.keyPersonDetails.get('details') as FormArray;
      for (let index = 0; index < tempArray.length; index++) {
        this.selectedUser.userDetail.keyPerson[index].name = tempArray.controls[index].value.name;
        this.selectedUser.userDetail.keyPerson[index].designation = tempArray.controls[index].value.designation;
        this.selectedUser.userDetail.keyPerson[index].mobile1 = tempArray.controls[index].value.mobile1;
        this.selectedUser.userDetail.keyPerson[index].email1 = tempArray.controls[index].value.email1;
        this.check.emit(this.keyPersonDetails.valid ? 'valid': 'invalid');

      }
    }
   }

   get f(): FormArray {
		return this.keyPersonDetails.get('details') as FormArray;
	}

}
