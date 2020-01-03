import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserLoginService } from 'src/app/shared/services/login/userLogin.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(
    private _fb : FormBuilder,
    private _userLoginService : UserLoginService,
    private _router : Router,
  ) { 
    this.loginForm = this._fb.group({
      username : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
    })
  }

  ngOnInit() {
    let user : User = this._userLoginService.getCurrentUser();
    if(Object.keys(user)){
      this._router.navigate(['']);
    }
  }

  login() {
    if(this.loginForm.status == 'VALID') {
      this._userLoginService.attemptAuth(this.loginForm.value).subscribe(user=>{
        console.log(user);
        if(Object.keys(user)) {
          this._userLoginService.saveUser(user);
          this._router.navigate(['']);
        }
      })
    }
  }

}
