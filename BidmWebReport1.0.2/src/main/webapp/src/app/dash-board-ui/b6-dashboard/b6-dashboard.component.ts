import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/service/api/api.service';
import { DatePipe } from '../../../../node_modules/@angular/common';
import { TabService } from '../../../core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-b6-dashboard',
  templateUrl: './b6-dashboard.component.html',
  styleUrls: ['./b6-dashboard.component.css']
})
export class B6DashboardComponent implements OnInit {

  screenHight;
  
  chartOptionInout;//第一行柱形图
  chartOptionYield;//第一行饼状图
  chartOptionCST;//第一行第三个柱形图
  chartOptionPh1Run;
  chartOptionPh2Run;
  chartOptionPh1WIP;
  chartOptionPh2WIP;
  searchDate;
  m=new Date(); 
  year;
  month;
  day;
  constructor(private apiService: ApiService,private datePipe:DatePipe ,private breadcrumbService: BreadcrumbService,public tService: TabService) { }

  ngOnInit() {

    this.initalpage();
    this.searchDate=new Date(this.m.getTime()-24*60*60*1000);
    this.screenHight = window.screen.height + 'px';//获取当前屏幕高度
  }

  initalpage()
  {
    this.onSearch();
  }

  onSearch(){
    this.dataListInoutPut();//第一行数据图
    this.dataListYield();//第一行数据图
    this.dataListCst();//第一行数据图
    this.dataListRunRate();//第二行数据图
    this.dataListWip();
  }

  dataListInoutPut()
    {
      const url1='/assets/demo/data/B6/b6Inoutput.json';
      this.apiService.testGet(url1).subscribe(
        (res) => {
          this.setEchartInout(res);
        },
        (error) => { console.log(error); }
  
      );

    }

    dataListYield()
    {
      const url2='/assets/demo/data/B6/b6yield.json';
    const options2={
      params:{
         searchDate : this.datePipe.transform(this.searchDate,'yyyyMMdd'),
      }
    }
    console.log(this.searchDate);
    this.apiService.testGet(url2).subscribe(
      (res) => {
        console.log(res);
        this.setEchartYiled(res);
      },
      (error) => { console.log(error); }

    );
    }

