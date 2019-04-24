import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { SeriesItemZaohui } from '../../array-kanban/pro-data-zaohui/model/seriesItemZaohui';

@Component({
  selector: 'app-pro-data',
  templateUrl: './pro-data.component.html',
  styleUrls: ['./pro-data.component.css']
})
export class ProDataComponent implements OnInit {

  // echarts图绑定的option
  cellInOption;
  cellOutOption;
  yiBiaoPanOption;
  glsWipOption;
  k98WipOption;
  k120WipOption;

  // 选择按钮绑定的值
  glswipType;
  pnlwip98Type;
  pnlwip120Type;

  // 最后三个图的横坐标轴数据相同
  xAxisData;

  // 保存备份以用来过滤
  backupGlsWipRes;
  backupPnlWip98Res;
  backupPnlWip120Res;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.glswipType = 'TFT Bank';

    this.pnlwip98Type = 'Inline';

    this.pnlwip120Type = 'Inline';

    this.apiService.getAll('/sc/clprodata1').subscribe(
      (res) => {
        this.setcellInOutOption(res);
      }
    );

    this.apiService.getAll('/sc/clprodata2').subscribe(
      (res) => {
        this.setYiBiaoPanOption(res);
      }
    );

    this.apiService.getAll('/sc/clprodata3').subscribe(
      (res) => {
        this.backupGlsWipRes = res;
        this.setxAxisData(res);
        this.setGlsWipOption(this.filter(res, this.glswipType));
      }
    );

    this.apiService.getAll('/sc/clprodata4').subscribe(
      (res) => {
        this.backupPnlWip98Res = res;
        this.setxAxisData(res);
        this.setPnlWip98Option(this.filter(res, this.pnlwip98Type));
      }
    );

