import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user.model';


@Component({
  selector: 'app-transport-details',
  templateUrl: './transport-details.component.html',
  styleUrls: ['./transport-details.component.scss']
})
export class TransportDetailsComponent implements OnInit {
  @Output() TransportData : EventEmitter<any> =new EventEmitter<any>(); 
  public supplierList: User[];
  public transportList: User[];
  public supplierId: any[] = [];
  public transportId: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    let supplierUrl="/users/getAllUsersByUserRoleAndStatus/SUPPLIER/APPROVED";
    this.userService.getAllUserByUserRoleAndStatus(supplierUrl).subscribe(data => {
      console.log("Data is: ",data);
      this.supplierList = data;
      for(let supplier of this.supplierList){
        console.log("id: ", supplier['id']);
        this.supplierId.push(supplier['id']);
      }
      console.log("list is: ", this.supplierId);
      },
      error => {
        console.log(error);
      }
    );
    
    let transportUrl="/users/getAllUsersByUserRoleAndStatus/TRANSPORTER/APPROVED";
    this.userService.getAllUserByUserRoleAndStatus(transportUrl).subscribe(data => {
      console.log("Data is: ",data);
      this.transportList = data;
      for(let transport of this.transportList){
        console.log("id: ", transport['id']);
        this.transportId.push(transport['id']);
      }
      console.log("list is: ", this.transportId);
      },
      error => {
        console.log(error);
      }
    );
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
    delivery:new FormControl(""),
    licenceNumber: new FormControl("")
  });

  addTransportDetails() {
    console.log("data is: " ,this.transportDetails.value);
    this.TransportData.emit(this.transportDetails.value);
  }
}
