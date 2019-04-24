import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EchartService } from 'app/common/service/echart.service';
import { BoeService } from 'app/outstandingcase/transparent-display/b1-pecvd/boe.service';
import { mdlOption } from 'app/outstandingcase/transparent-display/b1-pecvd/pecvd';

@Component({
  selector: 'app-b1-pecvd',
  templateUrl: './b1-pecvd.component.html',
  styleUrls: ['./b1-pecvd.component.css']
})
export class B1PecvdComponent implements OnInit {
  @ViewChild('pecvdyear') echartsYear :ElementRef;
  @ViewChild('pecvdmonth') echartsMonth :ElementRef; //pecvdday
  @ViewChild('pecvdday') echartsday :ElementRef; //pecvdday
  yearOpt  ;
  monthOpt ;
   dayOpt ;
   opt365;
   myChart;
   
  // yearOpt = mdlOption ;
  // monthOpt = mdlOption ;
  // dayOpt = mdlOption;
  constructor(private service:BoeService,  private echartService:EchartService) { }
  ngOnInit() {

    this.myChart = this.echartService.init(document.getElementById('pecvdyear'));
    this.myChart.showLoading();
    this.getYearOee();
    this.getMontOee(this.getParams('year'));
    this.getDayOee(this.getParams('month'));
    this.get365Oee(this.getParams('year'));
    this.myChart.hideLoading();
    
  }

  getYearOee(){
   // this.yearOpt = yearOption;
   const url = '/assets/demo/data/b1/pecvd-year-oee.json';
   this.service.testGet(url).subscribe(
  //  this.service.getAll('/pecvd/query/year').subscribe(
      (res) => {
      this.yearOpt =  this.convertJsonToEchart(mdlOption,res,'year');
      // myChart.hideLoading();
      this.myChart.setOption(this.yearOpt);
       console.log(" this.monthOpt : " +  this.monthOpt.xAxis[0].data);
      },
      (error) => {
        console.log(error);
      }
    ); 
  }
  getMontOee(params){
    //this.monthOpt = monthOption;
    console.log("getMontOee");
  //  console.log("params.name: " +params.name );
    const url = '/assets/demo/data/b1/pecvd-month-oee.json';
    this.service.testGet(url).subscribe(
   // this.service.getAll('/pecvd/query/month?timekey=2018').subscribe(
      (res) => {
      this.monthOpt = this.convertJsonToEchart(mdlOption,res,'month');
      const myChart = this.echartService.init(document.getElementById('pecvdmonth'));
      myChart.setOption(this.monthOpt);
        console.log(" this.monthOpt : " +  this.monthOpt.xAxis[0].data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getDayOee(params){
   console.log("getDayOee");
   console.log("params :" + params.name);
  // this.dayOpt = mdlOption;
   var timek = params.name.toString();
   const url = '/assets/demo/data/b1/pecvd-day-oee.json';
   this.service.testGet(url).subscribe(
   //this.service.getAll('/pecvd/query/day?timekey=' + timek).subscribe(
      (res) => {
      this.dayOpt= this.convertJsonToEchart(mdlOption,res,'day')
      const myChart = this.echartService.init(document.getElementById('pecvdday'));
      myChart.setOption(this.dayOpt);
      console.log("dayOpt.xAxis[0].data :"+ this.dayOpt.xAxis[0].data)
      },
      (error) => {
      console.log("error: " +error);
      }
    );
  }
  get365Oee(params){
    var timek = params.name.toString();
    const url = '/assets/demo/data/b1/pecvd-year365-oee.json';
    this.service.testGet(url).subscribe(
   //this.service.getAll('/pecvd/query/day?timekey=' + timek).subscribe(
      (res) => {
      this.opt365= this.convertJsonToEchart(mdlOption,res,'day')
      const myChart = this.echartService.init(document.getElementById('pecvd365'));
      myChart.setOption(this.opt365);
      console.log("dayOpt.xAxis[0].data :"+ this.dayOpt.xAxis[0].data)
      },
      (error) => {
        console.log("error: " +error);
      }
    );
  }
  // getDayOee2(params){
  //   console.log("getDayOee2");
  //  // console.log("params :" + params.name);
  //  // this.dayOpt = mdlOption;
  //   this.service.getAll('/pecvd/query/day?timekey=201808').subscribe(
  //      (res) => {
  //     // this.convertJsonToEchart(mdlOption,res,'day');
  //     this.dayOpt= this.convertJsonToEchart(this.dayOpt,res,'day')
  //     const myChart = this.echartService.init(document.getElementById('pecvdday'));
  //     myChart.setOption(this.dayOpt);
  //     console.log(" dayOpt.xAxis[0].data :"+ this.dayOpt.xAxis[0].data)
  //      },
  //      (error) => {
  //        console.log("error: " +error);
  //      }
  //    );
  //  }
  convertJsonToEchart(myoption,res,flag:string){  /// adde by Liucy 20181029
    /*name:'E_TIME',
    type:'bar',
    stack: 'PVX',
    data:[]*/
    console.log("res: " + JSON.stringify(res));
    var  pvx = res['pvx'];
    var  multi = res['multi'];
    for(var j=0 ; j<myoption.series.length; j++){
        for(var kv in pvx){
          var strKey = kv.toString().toUpperCase();
          if( strKey==myoption.series[j].name.toString() && 'pvx'==myoption.series[j].stack.toString() ){
            myoption.series[j].data = pvx[kv];
          }
        }
        for(var kv in multi){
          var strKey = kv.toString().toUpperCase();
          if( strKey==myoption.series[j].name && 'multi'==myoption.series[j].stack ){
            myoption.series[j].data = multi[kv];
          }
        }
    }
    myoption.xAxis[0].data = pvx['date'];
    return myoption;
  }
  getParams(flag:string){
    // var myDate = new Date();
    //   //获取当前年份(2位)
    // myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    // myDate.getMonth();       //获取当前月份(0-11,0代表1月)
    // myDate.getDate();        //获取当前日(1-31)
    // myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
    // myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
    // myDate.getHours();       //获取当前小时数(0-23)
    // myDate.getMinutes();     //获取当前分钟数(0-59)
    // myDate.getSeconds();     //获取当前秒数(0-59)
    // myDate.getMilliseconds();    //获取当前毫秒数(0-999)
    // myDate.toLocaleDateString();     //获取当前日期
    // var mytime=myDate.toLocaleTimeString();     //获取当前时间
    // myDate.toLocaleString( );        //获取日期与时间
    var myDate = new Date(); 
    var nameValue='';
    if('month'==flag){
      var strMonth =(100+myDate.getMonth()+1).toString().substring(1);
      nameValue = myDate.getFullYear().toString()+ strMonth;    
    }else if('year'==flag){
      nameValue = myDate.getFullYear().toString() ;     //获取完整的年份(4位,1970-????)
    }
    var params ={name:nameValue};
    return params;
  }
  // addEchartClickforMonth(){
  // //  const myChart = this.echartService.init(document.getElementById('day2'));
  //   const myChart = this.echartService.init(document.getElementById('day2'));

  //   myChart.on('click',this.getDayOee);
  //   //echarts.init(this.echartsMonth.nativeElement).on('click',this.echartClickMonth);
  // }
}
