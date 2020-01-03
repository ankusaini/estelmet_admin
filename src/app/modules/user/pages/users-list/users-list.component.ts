import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { DataTableDirective } from "angular-datatables";
import { UserService } from "src/app/shared/services/user.service";
import { User } from "src/app/shared/Models/user.model";
import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs";
import { UserDataService } from 'src/app/shared/services/data/userData.service';

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit, AfterViewInit {
  public userList: any;
  dtExportButtonOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtRouterLinkOptions: any = {};

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  public limit = 15;
  public offset = 0;

  constructor(
    private userService: UserService,
    private router : Router,
    private _dataService : UserDataService
  ) {}

  ngOnInit() {
    this.basicSwal();
    // .subscribe(data=>{
    //   this.userList=data;
    // this.dtExportButtonOptions = {
    //   data: JSON.stringify(data),
    //   columns: [{
    //     title: 'User Id',
    //     data: 'id'
    //   }, {
    //     title: 'User Type',
    //     data: 'userRole'
    //   }, {
    //     title: 'User Name',
    //     data: 'firstName'
    //   }, {
    //     title: 'Mobile',
    //     data: 'mobile'
    //   }, {
    //     title: 'Email',
    //     data: 'email'
    //   }, {
    //     title: 'Company Name',
    //     data: 'email'
    //   }, {
    //     title: 'Action',
    //     render(data: any, type: any, full: any) {
    //       return '<button class="btn btn-outline-primary btn-sm">View</button>';
    //     }
    //   }],
    //   responsive: true,
    //   dom: 'Bfrtip',
    //   buttons: [
    //     'copy',
    //     'print',
    //     'excel',
    //     'csv'
    //   ]
    // };
    // });
    // this.dtTrigger.next();
  }
  // : Observable<any>
  // return new Observable<any>(obs=>{
  basicSwal() {
    Swal.fire({
      title: "Filter Search!",
      input: "select",
      inputOptions: {
        CUSTOMER: "CUSTOMER",
        SUPPLIER: "SUPPLIER",
        AGENT: "AGENT",
        CONTRACTOR: "CONTRACTOR",
        TRANSPORTER: "TRANSPORTER"
      },

      inputPlaceholder: "Select User Type",
      allowOutsideClick: false,
      confirmButtonText: "Search",
      inputValidator: value => {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function(resolve, reject) {
          if (value !== "") {
            resolve();
          } else {
            resolve("You need to select user type");
          }
        });
      }
    }).then(selectedRole => {
      if (selectedRole != "") {
        console.log("selected role", selectedRole);
        let url =
          "/users/getAllUsersByUserRoleAndStatus/" +
          selectedRole.value +
          "/APPROVED";

        this.userService.getAllUserByUserRoleAndStatus(url).subscribe(
          data => {
            this.userList = data;
            // let obj={
            //   data:data
            // };
            // obs.next(obj);
            // obs.complete();
          },
          error => {}
        );
      }
    });
  }

  goToView(user : User) {
    this._dataService.add(user).subscribe(()=>{
      this.router.navigate(['/users/profile',user.id]);
    });
  }

  confirmAlert() {
    Swal.fire({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      type: "warning",
      showCloseButton: true,
      showCancelButton: true
    }).then(willDelete => {
      if (willDelete.dismiss) {
        Swal.fire("", "Your imaginary file is safe!", "error");
      } else {
        Swal.fire("", "Poof! Your imaginary file has been deleted!", "success");
      }
    });
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function() {
        const that = this;
        $("input", this.footer()).on("keyup change", function() {
          if (that.search() !== this["value"]) {
            that.search(this["value"]).draw();
          }
        });
      });
    });
  }
}
