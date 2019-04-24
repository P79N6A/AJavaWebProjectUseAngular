import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { ChartSet } from './model/chartSet';
import { Type3 } from './model/type3';
import { ApiService } from '../../common/service/api/api.service';
import { isObject } from 'util';
import { UIChart } from 'primeng/chart';
import { ReportUiCommonService } from '../service/report-ui-common.service';
import { EchartSet } from '../type1/model/echartSet';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
@Component({
  selector: 'app-type3',
  templateUrl: './type3.component.html',
  styleUrls: ['./type3.component.css']
})
export class Type3Component implements OnInit, AfterViewInit {

  // chart data
  dataChart: any;
  options;
  echartHeight = '100px;';
  isDisplay = false;
  // echart data
  chartOption;

  // gride data;
  data: Type3[];
  selectedData;
  cols: any[];

  @ViewChildren('chartGride') chartGride: QueryList<ElementRef>;
  @ViewChild('chart') chart: UIChart;

  constructor(private apiService: ApiService, private reportComnService: ReportUiCommonService,
    private breadcrumbService: BreadcrumbService, public tService: TabService) {
      this.breadcrumbService.setItems([
        { label: 'REPORT UI' },
        { label: 'TYPE3' },
      ]);
  
      //this.tService.setItems('REPORT UI-TYPE3');
     }

  ngAfterViewInit() { }

  ngOnInit() {

    const url = '/assets/demo/data/report-ui/type1.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        this.data = <Type3[]>res;
        this.options = {
          height: '100px'
        };
      },
      (error) => { console.log(error); }

    );

    this.cols = [
      { field: 'col1', header: 'Col1' },
      { field: 'col2', header: 'Col2' },
      { field: 'col3', header: 'Col3' },
      { field: 'col4', header: 'Col4' },
      { field: 'col5', header: 'Col5' },
      { field: 'col6', header: 'Col6' }
    ];

  }

  // gride function
  selectData(event) {
    console.log(event);
  }
  onRowSelect(event) {
    this.isDisplay = true;

    this.setPchart(event.data);
    this.setEchart(event.data);
    this.chart.refresh();
  }

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
  }

  // echart setting function
  setEchart(data) {
    this.chartOption = {

      title: {
        text: 'echart',
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
  }
  // echart end;
}
