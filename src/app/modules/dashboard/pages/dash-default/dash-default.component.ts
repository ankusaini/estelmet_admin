import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/Models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { SupportChartData1 } from './chart/support-chart-data-1';
import { SupportChartData2 } from './chart/support-chart-data-2';

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})
export class DashDefaultComponent implements OnInit {


  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;


  public userList: User[] = [];

  public latestUserList: User[] = [];

  // variable for customer
  public totalCustomerCount = 0;

  public approvedCustomerCount = 0;

  public pendingCustomerCount = 0;

  public rejectedCustomerCount = 0;


  // variable for Supplier
  public totalSupplierCount = 0;

  public approvedSupplierCount = 0;

  public pendingSupplierCount = 0;

  public rejectedSupplierCount = 0;

  // variable for Contractor

  public totalContractorCount = 0;

  public approvedContractorCount = 0;

  public pendingContractorCount = 0;

  public rejectedContractorCount = 0;

  // variable for Agent
  public totalAgentCount = 0;

  public approvedAgentCount = 0;

  public pendingAgentCount = 0;

  public rejectedAgentCount = 0;


  public CUSTOMER = 'CUSTOMER';

  public SUPPLIER = 'SUPPLIER';

  public CONTRACTOR = 'CONTRACTOR';

  public AGENT = 'AGENT';

  public TRANSPORTER = 'TRANSPORTER';

  public APPROVED = 'APPROVED';

  public REJECTED = 'REJECTED';

  public PENDING = 'PENDING';

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
  }

  ngOnInit() {
    this.getCountByUserRole('CUSTOMER');
     this.getCountByUserRole('SUPPLIER');
      this.getCountByUserRole('TRANSPORTER');
       this.getCountByUserRole('AGENT');
  }

  getCountByUserRole(role) {
    this.userService.getCountByUserRole(role).subscribe(data => {
      if(role=='CUSTOMER')
      this.totalCustomerCount=data.data;
      if(role=='SUPPLIER')
      this.totalSupplierCount=data.data;
      if(role=='TRANSPORTER')
      this.totalContractorCount=data.data;
      if(role=='AGENT')
      this.totalAgentCount=data.data;
    }, error => {
      console.log("erorr");
    })
  }

  getAllUserByRole(role)
  {

  }

  getAllUserByRoleAndStatus(role,status)
  {
    
  }
  // getAllUsers() {
  //   const url = '/users/getAllUsers';
  //   this.userService.getAllUsersForDashboard(url).subscribe(
  //     data => {
  //       this.userList = data;
  //       if (this.userList && this.userList.length > 0) {
  //         this.totalCustomerCount = this.userList.filter(user => {
  //           return user.userRole === this.CUSTOMER;
  //         }).length;

  //         this.approvedCustomerCount = this.userList.filter(user => {
  //           return user.userRole === this.CUSTOMER && user.status === this.APPROVED;
  //         }).length;

  //         this.pendingCustomerCount = this.userList.filter(user => {
  //           return user.userRole === this.CUSTOMER && user.status === this.PENDING;
  //         }).length;

  //         this.rejectedCustomerCount = this.userList.filter(user => {
  //           return user.userRole === this.CUSTOMER && user.status === this.REJECTED;
  //         }).length;
  //         // customer section end


  //         // Supplier section start
  //         this.totalSupplierCount = this.userList.filter(user => {
  //           return user.userRole === this.SUPPLIER;
  //         }).length;

  //         this.approvedSupplierCount = this.userList.filter(user => {
  //           return user.userRole === this.SUPPLIER && user.status === this.APPROVED;
  //         }).length;

  //         this.pendingSupplierCount = this.userList.filter(user => {
  //           return user.userRole === this.SUPPLIER && user.status === this.PENDING;
  //         }).length;

  //         this.rejectedSupplierCount = this.userList.filter(user => {
  //           return user.userRole === this.SUPPLIER && user.status === this.REJECTED;
  //         }).length;
  //         // Supplier section end


  //         // Contractor section start
  //         this.totalContractorCount = this.userList.filter(user => {
  //           return user.userRole === this.CONTRACTOR;
  //         }).length;

  //         this.approvedContractorCount = this.userList.filter(user => {
  //           return user.userRole === this.CONTRACTOR && user.status === this.APPROVED;
  //         }).length;

  //         this.pendingContractorCount = this.userList.filter(user => {
  //           return user.userRole === this.CONTRACTOR && user.status === this.PENDING;
  //         }).length;

  //         this.rejectedContractorCount = this.userList.filter(user => {
  //           return user.userRole === this.CONTRACTOR && user.status === this.REJECTED;
  //         }).length;
  //         // Contractor section end
  //         // Agent section start
  //         this.totalAgentCount = this.userList.filter(user => {
  //           return user.userRole === this.AGENT;
  //         }).length;

  //         this.approvedAgentCount = this.userList.filter(user => {
  //           return user.userRole === this.AGENT && user.status === this.APPROVED;
  //         }).length;

  //         this.pendingAgentCount = this.userList.filter(user => {
  //           return user.userRole === this.AGENT && user.status === this.PENDING;
  //         }).length;

  //         this.rejectedAgentCount = this.userList.filter(user => {
  //           return user.userRole === this.AGENT && user.status === this.REJECTED;
  //         }).length;

  //         this.totalContractorCount = this.userList.filter(user => {
  //           return user.userRole === this.CONTRACTOR;
  //         }).length;

  //       }

  //     },
  //     () => {
  //       this.toastrService.error('Something went wrong');
  //     }
  //   );
  // }
}
