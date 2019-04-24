import { Component, OnInit } from '@angular/core';
import { PmTAT } from './model/PmTAT';
import { ApiService } from '../../common/service/api/api.service';
import { PmMTTR } from './model/PmMTTR';
import { PmInOut } from './model/PmInOut';
import { PmFactoryYield } from './model/PmFactoryYield';
import { PmCumYield } from './model/PmCumYield';
import { Factory } from './model/Factory';
import { EQPGroup } from './model/EQPGroup';
import { PmCapaMonthWeek } from './model/PmCapaMonthWeek';
import { PmMcs } from './model/PmMcs';
import { PmWipMove } from './model/PmWipMove';

@Component({
  selector: 'app-b8-dashboard',
  templateUrl: './b8-dashboard.component.html',
  styleUrls: ['./b8-dashboard.component.css']
})
export class B8DashboardComponent implements OnInit {

  PmTAT: PmTAT[];
  PmTATOption;
  PmMTTR;
  //中部
  PmInOut: PmInOut[];
  PmInOutOption;
  total_in;
  total_out;
  PmCumYield;
  Cum_Yiled;
  PmFactoryYieldOption;
  PmFactoryYield: PmFactoryYield[];
  PmCumYieldOption;

  //1-3
  SelectaEQPGroup;
  EQPGroup;
  EQPGroupList;
  Factory;
  FactoryList;
  SelectaFactory;
  Selectfactory;
  Selecteqpgroup;
  PmCapaMonthWeek;
  PmCapaMonthWeekOption;
  PmMcsOption;
  PmMcs;
  PmWipMoveChartOption;//2
  PmWipMove: PmWipMove[];

  
  constructor(private apiService: ApiService,) { }

  ngOnInit() {
    this.getPmTAT();
    this.getPmMTTR();
    this.getPmInoUT();//页面1-2
    this.getPmFactoryYield();//页面1-2
    this.getPmCumYield();
    this.getPmFactory();//1-3
    this.getPmCapaMonthWeek();//1-3
    this.getPmMcs();//1-3-2
    this.getPmWipMove();//2
  }

