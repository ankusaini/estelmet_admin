import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from './chart/support-chart-data-1';
import { SupportChartData2} from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';
import { UserService } from "src/app/shared/services/user.service";
import { ToastrService } from "ngx-toastr";
import { User } from "src/app/shared/Models/user.model";

@Component({
  selector: "app-dash-default",
  templateUrl: "./dash-default.component.html",
  styleUrls: ["./dash-default.component.scss"]
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

  public latestUserList : User[]=[];

  //variable for customer
  public totalCustomerCount :number = 0;

  public approvedCustomerCount :number = 0;

  public pendingCustomerCount :number = 0;

  public rejectedCustomerCount :number = 0;


  //variable for Supplier
    public totalSupplierCount :number = 0;

  public approvedSupplierCount :number = 0;

  public pendingSupplierCount :number = 0;

  public rejectedSupplierCount :number = 0;

  // variable for Contractor

  public totalContractorCount :number = 0;

  public approvedContractorCount :number = 0;

  public pendingContractorCount :number = 0;

  public rejectedContractorCount :number = 0;

  // variable for Agent
 public totalAgentCount :number = 0;

  public approvedAgentCount :number = 0;

  public pendingAgentCount :number = 0;

  public rejectedAgentCount :number = 0;


  public CUSTOMER = "CUSTOMER";

  public SUPPLIER = "SUPPLIER";

  public CONTRACTOR = "CONTRACTOR";

  public AGENT = "AGENT";

   public TRANSPORTER = "TRANSPORTER";

  public APPROVED = "APPROVED";

  public REJECTED = "REJECTED";

  public PENDING = "PENDING";

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
    this.getAllUsers();
  }

  getAllUsers() {
    let url = "/users/getAllUsers";
    this.userService.getAllUsersForDashboard(url).subscribe(
      data => {
        this.userList = data;
        console.log(this.userList)
       if(this.userList && this.userList.length>0)
        {
        //customer section start
        this.totalCustomerCount = this.userList.filter(user => {
          return user.userRole == this.CUSTOMER;
        }).length;

        this.approvedCustomerCount = this.userList.filter(user => {
          return user.userRole == this.CUSTOMER && user.status == this.APPROVED;
        }).length;

        this.pendingCustomerCount = this.userList.filter(user => {
          return user.userRole == this.CUSTOMER && user.status == this.PENDING;
        }).length;

        this.rejectedCustomerCount = this.userList.filter(user => {
          return user.userRole == this.CUSTOMER && user.status == this.REJECTED;
        }).length;
        //customer section end


                //Supplier section start
        this.totalSupplierCount = this.userList.filter(user => {
          return user.userRole == this.SUPPLIER;
        }).length;

        this.approvedSupplierCount = this.userList.filter(user => {
          return user.userRole == this.SUPPLIER && user.status == this.APPROVED;
        }).length;

        this.pendingSupplierCount = this.userList.filter(user => {
          return user.userRole == this.SUPPLIER && user.status == this.PENDING;
        }).length;

        this.rejectedSupplierCount = this.userList.filter(user => {
          return user.userRole == this.SUPPLIER && user.status == this.REJECTED;
        }).length;
        //Supplier section end


              //Contractor section start
        this.totalContractorCount = this.userList.filter(user => {
          return user.userRole == this.CONTRACTOR;
        }).length;

        this.approvedContractorCount = this.userList.filter(user => {
          return user.userRole == this.CONTRACTOR && user.status == this.APPROVED;
        }).length;

        this.pendingContractorCount = this.userList.filter(user => {
          return user.userRole == this.CONTRACTOR && user.status == this.PENDING;
        }).length;

        this.rejectedContractorCount = this.userList.filter(user => {
          return user.userRole == this.CONTRACTOR && user.status == this.REJECTED;
        }).length;
        //Contractor section end


           //Agent section start
        this.totalAgentCount = this.userList.filter(user => {
          return user.userRole == this.AGENT;
        }).length;

        this.approvedAgentCount = this.userList.filter(user => {
          return user.userRole == this.AGENT && user.status == this.APPROVED;
        }).length;

        this.pendingAgentCount = this.userList.filter(user => {
          return user.userRole == this.AGENT && user.status == this.PENDING;
        }).length;

        this.rejectedAgentCount = this.userList.filter(user => {
          return user.userRole == this.AGENT && user.status == this.REJECTED;
        }).length;
        //Agent section end


        

        


        this.totalContractorCount = this.userList.filter(user => {
          return user.userRole == this.CONTRACTOR;
        }).length;

        }

      },
      error => {
        this.toastrService.error("Something went wrong");
      }
    );
  }
}
