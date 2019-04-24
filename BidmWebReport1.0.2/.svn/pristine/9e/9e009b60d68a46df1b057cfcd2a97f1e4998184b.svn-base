import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { ListModel } from './model/list-model';
import { ApiService } from '../../common/service/api/api.service';
import { SpsService } from '../../common/service/sps.service';
import { SpsModel } from '../../common/model/sps-model';
import { Chart } from '../../common/model/chart';
// import { serializePath, mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { SortEvent } from 'primeng/api';
// import { Router } from '@angular/router';
import { FileUploadService } from './service/file-upload.service';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
@Component({
  selector: 'app-boe-list',
  templateUrl: './boe-list.component.html',
  styleUrls: ['./boe-list.component.css']
})
export class BoeListComponent implements OnInit, AfterViewInit {

  page = new SpsModel();

  fileName :string;
  // search data;
  rows = 5;
  totalRecords;
  rowsPerPageOptions;

  // search data;
  searchWord = null;
  option1 = null;
  selectedOption1 = null;
  searchDate: Date;

  // sort
  sortCol = 'chartKey';
  sortType = 'desc';

  searchInfo = { searchOption: '', searchWord: '' , searchDate: '' };
  pageInfo = { pageRow: this.rows, startRow: 0 };
  sortInfo = { sortCol: this.sortCol, sortType: this.sortType };

  // gride data;
  data: Chart[];
  selectedData;
  cols: any[];

  tootipData: Chart[];

  option;

  // grid test
  totalData: ListModel[];

  // modal data
  modalVisible = false;
  modalData: Chart = new Chart();

  inputSwitchChecked = true;

  @ViewChildren('dtTr') dtTr: QueryList<ElementRef>;

  constructor(private apiService: ApiService, private spsService: SpsService, private file: FileUploadService,
    private breadcrumbService: BreadcrumbService, public tService: TabService) {
      this.breadcrumbService.setItems([
        { label: 'BOE UI' },
        { label: 'LIST' },
      ]);
  
      //this.tService.setItems('BOE UI-LIST');
     }

  ngAfterViewInit() {

  }
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

  getTableInfo() {
    const url = '/boeui/list';
    const options = {
      params: {
        searchOption: this.searchInfo['searchOption'],
        searchWord: this.searchInfo['searchWord'],
        pageRow: this.pageInfo['pageRow'],
        startRow: this.pageInfo['startRow'],
        sortCol : this.sortInfo['sortCol'],
        sortType : this.sortInfo['sortType']
      }
    };

    this.apiService.get(url, options).subscribe(
      (res) => {
        this.data = <Chart[]>res['data'];
        this.totalRecords = res['totalRecords'][0].totalRecords;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // getTotpage
  getPageCount() {
    const url = '/boeui/list/count';
    this.apiService.get(url).subscribe(
      (res) => {
        this.totalRecords = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  resetpageAndSearch() {
    this.searchWord = '';
    this.selectedOption1 = null;
    this.searchInfo.searchWord = this.searchWord;
    this.searchInfo.searchOption = this.selectedOption1;
    this.sortCol = 'chartKey';
    this.sortType = 'desc';
    this.pageInfo.startRow = 0;
    this.pageInfo.pageRow = 5;
  }

  paginate(event) {
    this.pageInfo.pageRow = event['rows'];
    this.pageInfo.startRow = event['first'];
    this.getTableInfo();
  }

  getTimeStamp() {
    const date = this.searchDate;
    let searchDate = null;
    if (date) {
      const yyyy = date.getFullYear().toString();
      const mm = (date.getMonth() + 1).toString();
      const dd = (date.getDate()).toString();
      searchDate = yyyy + '-' + (mm[1] ? mm : '0' + mm[0]) + '-' + (dd[1] ? dd : '0' + dd[0]);
    }
    return searchDate;

  }
  onChangedOption() {
  }

  onSearch() {
    this.searchInfo.searchWord = this.searchWord;
    this.searchInfo.searchOption = this.selectedOption1;
    this.pageInfo.pageRow = 5;
    this.pageInfo.startRow = 0;
    this.getTableInfo();
  }

  // 검색조건 셋팅
  setSearch() {
    const search = new Object();
    const paramsMap = new Map();

    this.option = {
      params:
        {
          searchWord: this.searchWord,
          searchOpt: this.selectedOption1,
          searchDate: this.getTimeStamp(),
          sortCol: this.sortCol,
          sortType: this.sortType
        }
    };
    this.spsService.page.search = search;
  }

  customSort(event: SortEvent) {
    // 1: asc, -1 desc
    this.sortCol = event['field'];
    this.sortType = ((event['order'] === 1) ? 'asc' : 'desc');
    this.onSearch();
  }

  // dialog function
  addData() {
    this.modalData = new Chart();
    this.modalVisible = true;
  }

  openDetail(obj, idx) {
    // object copy
    this.modalData = Object.assign({}, obj);
    this.modalVisible = true;
    return false;
  }

  save() {
    const key = this.modalData.chartKey;
    if (key == null || key === '') {
      const url = '/boeui/create';
      this.apiService.post(url, this.modalData).subscribe(
        (res) => {
          this.modalVisible = false;
          this.resetpageAndSearch();
          this.getTableInfo();
        },
        (error) => {
          console.log(error);
        }
      ); // api
    } else {
      const url = '/boeui/update';
      this.apiService.put(url, this.modalData).subscribe(
        (res) => {
          this.modalVisible = false;
          this.resetpageAndSearch();
          this.getTableInfo();
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
    const arrayData = new Array<Chart>();
    arrayData.push(this.modalData);
    this.actionDelete(arrayData);
  }

  actionDelete(arrayData) {
    const url = '/boeui/delete';
    const data = { body: arrayData };
    this.apiService.delete(url, data).subscribe(
      (res) => {
        this.resetpageAndSearch();
        this.getTableInfo();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  excelDown() {
    const url = '/excel/download';
    const params = {
      searchOption: this.searchInfo['searchOption'],
      searchWord: this.searchInfo['searchWord'],
      searchDate: '',
      pageRow: this.pageInfo['pageRow'],
      startRow: this.pageInfo['startRow'],
      sortCol : this.sortInfo['sortCol'],
      sortType : this.sortInfo['sortType']
    };
    const data = { header: this.cols, content: this.data, params: params};

    this.excelDownApi(url, data);
  }

  forntExcelDown() {
    const url = '/excel/download/front';
    const data = { header: this.cols, content: this.data};

    this.excelDownApi(url, data);
  }

  excelDownApi(url, data) {
    this.file.getExcelDownLoad(url, data).subscribe(
      (res) => {
        const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        if (navigator.msSaveBlob) {
          // IE 10+
          navigator.msSaveBlob(blob, 'excelFile.xls');
        } else {
          const link = document.createElement('a');
          // Browsers that support HTML5 download attribute
          if (link.download !== undefined) {
            const bloburl = URL.createObjectURL(blob);
            link.setAttribute('href', bloburl);
            link.setAttribute('download', 'excelFile.xls');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }
      },
      (error) => { console.log(error); },

    );
  }
  
  onFileDownload(){
    window.location.href= this.file.getDownloadUrl() + this.fileName;
  }

}
