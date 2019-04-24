import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/service/api/api.service';
import { EchartSet } from './model/echartSet';
import { isObject } from 'util';
import { BoeChart } from './model/BoeChart';
import { ChartSet } from './model/chartSet';
import { ReportUiCommonService } from '../../report-ui/service/report-ui-common.service';
import { Chart } from '../../common/model/chart';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { EchartService } from '../../common/service/echart.service';
@Component({
  selector: 'app-boe-chart',
  templateUrl: './boe-chart.component.html',
  styleUrls: ['./boe-chart.component.css']
})
export class BoeChartComponent implements OnInit {

  // chart data;
  chartData: Chart[];

  // pchart data
  dataChart: any;

  // echart data
  chartOption;

  // gride data;
  data: BoeChart[];
  selectedData;
  cols: any[];

  // modal data
  modalVisible = false;
  // modalData: Type1 = new Type1();
  option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
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
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'百度',
            type:'bar',
            barWidth : 5,
            stack: '搜索引擎',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'谷歌',
            type:'bar',
            stack: '搜索引擎',
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'必应',
            type:'bar',
            stack: '搜索引擎',
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'其他',
            type:'bar',
            stack: '搜索引擎',
            data:[62, 82, 91, 84, 109, 110, 120]
        }
    ]
  };

  option1;
  selectedOption1;

  constructor(private apiService: ApiService, private reportComnService: ReportUiCommonService,
    private breadcrumbService: BreadcrumbService, public tService: TabService,private echartService:EchartService) {
      this.breadcrumbService.setItems([
        { label: 'BOE UI' },
        { label: 'CHART' },
      ]);
  
      //this.tService.setItems('BOE UI-CHART');
     }

  ngOnInit() {

    this.apiService.getAll('/boeui/list/chart/all').subscribe(
      (res) => {
        const chartList = <Chart[]>res;
        this.option1 = new Array();
        let idx = 0;
        for (const value of chartList) {
          if (idx === 0) {
            this.getChartData(value['chartKey']);
          }
          this.option1.push({ label: value['chartKey'], value: value['chartKey'] });
          ++idx;
          // console.log(value);
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.createEchartWithUniformTheme();
  }

  onChangeDropBox() {
    this.getChartData(this.selectedOption1);
  }

  getChartData(value) {
    const url = '/boeui/chart';
    const options = {
      params: { chartKey: value }
    };
    this.apiService.getOne(url, options).subscribe(
      (res) => {
        this.chartData = <Chart[]>res;
        this.setEchart(this.chartData);
        this.setPchart(this.chartData);
      },
      (error) => { console.log(error); }
    );
  }

  echartClick(event) {
    const key = event.title['text']; // = this.data[0]의 key
    this.modalShow();

  }
  pchartClick(event) {
    this.modalShow();
  }

  modalShow() {
    this.makeCols();
    const dataArray = new Array();
    dataArray.push(this.chartData);
    this.data = <BoeChart[]>dataArray;
    this.modalVisible = true;
  }

  makeCols() {
    this.cols = [
      { field: 'col1', header: 'Col1' },
      { field: 'col2', header: 'Col2' },
      { field: 'col3', header: 'Col3' },
      { field: 'col4', header: 'Col4' },
      { field: 'col5', header: 'Col5' },
      { field: 'col6', header: 'Col6' },
      { field: 'col7', header: 'Col7' },
      { field: 'col8', header: 'Col8' },
      { field: 'col9', header: 'Col9' },
    ];
  }
  // pchart
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

  // echart setting function
  setEchart(data) {
    // console.log(data);
    this.chartOption = {

      title: {
        text: data['chartKey'],
        subtext: 'example',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['col1', 'col2', 'col3', 'col4', 'col5', 'col6']
      },
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
      series: this.setSeriesOption(data)
    };
  }

  setSeriesOption(obj) {
    const seriesArray = new Array();
    const echartSet = new EchartSet();
    const dataArray = new Array();
    if (isObject(obj)) {
      echartSet.type = 'pie';
      echartSet.redius = '55%';
      echartSet.center = ['50%', '60%'];
      for (const value in obj) {
        if (obj.hasOwnProperty(value)) {
          if (value !== 'chartKey') {
            // console.log(value);
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
  // echart end;
  //创建有统一主题的echart
  createEchartWithUniformTheme(){
    const myChart = this.echartService.init(document.getElementById('main'));
    myChart.setOption(this.option);
  }
}
