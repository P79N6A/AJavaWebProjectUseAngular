import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ApiService } from '../../../common/service/api/api.service';
import { SeriesItemAe } from './model/SeriesItemAe';

@Component({
  selector: 'app-dan-ae-info',
  templateUrl: './dan-ae-info.component.html',
  styleUrls: ['./dan-ae-info.component.css']
})
export class DanAeInfoComponent implements OnInit {

  timeType;
  timeTopType;
  dateName;
  dateTopName;
  firstState;
  department: SelectItem[];
  departmentTop: SelectItem[];
  stateDpt: SelectItem[];
  input1 = false;
  input2 = false;
  input3 = false;
  input4 = false;
  inputTop1 = false;
  inputTop2 = false;
  inputTop3 = false;
  inputTop4 = false;
  oeeAeOption;
  oeeAeTop5Option;

  backfirstEchart;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.department = [
      { label: '年', value: 'year' },
      { label: '季', value: 'quarter' },
      { label: '月', value: 'month' },
      { label: '日', value: 'day' }
    ];

    this.departmentTop = [
      { label: '年', value: 'year' },
      { label: '季', value: 'quarter' },
      { label: '月', value: 'month' },
      { label: '日', value: 'day' }
    ];
    this.timeType = 'year';
    this.timeTopType = 'year';
    this.input1 = true;
    this.inputTop1 = true;
    this.apiService.getAll('/sc/oeekanban/aeinfo').subscribe(
      (res) => {
        this.backfirstEchart = res;
        this.setOeeAeOption(res);
      }
    );

