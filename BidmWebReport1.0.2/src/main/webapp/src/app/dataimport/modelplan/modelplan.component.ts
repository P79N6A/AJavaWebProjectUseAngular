import { Component, OnInit } from '@angular/core';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ApiService } from '../../common/service/api/api.service';
import { moduleplanObjects } from './model/objects';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-modelplan',
  templateUrl: './modelplan.component.html',
  styleUrls: ['./modelplan.component.css']
})
export class ModelplanComponent implements OnInit {

  data : moduleplanObjects[] = [];
  cols : any[] = [
    {field:'factory',header:'Factory'},
    {field:'datename',header:'Datename'},
    {field:'item',header:'Item'},
    {field:'qty',header:'Qty'},
    {field:'owner',header:'Owner'}
  ];



   //下面是翻页的属性
   rows = 10;
   totalRecords;
   rowsPerPageOptions = [10, 50, 100];
   pageInfo = { pageRow: this.rows, startRow: 0 };
   pageData: moduleplanObjects[];
   showFlag: boolean = false;

  constructor(private apiService : ApiService,private messageService: MessageService) { }

  ngOnInit() {
  }


  //1.读取excel中的数据
onBasicUpload(event){
  this.data = [];
  const response_ = JSON.parse(event.xhr.response);
  let localPath = response_.localPath;
  const options = {
    params:{
      path : localPath
    }
  }
  this.apiService.get('/module/dacheng/readEscel',options).subscribe(
  (res)=>{
      this.data = <moduleplanObjects[]>res; // 返回的这个结果集是一条一条数据的数组
      console.log(this.data);
      this.totalRecords = this.data.length;
      //下面这一行实现的是一个翻页的功能，根据每一页行数显示对应行数表格的是数据信息
      this.pageData = this.data.slice(this.pageInfo.startRow,this.pageInfo.startRow + this.pageInfo.pageRow);
      this.showFlag = true;
   },
  (error) => {
    alert("导入数据失败！");
    console.log(error);
  }
  );
  }
  //2.换页的操作
  paginate(event) {
    this.pageInfo.pageRow = event['rows'];
    this.pageInfo.startRow = event['first'];
    this.search(event.page + 1);
    this.pageData = this.data.slice(this.pageInfo.startRow, this.pageInfo.startRow + this.pageInfo.pageRow);
  }
  search(page) {
  }


   //3.取消写入数据库的操作
   cancel(){
    this.data = [];
    this.pageData = [];
    this.showFlag = false;
  }

   //4.写入到数据库中的操作
   saveExcelImportInfo(){
    const options =
    {
      "moduleplan": this.data // 传到服务端的参数就是 导入进来的数据
    }
    this.apiService.put('/module/dacheng/insertData', options).subscribe(
      (res) => {
        this.showFlag = false;
        this.addSingle('Data has been inserted into database');
      },
      (error) => {
        alert("导入数据库失败！");
        console.log(error);
      }
    );
  }

  //5.显示提示信息的操作
  addSingle(msg) {
    this.messageService.add({ severity: 'success', summary: 'save success', detail: msg });
  }

   // 10.导出excel
   exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('module')); // 将这个表格转换成一个 sheet
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // 这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
    this.saveAsExcelFile(excelBuffer, 'Module_Plan 模板');

  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + '.xls');
  }

}
