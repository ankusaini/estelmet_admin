import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/Models/user.model';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-key-person',
  templateUrl: './user-key-person.component.html',
  styleUrls: ['./user-key-person.component.scss']
})
export class UserKeyPersonComponent implements OnInit {

  @Input() selectedUser : User;
  private keyPersonDetails : FormGroup;

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
          name : new FormControl(element.name,[Validators.required]),
          designation : new FormControl(element.designation,[Validators.required]),
          email1 : new FormControl(element.email1,[Validators.required]),
          mobile1 : new FormControl(element.email1,[Validators.required])
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
      }
    }
   }

}