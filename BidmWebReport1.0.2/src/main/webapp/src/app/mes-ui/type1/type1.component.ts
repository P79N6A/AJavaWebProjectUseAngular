import { Component, OnInit, ChangeDetectorRef,Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Type1 } from './model/type1';
import { ApiService } from '../../common/service/api/api.service';


@Component({
  selector: 'app-type1',
  templateUrl: './type1.component.html',
  styleUrls: ['./type1.component.css']
})
export class Type1Component implements OnInit {

  // search data;
  rows = 8;
  totalRecords;
  rowsPerPageOptions;

  searchInfo = { searchOption: '', searchWord: '' };
  pageInfo = { pageRow: this.rows, startRow: 0 };

  option1;
  selectedOption1;

  // gride data;
  data: Type1[];
  selectedData: Type1[];
  cols: any[];

  // modal data
  modalVisible = false;
  modalData: Type1 = new Type1();


  constructor(private apiService: ApiService,private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.initPage();
    this.cols = [
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
        this.data = <Type1[]>res['data'];
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

  // gride function
  addData() {
    // data reset
    this.modalData = new Type1();
    this.modalVisible = true;
  }

  openDetail(obj, idx) {
    // object copy
    this.modalData = Object.assign({}, obj);
    this.modalVisible = true;
    return false;
  }

  // modal function
  save() {
    // update and insert api call & getallApi call;
    const key = this.modalData.gridKey;

    if (key == null || key === '') {
      const url = '/grid/create';
      this.apiService.post(url, this.modalData).subscribe(
        (res) => {
          this.modalVisible = false;
          this.initPage();
          // this.modalData = new Chart();
        },
        (error) => {
          console.log(error);
        }
      ); // api
    } else {
      console.log('update');
      const url = '/grid/update';
      this.apiService.put(url, this.modalData).subscribe(
        (res) => {
          this.modalVisible = false;
          this.initPage();
          // this.modalData = new Chart();
        },
        (error) => {
          console.log(error);
        }
      ); // api
    }
  }

  deleteSelectedData() {
    this.actionDelete(this.selectedData);
  }

  deleteData(obj) {
    this.modalData = Object.assign({}, obj);
    const arrayData = new Array<Type1>();
    arrayData.push(this.modalData);
    this.actionDelete(arrayData);

  }

  actionDelete(arrayData) {
    const url = '/grid/delete';
    const data = { body: arrayData };
    this.apiService.delete(url, data).subscribe(
      (res) => {
        this.initPage();
        this.selectedData = null;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
