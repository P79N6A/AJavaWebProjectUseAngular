import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { Type2 } from './model/type2';
import { ApiService } from '../../common/service/api/api.service';
import { ChartSet } from './model/chartSet';
import { EchartSet } from '../type1/model/echartSet';
import { ReportUiCommonService } from '../service/report-ui-common.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
@Component({
  selector: 'app-type2',
  templateUrl: './type2.component.html',
  styleUrls: ['./type2.component.css']
})
export class Type2Component implements OnInit, AfterViewInit {

  // chart data
  dataChart: any;

  // echart data
  chartOption;

  // gride data;
  data: Type2[];
  selectedData;
  cols: any[];

  @ViewChildren('chartGride') chartGride: QueryList<ElementRef>;

  constructor(private apiService: ApiService,  private reportComnService: ReportUiCommonService,
    private breadcrumbService: BreadcrumbService, public tService: TabService) {
      this.breadcrumbService.setItems([
        { label: 'REPORT UI' },
        { label: 'TYPE2' },
      ]);
  
      //this.tService.setItems('REPORT UI-TYPE2');
     }

  ngAfterViewInit() { }

  ngOnInit() {

    const url = '/assets/demo/data/report-ui/type1.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        console.log(res);
        this.data = <Type2[]>res;

        this.setPchart(res);
        this.setEchart(res);

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

    // 하이라이트 처리안됨. event.dataset에서 key값인 label을 가져올 수 없음...찾아보기...
    this.resetHighlight();
    this.grideHighlight(event.element['_model'].datasetLabel);
  }
  // pchart function
  setPchart(data) {
    this.dataChart = {
      labels: ['Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Col6'],
      datasets: this.makeDatasets(data)
    };
  }
  makeDatasets(obj) {
    const datasets = new Array();
    // check Array
    if (Array.isArray(obj)) {
      for (const list of obj) {
        const chartSet = new ChartSet();
        const dataArray = new Array();
        const color = this.reportComnService.getRandomColor();
        chartSet.label = list['key'];
        chartSet.fill = false;
        // chartSet.backgroundColor = '#42A5F5';
        chartSet.borderColor = color;
        for (const value in list) {
          if (list.hasOwnProperty(value)) {
            if (value !== 'key') {
              dataArray.push(list[value]);
            }
          }
        }
        chartSet.data = dataArray;
        datasets.push(chartSet);
      }
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

  // echart setting function
  setEchart(data) {
    this.chartOption = {
      title: {
        text: 'echart',
        subtext: 'example'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: this.getKey(data)
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          data: ['Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Col6'],
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: this.setSeriesOption(data)
    };
  }

  setSeriesOption(obj) {
    const seriesArray = new Array();
    if (Array.isArray(obj)) {
      for (const list of obj) {
        const echartSet = new EchartSet();
        const dataArray = new Array();
        echartSet.name = list['key'];
        echartSet.type = 'line';
        for (const value in list) {
          if (list.hasOwnProperty(value)) {
            if (value !== 'key') {
              dataArray.push(list[value]);
            }
          }
        }
        echartSet.data = dataArray;
        seriesArray.push(echartSet);
      }
    }
    return seriesArray;
  }
  getKey(obj) {
    const keyNameArray = new Array();
    if (Array.isArray(obj)) {
      for (const list of obj) {
        keyNameArray.push(list['key']);
      }
    }
    return keyNameArray;
  }
  // echart end;

}
