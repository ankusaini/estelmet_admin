import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';

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
  constructor() { }

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
  basicSwal() {
    Swal.fire({
      title: 'Filter Search!',
      input: 'select',
      inputOptions: {
        Customer: 'Customer',
        Supplier: 'Supplier',
        Agent: 'Agent',
        Contractor: 'Contractor',
        Transporter: 'Transporter'
      },
      inputPlaceholder: 'Select User Type',
      allowOutsideClick: false,
      confirmButtonText: 'Search',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
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
