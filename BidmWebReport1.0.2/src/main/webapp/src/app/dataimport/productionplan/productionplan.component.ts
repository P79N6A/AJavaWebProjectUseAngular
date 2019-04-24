import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/service/api/api.service';
import { TabService } from '../../../core/layout/retab/service/tab.service';
import { FileUploadService } from '../../boe-ui/boe-list/service/file-upload.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/api';
import { spec } from './model/spec';

@Component({
  selector: 'app-productionplan',
  templateUrl: './productionplan.component.html',
  styleUrls: ['./productionplan.component.css']
})
export class ProductionplanComponent implements OnInit {

  constructor(private apiService: ApiService,
    public tService: TabService,
    private file: FileUploadService,
    private messageService: MessageService) { }


  //下面定义的是选择条件的变量
  factories: SelectItem[];
  selectedFactory: string = '';
  selectedDate: Date;

  data: spec[];
  pageData: spec[];
  cols: any[];
  showFlag: boolean = false;

  uploadedFiles: any[] = [];

  rows = 10;
  totalRecords;
  rowsPerPageOptions = [10, 50, 100];
  pageInfo = { pageRow: this.rows, startRow: 0 };

  //下面是 一个 websocket 的测试 对象
  //socket : WebSocket; //在ngOnInit方法中 进行初始化操作的

  //这个方法就是一个模板的方法，不知道为什么这样写，但是就是这样写
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  ngOnInit() {

    //在这里操作，创建连接的
    //this.socket = new WebSocket("ws://localhost:8080/api/cstinfo");
    //socket 对象的 处理信息的方法 
    // this.socket.onmessage = (event)=>{
    //   console.log(event);
    // }
    this.factories = [
      { label: 'Array', value: 'Array' },
      { label: 'CF', value: 'CF' },
      { label: 'Cell', value: 'Cell' },
      { label: 'M1', value: 'M1' },
      { label: 'M2', value: 'M2' }
    ];
    this.cols = [
      { field: 'factory', header: 'FACTORY' },
      { field: 'datename', header: 'DATENAME' },
      { field: 'hourtimekey', header: 'HOURTIMEKEY' },
      { field: 'item', header: 'ITEM' },
      { field: 'productspecname', header: 'PRODUCTSPECNAME' },
      { field: 'modeltype', header: 'MODELTYPE' },
      { field: 'line', header: 'LINE' },
      { field: 'qty', header: 'QTY' },
      { field: 'owner', header: 'OWNER' }
    ];
  }

  //1.下面这个是查询数据的方法 ： 根据 工厂名称和  日期
  searchData() {

    if (this.selectedFactory == '' || this.selectedDate == null) {
      alert("请选择工厂和日期！");
    } else {
      let factory = this.selectedFactory;
      let date = this.getTimeStr();
      const option = {
        params: {
          factoryname: factory,
          datestr: date
        }
      };
      const search_url = '/Monitor8/searchPlan';
      this.apiService.get(search_url, option).subscribe(
        (res) => {
          if (res.length == 0) {
            alert("未查询到数据！");
          } else {
            this.data = <spec[]>res; // 返回的这个结果集是一条一条数据的数组
            this.totalRecords = this.data.length;
            //下面这一行实现的是一个翻页的功能，根据每一页行数显示对应行数表格的是数据信息
            this.pageData = this.data.slice(this.pageInfo.startRow, this.pageInfo.startRow + this.pageInfo.pageRow);
          }
        },
        (error) => { console.log(error) }
      );
    }
  }
  //2.格式化 时间字符串的 方法
  getTimeStr(): string {
    let timestr = '';
    let year = this.selectedDate.getFullYear();
    let month = this.selectedDate.getMonth() + 1;
    let day = this.selectedDate.getDate();
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

  //下面这个是上传文件的方法：
  onBasicUpload(event) {
    console.log(event);
    const response_ = JSON.parse(event.xhr.response);
    //let fileName = response_.name;origFileName
    //let fileName = response_.origFileName;
    let localPath = response_.localPath;
    console.log(localPath);
    const options =
    {
      params: {
        //fileName : fileName,
        localPath: localPath
      }
    }
    this.apiService.get('/alarmspec/excelUpload1', options).subscribe(
      (res) => {
        this.data = <spec[]>res; // 返回的这个结果集是一条一条数据的数组
        // console.log(this.data);
        this.totalRecords = this.data.length;
        //下面这一行实现的是一个翻页的功能，根据每一页行数显示对应行数表格的是数据信息
        this.pageData = this.data.slice(this.pageInfo.startRow, this.pageInfo.startRow + this.pageInfo.pageRow);
        this.showFlag = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // onBasicUpload(event){
  //   console.log(event);
  //   const response_ = JSON.parse(event.xhr.response);
  //   let fileName = response_.name;
  //   const options = 
  //   {
  //       params:{
  //           fileName : fileName
  //       }
  //   }
  //   this.apiService.get('/alarmspec/excelUpload',options).subscribe(
  //     (res)=>{
  //           this.data = <spec[]>res; // 返回的这个结果集是一条一条数据的数组
  //           this.totalRecords = this.data.length;
  //           //下面这一行实现的是一个翻页的功能，根据每一页行数显示对应行数表格的是数据信息
  //           this.pageData = this.data.slice(this.pageInfo.startRow,this.pageInfo.startRow + this.pageInfo.pageRow);
  //           this.showFlag = true;
  //        },
  //     (error) => {
  //         console.log(error);
  //     }
  //   );
  // }



  //保存数据的方式 ：
  saveExcelImportInfo() {
    const options =
    {
      "monitor8VOList": this.data // 传到服务端的参数就是 导入进来的数据
    }
    this.apiService.put('/monitor8/excelImport1', options).subscribe(
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
    window.location.href = this.file.getDownloadUrl() + "template/spec_tmp.xlsx";
  }

  addSingle(msg) {
    this.messageService.add({ severity: 'success', summary: 'save success', detail: msg });
  }

  addMultiple() {
    this.messageService.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
    { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }]);
  }

  clear() {
    this.messageService.clear();
  }

  //取消的操作： 数据清空，页面信息清空，保存或取消的按钮隐藏
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
