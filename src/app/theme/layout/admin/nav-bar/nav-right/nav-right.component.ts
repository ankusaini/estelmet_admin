import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { UserLoginService } from 'src/app/shared/services/login/userLogin.service';
import { UserService } from 'src/app/shared/services/authgaurd/user.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig, NgbModalConfig, NgbModal]
})
export class NavRightComponent implements OnInit {


  public userId: number;
  public passwordForm : FormGroup = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required])
  })

  constructor(private userLoginService: UserLoginService,
    private UserService: UserService, 
    private apiService: ApiService,
    private toastr: ToastrService,
    config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() { 
  }

  logout() {
    let url = '/logout';
    this.apiService.get(url).subscribe(
      data => {
        this.userLoginService.logout();
        this.UserService.logout();
      }, error => {
        console.log(error);
      }
    );
  }

  changePassword(content) {
    this.userId = Number(JSON.parse(this.userLoginService.getUser()).body.id);
    console.log(this.userId);
    let url = '/changePassword?userId=' + this.userId;
    console.log(this.passwordForm.value);
    this.apiService.post(url, this.passwordForm.value).subscribe(
      data => {
        this.toastr.success("Password changed succesfully!");
      }, error => {
        console.log(error);
      }
    )
    this.modalService.dismissAll(content);
  }

  open(content) {
    this.modalService.open(content);
  }

  get f() {
    return this.passwordForm.controls;
  }


}
