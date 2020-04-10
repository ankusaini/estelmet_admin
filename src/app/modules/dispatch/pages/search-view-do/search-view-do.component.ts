import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from "angular-datatables";
import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs";
import { Sales, DeliveryOrder } from "src/app/shared/Models/sales.model";
import { DispatchService } from "src/app/modules/dispatch/services/dispatch.service";
import { ToastrService } from "ngx-toastr";

import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-search-view-do',
  templateUrl: './search-view-do.component.html',
  styleUrls: ['./search-view-do.component.css']
})
export class SearchViewDoComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  public datalist :any;
  public deliveryOrderlist :DeliveryOrder[]=[];
  public selectdeliveryOrder :DeliveryOrder[]=[];
  
  dtExportButtonOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtRouterLinkOptions: any = {};

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  public limit = 5;
  public offset = 0;

  constructor(
    private dispatchService: DispatchService,
    private router : Router,
    private toastr:ToastrService
  ) {}

  ngOnInit() {

    this.getinformation();
  }

getinformation(){
  let url =
          "/sales/getAllDeliveryOrderByStatus/APPROVED";

          this.dispatchService.getAllDeliveryOrderByStatus(url).subscribe(
            data => {
              this.datalist =data;
              this.deliveryOrderlist= this.datalist.deliveryOrderList;

            },
            error => {}
          );

}

addDeliveryOrder(id) {
  const index: number = this.selectdeliveryOrder.indexOf(id);
if(index ==-1)
{
  this.selectdeliveryOrder.push(id);
}else{
  this.toastr.warning("Record already added");
}
}

removedeliveryOrder(id) {
  const index: number = this.selectdeliveryOrder.indexOf(id);
  if(index!==-1)
  {
  this.selectdeliveryOrder.splice(index, 1);
  }
}

navigateToEdit(id) {
  this.router.navigateByUrl("/dispatch/doEdit/" + id);
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

}
