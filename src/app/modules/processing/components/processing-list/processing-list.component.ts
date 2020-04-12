import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ids } from 'src/app/shared/Models/ids.model';
import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-processing-list',
  templateUrl: './processing-list.component.html',
  styleUrls: ['./processing-list.component.scss']
})
export class ProcessingListComponent implements OnInit {


  @Input() productProcessingList: any[];
  @Input() cart = false;
  @Input() processingType: string;

    @ViewChild('epltable', { static: false }) epltable: ElementRef;


  public selectedProcessingList: any[] = [];
  public Ids: any;
  @Output() selectedList: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.Ids = ids;
  }

  ngOnInit() {

  }

  addToProcessingList(processing) {
    const index = this.selectedProcessingList.indexOf(processing);
    if (index === -1) {
      this.selectedProcessingList.push(processing);
      this.selectedList.emit(this.selectedProcessingList);
    } else {
      alert('Product already added!');
    }
  }

  removeFromProcessingList(processing) {
    const index = this.productProcessingList.indexOf(processing);
    if (index !== -1) {
      this.productProcessingList.splice(index, 1);
    }
  }

  navigateToEdit(id) {
    this.router.navigateByUrl('processing/editProcessing/' + id);
  }


   exportToExcelChild() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Processing.xlsx');
    // console.log("fnc")
   }


   exportToPDFChild()
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
                    filename = 'Processing' + '.pdf';
                    doc.save(filename);

                  };


                })
                .catch(function(error) {

                 // Error Handling

                });

   }
}
