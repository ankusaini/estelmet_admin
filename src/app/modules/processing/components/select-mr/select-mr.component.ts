import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/shared/Models/company.model.';
import { MachineDetail } from 'src/app/shared/Models/machineDetails.model';
import { Warehouse } from 'src/app/shared/Models/warehouse';
import { StaticDataService } from 'src/app/shared/services/data/staticData.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ProcessingService } from '../../service/processing.service';
import { ids } from 'src/app/shared/Models/ids.model';
import { UserDetail } from 'src/app/shared/Models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-mr',
  templateUrl: './select-mr.component.html',
  styleUrls: ['./select-mr.component.scss'],
    changeDetection : ChangeDetectionStrategy.OnPush

})
export class SelectMrComponent implements OnInit, OnChanges {
  selectedCmp: Company;
  @Input() processingType: string;
  @Input() showDropDown: string="";
  
  @Output() selectMrData: EventEmitter<any> = new EventEmitter<any>();

  warehouseData: Warehouse[];
  machineData: MachineDetail[];
  contractorData: UserDetail[];
  companyData: Company[];
  public Ids: any;

  productCategoryList: any[];
  companyList: any[];
  companyIdList: any[];
  warehouseList: any[];
  warehouseIdList: any[];
  machineDetailList: any[];
  machineDetailIdList: any[];
  contractorList: any[];
  contractorIdList: any[];
  processingTypes:any[]=['SHEARING','BLANKING','ASSORTING'];
  // customerCompany : any[];
  priorityList: any =
    {
      IMMEDIATE: 'Immediate',
      ONE_DAY: 'Within One Day', TWO_DAY: 'Within Two Day', THREE_DAY: 'Within Three Day', MORE_THEN_THREE_DAY: 'More Than Three Day'
    };

  selectMrIdForm: FormGroup;


  constructor(
    private staticData: StaticDataService,
    private processingService: ProcessingService,
    private toastr: ToastrService,
    private userService: UserService,private _cd : ChangeDetectorRef) {
      this.Ids = ids;
     }

  ngOnInit() {
    console.log(this.showDropDown);
   
    this.staticData.getAllProductCategory().subscribe(data => {

      this.productCategoryList = data.map(categoryObj => categoryObj.productCategory)
        .filter(categoryObj => categoryObj !== null);
    });

    const companyUrl = '/inventory/getAllCompany';
    this.processingService.getAllCompany(companyUrl).subscribe(data => {
      this.companyData = data;
      this.companyList = data.map(company => company.name)
        .filter(company => company !== null);
      this.companyIdList = data.map(company => company.id)
        .filter(company => company !== null);

    });

    const warehouseUrl = '/inventory/getAllWarehouse';
    this.processingService.getAllWarehouse(warehouseUrl).subscribe(data => {
      this.warehouseData = data;
      this.warehouseList = data.map(warehouse => warehouse.name)
        .filter(warehouse => warehouse !== null);
      this.warehouseIdList = data.map(warehouse => warehouse.id)
        .filter(warehouse => warehouse !== null);

    });

    const machineUrl = '/inventory/getAllMachineDetail';
    this.processingService.getMachineDetails(machineUrl).subscribe(data => {
      this.machineData = data;
      console.log("machine data",this.machineData);
      this.machineDetailList = data.map(machine => machine.machineName)
        .filter(machine => machine !== null);
      this.machineDetailIdList = data.map(machine => machine.id)
        .filter(machine => machine !== null);
    });

    

    this.userService.getAllUserByUserNameAndCompany('CONTRACTOR','APPROVED').subscribe(data => {
      this.contractorData = data;

      this.contractorList = data.map(contarctor => contarctor.firstName)
        .filter(contarctor => contarctor !== null);
      this.contractorIdList = data.map(contarctor => contarctor.userDetialId)
        .filter(contarctor => contarctor !== null);
    });

    this.selectMrIdForm = new FormGroup({
      jobWorkType: new FormControl('', [Validators.required]),
      productCategory: new FormControl('', [Validators.required]),
      contractorId: new FormControl('', [Validators.required]),
      contractorFirstName: new FormControl('', [Validators.required]),
      machineDetailId: new FormControl('', [Validators.required]),
      machineName: new FormControl('', [Validators.required]),
      companyId: new FormControl('', [Validators.required]),
      warehouseId: new FormControl('', [Validators.required]),
      priorityLevel: new FormControl('', [Validators.required]),
      
      // customerCompanyId: new FormControl("")
    });

     if(this.showDropDown=='true')
      {
        console.log("from co to pro");
        this.selectMrIdForm.addControl('processingType',new FormControl('', [Validators.required]));
      }
  }

  ngOnChanges() {
  }

  setContractorName(id) {
    this.contractorData.find(contractor => {
      if (contractor.userDetialId == id) {
        this.selectMrIdForm.patchValue({
          contractorFirstName: contractor.firstName
        });
      }
    });
  }

  setMachineName(id) {
    this.machineData.find(machine => {
      if (machine.id == id) {
        // alert(name);
        this.selectMrIdForm.patchValue({
          machineName: machine.machineName
        });
      }
    });

  }

  


  setContractorId(name) {
    this.contractorData.find(contractor => {
      if (contractor.firstName === name) {
        this.selectMrIdForm.patchValue({
          contractorId: contractor.userDetialId
        });
      }
    });
  }

  setMachineId(name) {
    this.machineData.find(machine => {
      if (machine.machineName === name) {
        this.selectMrIdForm.patchValue({
          machineDetailId: machine.id
        });
      }
    });
  }

 
   selectedCompany(value) {
    if(value!='')
      {
    let data = this.companyData.filter(element=>{
      return element.id == value
    })
    this.selectedCmp = data[0];
    this.warehouseList = this.staticData.getAllWarehouseByCompanyId(this.selectedCmp.id);
    console.log(this.warehouseList);
    this._cd.detectChanges();
  }
  else
    {
      this.selectedCmp=undefined;

    }
  }


  submitSelectMrId() {
    console.log(this.selectMrIdForm.value);
    if(this.selectMrIdForm.valid) {
      this.selectMrData.emit(this.selectMrIdForm.value);
    } else {
      this.toastr.error("Invalid Details!");
    }
  }

}
