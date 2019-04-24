import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
 import { ApiService } from 'app/common/service/api/api.service';
 import * as screenfull from 'screenfull';
 
@Component({
  selector: 'app-tm1kanban',
  templateUrl: './tm1kanban.component.html',
  styleUrls: ['./tm1kanban.component.css']
})
export class Tm1kanbanComponent implements OnInit {
  lamPlanIn: number;
  lamPlanOut: number;
  lamInoutTimer: any;
  Timer5min: any;
  TimerOneHour:any;
  TimerTwoHour:any;
  lamActInStart: number = 0;
  lamActInEnd: number = 0;
  LamInrateStart: number = 0;
  LamInrateEnd: number = 0;
  lamActOutStart: number = 0;
  lamActOutEnd: number = 0;
  LamOutrateStart: number = 0;
  LamOutrateEnd: number = 0;
  lamYield: any = 0;
  lamWeekYieldOption: any;
  lamWeekYieldIntance: any;

 //private snsWeekYieldOption: any;
 //private snsWeekYieldIntance: any;

  snsInChartIntance:any;
  snsOutChartIntance:any;
 
  lamInChartIntance:any;
  lamOutChartIntance:any;

  snsPlanIn: number;
  snsPlanOut: number;
  snsInoutTimer: any;
  snsActInStart: number = 0;
  snsActInEnd: number = 0;
  snsInrateStart: number = 0;
  snsInrateEnd: number = 0;
  snsActOutStart: number = 0;
  snsActOutEnd: number = 0;
  snsOutrateStart: number = 0;
  snsOutrateEnd: number = 0;
  snsYield: any = 0;
  woRateOption = {
   series: [
     {
       name: '',
       type: 'gauge',
       min: 0,
       max: 100,
       detail: {
         formatter:function (params){
           return params.toFixed(2)+'%'
         },
         shadowColor: '#fff', //默认透明
         shadowBlur: 5,
         textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
           //fontWeight: 'bolder',
           color: 'yellow',
           fontSize: 22
         }
       },
       axisLine: {            // 坐标轴线
         lineStyle: {       // 属性lineStyle控制线条样式
           color: [[0.50, '#ff4500'], [0.80, '#1e90ff'], [1, 'lime']],
           width: 3,
           shadowColor: '#fff', //默认透明
           shadowBlur: 10
         }
       },
       axisLabel: {            // 坐标轴小标记
         textStyle: {       // 属性lineStyle控制线条样式
           fontWeight: 'bolder',
           color: '#fff',
           shadowColor: '#fff', //默认透明
           shadowBlur: 10
         }
       },
       axisTick: {            // 坐标轴小标记
         length: 1,        // 属性length控制线长
         lineStyle: {       // 属性lineStyle控制线条样式
           color: 'auto',
           //shadowColor : '#fff', //默认透明
           shadowBlur: 10
         }
       },
       splitLine: {           // 分隔线
         length: 5,         // 属性length控制线长
         lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
           width: 5,
           color: '#fff',
           shadowColor: '#fff', //默认透明
           shadowBlur: 10
         }
       },
       pointer: {
         width: 4
       },
       data: [{ value: 0, name: '' }]
     }
   ]
 };
  woRateIntance: any;
  bankChartIntance: any;
  lamWipChartIntance: any;
  snsWipChartIntance: any;


 options = {
   useEasing: true,
   useGrouping: true,
   separator: ',',
   decimal: '.',
 };
 options1 = {
   useEasing: true,
   useGrouping: true,
   separator: ',',
   decimal: '.',
   suffix: '%'
 };


 timer: any;

 chartOptionLeft = {
   title: {
     text: "Sensor WIP",
     x: 'center',
     y: 20,
     textStyle: {
       color: 'white',
       fontSize: 24
     }
   },
   tooltip: {                     //提示框组件
     trigger: 'axis',           //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
     // 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
       type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
     },
   },
   grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     top: 100,
     containLabel: true
   },
   xAxis: [
     {
       splitLine: { show: false },//去除网格线
       type: 'category',
       data: [],
       axisLabel: {
         interval: 0,//横轴信息全部显示
         rotate: 0,//30度角倾斜显示
         textStyle: {
           fontSize: 12 // 字体大小
         }
       },
       axisLine: {
         lineStyle: {
           color: 'white',
         }
       }
     },
   ],
   yAxis: [
     {
       show: false,
       splitLine: { show: false },//去除网格线
       type: 'value',
       axisLine: {
         lineStyle: {
           color: 'white',
         }
       }
     }
   ],
   series: [
     {
       type: 'bar',
       barWidth: 20,
       itemStyle: {
         normal: {
           barBorderRadius: 0,
           /*color: new echarts.graphic.LinearGradient(
               0, 0, 0, 1,
               [
                   {offset: 0, color: '#14c8d4'},
                   {offset: 1, color: '#43eec6'}
               ]
           )*/
           color: '#63c2ff'
         }
       },
       label: {

         normal: {
           fontSize:18,
           show: true,
           position: 'top',
           color: 'yellow'
         }
       },
       data: [],
     }
   ]
 }

 chartOptionMiddle = {
   title: {
     text: "Bank",
     x: 'center',
     y: 20,
     textStyle: {
       color: 'white',
       fontSize: 24
     }
   },
   tooltip: {
     trigger: 'axis',
     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
       type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
     },
   },
   grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     top: 100,
     containLabel: true
   },
   xAxis: [
     {
       splitLine: { show: false },//去除网格线
       type: 'category',
       data: ['SNS', 'LAM'],
       axisLabel: {
         interval: 0,//横轴信息全部显示
         rotate: 0,//30度角倾斜显示
         textStyle: {
           fontSize: 12 // 字体大小
         }
       },
       axisLine: {
         lineStyle: {
           color: 'white',
         }
       }
     },
   ],
   yAxis: [
     {
       show: false,
       type: 'value'
     }
   ],
   series: [
     {
       type: 'bar',
       barWidth: 20,
       itemStyle: {
         normal: {
           barBorderRadius: 0,
           /*color: new echarts.graphic.LinearGradient(
               0, 0, 0, 1,
               [
                   {offset: 0, color: '#14c8d4'},
                   {offset: 1, color: '#43eec6'}
               ]
           )*/
           color: '#ffd85c'
         }
       },
       label: {
         normal: {
           fontSize:18,
           show: true,
           position: 'top',
           color: 'yellow'
         }
       },
       data: [],
     }
   ]
 }

 chartOptionRight = {
   title: {
     text: "LAM WIP",
     x: 'center',
     y: 20,
     textStyle: {
       color: 'white',
       fontSize: 24
     }
   },
   tooltip: {
     trigger: 'axis',
     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
       type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
     },
   },
   grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     top: 100,
     containLabel: true
   },
   xAxis: [
     {
       splitLine: { show: false },//去除网格线
       type: 'category',
       data: [],
       axisLabel: {
         interval: 0,//横轴信息全部显示
         rotate: 0,//30度角倾斜显示
         textStyle: {
           fontSize: 12 // 字体大小
         }
       },
       axisLine: {
         lineStyle: {
           color: 'white',
         }
       }
     },
   ],
   yAxis: [
     {
       show: false,
       type: 'value'
     }
   ],
   series: [
     {
       type: 'bar',
       barWidth: 20,
       itemStyle: {
         normal: {
           barBorderRadius: 0,
           /*color: new echarts.graphic.LinearGradient(
               0, 0, 0, 1,
               [
                   {offset: 0, color: '#14c8d4'},
                   {offset: 1, color: '#43eec6'}
               ]
           )*/
           color: '#43eec6'
         }
       },
       label: {
         normal: {
           fontSize:18,
           show: true,
           position: 'top',
           color: 'yellow'
         }
       },
       data: [],
     }
   ]
 }

 snsInOption = {
   series: [
     {
       type: 'gauge',
       radius: '100%',
       center: ['50%', '50%'],
       splitNumber: 0, //刻度数量
       startAngle: 270,
       endAngle: -89.99999,
       axisLine: {
         show: true,
         lineStyle: {
           width: 12,
           color: [
             [
               0.6, '#43eec6'
             ],
             [
               1, '#413e54'
             ]
           ]
         }
       },
       //分隔线样式。
       splitLine: {
         show: false,
       },
       axisLabel: {
         show: false
       },
       axisTick: {
         show: false
       },
       pointer: {
         show: false
       },
       title: {
         show: true,
         offsetCenter: [0, '-26%'], // x, y，单位px
         textStyle: {
           color: '#fff',
           fontSize: 20
         }
       },
       //仪表盘详情，用于显示数据。
       detail: {
         show: true,
         offsetCenter: [0, '16%'],
         color: '#ffff00',
         formatter: function(params) {
       return params+"%"
     },
     textStyle: {
       fontSize: 44
     }
     },
     data: [{
     name: "达成率",
     value: 60
     }]
   }
   ]
 };
 snsOutOption = {
   series: [
     {
       type: 'gauge',
       radius: '100%',
       center: ['50%', '50%'],
       splitNumber: 0, //刻度数量
       startAngle: 270,
       endAngle: -89.99999,
       axisLine: {
         show: true,
         lineStyle: {
           width: 12,
           color: [
             [
               0.6, '#43eec6'
             ],
             [
               1, '#413e54'
             ]
           ]
         }
       },
       //分隔线样式。
       splitLine: {
         show: false,
       },
       axisLabel: {
         show: false
       },
       axisTick: {
         show: false
       },
       pointer: {
         show: false
       },
       title: {
         show: true,
         offsetCenter: [0, '-26%'], // x, y，单位px
         textStyle: {
           color: '#fff',
           fontSize: 20
         }
       },
       //仪表盘详情，用于显示数据。
       detail: {
         show: true,
         offsetCenter: [0, '16%'],
         color: '#ffff00',
         formatter: function(params) {
       return params+"%"
     },
     textStyle: {
       fontSize: 44
     }
     },
     data: [{
     name: "达成率",
     value: 60
     }]
   }
   ]
 };
 lamInOption = {
   series: [
     {
       type: 'gauge',
       radius: '100%',
       center: ['50%', '50%'],
 
       splitNumber: 0, //刻度数量
       startAngle: 270,
       endAngle: -89,
       axisLine: {
         show: true,
         lineStyle: {
           width: 12,
           color: [
             [
               0.6, '#63c2ff'
             ],
             [
               1, '#413e54'
             ]
           ]
         }
       },
       //分隔线样式。
       splitLine: {
         show: false,
       },
       axisLabel: {
         show: false
       },
       axisTick: {
         show: false
       },
       pointer: {
         show: false
       },
       title: {
         show: true,
         offsetCenter: [0, '-26%'], // x, y，单位px
         textStyle: {
           color: '#fff',
           fontSize: 20
         }
       },
       //仪表盘详情，用于显示数据。
       detail: {
         show: true,
         offsetCenter: [0, '16%'],
         color: '#ffff00',
         formatter: function(params) {
       return params+"%"
     },
     textStyle: {
       fontSize: 44
     }
     },
     data: [{
     name: "达成率",
     value: 60
     }]
   }
   ]
 };
 lamOutOption = {
   series: [
     {
       type: 'gauge',
       radius: '100%',
       center: ['50%', '50%'],
 
       splitNumber: 0, //刻度数量
       startAngle: 270,
       endAngle: -89,
       axisLine: {
         show: true,
         lineStyle: {
           width: 12,
           color: [
             [
               0.6, '#63c2ff'
             ],
             [
               1, '#413e54'
             ]
           ]
         }
       },
       //分隔线样式。
       splitLine: {
         show: false,
       },
       axisLabel: {
         show: false
       },
       axisTick: {
         show: false
       },
       pointer: {
         show: false
       },
       title: {
         show: true,
         offsetCenter: [0, '-26%'], // x, y，单位px
         textStyle: {
           color: '#fff',
           fontSize: 20
         }
       },
       //仪表盘详情，用于显示数据。
       detail: {
         show: true,
         offsetCenter: [0, '16%'],
         color: '#ffff00',
         formatter: function(params) {
       return params+"%"
     },
     textStyle: {
       fontSize: 44
     }
     },
     data: [{
     name: "达成率",
     value: 60
     }]
   }
   ]
 };
 //production end
 

 optionCircle = {
   series: [
     {
       type: 'gauge',
       radius: '100%',
       center: ['50%', '50%'],
 
       splitNumber: 0, //刻度数量
       startAngle: 270,
       endAngle: -89,
       axisLine: {
         show: true,
         lineStyle: {
           width: 12,
           color: [
             [
               0.9, '#63c2ff'
             ],
             [
               1, '#413e54'
             ]
           ]
         }
       },
       //分隔线样式。
       splitLine: {
         show: false,
       },
       axisLabel: {
         show: false
       },
       axisTick: {
         show: false
       },
       pointer: {
         show: false
       },
       title: {
         show: true,
         offsetCenter: [0, '-26%'], // x, y，单位px
         textStyle: {
           color: '#fff',
           fontSize: 20
         }
       },
       //仪表盘详情，用于显示数据。
       detail: {
         show: true,
         offsetCenter: [0, '16%'],
         color: '#ffff00',
         formatter: function(params) {
       return params
     },
     textStyle: {
       fontSize: 44
     }
     },
     data: [{
     name: "达成率",
     value: 90.61
     }]
   }
   ]
 };
 constructor(private apiService: ApiService, private renderer: Renderer2) { }

 mockDate={
   capacity:{"ACT_OUTQTY":15692,"OUTRATE":1,"ACT_INQTY":0,"INRATE":0,"PLAN_INQTY":0,"PLAN_OUTQTY":0},
   yield:{"YIELD":0.9922},
   worate:{"WORATE":0.1429},
   wipbank:[{"LAMBANK":521,"SNSBANK":91269}],
   lamwip:[{"QTY":969,"STEPTYPE":"CUT"},{"QTY":280,"STEPTYPE":"Polish"},{"QTY":510,"STEPTYPE":"HF"},{"QTY":5722,"STEPTYPE":"FOG"},{"QTY":5672,"STEPTYPE":"LAMI"},{"QTY":7294,"STEPTYPE":"MainBack"},{"QTY":1200,"STEPTYPE":"Packing"},{"QTY":6073,"STEPTYPE":"Rework"},{"QTY":631,"STEPTYPE":"RT"}],
   snswip:[{"QTY":122,"STEPTYPE":"Unpack"},{"QTY":263,"STEPTYPE":"BM"},{"QTY":120,"STEPTYPE":"OC"},{"QTY":93,"STEPTYPE":"SiO2"},{"QTY":8,"STEPTYPE":"ITO"},{"QTY":3176,"STEPTYPE":"Metal"},{"QTY":55,"STEPTYPE":"AR"},{"QTY":2100,"STEPTYPE":"OS"},{"QTY":526.2,"STEPTYPE":"Cut"},{"QTY":1183,"STEPTYPE":"IR"},{"QTY":1025,"STEPTYPE":"QTest"},{"QTY":2501,"STEPTYPE":"可剥胶"},{"QTY":609,"STEPTYPE":"Ship"},{"QTY":471,"STEPTYPE":"Scrap"}]

 }
 ngOnInit() {
   
 }

 ngAfterContentInit(){
   console.log('ngAfterContentInit')
   setTimeout(function(){
     console.log('ngAfterContentInit')
   }, 2000);
  // this.getSnsInout();
  //  this.getSnsYield();
  //  this.getLamInout();
  //  this.getLamYield();
  //  this.getLamWeekYield();
  //  this.getSnsWeekYield();
  //  this.getLamWorate();
  //  this.getBank();
  //  this.getLamWip();
  //  this.getSnsWip();
   this.timer = setInterval(() => {

     this.woRateIntance.clear();
     this.woRateIntance.setOption(this.woRateOption);
     this.bankChartIntance.clear();
     this.bankChartIntance.setOption(this.chartOptionMiddle);
     this.snsWipChartIntance.clear();
     this.lamWipChartIntance.clear();
     this.snsWipChartIntance.setOption(this.chartOptionLeft);
     this.lamWipChartIntance.setOption(this.chartOptionRight);
   }, 30000);

   this.Timer5min = setInterval(()=>{
     this.bankChartIntance.showLoading('default',{
       text: '拼命加载中...',
       color: 'yellow',
       textColor: '#FFF',
       maskColor: 'rgba(0, 0, 0, 0)' });
     //this.getBank();
   },1000*60*5);

   this.TimerOneHour = setInterval(()=>{
     this.getBank();
     this.getLamWip();
     this.getSnsWip();
   },1000*60*60);

   this.TimerTwoHour = setInterval(()=>{
     this.getSnsWeekYield();
     this.getLamWeekYield();
   },1000*60*60*2);

   this.lamInoutTimer = setInterval(() => {
     this.getSnsInout();
     this.getSnsYield();
     this.getLamYield();
     this.getLamInout();
     this.getLamWorate();
     this.getBank();
   }, 1000 * 60);
 }
 ngOnDestory() {
   clearInterval(this.timer);
   clearInterval(this.lamInoutTimer);
   clearInterval(this.Timer5min);
   clearInterval(this.TimerOneHour);
   clearInterval(this.TimerTwoHour);
 }

 //full screen status
 fullScreenStatus = false;

 @HostListener('window:resize')
 _resize() {
   this.fullScreenStatus = screenfull.isFullscreen;
   console.log(this.fullScreenStatus);
   if (!screenfull.isFullscreen) {
     
   }
 }

 onFullThis(screentarget) {
   console.log('onFullThis v : ', screentarget);
   if (screenfull.enabled) {
     screenfull.request(screentarget);
     this.renderer.setStyle(screentarget, 'height', '100vh');
   }
 }

 getLamInout() {
  this.lamPlanIn = this.mockDate.capacity.PLAN_INQTY;
  this.lamPlanOut = this.mockDate.capacity.PLAN_OUTQTY;

  this.lamActInStart = this.lamActInEnd-100;
  this.lamActInEnd = this.mockDate.capacity.ACT_INQTY;

  this.lamInOption.series[0].data[0].value =parseFloat((this.mockDate.capacity.INRATE * 100).toFixed(2));
  this.lamInOption.series[0].axisLine.lineStyle.color[0][0] = this.mockDate.capacity.INRATE.toFixed(2);
  this.lamInChartIntance.setOption(this.lamInOption,true);

  this.lamActOutStart = this.lamActOutEnd-100;
  this.lamActOutEnd = this.mockDate.capacity.ACT_OUTQTY;

  if(this.mockDate.capacity.OUTRATE * 100<20){
    this.lamOutOption.series[0].detail.color = "red";
  }
  this.lamOutOption.series[0].data[0].value =parseFloat((this.mockDate.capacity.OUTRATE * 100).toFixed(2));
  this.lamOutOption.series[0].axisLine.lineStyle.color[0][0] = this.mockDate.capacity.OUTRATE.toFixed(2);
  this.lamOutChartIntance.setOption(this.lamOutOption,true);
 }

 getSnsInout() {

  this.snsPlanIn = this.mockDate.capacity.PLAN_INQTY;
  this.snsPlanOut = this.mockDate.capacity.PLAN_OUTQTY;
  this.snsActInStart = this.snsActInEnd-100;
  this.snsActInEnd = this.mockDate.capacity.ACT_INQTY;
  this.snsInOption.series[0].data[0].value =parseFloat((this.mockDate.capacity.INRATE * 100).toFixed(2));
  this.snsInOption.series[0].axisLine.lineStyle.color[0][0] = this.mockDate.capacity.INRATE.toFixed(2);
  this.snsInChartIntance.setOption(this.snsInOption,true);
  this.snsActOutStart = this.snsActOutEnd-100;
  this.snsActOutEnd = this.mockDate.capacity.ACT_OUTQTY;
  this.snsOutOption.series[0].data[0].value =parseFloat((this.mockDate.capacity.OUTRATE * 100).toFixed(2));
  this.snsOutOption.series[0].axisLine.lineStyle.color[0][0] = this.mockDate.capacity.OUTRATE.toFixed(2);
  this.snsOutChartIntance.setOption(this.snsOutOption,true);

   
 }

 getSnsYield() {
  let yieldTemp:number = this.mockDate.yield.YIELD * 100;
  this.snsYield = yieldTemp.toFixed(2);
    
 }

 getLamYield() {
  let yieldTemp = this.mockDate.yield.YIELD * 100;
  this.lamYield = yieldTemp.toFixed(2);
 }

 getLamWorate() {
  let rate =  this.mockDate.worate.WORATE * 100;
  this.woRateOption.series[0].data[0].value = this.mockDate.worate.WORATE * 100;
  this.woRateIntance.setOption(this.woRateOption, true);
 }

 /** onlamWeekYieldChartInit(ec) {
   this.lamWeekYieldIntance = ec;
 }
 onsnsWeekYieldChartInit(ec) {
   this.snsWeekYieldIntance = ec;
 }*/

 woRateChartInit(ec) {
   this.woRateIntance = ec;
 }
 onBankChartInit(ec) {
   this.bankChartIntance = ec;
   ec.showLoading('default',{
     text: '拼命加载中...',
     color: 'yellow',
     textColor: '#FFF',
     maskColor: 'rgba(0, 0, 0, 0)' }
   );
 }

 onLamWipChartInit(ec) {
   this.lamWipChartIntance = ec;
 }

 onSnsWipChartInit(ec) {
   this.snsWipChartIntance = ec;
 }

 onSnsInChartInit(ec){
   console.log('onSnsInChartInit')
   this.snsInChartIntance = ec;
 }

 onSnsOutChartInit(ec){
   this.snsOutChartIntance = ec;
 }

 onLamInChartInit(ec){
   this.lamInChartIntance = ec;
 }

 onLamOutChartInit(ec){
   this.lamOutChartIntance = ec;
 }
 getLamWeekYield() {
  this.setLamWeekYieldEchart(this.mockDate.lamwip);
 }

 getSnsWeekYield() {
   //this.setSnsWeekYieldEchart(this.mockDate.snswip);
 }
 //设置贴合一周良率视图
 setLamWeekYieldEchart(data) {
   let xAxisData = []
   let seriesData = [];
   data.forEach(element => {
     xAxisData.push(element.REPORTDATE);
     let seriesDateItem = element.YIELD * 100;
     seriesData.push(seriesDateItem.toFixed(2));
   });
   this.lamWeekYieldOption = {

     title: {
       text: '贴\n合',
       subtext: '良\n率\n一\n周\n趋\n势\n图',
       textStyle: {
         color: 'white'
       },
       subtextStyle: {
         color: 'white',
         fontSize: 14
       }
     },
     tooltip: {
       trigger: 'axis'
     },
     calculable: true,
     xAxis: [
       {
         type: 'category',
         splitLine: { show: false },
         data: xAxisData,
         axisLine: {
           lineStyle: {
             color: 'white',
           }
         },
         axisLabel: {
           interval: 0,//横轴信息全部显示
           rotate: 0,//30度角倾斜显示
         },
       }
     ],
     grid: {
       top: "5px",
       left: "55px",
       right: "5px",
       bottom: "50px",
       height: "65%", //图例高度
     },
     yAxis: [
       {
         type: 'value',
         min: 85,
         max: 100,
         axisLine: {
           lineStyle: {
             color: 'white',
             width: 1
           }
         },
         splitLine: {           // 分隔线
           show: false,        // 默认显示，属性show控制显示与否
           lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
             width: 1,
             type: 'dotted',
             color: ['yellow']
           }
         },


       }
     ],
     color: ['rgb(227,222,16)'],

     series: [{
       type: 'line',
       label: {
         normal: {
           show: true,
           formatter: '{c}%'
         }
       }, data: seriesData
     }]

   }
 }

 //设置SNS一周良率视图
 /** setSnsWeekYieldEchart(data) {
   let xAxisData = []
   let seriesData = [];
   data.forEach(element => {
     xAxisData.push(element.REPORTDATE);
     let seriesDateItem = element.YIELD * 100;
     seriesData.push(seriesDateItem.toFixed(2));
   });
   this.snsWeekYieldOption = {

     title: {
       text: 'S\nN\nS',
       subtext: '良\n率\n一\n周\n趋\n势\n图',
       textStyle: {
         color: 'white'
       },
       subtextStyle: {
         color: 'white',
         fontSize: 14
       }
     },
     tooltip: {
       trigger: 'axis'
     },
     calculable: true,
     xAxis: [
       {
         type: 'category',
         splitLine: { show: false },
         data: xAxisData,
         axisLine: {
           lineStyle: {
             color: 'white',
           }
         },
         axisLabel: {
           interval: 0,//横轴信息全部显示
           rotate: 0,//30度角倾斜显示
         },
       }
     ],
     grid: {
       top: "5px",
       left: "55px",
       right: "5px",
       bottom: "50px",
       height: "65%", //图例高度
     },
     yAxis: [
       {
         type: 'value',
         min: 95,
         max: 105,
         axisLine: {
           lineStyle: {
             color: 'white',
             width: 1
           }
         },
         splitLine: {           // 分隔线
           show: false,        // 默认显示，属性show控制显示与否
           lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
             width: 1,
             type: 'dotted',
             color: ['yellow']
           }
         },


       }
     ],
     color: ['rgb(227,222,16)'],

     series: [{
       type: 'line',
       label: {
         normal: {
           show: true,
           formatter: '{c}%'
         }
       }, data: seriesData
     }]

   }
 }*/

 getBank() {
  this.bankChartIntance.hideLoading();
  this.mockDate.wipbank.forEach(element => {
    this.chartOptionMiddle.series[0].data.push(element.SNSBANK);
    this.chartOptionMiddle.series[0].data.push(element.LAMBANK);
    let bankTotal = element.SNSBANK + element.LAMBANK
    this.chartOptionMiddle.title.text = "Bank : " + bankTotal;
  });
  this.bankChartIntance.setOption(this.chartOptionMiddle, true);    
 }

 //LAM WIP
 getLamWip() {
  this.setLamWipEchart(this.mockDate.lamwip);
 }

 setLamWipEchart(data){
   data.forEach(element => {
     this.chartOptionRight.xAxis[0].data.push(element.STEPTYPE);
     this.chartOptionRight.series[0].data.push(element.QTY);
     this.lamWipChartIntance.setOption(this.chartOptionRight,true);
   });
 }

 //Sns WIP
 getSnsWip() {
  let tmp = [{"QTY":122,"STEPTYPE":"Unpack"},{"QTY":263,"STEPTYPE":"BM"},{"QTY":120,"STEPTYPE":"OC"},{"QTY":93,"STEPTYPE":"SiO2"},{"QTY":8,"STEPTYPE":"ITO"},{"QTY":3176,"STEPTYPE":"Metal"},{"QTY":55,"STEPTYPE":"AR"},{"QTY":2100,"STEPTYPE":"OS"},{"QTY":526.2,"STEPTYPE":"Cut"},{"QTY":1183,"STEPTYPE":"IR"},{"QTY":1025,"STEPTYPE":"QTest"},{"QTY":2501,"STEPTYPE":"可剥胶"},{"QTY":609,"STEPTYPE":"Ship"},{"QTY":471,"STEPTYPE":"Scrap"}];
  this.setSnsWipEchart(tmp);
 }

 setSnsWipEchart(data){
   data.forEach(element => {
     this.chartOptionLeft.xAxis[0].data.push(element.STEPTYPE);
     this.chartOptionLeft.series[0].data.push(element.QTY);
     this.snsWipChartIntance.setOption(this.chartOptionLeft,true);
   });
 }
}