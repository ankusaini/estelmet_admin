import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserGroup, Status } from 'src/app/shared/Models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';
import { ids } from 'src/app/shared/Models/ids.model';
import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-user-group-list',
  templateUrl: './user-group-list.component.html',
  styleUrls: ['./user-group-list.component.scss']
})
export class UserGroupListComponent implements OnInit {
  // /users/group//users/group/getAllUserGroupByUserRoleAndStatus/CUSTOMER/APPROVED+/CUSTOMER/APPROVED
  constructor(
    private userService: UserService,
    private router: Router,
    private toastrService: ToastrService) {
    this.basicSwal();
    this.Ids = ids;

  }
  public userGroupList: any[] = [];
  public selectedUserGroupList: UserGroup[] = [];
  public selectedRole: string ='';
  public Ids: any;
  limit = 10;
  offset = 1;

    @ViewChild('epltable', { static: false }) epltable: ElementRef;

  ngOnInit() { }
  basicSwal() {
    Swal.fire({
      title: 'Search & View User Group',
      input: 'select',
      inputOptions: {
        CUSTOMER: 'Customer Group',
        SUPPLIER: 'Supplier Group',
        AGENT: 'Agent Group',
        CONTRACTOR: 'Contractor Group',
        TRANSPORTER: 'Transporter Group'
      },
      inputPlaceholder: 'Select Group Type',
      allowOutsideClick: false,
      width:'300px',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Search',
      inputValidator(value) {
        // tslint:disable-next-line: only-arrow-functions
        return new Promise(function(resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select user group type');
          }
        });
      }
    }).then(selectedRole => {
      if (selectedRole.value) {
        this.selectedRole = selectedRole.value;
        console.log('------------------',selectedRole.value);
          this.userService.getAllUserByUserGroupRoleAndStatus(selectedRole.value, Status.APPROVED, this.limit, this.offset ).subscribe(
          data => {
            this.userGroupList = data;
          },
          error => { }
        );
      } else if(selectedRole.dismiss === Swal.DismissReason.cancel){
        console.log("dismiss Called");
        this.router.navigate(['/dashboard/default']);
      }
    });
  }

  addUserGroup(userGroup: UserGroup) {
    const index: number = this.selectedUserGroupList.indexOf(userGroup);
    if (index === -1) {
      this.selectedUserGroupList.push(userGroup);
    } else {
      // alert("already added");
      this.toastrService.info('Product already added!');
    }
  }
  removeSelectedUserd(userGroup: UserGroup) {
    const index: number = this.selectedUserGroupList.indexOf(userGroup);
    if (index !== -1) {
      this.selectedUserGroupList.splice(index, 1);
    }
  }

  navigateToEditView(userGroup) {
    this.router.navigate(['/users/editGroup',userGroup.userGroupId]);
    // const url = '/users/editGroup/' + userGroupId;
    // this.router.navigateByUrl(url);
  }

  
  exportToExcel() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'User Group.xlsx');
    // console.log("fnc")
   }


   exportToPDF()
   {

     var node = document.getElementById('contentToConvertList');
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
                    filename = 'User Group' + '.pdf';
                    doc.save(filename);

                  };


                })
                .catch(function(error) {

                 // Error Handling

                });

   }

}
