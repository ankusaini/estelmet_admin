import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Purchase } from "src/app/shared/Models/purchase.model";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-view-po',
  templateUrl: './view-po.component.html',
  styleUrls: ['./view-po.component.scss']
})
export class ViewPoComponent implements OnInit {
 public poList: Purchase[]=[];
public selectedPOList: Purchase[]=[];
  constructor(private purchaseService: PurchaseService,private router:Router,private toastrService:ToastrService) {
    this.getAllPurchaseByTypeAndStatus("PURCHASE_CONFIRMATION", "APPROVED");
  }

    @ViewChild('epltable', { static: false }) epltable: ElementRef;

  ngOnInit() {}

  getAllPurchaseByTypeAndStatus(type, status) {
    // let url = "/purchase/getAllPurchaseByTypeAndStatus/" + type + "/" + status;
    // console.log("url",url)
    this.purchaseService.getAllPurchaseByTypeAndStatus(type, status).subscribe(
      data => {
        
        this.poList = data.purchaseList;
        console.log("data",this.poList)
      },
      error => {}
    );
  }

  addMrToList(mr)
  {
    const index: number = this.selectedPOList.indexOf(mr);
    if (index == -1) {
      this.selectedPOList.push(mr);
    } else {
      this.toastrService.warning("record already added");
    }
  }

  removeMr(mr) {
    const index: number = this.selectedPOList.indexOf(mr);
    if (index !== -1) {
      this.selectedPOList.splice(index, 1);
    }
  }
  

  routeToEditMr(id)
  {
    this.router.navigateByUrl("/purchase/pcOverview/"+id);
  }



   exportToExcel() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'PO.xlsx');
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
                    filename = 'PO' + '.pdf';
                    doc.save(filename);
                  };
                })
                .catch(function(error) {
                 // Error Handling
                });

   }



}
