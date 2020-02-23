import { Component, OnInit ,AfterViewInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from "angular-datatables";
import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs";
import { Invoice, Sales } from 'src/app/shared/Models/sales.model';
import { DispatchService } from "src/app/modules/dispatch/services/dispatch.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-search-si',
  templateUrl: './search-si.component.html',
  styleUrls: ['./search-si.component.css']
})
export class SearchSiComponent implements OnInit {

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

}
