import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Sales } from 'src/app/shared/Models/sales.model';
import { SalesServiceService } from '../../../services/sales-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';
import { ids } from 'src/app/shared/Models/ids.model';


@Component({
  selector: 'app-search-view-sc',
  templateUrl: './search-view-sc.component.html',
  styleUrls: ['./search-view-sc.component.scss']
})
export class SearchViewScComponent implements OnInit {
    @ViewChild('epltable', { static: false }) epltable: ElementRef;

  public dataList: any;
  salesList: Sales[];
  public Ids: any;
  public selectedSalesList: Sales[] = [];

  constructor(private salesService: SalesServiceService,
            private router: Router,
            private toastrService: ToastrService) {
              this.Ids = ids;
             }

  ngOnInit() {
    let url="/sales/getAllSalesByTypeAndStatus/SALES_CONFIRMATION/APPROVED";
    this.salesService.getAllSalesByTypeAndStatus(url).subscribe( data => {
      this.dataList = data;
      this.salesList= this.dataList.salesList;
      // console.log("your list is: "+ this.salesList);
    }, error =>{
      }
    );
  }

  addToSelectedList(sale: Sales) {
    const index: number = this.selectedSalesList.indexOf(sale);
    if (index == -1) {
      this.selectedSalesList.push(sale);
    } else {
      this.toastrService.warning("record already added!");
    }
  }

  removeFromSelectedList(sale: Sales) {
    const index: number = this.selectedSalesList.indexOf(sale);
    if (index !== -1) {
      this.selectedSalesList.splice(index, 1);
    }
  }

  routerToScEdit(id) {
    this.router.navigateByUrl("/sales/scEdit/"+id);
  }

   exportToExcel() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Sale.xlsx');
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
                    filename = 'Sale' + '.pdf';
                    doc.save(filename);

                  };


                })
                .catch(function(error) {

                 // Error Handling

                });

   }



}
