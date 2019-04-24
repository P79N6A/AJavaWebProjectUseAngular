import { Component, OnInit } from '@angular/core';
import { BasicInfoItem } from './model/BasicInfoItem';
import { SelectItem } from 'primeng/api';
import { ApiService } from '../../../common/service/api/api.service';

@Component({
  selector: 'app-wip-move-processinfo',
  templateUrl: './wip-move-processinfo.component.html',
  styleUrls: ['./wip-move-processinfo.component.css']
})
export class WipMoveProcessinfoComponent implements OnInit {

  displayDialog: boolean; // 控制对话框是否显示

  info: BasicInfoItem = new BasicInfoItem(); // 对话框中数据

  selectedInfo: BasicInfoItem; // 选择行的数据

  newInfo: boolean; // 控制save按钮实现的具体逻辑

  deleteButton: boolean; // 控制是否显示delete按钮

  factorys: SelectItem[]; // 下拉框中的元素

  disabled: boolean; // 控制dialog中前三行输入是否禁用

  infos: BasicInfoItem[]; // 保存表中所有数据信息

  backupinfos: BasicInfoItem[]; // 过滤备份信息，以确保每次执行dtFilter()方法时，过滤的原始数组都是最开始的数据

  cols: any[];

  value: string = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.init();
    this.cols = [
      { field: 'factory', header: 'Factory' },
      { field: 'oper_code', header: 'Oper Code' },
      { field: 'oper_name', header: 'Oper Name' },
      { field: 'operation', header: 'Operation' },
      { field: 'operationdesc', header: 'Operation Desc' },
      { field: 'no', header: 'No' }
    ];

    this.factorys = [
      { label: '所有工厂', value: null },
      { label: 'ARRAY', value: 'ARRAY' },
      { label: 'CF', value: 'CF' },
      { label: 'CELL', value: 'CELL' },
      { label: 'MODULE', value: 'MODULE' },
      { label: 'S2MODULE', value: 'S2MODULE' }
    ];
  }

  init() {
    this.apiService.getAll('/sc/basic/list').subscribe(
      (res) => {
        this.infos = <BasicInfoItem[]>res; // 类型断言
        this.backupinfos = <BasicInfoItem[]>res;
      }
    );
  }

  initAndFilter(data) {
    this.apiService.getAll('/sc/basic/list').subscribe(
      (res) => {
        this.backupinfos = <BasicInfoItem[]>res;
        if (data !== null) {
          this.infos = this.backupinfos.filter((item) => {
            return (item.factory === data);
          });
        } else {
          this.infos = this.backupinfos;
        }
      }
    );
  }

  dtFilter(data) {
    this.value = data;
    this.infos = this.backupinfos;
    if (data != null) {
      this.infos = this.infos.filter((item) => {
        return (item.factory === data);
      });
    }
  }

  showDialogToAdd() {
    this.deleteButton = false;
    this.disabled = false;
    this.newInfo = true;
    this.info = new BasicInfoItem();
    this.displayDialog = true;
  }


  onRowSelect(event) {
    this.deleteButton = true;
    this.disabled = true;
    this.newInfo = false;
    this.info = this.cloneInfo(event.data);
    this.displayDialog = true;
  }

  cloneInfo(i: BasicInfoItem): BasicInfoItem {
    const info = new BasicInfoItem();
    // tslint:disable-next-line:forin
    for (const prop in i) {
      info[prop] = i[prop];
    }
    return info;
  }

  save() {

    // 如果是新数据就执行插入操作，否则执行更新操作
    if (this.newInfo) {
      this.apiService.post('/sc/basic/insert', this.info).subscribe(
        (res) => {
          this.initAndFilter(this.value);
        },
        (err) => {
          alert('插入数据失败,请重试！');
        }
      );
      this.displayDialog = false;
    } else {
      this.apiService.put('/sc/basic/update', this.info).subscribe(
        (res) => {
          this.initAndFilter(this.value);
        }
      );
      this.displayDialog = false;
    }
  }

  delete() {
    const deleteConfirm = confirm('确定删除当前的数据吗?');
    if (deleteConfirm) {
      const data = { body: this.selectedInfo };
      this.apiService.delete('/sc/basic/delete', data).subscribe(
        (res) => {
          this.initAndFilter(this.value);
        },
        (err) => {
          console.log(err);
        },
      );
      this.displayDialog = false;
    }
  }

}
