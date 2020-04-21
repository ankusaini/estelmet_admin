import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { ResponseP } from "src/app/shared/Models/RequestResponse";
import { Purchase } from "src/app/shared/Models/purchase.model";
import { Router } from "@angular/router";
import { ids } from 'src/app/shared/Models/ids.model';
import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-view-mr",
  templateUrl: "./view-mr.component.html",
  styleUrls: ["./view-mr.component.scss"]
})
export class ViewMRComponent implements OnInit {

    @ViewChild('epltable', { static: false }) epltable: ElementRef;

 public mrList: Purchase[];
public selectedMrList: Purchase[]=[];
public Ids: any;
  constructor(private purchaseService: PurchaseService,
    private toastr: ToastrService,
    private router:Router) {
    this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "APPROVED");
    this.Ids = ids;
  }

  ngOnInit() {}

  getAllPurchaseByTypeAndStatus(type, status) {
    // let url = "/purchase/getAllPurchaseByTypeAndStatus/" + type + "/" + status;
    // console.log("url",url)
    this.purchaseService.getAllPurchaseByTypeAndStatus(type, status).subscribe(
      data => {
        console.log("data",data)
        this.mrList = data.purchaseList;
        console.log("data",this.mrList)
      },
      error => {}
    );
  }

  addMrToList(mr)
  {
    const index: number = this.selectedMrList.indexOf(mr);
    if (index == -1) {
      this.selectedMrList.push(mr);
    } else {
      this.toastr.warning("Already added!");
    }
  }

  removeMr(mr) {
    const index: number = this.selectedMrList.indexOf(mr);
    if (index !== -1) {
      this.selectedMrList.splice(index, 1);
    }
  }
  

  routeToEditMr(id)
  {
    this.router.navigateByUrl("/purchase/mrEdit/"+id);
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
