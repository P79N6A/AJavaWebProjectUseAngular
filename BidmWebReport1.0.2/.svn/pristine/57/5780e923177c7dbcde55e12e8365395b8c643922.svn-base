import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'app/common/service/api/api.service';
import { DailyReport, DailyReportByProduct } from 'app/outstandingcase/cannedFReport/b2-daily/DailyReport';

interface Fab {
  name: string,
  code: string
}

@Component({
  selector: 'app-b2-daily',
  templateUrl: './b2-daily.component.html',
  styleUrls: ['./b2-daily.component.css']
})
export class B2DailyComponent implements OnInit {

  gridValues: any;
  dailyReportList: DailyReport[];
  dailyReport: DailyReport;
  factoryName: string;
  factory: any[];
  modalVisible = false; 

  DailyReportByProductList: DailyReportByProduct[];
  DailyReportByProduct: DailyReportByProduct;

  dateTime: string;

  Fabs: SelectItem[];
  selectedFabs: Fab[];

  date: Date;
  
  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { 
    this.Fabs = [
      {label:'AR01', value:{id:1, name: 'AR01', code: 'AR01'}},
      {label:'CF01', value:{id:2, name: 'CF01', code: 'CF01'}},
      {label:'CE01', value:{id:3, name: 'CE01', code: 'CE01'}}
  ];
  }

  ngOnInit() {
    this.selectByFactory();    
  }

  dataQuery() {
    if(this.selectedFabs==null || this.date==null || this.selectedFabs.length==null)
    {
      this.showDialog();
    }else{
      this.factory=[];
      this.selectedFabs.forEach(ss=> {
        this.factory.push(ss.name);
      })
        this.dateTime=this.date.toString().split("-").join("");
        console.log(this.factory);
        console.log(this.dateTime);
        this.selectByFactory();
    }
  }

  showDialog(){
    this.modalVisible = true;  
  }


  selectByFactory() {
    const options = {
      params: {
        factoryName: this.factory,
        dateTime: this.dateTime
      }
    };
    this.apiService.testGet('/assets/demo/data/PmDailyReport.json').subscribe(  // /assets/demo/data/PmDailyReport.json
      (res) => {
        this.DailyReportByProductList = <DailyReportByProduct[]>res;
        //console.log(JSON.stringify(this.DailyReportByProductList));
        this.initGridValue();
      },
      (error) => {
        console.log(error);
      }
    )
  }



  initGridValue() {
    this.gridValues = [
      {
        header: {
          backgroundColor: '#ffc',
          items: [
            [
              { header: 'Daily Issue', colspan: 24 }
            ]
          ]
        },
        values: {
          items: [
            [
              { value: 'Issue KeyIn', colspan: 24, rowspan: 1, editable: true, color: 'red' }
            ]
          ]
        }
      },
      {
      header: {
        backgroundColor: '#d1e9e9',
        items: [
          [
            { header: 'Shop', rowspan: 3 ,colspan: 1},
            { header: 'Product', rowspan: 3 ,colspan: 7},
            { header: 'Input', colspan: 5 },
            { header: 'Output', colspan: 5 },
            { header: 'Scrap', colspan: 2 },
            { header: 'FAB Yield', colspan: 2 },
            { header: 'WIP', colspan: 2 }
          ],
          [
            { header: 'Plan', colspan: 2 },
            { header: 'Act', colspan: 2 },
            { header: 'Bal.', colspan: 1 },
            { header: 'Plan', colspan: 2 },
            { header: 'Act', colspan: 2 },
            { header: 'Bal.', colspan: 1 },
            { header: 'Day', rowspan: 2 },
            { header: 'Cum', rowspan: 2 },
            { header: 'Day', rowspan: 2 },
            { header: 'Cum', rowspan: 2 },
            { header: '初期WIP', colspan: 1 },
            { header: '末期WIP', colspan: 1 }
          ],
          [
            { header: 'Month' },
            { header: 'Cum' },
            { header: 'Day' },
            { header: 'Cum' },
            { header: 'Cum' },
            { header: 'Month' },
            { header: 'Cum' },
            { header: 'Day' },
            { header: 'Cum' },
            { header: 'Cum' },
            { header: 'Glass'},
            { header: 'Glass'},
          ]
        ]
      },
      values: {
         items:JSON.parse(JSON.stringify(this.DailyReportByProductList))//JSON.parse(JSON.stringify(this.DailyReportByProductList) ) //JSON.parse(this.DailyReportByProductList.toString())
      }
      }
    ];
  }


  valParam: number;

  set() {
    console.log("seeeeeeeeeeeeeet");
    this.http.post("http://localhost:8080/param/set", {'value': this.valParam}).subscribe(
      (res) => {
        console.log('res : ',res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setParam() {
    // console.log("api service set");
    const options = {
      value: this.valParam
    };
    this.apiService.post('/test/param/set', this.valParam).subscribe(
      res => {
        console.log("post ok");
      }
    )
  }

  exportTable() {
    const blob = new Blob([document.getElementById('exportableTable').innerHTML], {
      // type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      type: "application/vnd.ms-excel;charset=utf-8"
    });
   // saveAs(blob, '生管日报.xls');
  }


  // mouseover() {
  //   $('#buttontest').attr('src', 'assets/layout/images/mousein.png')
  // }

  // mouseout() {
  //   $('#buttontest').attr('src', 'assets/layout/images/button.png')
  // }  

  // click() {
  //   $('#buttontest').attr('src', 'assets/layout/images/mousedown.png')
  // }

}