import { Injectable } from '@angular/core';
import { SpsModel } from '../model/sps-model';

@Injectable()
export class SpsService { // Searching And Paging And Sorting Service

  page = new SpsModel;
   // page
   rows = 3;
   rowsPerPageOptions = ['3', '5', '10', '15', '20'];

  constructor() {
    this.initSPS();
   }

  // defualt setting
  initSPS() {
    this.page.rows = this.rows;
    this.page.rowsPerPageOptions = this.rowsPerPageOptions;
    this.page.pageRow = this.rows;
    this.page.nowPage = 1;
    return this.page;
  }

  // page
  paginate(rows, page) {
    // DB쿼리로 변경해야함.
    this.page.pageRow = rows;
    this.page.nowPage = page + 1;

  }

  getPageRows(gridName) {
    this.page.gridName = gridName;
    this.page.startRow = '';
    this.page.endRow = '';
    return this.page;
  }




}
