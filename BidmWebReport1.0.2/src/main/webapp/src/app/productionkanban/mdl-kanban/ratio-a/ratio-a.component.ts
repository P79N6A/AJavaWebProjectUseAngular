import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-ratio-a',
  templateUrl: './ratio-a.component.html',
  styleUrls: ['./ratio-a.component.css']
})
export class RatioAComponent implements OnInit {

  // 下拉框绑定元素
  m060product;
  m060size;
  m060code;
  m060grade;
  m069product;
  m069size;
  m069code;
  m069grade;
  m151product;
  m151size;
  m151code;
  m151grade;
  m060top5pro;
  m069top5pro;
  m151top5pro;

  backupm060mmt;
  backupm069mmt;
  backupm151mmt;
  backupm060top5;
  backupm060top5P;
  backupm069top5;
  backupm069top5P;
  backupm151top5;
  backupm151top5P;

  m060mmtLastData;
  m069mmtLastData;
  m151mmtLastData;

  // 下拉框所有元素
  m060dptProduct: SelectItem[];
  m060dptSize: SelectItem[];
  m060dptCode: SelectItem[];
  m060dptGrade: SelectItem[];
  m069dptProduct: SelectItem[];
  m069dptSize: SelectItem[];
  m069dptCode: SelectItem[];
  m069dptGrade: SelectItem[];
  m151dptProduct: SelectItem[];
  m151dptSize: SelectItem[];
  m151dptCode: SelectItem[];
  m151dptGrade: SelectItem[];
  m060top5dptPro: SelectItem[];
  m069top5dptPro: SelectItem[];
  m151top5dptPro: SelectItem[];

  // echarts图绑定的option
  m060mmtOption;
  m069mmtOption;
  m151mmtOption;
  m060Qtop5Option;
  m069Qtop5Option;
  m151Qtop5Option;


  // m060mmt的x轴坐标
  m060yearX: Array<String>;
  m060quarterX: Array<String>;
  m060actQuarterX: Array<String>;
  m060monthX: Array<String>;
  m060weekX: Array<String>;
  m060dayX: Array<String>;
  m060actDay: Array<String>;

  m069yearX: Array<String>;
  m069quarterX: Array<String>;
  m069actQuarterX: Array<String>;
  m069monthX: Array<String>;
  m069weekX: Array<String>;
  m069dayX: Array<String>;
  m069actDay: Array<String>;

