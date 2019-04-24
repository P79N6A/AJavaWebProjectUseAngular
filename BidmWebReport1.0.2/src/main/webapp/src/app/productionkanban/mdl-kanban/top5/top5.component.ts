import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css']
})
export class Top5Component implements OnInit {

  // 下拉框绑定元素
  m060A0top5pro;
  m069A0top5pro;
  m151A0top5pro;
  m060ALtop5pro;
  m069ALtop5pro;
  m151ALtop5pro;

  // 下拉框所有元素
  m060A0top5dptPro: SelectItem[];
  m069A0top5dptPro: SelectItem[];
  m151A0top5dptPro: SelectItem[];
  m060ALtop5dptPro: SelectItem[];
  m069ALtop5dptPro: SelectItem[];
  m151ALtop5dptPro: SelectItem[];

  // echarts图绑定的option
  m060A0top5Option;
  m069A0top5Option;
  m151A0top5Option;
  m060ALtop5Option;
  m069ALtop5Option;
  m151ALtop5Option;

  // 保存备份数据，以便下拉框选择过滤时使用
  backupm060A0top5;
  backupm060A0top5P;
  backupm069A0top5;
  backupm069A0top5P;
  backupm151A0top5;
  backupm151A0top5P;
  backupm060ALtop5;
  backupm060ALtop5P;
  backupm069ALtop5;
  backupm069ALtop5P;
  backupm151ALtop5;
  backupm151ALtop5P;

