import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DashbaordData } from './model/dashbaord-data';
import { WebSocketService } from '../../common/service/web-socket.service';
import * as echarts from 'echarts';
import { isNumber } from 'util';
import { OverlayPanel } from 'primeng/primeng';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
@Component({
  selector: 'app-boe-dashboard',
  templateUrl: './boe-dashboard.component.html',
  styleUrls: ['./boe-dashboard.component.css']
})


export class BoeDashboardComponent implements OnInit {

  items;

  // card area
  bodyContent1: DashbaordData;
  bodyContent2: DashbaordData;
  bodyContent3: DashbaordData;
  bodyContent4: DashbaordData;

  // time option
  timeOption: any[];
  selectedTimeOption;

  selectedTimeOption2;

  // echart data
  chartOption;
  xlist: any[];
  datalist: any[];
  test = 0;

  chartOption2;
  test2 = 0;
  xlist2: any[];
  datalist2: any[];

  notifications;

  constructor(private websocket: WebSocketService,private breadcrumbService: BreadcrumbService, public tService: TabService) {
    
    this.breadcrumbService.setItems([
      { label: 'BOE UI' },
      { label: 'DASHBOARD' },
    ]);

    //this.tService.setItems('BOE UI-DASHBOARD');

    const socket = websocket.WebSocketConnection();
    socket.onopen = function (event) {

      const msgObj = { msgText: '60' };
      socket.send(msgObj.toString());
    };

    socket.onmessage = (event) => {
      if (!isNaN(Number(event.data))) {
        this.test2 += 1;
        this.xlist2.push(this.test2);
        this.datalist2.push(event.data);
      }
      this.setEchart2();
    };

  }

  ngOnInit() {
    this.timeOption = [{ label: '1s', value: 1000 }, { label: '5s', value: 5000 },
    { label: '10s', value: 10000 }, { label: '15s', value: 15000 }];
    this.bodyContent1 = new DashbaordData();
    this.bodyContent1.index = 0;
    this.bodyContent1.dataValue = 'aaa';
    this.bodyContent1.interverIime = 5000;
    this.bodyContent1.timeInterval();

    this.bodyContent2 = new DashbaordData();
    this.bodyContent2.index = 0;
    this.bodyContent2.dataValue = 'bbb';
    this.bodyContent2.interverIime = 1000;
    this.bodyContent2.timeInterval();

    this.xlist = new Array();
    this.xlist2 = new Array();

    for (let i = 1; i <= 30; i++) {
      this.xlist.push('2013-03-' + i);
      this.xlist2.push('2013-03-' + i);
    }

    this.datalist = new Array();
    this.datalist2 = new Array();
    for (let i = 1; i <= 30; i++) {
      this.datalist.push(Math.round(Math.random() * 30) + 30);
      this.datalist2.push(Math.round(Math.random() * 30) + 30);
    }

    this.bodyContent3 = new DashbaordData();
    this.bodyContent3.interverIime = 5000;
    this.setEchart();
    this.bodyContent3.timeInterval2(() => { this.datalistChange(); }, () => { this.setEchart(); });

    this.bodyContent4 = new DashbaordData();
    this.bodyContent4.interverIime = 1000;


  }

  timeChange(overlayPanel: OverlayPanel) {
    this.bodyContent1.interverIime = this.selectedTimeOption;
    this.bodyContent1.clearInterval();
    this.bodyContent1.timeInterval();
    overlayPanel.hide();
  }

  timeChange2(overlayPanel: OverlayPanel) {
    this.bodyContent3.interverIime = this.selectedTimeOption2;
    this.bodyContent3.clearInterval();
    this.bodyContent3.timeInterval2(() => { this.datalistChange(); }, () => { this.setEchart(); });
    overlayPanel.hide();
  }

  datalistChange() {
    this.test += 1;
    this.xlist.push(this.test);
    this.datalist.push(Math.round(Math.random() * 30) + 30);
  }

  datalistChange2() {
    this.test2 += 1;
    this.xlist2.push(this.test2);
    this.datalist2.push(Math.round(Math.random() * 30) + 30);
  }

  // echart setting function
  setEchart() {
    this.chartOption = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['最高', '最低']
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { readOnly: false },
          magicType: { show: true, type: ['line'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      dataZoom: {
        show: true,
        realtime: true,
        start: 80,
        end: 100
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: this.xlist
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '最高',
          type: 'line',
          data: this.datalist

        }
      ]
    };
  }

  setEchart2() {
    this.chartOption2 = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['最高', '最低']
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { readOnly: false },
          magicType: { show: true, type: ['line'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      dataZoom: {
        show: true,
        realtime: true,
        start: 0,
        end: 100
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: this.xlist2
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '最高',
          type: 'line',
          data: this.datalist2

        }
      ]
    };
  }
  // echart end;



}