  getPmWipMove() {
    const url='/assets/demo/data/B8/PmWipMove.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        this.PmWipMove = <PmWipMove[]> res;
        // console.log(this.PmWipMove);
        this.SetPmWipMoveData(this.PmWipMove);
      },
      (error) => {console.log(error) ; }
    );
  }
  SetPmWipMoveData(data) {
    this.PmWipMoveChartOption = {
        title : {
            //   text: 'Array投入看板',
              y: 50,
              x: 'center'
            //   subtext: 'Plan&Act'
          },
           grid: {
               x: 100,
               y: 45,
               x2: 70,
               y2: 110
           },
           color:['#F0F8FF','#006400','#B8860B','008B8B','#DC143C','#6495ED','#FF7F50','#7FFF00','#A52A2A','#8A2BE2','#7FFFD4','#CCFF00','#CC66FF','#CC00FF','#99FF66','#336666','#CC6600'],
            tooltip : {
            trigger: 'axis',
            formatter: function(params) {
                // console.log(params);
                let res = params[0]['axisValue'] + '</br>';
                for (const value of params) {
                  if (value['value'] !== 0) {
                    res += value['seriesName'] + ':' + value['value'] + '</br>';
                   }
                }
                return res;
            }
        },
        calculable : true,
        legend: {
            data: this.setLegend(data, 'PRODUCTSPECNAME', 'MOVE_QTY'),
            textStyle: {
                color: '#00CED1',
                fontSize: 10
            },
            y: 'bottom',
            padding: 2,    // [5, 10, 15, 20]
            itemGap: 2,
            // orient: 'vertical',
            // align: 'right',
        },
        xAxis : [
            {
                type : 'category',
                min: 0,
                data : this.setEchartsData_multi_x(data, 'DESCRIPTION'),
                // axisLabel: {rotate: 40},
                // textStyle: {fontSize: 6}// 让字体变大
                axisLabel: {
                      rotate: 30,
                      show: true,
                      textStyle: {
                                    color: '#00CED1'
                                }},
                  textStyle: {fontSize: 10, color: 'white'}, // 让字体变大
                  axisLine: {
                    lineStyle: {
                        color: '#0087ED',
                        width: 1, // 这里是为了突出显示加上的
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : 'Wip(sh)',
                axisLabel : {
                    textStyle: {
                                      color: '#00CED1'
                              }
                  },
                  splitLine: {
                      　　　　show: false
                      　　},
                  axisLine: {
                          lineStyle: {
                              color: '#0087ED',
                              width: 1, // 这里是为了突出显示加上的
                          }
                      }
            },
            {
                type : 'value',
                name : 'Move(sh)',
                position: 'right',
                // offset: 80,
                show: true,
                axisLabel : {
                    textStyle: {
                                      color: '#00CED1'
                              }
                  },
                  splitLine: {
                      　　　　show: false
                      　　},
                  axisLine: {
                          lineStyle: {
                              color: '#0087ED',
                              width: 1, // 这里是为了突出显示加上的
                          }
                      }
            }
        ],
        series : this.setPmWipMoveSeries(data, 'DESCRIPTION', 'PRODUCTSPECNAME', 'WIP_QTY', 'MOVE_QTY')
    };
      }
  getPmMcs() {
    const url='/assets/demo/data/B8/PmMcs.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        this.PmMcs = <PmMcs[]> res;
        // console.log(this.PmMcs);
        this.SetPmMcsData(this.PmMcs);
      },
      (error) => {console.log(error) ; }
    );
  }
  SetPmMcsData(data) {
    //   console.log(data);
    this.PmMcsOption = {
      title: {
          show: false,
          text: '基础雷达图'
      },
      tooltip: {
      },
      legend: {
          show: false,
          data: ['array']
      },
      grid: {
          x: 0,
          y: 200,
          x2: 0,
          y2: 140
      },
      radar: {
          // shape: 'circle',
          indicator: this.setradarEchartsxData(data, 'OPER_CODE')
      },
      series: [{
          name: 'array',
          type: 'radar',
          radius: '20%',
          // areaStyle: {normal: {}},
          data : [
              {
                  value : this.setEchartsData(data, 'RATIO'),
                  name : 'array'
              }
          ]
      }]
    };
}
  getPmCapaMonthWeek() {
    const url='/assets/demo/data/B8/PmCapaMonthWeek.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        this.PmCapaMonthWeek = <PmCapaMonthWeek[]> res;
        this.SetPmCapaMonthWeekData(this.PmCapaMonthWeek);
      },
      (error) => {console.log(error) ; }
    );
  }

  getPmCapaMonthWeekSearch() {
    const options = {
       params: { EQP_GROUP1: this.Selecteqpgroup, FACTORY: this.Selectfactory}
     };
     const url='/assets/demo/data/B8/PmCapaMonthWeek.json';
     this.apiService.getOne(url, options).subscribe(
       (res) => {
           this.PmCapaMonthWeek = <PmCapaMonthWeek[]> res;
           this.SetPmCapaMonthWeekData(this.PmCapaMonthWeek);
         },
         (error) => {console.log(error) ; }
     );
 }
 SetPmCapaMonthWeekData(data) {
    this.PmCapaMonthWeekOption = {
        //    backgroundColor: 'white',
        title : {
            //   text: 'Array投入看板',
              y: 50,
              x: 'center'
            //   subtext: 'Plan&Act'
          },
           grid: {
               x: 35,
               y: 10,
               x2: 20,
               y2: 50
           },
            tooltip : {
            trigger: 'axis',
            formatter: function(params) {
                // console.log(params);
                let res = params[0]['axisValue'] + '</br>';
                for (const value of params) {
                  if (value['value'] !== 0) {
                    res += value['seriesName'] + ':' + value['value'] + '</br>';
                   }
                }
                return res;
            }
        },
        calculable : true,
        legend: {
            data: this.setLegend(data, 'EQP_STATE', 'R_RATIO'),
            textStyle: {
                color: '#00CED1',
                fontSize: 10
            },
            y: 'bottom',
            padding: 1,    // [5, 10, 15, 20]
            itemGap: 1,
            itemWidth: 10,
            itemHeight: 5
            // orient: 'vertical',
            // align: 'right',
        },
        xAxis : [
            {
                type : 'category',
                min: 0,
                data : this.setEchartsData_multi_x(data, 'PERIOD'),
                // axisLabel: {rotate: 40},
                // textStyle: {fontSize: 6}// 让字体变大
                axisLabel: {
                    //   rotate: 30,
                      show: true,
                      textStyle: {
                                    color: '#00CED1'
                                }},
                  textStyle: {fontSize: 10, color: 'white'}, // 让字体变大
                  axisLine: {
                    lineStyle: {
                        color: '#0087ED',
                        width: 1, // 这里是为了突出显示加上的
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : 'Wip(sh)',
                axisLabel : {
                    textStyle: {
                                      color: '#00CED1'
                              }
                  },
                  splitLine: {
                      　　　　show: false
                      　　},
                  axisLine: {
                          lineStyle: {
                              color: '#0087ED',
                              width: 1, // 这里是为了突出显示加上的
                          }
                      }
            },
            {
                type : 'value',
                name : 'Move(sh)',
                position: 'right',
                // offset: 80,
                show: false,
                axisLabel : {
                    textStyle: {
                                      color: '#00CED1'
                              }
                  },
                  splitLine: {
                      　　　　show: false
                      　　},
                  axisLine: {
                          lineStyle: {
                              color: '#0087ED',
                              width: 1, // 这里是为了突出显示加上的
                          }
                      }
            }
        ],
        series : this.setPmCapaMonthWeekSeries(data, 'PERIOD', 'EQP_STATE', 'O_RATIO', 'R_RATIO')
    };
}
  getPmFactory() {
    const url='/assets/demo/data/B8/Factory.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        this.Factory = <Factory[]> res;
        // console.log(this.Factory);
        this.SetPmFactoryData(this.Factory);
      },
      (error) => {console.log(error) ; }
    );
  }
  SetPmFactoryData(data) {
    const fac = new Array();
    for (const a of data) {
        fac.push({ label: a['FACTORY'], value: a['FACTORY'] });
    }
  //   console.log(fac);
    this.FactoryList = fac;
    this.Selectfactory = fac[0]['value'];
//   console.log(this.Selectfactory);
    this.onFactoryChange(this.Selectfactory);
}
onFactoryChange(data) {
    const options = {
        params: { FACTORY: data}
      };
    //   console.log(data);
    const url3='/assets/demo/data/B8/EQPGroup.json';
      this.apiService.testGet(url3).subscribe(
        (res) => { 
            this.EQPGroup = <EQPGroup[]> res;
            console.log(this.EQPGroup);
            this.SetPmEQPGroupData(this.EQPGroup, 'EQP_GROUP1');
        },
        (error) => {console.log(error); }
      );
  }

  SetPmEQPGroupData(obj, item) {
    const EQPGroupData = new Array();
    for (const a of obj) {
        for (const b of obj) {
         EQPGroupData.push({label: b[item], value: b[item]});
        }
    }
    this.EQPGroupList = EQPGroupData;
    this.Selecteqpgroup = EQPGroupData[0]['value'];
}

  getPmTAT() {
    const url='/assets/demo/data/B8/TAT.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        this.PmTAT = <PmTAT[]> res;
        this.SetPmTATData(this.PmTAT);
        // console.log(this.PmTAT);
      },
      (error) => {console.log(error) ; }
    );
  }
  SetPmTATData(data) {
    this.PmTATOption = {
 title : {
     // text: 'Array Bank看板',
     // subtext: 'Array Bank'
 },
 tooltip : {
     trigger: 'axis'
     // formatter: '{a} <br/>{b} : {c}'
 },
 legend: {
     data: ['STATIC' , 'DYNAMIC'],
     x: 'right',
     y: 18,
     textStyle: {
         color: '#00CED1',
         fontSize: 10
     }
 },
 grid: {
     x: 10,
     y: 30,
     x2: 5,
     y2: 34
 },
 calculable : false,
 xAxis : [        // X轴数据
     {
         type : 'category',
         boundaryGap : true,
         data : this.setEchartsData(data, 'FACTORY'),
         axisLabel: {
             //   rotate: 30,
               show: true,
               textStyle: {
                             color: '#00CED1'
                         }},
           textStyle: {fontSize: 10, color: 'white'}, // 让字体变大
           axisLine: {
             lineStyle: {
                 color: '#0087ED',
                 width: 1, // 这里是为了突出显示加上的
             }
         }
     }
 ],
 yAxis : [          // Y轴数据
     {
         type : 'value',
         show: 0,
         axisLabel : {
             textStyle: {
                               color: '#00CED1'
                       }
           },
           splitLine: {
               　　　　show: false
               　　},
           axisLine: {
                   lineStyle: {
                       color: '#0087ED',
                       width: 1, // 这里是为了突出显示加上的
                   }
               }
     }
 ],
 series :
 [       // 驱动图表数据
     {
         name: 'STATIC',
         type: 'bar',     // 设置 默认显示图表形状 bar
         smooth: true,
         barWidth: 25,
         color: '#0000CD',
         itemStyle: {normal: {areaStyle: {type: 'default'}, label: {
         show: true,
         position: 'inside',
         formatter: '{c}',
         textStyle: {
             // fontWeight: 'bolder',
             fontSize : '12',
             fontFamily : '微软雅黑',
             show: true,
             color: 'white'
         }
     }}},
         data: this.setEchartsData(data, 'STATIC_TAT')
     },
     {
         name: 'DYNAMIC',
         type:  'bar',     // 设置 默认显示图表形状 bar
         smooth: true,
         barWidth: 25,
         color: '#1E90FF',
         itemStyle: {normal: {areaStyle: {type: 'default'}, label: {
         show: true,
         position: 'inside',
         formatter: '{c}',
         textStyle: {
             // fontWeight: 'bolder',
             fontSize : '12',
             fontFamily : '微软雅黑',
             show: true,
             color: 'white'
         }
     }}},
         data: this.setEchartsData(data, 'DYNAMIC_TAT')
     }
 ]
};
}
//TAT-end

