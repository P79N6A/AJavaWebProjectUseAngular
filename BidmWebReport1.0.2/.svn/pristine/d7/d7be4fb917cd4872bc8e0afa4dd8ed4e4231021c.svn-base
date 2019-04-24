import { Component, OnInit } from '@angular/core';
import { EchartSet } from '../../boe-ui/boe-chart/model/echartSet';
import { isObject } from 'util';
import { Chart } from '../../common/model/chart';
import { ApiService } from '../../common/service/api/api.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from '../../../core/layout/retab/service/tab.service';
import { EchartService } from '../../common/service/echart.service';

@Component({
  selector: 'app-type5',
  templateUrl: './type5.component.html',
  styleUrls: ['./type5.component.css']
})
export class Type5Component implements OnInit {
  // chart data;
  chartData: Chart[];
  // echart data
  chartOption;
  option1;
  selectedOption1;


  option = {
    title: {
      text: 'CF 稼动率',
      x: 'center'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        data:['Run','E-Time','Down','Idle','JC','PM','Move'],
        orient: 'horizontal', // 'vertical'
        x: 'center', // 'center' | 'left' | {number},
        y: 'bottom', // 'center' | 'bottom' | {number}
    },
    grid: {
        left: '3%',
        right: '4%',
        // bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['ITO01','ITO02','ITO03','PHT01','PHT02','PHT03','PHT04','PHT05','PHT06','PHT07','PHT08','PHT09','PHT10','PHT11','PHT12','PHT13','PHT14']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
              formatter: '{value} %'
          },
          min:0,
          max:100,
        },
        {
          type : 'value',
          min:0,
          max:2000,
        }
    ],
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series : [
        {
            name:'Run',
            type:'bar',
            stack:'CF',
            label: {
              normal: {
                  show: true,
                  position: 'inside',
              }
          },
            data:[70.55,69.61,68.25,79.08,67.88,62.38,73.29,88.66,66.72,84.68,79.15,45.91,62.07,85.86,45.91,62.07,85.86]
        },
        {
            name:'E-Time',
            type:'bar',
            stack: 'CF',
            data:[6.29,2.81,0,0,6.21,1.57,1.57,0,10.96,0,0,0,0,0,0,0]
        },
        {
            name:'Down',
            type:'bar',
            stack: 'CF',
            data:[5.43,7.09,7.99,1.91,8.56,11.33,5.78,3.82,1.85,2.82,7.84,6.46,14.90,2.75,6.46,14.90,2.75]
        },
        {
            name:'Idle',
            type:'bar',
            stack: 'CF',
            data:[2.01,3.52,6.42,4.57,5.23,2.84,5.02,1.76,6.76,0.97,5.77,10.4,8.06,1.46,10.4,8.06,1.46]
        },
        {
          name:'JC',
          type:'bar',
          stack:'CF',
          data:[13.2,12.29,16.39,11.5,11.34,17.75,12.83,3.87,11.05,9.31,7.25,35.94,14.36,8]
        },
        {
          name:'PM',
          type:'bar',
          stack:'CF',
          data:[2.52,4.69,0.96,2.94,0.78,4.13,1.52,1.89,2.67,2.22,0,1.29,0.62,1.93,1.29,0.62,1.93]
        },
        {
          yAxisIndex:1,
          symbol: 'circle',
          symbolSize: 10,
          // color:'black',
          name:'Move',
          type:'line',
          label: {
            normal: {
                show: true,
            }
        },
          data:[1139,1128,1125,1341,1123,984,1191,1478,1000,1359,1280,848,931,1440,848,931,1440]
        }
       
    ]
  };
  chartOption2={
    title: {
      text: 'CF WIP',
      x: 'center'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          data : ['Unpacker','ITO','BM','BM Repair','Blue','Green','Red','White','Color Repair','OC','PS','PS Repair','Final','COA Ins.','FIL Repair','Shipping'],
          axisLabel:{
            interval:0,//横轴信息全部显示
            rotate:30,//30度角倾斜显示
          }
      }
  ],
  yAxis : [
      {
        type : 'value',
      }         
      ],
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
    series: [
      {
        type:'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                color:'black'
            }
          },
        data:[160,2160,2070,760,962,560,763,0,240,760,339,120,188,0,513,0],
    }
    ],
    color:['rgb(0,195,234)']

  }

  constructor(private apiService: ApiService ,private breadcrumbService: BreadcrumbService,public tService: TabService,private echartService:EchartService) {
    this.breadcrumbService.setItems([
      { label: '生产看板' },
      { label: '2级' },
    ]);
    
    // this.tService.setItems('生产看板 2级');
   }

  ngOnInit() {
    this.apiService.getAll('/boeui/list/chart/all').subscribe(
      (res) => {
        const chartList = <Chart[]>res;
        this.option1 = new Array();
        let idx = 0;
        //获取目前所有数据的chartkey值显示于页面dropbox中
        for (const value of chartList) {
          if (idx === 0) {
            this.getChartData(value['chartKey']);
          }
          this.option1.push({ label: value['chartKey'], value: value['chartKey'] });
          ++idx;
          console.log(value);
        }
      },
      (error) => {
        console.log(error);
      }
    );
   
  }
  onChangeDropBox() {
    this.getChartData(this.selectedOption1);
  }

  getChartData(value) {
    const url = '/boeui/chart';
    const options = {
      params: { chartKey:value }
    };
    this.apiService.getOne(url, options).subscribe(
      (res) => {
        this.chartData = <Chart[]>res;
        this.setEchart(this.chartData);
      },
      (error) => { console.log(error); }
    );
  }

   // echart setting function
   setEchart(data) {
    console.log(data);
    this.chartOption = {

      title: {
        text: 'CF Daily Movement',
        x: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis : [
        {
            type : 'category',
            data : ['Unpacker', 'ITO', 'BM', 'BM Repair', 'Blue', 'Green','Red','Color Repair','OC'],
            axisLabel:{
              interval:0,//横轴信息全部显示
              rotate:30,//30度角倾斜显示
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        },
    ],
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      color:['#99CCFF'],
      calculable: true,
      series:this.setSeriesOption(data)
    };
  }

  setSeriesOption(obj) {
    const seriesArray = new Array();
    const echartSet = new EchartSet();
    const dataArray = new Array();
    if (isObject(obj)) {
      echartSet.type = 'bar';
      echartSet.redius = '55%';
      echartSet.center = ['50%', '60%'];
      for (const value in obj) {
        if (obj.hasOwnProperty(value)) {
          if (value !== 'chartKey') {
            console.log(value);
            const data = { 'value': obj[value], 'name': value };
            dataArray.push(data);
          } else {
            echartSet.name = obj[value];
          }
        }
      }
      echartSet.data = dataArray;
    }
    seriesArray.push(echartSet);
    return seriesArray;
  }

  

}