  m151yearX: Array<String>;
  m151quarterX: Array<String>;
  m151actQuarterX: Array<String>;
  m151monthX: Array<String>;
  m151weekX: Array<String>;
  m151dayX: Array<String>;
  m151actDay: Array<String>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getAll('/sc/mdlkanban/m060mmt').subscribe(
      (res) => {
        this.backupm060mmt = res;
        this.m060mmtLastData = res;
        this.setm060Dpt(res);
        this.setm060mmtX(res);
        this.setm060DropPri();
        this.m060select();
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m069mmt').subscribe(
      (res) => {
        this.backupm069mmt = res;
        this.m069mmtLastData = res;
        this.setm069Dpt(res);
        this.setm069mmtX(res);
        this.setm069DropPri();
        this.m069select();
      },
      () => { },
      () => {
        // 为了使用m069的x轴坐标数据，只能等m069的流结束时，设置top5的option
        this.apiService.getAll('/sc/mdlkanban/m060Qtop5').subscribe(
          (res) => {
            this.backupm060top5 = res;
            this.m060Qtop5Option = this.setQtop5(res);
          }
        );
        this.apiService.getAll('/sc/mdlkanban/m069Qtop5').subscribe(
          (res) => {
            this.backupm069top5 = res;
            this.m069Qtop5Option = this.setQtop5(res);
          }
        );
        this.apiService.getAll('/sc/mdlkanban/m151Qtop5').subscribe(
          (res) => {
            this.backupm151top5 = res;
            this.m151Qtop5Option = this.setQtop5(res);
          }
        );
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m151mmt').subscribe(
      (res) => {
        this.backupm151mmt = res;
        this.m151mmtLastData = res;
        this.setm151Dpt(res);
        this.setm151mmtX(res);
        this.setm151DropPri();
        this.m151select();
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m060Qtop5P').subscribe(
      (res) => {
        this.backupm060top5P = res;
        this.m060top5dptPro = this.setDptTop5(res);
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m069Qtop5P').subscribe(
      (res) => {
        this.backupm069top5P = res;
        this.m069top5dptPro = this.setDptTop5(res);
      }
    );

    this.apiService.getAll('/sc/mdlkanban/m151Qtop5P').subscribe(
      (res) => {
        this.backupm151top5P = res;
        this.m151top5dptPro = this.setDptTop5(res);
      }
    );


  }

  setQtop5(data): any {

    const legendData = [];
    for (const obj of data) {
      if (!legendData.includes(obj.code_desc)) {
        legendData.push(obj.code_desc);
      }
    }

    const seriesData = [];
    for (let i = 0; i < this.m069yearX.length; i++) {
      const element = this.m069yearX[i];
      for (const obj of data) {
        if (obj.datename === element) {
          seriesData.push({
            name: obj.code_desc, type: 'bar', stack: 'sum', xAxisIndex: 0,
            yAxisIndex: 0, barWidth: '60%', data: [[i, obj.ratio]]
          });
        }
      }
    }

    for (let i = 0; i < this.m069quarterX.length; i++) {
      const element = this.m069quarterX[i];
      for (const obj of data) {
        if (obj.datename === element) {
          seriesData.push({
            name: obj.code_desc, type: 'bar', stack: 'sum1', xAxisIndex: 2,
            yAxisIndex: 2, barWidth: '60%', data: [[i, obj.ratio]]
          });
        }
      }
    }

    for (let i = 0; i < this.m069monthX.length; i++) {
      const element = this.m069monthX[i];
      for (const obj of data) {
        if (obj.datename === element) {
          seriesData.push({
            name: obj.code_desc, type: 'bar', stack: 'sum2', xAxisIndex: 4,
            yAxisIndex: 4, barWidth: '60%', data: [[i, obj.ratio]]
          });
        }
      }
    }

    for (let i = 0; i < this.m069weekX.length; i++) {
      const element = this.m069weekX[i];
      for (const obj of data) {
        if (obj.datename === element) {
          seriesData.push({
            name: obj.code_desc, type: 'bar', stack: 'sum3', xAxisIndex: 6,
            yAxisIndex: 6, barWidth: '60%', data: [[i, obj.ratio]]
          });
        }
      }
    }

    for (let i = 0; i < this.m069actDay.length; i++) {
      const element = this.m069actDay[i];
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
          data: this.m069yearX
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
          data: this.m069quarterX
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
          data: this.m069monthX
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
          data: this.m069weekX
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
          data: this.m069dayX
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

  m060top5select() {
    if (this.m060top5pro !== 'all') {
      this.m060Qtop5Option = this.setQtop5(this.filter(this.backupm060top5P, this.m060top5pro, 'product'));
    } else {
      this.m060Qtop5Option = this.setQtop5(this.backupm060top5);
    }
  }
  m069top5select() {
    if (this.m069top5pro !== 'all') {
      this.m069Qtop5Option = this.setQtop5(this.filter(this.backupm069top5P, this.m069top5pro, 'product'));
    } else {
      this.m069Qtop5Option = this.setQtop5(this.backupm069top5);
    }
  }

  m151top5select() {
    if (this.m151top5pro !== 'all') {
      this.m151Qtop5Option = this.setQtop5(this.filter(this.backupm151top5P, this.m151top5pro, 'product'));
    } else {
      this.m151Qtop5Option = this.setQtop5(this.backupm151top5);
    }
  }

  setDptTop5(data): Array<SelectItem> {
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

  setm060mmtX(data) {
    this.m060yearX = [];
    this.m060quarterX = ['Q1', 'Q2', 'Q3', 'Q4'];
    this.m060actQuarterX = [];
    this.m060monthX = [];
    this.m060weekX = [];
    this.m060dayX = [];
    this.m060actDay = [];
    for (const obj of data) {
      if (obj.datename.length === 4) {
        if (obj.datename.substr(0, 2) === 'CW') {
          if (!this.m060weekX.includes(obj.datename)) {
            this.m060weekX.push(obj.datename);
          }
        } else {
          if (!this.m060yearX.includes(obj.datename)) {
            this.m060yearX.push(obj.datename);
          }
        }
      } else if (obj.datename.length === 3) {
        if (!this.m060monthX.includes(obj.datename)) {
          this.m060monthX.push(obj.datename);
        }
      } else if (obj.datename.length === 8) {
        if (!this.m060dayX.includes(obj.datename.substr(4, 2) + '/' + obj.datename.substr(6, 2))) {
          this.m060dayX.push(obj.datename.substr(4, 2) + '/' + obj.datename.substr(6, 2));
        }
        if (!this.m060actDay.includes(obj.datename)) {
          this.m060actDay.push(obj.datename);
        }
      } else if (obj.datename.length === 2) {
        if (!this.m060actQuarterX.includes(obj.datename)) {
          this.m060actQuarterX.push(obj.datename);
        }
      }
    }
  }

  setm069mmtX(data) {
    this.m069yearX = [];
    this.m069quarterX = ['Q1', 'Q2', 'Q3', 'Q4'];
    this.m069actQuarterX = [];
    this.m069monthX = [];
    this.m069weekX = [];
    this.m069dayX = [];
    this.m069actDay = [];
    for (const obj of data) {
      if (obj.datename.length === 4) {
        if (obj.datename.substr(0, 2) === 'CW') {
          if (!this.m069weekX.includes(obj.datename)) {
            this.m069weekX.push(obj.datename);
          }
        } else {
          if (!this.m069yearX.includes(obj.datename)) {
            this.m069yearX.push(obj.datename);
          }
        }
      } else if (obj.datename.length === 3) {
        if (!this.m069monthX.includes(obj.datename)) {
          this.m069monthX.push(obj.datename);
        }
      } else if (obj.datename.length === 8) {
        if (!this.m069dayX.includes(obj.datename.substr(4, 2) + '/' + obj.datename.substr(6, 2))) {
          this.m069dayX.push(obj.datename.substr(4, 2) + '/' + obj.datename.substr(6, 2));
        }
        if (!this.m069actDay.includes(obj.datename)) {
          this.m069actDay.push(obj.datename);
        }
      } else if (obj.datename.length === 2) {
        if (!this.m069actQuarterX.includes(obj.datename)) {
          this.m069actQuarterX.push(obj.datename);
        }
      }
    }
  }
  setm151mmtX(data) {
    this.m151yearX = [];
    this.m151quarterX = ['Q1', 'Q2', 'Q3', 'Q4'];
    this.m151actQuarterX = [];
    this.m151monthX = [];
    this.m151weekX = [];
    this.m151dayX = [];
    this.m151actDay = [];
    for (const obj of data) {
      if (obj.datename.length === 4) {
        if (obj.datename.substr(0, 2) === 'CW') {
          if (!this.m151weekX.includes(obj.datename)) {
            this.m151weekX.push(obj.datename);
          }
        } else {
          if (!this.m151yearX.includes(obj.datename)) {
            this.m151yearX.push(obj.datename);
          }
        }
      } else if (obj.datename.length === 3) {
        if (!this.m151monthX.includes(obj.datename)) {
          this.m151monthX.push(obj.datename);
        }
      } else if (obj.datename.length === 8) {
        if (!this.m151dayX.includes(obj.datename.substr(4, 2) + '/' + obj.datename.substr(6, 2))) {
          this.m151dayX.push(obj.datename.substr(4, 2) + '/' + obj.datename.substr(6, 2));
        }
        if (!this.m151actDay.includes(obj.datename)) {
          this.m151actDay.push(obj.datename);
        }
      } else if (obj.datename.length === 2) {
        if (!this.m151actQuarterX.includes(obj.datename)) {
          this.m151actQuarterX.push(obj.datename);
        }
      }
    }
  }

  setm060DropPri() {
    this.m060product = 'all';
    this.m060size = 'all';
    this.m060code = 'M01';
    this.m060grade = 'all';
  }

  setm069DropPri() {
    this.m069product = 'all';
    this.m069size = 'all';
    this.m069code = 'M01';
    this.m069grade = 'all';
  }
  setm151DropPri() {
    this.m151product = 'all';
    this.m151size = 'all';
    this.m151code = 'M01';
    this.m151grade = 'all';
  }

  setm060DptPrimary() {
    this.m060dptProduct = [{ label: '全部', value: 'all' }];
    this.m060dptSize = [{ label: '全部', value: 'all' }];
    this.m060dptCode = [{ label: '全部', value: 'all' }];
    this.m060dptGrade = [{ label: '全部', value: 'all' }];
  }

  setm069DptPrimary() {
    this.m069dptProduct = [{ label: '全部', value: 'all' }];
    this.m069dptSize = [{ label: '全部', value: 'all' }];
    this.m069dptCode = [{ label: '全部', value: 'all' }];
    this.m069dptGrade = [{ label: '全部', value: 'all' }];
  }
  setm151DptPrimary() {
    this.m151dptProduct = [{ label: '全部', value: 'all' }];
    this.m151dptSize = [{ label: '全部', value: 'all' }];
    this.m151dptCode = [{ label: '全部', value: 'all' }];
    this.m151dptGrade = [{ label: '全部', value: 'all' }];
  }

  setm060Dpt(data) {

    this.setm060DptPrimary();

    const productArray = [];
    const sizeArray = [];
    const codeArray = [];
    const GradeArray = [];
    for (const obj of data) {
      if (!productArray.includes(obj.product)) {
        productArray.push(obj.product);
        this.m060dptProduct.push({ label: obj.product, value: obj.product });
      }
      if (!sizeArray.includes(obj.product_size)) {
        sizeArray.push(obj.product_size);
        this.m060dptSize.push({ label: obj.product_size, value: obj.product_size });
      }
      if (!codeArray.includes(obj.check_in_code)) {
        codeArray.push(obj.check_in_code);
        this.m060dptCode.push({ label: obj.check_in_code, value: obj.check_in_code });
      }
      if (!GradeArray.includes(obj.cell_grade)) {
        GradeArray.push(obj.cell_grade);
        this.m060dptGrade.push({ label: obj.cell_grade, value: obj.cell_grade });
      }
    }
  }

  setm069Dpt(data) {

    this.setm069DptPrimary();

    const productArray = [];
    const sizeArray = [];
    const codeArray = [];
    const GradeArray = [];
    for (const obj of data) {
      if (!productArray.includes(obj.product)) {
        productArray.push(obj.product);
        this.m069dptProduct.push({ label: obj.product, value: obj.product });
      }
      if (!sizeArray.includes(obj.product_size)) {
        sizeArray.push(obj.product_size);
        this.m069dptSize.push({ label: obj.product_size, value: obj.product_size });
      }
      if (!codeArray.includes(obj.check_in_code)) {
        codeArray.push(obj.check_in_code);
        this.m069dptCode.push({ label: obj.check_in_code, value: obj.check_in_code });
      }
      if (!GradeArray.includes(obj.cell_grade)) {
        GradeArray.push(obj.cell_grade);
        this.m069dptGrade.push({ label: obj.cell_grade, value: obj.cell_grade });
      }
    }
  }

  setm151Dpt(data) {

    this.setm151DptPrimary();

    const productArray = [];
    const sizeArray = [];
    const codeArray = [];
    const GradeArray = [];
    for (const obj of data) {
      if (!productArray.includes(obj.product)) {
        productArray.push(obj.product);
        this.m151dptProduct.push({ label: obj.product, value: obj.product });
      }
      if (!sizeArray.includes(obj.product_size)) {
        sizeArray.push(obj.product_size);
        this.m151dptSize.push({ label: obj.product_size, value: obj.product_size });
      }
      if (!codeArray.includes(obj.check_in_code)) {
        codeArray.push(obj.check_in_code);
        this.m151dptCode.push({ label: obj.check_in_code, value: obj.check_in_code });
      }
      if (!GradeArray.includes(obj.cell_grade)) {
        GradeArray.push(obj.cell_grade);
        this.m151dptGrade.push({ label: obj.cell_grade, value: obj.cell_grade });
      }
    }
  }

  // 保留两位小数
  tP(num: number): number {
    return parseFloat(num.toFixed(2));
  }

  setm060mmtOption(data) {
    const seriesYear = []; // 存'A0比率', 'AC比率', 'AL比率', 'Q比率', 'T比率', 'AN比率', 'A%'

    for (const year of this.m060yearX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === year) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }

      if (sumA + sumT + sumQ !== 0) {
        const sumATQ = sumA + sumT + sumQ;
        seriesYear.push(this.tP(sumA0 / sumATQ * 100), this.tP(sumAC / sumATQ * 100), this.tP(sumAL / sumATQ * 100),
          this.tP(sumQ / sumATQ * 100), this.tP(sumT / sumATQ * 100), this.tP(sumAN / sumATQ * 100), this.tP(sumA / sumATQ * 100));
      }

    }

    const quarterSum = [];
    for (const q of this.m060actQuarterX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === q) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      quarterSum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }

    const QratioA0 = [];
    const QratioAC = [];
    const QratioAL = [];
    const QratioQ = [];
    const QratioT = [];
    const QratioAN = [];
    const QratioA = [];
    for (const qS of quarterSum) {
      const sumATQ = qS[0] + qS[1] + qS[2];
      if (sumATQ !== 0) {
        QratioA0.push(this.tP(qS[3] / sumATQ * 100));
        QratioAC.push(this.tP(qS[4] / sumATQ * 100));
        QratioAL.push(this.tP(qS[5] / sumATQ * 100));
        QratioQ.push(this.tP(qS[2] / sumATQ * 100));
        QratioT.push(this.tP(qS[1] / sumATQ * 100));
        QratioAN.push(this.tP(qS[6] / sumATQ * 100));
        QratioA.push(this.tP(qS[0] / sumATQ * 100));
      }
    }


    const monthSum = [];
    for (const m of this.m060monthX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === m) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      monthSum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }
    const MratioA0 = [];
    const MratioAC = [];
    const MratioAL = [];
    const MratioQ = [];
    const MratioT = [];
    const MratioAN = [];
    const MratioA = [];
    for (const mS of monthSum) {
      const sumATQ = mS[0] + mS[1] + mS[2];
      if (sumATQ !== 0) {
        MratioA0.push(this.tP(mS[3] / sumATQ * 100));
        MratioAC.push(this.tP(mS[4] / sumATQ * 100));
        MratioAL.push(this.tP(mS[5] / sumATQ * 100));
        MratioQ.push(this.tP(mS[2] / sumATQ * 100));
        MratioT.push(this.tP(mS[1] / sumATQ * 100));
        MratioAN.push(this.tP(mS[6] / sumATQ * 100));
        MratioA.push(this.tP(mS[0] / sumATQ * 100));
      }
    }

    const weekSum = [];
    for (const w of this.m060weekX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === w) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      weekSum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }
    const WratioA0 = [];
    const WratioAC = [];
    const WratioAL = [];
    const WratioQ = [];
    const WratioT = [];
    const WratioAN = [];
    const WratioA = [];
    for (const wS of weekSum) {
      const sumATQ = wS[0] + wS[1] + wS[2];
      if (sumATQ !== 0) {
        WratioA0.push(this.tP(wS[3] / sumATQ * 100));
        WratioAC.push(this.tP(wS[4] / sumATQ * 100));
        WratioAL.push(this.tP(wS[5] / sumATQ * 100));
        WratioQ.push(this.tP(wS[2] / sumATQ * 100));
        WratioT.push(this.tP(wS[1] / sumATQ * 100));
        WratioAN.push(this.tP(wS[6] / sumATQ * 100));
        WratioA.push(this.tP(wS[0] / sumATQ * 100));
      }
    }

    const daySum = [];
    for (const d of this.m060actDay) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === d) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      daySum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }
    const DratioA0 = [];
    const DratioAC = [];
    const DratioAL = [];
    const DratioQ = [];
    const DratioT = [];
    const DratioAN = [];
    const DratioA = [];
    for (const dS of daySum) {
      const sumATQ = dS[0] + dS[1] + dS[2];
      if (sumATQ !== 0) {
        DratioA0.push(this.tP(dS[3] / sumATQ * 100));
        DratioAC.push(this.tP(dS[4] / sumATQ * 100));
        DratioAL.push(this.tP(dS[5] / sumATQ * 100));
        DratioQ.push(this.tP(dS[2] / sumATQ * 100));
        DratioT.push(this.tP(dS[1] / sumATQ * 100));
        DratioAN.push(this.tP(dS[6] / sumATQ * 100));
        DratioA.push(this.tP(dS[0] / sumATQ * 100));
      }
    }

