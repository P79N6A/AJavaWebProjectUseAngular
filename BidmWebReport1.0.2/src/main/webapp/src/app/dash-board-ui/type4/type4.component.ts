import { Component, OnInit,ViewChildren, ViewChild, QueryList,ElementRef,AfterViewInit } from '@angular/core';
import { ApiService } from '../../common/service/api/api.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { ReportUiCommonService } from '../../report-ui/service/report-ui-common.service';
//import { isObject } from 'util';
import { UIChart } from '../../../../node_modules/primeng/chart';
import { Type4 } from './model/type4';
//import { EchartSet } from 'app/dash-board-ui/type4/model/echartSet';
//import { ChartSet } from 'app/dash-board-ui/type4/model/chartSet';


@Component({
  selector: 'app-type4',
  templateUrl: './type4.component.html',
  styleUrls: ['./type4.component.css']
})
export class Type4Component implements OnInit,AfterViewInit{
  
  // chart
  chartOptionStackedLine;
  //chartOptionDoughnut;
  //chartOptionBar;
  //chartOptionPie;
  //chartOptionStackedBar;
  isDisplay:boolean =false;
  chartOption;
  //dataChart:any;
  options;
  echartHeight='100px';


  // gride data;
  data: Type4[];
  selectedData;
  cols: any[];
  @ViewChildren('chartGride') chartGride: QueryList<ElementRef>;
  @ViewChild('chart') chart: UIChart;
  constructor(private apiService: ApiService,private breadcrumbService: BreadcrumbService, public tService: TabService) {
  }
  ngAfterViewInit(){ }

  ngOnInit() {
    this.setChartLine();

    const url = '/assets/demo/data/report-ui/type4.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        console.log(res);
        this.data = <Type4[]>res;
        this.options={
          height:"100px"
        };
      },
      (error) => { console.log(error); }

    );

    this.cols = [
      { field: '型号', header: '型号' },
      { field: 'POL', header: 'POL' },
      { field: 'OLB', header: 'OLB' },
      { field: 'PT', header: 'PT' },
      { field: 'Assy', header: 'Assy' },
      { field: 'Aging', header: 'Aging' },
      { field: 'FI', header: 'FI' },
      { field: 'VI', header: 'VI' },
      { field: 'Total', header: 'Total' }
    ];
  }
