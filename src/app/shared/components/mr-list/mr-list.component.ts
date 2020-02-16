import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import { Purchase } from "src/app/shared/Models/purchase.model";
import { PurchaseService } from "src/app/modules/purchase/services/purchase.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mr-list',
  templateUrl: './mr-list.component.html',
  styleUrls: ['./mr-list.component.scss']
})
export class MrListComponent implements OnInit {
public mrList: Purchase[];
public selectedMr: Purchase;
  @Output() selectedMrData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private purchaseService: PurchaseService,
    private router:Router,
    private toastService: ToastrService
    ) {
    this.getAllPurchaseByTypeAndStatus("MATERIAL_REQURIMENT", "APPROVED");
   }

  ngOnInit() {
  }

   getAllPurchaseByTypeAndStatus(type, status) {
    let url = "/purchase/getAllPurchaseByTypeAndStatus/" + type + "/" + status;
    console.log("url",url)
    this.purchaseService.getAllPurchaseByTypeAndStatus(url).subscribe(
      data => {
        console.log("data",data)
        this.mrList = data.purchaseList;
        console.log("data",this.mrList)
      },
      error => {}
    );
  }

  submitSelectMrId() {
    if(this.selectedMr) {
      this.selectedMrData.emit(this.selectedMr);
    }
    else {
      this.toastService.warning("Select Mr Id!");
    }
  }


   getSelectedMr(mr)
  {
    this.selectedMr=mr;
    console.log("selected",mr)
  }
}