  // x轴坐标数据，所有图x轴数据公用
  yearX: Array<String>;
  quarterX: Array<String>;
  actQuarterX: Array<String>;
  monthX: Array<String>;
  weekX: Array<String>;
  dayX: Array<String>;
  actDay: Array<String>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getAll('/sc/mdlkanban/m060A0top5').subscribe(
      (res) => {
        this.backupm060A0top5 = res;
        this.setxAxis(res);
        this.m060A0top5Option = this.setOption(res);
      },
      () => { },
      () => {
        this.apiService.getAll('/sc/mdlkanban/m069A0top5').subscribe(
          (res) => {
            this.backupm069A0top5 = res;
            this.m069A0top5Option = this.setOption(res);
          });

        this.apiService.getAll('/sc/mdlkanban/m151A0top5').subscribe(
          (res) => {
            this.backupm151A0top5 = res;
            this.m151A0top5Option = this.setOption(res);
          });

        this.apiService.getAll('/sc/mdlkanban/m060ALtop5').subscribe(
          (res) => {
            this.backupm060ALtop5 = res;
            this.m060ALtop5Option = this.setOption(res);
          });

        this.apiService.getAll('/sc/mdlkanban/m069ALtop5').subscribe(
          (res) => {
            this.backupm069ALtop5 = res;
            this.m069ALtop5Option = this.setOption(res);
          });

        this.apiService.getAll('/sc/mdlkanban/m151ALtop5').subscribe(
          (res) => {
            this.backupm151ALtop5 = res;
            this.m151ALtop5Option = this.setOption(res);
          });
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m060A0top5P').subscribe(
      (res) => {
        this.backupm060A0top5P = res;
        this.m060A0top5dptPro = this.setDpt(res);
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m069A0top5P').subscribe(
      (res) => {
        this.backupm069A0top5P = res;
        this.m069A0top5dptPro = this.setDpt(res);
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m151A0top5P').subscribe(
      (res) => {
        this.backupm151A0top5P = res;
        this.m151A0top5dptPro = this.setDpt(res);
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m060ALtop5P').subscribe(
      (res) => {
        this.backupm060ALtop5P = res;
        this.m060ALtop5dptPro = this.setDpt(res);
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m069ALtop5P').subscribe(
      (res) => {
        this.backupm069ALtop5P = res;
        this.m069ALtop5dptPro = this.setDpt(res);
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m151ALtop5P').subscribe(
      (res) => {
        this.backupm151ALtop5P = res;
        this.m151ALtop5dptPro = this.setDpt(res);
      }
    );
  }

  m060A0top5select() {
    if (this.m060A0top5pro !== 'all') {
      this.m060A0top5Option = this.setOption(this.filter(this.backupm060A0top5P, this.m060A0top5pro, 'product'));
    } else {
      this.m060A0top5Option = this.setOption(this.backupm060A0top5);
    }
  }

  m069A0top5select() {
    if (this.m069A0top5pro !== 'all') {
      this.m069A0top5Option = this.setOption(this.filter(this.backupm069A0top5P, this.m069A0top5pro, 'product'));
    } else {
      this.m069A0top5Option = this.setOption(this.backupm069A0top5);
    }
  }

  m151A0top5select() {
    if (this.m151A0top5pro !== 'all') {
      this.m151A0top5Option = this.setOption(this.filter(this.backupm151A0top5P, this.m151A0top5pro, 'product'));
    } else {
      this.m151A0top5Option = this.setOption(this.backupm151A0top5);
    }
  }

  m060ALtop5select() {
    if (this.m060ALtop5pro !== 'all') {
      this.m060ALtop5Option = this.setOption(this.filter(this.backupm060ALtop5P, this.m060ALtop5pro, 'product'));
    } else {
      this.m060ALtop5Option = this.setOption(this.backupm060ALtop5);
    }
  }

  m069ALtop5select() {
    if (this.m069ALtop5pro !== 'all') {
      this.m069ALtop5Option = this.setOption(this.filter(this.backupm069ALtop5P, this.m069ALtop5pro, 'product'));
    } else {
      this.m069ALtop5Option = this.setOption(this.backupm069ALtop5);
    }
  }

  m151ALtop5select() {
    if (this.m151ALtop5pro !== 'all') {
      this.m151ALtop5Option = this.setOption(this.filter(this.backupm151ALtop5P, this.m151ALtop5pro, 'product'));
    } else {
      this.m151ALtop5Option = this.setOption(this.backupm151ALtop5);
    }
  }

  setxAxis(data) {
    this.yearX = [];
    this.quarterX = ['Q1', 'Q2', 'Q3', 'Q4'];
    this.actQuarterX = [];
    this.monthX = [];
    this.weekX = [];
    this.dayX = [];
    this.actDay = [];
    for (const obj of data) {
      if (obj.datename.length === 4) {
        if (obj.datename.substr(0, 2) === 'CW') {
          if (!this.weekX.includes(obj.datename)) {
            this.weekX.push(obj.datename);
          }
        } else {
          if (!this.yearX.includes(obj.datename)) {
            this.yearX.push(obj.datename);
          }
        }
      } else if (obj.datename.length === 3) {
        if (!this.monthX.includes(obj.datename)) {
          this.monthX.push(obj.datename);
        }
      } else if (obj.datename.length === 8) {
        if (!this.dayX.includes(obj.datename.substr(4, 2) + '/' + obj.datename.substr(6, 2))) {
          this.dayX.push(obj.datename.substr(4, 2) + '/' + obj.datename.substr(6, 2));
        }
        if (!this.actDay.includes(obj.datename)) {
          this.actDay.push(obj.datename);
        }
      } else if (obj.datename.length === 2) {
        if (!this.actQuarterX.includes(obj.datename)) {
          this.actQuarterX.push(obj.datename);
        }
      }
    }
  }

  setOption(data): any {

    const legendData = [];
    for (const obj of data) {
      if (!legendData.includes(obj.code_desc)) {
        legendData.push(obj.code_desc);
      }
    }

    const seriesData = [];
    for (let i = 0; i < this.yearX.length; i++) {
      const element = this.yearX[i];
      for (const obj of data) {
        if (obj.datename === element) {
          seriesData.push({
            name: obj.code_desc, type: 'bar', stack: 'sum', xAxisIndex: 0,
            yAxisIndex: 0, barWidth: '60%', data: [[i, obj.ratio]]
          });
        }
      }
    }

    for (let i = 0; i < this.quarterX.length; i++) {
      const element = this.quarterX[i];
      for (const obj of data) {
        if (obj.datename === element) {
          seriesData.push({
            name: obj.code_desc, type: 'bar', stack: 'sum1', xAxisIndex: 2,
            yAxisIndex: 2, barWidth: '60%', data: [[i, obj.ratio]]
          });
        }
      }
    }

    for (let i = 0; i < this.monthX.length; i++) {
      const element = this.monthX[i];
      for (const obj of data) {
        if (obj.datename === element) {
          seriesData.push({
            name: obj.code_desc, type: 'bar', stack: 'sum2', xAxisIndex: 4,
            yAxisIndex: 4, barWidth: '60%', data: [[i, obj.ratio]]
          });
        }
      }
    }

    for (let i = 0; i < this.weekX.length; i++) {
      const element = this.weekX[i];
      for (const obj of data) {
        if (obj.datename === element) {
          seriesData.push({
            name: obj.code_desc, type: 'bar', stack: 'sum3', xAxisIndex: 6,
            yAxisIndex: 6, barWidth: '60%', data: [[i, obj.ratio]]
          });
        }
      }
    }

    for (let i = 0; i < this.actDay.length; i++) {
      const element = this.actDay[i];
      for (const obj of data) {
        if (obj.datename === element) {
          seriesData.push({
            name: obj.code_desc, type: 'bar', stack: 'sum4', xAxisIndex: 8,
            yAxisIndex: 8, barWidth: '60%', data: [[i, obj.ratio]]
          });
        }
      }
    }

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        left: '7%',
        right: '6%',
        type: 'scroll',
        pageIconColor: 'white',
        pageIconSize: 10,
        pageTextStyle: {
          color: 'white'
        },
        itemWidth: 10,
        itemGap: 5,
        itemHeight: 8,
        textStyle: { fontSize: 10, color: '#F2FAF6' },
        data: legendData
      },
      grid: [
        { top: '15%', bottom: '12%', x: '7%', width: '5%' },
        { top: '15%', bottom: '12%', x: '12%', width: '3%' },
        { top: '15%', bottom: '12%', x: '15%', width: '20%' },
        { top: '15%', bottom: '12%', x: '35%', width: '3%' },
        { top: '15%', bottom: '12%', x: '38%', width: '15%' },
        { top: '15%', bottom: '12%', x: '53%', width: '3%' },
        { top: '15%', bottom: '12%', x: '56%', width: '10%' },
        { top: '15%', bottom: '12%', x: '66%', width: '3%' },
        { top: '15%', bottom: '12%', x: '69%', width: '26%' }
      ],
      xAxis: [
        {
          gridIndex: 0,
          axisLine: {
            lineStyle: { color: '#F2FAF6' }
          },
          axisLabel: { fontSize: 10, color: '#F2FAF6' },
          type: 'category',
          axisTick: {
            show: false
          },
          data: this.yearX
        },
        {
          gridIndex: 1,
          axisLine: {
            lineStyle: { color: '#F2FAF6' }
          }
        },
        {
          gridIndex: 2,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: { color: '#F2FAF6' }
          },
          axisLabel: { fontSize: 10, color: '#F2FAF6', interval: 0 },
          type: 'category',
          data: this.quarterX
        },
        {
          gridIndex: 3,
          axisLine: {
            lineStyle: { color: '#F2FAF6' }
          }
        },
        {
          gridIndex: 4,
          axisLine: {
            lineStyle: { color: '#F2FAF6' }
          },
          axisLabel: {
            fontSize: 10, color: '#F2FAF6', interval: 0,
            formatter: function (value) {
              return value.substr(0, 2);
            }
          },
          axisTick: {
            show: false
          },
          type: 'category',
          data: this.monthX
        },
        {
          gridIndex: 5,
          axisLine: {
            lineStyle: { color: '#F2FAF6' }
          }
        },
        {
          gridIndex: 6,
          axisLine: {
            lineStyle: { color: '#F2FAF6' }
          },
          axisLabel: {
            color: '#F2FAF6', fontSize: 10, interval: 0,
            formatter: function (value) {
              return (value.substr(2));
            }
          },
          axisTick: {
            show: false
          },
          type: 'category',
          data: this.weekX
        },
        {
          gridIndex: 7,
          axisLine: {
            lineStyle: { color: '#F2FAF6' }
          }
        },
        {
          gridIndex: 8,
          axisLine: {
            lineStyle: { color: '#F2FAF6' }
          },
          axisLabel: {
            fontSize: 10, color: '#F2FAF6', interval: 0,
            formatter: function (value) {
              return value.substr(-2);
            }
          },
          axisTick: {
            show: false
          },
          type: 'category',
          data: this.dayX
        }
      ],
      yAxis: [
        {
          gridIndex: 0,
          axisLine: { lineStyle: { color: '#F2FAF6' } },
          axisLabel: {
            fontSize: 9,
            margin: 3,
            formatter: '{value}%'
          },
          axisTick: {
            length: 2
          },
          splitLine: {
            show: false
          },
          max: 100,
          min: 0,
          interval: 20,
          type: 'value'
        },
        {
          gridIndex: 1,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          type: 'value'
        },
        {
          gridIndex: 2,
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          max: 100,
          type: 'value'
        },
        {
          gridIndex: 3,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          type: 'value'
        },
        {
          gridIndex: 4,
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          max: 100,
          type: 'value'
        },
        {
          gridIndex: 5,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          type: 'value'
        },
        {
          gridIndex: 6,
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          max: 100,
          type: 'value'
        },
        {
          gridIndex: 7,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          type: 'value'
        },
        {
          gridIndex: 8,
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          max: 100,
          type: 'value'
        }
      ],
      series: seriesData
    };

    return option;
  }

  setDpt(data): Array<SelectItem> {
    const array = [];
    const dpt = [{ label: '全部', value: 'all' }];
    for (const obj of data) {
      if (!array.includes(obj.product)) {
        array.push(obj.product);
        dpt.push({ label: obj.product, value: obj.product });
      }
    }
    return dpt;
  }

  filter(data, key, prop): Array<any> {
    if (key !== 'all') {
      return data.filter((obj) => {
        return (obj[prop] === key);
      });
    } else {
      return data;
    }
  }

}
