import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { InventoryService } from '../../service/inventory.service';
import { Grn, LotType } from 'src/app/shared/Models/purchase.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-grn',
  templateUrl: './select-grn.component.html',
  styleUrls: ['./select-grn.component.scss']
})
export class SelectGrnComponent implements OnInit, OnChanges {
  @Output() selectedGrnId : EventEmitter<any> = new EventEmitter<any>();
  @Input() grntype: string = '';
  @Input() grnList: Grn[];
  grnIdList : any[] = [];
  grnIdForm : FormGroup;    

  constructor(private inventoryService: InventoryService, private toastr: ToastrService) { 
    
  }

  ngOnInit() {
    // this.get();
    console.log(this.grnList);
    this.grnIdForm = new FormGroup({
      grnId: new FormControl("", [Validators.required])
    }); 
        
  }
  ngOnChanges() {
    this.grnIdList = [];
    console.log(this.grntype);
    console.log(this.grnList);
    if(this.grntype === 'withoutPurchaseInvoice') {
      this.grnList.filter(obj => {
        if(obj.grnType === LotType.WITHOUT_PC) {
          this.grnIdList.push(obj);
        }
      })
    } if(this.grntype === 'PURCHASE_INVOICE') {
      this.grnList.filter(obj => {
        if(obj.grnType === LotType.WITH_PC) {
          this.grnIdList.push(obj);
        }
      })
    } if(this.grntype === 'jobWorkChalan') {
      this.grnList.filter(obj => {
        if(obj.grnType === LotType.JOB_WORK_OTHER) {
          this.grnIdList.push(obj);
        }
      })
    } if(this.grntype === 'materialTransfer') {
      this.grnList.filter(obj => {
        if(obj.grnType === LotType.MATERIAL_TRANSFER) {
          this.grnIdList.push(obj);
        }
      })
    }
    // this.get();
  }

  saveGrnId() {
    if(this.grnIdForm.valid) {
      console.log("GrnIdValue is: ",this.grnIdForm.value);
    let grn = this.grnList.filter(obj=>{
      return obj.grnId==this.grnIdForm.controls.grnId.value;
    })
    if(grn)
      {
    this.selectedGrnId.emit(grn[0]);
  } 
    }else {
      this.toastr.error("Error! Invaid details.");
    }
  }

  // get() {
 
  //     this.grnList.map(grnObj => {
  //       if(grnObj.grnType == this.grntype) {
  //         this.grnIdList.push(grnObj.grnId);
  //       }
  //     });
  //     console.log("grnIdList is: ", this.grnIdList);
  //     this.grnIdForm = new FormGroup({
  //       grnId: new FormControl("", [Validators.required])
  //     }); 

  // }

}
