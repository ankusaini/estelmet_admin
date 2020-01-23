import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Injectable
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user.model';
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateStruct,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';





/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '-';

  parse(value: string): NgbDateStruct {
    let result: NgbDateStruct = null;
    if (value) {
      let date = value.split(this.DELIMITER);
      result = {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    console.log("date2",result);
    return result;
  }

  format(date: NgbDateStruct): string {
    let result: string = null;
    if (date) {
      result = date.year + this.DELIMITER + date.month + this.DELIMITER + date.day;
    }
    console.log("date",result);
    
    return result;
  }
} 

@Component({
  selector: 'app-transport-details',
  templateUrl: './transport-details.component.html',
  styleUrls: ['./transport-details.component.scss'],
   providers: [
    
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class TransportDetailsComponent implements OnInit {
  @Output() transportData : EventEmitter<any> =new EventEmitter<any>(); 
  public supplierList: User[];
  public transportList: User[];
  public supplierIdList: any[] = [];
  public transportIdList: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    let supplierUrl="/users/getAllUsersByUserRoleAndStatus/SUPPLIER/APPROVED";
    this.userService.getAllUserByUserRoleAndStatus(supplierUrl).subscribe(data => {
      console.log("Data is: ",data);
      this.supplierList = data;
      // for(let supplier of this.supplierList){
      //   console.log("id: ", supplier['id']);
      //   this.supplierId.push(supplier['id']);
      // }
      if(this.supplierList && this.supplierList.length>0)
        {
      this.supplierIdList=this.supplierList.map(supplierObj=>supplierObj.id);
        }
    },
      error => {
        console.log(error);
      }
    );
    
    let transportUrl="/users/getAllUsersByUserRoleAndStatus/TRANSPORTER/APPROVED";
    this.userService.getAllUserByUserRoleAndStatus(transportUrl).subscribe(data => {
      console.log("Data is: ",data);
      this.transportList = data;
      // for(let transport of this.transportList){
      //   console.log("id: ", transport['id']);
      //   this.transportId.push(transport['id']);
      // }
      // console.log("list is: ", this.transportId);
      //we can use map to get a specific key
      if(this.transportList && this.transportList.length>0)
        {
          this.transportIdList=this.transportList.map(transportObj=>transportObj.id);
        }
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
    this.transportData.emit(this.transportDetails.value);
  }
}



