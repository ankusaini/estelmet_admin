import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-processing-list',
  templateUrl: './processing-list.component.html',
  styleUrls: ['./processing-list.component.scss']
})
export class ProcessingListComponent implements OnInit {
  @Input() productProcessingList: any[];
  @Input() cart: boolean = false;
  public selectedProcessingList: any[] = [];
  @Output() selectedList: EventEmitter<any[]> = new EventEmitter<any[]>();
  
  constructor() { }

  ngOnInit() {
    
  }

  addToProcessingList(processing) {
    const index = this.selectedProcessingList.indexOf(processing);
    if(index == -1) {
      this.selectedProcessingList.push(processing);
      console.log("selected list is: ", this.selectedProcessingList);
      this.selectedList.emit(this.selectedProcessingList);
    }
    else {
      alert("Product already added!");
    }
  }

  removeFromProcessingList(processing) {
    const index = this.productProcessingList.indexOf(processing);
    console.log("removing: ", index);

    if(index != -1) {
      this.productProcessingList.splice(index, 1);
      console.log("selected list is: ", this.productProcessingList);
    }
  }

}
