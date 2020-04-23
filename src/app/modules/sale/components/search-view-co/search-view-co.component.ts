import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SalesServiceService } from '../../services/sales-service.service';
import { CustomerOrder } from 'src/app/shared/Models/customer-order.model';
import { ids } from 'src/app/shared/Models/ids.model';
import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
@Component({
  selector: 'app-search-view-co',
  templateUrl: './search-view-co.component.html',
  styleUrls: ['./search-view-co.component.scss']
})
export class SearchViewCOComponent implements OnInit {

  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  public customerOrderList: CustomerOrder[];
  public Ids: any;
  public selectedList: CustomerOrder[] = [];

  constructor(private salesService: SalesServiceService,
    private toastr: ToastrService) {
      this.Ids = ids;
     }

  ngOnInit() {
    this.getAllCustomerOrder();
  }

  getAllCustomerOrder() {
    this.salesService.getAllCustomerOrder().subscribe( res=> {
      this.customerOrderList = res;
    });
  }

  addToSelectedList(item) {
    let index : number = this.selectedList.indexOf(item);
    if(index == -1) {
      this.selectedList.push(item);
    } else {
      this.toastr.warning("Already added!");
    }
  }

  removeFromSelectedList(item) {
    const index: number = this.selectedList.indexOf(item);
    if (index !== -1) {
      this.selectedList.splice(index, 1);
    }
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'MR.xlsx');
    // console.log("fnc")
   }


   exportToPDF()
   {

     var node = document.getElementById('contentToConvert');
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
                    filename = 'MR' + '.pdf';
                    doc.save(filename);
                  };
                })
                .catch(function(error) {

                });

   }

}
