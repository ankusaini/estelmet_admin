import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Grn } from 'src/app/shared/Models/purchase.model';
import { PurchaseService } from '../../../services/purchase.service';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { ids } from 'src/app/shared/Models/ids.model';


import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-search-view-grn',
  templateUrl: './search-view-grn.component.html',
  styleUrls: ['./search-view-grn.component.scss']
})
export class SearchViewGrnComponent implements OnInit {
    @ViewChild('epltable', { static: false }) epltable: ElementRef;

  grnData: any;
  grnList: Grn[];
  selectedGrnList: Grn[] =[]; 
  public Ids: any;


  constructor(private purchaseService: PurchaseService,
              private router: Router,private toastr:ToastrService) { 
                this.Ids = ids;
              }

  ngOnInit() {
    // let url = "/purchase/getAllGrn";
    this.purchaseService.getAllGrn().subscribe(data => {
      this.grnData = data;
      this.grnList = this.grnData.grnList;
      console.log("list is: "+ this.grnList);
    },
    error => {}
    );
  }

  addToSelectedList(grn) {
    console.log(grn);
    const index: number = this.selectedGrnList.indexOf(grn);
    if (index === -1) {
      this.selectedGrnList.push(grn);
    } else {
      this.toastr.warning("Already added!")
    }
  }

  removeFromSelectedList(grn) {
    console.log(grn);
    const index: number = this.selectedGrnList.indexOf(grn);
    if (index !== -1) {
      this.selectedGrnList.splice(index, 1);
    }
  }

  navigateToEdit(id) {
    // alert(id);
    this.router.navigateByUrl("/purchase/grnEdit/" + id);
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'GRN.xlsx');
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
                    filename = 'GRN' + '.pdf';
                    doc.save(filename);
                  };
                })
                .catch(function(error) {
                 // Error Handling
                });

   }

}