//MTTR-START
getPmMTTR() {

  const url2='/assets/demo/data/B8/PmMTTR.json';
  this.apiService.testGet(url2).subscribe(
    (res) => {
      this.PmMTTR = <PmMTTR[]> res;
    },
    (error) => {console.log(error) ; }
  );
}

// End ArrayTAT
// 以下函数可以公用,请勿随意改动
// 设置Echarts坐标及数据(可设置横坐标值)
setEchartsData(obj, item) {
  const dataArray = new Array();
  for (const value in obj) {
      if (obj.hasOwnProperty(value)) {
       const axisdata = obj[value];
       for (const b in axisdata) {
         if (b === item) {
            const EchartsData = axisdata[b];
            dataArray.push(EchartsData);
       }
     }
     }
   }
 return dataArray;
 }
   // 获取pMInoUT初始值
   getPmInoUT() {
    const url='/assets/demo/data/B8/PmInOut.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        this.PmInOut = <PmInOut[]> res;
        this.SetPmInOutData(this.PmInOut);
        this.total_in = this.getOneData(this.PmInOut, 'A/I', 'ACT').toFixed(1) + 'K';
        this.total_out = this.getOneData(this.PmInOut, 'MDL/O', 'ACT').toFixed(1) + 'K';
      },
      (error) => {console.log(error) ; }
    );
  }

  SetPmInOutData(data) {
    this.PmInOutOption = {
    title : {
    },
    grid: {
     x: 10,
     y: 40,
     x2: 10,
     y2: 25
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data: ['ACT' , 'PLAN'  , 'Ratio'],
        y: 'top',
        x: 'right',
        textStyle: {
            color: '#00CED1'
        },
      itemWidth: 20,
            itemHeight: 10,
            itemGap: 10,
    },
    calculable : false,
    xAxis : [
        {
          splitLine: {show: false}, // 去除网格线
            type : 'category',
            data : this.setEchartsData(data, 'FACTORY'),
            axisLabel: {
                //   rotate: 30,
                  show: true,
                  textStyle: {
                                color: '#00CED1'
                            }},
              textStyle: {fontSize: 10, color: 'white'}, // 让字体变大
              axisLine: {
                lineStyle: {
                    color: '#0087ED',
                    width: 1, // 这里是为了突出显示加上的
                }
            }
        }
    ],
    yAxis : [          // Y轴数据
        {
            type : 'value',
            show: 0,
            max: function(value) {
                // console.log(value);
                return value.max * 2;
            },
            name: 'gls_qty',
                  axisLabel : {
                  textStyle: {
                                    color: '#00CED1'
                            }
                },
                splitLine: {
                    　　　　show: false
                    　　},
                axisLine: {
                        lineStyle: {
                            color: '#0087ED',
                            width: 1, // 这里是为了突出显示加上的
                        }
                    }
        },
        {
            type : 'value',
            name : 'Ratio',
            show: 0,
            axisLabel : {
                formatter: '{value}%',
                textStyle: {
                                color: '#00CED1'
                            }
            },
            min: '50',
            splitLine: {
                　　　　show: false
                　　},
            axisLine: {
                    lineStyle: {
                        color: '#0087ED',
                        width: 1, // 这里是为了突出显示加上的
                    }
           }
      }
    ],
    series :
    [       // 驱动图表数据
        {
            name: 'ACT',
            type: 'bar',     // 设置 默认显示图表形状 bar
            smooth: true,
            barWidth: 20,
            color: '#0000CD',
                  itemStyle: {normal: {areaStyle: {type: 'default'}, label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}K',
                    textStyle: {
                        // fontWeight: 'bolder',
                        fontSize : '12',
                        fontFamily : '微软雅黑',
                        show: true,
                        color: 'white'
                    }
                }}},
            data: this.setEchartsData(data, 'ACT')
        },
        {
            name: 'PLAN',
            type:  'line',     // 设置 默认显示图表形状 bar
            color: 'Lime',
            // barGap: '-100%',
            silent: false,
            z: 10,
            symbolSize: ['20', '2'],
            symbol: ['arrow', 'arrow'],
            lineStyle: {
                normal: {
                    color: 'green',
                    width: 0,
                    type: 'dashed'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: 'DeepSkyBlue',
                    color: 'red'
                    // color: 'rgba(0,0,0, 0)'
                }
            },
            data: this.setEchartsData(data, 'PLAN')
        },
        {
            name: 'Ratio',
            type: 'line',     // 设置 默认显示图表形状 bar
            smooth: false,
            color: '#7FFFD4',
            yAxisIndex: 1,
            itemStyle: {normal: {label: {
                show: true,
                position: 'top',
                formatter: function(params) {
                    // console.log(params);
                    if (params.value < 100) { return '{a|' + params.value + '%' + '}'; } else { return '{b|' + params.value + '%' + '}'; }
                },
                rich : {
                    a: {color: 'OrangeRed' },
                    b: {color: 'white'}
                },
                textStyle: {
            // fontWeight: 'bolder',
            fontSize : '12',
            fontFamily : '微软雅黑',
            show: true,
            color: 'white'
        }
            }}},
            data: this.setEchartsData(data, 'RATIO')
        }
    ]
    };
      }

       // 取结果中的某一个数,item1表示某项的值，如FACTORY下的array，item1=array,item2是某一数据的表头名，如in_qty,item=in_qty
