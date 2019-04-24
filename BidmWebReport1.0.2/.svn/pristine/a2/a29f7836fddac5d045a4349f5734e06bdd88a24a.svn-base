import { Component, OnInit } from '@angular/core';
import { EchartSet } from '../../boe-ui/boe-chart/model/echartSet';
import { ApiService } from '../../common/service/api/api.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { Router } from '@angular/router';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
@Component({
  selector: 'app-type2',
  templateUrl: './type2.component.html',
  styleUrls: ['./type2.component.css']
})
export class Type2Component implements OnInit {

   // echart data
   chartOption;

  constructor(private apiService: ApiService ,private breadcrumbService: BreadcrumbService,public tService: TabService) {
    
    this.breadcrumbService.setItems([
      { label: 'DASHBOARD UI' },
      { label: 'TYPE2' },
    ]);
    
    //this.tService.setItems('DASHBOARD UI TYPE2');
   }

  ngOnInit() {

    const url = '/assets/demo/data/report-ui/type1.json';
    this.apiService.testGet(url).subscribe(
      (res) => {

        // make chart

        this.setEchart(res);

      },
      (error) => { console.log(error); }

    );

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
}
