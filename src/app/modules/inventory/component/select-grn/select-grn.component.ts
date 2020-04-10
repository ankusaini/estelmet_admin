import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Grn, LotType } from 'src/app/shared/Models/purchase.model';
import { InventoryService } from '../../service/inventory.service';

@Component({
  selector: 'app-select-grn',
  templateUrl: './select-grn.component.html',
  styleUrls: ['./select-grn.component.scss']
})
export class SelectGrnComponent implements OnInit, OnChanges {
  @Output() selectedGrnId: EventEmitter<any> = new EventEmitter<any>();
  @Input() grntype: string = '';
  @Input() grnList: Grn[];
  grnIdList: any[] = [];
  grnIdForm: FormGroup;

  constructor(private inventoryService: InventoryService, private toastr: ToastrService) {

  }

  ngOnInit() {
    // this.get();
    this.grnIdForm = new FormGroup({
      grnId: new FormControl('', [Validators.required])
    });

  }
  ngOnChanges() {
    this.grnIdList = [];
    if (this.grntype === 'withoutPurchaseInvoice') {
      this.grnList.filter(obj => {
        if (obj.grnType === LotType.WITHOUT_PC) {
          this.grnIdList.push(obj);
        }
      });
    } else if (this.grntype === 'PURCHASE_INVOICE') {
      this.grnList.filter(obj => {
        if (obj.grnType === LotType.WITH_PC) {
          this.grnIdList.push(obj);
        }
      });
    } else if (this.grntype === 'jobWorkChalan') {
      this.grnList.filter(obj => {
        if (obj.grnType === LotType.JOB_WORK_OTHER) {
          this.grnIdList.push(obj);
        }
      });
    } else if (this.grntype === 'materialTransfer') {
      this.grnList.filter(obj => {
        if (obj.grnType === LotType.MATERIAL_TRANSFER) {
          this.grnIdList.push(obj);
        }
      });
    }
    // this.get();
  }

  saveGrnId() {
    if (this.grnIdForm.valid) {
      console.log("list",this.grnList);
      console.log("form",this.grnIdForm.value)
      const grn = this.grnList.filter(obj => {
        return obj.grnId == this.grnIdForm.controls.grnId.value;
      });
      console.log("grns selectec",grn);
            if (grn && grn.length>0) {
        this.selectedGrnId.emit(grn[0]);
      }
    } else {
      this.toastr.error('Error! Invaid details.');
    }
  }

}
