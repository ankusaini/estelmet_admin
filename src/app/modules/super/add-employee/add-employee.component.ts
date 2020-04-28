import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/authgaurd/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public mask = [/\d/, /\d/,  '/', /\d/, /\d/, '/', /\d/, /\d/,/\d/, /\d/,];
  public mask2 = [/\d/, /\d/,/\d/, /\d/,  ' ', /\d/, /\d/,/\d/, /\d/, ' ', /\d/, /\d/,/\d/, /\d/,];
  public employeeForm: FormGroup = new FormGroup({
    userId: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    emailId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    userRole: new FormControl('EMPLOYEE'),
    isEnableMobileNumber: new FormControl('true'),
    provider: new FormControl('LOCAL')
  });
  constructor(private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  employeeOnSubmit() {
    if (this.employeeForm.valid) {
      this.userService.signupEmployee(this.employeeForm.value).subscribe(
        () => {
          this.toastrService.success('Employee Created');
          this.employeeForm.reset();
        },
        () => this.toastrService.error('Try Again')
      );
    }
  }
}