    this.apiService.getAll('/sc/oeekanban/aetop5').subscribe(
      (res) => {
        this.setOeeTop5Option(res);
      }
    );
  }

  select() {
    this.dateName = null;
    switch (this.timeType) {
      case 'year':
        this.input1 = true;
        this.input2 = false;
        this.input3 = false;
        this.input4 = false;
        break;
      case 'quarter':
        this.input1 = false;
        this.input2 = true;
        this.input3 = false;
        this.input4 = false;
        break;
      case 'month':
        this.input1 = false;
        this.input2 = false;
        this.input3 = true;
        this.input4 = false;
        break;
      case 'day':
        this.input1 = false;
        this.input2 = false;
        this.input3 = false;
        this.input4 = true;
        break;
    }
  }

  selectTop() {
    this.dateTopName = null;
    switch (this.timeTopType) {
      case 'year':
        this.inputTop1 = true;
        this.inputTop2 = false;
        this.inputTop3 = false;
        this.inputTop4 = false;
        break;
      case 'quarter':
        this.inputTop1 = false;
        this.inputTop2 = true;
        this.inputTop3 = false;
        this.inputTop4 = false;
        break;
      case 'month':
        this.inputTop1 = false;
        this.inputTop2 = false;
        this.inputTop3 = true;
        this.inputTop4 = false;
        break;
      case 'day':
        this.inputTop1 = false;
        this.inputTop2 = false;
        this.inputTop3 = false;
        this.inputTop4 = true;
        break;
    }
  }

  setOeeAeOption(data) {
    this.setStateDpt(data);
    this.setAeOption(this.filter(data, this.firstState));
  }

  setOeeTop5Option(data) {
    const legendData = [];
    for (const obj of data) {
      if (!legendData.includes(obj.second_state)) {
        legendData.push(obj.second_state);
      }
    }
    legendData.push('sum');
    // 定义一个series数据数组
    const seriesArray = [];
    // 把每一天的数据和做成折线图数据放进数组

    const xAxisData = [
      'Array Sputter',
      'Array PECVD',
      'Array Photo',
      'Array Wet Etch',
      'Array Dry Etch',
      'CF ITO',
      'CF BM',
      'CF RGB',
      'CF PS',
      'CF OC',
      'CF BM3',
      'Cell PI',
      'Cell Rubbing',
      'Cell ODF',
      'Cell Cut'
    ];
    const sum = [];
    for (let i = 0; i < xAxisData.length; i++) {
      const element = xAxisData[i];
      let sum1 = 0;
      for (const obj of data) {
        if (obj.oper === element) {
          sum1 = parseFloat((sum1 + obj.ratio).toFixed(5));
          seriesArray.push(new SeriesItemAe(obj.second_state, 'bar', '30%', 'sum', [[i, obj.ratio]]));
        }
      }
      sum.push(sum1);
    }

    // 求y轴最大值所用
    const maxValue = this.setYmax(sum);

    seriesArray.push(
      {
        name: 'sum',
        type: 'line',
        label: {
          show: true,
          fontSize: 10,
          formatter: '{c}%'
        },
        data: sum,
        itemStyle: {
          color: '#1FE9BA'
        }
      }
    );
    // seriesArray.push(
    //   {
    //     type: 'line',
    //     markLine: {
    //       silent: true,
    //       symbol: 'none',
    //       label: {
    //         show: true,
    //         formatter: '目标值: {c}%',
    //         fontSize: 10
    //       },
    //       lineStyle: {
    //         type: 'dashed',
    //         color: 'rgb(233, 255, 37)',
    //       },
    //       data: [{ yAxis: 9 }]
    //     }
    //   }
    // );

    this.oeeAeTop5Option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        type: 'scroll',
        top: '2%',
        pageIconColor: 'white',
        pageTextStyle: {
          color: 'white'
        },
        textStyle: { color: '#F2FAF6' },
        data: legendData
      },
      grid: {
        left: '4%',
        right: '3%',
        top: '15%',
        bottom: '18%'
      },
      xAxis: [
        {
          type: 'category',
          data: xAxisData,
          axisLabel: {
            interval: 0,
            rotate: 20,
            fontSize: 10,
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
            color: 'white',
            formatter: '{value}%'
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

  setAeOption(data) {
    const legendData = [];
    for (const obj of data) {
      if (!legendData.includes(obj.second_state)) {
        legendData.push(obj.second_state);
      }
    }
    legendData.push('sum');
    // 定义一个series数据数组
    const seriesArray = [];
    // 把每一天的数据和做成折线图数据放进数组

    const xAxisData = [
      'Array Sputter',
      'Array PECVD',
      'Array Photo',
      'Array Wet Etch',
      'Array Dry Etch',
      'CF ITO',
      'CF BM',
      'CF RGB',
      'CF PS',
      'CF OC',
      'CF BM3',
      'Cell PI',
      'Cell Rubbing',
      'Cell ODF',
      'Cell Cut'
    ];
    const sum = [];
    for (let i = 0; i < xAxisData.length; i++) {
      const element = xAxisData[i];
      let sum1 = 0;
      for (const obj of data) {
        if (obj.oper === element) {
          sum1 = parseFloat((sum1 + obj.ratio).toFixed(5));
          seriesArray.push(new SeriesItemAe(obj.second_state, 'bar', '30%', 'sum', [[i, obj.ratio]]));
        }
      }
      sum.push(sum1);
    }

    // 求y轴最大值所用
    const maxValue = this.setYmax(sum);

    seriesArray.push(
      {
        name: 'sum',
        type: 'line',
        label: {
          show: true,
          fontSize: 10,
          formatter: '{c}%'
        },
        data: sum,
        itemStyle: {
          color: '#1FE9BA'
        }
      }
    );
    // seriesArray.push(
    //   {
    //     type: 'line',
    //     markLine: {
    //       silent: true,
    //       symbol: 'none',
    //       label: {
    //         show: true,
    //         formatter: '目标值: {c}%',
    //         fontSize: 10
    //       },
    //       lineStyle: {
    //         type: 'dashed',
    //         color: 'rgb(233, 255, 37)',
    //       },
    //       data: [{ yAxis: 9 }]
    //     }
    //   }
    // );

    this.oeeAeOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        type: 'scroll',
        top: '2%',
        pageIconColor: 'white',
        pageTextStyle: {
          color: 'white'
        },
        textStyle: { color: '#F2FAF6' },
        data: legendData
      },
      grid: {
        left: '4%',
        right: '3%',
        top: '15%',
        bottom: '18%'
      },
      xAxis: [
        {
          type: 'category',
          data: xAxisData,
          axisLabel: {
            interval: 0,
            rotate: 20,
            fontSize: 10,
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
            color: 'white',
            formatter: '{value}%'
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
      return (obj.first_state === key);
    });
  }

  setStateDpt(data) {
    const array = [];
    this.stateDpt = [];
    for (const obj of data) {
      if (!array.includes(obj.first_state)) {
        array.push(obj.first_state);
        this.stateDpt.push({ label: obj.first_state, value: obj.first_state });
      }
    }
    this.firstState = array[0];
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
      if (max <= 10) {
        return 10;
      } else if (max <= 20) {
        return 20;
      } else if (max <= 30) {
        return 30;
      } else if (max <= 40) {
        return 40;
      } else if (max <= 50) {
        return 50;
      } else if (max <= 60) {
        return 60;
      } else if (max <= 70) {
        return 70;
      } else if (max <= 80) {
        return 80;
      } else if (max <= 90) {
        return 90;
      } else {
        return 100;
      }
    } else {
      return 100;
    }
  }

  filterSelect() {
    this.setAeOption(this.filter(this.backfirstEchart, this.firstState));
  }

  query() {
    if (this.dateName === null || this.dateName === undefined || this.dateName === '') {
      alert('请输入日期！');
    } else {
      const option = {
        params: {
          dateType: this.timeType,
          dateValue: this.dateName
        }
      };

      this.apiService.get('/sc/oeekanban/aeinfoQ', option).subscribe(
        (res) => {
          this.backfirstEchart = res;
          this.setOeeAeOption(res);
        }
      );
    }
  }

  queryTop() {
    if (this.dateTopName === null || this.dateTopName === undefined || this.dateTopName === '') {
      alert('请输入日期！');
    } else {
      const option = {
        params: {
          dateType: this.timeTopType,
          dateValue: this.dateTopName
        }
      };

      this.apiService.get('/sc/oeekanban/aetop5Q', option).subscribe(
        (res) => {
          this.setOeeTop5Option(res);
        }
      );
    }
  }

}