    this.apiService.getAll('/sc/clprodata5').subscribe(
      (res) => {
        this.backupPnlWip120Res = res;
        this.setxAxisData(res);
        this.setPnlWip120Option(this.filter(res, this.pnlwip120Type));
      }
    );

  }

  setcellInOutOption(data) {
    const dateArray = [];
    const cellInPlanM = [];
    const cellInPlanD = [];
    const cellInAct = [];
    const cellOutPlanM = [];
    const cellOutPlanD = [];
    const cellOutAct = [];

    for (const obj of data) {

      if (obj.item === 'In') {
        let month = null;
        if (obj.datename.substr(4, 1) === '0') {
          month = obj.datename.substr(5, 1) + '月';
        } else {
          month = obj.datename.substr(4, 2) + '月';
        }
        let day = null;
        if (obj.datename.substr(6, 1) === '0') {
          day = obj.datename.substr(7) + '日';
        } else {
          day = obj.datename.substr(6) + '日';
        }
        dateArray.push(month + day);
        cellInPlanM.push(obj.plan_m);
        cellInPlanD.push(obj.plan_d);
        cellInAct.push(obj.act);
      } else if (obj.item === 'Out') {
        cellOutPlanM.push(obj.plan_m);
        cellOutPlanD.push(obj.plan_d);
        cellOutAct.push(obj.act);
      }

    }
    this.cellInOption = {
      title: {
        text: 'Cell In达成情况',
        left: '10%',
        textStyle: {
          color: '#F2F6FA',
          fontSize: 12,
          fontWeight: 'lighter'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        itemGap: 4,
        itemHeight: 8,
        itemWidth: 8,
        right: '2%',
        top: '1%',
        textStyle: {
          color: '#F2F6FA',
          fontSize: 10
        },
        data: ['月计划', '日计划', 'Action']
      },
      grid: {
        top: '18%',
        right: '2%',
        bottom: '14%'
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          fontSize: 10
        },
        axisLine: {
          lineStyle: {
            color: '#F2F6FA'
          }
        },
        data: dateArray
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: '#31495E'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#F2F6FA',
          fontSize: 10
        }
      },
      series: [{
        name: '月计划',
        barWidth: '20%',
        barGap: '20%',
        data: cellInPlanM,
        type: 'bar',
        itemStyle: {
          color: '#00BCD4'
        }
      },
      {
        name: '日计划',
        barWidth: '20%',
        data: cellInPlanD,
        type: 'bar',
        itemStyle: {
          color: '#8BC34A'
        }
      },
      {
        name: 'Action',
        barWidth: '20%',
        data: cellInAct,
        type: 'bar',
        itemStyle: {
          color: '#FF9800'
        }
      }]
    };
    this.cellOutOption = {
      title: {
        text: 'Cell Out达成情况',
        left: '10%',
        textStyle: {
          color: '#F2F6FA',
          fontSize: 12,
          fontWeight: 'lighter'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        itemGap: 4,
        itemHeight: 8,
        itemWidth: 8,
        right: '2%',
        top: '1%',
        textStyle: {
          color: '#F2F6FA',
          fontSize: 10
        },
        data: ['月计划', '日计划', 'Action']
      },
      grid: {
        top: '18%',
        right: '2%',
        bottom: '14%'
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          fontSize: 10
        },
        axisLine: {
          lineStyle: {
            color: '#F2F6FA'
          }
        },
        data: dateArray
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: '#31495E'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#F2F6FA',
          fontSize: 10
        }
      },
      series: [{
        name: '月计划',
        barWidth: '20%',
        barGap: '20%',
        data: cellOutPlanM,
        type: 'bar',
        itemStyle: {
          color: '#00BCD4'
        }
      },
      {
        name: '日计划',
        barWidth: '20%',
        data: cellOutPlanD,
        type: 'bar',
        itemStyle: {
          color: '#8BC34A'
        }
      },
      {
        name: 'Action',
        barWidth: '20%',
        data: cellOutAct,
        type: 'bar',
        itemStyle: {
          color: '#FF9800'
        }
      }]
    };
  }

  setYiBiaoPanOption(data) {
    this.yiBiaoPanOption = {
      title: [
        {
          text: 'Cell In月计划',
          left: '15%',
          top: '2%',
          textStyle: {
            fontSize: 14,
            color: 'yellow'
          },
          subtext: '计划:' + '\n实际:' + '\nBalance:',
          subtextStyle: {
            fontSize: 14,
            color: 'white'
          }
        },
        {
          text: ' ',
          left: '15%',
          top: '2%',
          textStyle: {
            fontSize: 14
          },
          subtext: '         ' + data[0].plan_m + '\n         ' + data[0].act,
          subtextStyle: {
            fontSize: 14,
            color: 'yellow'
          }
        },
        {
          text: ' ',
          left: '15%',
          top: '2%',
          textStyle: {
            fontSize: 14
          },
          subtext: '\n' + '\n               ' + data[0].bal,
          subtextStyle: {
            fontSize: 14,
            color: (data[0].bal < 0 ? 'rgb(255, 56, 56)' : 'yellow')
          }
        },
        {
          text: 'Cell Out月计划',
          left: '59%',
          top: '67%',
          textStyle: {
            fontSize: 14,
            color: 'yellow'
          },
          subtext: '计划:' + '\n实际:' + '\nBalance:',
          subtextStyle: {
            fontSize: 14,
            color: 'white'
          }
        },
        {
          text: ' ',
          left: '59%',
          top: '67%',
          textStyle: {
            fontSize: 14
          },
          subtext: '         ' + data[1].plan_m + '\n         ' + data[1].act,
          subtextStyle: {
            fontSize: 14,
            color: 'yellow'
          }
        },
        {
          text: ' ',
          left: '59%',
          top: '67%',
          textStyle: {
            fontSize: 14
          },
          subtext: '\n' + '\n               ' + data[1].bal,
          subtextStyle: {
            fontSize: 14,
            color: (data[1].bal < 0 ? 'rgb(255, 56, 56)' : 'yellow')
          }
        }

      ],
      series: [
        {
          type: 'gauge',
          min: 0,
          max: 100,
          center: ['68%', '33%'],
          radius: '65%',
          startAngle: 240,
          endAngle: -60,
          axisLine: {            // 坐标轴线
            show: true,
            lineStyle: {
              width: '5',
              color: [[0.2, 'red'], [0.8, '#FFC000'], [1, '#44FF32']]
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 8,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          splitLine: {           // 分隔线
            length: 10,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          pointer: {
            width: 3
          },
          axisLabel: {
            color: '#eee',
            distance: 0
          },
          title: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontSize: 13,
            offsetCenter: [0, '-30%'],
            fontStyle: 'italic',
            color: 'white'
          },
          detail: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            formatter: '{value}%',
            fontWeight: 'bolder',
            fontSize: 14,
            color: 'rgb(82, 235, 255)',
            borderRadius: 3,
            borderWidth: 1,
            borderColor: 'white',
          },
          data: [{ value: data[0].ratio, name: 'In达成率' }]
        },
        {
          type: 'gauge',
          min: 0,
          max: 100,
          center: ['32%', '70%'],
          radius: '65%',
          startAngle: 240,
          endAngle: -60,
          axisLine: {            // 坐标轴线
            show: true,
            lineStyle: {
              width: '5',
              color: [[0.2, 'red'], [0.8, '#FFC000'], [1, '#44FF32']]
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 8,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          splitLine: {           // 分隔线
            length: 10,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          pointer: {
            width: 3
          },
          axisLabel: {
            color: '#eee',
            distance: 0
          },
          title: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontSize: 13,
            offsetCenter: [0, '-30%'],
            fontStyle: 'italic',
            color: 'white'
          },
          detail: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            formatter: '{value}%',
            fontWeight: 'bolder',
            fontSize: 14,
            color: 'rgb(82, 235, 255)',
            borderRadius: 3,
            borderWidth: 1,
            borderColor: 'white',
          },
          data: [{ value: data[1].ratio, name: 'Out达成率' }]
        }
      ]
    };
  }

  setGlsWipOption(data) {
    const datenameArray = [];
    for (const obj of data) {
      if (!datenameArray.includes(obj.datename)) {
        datenameArray.push(obj.datename);
      }
    }
    // 定义一个series数据数组
    const seriesArray = [];
    // 把每一天的数据和做成折线图数据放进数组
    const lineData = [];
    for (const d of datenameArray) {
      let sum = 0;
      for (const obj of data) {
        if (obj.datename === d) {
          sum += obj.glsqty;
        }
      }
      lineData.push(sum);
    }
    seriesArray.push(
      {
        name: 'sum',
        type: 'line',
        label: {
          show: true,
          fontSize: 10
        },
        data: lineData,
        itemStyle: {
          color: '#1FE9BA'
        }
      }
    );

    const newData = data.filter((obj) => {
      return obj.productname !== '其他';
    });

    // 求y轴最大值所用
    const maxValue = this.setYmax(lineData);

    if (newData.length !== 0) {
      for (let i = 0; i < datenameArray.length; i++) {
        for (const obj of newData) {
          if (obj.datename === datenameArray[i]) {
            seriesArray.push(new SeriesItemZaohui(obj.productname, 'bar', 'sum', [[i, obj.glsqty]]));
          }
        }
      }
    }

    this.glsWipOption = {

      title: {
        text: 'Glass WIP趋势',
        left: '4%',
        textStyle: {
          fontSize: 13,
          color: 'rgb(223, 230, 226)'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '4%',
        right: '3%',
        top: '23%',
        bottom: '15%'
      },
      xAxis: [
        {
          type: 'category',
          data: this.xAxisData,
          axisLabel: {
            interval: 0,
            fontSize: 9,
            color: 'white'
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(223, 230, 226)'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          max: maxValue,
          axisLabel: {
            fontSize: 10,
            color: 'white'
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#F2FAF6'
            }
          }
        }
      ],
      series: seriesArray
    };
  }

  setPnlWip98Option(data) {
    const datenameArray = [];
    for (const obj of data) {
      if (!datenameArray.includes(obj.datename)) {
        datenameArray.push(obj.datename);
      }
    }
    // 定义一个series数据数组
    const seriesArray = [];
    // 把每一天的数据和做成折线图数据放进数组
    const lineData = [];
    for (const d of datenameArray) {
      let sum = 0;
      for (const obj of data) {
        if (obj.datename === d) {
          sum += obj.pnlqty;
        }
      }
      lineData.push(sum);
    }
    seriesArray.push(
      {
        name: 'sum',
        type: 'line',
        label: {
          show: true,
          fontSize: 10
        },
        data: lineData,
        itemStyle: {
          color: '#1FE9BA'
        }
      }
    );

    const newData = data.filter((obj) => {
      return obj.productname !== '其他';
    });

    // 求y轴最大值所用
    const maxValue = this.setYmax(lineData);

    if (newData.length !== 0) {
      for (let i = 0; i < datenameArray.length; i++) {
        for (const obj of newData) {
          if (obj.datename === datenameArray[i]) {
            seriesArray.push(new SeriesItemZaohui(obj.productname, 'bar', 'sum', [[i, obj.pnlqty]]));
          }
        }
      }
    }

    this.k98WipOption = {

      title: {
        text: '98K Panel WIP',
        left: '4%',
        textStyle: {
          fontSize: 13,
          color: '#F2FAF6'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '4%',
        right: '3%',
        top: '23%',
        bottom: '15%'
      },
      xAxis: [
        {
          type: 'category',
          data: this.xAxisData,
          axisLabel: {
            interval: 0,
            fontSize: 9,
            color: 'white'
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(223, 230, 226)'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          max: maxValue,
          axisLabel: {
            fontSize: 10,
            color: 'white'
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(223, 230, 226)'
            }
          }
        }
      ],
      series: seriesArray
    };
  }

  setPnlWip120Option(data) {
    const datenameArray = [];
    for (const obj of data) {
      if (!datenameArray.includes(obj.datename)) {
        datenameArray.push(obj.datename);
      }
    }
    // 定义一个series数据数组
    const seriesArray = [];
    // 把每一天的数据和做成折线图数据放进数组
    const lineData = [];
    for (const d of datenameArray) {
      let sum = 0;
      for (const obj of data) {
        if (obj.datename === d) {
          sum += obj.pnlqty;
        }
      }
      lineData.push(sum);
    }
    seriesArray.push(
      {
        name: 'sum',
        type: 'line',
        label: {
          show: true,
          fontSize: 10
        },
        data: lineData,
        itemStyle: {
          color: '#1FE9BA'
        }
      }
    );

    const newData = data.filter((obj) => {
      return obj.productname !== '其他';
    });

    // 求y轴最大值所用
    const maxValue = this.setYmax(lineData);

    if (newData.length !== 0) {
      for (let i = 0; i < datenameArray.length; i++) {
        for (const obj of newData) {
          if (obj.datename === datenameArray[i]) {
            seriesArray.push(new SeriesItemZaohui(obj.productname, 'bar', 'sum', [[i, obj.pnlqty]]));
          }
        }
      }
    }

    this.k120WipOption = {

      title: {
        text: '120K Panel WIP',
        left: '4%',
        textStyle: {
          fontSize: 13,
          color: '#F2FAF6'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '4%',
        right: '3%',
        top: '23%',
        bottom: '15%'
      },
      xAxis: [
        {
          type: 'category',
          data: this.xAxisData,
          axisLabel: {
            interval: 0,
            fontSize: 9,
            color: 'white'
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(223, 230, 226)'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          max: maxValue,
          axisLabel: {
            fontSize: 10,
            color: 'white'
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(223, 230, 226)'
            }
          }
        }
      ],
      series: seriesArray
    };
  }

  filter(data, key): Array<any> {
    return data.filter((obj) => {
      return (obj.oper_code === key);
    });
  }

  setYmax(data: Array<number>): number {
    if (data.length !== 0) {
      const max = data.reduce((pre, cur) => {
        if (pre >= cur) {
          return pre;
        } else {
          return cur;
        }
      });
      return parseInt((max * 1.05).toString(), 10);
    } else {
      return 100;
    }
  }

  onChange1() {
    this.setGlsWipOption(this.filter(this.backupGlsWipRes, this.glswipType));
  }

  onChange2() {
    this.setPnlWip98Option(this.filter(this.backupPnlWip98Res, this.pnlwip98Type));
  }

  onChange3() {
    this.setPnlWip120Option(this.filter(this.backupPnlWip120Res, this.pnlwip120Type));
  }

  // 根据查询出的第一个日期计算出x轴
  setxAxisData(data) {
    if (data.length !== 0) {
      const curDate = data[0].datename;
      const month = parseInt(curDate.substr(4, 2), 10);
      this.xAxisData = [];
      for (let i = 1; i <= this.getCountDays(curDate); i++) {
        const dateItem = month + '月' + i;
        this.xAxisData.push(dateItem);
      }
    }
  }

  getCountDays(date: string): number {
    const curDate = new Date();
    const year = parseInt(date.substr(0, 4), 10);
    const month = parseInt(date.substr(4, 2), 10) - 1;
    curDate.setFullYear(year);
    curDate.setMonth(month);
    /* 获取当前月份 */
    curDate.setDate(1);
    // 比如3月31日直接取下一个月份取到的是5月1日，再进行后续操作就会出错，所以应该先设置为当前月份第一天 curDate.setDate(1);，再进行取月份、设置月份和设置天的操作。
    const curMonth = curDate.getMonth();
    /*  是为了把当前月份日期设置成下一个月份日期 */
    curDate.setMonth(curMonth + 1);
    /* 将日期设置为0, 是为了通过下一个月份日期获取当前月份日期的最后一天日期 */
    curDate.setDate(0);
    /* 返回当月的天数 */
    return curDate.getDate();
  }

}
