import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { SeriesItemZaohui } from 'app/productionkanban/array-kanban/pro-data-zaohui/model/seriesItemZaohui';

@Component({
  selector: 'app-pro-data',
  templateUrl: './pro-data.component.html',
  styleUrls: ['./pro-data.component.css']
})
export class ProDataComponent implements OnInit {

  // 计划达成情况数组
  plans;

  // echarts图绑定的option
  touRuOption;
  chanChuOption;
  stkRtoOption;
  wipMoveOption;
  bankOption;
  cellInOption;

  // FCW CST 绑定的四个数据
  tft_sorting;
  cell_tft_cf;
  develop;
  empty;

  // 选择按钮绑定的值
  bankType;

  // 最后两个图的横坐标轴数据相同
  bankxAxisData;
  cellInXData;

  // 保存备份以用来过滤
  backupBankRes;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.bankType = 'TFT Bank';

    this.apiService.getAll('/sc/cfkanban/proplan').subscribe(
      (res) => {
        this.plans = res;
      }
    );

    this.apiService.getAll('/sc/cfkanban/protouru').subscribe(
      (res) => {
        this.setTouruChanChuOption(res);
      }
    );

    this.apiService.getAll('/sc/cfkanban/fcwcst').subscribe(
      (res) => {
        this.setFcwCst(res);
      }
    );

    this.apiService.getAll('/sc/cfkanban/stkrto').subscribe(
      (res) => {
        this.setStkRtoOption(res);
      }
    );

    this.apiService.getAll('/sc/cfkanban/wipmove').subscribe(
      (res) => {
        this.setWipMoveOption(res);
      }
    );

    this.apiService.getAll('/sc/cfkanban/bank').subscribe(
      (res) => {
        this.backupBankRes = res;
        this.setxAxisData(res);
        this.setBankOption(this.filter(res, this.bankType));
      }
    );

