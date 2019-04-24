import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'app/boe-ui/boe-list/service/file-upload.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { ApiService } from 'app/common/service/api/api.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { spec } from 'app/spec/module/spec';

@Component({
  selector: 'app-spec-import',
  templateUrl: './spec-import.component.html',
  styleUrls: ['./spec-import.component.css']
})
export class SpecImportComponent implements OnInit {

  constructor(private apiService: ApiService,
              public tService: TabService,
              private file: FileUploadService,
              private messageService: MessageService) { }

  data:spec[];
  pageData:spec[];
  cols: any[];
  showFlag: boolean = false;
  
  uploadedFiles: any[] = [];

  //
  rows = 10;
  totalRecords;
  rowsPerPageOptions = [10,50,100];
  pageInfo = { pageRow: this.rows, startRow: 0 };

  //这个方法就是一个模板的方法，不知道为什么这样写，但是就是这样写
  onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

  ngOnInit() {

    this.cols = [
      { field: 'productid',header:'1'},
      { field: 'stepid',header:'2'},
      { field: 'defectname',header:'3'},
      { field: 'control1',header:'4'},
      { field: 'alarmtype1',header:'5'},
      { field: 'alarmreceivername1',header:'6'},
      { field: 'alarmreceiverid1',header:'7'},
      { field: 'control2',header:'8'},
      { field: 'alarmtype2',header:'9'},
      { field: 'alarmreceivername2',header:'10'},
      { field: 'alarmreceiverid2',header:'11'},
      { field: 'freshtime',header:'12'}
    ];
  }
  //下面这个是上传文件的方法：
  onBasicUpload(event){
    console.log(event);
    const response_ = JSON.parse(event.xhr.response);
    //let fileName = response_.name;origFileName
    //let fileName = response_.origFileName;
    let localPath = response_.localPath;
    const options = 
    {
        params:{
            //fileName : fileName,
            localPath : localPath
        }
    }
    this.apiService.get('/alarmspec/excelUpload',options).subscribe(
      (res)=>{
            this.data = <spec[]>res; // 返回的这个结果集是一条一条数据的数组
            this.totalRecords = this.data.length;
            //下面这一行实现的是一个翻页的功能，根据每一页行数显示对应行数表格的是数据信息
            this.pageData = this.data.slice(this.pageInfo.startRow,this.pageInfo.startRow + this.pageInfo.pageRow);
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
  saveExcelImportInfo(){
    const options = 
    { 
          "specVOList" : this.data // 传到服务端的参数就是 导入进来的数据
    }
    this.apiService.put('/alarmspec/excelImport',options).subscribe(
      (res)=>{
            this.showFlag = false;
            this.addSingle('Data has been inserted into database');
         },
      (error) => {
          console.log(error);
      }
    );
  }
  onFileDownload(){
    window.location.href= this.file.getDownloadUrl() + "template/spec_tmp.xlsx";
  }

  addSingle(msg) {
    this.messageService.add({severity:'success', summary:'save success', detail:msg});
  }

    addMultiple() {
        this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
                                    {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
    }

    clear() {
        this.messageService.clear();
    }

    //取消的操作： 数据清空，页面信息清空，保存或取消的按钮隐藏
    cancel(){
      this.data = [];
      this.pageData = [];
      this.showFlag = false;
    }

    paginate(event) {
      this.pageInfo.pageRow = event['rows'];
      this.pageInfo.startRow = event['first'];      
      this.search(event.page+1); 
      this.pageData = this.data.slice(this.pageInfo.startRow,this.pageInfo.startRow + this.pageInfo.pageRow);
    }

    search(page){
    }
}
