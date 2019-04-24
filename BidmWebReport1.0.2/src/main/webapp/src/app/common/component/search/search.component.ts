import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  option1;
  option2;
  option3;
  option4;

  selectedOption1;
  selectedOption2;
  selectedOption3;
  selectedOption4;

  @Output()
  searchEvent = new EventEmitter();

  keyword = null;

  constructor() { }

  ngOnInit() {
    this.option1 = [
      { label: 'option1', value: 'option1' },
      { label: 'option2', value: 'option2' },
      { label: 'option3', value: 'option3' },
      { label: 'option4', value: 'option4' }
    ];
  }

  setkeyword() {
    this.searchEvent.emit({
      searchOption: this.selectedOption1
    });
  }
}