    this.apiService.getAll('/sc/cfkanban/cellin').subscribe(
      (res) => {
        this.setxAxisData2(res);
        this.setCellIn(res);
      }
    );

  }

  setCellIn(data) {
    const plan_m = [];
    const plan_d = [];
    const act = [];
    const ratio = [];

    for (const obj of data) {
      plan_m.push(obj.plan_m);
      plan_d.push(obj.plan_d);
      act.push(obj.act);
      ratio.push(obj.ratio);
    }
    this.cellInOption = {
      title: {
        text: 'Cell IN计划/实绩',
        left: '45%',
        textStyle: {
          color: '#F2F6FA',
          fontSize: 14,

        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        itemHeight: 8,
        itemWidth: 12,
        right: '10%',
        textStyle: {
          color: '#F2F6FA',
          fontSize: 10
        },
        data: ['Plan_Month', 'Plan_Day', 'Act', '达成率']
      },
      grid: {
        top: '18%',
        right: '5%',
        bottom: '14%',
        left: '5%'
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          fontSize: 10,
          interval: 0
        },
        axisLine: {
          lineStyle: {
            color: '#F2F6FA'
          }
        },
        data: this.cellInXData
      },
      yAxis: [{
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
      {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#F2F6FA',
          fontSize: 10,
          formatter: '{value}%'
        }
      }],
      series: [{
        name: 'Plan_Month',
        barWidth: '20%',
        data: plan_m,
        type: 'bar',
        itemStyle: {
          color: '#00BCD4'
        }
      },
      {
        name: 'Plan_Day',
        barWidth: '20%',
        data: plan_d,
        type: 'bar',
        itemStyle: {
          color: '#8BC34A'
        }
      },
      {
        name: 'Act',
        barWidth: '20%',
        data: act,
        type: 'bar',
        itemStyle: {
          color: '#FF9800'
        }
      },
      {
        name: '达成率',
        data: ratio,
        yAxisIndex: 1,
        type: 'line',
        itemStyle: {
          color: '#1FE9BA'
        },
        label: {
          show: true,
          fontSize: 10,
          formatter: '{c}%'
        }
      }]
    };
  }

  onChange1() {
    this.setBankOption(this.filter(this.backupBankRes, this.bankType));
  }

  setBankOption(data) {
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

    // 求y轴最大值所用
    const maxValue = this.setYmax(lineData);

    if (data.length !== 0) {
      for (let i = 0; i < datenameArray.length; i++) {
        for (const obj of data) {
          if (obj.datename === datenameArray[i]) {
            seriesArray.push(new SeriesItemZaohui(obj.productname, 'bar', 'sum', [[i, obj.glsqty]]));
          }
        }
      }
    }

    this.bankOption = {

      title: {
        text: 'Bank趋势',
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
          data: this.bankxAxisData,
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

  filter(data, key): Array<any> {
    return data.filter((obj) => {
      return (obj.oper_code === key);
    });
  }

  // 根据查询出的第一个日期计算出x轴
  setxAxisData(data) {
    if (data.length !== 0) {
      const curDate = data[0].datename;
      const month = parseInt(curDate.substr(4, 2), 10);
      this.bankxAxisData = [];
      for (let i = 1; i <= this.getCountDays(curDate); i++) {
        const dateItem = month + '月' + i;
        this.bankxAxisData.push(dateItem);
      }
    }
  }

  setxAxisData2(data) {
    if (data.length !== 0) {
      const curDate = data[0].datename;
      const month = parseInt(curDate.substr(4, 2), 10);
      this.cellInXData = [];
      for (let i = 1; i <= this.getCountDays(curDate); i++) {
        const dateItem = month + '月' + i;
        this.cellInXData.push(dateItem);
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

  setTouruChanChuOption(data) {

    const xAxisData = [];
    const planIn = [];
    const actIn = [];
    const planOut = [];
    const actOut = [];
    const touRu = [];
    const chanChu = [];

    for (const obj of data) {
      if (!xAxisData.includes(obj.datename)) {
        xAxisData.push(obj.datename);
      }
    }

    for (const obj of data) {
      if (obj.item === 'In') {
        for (const day of xAxisData) {
          if (day === obj.datename) {
            planIn.push(obj.plan);
            actIn.push(obj.act);
            touRu.push(obj.ratio);
          }
        }
      } else if (obj.item === 'Out') {
        for (const day of xAxisData) {
          if (day === obj.datename) {
            planOut.push(obj.plan);
            actOut.push(obj.act);
            chanChu.push(obj.ratio);
          }
        }
      }
    }


    this.touRuOption = {

      title: {
        text: '投入情况',
        left: '43%',
        textStyle: {
          color: 'white',
          fontSize: 14
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '20%',
        bottom: '25%',
        left: '7%',
        right: '7%'
      },
      legend: {
        bottom: '0%',
        itemWidth: 12,
        itemHeight: 8,
        itemGap: 6,
        textStyle: {
          color: 'white',
          fontSize: 10
        },
        data: ['PlanIn', 'ActIn', '投入达成率']
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          margin: 3,
          formatter: function (value) {
            return value.substr(4, 2) + '/' + value.substr(6, 2);
          },
          fontSize: 10
        },
        axisLine: {
          lineStyle: {
            color: '#F2F6FA'
          }
        },
        data: xAxisData
      },
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#F2F6FA'
            }
          },
          axisLabel: {
            fontSize: 10
          },
          splitLine: {
            show: false
          }
        },
        {
          type: 'value',
          minInterval: 30,
          axisLabel: {
            formatter: '{value}%',
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: '#F2F6FA'
            }
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: 'PlanIn',
          type: 'bar',
          itemStyle: {
            color: '#0073FF'
          },
          data: planIn
        },
        {
          name: 'ActIn',
          type: 'bar',
          itemStyle: {
            color: '#FFC000'
          },
          data: actIn
        },
        {
          name: '投入达成率',
          yAxisIndex: 1,
          type: 'line',
          itemStyle: {
            color: '#1FE9BA'
          },
          label: {
            show: true,
            fontSize: 10
          },
          data: touRu
        }
      ]
    };

    this.chanChuOption = {

      title: {
        text: '产出情况',
        left: '43%',
        textStyle: {
          color: 'white',
          fontSize: 14
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '20%',
        bottom: '25%',
        left: '7%',
        right: '7%'
      },
      legend: {
        bottom: '0%',
        itemWidth: 12,
        itemHeight: 8,
        itemGap: 6,
        textStyle: {
          color: 'white',
          fontSize: 10
        },
        data: ['PlanOut', 'ActOut', '产出达成率']
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          margin: 3,
          formatter: function (value) {
            return value.substr(4, 2) + '/' + value.substr(6, 2);
          },
          fontSize: 10
        },
        axisLine: {
          lineStyle: {
            color: '#F2F6FA'
          }
        },
        data: xAxisData
      },
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#F2F6FA'
            }
          },
          axisLabel: {
            fontSize: 10
          },
          splitLine: {
            show: false
          }
        },
        {
          type: 'value',
          minInterval: 30,
          axisLabel: {
            formatter: '{value}%',
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: '#F2F6FA'
            }
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: 'PlanOut',
          type: 'bar',
          itemStyle: {
            color: '#0073FF'
          },
          data: planOut
        },
        {
          name: 'ActOut',
          type: 'bar',
          itemStyle: {
            color: '#FFC000'
          },
          data: actOut
        },
        {
          name: '产出达成率',
          yAxisIndex: 1,
          type: 'line',
          label: {
            show: true,
            fontSize: 10
          },
          itemStyle: {
            color: '#1FE9BA'
          },
          data: chanChu
        }
      ]
    };
  }

  setFcwCst(data) {
    for (const obj of data) {
      switch (obj.item) {
        case 'TFT Sorting':
          this.tft_sorting = obj.qty;
          break;
        case 'Cell TFT+CF':
          this.cell_tft_cf = obj.qty;
          break;
        case 'Develop':
          this.develop = obj.qty;
          break;
        case 'Empty':
          this.empty = obj.qty;
          break;
      }
    }
  }

  setStkRtoOption(data) {

    const xAxisData = [];
    const used = [];
    const fullRto = [];

    for (const obj of data) {
      xAxisData.push(obj.machinename);
      used.push(obj.fullqty);
      fullRto.push(obj.fullratio);
    }

    // BF在最后，取出数组的第一个元素放到最后

    const firstX = xAxisData.shift();
    xAxisData.push(firstX);
    const firstU = used.shift();
    used.push(firstU);
    const firstF = fullRto.shift();
    fullRto.push(firstF);

    this.stkRtoOption = {

      title: {
        text: 'Stocker装载率',
        left: '43%',
        textStyle: {
          color: 'white',
          fontSize: 14
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '20%',
        bottom: '20%',
        left: '7%',
        right: '8%'
      },
      legend: {
        bottom: '0%',
        itemWidth: 14,
        itemHeight: 8,
        itemGap: 10,
        textStyle: {
          color: 'white'
        },
        data: ['USED', 'Full rate']
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          fontSize: 10,
          margin: 5
        },
        axisLine: {
          lineStyle: {
            color: '#F2F6FA'
          }
        },
        data: xAxisData
      },
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#F2F6FA'
            }
          },
          splitLine: {
            show: false
          }
        },
        {
          type: 'value',
          axisLabel: {
            formatter: '{value}%'
          },
          axisLine: {
            lineStyle: {
              color: '#F2F6FA'
            }
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: 'USED',
          type: 'bar',
          barWidth: '35%',
          itemStyle: {
            color: '#FFC000'
          },
          data: used
        },
        {
          name: 'Full rate',
          type: 'line',
          label: {
            show: true,
            fontSize: 10,
            formatter: '{c}%'
          },
          yAxisIndex: 1,
          itemStyle: {
            color: '#1FE9BA'
          },
          data: fullRto
        }
      ]
    };
  }

  setWipMoveOption(data) {
    // 获取x轴所有数据,定义一个数组保存x轴坐标
    const xData = [];
    for (const obj of data) {
      if (!xData.includes(obj.oper_desc)) {
        xData.push(obj.oper_desc);
      }
    }

    const lineData = [];  // 定义折线move的data数组
    const seriesArray = [];
    // 求y轴最大值所用
    let maxWip = null;
    const WipArray = [];
    if (data.length !== 0) {
      for (let i = 0; i < xData.length; i++) {
        let sum = 0;
        let sum2 = 0;
        for (const obj of data) {
          if (obj.oper_desc === xData[i]) {
            sum += obj.move;
            sum2 += obj.wip;
            if (obj.wip !== 0) {
              seriesArray.push(new SeriesItemZaohui(obj.productname, 'bar', 'sum', [[i, obj.wip]]));
            }
          }
        }
        lineData.push(sum);
        WipArray.push(sum2);
      }

      maxWip = this.setYmax(WipArray);

      seriesArray.push({
        name: 'move',
        yAxisIndex: 1,
        type: 'line',
        label: {
          color: 'white',
          fontSize: 9,
          show: true
        },
        itemStyle: {
          color: '#1FE9BA'
        },
        smooth: true,
        data: lineData
      });
    }

    this.wipMoveOption = {
      title: {
        left: '43%',
        text: 'CF Wip by Operation/Move',
        textStyle: {
          color: 'white',
          fontSize: 12
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '3%',
        top: '15%',
        bottom: '30%'
      },
      xAxis: [
        {
          type: 'category',
          data: xData,
          axisLabel: {
            interval: 0,
            rotate: 30,
            fontSize: 8,
            color: 'white'
          },
          axisLine: {
            lineStyle: {
              color: '#5694ce'
            }
          }
        }
      ],
      yAxis: [
        {
          name: 'WIP',
          nameGap: 3,
          nameTextStyle: {
            color: 'white',
            fontSize: 10
          },
          max: maxWip,
          type: 'value',
          axisLabel: {
            fontSize: 10,
            color: 'white'
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#5694ce'
            }
          }
        },
        {
          name: 'MOVE',
          nameGap: 3,
          nameTextStyle: {
            color: 'white',
            fontSize: 10
          },
          type: 'value',
          axisLabel: {
            fontSize: 10,
            color: 'white'
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#5694ce'
            }
          }
        }
      ],
      series: seriesArray
    };
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

}
