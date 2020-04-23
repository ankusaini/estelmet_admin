import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { User } from 'src/app/shared/Models/user.model';
import { UserDataService } from 'src/app/shared/services/data/userData.service';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';
import { ids } from 'src/app/shared/Models/ids.model';
// import * as jspdf from 'jspdf'; 
// import * as jsPDF from 'jspdf';
import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';

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
  public Ids: any;

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  public limit = 15;
  public offset = 1;
  public selectedRole= '';

  constructor(
    private userService: UserService,
    private router: Router,
    private dataService: UserDataService,
  ) {
      this.Ids = ids;
   }

  ngOnInit() {
    this.dtExportButtonOptions = this.userList;
    this.basicSwal();
  }
  // : Observable<any>
  // return new Observable<any>(obs=>{
    basicSwal() {
      Swal.fire({
        title: 'Search & View User',
        input: 'select',
        inputOptions: {
          CUSTOMER: 'Customer',
          SUPPLIER: 'Supplier',
          AGENT: 'Agent',
          CONTRACTOR: 'Contractor',
          TRANSPORTER: 'Transporter'
        },
        
        inputPlaceholder: 'Select User Type',
        width:'300px',
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
          this.selectedRole = selectedRole.value;
          console.log('selected role', selectedRole);
          // const url =
          //   '/users/getAllUsersByUserRoleAndStatus?userRole=' +
          //   selectedRole.value +
          //   '&status=APPROVED&limit=10&offset=1';
  
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
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'User.xlsx');
    // console.log("fnc")
   }


   exportToPDF()
   {
     console.log("pdf")


     var node = document.getElementById('contentToConvert');
console.log('node',node);
              var img;
              var filename;
              var newImage;


              domtoimage.toPng(node, { bgcolor: '#fff' })

                .then(function(dataUrl) {

                  img = new Image();
                  img.src = dataUrl;
                  newImage = img.src;

                  img.onload = function(){

                  var pdfWidth = img.width;
                  var pdfHeight = img.height;

                    // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

                    var doc;

                    if(pdfWidth > pdfHeight)
                    {
                      doc = new jsPDF('l', 'px', [pdfWidth , pdfHeight]);
                    }
                    else
                    {
                      doc = new jsPDF('p', 'px', [pdfWidth , pdfHeight]);
                    }


                    var width = doc.internal.pageSize.getWidth();
                    var height = doc.internal.pageSize.getHeight();


                    doc.addImage(newImage, 'PNG',  10, 10, width, height);
                    filename = 'User' + '.pdf';
                    doc.save(filename);

                  };


                })
                .catch(function(error) {

                 // Error Handling

                });

   }


   print() {
    window.print();
  }
}
