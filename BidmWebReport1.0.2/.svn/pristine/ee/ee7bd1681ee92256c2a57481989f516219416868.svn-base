import { Component, OnInit, ChangeDetectorRef,AfterViewInit } from '@angular/core';
import { Type2 } from './model/type2';
import { ApiService } from '../../common/service/api/api.service';
import { Grid } from '../../common/model/grid';

@Component({
  selector: 'app-type2',
  templateUrl: './type2.component.html',
  styleUrls: ['./type2.component.css']
})
export class Type2Component implements OnInit {

 // search data;
 rows = 5;
 totalRecords;
 rowsPerPageOptions;

 searchInfo = { searchOption: '', searchWord: '' };
 pageInfo = { pageRow: this.rows, startRow: 0 };

 option1;
 selectedOption1;

  // gride data;
  data: Grid[];
  selectedData;
  cols: any[];


  // gride child data;
  dataChild: Type2[];
  colsChild: any[];

  rowsChild;
  totalRecordsChild;
  rowsPerPageOptionsChild;


  constructor(private apiService: ApiService,private cdr: ChangeDetectorRef) {}

  ngOnInit() {

    this.initPage();

    this.cols = [
      { field: 'gridKey' },
      { field: 'col1', header: 'Col1' },
      { field: 'col2', header: 'Col2' },
      { field: 'col3', header: 'Col3' },
      { field: 'col4', header: 'Col4' },
      { field: 'col5', header: 'Col5' },
      { field: 'col6', header: 'Col6' },
      { field: 'col7', header: 'Col7' },
      { field: 'col8', header: 'Col8' },
      { field: 'col9', header: 'Col9' }
    ];

    this.colsChild = [
      { field: 'col1', header: 'Col1' },
      { field: 'col2', header: 'Col2' },
      { field: 'col3', header: 'Col3' },
      { field: 'col4', header: 'Col4' },
      { field: 'col5', header: 'Col5' },
      { field: 'col6', header: 'Col6' },
      { field: 'col7', header: 'Col7' },
      { field: 'col8', header: 'Col8' },
      { field: 'col9', header: 'Col9' }
    ];

    this.option1 = [
      { label: 'Select column', value: null },
      { label: 'col1', value: 'col1' },
      { label: 'col2', value: 'col2' },
      { label: 'col3', value: 'col3' },
      { label: 'col4', value: 'col4' },
      { label: 'col5', value: 'col5' },
      { label: 'col6', value: 'col6' },
      { label: 'col7', value: 'col7' },
      { label: 'col8', value: 'col8' },
      { label: 'col9', value: 'col9' }
    ];

  }

  initPage() {
    const url = '/grid/list';
    this.getPageCount();
    this.getTableInfo();
  }

  getPageCount() {
    const url = '/grid/list/count';
    this.apiService.get(url).subscribe(
      (res) => {
        this.totalRecords = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // page
  paginate(event) {
    console.log(event);
    this.pageInfo.pageRow = event['rows'];
    this.pageInfo.startRow = event['first'];
    this.getTableInfo();
    
  }
  ngAfterViewInit(){                                   
    this.cdr.detectChanges();
  }
  getTableInfo() {
    const url = '/grid/list';
    const options = {
      params: {
        searchOption: this.searchInfo['searchOption'],
        searchWord: this.searchInfo['searchWord'],
        pageRow: this.pageInfo['pageRow'],
        startRow: this.pageInfo['startRow']
      }
    };

    this.apiService.get(url, options).subscribe(
      (res) => {
        this.data = <Grid[]>res['data'];
        this.searchInfo.searchOption = res['searchOption'];
        this.searchInfo.searchWord = res['searchWord'];
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

  onSearch() {
    this.searchInfo.searchOption = this.selectedOption1;
    this.searchInfo.searchWord = '';
    this.getTableInfo();
  }

  onRowSelect(event) {
    this.initPageChild(event.data['gridKey']);
  }

  initPageChild(searchKey) {
    const url = '/grid/child/list';
    const options = {
      params: {
        searchKey: searchKey
      }
    };
    console.log(options);
    this.apiService.get(url, options).subscribe(
      (res) => {
        this.dataChild = <Grid[]>res;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
