import { Component, OnInit } from '@angular/core';
import { BasicInfoArOper } from './model/BasicInfoArOper';
import { ApiService } from '../../../common/service/api/api.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-array-oper',
  templateUrl: './array-oper.component.html',
  styleUrls: ['./array-oper.component.css']
})
export class ArrayOperComponent implements OnInit {

  displayDialog: boolean; // 控制对话框是否显示

  info: BasicInfoArOper = new BasicInfoArOper(); // 对话框中数据

  selectedInfo: BasicInfoArOper; // 选择行的数据

  newInfo: boolean; // 控制save按钮实现的具体逻辑

  deleteButton: boolean; // 控制是否显示delete按钮

  disabled: boolean; // 控制dialog中输入是否禁用

  infos: BasicInfoArOper[]; // 保存表中所有数据信息

  cols: any[];

  constructor(private apiService: ApiService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.init();
    this.cols = [
      { field: 'factory', header: 'Factory' },
      { field: 'oper_code', header: 'Oper Code' },
      { field: 'oper_desc', header: 'Oper Desc' },
      { field: 'move', header: 'MOve' },
      { field: 'wip', header: 'Wip' },
      { field: 'no', header: 'No' }
    ];
  }

  init() {
    this.apiService.getAll('/sc/basic/getarrayoper').subscribe(
      (res) => {
        this.infos = <BasicInfoArOper[]>res; // 类型断言
      }
    );
  }

  showDialogToAdd() {
    this.deleteButton = false;
    this.disabled = false;
    this.newInfo = true;
    this.info = new BasicInfoArOper();
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.deleteButton = true;
    this.disabled = true;
    this.newInfo = false;
    this.info = this.cloneInfo(event.data);
    this.displayDialog = true;
  }

  cloneInfo(i: BasicInfoArOper): BasicInfoArOper {
    const info = new BasicInfoArOper();
    // tslint:disable-next-line:forin
    for (const prop in i) {
      info[prop] = i[prop];
    }
    return info;
  }

  delete() {
    this.confirmationService.confirm({
      message: '确定删除当前数据?',
      header: '删除确认',
      icon: 'pi pi-info-circle',
      accept: () => {
        const data = { body: this.selectedInfo };
        this.apiService.delete('/sc/basic/deletearrayoper', data).subscribe(
          (res) => {
            this.init();
          },
          (err) => {
            alert('删除数据失败，请重试！');
          },
        );
      }
    });
    this.displayDialog = false;
  }

  save() {

    // 如果是新数据就执行插入操作，否则执行更新操作
    if (this.newInfo) {
      this.apiService.post('/sc/basic/insertarrayoper', this.info).subscribe(
        (res) => {
          this.init();
        },
        (err) => {
          alert('插入数据失败,请重试！');
        }
      );
      this.displayDialog = false;
    } else {
      this.apiService.put('/sc/basic/updatearrayoper', this.info).subscribe(
        (res) => {
          this.init();
        },
        (err) => {
          alert('更新数据失败,请重试！');
        }
      );
      this.displayDialog = false;
    }
  }

}
