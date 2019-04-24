import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ApiService } from '../../common/service/api/api.service';
import { CfMovePlanOjbect } from './model/objects';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-cfmoveplan',
  templateUrl: './cfmoveplan.component.html',
  styleUrls: ['./cfmoveplan.component.css']
})
export class CfmoveplanComponent implements OnInit {


  //读取数据时 显示在 界面上的 数据 数组
  data : CfMovePlanOjbect [] = [];
  cols : any[] = [
    {field:'factory',header:'Factory'},
    {field:'hourtimekey',header:'Hourtimekey'},
    {field:'opercode',header:'OperCode'},
    {field:'line',header:'Line'},
    {field:'qty',header:'Qty'},
    {field:'owner',header:'Owner'}
  ];


  //下面是翻页的属性
  rows = 10;
  totalRecords;
  rowsPerPageOptions = [10, 50, 100];
  pageInfo = { pageRow: this.rows, startRow: 0 };
  pageData: CfMovePlanOjbect[];
  showFlag: boolean = false;


  //下面是查询的绑定时间
  selectedTime : Date = new Date();

  constructor(private apiService : ApiService,
            private messageService: MessageService) { }

  ngOnInit() {
  }





  //
    //1.上传文件的方法：
onBasicUpload(event){
  const response_ = JSON.parse(event.xhr.response);
  let localPath = response_.localPath;
  const options = {
    params:{
      localPath : localPath
    }
  }
  this.apiService.get('/importplancfmove/excelUpload',options).subscribe(
  (res)=>{
      this.data = <CfMovePlanOjbect[]>res; // 返回的这个结果集是一条一条数据的数组
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


  //2.取消写入数据库的操作
  cancel(){
    this.data = [];
    this.pageData = [];
    this.showFlag = false;
  }

  //3.写入到数据库中的操作
  saveExcelImportInfo(){
    const options =
    {
      "cfmoveplan": this.data // 传到服务端的参数就是 导入进来的数据
    }
    this.apiService.put('/importplancfmove/excelImport', options).subscribe(
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

  //4.显示提示信息的操作
  addSingle(msg) {
    this.messageService.add({ severity: 'success', summary: 'save success', detail: msg });
  }

  //5.换页的操作
  paginate(event) {
    this.pageInfo.pageRow = event['rows'];
    this.pageInfo.startRow = event['first'];
    this.search(event.page + 1);
    this.pageData = this.data.slice(this.pageInfo.startRow, this.pageInfo.startRow + this.pageInfo.pageRow);
  }

  search(page) {
  }

  //6.查询导入的数据的操作
  searchData(){

    //console.log(this.getSearchHourtimekey(this.selectedTime));

    const url = '/importplancfmove/getplan';
    const option = {
      params : {
        hourtimekey : this.getSearchHourtimekey(this.selectedTime)
      }
    };

    this.apiService.get(url,option).subscribe(
      (res)=>{
        if(res.length == 0){
          alert("当前时间无计划！");
        }else{
         // console.log(res);
          this.data = <CfMovePlanOjbect[]>res; // 返回的这个结果集是一条一条数据的数组
          this.totalRecords = this.data.length;
          //下面这一行实现的是一个翻页的功能，根据每一页行数显示对应行数表格的是数据信息
          this.pageData = this.data.slice(this.pageInfo.startRow,this.pageInfo.startRow + this.pageInfo.pageRow);
        }
      
      },
      (error)=>{console.log(error)}
    );


  }

  //6.2 转换 查询时间的字符串的操作
  getSearchHourtimekey(AAA : Date):string{
    let timestr = '';
    let month = AAA.getMonth()+1;
    timestr += AAA.getUTCFullYear();
    if(month < 10){
      timestr += '0'+month;
    }else{
      timestr += ''+month;
    }

    if(AAA.getDate() < 10){
      timestr += '0'+AAA.getDate();
    }else{
      timestr += ''+AAA.getDate();
    }

    if(AAA.getHours() < 10){
      timestr += '0'+AAA.getHours();
    }else{
      timestr += ''+AAA.getHours();
    }
    return timestr;
  }


   // 10.导出excel
   exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('cfmove')); // 将这个表格转换成一个 sheet
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // 这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
    this.saveAsExcelFile(excelBuffer, 'Cf_Move_Plan 模板');

  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + '.xls');
  }


}
