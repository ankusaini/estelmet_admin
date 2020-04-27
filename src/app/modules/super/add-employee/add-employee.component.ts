import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/authgaurd/user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public employeeForm: FormGroup = new FormGroup({
    userId: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    emailId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required])
  });
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  employeeOnSubmit() {
    if (this.employeeForm.valid) {
      // this.userService.signupEmployee(this.employeeForm.value).subscribe();
      console.log(this.employeeForm.value);
    }
  }
}
