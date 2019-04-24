import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList ,HostListener } from '@angular/core';
import { ApiService } from '../../common/service/api/api.service';
import { Type1 } from './model/type1';
import { ChartSet } from './model/chartSet';
import { EchartOption, EchartSet } from './model/echartSet';
import { ReportUiCommonService } from '../service/report-ui-common.service';
import * as screenfull from 'screenfull';
import { FullscreenService } from 'app/common/service/fullscreen.service';
@Component({
  selector: 'app-type1',
  templateUrl: './type1.component.html',
  styleUrls: ['./type1.component.css']
})
export class Type1Component implements OnInit, AfterViewInit {
  @ViewChild('fullScreenTest') fullScreenTest: ElementRef;
  // chart data
  dataChart: any;

  // echart data
  chartOption;

  // gride data;
  data: Type1[];
  selectedData;
  cols: any[];

  @ViewChildren('chartGride2') chartGride2: QueryList<ElementRef>;

  constructor(
    private apiService: ApiService, 
    private reportComnService: ReportUiCommonService,
    private fullscreen: FullscreenService
  ) { 
      
     
    }
  ngAfterViewInit() {

  }

  ngOnInit() {

    const url = '/assets/demo/data/report-ui/type1.json';
    this.apiService.testGet(url).subscribe(
      (res) => {
        this.data = <Type1[]>res;
        // make chart
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
    this.resetHighlight();
    this.grideHighlight(event.element['_model'].datasetLabel);
  }
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
        chartSet.backgroundColor = color;
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
    for (let i = 0; i < this.chartGride2['_results'].length; i++) {
      this.chartGride2['_results'][i].nativeElement.className = '';
    }
  }

  // set grid hign
  grideHighlight(key) {
    let rsIdx = null;
    this.data.forEach(function (value, idx) {
      if (key === value['key']) {
        rsIdx = idx;
      }
    });
    for (let i = 0; i < this.chartGride2['_results'].length; i++) {
      if (i === rsIdx) {
        this.chartGride2['_results'][i].nativeElement.className = 'ui-state-highlight';
      }
    }
  }

  onRowSelect(event) {
    console.log(event);
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
        echartSet.type = 'bar';
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
  
  //full screen status
  fullScreenStatus = false;

  @HostListener('window:resize')
  _resize() {
    this.fullScreenStatus = screenfull.isFullscreen;
    if (!screenfull.isFullscreen) {
      this.fullscreen.isFull = false;
    }
  }
  //event(#id)  => event(fullScreenTest)  $envent is fullScreenTest Element
  onFull($event){   
    if (screenfull.enabled) {
      //screenfull.request($event);
      //this.fullScreenTest.nativeElement.parentElement.parentElement => app.component.html <router-outlet>
      this.fullscreen.isFull = true;
      screenfull.request(this.fullScreenTest.nativeElement.parentElement.parentElement);
      /*
      screenfull.toggle() => full screen
      screenfull.request(elem) => select html element
      */
    }
  }
  onFullThis(screentarget){
    console.log('onFullThis v : ',screentarget);
    if (screenfull.enabled) {
      screenfull.request(screentarget);
    }
  }
}