getOneData(obj, item1, item2) {
    let dataArray;
    for (const value in obj) {
        if (obj.hasOwnProperty(value)) {
         const axisdata = obj[value];
         for (const b in axisdata) {
           if (axisdata[b] === item1) {
            dataArray = axisdata[item2];
              // console.log(dataArray);
         }
       }
       }
     }
   return dataArray;
   }

   getPmCumYield() {
    const url='/assets/demo/data/B8/PmCumYield.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        this.PmCumYield = <PmCumYield[]> res;
        this.Cum_Yiled = this.PmCumYield[0].CUM_YIELD + '%';
        console.log(this.PmCumYield);
        console.log(this.Cum_Yiled);
        console.log('1');
      },
      (error) => {console.log(error) ; }
    );
  }


   getPmFactoryYield() {
    const url='/assets/demo/data/B8/PmFactoryYield.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        this.PmFactoryYield = <PmFactoryYield[]> res;
        this.SetPmFactoryYieldData(this.PmFactoryYield);
      },
      (error) => {console.log(error) ; }
    );
  }

   SetPmFactoryYieldData(data) {
    this.PmFactoryYieldOption = {
      tooltip: {
        formatter: "{a}：{c}%"
    },
    grid: {y: 25},
    //    backgroundColor: "rgba(200,250,250,0.5)",
    series: [
        { ///////////////////////////////////////////////大表盘秒针
            name: 'CUM Yield',
            type: 'gauge',
            center: ['50%', '52%'],
            radius: '46%', //仪表盘半径
            min: 95,
            max: 100,
            startAngle: 240,
            endAngle: -60,
            splitNumber: 5,
            animation: 0,
            pointer: { //仪表盘指针
                show: true,
                length: '95%',
                width: 4
            },
             itemStyle: { //仪表盘指针样式
                normal: {
                    color: '#109A39',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },
            axisLine: { //仪表盘轴线样式 
                lineStyle: {
                    color: [
                        [(this.getOneData_rep(data, 'MONTH', 'CUM', 'YIELD') - 95) / 5,
                        this.setgaugecolor(data, 'MONTH', 'CUM', 'YIELD') ],
                        [1, 'DarkGray']
                    ],
                    width: 15
                }
            },
            splitLine: { //分割线样式 
                length: 15,
                lineStyle: {
                    color: 'white',
                    width: 2
                }
            },
            axisTick: { //仪表盘刻度样式
                show: 1,
                splitNumber: 5, //分隔线之间分割的刻度数
                length: 5, //刻度线长
                lineStyle: {
                    color: ['#fff']
                }
            },
            axisLabel: { //刻度标签
                show: 1,
                color: 'white',
                distance: 1, //标签与刻度线的距离
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 10
                },
                formatter: function(t) {
                    switch (t + '') {
                        case '95':
                            return '95%';
                        case '96':
                            return '96%';
                        case '97':
                            return '97%';
                        case '98':
                            return '98%';
                        case '99':
                            return '99%';
                        case '100':
                            return '100%';
                    }
                }
            },
            title: { //仪表盘标题
                show: true,
                offsetCenter: ['0', '155%'],
                textStyle: {
                    color: 'auto',
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'Arial'
                }
            },
           detail: { //仪表盘显示数据
                show: 1,
               formatter: function(params) {
               return params+'%'
             },
            //  color: 'blue',
             borderColor: 'DarkGreen',
             borderWidth: 2,
             backgroundColor: 'DarkGray',
             padding: 1,
             fontWeight: 'bold',
              textStyle: {
              fontSize: 16,
              color: 'auto'
             },
                offsetCenter: ['0', '120%']
            },
            data: [{name: 'Cum Yield', value: this.getOneData_rep(data, 'MONTH', 'CUM', 'YIELD')}]
        },
        { ///////////////////////////////////////////////小表盘月
            name: '月份',
            type: 'gauge',
            center: ['50%', '52%'], // 默认全局居中
            radius: '59%', //仪表盘半径
            min: 95,
            max: 100,
            startAngle: 240,
            endAngle: -60,
            splitNumber: 5,
            animation: 0,
            pointer: { //仪表盘指针
                show: 0,
                length: '90%',
                width: 1
            },
            itemStyle: { //仪表盘指针样式
                normal: {
                    color: '#00b0b0',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },
            axisLine: { //仪表盘轴线样式 
                lineStyle: {
                    color: [
                        [(this.getOneData_rep(data, 'MONTH', 'MODULE', 'YIELD') - 95) / 5,
                        this.setgaugecolor(data, 'MONTH', 'MODULE', 'YIELD') ],
                        [1, 'DarkGray']
                    ],
                    width: 15
                }
            },
            splitLine: { //分割线样式 
                show: 0,
                length: 6,
                lineStyle: {
                    width: 1
                }
            },
            axisTick: {
                show: 0
            }, //仪表盘刻度样式
            axisLabel: { //刻度标签
                show: 0,
                distance: 1, //标签与刻度线的距离
                textStyle: {
                    color: '#0000ff',
                    fontFamily: '宋体'
                },
                formatter: function(t) {
                    switch (t + '') {
                         case '0':
                            return '0%';
                        case '20':
                            return '20%';
                        case '40':
                            return '40%';
                        case '60':
                            return '60%';
                        case '80':
                            return '80%';
                        case '100':
                            return '100%';
                    }
                }
            },
             title: { //仪表盘标题
                show: true,
                offsetCenter: ['-12', '-93%'],
                textStyle: {
                    color: 'blue',
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'Arial'
                }
            },
           detail: { //仪表盘显示数据
                show: 1,
               formatter: function(params) {
               return params+'%'
             },
             color: 'blue',
              textStyle: {
              fontWeight: 'bold',
              fontSize: 12
             },
                offsetCenter: ['15', '-93%']
            },
            data: [{name: 'M:',value: this.getOneData_rep(data, 'MONTH', 'MODULE', 'YIELD')}]
        },
        { ///////////////////////////////////////////////小表盘月
            name: '月份',
            type: 'gauge',
            center: ['50%', '52%'], // 默认全局居中
            radius: '72%', //仪表盘半径
            min: 95,
            max: 100,
            startAngle: 240,
            endAngle: -60,
            splitNumber: 5,
            animation: 0,
            pointer: { //仪表盘指针
                show: 0,
                length: '90%',
                width: 1
            },
            itemStyle: { //仪表盘指针样式
                normal: {
                    color: '#00b0b0',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },
            axisLine: { //仪表盘轴线样式 
                lineStyle: {
                    color: [
                        [(this.getOneData_rep(data, 'MONTH', 'CF', 'YIELD') - 95) / 5,
                        this.setgaugecolor(data, 'MONTH', 'CF', 'YIELD') ],
                        [1, 'DarkGray']
                    ],
                    width: 15
                }
            },
            splitLine: { //分割线样式 
                show: 0,
                length: 6,
                lineStyle: {
                    width: 1
                }
            },
            axisTick: {
                show: 0
            }, //仪表盘刻度样式
            axisLabel: { //刻度标签
                show: 0,
                distance: 1, //标签与刻度线的距离
                textStyle: {
                    color: '#0000ff',
                    fontFamily: '宋体'
                },
                formatter: function(t) {
                    switch (t + '') {
                        case '0':
                            return '0%';
                        case '20':
                            return '20%';
                        case '40':
                            return '40%';
                        case '60':
                            return '60%';
                        case '80':
                            return '80%';
                        case '100':
                            return '100%';
                    }
                }
            },
            title: { //仪表盘标题
                show: true,
                offsetCenter: ['-12', '-92%'],
                textStyle: {
                    color: 'blue',
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'Arial'
                }
            },
           detail: { //仪表盘显示数据
                show: 1,
               formatter: function(params) {
               return params+'%'
             },
             color: 'blue',
             fontWeight: 'bold',
              textStyle: {
              fontSize: 12
             },
                offsetCenter: ['17', '-92%']
            },
            data: [{
                name:'Cf:',
                value: this.getOneData_rep(data, 'MONTH', 'CF', 'YIELD')
                }]
        },
    { ///////////////////////////////////////////////小表盘星期
        name: '星期',
        type: 'gauge',
        center: ['50%', '52%'], // 默认全局居中
        radius: '85%', //仪表盘半径
        min: 95,
        max: 100,
        startAngle: 240,
        endAngle: -60,
        splitNumber: 5,
        animation: 0,
        pointer: { //仪表盘指针
            show: 0,
            length: '80%',
            width: 3
        },
        itemStyle: { //仪表盘指针样式
            normal: {
                color: '#00b0b0',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        axisLine: { //仪表盘轴线样式 
            lineStyle: {
                color: [
                    [(this.getOneData_rep(data, 'MONTH', 'CELL', 'YIELD') - 95) / 5,
                     this.setgaugecolor(data, 'MONTH', 'CELL', 'YIELD') ],
                    [1, 'DarkGray']
                ],
                width: 15
            }
        },
        splitLine: { //分割线样式 
            show: 0,
            length: 18,
            lineStyle: {
                width: 1
            }
        },
        axisTick: {
            show: 0
        }, //仪表盘刻度样式
        axisLabel: { //刻度标签
            show: 0,
            distance: -15, //标签与刻度线的距离
            textStyle: {
                color: '#ffffff'
            },
            formatter: function(t) {
                switch (t + '') {
                    case '0':
                        return '0%';
                    case '20':
                        return '20%';
                    case '40':
                        return '40%';
                    case '60':
                        return '60%';
                    case '80':
                        return '80%';
                    case '100':
                        return '100%';
                }
            }
        },
        title: { //仪表盘标题
            show: true,
            offsetCenter: ['-17', '-95%'],
            textStyle: {
                color: 'blue',
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'Arial'
            }
        },
       detail: { //仪表盘显示数据
            show: 1,
           formatter: function(params) {
           return params+'%'
         },
         color: 'blue',
          textStyle: {
          fontWeight: 'bold',
          fontSize: 12
         },
            offsetCenter: ['15', '-95%']
        },
        data: [{
            name: 'Ce:',
            value: this.getOneData_rep(data, 'MONTH', 'CELL', 'YIELD')
        }]
    },
    { ///////////////////////////////////////////////小表盘24小时
        name: '小时',
        type: 'gauge',
        // radius: ['50%', '70%'],
        center: ['50%', '52%'], // 默认全局居中
        radius: '98%', //仪表盘半径
        min: 95,
        max: 100,
        startAngle: 240,
        endAngle:  -60,
        // 60 * 95 + 240 - 60 * this.getOneData_rep(this.PmFactoryYield, 'MONTH', 'ARRAY', 'YIELD'),
        splitNumber: 5,
        animation: 0,
        pointer: { //仪表盘指针
            show: 0,
            length: '100%',
            width: 1
        },
        itemStyle: { //仪表盘指针样式
            normal: {
                color: '#00b0b0',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            emphasis: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        axisLine: { //仪表盘轴线样式 
            lineStyle: {
                color: [
                    [(this.getOneData_rep(data, 'MONTH', 'ARRAY', 'YIELD') - 95) / 5,
                    this.setgaugecolor(data, 'MONTH', 'ARRAY', 'YIELD') ],
                    [1, 'DarkGray']
                ],
                width: 15
            }
        },
        splitLine: { //分割线样式 
            show: 0,
            length: 6,
            lineStyle: {
                width: 1
            }
        },
        axisTick: { //仪表盘刻度样式
            show: 0,
            splitNumber: 5, //分隔线之间分割的刻度数
            length: 5, //刻度线长
            lineStyle: {
                color: ['#ffffff']
            }
        },
        axisLabel: { //刻度标签
            show: 0,
            distance: 2, //标签与刻度线的距离
            textStyle: {
                color: '#0000ff',
                fontFamily: '宋体'
            },
            formatter: function(t) {
                switch (t + '') {
                    case '0':
                        return '0%';
                    case '20':
                        return '20%';
                    case '40':
                        return '40%';
                    case '60':
                        return '60%';
                    case '90':
                        return '80%';
                    case '100':
                        return '100%';
                    
                }
            }
        },
        title: { //仪表盘标题
            show: true,
            offsetCenter: ['-12', '-95%'],
            textStyle: {
                color: 'blue',
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'Arial'
            }
        },
        detail: { //仪表盘显示数据
            show: 1,
           formatter: function(params) {
           return params+'%'
         },
         color: 'blue',
          textStyle: {
          fontWeight: 'bold',
          fontSize: 12
         },
            offsetCenter: ['17', '-95%']
        },
        data: [{
            name: 'A:',
            value: this.getOneData_rep(data, 'MONTH', 'ARRAY', 'YIELD')
        }
    ]
    }
      ]
  };
  }

  // 取结果中有两列符合条件的第三列的值,item1表示某项的值，如item1=Month，item2=array,item3是某一数据的表头名，如in_qty,item=in_qty
 getOneData_rep(obj, item1, item2, item3) {
    let dataArray;
    for (const value in obj) {
        if (obj.hasOwnProperty(value)) {
         const axisdata = obj[value];
         for (const b in axisdata) {
           if (axisdata[item1] === this.DateToString() && axisdata[b] === item2 ) {
            dataArray = axisdata[item3];
            //   console.log(dataArray);
         }
       }
       }
     }
   return dataArray;
   }

   // 获取当前日期的月份，01 02 03.。。
  DateToString() {
    let dateString;
    const DateTo = new Date();
     dateString =  String(((DateTo.getMonth() + 1 ) < 10 ?
     '0' + ( DateTo.getMonth() + 1  ) : ( DateTo.getMonth() + 1  )));
   return dateString;
  }

  setgaugecolor(obj, item1, item2, item3) {
    let gaugecolor;
    if (this.getOneData_rep(obj, item1, item2, item3) >= this.getOneData_Prerep(obj, item1, item2, item3)) {
        gaugecolor = ['DarkBlue'];
    } else {gaugecolor = '#8B0000'; }
    return gaugecolor;
}

   // 取结果中有两列符合条件的第三列的值,item1表示某项的值，如item1=Month，item2=array,item3是某一数据的表头名，如in_qty,item=in_qty
   getOneData_Prerep(obj, item1, item2, item3) {
    let dataArray;
    for (const value in obj) {
        if (obj.hasOwnProperty(value)) {
         const axisdata = obj[value];
         for (const b in axisdata) {
           if (axisdata[item1] === this.PreDateToString() && axisdata[b] === item2 ) {
            dataArray = axisdata[item3];
            //   console.log(dataArray);
         }
       }
       }
     }
    //  console.log(dataArray);
   return dataArray;
   }

   PreDateToString() {
    let dateString;
    const DateTo = new Date();
     dateString =  String((DateTo.getMonth() ) < 10 ?
     '0' + ( DateTo.getMonth()  ) : ( DateTo.getMonth()  ));
     if (DateTo.getMonth()  === 0) {
        dateString = '12';
     } else if (DateTo.getMonth() > 0 && DateTo.getMonth() < 10) {
        dateString = String('0' + DateTo.getMonth());
     } else { DateTo.getMonth(); }
   return dateString;
  }

  setLegend(obj, item1, item2) {
    const legend = new Array();
    let item1_data;
    item1_data = this.setEchartsData_multi_x(obj, item1);
    for (const n of item1_data) {
     legend.push(n);
    }
 legend.push(item2);
 return legend;
}

 // 当y-axis个数不固定时的x轴取值
 setEchartsData_multi_x(obj, item) {
    const dataArray = new Array();
    for (const value in obj) {
        if (obj.hasOwnProperty(value)) {
         const axisdata = obj[value];
         for (const b in axisdata) {
           if (b === item) {
              const EchartsData = axisdata[b];
              if (dataArray.length === 0) {
                dataArray.push(EchartsData);
              } else if (dataArray.indexOf(EchartsData) === -1) {
                dataArray.push(EchartsData);
              }
           }
         }
       }
     }
  //    console.log(dataArray);
   return dataArray;
   }

   setPmCapaMonthWeekSeries(obj, item1, item2, item3, item4) {
    const allSeries = new Array();
     let dataArray = new Array();
     let p_data = new Array();
     let x_data = new Array();
     dataArray = this.setEchartsData_Y(obj, item1, item2, item3);
     p_data = this.setEchartsData_multi_x(obj, item2);
     x_data = this.setEchartsData_multi_x(obj, item1);
     for (let i = 0; i < p_data.length; i++) {
         const pp_data = new Array();
         for (let j = 0; j < x_data.length; j++) {
             pp_data.push(dataArray[j]);
         }
         for (let j = 0; j < x_data.length; j++) {
             dataArray.shift();
         }
         allSeries.push({type: 'bar',
         barWidth: 10,
         stack: p_data[0],
         color: function(params) {
            //  console.log(params);
             if (params.seriesName === 'RUN') {return 'green'; }
             if (params.seriesName === 'IDLE') {return 'yellow'; }
             if (params.seriesName === 'BM') {return 'red'; }
             if (params.seriesName === 'PM') {return 'blue'; } else {return 'purple'; }
         },
         itemStyle: {normal: {areaStyle: {type: 'default'}, label: {
             show: false,
             position: 'inside',
             formatter: '{c}',
             textStyle: {
                 // fontWeight: 'bolder',
                 fontSize : '12',
                 fontFamily : '微软雅黑',
                 show: true,
                 color: 'white'
             }
         }}},
         name: p_data[i],
         data: pp_data
         });
         // console.log(pp_data);
 }
 allSeries.push({
             name: item4,
             type: 'line',     // 设置 默认显示图表形状 bar
             smooth: true,
             yAxisIndex: 1,
             color: '#7FFFD4',
           itemStyle: {normal: {label: {
                     show: true,
                     position: 'top',
                     formatter: '{c}',
                     textStyle: {
                 // fontWeight: 'bolder',
                 fontSize : '12',
                 fontFamily : '微软雅黑',
                 show: true,
                 color: 'white'
             }
                 }}},
             data: this.setEchartsData_multi_line(obj, item1, item4)
 });
 // console.log(allSeries);
 return allSeries;
}

setEchartsData_multi_line(obj, item1, item2) {
    const dataArray = new Array();
    const data_y = new Array();
    for (const value in obj) {
        if (obj.hasOwnProperty(value)) {
         const axisdata = obj[value];
         for (const b in axisdata) {
           if (b === item1) {
              const EchartsData = axisdata[b];
              if (dataArray.length === 0) {
                dataArray.push(EchartsData);
                data_y.push(axisdata[item2]);
              } else if (dataArray.indexOf(EchartsData) === -1) {
                dataArray.push(EchartsData);
                data_y.push(axisdata[item2]);
              }
           }
         }
       }
     }
    //  console.log(data_y);
   return data_y;
   }

   setEchartsData_Y(obj, item1, item2, item3) {
    let x_data1 = new Array();
    let x_data2 = new Array();
    let y_data = new Array();
    const dataArray = new Array();
    x_data1 = this.setEchartsData_multi_x(obj, item1);
    x_data2 = this.setEchartsData(obj, item2);
    y_data = this.setEchartsData(obj, item3);
        for (const x2 of x_data2) {
                for (const x1 of x_data1) {
                    let i = 0;
                        for (const value of obj) {
                                 if (value[item1] === x1 && value[item2] === x2) {
                                    dataArray.push(value[item3]);
                                    i = 1;
                                    break;
                                 }
                        }
                        if (i === 0 ) {
                            dataArray.push(0);
                        }
                    }
                }
    //  console.log(dataArray);
   return dataArray;
   }

   setradarEchartsxData(obj, item) {
    const dataArray = new Array();
    for (const value in obj) {
        if (obj.hasOwnProperty(value)) {
         const axisdata = obj[value];
         for (const b in axisdata) {
           if (b === item) {
              const EchartsData = axisdata[b];
              dataArray.push({name: EchartsData});
         }
       }
       }
     }
   return dataArray;
   }

   setPmWipMoveSeries(obj, item1, item2, item3, item4) {
    const allSeries = new Array();
     let dataArray = new Array();
     let p_data = new Array();
     let x_data = new Array();
     dataArray = this.setEchartsData_Y(obj, item1, item2, item3);
     p_data = this.setEchartsData_multi_x(obj, item2);
     x_data = this.setEchartsData_multi_x(obj, item1);
     for (let i = 0; i < p_data.length; i++) {
         const pp_data = new Array();
         for (let j = 0; j < x_data.length; j++) {
             pp_data.push(dataArray[j]);
         }
         for (let j = 0; j < x_data.length; j++) {
             dataArray.shift();
         }
         allSeries.push({type: 'bar',
         stack: p_data[0],
         itemStyle: {normal: {areaStyle: {type: 'default'}, label: {
             show: false,
             position: 'inside',
             formatter: '{c}',
             textStyle: {
                 // fontWeight: 'bolder',
                 fontSize : '12',
                 fontFamily : '微软雅黑',
                 show: false,
                 color: 'white'
             }
         }}},
         name: p_data[i],
         data: pp_data
         });
         // console.log(pp_data);
 }
 allSeries.push({
             name: item4,
             type: 'line',     // 设置 默认显示图表形状 bar
             smooth: true,
             yAxisIndex: 1,
             color: '#7FFFD4',
           itemStyle: {normal: {label: {
                     show: false,
                     position: 'top',
                     formatter: '{c}',
                     textStyle: {
                 // fontWeight: 'bolder',
                 fontSize : '12',
                 fontFamily : '微软雅黑',
                 show: true,
                 color: 'white'
             }
                 }}},
             data: this.setEchartsData_multi_line(obj, item1, item4)
 });
 // console.log(allSeries);
 return allSeries;
}


}
