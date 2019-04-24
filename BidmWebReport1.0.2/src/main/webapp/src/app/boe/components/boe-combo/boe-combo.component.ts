import { DataService } from './../../services/data.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-boe-combo',
  templateUrl: './boe-combo.component.html',
  styleUrls: ['./boe-combo.component.css']
})
export class BoeComboComponent implements OnInit, OnChanges {

  @Input() url: string;
  @Input() placeholder: string;
  @Input() label: string;

  items: SelectItem[];
  selectedItem: any;

  @Output('selectItem') change: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {    
    // this.dataService.getDataFromUrl(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    const url = changes['url'];
    if (url != null && url.currentValue != null) {
      this.url = url.currentValue;
      this.dataService.getDataFromUrl(this);
    } else {
      this.items = [];
    }
  }

  getOk(result: any) {
    this.items = result;
  }

  changed() {
    // this.change.emit('b4');
    this.change.emit(this.selectedItem);
  }

}
