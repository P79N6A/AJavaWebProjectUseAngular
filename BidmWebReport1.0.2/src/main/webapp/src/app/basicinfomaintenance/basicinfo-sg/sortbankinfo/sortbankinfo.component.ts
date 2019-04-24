import { Component, OnInit } from '@angular/core';
import { SortBankInfoItem } from './model/SortBankInfoItem';
import { ApiService } from '../../../common/service/api/api.service';

@Component({
  selector: 'app-sortbankinfo',
  templateUrl: './sortbankinfo.component.html',
  styleUrls: ['./sortbankinfo.component.css']
})
export class SortbankinfoComponent implements OnInit {

  displayDialog: boolean; // 控制对话框是否显示

  info: SortBankInfoItem = new SortBankInfoItem(); // 对话框中数据

  selectedInfo: SortBankInfoItem; // 选择行的数据

  newInfo: boolean; // 控制save按钮实现的具体逻辑

  deleteButton: boolean; // 控制是否显示delete按钮

  infos: SortBankInfoItem[]; // 保存表中所有数据信息

  cols: any[];

  option;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.init();
    this.cols = [
      { field: 'productname', header: 'Product Name' },
      { field: 'arrayproductspecname', header: 'Array Product' },
      { field: 'cfproductspecname', header: 'Cf Product' },
      { field: 'cellproductspecname', header: 'Cell Product' },
      { field: 'cell_cfproductspecname', header: 'CellCf Product' },
      { field: 'arraymodeltype', header: 'Array Modeltype' },
      { field: 'cfmodeltype', header: 'Cf Modeltype' },
      { field: 'cellmodeltype', header: 'Cell Modeltype' },
      { field: 'no', header: 'No' },
      { field: 'flag', header: 'Flag' }
    ];

  }

  init() {
    this.apiService.getAll('/sc/sortBankBasicInfo/list').subscribe(
      (res) => {
        this.infos = <SortBankInfoItem[]>res; // 类型断言
      }
    );
  }

  showDialogToAdd() {
    this.deleteButton = false;
    this.newInfo = true;
    this.info = new SortBankInfoItem();
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.deleteButton = true;
    this.newInfo = false;
    this.info = this.cloneInfo(event.data);
    this.option = {
      params: {
        deleteKey: this.info.cellproductspecname
      }
    };
    this.displayDialog = true;
  }

  cloneInfo(i: SortBankInfoItem): SortBankInfoItem {
    const info = new SortBankInfoItem();
    // tslint:disable-next-line:forin
    for (const prop in i) {
      info[prop] = i[prop];
    }
    return info;
  }

  save() {

    if(this.info.cell_cfproductspecname != null){
        // 如果是新数据就执行插入操作，否则执行更新操作
    if (this.newInfo) {
      this.apiService.post('/sc/sortBankBasicInfo/insert', this.info).subscribe(
        (res) => {
          this.init();
        },
        (err) => {
          alert('插入数据失败,请重试！');
        }
      );
      this.displayDialog = false;
    } else {
      this.apiService.putBoth('/sc/sortBankBasicInfo/update', this.info, this.option).subscribe(
        (res) => {
          this.init();
        }
      );
      this.displayDialog = false;
    }
    }else{
      alert("请把必填项填完！");
    }

  
  }

  delete() {
    const deleteConfirm = confirm('确定删除当前的数据吗?');
    if (deleteConfirm) {
      const data = { body: this.selectedInfo };
      this.apiService.delete('/sc/sortBankBasicInfo/delete', data).subscribe(
        (res) => {
          this.init();
        },
        (err) => {
          alert('删除数据失败，请重试！');
        },
      );
      this.displayDialog = false;
    }
  }

}