    this.m060mmtOption = this.setMmtOption(this.m060yearX, this.m060quarterX, this.m060monthX, this.m060weekX,
      this.m060dayX, seriesYear, QratioA0, QratioAC, QratioAL, QratioQ, QratioT, QratioAN, QratioA, MratioA0, MratioAC,
      MratioAL, MratioQ, MratioT, MratioAN, MratioA, WratioA0, WratioAC, WratioAL, WratioQ, WratioT, WratioAN, WratioA,
      DratioA0, DratioAC, DratioAL, DratioQ, DratioT, DratioAN, DratioA);

  }
  setm069mmtOption(data) {
    const seriesYear = []; // 存'A0比率', 'AC比率', 'AL比率', 'Q比率', 'T比率', 'AN比率', 'A%'

    for (const year of this.m069yearX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === year) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }

      if (sumA + sumT + sumQ !== 0) {
        const sumATQ = sumA + sumT + sumQ;
        seriesYear.push(this.tP(sumA0 / sumATQ * 100), this.tP(sumAC / sumATQ * 100), this.tP(sumAL / sumATQ * 100),
          this.tP(sumQ / sumATQ * 100), this.tP(sumT / sumATQ * 100), this.tP(sumAN / sumATQ * 100), this.tP(sumA / sumATQ * 100));
      }

    }

    const quarterSum = [];
    for (const q of this.m069actQuarterX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === q) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      quarterSum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }

    const QratioA0 = [];
    const QratioAC = [];
    const QratioAL = [];
    const QratioQ = [];
    const QratioT = [];
    const QratioAN = [];
    const QratioA = [];
    for (const qS of quarterSum) {
      const sumATQ = qS[0] + qS[1] + qS[2];
      if (sumATQ !== 0) {
        QratioA0.push(this.tP(qS[3] / sumATQ * 100));
        QratioAC.push(this.tP(qS[4] / sumATQ * 100));
        QratioAL.push(this.tP(qS[5] / sumATQ * 100));
        QratioQ.push(this.tP(qS[2] / sumATQ * 100));
        QratioT.push(this.tP(qS[1] / sumATQ * 100));
        QratioAN.push(this.tP(qS[6] / sumATQ * 100));
        QratioA.push(this.tP(qS[0] / sumATQ * 100));
      }
    }


    const monthSum = [];
    for (const m of this.m069monthX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === m) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      monthSum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }
    const MratioA0 = [];
    const MratioAC = [];
    const MratioAL = [];
    const MratioQ = [];
    const MratioT = [];
    const MratioAN = [];
    const MratioA = [];
    for (const mS of monthSum) {
      const sumATQ = mS[0] + mS[1] + mS[2];
      if (sumATQ !== 0) {
        MratioA0.push(this.tP(mS[3] / sumATQ * 100));
        MratioAC.push(this.tP(mS[4] / sumATQ * 100));
        MratioAL.push(this.tP(mS[5] / sumATQ * 100));
        MratioQ.push(this.tP(mS[2] / sumATQ * 100));
        MratioT.push(this.tP(mS[1] / sumATQ * 100));
        MratioAN.push(this.tP(mS[6] / sumATQ * 100));
        MratioA.push(this.tP(mS[0] / sumATQ * 100));
      }
    }

    const weekSum = [];
    for (const w of this.m069weekX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === w) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      weekSum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }
    const WratioA0 = [];
    const WratioAC = [];
    const WratioAL = [];
    const WratioQ = [];
    const WratioT = [];
    const WratioAN = [];
    const WratioA = [];
    for (const wS of weekSum) {
      const sumATQ = wS[0] + wS[1] + wS[2];
      if (sumATQ !== 0) {
        WratioA0.push(this.tP(wS[3] / sumATQ * 100));
        WratioAC.push(this.tP(wS[4] / sumATQ * 100));
        WratioAL.push(this.tP(wS[5] / sumATQ * 100));
        WratioQ.push(this.tP(wS[2] / sumATQ * 100));
        WratioT.push(this.tP(wS[1] / sumATQ * 100));
        WratioAN.push(this.tP(wS[6] / sumATQ * 100));
        WratioA.push(this.tP(wS[0] / sumATQ * 100));
      }
    }

    const daySum = [];
    for (const d of this.m069actDay) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === d) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      daySum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }
    const DratioA0 = [];
    const DratioAC = [];
    const DratioAL = [];
    const DratioQ = [];
    const DratioT = [];
    const DratioAN = [];
    const DratioA = [];
    for (const dS of daySum) {
      const sumATQ = dS[0] + dS[1] + dS[2];
      if (sumATQ !== 0) {
        DratioA0.push(this.tP(dS[3] / sumATQ * 100));
        DratioAC.push(this.tP(dS[4] / sumATQ * 100));
        DratioAL.push(this.tP(dS[5] / sumATQ * 100));
        DratioQ.push(this.tP(dS[2] / sumATQ * 100));
        DratioT.push(this.tP(dS[1] / sumATQ * 100));
        DratioAN.push(this.tP(dS[6] / sumATQ * 100));
        DratioA.push(this.tP(dS[0] / sumATQ * 100));
      }
    }

    this.m069mmtOption = this.setMmtOption(this.m069yearX, this.m069quarterX, this.m069monthX, this.m069weekX,
      this.m069dayX, seriesYear, QratioA0, QratioAC, QratioAL, QratioQ, QratioT, QratioAN, QratioA, MratioA0, MratioAC,
      MratioAL, MratioQ, MratioT, MratioAN, MratioA, WratioA0, WratioAC, WratioAL, WratioQ, WratioT, WratioAN, WratioA,
      DratioA0, DratioAC, DratioAL, DratioQ, DratioT, DratioAN, DratioA);

  }
  setm151mmtOption(data) {
    const seriesYear = []; // 存'A0比率', 'AC比率', 'AL比率', 'Q比率', 'T比率', 'AN比率', 'A%'

    for (const year of this.m151yearX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === year) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }

      if (sumA + sumT + sumQ !== 0) {
        const sumATQ = sumA + sumT + sumQ;
        seriesYear.push(this.tP(sumA0 / sumATQ * 100), this.tP(sumAC / sumATQ * 100), this.tP(sumAL / sumATQ * 100),
          this.tP(sumQ / sumATQ * 100), this.tP(sumT / sumATQ * 100), this.tP(sumAN / sumATQ * 100), this.tP(sumA / sumATQ * 100));
      }

    }

    const quarterSum = [];
    for (const q of this.m151actQuarterX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === q) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      quarterSum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }

    const QratioA0 = [];
    const QratioAC = [];
    const QratioAL = [];
    const QratioQ = [];
    const QratioT = [];
    const QratioAN = [];
    const QratioA = [];
    for (const qS of quarterSum) {
      const sumATQ = qS[0] + qS[1] + qS[2];
      if (sumATQ !== 0) {
        QratioA0.push(this.tP(qS[3] / sumATQ * 100));
        QratioAC.push(this.tP(qS[4] / sumATQ * 100));
        QratioAL.push(this.tP(qS[5] / sumATQ * 100));
        QratioQ.push(this.tP(qS[2] / sumATQ * 100));
        QratioT.push(this.tP(qS[1] / sumATQ * 100));
        QratioAN.push(this.tP(qS[6] / sumATQ * 100));
        QratioA.push(this.tP(qS[0] / sumATQ * 100));
      }
    }


    const monthSum = [];
    for (const m of this.m151monthX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === m) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      monthSum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }
    const MratioA0 = [];
    const MratioAC = [];
    const MratioAL = [];
    const MratioQ = [];
    const MratioT = [];
    const MratioAN = [];
    const MratioA = [];
    for (const mS of monthSum) {
      const sumATQ = mS[0] + mS[1] + mS[2];
      if (sumATQ !== 0) {
        MratioA0.push(this.tP(mS[3] / sumATQ * 100));
        MratioAC.push(this.tP(mS[4] / sumATQ * 100));
        MratioAL.push(this.tP(mS[5] / sumATQ * 100));
        MratioQ.push(this.tP(mS[2] / sumATQ * 100));
        MratioT.push(this.tP(mS[1] / sumATQ * 100));
        MratioAN.push(this.tP(mS[6] / sumATQ * 100));
        MratioA.push(this.tP(mS[0] / sumATQ * 100));
      }
    }

    const weekSum = [];
    for (const w of this.m151weekX) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === w) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      weekSum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }
    const WratioA0 = [];
    const WratioAC = [];
    const WratioAL = [];
    const WratioQ = [];
    const WratioT = [];
    const WratioAN = [];
    const WratioA = [];
    for (const wS of weekSum) {
      const sumATQ = wS[0] + wS[1] + wS[2];
      if (sumATQ !== 0) {
        WratioA0.push(this.tP(wS[3] / sumATQ * 100));
        WratioAC.push(this.tP(wS[4] / sumATQ * 100));
        WratioAL.push(this.tP(wS[5] / sumATQ * 100));
        WratioQ.push(this.tP(wS[2] / sumATQ * 100));
        WratioT.push(this.tP(wS[1] / sumATQ * 100));
        WratioAN.push(this.tP(wS[6] / sumATQ * 100));
        WratioA.push(this.tP(wS[0] / sumATQ * 100));
      }
    }

    const daySum = [];
    for (const d of this.m151actDay) {
      let sumA = 0;
      let sumT = 0;
      let sumQ = 0;
      let sumA0 = 0;
      let sumAC = 0;
      let sumAL = 0;
      let sumAN = 0;
      for (const obj of data) {
        if (obj.datename === d) {
          sumA += obj.a;
          sumT += obj.t;
          sumQ += obj.q;
          sumA0 += obj.a0;
          sumAC += obj.ac;
          sumAL += obj.al;
          sumAN += obj.an;
        }
      }
      daySum.push([sumA, sumT, sumQ, sumA0, sumAC, sumAL, sumAN]);
    }
    const DratioA0 = [];
    const DratioAC = [];
    const DratioAL = [];
    const DratioQ = [];
    const DratioT = [];
    const DratioAN = [];
    const DratioA = [];
    for (const dS of daySum) {
      const sumATQ = dS[0] + dS[1] + dS[2];
      if (sumATQ !== 0) {
        DratioA0.push(this.tP(dS[3] / sumATQ * 100));
        DratioAC.push(this.tP(dS[4] / sumATQ * 100));
        DratioAL.push(this.tP(dS[5] / sumATQ * 100));
        DratioQ.push(this.tP(dS[2] / sumATQ * 100));
        DratioT.push(this.tP(dS[1] / sumATQ * 100));
        DratioAN.push(this.tP(dS[6] / sumATQ * 100));
        DratioA.push(this.tP(dS[0] / sumATQ * 100));
      }
    }

    this.m151mmtOption = this.setMmtOption(this.m151yearX, this.m151quarterX, this.m151monthX, this.m151weekX,
      this.m151dayX, seriesYear, QratioA0, QratioAC, QratioAL, QratioQ, QratioT, QratioAN, QratioA, MratioA0, MratioAC,
      MratioAL, MratioQ, MratioT, MratioAN, MratioA, WratioA0, WratioAC, WratioAL, WratioQ, WratioT, WratioAN, WratioA,
      DratioA0, DratioAC, DratioAL, DratioQ, DratioT, DratioAN, DratioA);

  }

  m060select() {
    this.m060mmtLastData = this.filter(this.backupm060mmt, this.m060product, 'product');
    this.m060mmtLastData = this.filter(this.m060mmtLastData, this.m060size, 'product_size');
    this.m060mmtLastData = this.filter(this.m060mmtLastData, this.m060code, 'check_in_code');
    this.m060mmtLastData = this.filter(this.m060mmtLastData, this.m060grade, 'cell_grade');
    this.setm060Dpt(this.m060mmtLastData);
    this.setm060mmtOption(this.m060mmtLastData);
  }

  m069select() {
    this.m069mmtLastData = this.filter(this.backupm069mmt, this.m069product, 'product');
    this.m069mmtLastData = this.filter(this.m069mmtLastData, this.m069size, 'product_size');
    this.m069mmtLastData = this.filter(this.m069mmtLastData, this.m069code, 'check_in_code');
    this.m069mmtLastData = this.filter(this.m069mmtLastData, this.m069grade, 'cell_grade');
    this.setm069Dpt(this.m069mmtLastData);
    this.setm069mmtOption(this.m069mmtLastData);
  }
  m151select() {
    this.m151mmtLastData = this.filter(this.backupm151mmt, this.m151product, 'product');
    this.m151mmtLastData = this.filter(this.m151mmtLastData, this.m151size, 'product_size');
    this.m151mmtLastData = this.filter(this.m151mmtLastData, this.m151code, 'check_in_code');
    this.m151mmtLastData = this.filter(this.m151mmtLastData, this.m151grade, 'cell_grade');
    this.setm151Dpt(this.m151mmtLastData);
    this.setm151mmtOption(this.m151mmtLastData);
  }

  setMmtOption(yearX, quarterX, monthX, weekX, dayX, seriesYear, QratioA0, QratioAC, QratioAL,
    QratioQ, QratioT, QratioAN, QratioA, MratioA0, MratioAC, MratioAL, MratioQ, MratioT, MratioAN, MratioA,
    WratioA0, WratioAC, WratioAL, WratioQ, WratioT, WratioAN, WratioA, DratioA0, DratioAC, DratioAL,
    DratioQ, DratioT, DratioAN, DratioA): any {
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        itemWidth: 10,
        itemGap: 5,
        itemHeight: 8,
        textStyle: { fontSize: 10, color: '#F2FAF6' },
        data: ['A0比率', 'AC比率', 'AL比率', 'Q比率', 'T比率', 'AN比率', 'A%']
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
          data: yearX
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
          data: quarterX
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
          data: monthX
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
          data: weekX
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
          data: dayX
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
      series: [
        {
          xAxisIndex: 0,
          yAxisIndex: 0,
          barWidth: '60%',
          name: 'A0比率',
          stack: 'year',
          type: 'bar',
          itemStyle: {
            color: 'rgb(255, 233, 107)'
          },
          data: [seriesYear[0]]
        },
        {
          xAxisIndex: 0,
          yAxisIndex: 0,
          name: 'AC比率',
          stack: 'year',
          type: 'bar',
          itemStyle: {
            color: 'rgb(255, 158, 93)'
          },
          data: [seriesYear[1]]
        },
        {
          xAxisIndex: 0,
          yAxisIndex: 0,
          name: 'AL比率',
          stack: 'year',
          type: 'bar',
          itemStyle: {
            color: 'rgb(66, 164, 255)'
          },
          data: [seriesYear[2]]
        },
        {
          xAxisIndex: 0,
          yAxisIndex: 0,
          name: 'Q比率',
          stack: 'year',
          type: 'bar',
          itemStyle: {
            color: 'rgb(194, 194, 194)'
          },
          data: [seriesYear[3]]
        },
        {
          xAxisIndex: 0,
          yAxisIndex: 0,
          name: 'T比率',
          stack: 'year',
          type: 'bar',
          itemStyle: {
            color: 'rgb(200, 248, 168)'
          },
          data: [seriesYear[4]]
        },
        {
          xAxisIndex: 0,
          yAxisIndex: 0,
          symbol: 'circle',
          symbolSize: 7,
          name: 'AN比率',
          type: 'line',
          itemStyle: {
            color: 'rgb(123, 224, 40)'
          },
          data: [seriesYear[5]]
        },
        {
          xAxisIndex: 0,
          yAxisIndex: 0,
          symbol: 'circle',
          symbolSize: 7,
          name: 'A%',
          type: 'line',
          itemStyle: {
            color: 'rgb(173, 99, 230)'
          },
          data: [seriesYear[6]]
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          barWidth: '60%',
          name: 'A0比率',
          itemStyle: { color: 'rgb(255, 233, 107)' },
          stack: '季度',
          type: 'bar',
          data: QratioA0
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          name: 'AC比率',
          itemStyle: { color: 'rgb(255, 158, 93)' },
          stack: '季度',
          type: 'bar',
          data: QratioAC
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          name: 'AL比率',
          itemStyle: { color: 'rgb(66, 164, 255)' },
          stack: '季度',
          type: 'bar',
          data: QratioAL
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          name: 'Q比率',
          itemStyle: { color: 'rgb(194, 194, 194)' },
          stack: '季度',
          type: 'bar',
          data: QratioQ
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          name: 'T比率',
          itemStyle: { color: 'rgb(200, 248, 168)' },
          stack: '季度',
          type: 'bar',
          data: QratioT
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          symbol: 'circle',
          symbolSize: 7,
          name: 'AN比率',
          itemStyle: { color: 'rgb(123, 224, 40)' },
          type: 'line',
          data: QratioAN
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          symbol: 'circle',
          symbolSize: 7,
          name: 'A%',
          itemStyle: { color: 'rgb(173, 99, 230)' },
          type: 'line',
          data: QratioA
        },
        {
          xAxisIndex: 4,
          yAxisIndex: 4,
          barWidth: '60%',
          name: 'A0比率',
          itemStyle: { color: 'rgb(255, 233, 107)' },
          stack: '月',
          type: 'bar',
          data: MratioA0
        },
        {
          xAxisIndex: 4,
          yAxisIndex: 4,
          name: 'AC比率',
          itemStyle: { color: 'rgb(255, 158, 93)' },
          stack: '月',
          type: 'bar',
          data: MratioAC
        },
        {
          xAxisIndex: 4,
          yAxisIndex: 4,
          name: 'AL比率',
          itemStyle: { color: 'rgb(66, 164, 255)' },
          stack: '月',
          type: 'bar',
          data: MratioAL
        },
        {
          xAxisIndex: 4,
          yAxisIndex: 4,
          name: 'Q比率',
          itemStyle: { color: 'rgb(194, 194, 194)' },
          stack: '月',
          type: 'bar',
          data: MratioQ
        },
        {
          xAxisIndex: 4,
          yAxisIndex: 4,
          name: 'T比率',
          itemStyle: { color: 'rgb(200, 248, 168)' },
          stack: '月',
          type: 'bar',
          data: MratioT
        },
        {
          xAxisIndex: 4,
          yAxisIndex: 4,
          symbol: 'circle',
          symbolSize: 7,
          name: 'AN比率',
          itemStyle: { color: 'rgb(123, 224, 40)' },
          type: 'line',
          data: MratioAN
        },
        {
          xAxisIndex: 4,
          yAxisIndex: 4,
          symbol: 'circle',
          symbolSize: 7,
          name: 'A%',
          itemStyle: { color: 'rgb(173, 99, 230)' },
          type: 'line',
          data: MratioA
        },
        {
          xAxisIndex: 6,
          yAxisIndex: 6,
          barWidth: '60%',
          name: 'A0比率',
          itemStyle: { color: 'rgb(255, 233, 107)' },
          stack: '星期',
          type: 'bar',
          data: WratioA0
        },
        {
          xAxisIndex: 6,
          yAxisIndex: 6,
          name: 'AC比率',
          itemStyle: { color: 'rgb(255, 158, 93)' },
          stack: '星期',
          type: 'bar',
          data: WratioAC
        },
        {
          xAxisIndex: 6,
          yAxisIndex: 6,
          name: 'AL比率',
          itemStyle: { color: 'rgb(66, 164, 255)' },
          stack: '星期',
          type: 'bar',
          data: WratioAL
        },
        {
          xAxisIndex: 6,
          yAxisIndex: 6,
          name: 'Q比率',
          itemStyle: { color: 'rgb(194, 194, 194)' },
          stack: '星期',
          type: 'bar',
          data: WratioQ
        },
        {
          xAxisIndex: 6,
          yAxisIndex: 6,
          name: 'T比率',
          itemStyle: { color: 'rgb(200, 248, 168)' },
          stack: '星期',
          type: 'bar',
          data: WratioT
        },
        {
          xAxisIndex: 6,
          yAxisIndex: 6,
          symbol: 'circle',
          symbolSize: 7,
          name: 'AN比率',
          itemStyle: { color: 'rgb(123, 224, 40)' },
          type: 'line',
          data: WratioAN
        },
        {
          xAxisIndex: 6,
          yAxisIndex: 6,
          symbol: 'circle',
          symbolSize: 7,
          name: 'A%',
          itemStyle: { color: 'rgb(173, 99, 230)' },
          type: 'line',
          data: WratioA
        },
        {
          xAxisIndex: 8,
          yAxisIndex: 8,
          barWidth: '60%',
          name: 'A0比率',
          itemStyle: { color: 'rgb(255, 233, 107)' },
          stack: '日',
          type: 'bar',
          data: DratioA0
        },
        {
          xAxisIndex: 8,
          yAxisIndex: 8,
          name: 'AC比率',
          itemStyle: { color: 'rgb(255, 158, 93)' },
          stack: '日',
          type: 'bar',
          data: DratioAC
        },
        {
          xAxisIndex: 8,
          yAxisIndex: 8,
          name: 'AL比率',
          itemStyle: { color: 'rgb(66, 164, 255)' },
          stack: '日',
          type: 'bar',
          data: DratioAL
        },
        {
          xAxisIndex: 8,
          yAxisIndex: 8,
          name: 'Q比率',
          itemStyle: { color: 'rgb(194, 194, 194)' },
          stack: '日',
          type: 'bar',
          data: DratioQ
        },
        {
          xAxisIndex: 8,
          yAxisIndex: 8,
          name: 'T比率',
          itemStyle: { color: 'rgb(200, 248, 168)' },
          stack: '日',
          type: 'bar',
          data: DratioT
        },
        {
          xAxisIndex: 8,
          yAxisIndex: 8,
          symbol: 'circle',
          symbolSize: 7,
          name: 'AN比率',
          itemStyle: { color: 'rgb(123, 224, 40)' },
          type: 'line',
          data: DratioAN
        },
        {
          xAxisIndex: 8,
          yAxisIndex: 8,
          symbol: 'circle',
          symbolSize: 7,
          name: 'A%',
          itemStyle: { color: 'rgb(173, 99, 230)' },
          type: 'line',
          data: DratioA
        }
      ]
    };
    return option;
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
