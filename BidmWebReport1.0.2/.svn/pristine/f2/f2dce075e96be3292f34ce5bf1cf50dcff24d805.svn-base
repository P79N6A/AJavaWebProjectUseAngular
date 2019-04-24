import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-boe-grid',
  templateUrl: './boe-grid.component.html',
  styleUrls: ['./boe-grid.component.css']
})
export class BoeGridComponent implements OnInit {
  cars;
  coment;
  // rowGroupMetadata: any;
  constructor(private http: HttpClient,private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: 'BOE UI' },
      { label: 'GRID' },
    ]);

    //this.tService.setItems('BOE UI-GRID');
   }

  ngOnInit() {
    this.http.get('assets/demo/data/cars-small.json').subscribe(
      (data) => {
        this.cars = data['data'];
      }
    );
  }

}
