import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/data/static-data.service';
import { ProcessingService } from '../../service/processing.service';
import { UserService } from 'src/app/shared/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Warehouse } from 'src/app/shared/Models/warehouse';
import { MachineDetail } from 'src/app/shared/Models/machineDetails.model';
import { Company } from 'src/app/shared/Models/company.model.';
import { User } from 'src/app/shared/Models/user.model';

@Component({
  selector: 'app-select-mr',
  templateUrl: './select-mr.component.html',
  styleUrls: ['./select-mr.component.scss']
})
export class SelectMrComponent implements OnInit, OnChanges {
  @Input() processingType: string;
  @Output() selectMrData: EventEmitter<any> = new EventEmitter<any>();

  warehouseData: Warehouse[];
  machineData: MachineDetail[];
  contractorData: User[];
  companyData: Company[];

  productCategoryList: any[];
  companyList: any[];
  companyIdList: any[];
  warehouseList: any[];
  warehouseIdList: any[];
  machineDetailList: any[];
  machineDetailIdList: any[];
  contractorList: any[];
  contractorIdList: any[];
  // customerCompany : any[];
  priorityList : any[] = ['Immidiate', 'Within One Day', 'Within Two Day', 'Within Three Day', 'More Than Three Day'];

  selectMrIdForm: FormGroup;

  constructor(private staticData: StaticDataService,
              private processingService: ProcessingService,
              private userService: UserService) { }

  ngOnInit() {
    this.staticData.getAllProductCategory().subscribe(data => {
      this.productCategoryList= data.map(categoryObj => categoryObj.productCategory)
        .filter(categoryObj => categoryObj!== null);
      console.log("categoryList: ", this.productCategoryList);
    });

    let companyUrl = "/inventory/getAllCompany";
    this.processingService.getAllCompany(companyUrl).subscribe(data => {
      this.companyData = data;
      this.companyList = data.map(company => company.name)
        .filter(company => company !== null);
      this.companyIdList = data.map(company => company.id)
        .filter(company => company !== null);
      console.log(this.companyList);
      console.log(this.companyIdList);
    });
    
    let warehouseUrl = "/inventory/getAllWarehouse";
    this.processingService.getAllWarehouse(warehouseUrl).subscribe( data => {
      this.warehouseData = data;
      this.warehouseList = data.map(warehouse => warehouse.name)
        .filter( warehouse => warehouse !== null);
      this.warehouseIdList = data.map(warehouse => warehouse.id)
        .filter(warehouse => warehouse !== null);
      console.log(this.warehouseList);
      console.log(this.warehouseIdList);
    });

    let machineUrl = "/inventory/getAllMachineDetail";
    this.processingService.getMachineDetails(machineUrl).subscribe(data => {
      this.machineData = data;
      this.machineDetailList = data.map(machine => machine.machineName)
        .filter(machine => machine !== null);
      this.machineDetailIdList = data.map(machine => machine.machineDetailId)
      .filter(machine => machine !== null);
    console.log(this.machineDetailList);
    console.log(this.machineDetailIdList);
    });

    let contractorUrl = "/users/getAllUsersByUserRoleAndStatus/CONTRACTOR/APPROVED";
    this.userService.getAllUserByUserRoleAndStatus(contractorUrl).subscribe( data =>{
      this.contractorData = data;
      this.contractorList = data.map(contarctor => contarctor.firstName)
        .filter(contarctor => contarctor!==null);
      this.contractorIdList = data.map(contarctor => contarctor.id)
        .filter(contarctor => contarctor!==null);
      console.log(this.contractorList);
      console.log(this.contractorIdList);
    });
  
    // let customerUrl = "/users/getAllUsersByUserRoleAndStatus/CUSTOMER/APPROVED";
    // this.userService.getAllUserByUserRoleAndStatus(customerUrl).subscribe(data => {
    //   this.customerCompany = data.map(customer => customer.firstName)
    //     .filter(customer => customer!==null);
    //   console.log(this.customerCompany);
    // });

    this.selectMrIdForm = new FormGroup({
      jobWorkType: new FormControl("", [Validators.required]),
      productCategory: new FormControl("", [Validators.required]),
      contractorId: new FormControl("", [Validators.required]),
      contractorFirstName: new FormControl("", [Validators.required]),
      machineDetailId: new FormControl("", [Validators.required]),
      machineName: new FormControl("", [Validators.required]),
      companyId: new FormControl("", [Validators.required]),
      companyName: new FormControl("", [Validators.required]),
      warehouseId: new FormControl("", [Validators.required]),
      warehouseName: new FormControl("",[Validators.required]),
      priorityLevel: new FormControl("", [Validators.required]),
      // customerCompanyId: new FormControl("")
    });

  }

  ngOnChanges() {
    console.log(this.processingType);
  }

  setContractorName(id) {
    this.contractorData.find(contractor => {
      if(contractor.id == id) {
        this.selectMrIdForm.patchValue({
          contractorFirstName : contractor.firstName
        });
      }
    });
  }

  setMachineName(id) {
    this.machineData.find(machine => {
      if(machine.machineDetailId == id) {
        // alert(name);
        this.selectMrIdForm.patchValue({
          machineName : machine.machineName
        });
      }
    });

  }

  setCompanyName(id) {
    this.companyData.find(company => {
      if(company.id == id) {
          this.selectMrIdForm.patchValue({
          companyName: company.name
        });
      }
    });
  }

  setwarehouseName(id) {
    this.warehouseData.find(warehouse => {
      if(warehouse.id == id) {
        this.selectMrIdForm.patchValue({
          warehouseName: warehouse.name
        });
      }
    });
  }

  setContractorId(name) {
    this.contractorData.find(contractor => {
      if(contractor.firstName == name) {
        this.selectMrIdForm.patchValue({
          contractorId: contractor.id
        });
      }
    });
  }
  
  setMachineId(name) {
    this.machineData.find(machine => {
      if(machine.machineName == name) {
        this.selectMrIdForm.patchValue({
          machineDetailId: machine.machineDetailId
        });
      }
    });
  }

  setCompanyId(name) {
    this.companyData.find(company => {
      if(company.name == name) {
        this.selectMrIdForm.patchValue({
          companyId: company.id
        });
      }
    });
  }

  setwarehouseId(name) {
    this.warehouseData.find(warehouse => {
      if(warehouse.name == name) {
        this.selectMrIdForm.patchValue({
          warehouseId: warehouse.id
        });
      }
    });
  }

  submitSelectMrId() {
    console.log(JSON.stringify(this.selectMrIdForm.value));
    this.selectMrData.emit(this.selectMrIdForm.value);
  }

}
