import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
import { UserService } from "src/app/shared/services/user.service";
import { User } from "src/app/shared/Models/user.model";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {
  dtExportButtonOptions: any = {};
  dtRouterLinkOptions: any = {};
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  public limit=15;
  public offset=0;
  public userList:User[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.basicSwal();
    
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data2.json',
      columns: [{
        title: 'User Id',
        data: 'userId'
      }, {
        title: 'User Type',
        data: 'userType'
      }, {
        title: 'User Name',
        data: 'userName'
      }, {
        title: 'Mobile',
        data: 'mobile'
      }, {
        title: 'Email',
        data: 'email'
      }, {
        title: 'Company Name',
        data: 'companyName'
      }, {
        title: 'Action',
        render(data: any, type: any, full: any) {
          return '<button class="btn btn-outline-primary btn-sm">View</button>';
        }
      }],
      responsive: true,
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ]
    };
  }
   getAllUserByUserRoleAndStatus(role,status)
  {
    console.log("get all rle")
    let url="http://13.233.151.89:8020/estelmet/users/getAllUsersByUserRoleAndStatus/"+role+"/"+status;
      
    this.userService.getAllUserByUserRoleAndStatus(url).subscribe(data=>{
      console.log("userlist",data);
      this.userList=data;
    },error=>{

    })
  }

  basicSwal() {
    Swal.fire({
      title: 'Filter Search!',
      input: 'select',
      inputOptions: {
        CUSTOMER: 'CUSTOMER',
        SUPPLIER: 'SUPPLIER',
        AGENT: 'AGENT',
        CONTRACTOR: 'CONTRACTOR',
        TRANSPORTER: 'TRANSPORTER'
      },
      
      inputPlaceholder: 'Select User Type',
      allowOutsideClick: false,
      confirmButtonText: 'Search',
      inputValidator:(value) => {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function (resolve, reject) {
          if (value !== '') {
           
         //  console.log("this",this);
            resolve();
             this.getAllUserByUserRoleAndStatus(value,'APPROVED');
          } else {
            resolve('You need to select user type');
          }
        });
      }
    });
  }

 
  confirmAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      type: 'warning',
      showCloseButton: true,
      showCancelButton: true
    }).then((willDelete) => {
      if (willDelete.dismiss) {
        Swal.fire('', 'Your imaginary file is safe!', 'error');
      } else {
        Swal.fire('', 'Poof! Your imaginary file has been deleted!', 'success');
      }
    });
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

}
