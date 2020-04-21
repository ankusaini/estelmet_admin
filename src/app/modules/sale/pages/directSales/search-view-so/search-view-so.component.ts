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
  selector: 'app-search-view-so',
  templateUrl: './search-view-so.component.html',
  styleUrls: ['./search-view-so.component.scss']
})
export class SearchViewSoComponent implements OnInit {

  public dataList: any;
  public salesList: Sales[];
  public selectedSalesList: Sales[] = [];
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  public Ids: any;

  constructor(private salesService: SalesServiceService,
              private toastrService: ToastrService,
              private router: Router
              ) {
                this.Ids = ids;
               }

  ngOnInit() {
   // let url="/sales/getAllSalesByTypeAndStatus/SALES_OFFER_LOT/APPROVED";
    this.salesService.getAllSalesByTypeAndStatusCheck('SALES_OFFER_LOT','APPROVED').subscribe(data => {
      this.dataList= data;
      this.salesList= this.dataList.salesList;
      console.log("your Data is: "+ data);
      },
      error => { 
        console.log(error);
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

  routerToSoEdit(id) {
    this.router.navigateByUrl("/sales/soEdit/"+id);
  }

  
  exportToExcel() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'SO.xlsx');
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
                    filename = 'SO' + '.pdf';
                    doc.save(filename);

                  };


                })
                .catch(function(error) {

                 // Error Handling

                });

   }

}
