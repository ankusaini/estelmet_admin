import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pc-approval',
  templateUrl: './pc-approval.component.html',
  styleUrls: ['./pc-approval.component.css']
})
export class PcApprovalComponent implements OnInit {
  selectedTab: string = "PENDING";

  constructor() { }

  ngOnInit() {
  }

  onTabChange(tab) {
    // alert("tab "+ tab.activeId);
    if (tab && tab.activeId == "rejectedTab") {
      this.selectedTab = "PENDING";
    }
    if (tab && tab.activeId == "pendingTab") {
      this.selectedTab = "APPROVED";
    }
    if (tab && tab.activeId == "approvedTab") {
      this.selectedTab = "REJECTED";
    }
    console.log("selected tab", this.selectedTab);
  }

}
