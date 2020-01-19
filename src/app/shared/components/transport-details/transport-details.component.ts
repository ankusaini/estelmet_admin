import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-transport-details',
  templateUrl: './transport-details.component.html',
  styleUrls: ['./transport-details.component.scss']
})
export class TransportDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


    public transportDetails = new FormGroup({ 
  
    transportId: new FormControl("",[Validators.required]),
    supplierId: new FormControl("",[Validators.required]),
    expectedDate: new FormControl("",[Validators.required]),
    containerNumber: new FormControl("",[Validators.required]),
    grossWt: new FormControl("",[Validators.required]),
    netWt: new FormControl("",[Validators.required]),
    materialDescription: new FormControl("",[Validators.required]),
    coilsBundle: new FormControl("",[Validators.required]),
    lorryNumber: new FormControl("",[Validators.required]),
    mode:new FormControl(""),
    delivery:new FormControl("")
  });
}
