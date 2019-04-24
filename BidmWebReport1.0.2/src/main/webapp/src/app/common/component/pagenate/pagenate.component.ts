import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagenate',
  templateUrl: './pagenate.component.html',
  styleUrls: ['./pagenate.component.css']
})
export class PagenateComponent implements OnInit {

  rows;
  startRow;
  totalRecords;
  rowsPerPageOptions;

  @Output()
  pageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.rows = 5;
    this.startRow = 0;
    this.totalRecords = 10;
    this.rowsPerPageOptions = [5, 10, 15, 20];
    this.pageEventEmit();

  }

  paginate(event) {
    this.rows = event.rows;
    this.startRow = event.first;
    this.pageEventEmit();
    // this.pageEvent
  }
  pageEventEmit() {
    this.pageEvent.emit({
      pageInfo : { pageRow: this.rows, startRow: this.startRow }
    });
  }
}
