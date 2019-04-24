import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { SelectItem } from 'primeng/api';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-arraymoveshishi',
  templateUrl: './arraymoveshishi.component.html',
  styleUrls: ['./arraymoveshishi.component.css']
})
export class ArraymoveshishiComponent implements OnInit {

  // 保存1-24小时及Total
  hours = ['TTL', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17',
    '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06'];


  proTypes: SelectItem[];

  tableData;

  backupRes;

  proType;

  standard = 9;

  comments = [];

  frozenCols: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {


    this.frozenCols = [
      { field: ['oper_desc', 'oper_code'], header: 'Operation' }
    ];

    this.apiService.getAll('/sc/arrayrpt/movess').subscribe(
      (res) => {
        this.backupRes = res;

        this.setProTypes(res);
        this.proType = 'Production';
        this.tableData = this.filter(res, 'productiontype', this.proType);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.apiService.getAll('/sc/keyin/getcomment').subscribe(
          (res) => {
            this.setComments(this.filter(res, 'productspecname', this.proType));
          }
        );
      }
    );

  }


  setComments(data) {
    this.comments = [];
    for (let i = 0; i < this.tableData.length; i++) {
      const element = this.tableData[i];
      for (const obj of data) {
        if (element.oper_code === obj.item) {
          this.comments[i] = obj.remark;
        }
      }
    }
  }

  setProTypes(data) {
    const types = [];
    this.proTypes = [];
    for (const obj of data) {
      if (!types.includes(obj.productiontype)) {
        types.push(obj.productiontype);
        this.proTypes.push({ label: obj.productiontype, value: obj.productiontype });
      }
    }
  }

  filter(data, prop, key): Array<any> {
    return data.filter((obj) => {
      return (obj[prop] === key);
    });
  }

  select() {
    this.tableData = this.filter(this.backupRes, 'productiontype', this.proType);
    this.apiService.getAll('/sc/keyin/getcomment').subscribe(
      (res) => {
        this.setComments(this.filter(res, 'productspecname', this.proType));
      }
    );
  }


  saveComment(type, code, index) {
    const option = {
      item: code,
      remark: this.comments[index],
      productspecname: type
    };

    this.apiService.post('/sc/keyin/armovess', option).subscribe(
      () => { },
      (err) => {
        alert('更新数据失败，请重试！');
      }
    );
  }


  exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('armovess'));
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'Array Move看板(实时)');
  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + '.xls');
  }

}
