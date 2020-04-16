import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Purchase, PurchaseType } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from '../../../services/purchase.service';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { ids } from 'src/app/shared/Models/ids.model';
import * as xlsx from 'xlsx';
import { Status } from 'src/app/shared/Models/user.model';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-search-view-pc',
  templateUrl: './search-view-pc.component.html',
  styleUrls: ['./search-view-pc.component.css']
})
export class SearchViewPcComponent implements OnInit {
    @ViewChild('epltable', { static: false }) epltable: ElementRef;


  public purchaseData: any;
  public purchaseList: Purchase[];
  public selectedPurchaseList: Purchase[]=[];
  public Ids: any;
  constructor(private purchaseService: PurchaseService,
              private router: Router,private toastrService:ToastrService ) { 
                this.Ids = ids;
              }

  ngOnInit() {
    let url = "/purchase/getAllPurchaseByTypeAndStatus/PURCHASE_CONFIRMATION/APPROVED";
    this.purchaseService.getAllPurchaseByTypeAndStatus(PurchaseType.PURCHASE_CONFIRMATION, Status.APPROVED).subscribe( data =>{
      console.log("Your Data is: " + data);
      this.purchaseData = data;
      this.purchaseList = this.purchaseData.purchaseList;
      },
      error => {}
    );

  }

    addPurchaseToList(purchase)
  {
    const index: number = this.selectedPurchaseList.indexOf(purchase);
    if (index == -1) {
      this.selectedPurchaseList.push(purchase);
    } else {
      this.toastrService.warning(" record already added");
    }
  }

  removePurchase(purchase) {
    const index: number = this.selectedPurchaseList.indexOf(purchase);
    if (index !== -1) {
      this.selectedPurchaseList.splice(index, 1);
    }
  }

  routerToPcEdit(id) {
    this.router.navigateByUrl("/purchase/pcEdit/"+id);
  }

    exportToExcel() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'PC.xlsx');
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
                    filename = 'PC' + '.pdf';
                    doc.save(filename);

                  };


                })
                .catch(function(error) {

                 // Error Handling

                });

   }
}
