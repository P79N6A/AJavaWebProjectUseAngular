import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { ReportLoadInfo } from '../model/ReportLoadInfo';
import { Paginator } from 'primeng/primeng';

@Component({
  selector: 'app-reportload',
  templateUrl: './reportload.component.html',
  styleUrls: ['./reportload.component.css']
})
export class ReportloadComponent implements OnInit {
  menuId:string = "";
  userAccount:string = "";
  userName:string = "";
  reportLoadInfoList:ReportLoadInfo[];
  startTime:Date;
  endTime:Date;
  //
  @ViewChild('p') paginator:Paginator;
  rows = 6;
  totalRecords = 0;
  rowsPerPageOptions = [6, 10, 20];
  pageInfo = { pageRow: this.rows, startRow: 0 };
  
  constructor(private service: ApiService) {
    
      this.endTime = new Date();
      this.startTime = new Date(this.endTime.getTime()-60*60*24*1000);
   }

  ngOnInit() {
    this.getReportLoadInfo();
  }

  getReportLoadInfo(){
    this.getPageCount();  
  
    const options = {
      headers:this.service.getHeaders(),
      params: {
        menuId:this.menuId,
        userAccount: this.userAccount,
        userName: this.userName,
        startTime:this.startTime.getTime(),
        endTime:this.endTime.getTime(),
        pageRow: this.pageInfo['pageRow'],
        startRow: this.pageInfo['startRow'],
        log_reportName:'reportloadlist',
        log_menuId:'reportload'
      }
    };
    this.service.get('/userlog/tbload/reportload/pagenate', options).subscribe(
      (res) => {
        this.reportLoadInfoList = <ReportLoadInfo[]>res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getPageCount() {
    const url = '/userlog/reportload/count';
    const options = {
      params: {
        startTime:this.startTime.getTime(),
        endTime:this.endTime.getTime(),
        menuId:this.menuId,
        userAccount: this.userAccount,
        userName: this.userName
      }
    };
    this.service.get(url, options).subscribe(
      (res) => {
        this.totalRecords = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  paginate(event) {
    this.pageInfo.pageRow = event['rows'];
    this.pageInfo.startRow = event['first'];
    this.search(event.page+1);
    this.getReportLoadInfo();
  }

  search(page){
  }
}