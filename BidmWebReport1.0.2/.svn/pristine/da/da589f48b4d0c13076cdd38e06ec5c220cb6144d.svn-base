import { Component, OnInit } from '@angular/core';
import { Spec } from './model/spec';
import { ApiService } from 'app/common/service/api/api.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { FileUploadService } from 'app/boe-ui/boe-list/service/file-upload.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-arbankcellinplan',
  templateUrl: './arbankcellinplan.component.html',
  styleUrls: ['./arbankcellinplan.component.css']
})
export class ArbankcellinplanComponent implements OnInit {

  // 下面定义的是选择条件的变量
  selectedDate1: Date; // 开始日期
  selectedDate2: Date; // 结束日期

  data: Spec[];
  pageData: Spec[];
  cols: any[];
  showFlag = false;

  uploadedFiles: any[] = [];

  rows = 10;
  totalRecords;
  rowsPerPageOptions = [10, 50, 100];
  pageInfo = { pageRow: this.rows, startRow: 0 };


  constructor(private apiService: ApiService,
    public tService: TabService,
    private file: FileUploadService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.cols = [
      { field: 'factory', header: 'Factory' },
      { field: 'datename', header: 'Datename' },
      { field: 'productspecname', header: 'Productspecname' },
      { field: 'qty', header: 'Qty' }
    ];
  }

  // 这个方法就是一个模板的方法，不知道为什么这样写，但是就是这样写
  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  // 1.下面这个是查询数据的方法 ： 根据 起始  日期
  searchData() {

    if (this.selectedDate1 == null || this.selectedDate2 == null) {
      alert('请选择日期！');
    } else {

      const date1 = this.getTimeStr(this.selectedDate1);
      const date2 = this.getTimeStr(this.selectedDate2);

      const option = {
        params: {
          datestart: date1,
          dateend: date2
        }
      };
      const search_url = '/importplanar/searchPlan';
      this.apiService.get(search_url, option).subscribe(
        (res) => {
          if (res.length === 0) {
            alert('未查询到数据！');
          } else {
            this.data = <Spec[]>res; // 返回的这个结果集是一条一条数据的数组
            this.totalRecords = this.data.length;
            // 下面这一行实现的是一个翻页的功能，根据每一页行数显示对应行数表格的是数据信息
            this.pageData = this.data.slice(this.pageInfo.startRow, this.pageInfo.startRow + this.pageInfo.pageRow);
          }
        },
        (error) => { console.log(error); }
      );
    }
  }
  // 2.格式化 时间字符串的 方法
  getTimeStr(date: Date): string {
    let timestr = '';
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let monthstr = '';
    let daystr = '';
    if (month < 10) {
      monthstr = '0' + month;
    } else {
      monthstr = '' + month;
    }

    if (day < 10) {
      daystr = '0' + day;
    } else {
      daystr = '' + day;
    }
    timestr = year + monthstr + daystr;
    return timestr;
  }


  // 1.上传文件的方法：
  onBasicUpload(event) {
    const response_ = JSON.parse(event.xhr.response);
    const localPath = response_.localPath;
    const options = {
      params: {
        localPath: localPath
      }
    };
    this.apiService.get('/importplanar/excelUpload1', options).subscribe(
      (res) => {
        this.data = <Spec[]>res; // 返回的这个结果集是一条一条数据的数组
        this.totalRecords = this.data.length;
        // 下面这一行实现的是一个翻页的功能，根据每一页行数显示对应行数表格的是数据信息
        this.pageData = this.data.slice(this.pageInfo.startRow, this.pageInfo.startRow + this.pageInfo.pageRow);
        this.showFlag = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // 保存数据的方式 ：
  saveExcelImportInfo() {
    const options = {
      'ArImportPlanVOList': this.data // 传到服务端的参数就是 导入进来的数据
    };
    this.apiService.put('/importplanar/saveImportData', options).subscribe(
      (res) => {
        this.showFlag = false;
        this.addSingle('Data has been inserted into database');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onFileDownload() {
    window.location.href = this.file.getDownloadUrl() + 'template/spec_tmp.xlsx';
  }

  addSingle(msg) {
    this.messageService.add({ severity: 'success', summary: 'save success', detail: msg });
  }

  clear() {
    this.messageService.clear();
  }

  // 取消的操作： 数据清空，页面信息清空，保存或取消的按钮隐藏
  cancel() {
    this.data = [];
    this.pageData = [];
    this.showFlag = false;
  }

  paginate(event) {
    this.pageInfo.pageRow = event['rows'];
    this.pageInfo.startRow = event['first'];
    this.search(event.page + 1);
    this.pageData = this.data.slice(this.pageInfo.startRow, this.pageInfo.startRow + this.pageInfo.pageRow);
  }

  search(page) {
  }


}
