import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PurchaseService } from '../../../services/purchase.service';
import { Purchase, PurchaseType } from 'src/app/shared/Models/purchase.model';
import { Router } from '@angular/router';
import { ids } from 'src/app/shared/Models/ids.model';
import { Status } from 'src/app/shared/Models/user.model';

import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-search-view-lot',
  templateUrl: './search-view-lot.component.html',
  styleUrls: ['./search-view-lot.component.scss']
})
export class SearchViewLotComponent implements OnInit {
  public purchaseData: any;
  public purchaseList: Purchase[];
  public selectedPurchaseList: Purchase[];
  public Ids: any;
  @ViewChild('epltable', { static: false }) epltable: ElementRef;


  constructor(private purchaseService: PurchaseService,
    private toastr: ToastrService,
              private router: Router) {
                this.Ids = ids;
               }

  ngOnInit() {
    // let url = "/purchase/getAllPurchaseByTypeAndStatus/LOT/APPROVED";
    this.purchaseService.getAllPurchaseByTypeAndStatus(PurchaseType.LOT, Status.APPROVED).subscribe(data => {
      this.purchaseData = data;
      this.purchaseList = this.purchaseData.purchaseList;
      console.log("List is: " + this.purchaseList);
    });
    this.selectedPurchaseList = [];
  }

  addPurchaseToList(purchase) {
    const index: number = this.selectedPurchaseList.indexOf(purchase);
    if (index == -1) {
      this.selectedPurchaseList.push(purchase);
    } else {
      this.toastr.warning("Already added!")
    }
  }

  removePurchase(purchase) {
    const index: number = this.selectedPurchaseList.indexOf(purchase);
    if (index !== -1) {
      this.selectedPurchaseList.splice(index, 1);
    }
  }

  navigateToEdit(id) {
    this.router.navigateByUrl("purchase/lotEdit/" + id);
  }

  
  exportToExcel() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Lot.xlsx');
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
                    filename = 'Lot' + '.pdf';
                    doc.save(filename);

                  };


                })
                .catch(function(error) {

                 // Error Handling

                });

   }
}
