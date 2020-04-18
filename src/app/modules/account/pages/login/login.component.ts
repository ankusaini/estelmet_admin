import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/Models/user.model';
import { UserLoginService } from 'src/app/shared/services/login/userLogin.service';
import { NgxPermissionsService } from 'ngx-permissions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userLoginService: UserLoginService,
    private router: Router,
    private permissionsService: NgxPermissionsService
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    const user: User = this.userLoginService.getCurrentUser();
    if (Object.keys(user)) {
      this.router.navigate(['']);
    }
  }

  login() {
    if (this.loginForm.status == 'VALID') {
      this.userLoginService.attemptAuth(this.loginForm.value).subscribe(user => {
        if (Object.keys(user)) {
          console.log(user.roles);
          this.permissionsService.loadPermissions(user.roles);
          this.userLoginService.saveUser(user);
          this.router.navigateByUrl('dashboard/default');
          // this.router.navigate(['dashboard/default']);
        }
      });
    }
  }

}