    setEchartInout(data)
    {
    
    const actIn=new Array();
    const actOut=new Array();
    const sucessIn=new Array();
    const sucessOut=new Array();
   
    for(var i=0;i<data.length;i++)
    {
      actIn.push(data[i].ACTIN);
      actOut.push(data[i].ACTOUT);
      sucessIn.push(data[i].SUCESSIN);
      sucessOut.push(data[i].SUCESSOUT);
    }
    this.chartOptionInout = {
      title: {
         x: 'center',
         text: '投入产出情况',
         textStyle:{
          fontSize:15,
          fontWeight:'bold',
          fontFamily: 'Microsoft YaHei',
          color:'#fff'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      color:['#0073FF','#1FE9BA','#FF7F50','#8A2BE2'],
      legend: {
        data: ['In', 'Out','投入达成率','产出达成率'],
        orient: 'horizontal', // 'vertical' 布局方式：水平
          x: 'center', // 'center' | 'left' | {number},
          y: 'bottom', // 'center' | 'bottom' | {number}
          textStyle:{
            fontSize:10,
            color:'#fff',
          fontFamily: 'Microsoft YaHei',
          },
          itemWidth:9,//7
          itemHeight:7
      },
      grid: {
        left: '8%',
            right: '7%',
            bottom: '18%',
            top:'10%',
            height: "65%"
            //containLabel: true
    },
      calculable: true,//是否启用拖拽重计算特性，默认关闭(即值为false) 
      xAxis: [
        {
          type: 'category',
          data: ['ARRAY I/O', 'CF I/O',  'CELL I/O'],
          axisLabel:{
            fontFamily: 'Microsoft YaHei',
            fontSize:10
          },
          axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
            }
          }
        }
      ],
      yAxis: [
        {
         // name:'投入产出(K)',
          nameTextStyle:{
            fontFamily: 'Microsoft YaHei',
            fontSize:10
          },
          axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
            }
          },
          type: 'value',
          axisLabel:{
            fontFamily: 'Microsoft YaHei',
            fontSize:10,
            formatter: function (value, index) {
              if (value >= 10000 && value < 10000000) {
                  value = value / 10000 + "万";
              } else if (value >= 10000000) {
                  value = value / 10000000 + "千万";
              }
              return value;
          }
          },
          splitLine:{
            show:false
          },
        },
        {
          //name:'达成率(%)',
          nameTextStyle:{
            fontFamily: 'Microsoft YaHei',
            fontSize:10
          },
          axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
            }
          },
          type : 'value',
          axisLabel:{
            fontFamily: 'Microsoft YaHei',
            fontSize:10
          },
          splitLine:{
            show:false
          }
        }
      ],
      series: [
        {
          name: 'In',
          type: 'bar',
          data: actIn,
          barWidth:30
        },
        {
          name: 'Out',
          type: 'bar',
          data: actOut,
          barWidth:30
        },
        {
          yAxisIndex:1,
          symbol: 'circle',
          symbolSize: 10,
          // color:'black',
          name:'投入达成率',
          type:'line',
          label: {
            normal: {
                formatter:'{c}%',
                show: true,
                color:'#fff'
            }
        },
          data:sucessIn
         },
        {
          yAxisIndex:1,
          symbol: 'circle',
          symbolSize: 10,
          // color:'black',
          name:'产出达成率',
          type:'line',
          label: {
            normal: {
                formatter:'{c}%',
                show: true,
                color:'#fff'
            }
        },
          data:sucessOut
        }
      ]
    };

    }

    setEchartYiled(data)
    {
      this.chartOptionYield={
        title: {
          text: '工厂良率',
          textStyle:{
            color: '#fff',
            fontSize:15,
            fontWeight:'bold',
            fontFamily: 'Microsoft YaHei'
          },
          x: 'center'
        },
      tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c}"
       },
       color:['#0073FF','#1FE9BA','#B206FF'],
       series: [
    {
        name:'工厂良率',
        type:'pie',
        radius: ['45%', '65%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
              formatter: '{b}：{c}%  ',
              textStyle:{
                color: '#fff',
                      lineHeight: 10,
                      align: 'center',
                      fontSize: 12,
                      fontFamily:'Microsoft Yahei'
              }
          }
      },
        labelLine: {
            normal: {
                show: true,
                lineStyle:{
                  width:2
                }
            }
        },
        data:[
            {value:data[0].YIELD_MONTH,name:'ARRAY',itemStyle:{normal:{color:'#0073FF'}}},
            {value:data[1].YIELD_MONTH, name:'CF',itemStyle:{normal:{color:'#1FE9BA'}}},
            {value:data[2].YIELD_MONTH, name:'CELL',itemStyle:{normal:{color:'#B206FF'}}}
        ]
    },
    {
      name:'综合良率',
      type:'pie',
      radius: ['0%', '40%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
            formatter: '{b}\n{c}%  ',
            textStyle:{
              color: 'RGB(0,0,0)',
                    lineHeight: 16,
                    align: 'center',
                    fontSize: 12,
                    fontWeight:'bold',
                    fontFamily:'Microsoft Yahei'
            },
            position:'center'
        }
    },
      data:[
          {value:(data[0].YIELD_MONTH*data[2].YIELD_MONTH/100).toFixed(2),name:'综合良率',itemStyle:{normal:{color:'RGB(255,255,0)'}}},
      ]
  }
]
}

    }

    //
    dataListCst(){
      this.chartOptionCST = {
        color:['#1FE9BA','#FFF932','#B2FF06'],
        legend: {
          data:['Production','Develop','Engineer'],
          orient: 'horizontal', // 'vertical'
          show:true,
          x: 'center', // 'center' | 'left' | {number},
          y: 'bottom', // 'center' | 'bottom' | {number}
          textStyle:{
            fontSize:10,
            color: '#fff',
            fontFamily: 'Microsoft YaHei',
          },
          type:'scroll',
          itemWidth:9,
          itemHeight:7
      },
       tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'|'cross'
                    // color:''
                },
                showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                hideDelay: 100,            // 隐藏延迟，单位ms
                transitionDuration: 0.4,
                backgroundColor: 'rgba(0,0,0,0.8)',
            },
        grid:{
          left: '10%',
              right: '1%',
              bottom: '18%',
              top:'10%',
              height:'65%'
        },
        title: {
          text: 'CST占用情况',
          textStyle:{
            color: '#fff',
            fontSize:15,
            fontWeight:'bold',
            fontFamily: 'Microsoft YaHei',
          },
          x: 'center'
        },
          xAxis: {
              type: 'category',
              data: ['AC','FC','CC'],
              axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'2',//坐标线的宽度
                }
            },
            axisLabel:{
              fontFamily: 'Microsoft YaHei',
                    fontSize:10
            }
          },
          yAxis : [
            {
                type : 'value',
                axisLabel: {
                  formatter: '{value}',
                    fontFamily: 'Microsoft YaHei',
                    fontSize:10    
              },
              splitLine:{
                show:false
              },
              axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            },
        ],
          series: [
            {
              name:'Production',
              data: [841, 366, 140],
              type: 'bar',
              barWidth:30,
              itemStyle:{
                fontSize:8,
                
              }
          },
          {
            name:'Develop',
            data: [76, 62, 116],
            type: 'bar',
            barWidth:30,
            itemStyle:{
              fontSize:8,
             
            }
        },
        {
          name:'Engineer',
          data: [30, 150, 310],
          type: 'bar',
          barWidth:30,
          itemStyle:{
            fontSize:8,
            
          }
      }
        ]
      };
    }

    //第二行数据-start
    dataListRunRate()
    {
      const url='/assets/demo/data/B6/b6machineRunrate.json';
      this.apiService.testGet(url).subscribe(
        (res) => {
          console.log(res);
          this.setEchartMachineRunrate(res);
        },
        (error) => { console.log(error); }
  
      );
    }
    setEchartMachineRunrate(data)
    {
      const xEqp1=new Array();
      const yRun1=new Array();
      const yIdle1= new Array();
      const yEtime1 = new Array();
      const yDown1 = new Array();
      const yMaint1 = new Array();
      const yEtc1 = new Array();
      const yJc1 = new Array();
      const xEqp2=new Array();
      const yRun2=new Array();
      const yIdle2= new Array();
      const yEtime2 = new Array();
      const yDown2 = new Array();
      const yMaint2 = new Array();
      const yEtc2 = new Array();
      const yJc2 = new Array();
      console.log(data.length);
      for(var i=0;i<data.length-15;i++)
      {
        xEqp1.push(data[i].EQP);
        yRun1.push(data[i].RUN);
        yIdle1.push(data[i].IDLE);
        yEtime1.push(data[i].ETIME);
        yDown1.push(data[i].DOWN);
        yMaint1.push(data[i].MAINT);
        yEtc1.push(data[i].ETC);
        yJc1.push(data[i].JC);
      }
      for(var i=data.length-15;i<data.length;i++)
      {
        xEqp2.push(data[i].EQP);
        yRun2.push(data[i].RUN);
        yIdle2.push(data[i].IDLE);
        yEtime2.push(data[i].ETIME);
        yDown2.push(data[i].DOWN);
        yMaint2.push(data[i].MAINT);
        yEtc2.push(data[i].ETC);
        yJc2.push(data[i].JC);
      }
      console.log(xEqp1);
       this.chartOptionPh1Run = {
      //   graphic: [
      //     {
      //         type: 'group',
      //         rotation: Math.PI / 4,
      //         bounding: 'raw',
      //         opacity:0.5,
      //         right:220,
      //         bottom:110,
      //         z: 10,              
      //         zlevel:10,
      //         children: [
      //             {
      //                 type: 'text',
      //                 left: 'center',
      //                 top: 'center',
      //                 z: 100,
      //                 style: {
      //                     fill: 'rgba(0,0,0,0.3)',
      //                     // text: this.currentUser,
      //                     font: 'bold 18px Microsoft YaHei'
      //                 }
      //             }
      //         ]
      //     }
      // ],
        title: {
          text: 'PH1关键设备稼动',
          textStyle:{
            color: '#fff',
            fontSize:15,
            fontWeight:'bold',
            fontFamily: 'Microsoft YaHei'
          },
          x: 'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        color:['#1FE9BA','#FFF932','#B2FF06','#E60412','#B206FF','#5241D8','#FFAE05'],
        //color:['#17fdda','#fd9f0a','#00b8d6','#ed7cd7','#5411e2','#d9ff2f','#f2f3ed'],
        legend: {
            data:['RUN','IDLE','ETIME','DOWN','MAINT','ETC','JC'],
            orient: 'horizontal', // 'vertical'
            show:true,
            x: 'center', // 'center' | 'left' | {number},
            y: 'bottom', // 'center' | 'bottom' | {number}
            textStyle:{
              fontSize:10,
              color: '#fff',
               fontFamily: 'Microsoft YaHei',
            },
            itemWidth:9,
            itemHeight:7
        },
        grid: {
            left: '7%',
            right: '1%',
            bottom: '18%',
            top:'10%',
            height: "65%"
            //containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : xEqp1,
                axisLabel:{
                  interval:0,//横轴信息全部显示
                  rotate:0,//30度角倾斜显示
                  fontFamily: 'Microsoft YaHei',
                  fontSize:10
                },
                axisLine: {
                  lineStyle: {
                      type: 'solid',
                      color: '#fff',//左边线的颜色
                      width:'2'//坐标线的宽度
                  }
              },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                  formatter: '{value}%',
                    fontFamily: 'Microsoft YaHei',
                    fontSize:10
                  
              },
              min:0,
              max:100,
              splitLine:{
                show:false
              },
              axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            }
        ],
        series : [
            {
                name:'RUN',
                type:'bar',
                stack:'稼动',
                data:yRun1
            },
            {
                name:'IDLE',
                type:'bar',
                stack: '稼动',
                data:yIdle1
            },
            {
                name:'ETIME',
                type:'bar',
                stack: '稼动',
                data:yEtime1
            },
            {
                name:'DOWN',
                type:'bar',
                stack: '稼动',
                data:yDown1
            },
            {
              name:'MAINT',
              type:'bar',
              stack:'稼动',
              data:yMaint1
            },
            {
              name:'ETC',
              type:'bar',
              stack:'稼动',
              data:yEtc1
            },
            {
              name:'JC',
              type:'bar',
              stack:'稼动',
              data:yJc1
            }
            
           
        ]
      };
      this.chartOptionPh2Run = {
        title: {
          text: 'PH2关键设备稼动',
          textStyle:{
            color: '#fff',
            fontSize:15,
            fontWeight:'bold',
            fontFamily: 'Microsoft YaHei',
          },
          x: 'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        color:['#1FE9BA','#FFF932','#B2FF06','#E60412','#B206FF','#5241D8','#FFAE05'],
        legend: {
            data:['RUN','IDLE','ETIME','DOWN','MAINT','ETC','JC'],
            orient: 'horizontal', // 'vertical'
            show:true,
            x: 'center', // 'center' | 'left' | {number},
            y: 'bottom', // 'center' | 'bottom' | {number}
            textStyle:{
              fontSize:10,
              color: '#fff',
              fontFamily: 'Microsoft YaHei',
            },
            itemWidth:9,
            itemHeight:7
        },
        grid: {
            left: '7%',
            right: '1%',
            bottom: '18%',
            top:'10%',
            height: "65%"
            //containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : xEqp2,
                axisLabel:{
                  interval:0,//横轴信息全部显示
                  rotate:0,//30度角倾斜显示
                  fontFamily: 'Microsoft YaHei',
                  fontSize:10
                },
                axisLine: {
                  lineStyle: {
                      type: 'solid',
                      color: '#fff',//左边线的颜色
                      width:'2'//坐标线的宽度
                  }
              },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                  formatter: '{value}%',
                    fontFamily: 'Microsoft YaHei',
                    fontSize:10
                  
              },
              min:0,
              max:100,
              splitLine:{
                show:false
              },
              axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            }
        ],
        series : [
            {
                name:'RUN',
                type:'bar',
                stack:'稼动',
                data:yRun2
            },
            {
                name:'IDLE',
                type:'bar',
                stack: '稼动',
                data:yIdle2
            },
            {
                name:'ETIME',
                type:'bar',
                stack: '稼动',
                data:yEtime2
            },
            {
                name:'DOWN',
                type:'bar',
                stack: '稼动',
                data:yDown2
            },
            {
              name:'MAINT',
              type:'bar',
              stack:'稼动',
              data:yMaint2
            },
            {
              name:'ETC',
              type:'bar',
              stack:'稼动',
              data:yEtc2
            },
            {
              name:'JC',
              type:'bar',
              stack:'稼动',
              data:yJc2
            }  
        ]
      };
   
    }
    //第二行数据-end

    //第三行数据-start
    dataListWip()
    {
      const url4='/assets/demo/data/B6/b6WIP.json'; 
      this.apiService.testGet(url4).subscribe(
      (res) => {
        console.log('PMWIP');
        console.log(res);
        this.setEchartWIP(res);
      },
      (error) => { console.log(error); }

    );
    }

    setEchartWIP(data)
    { 
      const xOper1=new Array();
      const yCount1=new Array();
      const xOper2=new Array();
      const yCount2=new Array();
     
      console.log(data.length);
      for(var i=0;i<data.length/2;i++)
      {
        xOper1.push(data[i].PROCESSOPERATIONNAME);
        yCount1.push(data[i].LOTCOUNT);
      }
      for(var i=data.length/2;i<data.length;i++)
      {
        xOper2.push(data[i].PROCESSOPERATIONNAME);
        yCount2.push(data[i].LOTCOUNT);
      }
      console.log(xOper1);
       this.chartOptionPh1WIP = {
        title: {
          text: 'PH1关键工序WIP&BANK',
          textStyle:{
            color: '#fff',
            fontSize:15,
            fontWeight:'bold',
            fontFamily: 'Microsoft YaHei',
          },
          x: 'center'
        },
        color:['#0073FF'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
        },      
        grid: {
            left: '6%',
            right: '1%',
            bottom: '15%',
            top:'10%'
            //containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : xOper1,
                axisLabel:{
                  interval:0,//横轴信息全部显示
                  rotate:45,//30度角倾斜显示
                  fontFamily: 'Microsoft YaHei',
                  fontSize:10
                },
                axisLine: {
                  lineStyle: {
                      type: 'solid',
                      color: '#fff',//左边线的颜色
                      width:'2'//坐标线的宽度
                  }
              },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                  formatter: '{value}',
                    fontFamily: 'Microsoft YaHei',
                    fontSize:10  
              },
              max:100,
              splitLine:{
                show:false
              },
              axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            }
        ],
        series : [
            { 
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color:'#fff'
                    }
                  },
                data:yCount1,
            }
           
        ]
      };
      this.chartOptionPh2WIP = {
        title: {
          text: 'PH2关键工序WIP&BANK',
          textStyle:{
            color: '#fff',
            fontSize:15,
            fontWeight:'bold',
            fontFamily: 'Microsoft YaHei',
          },
          x: 'center'
        },
        color:['#0073FF'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
        },      
        grid: {
            left: '6%',
            right: '1%',
            bottom: '15%',
            top:'10%'
            //containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : xOper2,
                axisLabel:{
                  interval:0,//横轴信息全部显示
                  rotate:45,//30度角倾斜显示
                  fontFamily: 'Microsoft YaHei',
                  fontSize:10
                },
                axisLine: {
                  lineStyle: {
                      type: 'solid',
                      color: '#fff',//左边线的颜色
                      width:'2'//坐标线的宽度
                  }
              },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                  formatter: '{value}',
                    fontFamily: 'Microsoft YaHei',
                    fontSize:10    
              },
              max:100,
              splitLine:{
                show:false
              },
              axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            }
        ],
        series : [
            { 
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color:'#fff'
                    }
                  },
                data:yCount2,
            }
           
        ]
      
      }
    }
    //第三行数据-end
  }
  
