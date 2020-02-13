import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InventoryService } from '../../service/inventory.service';
import { Grn } from 'src/app/shared/Models/purchase.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-grn',
  templateUrl: './select-grn.component.html',
  styleUrls: ['./select-grn.component.scss']
})
export class SelectGrnComponent implements OnInit {
  @Output() selectedGrnId : EventEmitter<any> = new EventEmitter<any>();
  grnList: Grn[];
  grnIdList : any[];
  grnIdForm : FormGroup;    

  constructor(private inventoryService: InventoryService) { 
    
  }

  ngOnInit() {
    let url = "/purchase/getAllGrnByStatus/PENDING";
    this.inventoryService.getAllGrnByStatus(url).subscribe( data => {
        this.grnList = data.grnList;
        console.log("grnList is: ", this.grnList);
        this.grnIdList = this.grnList.map(grnObj => grnObj.grnId);
        });

        console.log("grnIdList is: ", this.grnIdList);
        this.grnIdForm = new FormGroup({
          grnId: new FormControl("Select GRN Id", [Validators.required, Validators.maxLength(9)])
        }); 

        
  }

  saveGrnId() {
    console.log("GrnIdValue is: ",this.grnIdForm.value);
    let grn = this.grnList.filter(obj=>{
      return obj.grnId==this.grnIdForm.controls.grnId.value;
    })
    if(grn)
      {
    this.selectedGrnId.emit(grn[0]);
  }
  }

}
