import { Component, OnInit ,AfterViewInit ,ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from "angular-datatables";
import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs";
import { Invoice, Sales } from 'src/app/shared/Models/sales.model';
import { DispatchService } from "src/app/modules/dispatch/services/dispatch.service";
import { ToastrService } from "ngx-toastr";
import * as xlsx from 'xlsx';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-search-si',
  templateUrl: './search-si.component.html',
  styleUrls: ['./search-si.component.css']
})
export class SearchSiComponent implements OnInit {

    @ViewChild('epltable', { static: false }) epltable: ElementRef;

  public saleinvoclist :Sales[]=[];
  public datalist :any;
  public selectedsaleinvoclist :Sales[]=[];
  dtExportButtonOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtRouterLinkOptions: any = {};

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  public limit = 15;
  public offset = 0;

  constructor(
    private disptachService: DispatchService,
    private router : Router,private toastr:ToastrService
    // private _dataService : 
  ) {}


  ngOnInit() {
 this.getallinvoice();
  }


  getallinvoice()
  {
 let url="/sales/getAllInvoice";

 this.disptachService.getAllInvoice(url).subscribe(data=>
  {
this.datalist=data;
this.saleinvoclist=this.datalist.invoiceList;
  },
  error=>{});
  }

  // goToView(invoice : Invoice) {
  //   this._dataService.add(invoice).subscribe(()=>{
  //     this.router.navigate(['/sales/invoiceOverview',invoice.invoiceId]);
  //   });
  // }


  addsaleinvoice(id) {
    const index: number = this.selectedsaleinvoclist.indexOf(id);
  if(index ==-1)
  {
    this.selectedsaleinvoclist.push(id);
  }else{
    this.toastr.warning("Record already added");
  }
  }

  removesaleinvoice(id) {
    const index: number = this.selectedsaleinvoclist.indexOf(id);
    if(index!==-1)
    {
    this.selectedsaleinvoclist.splice(index, 1);
    }
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Invoice.xlsx');
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
                    filename = 'Invoice' + '.pdf';
                    doc.save(filename);

                  };


                })
                .catch(function(error) {

                 // Error Handling

                });

   }


}