//chartOptionStackedLine
  setChartLine() {
    this.chartOptionStackedLine = {
      backgroundColor:'#FFFFFF',
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['TV320WHB', 'TV550QUB', 'TV080WXM', 'CLASS']
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: ['POL', 'OLB', 'PT', 'Assy', 'Aging', 'FI', 'VI']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name:'数量',
          max:3000,
          min:0,
          interval:500
        },
        {
          type: 'value',
          name:'数量',
          max:60,
          min:0,
          axisLine:{
          show:false
          },
          axisTick:{
            show:false
          },
          splitLine:{
            show:false
          }
        }
        
      ],
      series: [
        {
          name: 'TV320WHB',
          type: 'bar',
          stack: '总量',
          label:{
            normal:{
              show:true,
              position:'inside',
              color:'#000000',
              formatter: function (params) {
                if (params.value > 0) {
                    return params.value;
                } else {
                    return '';
                }
            },
            }
          },
          barWidth:'60%',
          itemStyle: { normal: { color:'#7FFF00' } },
          data: [100, 50, 0, 0,0,228,56]
        },
        {
          name: 'TV550QUB',
          type: 'bar',
          stack: '总量',
          label:{
            normal:{
              show:true,
              position:'inside',
              color:'#000000',
              formatter: function (params) {
                if (params.value > 0) {
                    return params.value;
                } else {
                    return '';
                }
            },
            }
          },
          barWidth:'60%',
          itemStyle: { normal: { color:'#FF8C00' } },
          data: [150,49,0,0,0,374,29]
        },
        {
          name: 'TV080WXM',
          type: 'bar',
          stack: '总量',
          label:{
            normal:{
              show:true,
              position:'inside',
              color:'#000000',
              formatter: function (params) {
                if (params.value > 0) {
                    return params.value;
                } else {
                    return '';
                }
            },
            }
          },
          barWidth:'60%',
          itemStyle: { normal: { color:'#00CED1' } },
          data: [586,228,1258,1569,1203,2205,254]
        },
        {
          name: 'CLASS',
          type: 'line',
          symbol:'star',
          yAxisIndex: 1,
          label:{
            normal:{
              show:true,
              position:'top',
              color:'#0000FF',
              fontSize:14
            }
          },
          data: [36.8,25.6,5.4,6.5,5.2,55.6,25.4]
        }
      ]
    };
  
  }



  selectData(event){
    console.log(event);
  }
  onRowSelect(event){
    this.isDisplay=true;
    //this.setPchart(event.data);
    this.setEchart(event.data);
    this.chart.refresh();
  }

  /*另一种饼图
  setPchart(data) {
    this.dataChart = {
      labels: ['Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Col6'],
      datasets: this.makeDatasets(data)
    };
  }

  makeDatasets(obj) {
    const datasets = new Array();
    if (isObject(obj)) {
      const chartSet = new ChartSet();
      const dataArray = new Array();
      const backgroundColorArray = new Array();
      const hoberBackgroundColorArray = new Array();
      chartSet.total = this.makeTotal(obj);
      for (const value in obj) {

        if (obj.hasOwnProperty(value)) {
          if (value !== 'key') {
            dataArray.push(obj[value]);
            const color = this.reportComnService.getRandomColor();
            backgroundColorArray.push(color);
            hoberBackgroundColorArray.push(color);
          }
        }
      }
      chartSet.data = dataArray;
      chartSet.backgroundColor = backgroundColorArray;
      chartSet.hoverBackgroundColor = hoberBackgroundColorArray;
      datasets.push(chartSet);
    }
    return datasets;
  }
  resetHighlight() {
    for (let i = 0; i < this.chartGride['_results'].length; i++) {
      this.chartGride['_results'][i].nativeElement.className = '';
    }
  }

  grideHighlight(key) {
    let rsIdx = null;
    this.data.forEach(function (value, idx) {
      if (key === value['key']) {
        rsIdx = idx;
      }
    });
    for (let i = 0; i < this.chartGride['_results'].length; i++) {
      if (i === rsIdx) {
        this.chartGride['_results'][i].nativeElement.className = 'ui-state-highlight';
      }
    }
  }

  makeTotal(list) {
    let total = 0;
    for (const value in list) {
      if (list.hasOwnProperty(value)) {
        if (value !== 'key') {
          total += list[value];
        }
      }
    }
    return total;
  }

  makeRatio(value, total) {
    const ratio = (value / total) * 100;
    return ratio;
  }*/
  /*饼图的展示 chartOption*/
  setEchart(data){
    this.chartOption={
      title:{
        text:'WIP滞留时长',
        x:'center'
      },
      tooltip:{
        trigger:'item',
        formatter:'{a}<br/>{b}:{c}({d}%)'
      },
      legend:{
        orient:'vertical',
        x:'left',
        data:['2h内','2h-12h','12h-24h','24h-72h','3d以上']
      },
      color:['#00CED1','#FFA500','#98FB98','#EE82EE','#2E8B57'],
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ['pie', 'funnel'],
            option: {
              funnel: {
                x: '25%',
                width: '50%',
                funnelAlign: 'left',
                max: 1548
              }
            }
          },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      //series: this.setSeriesOption(data)
      series:[
        {
          name:'滞留时长',
          type:'pie',
          radius:'55%',
          center:['50%','60%'],
          data:[
            {value:100,name:'2h内'},
            {value:50,name:'2h-12h'},
            {value:20,name:'12h-24h'},
            {value:10,name:'24h-72h'},
            {value:3,name:'3d以上'},
          ]
        }
      ]
    };
  }
  /*针对不同行数据下钻得出不同的饼图*/
  /*setSeriesOption(obj) {
    const seriesArray = new Array();
    const echartSet = new EchartSet();
    const dataArray = new Array();
    if (isObject(obj)) {
      echartSet.type = 'pie';
      echartSet.redius = '55%';
      echartSet.center = ['50%', '60%'];
      for (const value in obj) {
        if (obj.hasOwnProperty(value)) {
          if (value !== 'key') {
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
  }*/

  
}



