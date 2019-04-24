import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ApiService } from '../../common/service/api/api.service';
import { Type3 } from './model/type3';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
@Component({
  selector: 'app-type3',
  templateUrl: './type3.component.html',
  styleUrls: ['./type3.component.css']
})
export class Type3Component implements OnInit {

  // tree
  treeData: TreeNode[];
  selectedFile: TreeNode;

  // gride
  treeLabel = 'Select Tree';

  data: Type3[];
  cols: any[];

  // modal data
  modalVisible = false;
  modalData: Type3 = new Type3();

  itemTable;
  checkUpdate = false;

  constructor(private apiService: ApiService
     ,private breadcrumbService: BreadcrumbService,public tService: TabService
    ) {
    // this.breadcrumbService.setItems([
    //   { label: 'MES UI' },
    //   { label: 'TYPE3' },
    // ]);

    //this.tService.setItems('MES UI-TYPE3');
  }
  ngOnInit() {
    const url = '/assets/demo/data/type3-tree.json';
    this.apiService.testGet(url).subscribe(
      (res) => { this.treeData = <TreeNode[]>res['data']; },
      (error) => { }
    );

    this.cols = [
      { field: 'col1', header: 'Col1' },
      { field: 'col2', header: 'Col2' },
      { field: 'col3', header: 'Col3' },
      { field: 'col4', header: 'Col4' },
      { field: 'col5', header: 'Col5' },
      { field: 'col6', header: 'Col6' }
    ];

  }

  // tree function
  nodeSelect(event) {
    this.treeLabel = event.node.label;
    this.itemTable = event.node.data;
    this.setGridData(event.node.data);
  }

  // gridfunction;
  setGridData(tableName) {

    const url = '/item/list';
    const options = {
      params: { itemTable: tableName }
    };
    this.apiService.get(url, options).subscribe(
      (res) => {
        this.data = <Type3[]>res;
      },
      (error) => {
        this.data = null;
      }
    );
  }
  addData() {
    // data reset
    this.modalData = new Type3();
    this.modalVisible = true;
  }
  onRowSelect(event) {
    this.modalData = Object.assign({}, event['data']);
    this.modalVisible = true;
    this.checkUpdate = true;
  }

  deleteData(obj) {

    const url = '/item/delete';
    obj['itemTable'] = this.itemTable;
    const data = { body: obj };
    this.apiService.delete(url, data).subscribe(
      (res) => {
        this.setGridData(this.itemTable);
      },
      (error) => { }
    );
  }

  // dialog function
  save() {
    if (!this.checkUpdate) {
      this.insert();
    } else {
      this.update();
    }

  }

  insert() {
    const url = '/item/insert';
    this.modalData.itemTable = this.itemTable;
    const data = this.modalData;
    this.apiService.post(url, data).subscribe(
      (res) => {
        this.setGridData(this.itemTable);
        this.modalData = new Type3();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update() {
    const url = '/item/update';
    this.modalData.itemTable = this.itemTable;
    const data = this.modalData;
    this.apiService.put(url, data).subscribe(
      (res) => {
        this.setGridData(this.itemTable);
        this.modalData = new Type3();
      },
      (error) => {
        console.log(error);
      }
    );
    this.checkUpdate = false;
  }

}
