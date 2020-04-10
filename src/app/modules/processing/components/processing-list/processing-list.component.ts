import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ids } from 'src/app/shared/Models/ids.model';

@Component({
  selector: 'app-processing-list',
  templateUrl: './processing-list.component.html',
  styleUrls: ['./processing-list.component.scss']
})
export class ProcessingListComponent implements OnInit {
  @Input() productProcessingList: any[];
  @Input() cart = false;
  @Input() processingType: string;
  public selectedProcessingList: any[] = [];
  public Ids: any;
  @Output() selectedList: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.Ids = ids;
  }

  ngOnInit() {

  }

  addToProcessingList(processing) {
    const index = this.selectedProcessingList.indexOf(processing);
    if (index === -1) {
      this.selectedProcessingList.push(processing);
      this.selectedList.emit(this.selectedProcessingList);
    } else {
      alert('Product already added!');
    }
  }

  removeFromProcessingList(processing) {
    const index = this.productProcessingList.indexOf(processing);
    if (index !== -1) {
      this.productProcessingList.splice(index, 1);
    }
  }

  navigateToEdit(id) {
    this.router.navigateByUrl('processing/editProcessing/' + id);
  }

}
