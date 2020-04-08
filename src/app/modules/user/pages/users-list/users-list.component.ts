import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { User } from 'src/app/shared/Models/user.model';
import { UserDataService } from 'src/app/shared/services/data/userData.service';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

// import * as jspdf from 'jspdf'; 
// import html2canvas from 'html2canvas';
// import * as xlsx from 'xlsx';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  @ViewChild('epltable', { static: false }) epltable: ElementRef;
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
    private router: Router,
    private dataService: UserDataService,
  ) { }

  ngOnInit() {
    this.dtExportButtonOptions = this.userList;
    this.basicSwal();
  }
  // : Observable<any>
  // return new Observable<any>(obs=>{
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
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Search',
      inputValidator: value => {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select user type');
          }
        });
      }
    }).then(selectedRole => {
      if (selectedRole.value) {
        console.log('selected role', selectedRole);
   

        this.userService.getAllUserByUserRoleAndStatus(selectedRole.value,'APPROVED',this.limit,this.offset).subscribe(
          data => {
            this.userList = data;
          },
          error => { }
        );
      } else if(selectedRole.dismiss === Swal.DismissReason.cancel){
        console.log("dismiss Called");
        this.router.navigate(['/dashboard/default']);
      }
    });
  }

  goToView(user: User) {
    this.dataService.add(user).subscribe(() => {
      // this.router.navigateByUrl('/users/find?userId='+ user.id);
      this.router.navigate(['/users/profile', user.userDetialId]);
    });
  }

  confirmAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text:
        'Once deleted, you will not be able to recover this imaginary file!',
      type: 'warning',
      showCloseButton: true,
      showCancelButton: true
    }).then(willDelete => {
      if (willDelete.dismiss) {
        Swal.fire('', 'Your imaginary file is safe!', 'error');
      } else {
        Swal.fire('', 'Poof! Your imaginary file has been deleted!', 'success');
      }
    });
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // dtInstance.columns().every(function() {
      //   const that = this;
      //   $("input", this.footer()).on("keyup change", function() {
      //     if (that.search() !== this["value"]) {
      //       that.search(this["value"]).draw();
      //     }
      //   });
      // });
    });
  }

  exportToExcel() {
    // const ws: xlsx.WorkSheet =
    // xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    // const wb: xlsx.WorkBook = xlsx.utils.book_new();
    // xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    // xlsx.writeFile(wb, 'epltable.xlsx');
    console.log("fnc")

    var data = document.getElementById('contentToConvert');
    // html2canvas(data).then(canvas => {
    // // Few necessary setting options
    // var imgWidth = 208;
    // var pageHeight = 295;
    // var imgHeight = canvas.height * imgWidth / canvas.width;
    // var heightLeft = imgHeight;
    
    // const contentDataURL = canvas.toDataURL('image/png')
    // let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    // var position = 0;
    // pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    // pdf.save('MYPdf.pdf'); // Generated PDF
    // });

   }
   print() {
    window.print();
  }
}
