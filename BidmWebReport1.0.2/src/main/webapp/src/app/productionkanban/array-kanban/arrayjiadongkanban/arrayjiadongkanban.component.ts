import { Component, OnInit } from '@angular/core';
import { EqpAllState, SeriesItem, ItemStyle } from './model/seriesItem';
import { SelectItem, Message } from 'primeng/api';
import { ApiService } from '../../../common/service/api/api.service';

@Component({
  selector: 'app-arrayjiadongkanban',
  templateUrl: './arrayjiadongkanban.component.html',
  styleUrls: ['./arrayjiadongkanban.component.css']
})
export class ArrayjiadongkanbanComponent implements OnInit {

  option;
  jiadongOption;

  yPhoto1 = ['PH01', 'PH02', 'PH03', 'PH04', 'PH05',
    'PH06', 'PH07', '', 'PH08', 'PH09', 'PH10', '', 'PH11',
    'PH12', 'PH13', '', 'PH14', 'PH15', 'PH16', 'PH17',
    'PH18']; // echarts图y轴数据
  yPhoto2 = ['', '', '', 'ITO', '',
    '', '', '', '', 'VIA', '', '', '',
    'Gate', '', '', '', '', 'SD', '',
    ''];

  ySputter1 = ['SP01', 'SP02', 'SP04', 'SP05', 'SP06', 'SP07', '', 'SP03', 'SP08', 'SP09', 'SP10', '', 'SP11',
    'SP12', 'SP13', 'SP14'];
  ySputter2 = ['', '', '', 'ITO', '', '', '', '', '', '', 'Gate', '', '', '', '', '', 'SD', '', ''];

  yPecvdFGI1 = ['PE01', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', '', 'PE02', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', '',
    'PE03', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', '', 'PE04', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5'];
  yPecvdFGI2 = ['', '', 'PE01', '', '', '', '', '', 'PE02', '', '', '', '', '', 'PE03', '', '', '', '', '', 'PE04', '', ''];

  yPecvdMulti1 = ['PE05', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', '', 'PE06', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', '',
    'PE07', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', '', 'PE08', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5'];
  yPecvdMulti2 = ['', '', 'PE05', '', '', '', '', '', 'PE06', '', '', '', '', '', 'PE07', '', '', '', '', '', 'PE08', '', ''];

  yPecvdPVX1 = ['PE09', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', '', 'PE10', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', '', 'PE11', 'PC1',
    'PC2', 'PC3', 'PC4', 'PC5', '', 'PE12', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', '', 'PE13', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5'];
  yPecvdPVX2 = ['', '', 'PE09', '', '', '', '', '', 'PE10', '', '', '', '', '', 'PE11', '', '', '',
    '', '', 'PE12', '', '', '', '', '', 'PE13', '', ''];

  yEtchITO1 = ['IT01', 'IT02', 'IT03', 'IT04', 'IT05', '', 'GA01', 'GA02', 'GA03'];
  yEtchITO2 = ['', '', 'ITO', '', '', '', '', 'Gate', ''];

  yEtch1SD1 = ['1S01', '1PC1', '1PC2', '1PC3', '2PC1', '2PC2', '2PC3', '', '1S02', '1PC1', '1PC3', '2PC1', '2PC2', '2PC3', '',
    '1S03', '1PC1', '1PC3', '2PC1', '2PC2', '2PC3'];
  yEtch1SD2 = ['1S01', '1S02', '1S03'];

  yEtch2SD1 = ['2S01', '1PC1', '1PC3', '2PC1', '2PC2', '2PC3', '', '2S02', '1PC1', '1PC3', '2PC1', '2PC2', '2PC3', '',
    '2S03', '1PC1', '1PC3', '2PC1', '2PC3'];
  yEtch2SD2 = ['2S01', '2S02', '2S03'];

  yEtchVIA1 = ['VI01', '1PC1', '2PC2', '1PC3', '2PC1', '2PC2', '2PC3', '', 'VI02', '1PC1', '1PC2', '1PC3', '2PC1', '2PC2', '2PC3'];
  yEtchVIA2 = ['VI01', 'VI02'];

  bumen; // 下拉框双向绑定v

  PhotoTable: boolean;
  SputterTable: boolean;
  PecvdFGI: boolean;
  PecvdMulti: boolean;
  PecvdPVX: boolean;
  EtchITO: boolean;
  Etch1SD: boolean;
  Etch2SD: boolean;
  EtchVIA: boolean;

  department: SelectItem[]; // 下拉框中的元素

  msgs: Message[] = [];

  selectPanduan: boolean; // 判断是否是查询后的选择部门，调用get方法参数不同。

  // 保存所有设备状态信息
  eqpStatePhoto: Array<EqpAllState> = [
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
  ];

  eqpStateSputter: Array<EqpAllState> = [
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
  ];

  eqpStatePecvdFGI: Array<EqpAllState> = [
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
  ];

  eqpStatePecvdMulti: Array<EqpAllState> = [
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
  ];

  eqpStatePecvdPVX: Array<EqpAllState> = [
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
  ];

  eqpStateEtchITO: Array<EqpAllState> = [
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
  ];
  eqpStateEtch1SD: Array<EqpAllState> = [
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
  ];
  eqpStateEtch2SD: Array<EqpAllState> = [
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
  ];
  eqpStateEtchVIA: Array<EqpAllState> = [
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
    new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
  ];
  seriesArray: Array<SeriesItem> = []; // 保存echarts中所有series对象

  dateName: Date; // 输入的查询时间
  nowTime: Date;
  nowDate = '当前'; // 当前日期

  constructor(private apiService: ApiService) {
  }


  ngOnInit() {

    this.selectPanduan = true;

    this.department = [
      { label: 'Photo', value: 'Photo' },
      { label: 'Sputter', value: 'Sputter' },
      { label: 'Pecvd-FGI', value: 'PecvdFGI' },
      { label: 'Pecvd-Multi', value: 'PecvdMulti' },
      { label: 'Pecvd-PVX', value: 'PecvdPVX' },
      { label: 'Etch-ITO&Gate', value: 'EtchITO' },
      { label: 'Etch-1SD', value: 'Etch1SD' },
      { label: 'Etch-2SD', value: 'Etch2SD' },
      { label: 'Etch-VIA', value: 'EtchVIA' }
    ];

    this.setOptionParams('8APPH');

    this.PhotoTable = true;
    this.SputterTable = false;
    this.PecvdFGI = false;
    this.PecvdMulti = false;
    this.PecvdPVX = false;
    this.EtchITO = false;
    this.Etch1SD = false;
    this.Etch2SD = false;
    this.EtchVIA = false;

    this.apiService.get('/sc/arrayjiadong', this.option).subscribe(
      (res) => {
        this.setSeriesArray(res, 'Photo');
        this.setEcharts(this.seriesArray, this.yPhoto1, this.yPhoto2);
      }
    );

    this.apiService.get('/sc/arrayjiadongtable', this.option).subscribe(
      (res) => {
        this.setEqpState(res, 'Photo');
      }
    );
  }


  // 往seriesArray里面赋值。
  pushSeriesArray(array, bumen) {
    const index = [0]; // 保存不同状态第一个值的索引
    const durationSum = []; // 保存相邻不同状态的时间和。

    // 不相邻的不同状态求时间和
    let currentState = array[0].eqp_state;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

      if (array[i].eqp_state !== currentState) {
        index.push(i);
        currentState = array[i].eqp_state;
        durationSum.push(sum);
        break;
      } else {
        sum += parseFloat(array[i].duration);
      }
    }
    for (let j = 1; j < index.length; j++) {
      let sum1 = 0;
      for (let i = index[j]; i < array.length; i++) {
        if (array[i].eqp_state !== currentState) {
          index.push(i);
          currentState = array[i].eqp_state;
          durationSum.push(sum1);
          break;
        } else {
          sum1 += parseFloat(array[i].duration);
        }
      }
    }

    let sum3 = 0;
    for (let i = index[index.length - 1]; i < array.length; i++) {
      sum3 += parseFloat(array[i].duration);
    }
    durationSum.push(sum3);

    const state = [];
    for (const i of index) {
      state.push(array[i].eqp_state);
    }
    // 根据几号机判断y轴索引
    let yIndex: number;
    if (bumen === 'Photo') {
      switch (array[0].eqp_id) {
        case '8APPH01':
          yIndex = 0;
          break;
        case '8APPH02':
          yIndex = 1;
          break;
        case '8APPH03':
          yIndex = 2;
          break;
        case '8APPH04':
          yIndex = 3;
          break;
        case '8APPH05':
          yIndex = 4;
          break;
        case '8APPH06':
          yIndex = 5;
          break;
        case '8APPH07':
          yIndex = 6;
          break;
        case '8APPH08':
          yIndex = 8;
          break;
        case '8APPH09':
          yIndex = 9;
          break;
        case '8APPH10':
          yIndex = 10;
          break;
        case '8APPH11':
          yIndex = 12;
          break;
        case '8APPH12':
          yIndex = 13;
          break;
        case '8APPH13':
          yIndex = 14;
          break;
        case '8APPH14':
          yIndex = 16;
          break;
        case '8APPH15':
          yIndex = 17;
          break;
        case '8APPH16':
          yIndex = 18;
          break;
        case '8APPH17':
          yIndex = 19;
          break;
        case '8APPH18':
          yIndex = 20;
          break;
      }
    } else if (bumen === 'Sputter') {
      switch (array[0].eqp_id) {
        case '8ATSP01':
          yIndex = 0;
          break;
        case '8ATSP02':
          yIndex = 1;
          break;
        case '8ATSP03':
          yIndex = 7;
          break;
        case '8ATSP04':
          yIndex = 2;
          break;
        case '8ATSP05':
          yIndex = 3;
          break;
        case '8ATSP06':
          yIndex = 4;
          break;
        case '8ATSP07':
          yIndex = 5;
          break;
        case '8ATSP08':
          yIndex = 8;
          break;
        case '8ATSP09':
          yIndex = 9;
          break;
        case '8ATSP10':
          yIndex = 10;
          break;
        case '8ATSP11':
          yIndex = 12;
          break;
        case '8ATSP12':
          yIndex = 13;
          break;
        case '8ATSP13':
          yIndex = 14;
          break;
        case '8ATSP14':
          yIndex = 15;
          break;
      }
    } else if (bumen === 'PecvdFGI') {
      switch (array[0].eqp_id) {
        case '8ATPE01':
          yIndex = 0;
          break;
        case '8ATPE01-PCVD-PC1':
          yIndex = 1;
          break;
        case '8ATPE01-PCVD-PC2':
          yIndex = 2;
          break;
        case '8ATPE01-PCVD-PC3':
          yIndex = 3;
          break;
        case '8ATPE01-PCVD-PC4':
          yIndex = 4;
          break;
        case '8ATPE01-PCVD-PC5':
          yIndex = 5;
          break;
        case '8ATPE02':
          yIndex = 7;
          break;
        case '8ATPE02-PCVD-PC1':
          yIndex = 8;
          break;
        case '8ATPE02-PCVD-PC2':
          yIndex = 9;
          break;
        case '8ATPE02-PCVD-PC3':
          yIndex = 10;
          break;
        case '8ATPE02-PCVD-PC4':
          yIndex = 11;
          break;
        case '8ATPE02-PCVD-PC5':
          yIndex = 12;
          break;
        case '8ATPE03':
          yIndex = 14;
          break;
        case '8ATPE03-PCVD-PC1':
          yIndex = 15;
          break;
        case '8ATPE03-PCVD-PC2':
          yIndex = 16;
          break;
        case '8ATPE03-PCVD-PC3':
          yIndex = 17;
          break;
        case '8ATPE03-PCVD-PC4':
          yIndex = 18;
          break;
        case '8ATPE03-PCVD-PC5':
          yIndex = 19;
          break;
        case '8ATPE04':
          yIndex = 21;
          break;
        case '8ATPE04-PCVD-PC1':
          yIndex = 22;
          break;
        case '8ATPE04-PCVD-PC2':
          yIndex = 23;
          break;
        case '8ATPE04-PCVD-PC3':
          yIndex = 24;
          break;
        case '8ATPE04-PCVD-PC4':
          yIndex = 25;
          break;
        case '8ATPE04-PCVD-PC5':
          yIndex = 26;
          break;
      }
    } else if (bumen === 'PecvdMulti') {
      switch (array[0].eqp_id) {
        case '8ATPE05':
          yIndex = 0;
          break;
        case '8ATPE05-PCVD-PC1':
          yIndex = 1;
          break;
        case '8ATPE05-PCVD-PC2':
          yIndex = 2;
          break;
        case '8ATPE05-PCVD-PC3':
          yIndex = 3;
          break;
        case '8ATPE05-PCVD-PC4':
          yIndex = 4;
          break;
        case '8ATPE05-PCVD-PC5':
          yIndex = 5;
          break;
        case '8ATPE06':
          yIndex = 7;
          break;
        case '8ATPE06-PCVD-PC1':
          yIndex = 8;
          break;
        case '8ATPE06-PCVD-PC2':
          yIndex = 9;
          break;
        case '8ATPE06-PCVD-PC3':
          yIndex = 10;
          break;
        case '8ATPE06-PCVD-PC4':
          yIndex = 11;
          break;
        case '8ATPE06-PCVD-PC5':
          yIndex = 12;
          break;
        case '8ATPE07':
          yIndex = 14;
          break;
        case '8ATPE07-PCVD-PC1':
          yIndex = 15;
          break;
        case '8ATPE07-PCVD-PC2':
          yIndex = 16;
          break;
        case '8ATPE07-PCVD-PC3':
          yIndex = 17;
          break;
        case '8ATPE07-PCVD-PC4':
          yIndex = 18;
          break;
        case '8ATPE07-PCVD-PC5':
          yIndex = 19;
          break;
        case '8ATPE08':
          yIndex = 21;
          break;
        case '8ATPE08-PCVD-PC1':
          yIndex = 22;
          break;
        case '8ATPE08-PCVD-PC2':
          yIndex = 23;
          break;
        case '8ATPE08-PCVD-PC3':
          yIndex = 24;
          break;
        case '8ATPE08-PCVD-PC4':
          yIndex = 25;
          break;
        case '8ATPE08-PCVD-PC5':
          yIndex = 26;
          break;
      }
    } else if (bumen === 'PecvdPVX') {
      switch (array[0].eqp_id) {
        case '8ATPE09':
          yIndex = 0;
          break;
        case '8ATPE09-PCVD-PC1':
          yIndex = 1;
          break;
        case '8ATPE09-PCVD-PC2':
          yIndex = 2;
          break;
        case '8ATPE09-PCVD-PC3':
          yIndex = 3;
          break;
        case '8ATPE09-PCVD-PC4':
          yIndex = 4;
          break;
        case '8ATPE09-PCVD-PC5':
          yIndex = 5;
          break;
        case '8ATPE10':
          yIndex = 7;
          break;
        case '8ATPE10-PCVD-PC1':
          yIndex = 8;
          break;
        case '8ATPE10-PCVD-PC2':
          yIndex = 9;
          break;
        case '8ATPE10-PCVD-PC3':
          yIndex = 10;
          break;
        case '8ATPE10-PCVD-PC4':
          yIndex = 11;
          break;
        case '8ATPE10-PCVD-PC5':
          yIndex = 12;
          break;
        case '8ATPE11':
          yIndex = 14;
          break;
        case '8ATPE11-PCVD-PC1':
          yIndex = 15;
          break;
        case '8ATPE11-PCVD-PC2':
          yIndex = 16;
          break;
        case '8ATPE11-PCVD-PC3':
          yIndex = 17;
          break;
        case '8ATPE11-PCVD-PC4':
          yIndex = 18;
          break;
        case '8ATPE11-PCVD-PC5':
          yIndex = 19;
          break;
        case '8ATPE12':
          yIndex = 21;
          break;
        case '8ATPE12-PCVD-PC1':
          yIndex = 22;
          break;
        case '8ATPE12-PCVD-PC2':
          yIndex = 23;
          break;
        case '8ATPE12-PCVD-PC3':
          yIndex = 24;
          break;
        case '8ATPE12-PCVD-PC4':
          yIndex = 25;
          break;
        case '8ATPE12-PCVD-PC5':
          yIndex = 26;
          break;
        case '8ATPE13':
          yIndex = 28;
          break;
        case '8ATPE13-PCVD-PC1':
          yIndex = 29;
          break;
        case '8ATPE13-PCVD-PC2':
          yIndex = 30;
          break;
        case '8ATPE13-PCVD-PC3':
          yIndex = 31;
          break;
        case '8ATPE13-PCVD-PC4':
          yIndex = 32;
          break;
        case '8ATPE13-PCVD-PC5':
          yIndex = 33;
          break;
      }
    } else if (bumen === 'EtchITO') {
      switch (array[0].eqp_id) {
        case '8AEIT01':
          yIndex = 0;
          break;
        case '8AEIT02':
          yIndex = 1;
          break;
        case '8AEIT03':
          yIndex = 2;
          break;
        case '8AEIT04':
          yIndex = 3;
          break;
        case '8AEIT05':
          yIndex = 4;
          break;
        case '8AEGA01':
          yIndex = 6;
          break;
        case '8AEGA02':
          yIndex = 7;
          break;
        case '8AEGA03':
          yIndex = 8;
          break;
      }
    } else if (bumen === 'Etch1SD') {
      switch (array[0].eqp_id) {
        case '8AE1S01':
          yIndex = 0;
          break;
        case '8AE1S01-DRE1-PC1':
          yIndex = 1;
          break;
        case '8AE1S01-DRE1-PC2':
          yIndex = 2;
          break;
        case '8AE1S01-DRE1-PC3':
          yIndex = 3;
          break;
        case '8AE1S01-DRE2-PC1':
          yIndex = 4;
          break;
        case '8AE1S01-DRE2-PC2':
          yIndex = 5;
          break;
        case '8AE1S01-DRE2-PC3':
          yIndex = 6;
          break;
        case '8AE1S02':
          yIndex = 8;
          break;
        case '8AE1S02-DRE1-PC1':
          yIndex = 9;
          break;
        case '8AE1S02-DRE1-PC3':
          yIndex = 10;
          break;
        case '8AE1S02-DRE2-PC1':
          yIndex = 11;
          break;
        case '8AE1S02-DRE2-PC2':
          yIndex = 12;
          break;
        case '8AE1S02-DRE2-PC3':
          yIndex = 13;
          break;
        case '8AE1S03':
          yIndex = 15;
          break;
        case '8AE1S03-DRE1-PC1':
          yIndex = 16;
          break;
        case '8AE1S03-DRE1-PC3':
          yIndex = 17;
          break;
        case '8AE1S03-DRE2-PC1':
          yIndex = 18;
          break;
        case '8AE1S03-DRE2-PC2':
          yIndex = 19;
          break;
        case '8AE1S03-DRE2-PC3':
          yIndex = 20;
          break;
      }
    } else if (bumen === 'Etch2SD') {
      switch (array[0].eqp_id) {
        case '8AE2S01':
          yIndex = 0;
          break;
        case '8AE2S01-DRE1-PC1':
          yIndex = 1;
          break;
        case '8AE2S01-DRE1-PC3':
          yIndex = 2;
          break;
        case '8AE2S01-DRE2-PC1':
          yIndex = 3;
          break;
        case '8AE2S01-DRE2-PC2':
          yIndex = 4;
          break;
        case '8AE2S01-DRE2-PC3':
          yIndex = 5;
          break;
        case '8AE2S02':
          yIndex = 7;
          break;
        case '8AE2S02-DRE1-PC1':
          yIndex = 8;
          break;
        case '8AE2S02-DRE1-PC3':
          yIndex = 9;
          break;
        case '8AE2S02-DRE2-PC1':
          yIndex = 10;
          break;
        case '8AE2S02-DRE2-PC2':
          yIndex = 11;
          break;
        case '8AE2S02-DRE2-PC3':
          yIndex = 12;
          break;
        case '8AE2S03':
          yIndex = 14;
          break;
        case '8AE2S03-DRE1-PC1':
          yIndex = 15;
          break;
        case '8AE2S03-DRE1-PC3':
          yIndex = 16;
          break;
        case '8AE2S03-DRE2-PC1':
          yIndex = 17;
          break;
        case '8AE2S03-DRE2-PC3':
          yIndex = 18;
          break;
      }
    } else if (bumen === 'EtchVIA') {
      switch (array[0].eqp_id) {
        case '8AEVI01':
          yIndex = 0;
          break;
        case '8AEVI01-DRE1-PC1':
          yIndex = 1;
          break;
        case '8AEVI01-DRE1-PC2':
          yIndex = 2;
          break;
        case '8AEVI01-DRE1-PC3':
          yIndex = 3;
          break;
        case '8AEVI01-DRE2-PC1':
          yIndex = 4;
          break;
        case '8AEVI01-DRE2-PC2':
          yIndex = 5;
          break;
        case '8AEVI01-DRE2-PC3':
          yIndex = 6;
          break;
        case '8AEVI02':
          yIndex = 8;
          break;
        case '8AEVI02-DRE1-PC1':
          yIndex = 9;
          break;
        case '8AEVI02-DRE1-PC2':
          yIndex = 10;
          break;
        case '8AEVI02-DRE1-PC3':
          yIndex = 11;
          break;
        case '8AEVI02-DRE2-PC1':
          yIndex = 12;
          break;
        case '8AEVI02-DRE2-PC2':
          yIndex = 13;
          break;
        case '8AEVI02-DRE2-PC3':
          yIndex = 14;
          break;
      }
    }

    for (let i = 0; i < state.length; i++) {
      const statename = state[i];  // name
      const value = durationSum[i]; // value
      let color = '';
      switch (statename) {
        case 'RUN':
          color = '#1FE9BA';
          break;
        case 'IDLE':
          color = '#FFFF00';
          break;
        case 'DOWN':
          color = '#FF0000';
          break;
        case 'ETIME':
          color = '#CCC0DA';
          break;
        case 'PM':
          color = 'rgb(36, 180, 247)';
          break;
        case 'MAINT':
          color = '#FFC000';
          break;
        case 'ETC':
          color = '#FDE9D9';
          break;
      }
      this.seriesArray.push(new SeriesItem(statename, 'bar', '55%', 'sum', new ItemStyle(color), [[value, yIndex]]));
    }

  }

  // 根据接收的数据生成对应series数组
  setSeriesArray(data, buMen) {
    if (buMen === 'Photo') {
      const apph01 = [];
      const apph02 = [];
      const apph03 = [];
      const apph04 = [];
      const apph05 = [];
      const apph06 = [];
      const apph07 = [];
      const apph08 = [];
      const apph09 = [];
      const apph10 = [];
      const apph11 = [];
      const apph12 = [];
      const apph13 = [];
      const apph14 = [];
      const apph15 = [];
      const apph16 = [];
      const apph17 = [];
      const apph18 = [];

      this.seriesArray = [];

      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8APPH01':
            apph01.push(obj);
            break;
          case '8APPH02':
            apph02.push(obj);
            break;
          case '8APPH03':
            apph03.push(obj);
            break;
          case '8APPH04':
            apph04.push(obj);
            break;
          case '8APPH05':
            apph05.push(obj);
            break;
          case '8APPH06':
            apph06.push(obj);
            break;
          case '8APPH07':
            apph07.push(obj);
            break;
          case '8APPH08':
            apph08.push(obj);
            break;
          case '8APPH09':
            apph09.push(obj);
            break;
          case '8APPH10':
            apph10.push(obj);
            break;
          case '8APPH11':
            apph11.push(obj);
            break;
          case '8APPH12':
            apph12.push(obj);
            break;
          case '8APPH13':
            apph13.push(obj);
            break;
          case '8APPH14':
            apph14.push(obj);
            break;
          case '8APPH15':
            apph15.push(obj);
            break;
          case '8APPH16':
            apph16.push(obj);
            break;
          case '8APPH17':
            apph17.push(obj);
            break;
          case '8APPH18':
            apph18.push(obj);
            break;
        }
      }

      this.pushSeriesArray(apph01, 'Photo');
      this.pushSeriesArray(apph02, 'Photo');
      this.pushSeriesArray(apph03, 'Photo');
      this.pushSeriesArray(apph04, 'Photo');
      this.pushSeriesArray(apph05, 'Photo');
      this.pushSeriesArray(apph06, 'Photo');
      this.pushSeriesArray(apph07, 'Photo');
      this.pushSeriesArray(apph08, 'Photo');
      this.pushSeriesArray(apph09, 'Photo');
      this.pushSeriesArray(apph10, 'Photo');
      this.pushSeriesArray(apph11, 'Photo');
      this.pushSeriesArray(apph12, 'Photo');
      this.pushSeriesArray(apph13, 'Photo');
      this.pushSeriesArray(apph14, 'Photo');
      this.pushSeriesArray(apph15, 'Photo');
      this.pushSeriesArray(apph16, 'Photo');
      this.pushSeriesArray(apph17, 'Photo');
      this.pushSeriesArray(apph18, 'Photo');

    } else if (buMen === 'Sputter') {
      const atsp01 = [];
      const atsp02 = [];
      const atsp03 = [];
      const atsp04 = [];
      const atsp05 = [];
      const atsp06 = [];
      const atsp07 = [];
      const atsp08 = [];
      const atsp09 = [];
      const atsp10 = [];
      const atsp11 = [];
      const atsp12 = [];
      const atsp13 = [];
      const atsp14 = [];

      this.seriesArray = [];

      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8ATSP01':
            atsp01.push(obj);
            break;
          case '8ATSP02':
            atsp02.push(obj);
            break;
          case '8ATSP03':
            atsp03.push(obj);
            break;
          case '8ATSP04':
            atsp04.push(obj);
            break;
          case '8ATSP05':
            atsp05.push(obj);
            break;
          case '8ATSP06':
            atsp06.push(obj);
            break;
          case '8ATSP07':
            atsp07.push(obj);
            break;
          case '8ATSP08':
            atsp08.push(obj);
            break;
          case '8ATSP09':
            atsp09.push(obj);
            break;
          case '8ATSP10':
            atsp10.push(obj);
            break;
          case '8ATSP11':
            atsp11.push(obj);
            break;
          case '8ATSP12':
            atsp12.push(obj);
            break;
          case '8ATSP13':
            atsp13.push(obj);
            break;
          case '8ATSP14':
            atsp14.push(obj);
            break;
        }
      }
      this.pushSeriesArray(atsp01, 'Sputter');
      this.pushSeriesArray(atsp02, 'Sputter');
      this.pushSeriesArray(atsp03, 'Sputter');
      this.pushSeriesArray(atsp04, 'Sputter');
      this.pushSeriesArray(atsp05, 'Sputter');
      this.pushSeriesArray(atsp06, 'Sputter');
      this.pushSeriesArray(atsp07, 'Sputter');
      this.pushSeriesArray(atsp08, 'Sputter');
      this.pushSeriesArray(atsp09, 'Sputter');
      this.pushSeriesArray(atsp10, 'Sputter');
      this.pushSeriesArray(atsp11, 'Sputter');
      this.pushSeriesArray(atsp12, 'Sputter');
      this.pushSeriesArray(atsp13, 'Sputter');
      this.pushSeriesArray(atsp14, 'Sputter');
    } else if (buMen === 'PecvdFGI') {
      const atpe01 = [];
      const atpe01pc1 = [];
      const atpe01pc2 = [];
      const atpe01pc3 = [];
      const atpe01pc4 = [];
      const atpe01pc5 = [];
      const atpe02 = [];
      const atpe02pc1 = [];
      const atpe02pc2 = [];
      const atpe02pc3 = [];
      const atpe02pc4 = [];
      const atpe02pc5 = [];
      const atpe03 = [];
      const atpe03pc1 = [];
      const atpe03pc2 = [];
      const atpe03pc3 = [];
      const atpe03pc4 = [];
      const atpe03pc5 = [];
      const atpe04 = [];
      const atpe04pc1 = [];
      const atpe04pc2 = [];
      const atpe04pc3 = [];
      const atpe04pc4 = [];
      const atpe04pc5 = [];

      this.seriesArray = [];

      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8ATPE01':
            atpe01.push(obj);
            break;
          case '8ATPE02':
            atpe02.push(obj);
            break;
          case '8ATPE03':
            atpe03.push(obj);
            break;
          case '8ATPE04':
            atpe04.push(obj);
            break;
          case '8ATPE01-PCVD-PC1':
            atpe01pc1.push(obj);
            break;
          case '8ATPE01-PCVD-PC2':
            atpe01pc2.push(obj);
            break;
          case '8ATPE01-PCVD-PC3':
            atpe01pc3.push(obj);
            break;
          case '8ATPE01-PCVD-PC4':
            atpe01pc4.push(obj);
            break;
          case '8ATPE01-PCVD-PC5':
            atpe01pc5.push(obj);
            break;
          case '8ATPE02-PCVD-PC1':
            atpe02pc1.push(obj);
            break;
          case '8ATPE02-PCVD-PC2':
            atpe02pc2.push(obj);
            break;
          case '8ATPE02-PCVD-PC3':
            atpe02pc3.push(obj);
            break;
          case '8ATPE02-PCVD-PC4':
            atpe02pc4.push(obj);
            break;
          case '8ATPE02-PCVD-PC5':
            atpe02pc5.push(obj);
            break;
          case '8ATPE03-PCVD-PC1':
            atpe03pc1.push(obj);
            break;
          case '8ATPE03-PCVD-PC2':
            atpe03pc2.push(obj);
            break;
          case '8ATPE03-PCVD-PC3':
            atpe03pc3.push(obj);
            break;
          case '8ATPE03-PCVD-PC4':
            atpe03pc4.push(obj);
            break;
          case '8ATPE03-PCVD-PC5':
            atpe03pc5.push(obj);
            break;
          case '8ATPE04-PCVD-PC1':
            atpe04pc1.push(obj);
            break;
          case '8ATPE04-PCVD-PC2':
            atpe04pc2.push(obj);
            break;
          case '8ATPE04-PCVD-PC3':
            atpe04pc3.push(obj);
            break;
          case '8ATPE04-PCVD-PC4':
            atpe04pc4.push(obj);
            break;
          case '8ATPE04-PCVD-PC5':
            atpe04pc5.push(obj);
            break;
        }
      }
      this.pushSeriesArray(atpe01, 'PecvdFGI');
      this.pushSeriesArray(atpe01pc1, 'PecvdFGI');
      this.pushSeriesArray(atpe01pc2, 'PecvdFGI');
      this.pushSeriesArray(atpe01pc3, 'PecvdFGI');
      this.pushSeriesArray(atpe01pc4, 'PecvdFGI');
      this.pushSeriesArray(atpe01pc5, 'PecvdFGI');
      this.pushSeriesArray(atpe02, 'PecvdFGI');
      this.pushSeriesArray(atpe02pc1, 'PecvdFGI');
      this.pushSeriesArray(atpe02pc2, 'PecvdFGI');
      this.pushSeriesArray(atpe02pc3, 'PecvdFGI');
      this.pushSeriesArray(atpe02pc4, 'PecvdFGI');
      this.pushSeriesArray(atpe02pc5, 'PecvdFGI');
      this.pushSeriesArray(atpe03, 'PecvdFGI');
      this.pushSeriesArray(atpe03pc1, 'PecvdFGI');
      this.pushSeriesArray(atpe03pc2, 'PecvdFGI');
      this.pushSeriesArray(atpe03pc3, 'PecvdFGI');
      this.pushSeriesArray(atpe03pc4, 'PecvdFGI');
      this.pushSeriesArray(atpe03pc5, 'PecvdFGI');
      this.pushSeriesArray(atpe04, 'PecvdFGI');
      this.pushSeriesArray(atpe04pc1, 'PecvdFGI');
      this.pushSeriesArray(atpe04pc2, 'PecvdFGI');
      this.pushSeriesArray(atpe04pc3, 'PecvdFGI');
      this.pushSeriesArray(atpe04pc4, 'PecvdFGI');
      this.pushSeriesArray(atpe04pc5, 'PecvdFGI');
    } else if (buMen === 'PecvdMulti') {
      const atpe05 = [];
      const atpe05pc1 = [];
      const atpe05pc2 = [];
      const atpe05pc3 = [];
      const atpe05pc4 = [];
      const atpe05pc5 = [];
      const atpe06 = [];
      const atpe06pc1 = [];
      const atpe06pc2 = [];
      const atpe06pc3 = [];
      const atpe06pc4 = [];
      const atpe06pc5 = [];
      const atpe07 = [];
      const atpe07pc1 = [];
      const atpe07pc2 = [];
      const atpe07pc3 = [];
      const atpe07pc4 = [];
      const atpe07pc5 = [];
      const atpe08 = [];
      const atpe08pc1 = [];
      const atpe08pc2 = [];
      const atpe08pc3 = [];
      const atpe08pc4 = [];
      const atpe08pc5 = [];

      this.seriesArray = [];

      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8ATPE05':
            atpe05.push(obj);
            break;
          case '8ATPE06':
            atpe06.push(obj);
            break;
          case '8ATPE07':
            atpe07.push(obj);
            break;
          case '8ATPE08':
            atpe08.push(obj);
            break;
          case '8ATPE05-PCVD-PC1':
            atpe05pc1.push(obj);
            break;
          case '8ATPE05-PCVD-PC2':
            atpe05pc2.push(obj);
            break;
          case '8ATPE05-PCVD-PC3':
            atpe05pc3.push(obj);
            break;
          case '8ATPE05-PCVD-PC4':
            atpe05pc4.push(obj);
            break;
          case '8ATPE05-PCVD-PC5':
            atpe05pc5.push(obj);
            break;
          case '8ATPE06-PCVD-PC1':
            atpe06pc1.push(obj);
            break;
          case '8ATPE06-PCVD-PC2':
            atpe06pc2.push(obj);
            break;
          case '8ATPE06-PCVD-PC3':
            atpe06pc3.push(obj);
            break;
          case '8ATPE06-PCVD-PC4':
            atpe06pc4.push(obj);
            break;
          case '8ATPE06-PCVD-PC5':
            atpe06pc5.push(obj);
            break;
          case '8ATPE07-PCVD-PC1':
            atpe07pc1.push(obj);
            break;
          case '8ATPE07-PCVD-PC2':
            atpe07pc2.push(obj);
            break;
          case '8ATPE07-PCVD-PC3':
            atpe07pc3.push(obj);
            break;
          case '8ATPE07-PCVD-PC4':
            atpe07pc4.push(obj);
            break;
          case '8ATPE07-PCVD-PC5':
            atpe07pc5.push(obj);
            break;
          case '8ATPE08-PCVD-PC1':
            atpe08pc1.push(obj);
            break;
          case '8ATPE08-PCVD-PC2':
            atpe08pc2.push(obj);
            break;
          case '8ATPE08-PCVD-PC3':
            atpe08pc3.push(obj);
            break;
          case '8ATPE08-PCVD-PC4':
            atpe08pc4.push(obj);
            break;
          case '8ATPE08-PCVD-PC5':
            atpe08pc5.push(obj);
            break;
        }
      }
      this.pushSeriesArray(atpe05, 'PecvdMulti');
      this.pushSeriesArray(atpe06, 'PecvdMulti');
      this.pushSeriesArray(atpe07, 'PecvdMulti');
      this.pushSeriesArray(atpe08, 'PecvdMulti');
      this.pushSeriesArray(atpe05pc1, 'PecvdMulti');
      this.pushSeriesArray(atpe05pc2, 'PecvdMulti');
      this.pushSeriesArray(atpe05pc3, 'PecvdMulti');
      this.pushSeriesArray(atpe05pc4, 'PecvdMulti');
      this.pushSeriesArray(atpe05pc5, 'PecvdMulti');
      this.pushSeriesArray(atpe06pc1, 'PecvdMulti');
      this.pushSeriesArray(atpe06pc2, 'PecvdMulti');
      this.pushSeriesArray(atpe06pc3, 'PecvdMulti');
      this.pushSeriesArray(atpe06pc4, 'PecvdMulti');
      this.pushSeriesArray(atpe06pc5, 'PecvdMulti');
      this.pushSeriesArray(atpe07pc1, 'PecvdMulti');
      this.pushSeriesArray(atpe07pc2, 'PecvdMulti');
      this.pushSeriesArray(atpe07pc3, 'PecvdMulti');
      this.pushSeriesArray(atpe07pc4, 'PecvdMulti');
      this.pushSeriesArray(atpe07pc5, 'PecvdMulti');
      this.pushSeriesArray(atpe08pc1, 'PecvdMulti');
      this.pushSeriesArray(atpe08pc2, 'PecvdMulti');
      this.pushSeriesArray(atpe08pc3, 'PecvdMulti');
      this.pushSeriesArray(atpe08pc4, 'PecvdMulti');
      this.pushSeriesArray(atpe08pc5, 'PecvdMulti');
    } else if (buMen === 'PecvdPVX') {
      const atpe09 = [];
      const atpe09pc1 = [];
      const atpe09pc2 = [];
      const atpe09pc3 = [];
      const atpe09pc4 = [];
      const atpe09pc5 = [];
      const atpe10 = [];
      const atpe10pc1 = [];
      const atpe10pc2 = [];
      const atpe10pc3 = [];
      const atpe10pc4 = [];
      const atpe10pc5 = [];
      const atpe11 = [];
      const atpe11pc1 = [];
      const atpe11pc2 = [];
      const atpe11pc3 = [];
      const atpe11pc4 = [];
      const atpe11pc5 = [];
      const atpe12 = [];
      const atpe12pc1 = [];
      const atpe12pc2 = [];
      const atpe12pc3 = [];
      const atpe12pc4 = [];
      const atpe12pc5 = [];
      const atpe13 = [];
      const atpe13pc1 = [];
      const atpe13pc2 = [];
      const atpe13pc3 = [];
      const atpe13pc4 = [];
      const atpe13pc5 = [];

      this.seriesArray = [];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8ATPE09':
            atpe09.push(obj);
            break;
          case '8ATPE10':
            atpe10.push(obj);
            break;
          case '8ATPE11':
            atpe11.push(obj);
            break;
          case '8ATPE12':
            atpe12.push(obj);
            break;
          case '8ATPE13':
            atpe13.push(obj);
            break;
          case '8ATPE09-PCVD-PC1':
            atpe09pc1.push(obj);
            break;
          case '8ATPE09-PCVD-PC2':
            atpe09pc2.push(obj);
            break;
          case '8ATPE09-PCVD-PC3':
            atpe09pc3.push(obj);
            break;
          case '8ATPE09-PCVD-PC4':
            atpe09pc4.push(obj);
            break;
          case '8ATPE09-PCVD-PC5':
            atpe09pc5.push(obj);
            break;
          case '8ATPE10-PCVD-PC1':
            atpe10pc1.push(obj);
            break;
          case '8ATPE10-PCVD-PC2':
            atpe10pc2.push(obj);
            break;
          case '8ATPE10-PCVD-PC3':
            atpe10pc3.push(obj);
            break;
          case '8ATPE10-PCVD-PC4':
            atpe10pc4.push(obj);
            break;
          case '8ATPE10-PCVD-PC5':
            atpe10pc5.push(obj);
            break;
          case '8ATPE11-PCVD-PC1':
            atpe11pc1.push(obj);
            break;
          case '8ATPE11-PCVD-PC2':
            atpe11pc2.push(obj);
            break;
          case '8ATPE11-PCVD-PC3':
            atpe11pc3.push(obj);
            break;
          case '8ATPE11-PCVD-PC4':
            atpe11pc4.push(obj);
            break;
          case '8ATPE11-PCVD-PC5':
            atpe11pc5.push(obj);
            break;
          case '8ATPE12-PCVD-PC1':
            atpe12pc1.push(obj);
            break;
          case '8ATPE12-PCVD-PC2':
            atpe12pc2.push(obj);
            break;
          case '8ATPE12-PCVD-PC3':
            atpe12pc3.push(obj);
            break;
          case '8ATPE12-PCVD-PC4':
            atpe12pc4.push(obj);
            break;
          case '8ATPE12-PCVD-PC5':
            atpe12pc5.push(obj);
            break;
          case '8ATPE13-PCVD-PC1':
            atpe13pc1.push(obj);
            break;
          case '8ATPE13-PCVD-PC2':
            atpe13pc2.push(obj);
            break;
          case '8ATPE13-PCVD-PC3':
            atpe13pc3.push(obj);
            break;
          case '8ATPE13-PCVD-PC4':
            atpe13pc4.push(obj);
            break;
          case '8ATPE13-PCVD-PC5':
            atpe13pc5.push(obj);
            break;
        }
      }
      this.pushSeriesArray(atpe09, 'PecvdPVX');
      this.pushSeriesArray(atpe10, 'PecvdPVX');
      this.pushSeriesArray(atpe11, 'PecvdPVX');
      this.pushSeriesArray(atpe12, 'PecvdPVX');
      this.pushSeriesArray(atpe13, 'PecvdPVX');
      this.pushSeriesArray(atpe09pc1, 'PecvdPVX');
      this.pushSeriesArray(atpe09pc2, 'PecvdPVX');
      this.pushSeriesArray(atpe09pc3, 'PecvdPVX');
      this.pushSeriesArray(atpe09pc4, 'PecvdPVX');
      this.pushSeriesArray(atpe09pc5, 'PecvdPVX');
      this.pushSeriesArray(atpe10pc1, 'PecvdPVX');
      this.pushSeriesArray(atpe10pc2, 'PecvdPVX');
      this.pushSeriesArray(atpe10pc3, 'PecvdPVX');
      this.pushSeriesArray(atpe10pc4, 'PecvdPVX');
      this.pushSeriesArray(atpe10pc5, 'PecvdPVX');
      this.pushSeriesArray(atpe11pc1, 'PecvdPVX');
      this.pushSeriesArray(atpe11pc2, 'PecvdPVX');
      this.pushSeriesArray(atpe11pc3, 'PecvdPVX');
      this.pushSeriesArray(atpe11pc4, 'PecvdPVX');
      this.pushSeriesArray(atpe11pc5, 'PecvdPVX');
      this.pushSeriesArray(atpe12pc1, 'PecvdPVX');
      this.pushSeriesArray(atpe12pc2, 'PecvdPVX');
      this.pushSeriesArray(atpe12pc3, 'PecvdPVX');
      this.pushSeriesArray(atpe12pc4, 'PecvdPVX');
      this.pushSeriesArray(atpe12pc5, 'PecvdPVX');
      this.pushSeriesArray(atpe13pc1, 'PecvdPVX');
      this.pushSeriesArray(atpe13pc2, 'PecvdPVX');
      this.pushSeriesArray(atpe13pc3, 'PecvdPVX');
      this.pushSeriesArray(atpe13pc4, 'PecvdPVX');
      this.pushSeriesArray(atpe13pc5, 'PecvdPVX');
    } else if (buMen === 'EtchITO') {
      const aeit01 = [];
      const aeit02 = [];
      const aeit03 = [];
      const aeit04 = [];
      const aeit05 = [];
      const aega01 = [];
      const aega02 = [];
      const aega03 = [];
      this.seriesArray = [];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8AEIT01':
            aeit01.push(obj);
            break;
          case '8AEIT02':
            aeit02.push(obj);
            break;
          case '8AEIT03':
            aeit03.push(obj);
            break;
          case '8AEIT04':
            aeit04.push(obj);
            break;
          case '8AEIT05':
            aeit05.push(obj);
            break;
          case '8AEGA01':
            aega01.push(obj);
            break;
          case '8AEGA02':
            aega02.push(obj);
            break;
          case '8AEGA03':
            aega03.push(obj);
            break;
        }
      }
      this.pushSeriesArray(aeit01, 'EtchITO');
      this.pushSeriesArray(aeit02, 'EtchITO');
      this.pushSeriesArray(aeit03, 'EtchITO');
      this.pushSeriesArray(aeit04, 'EtchITO');
      this.pushSeriesArray(aeit05, 'EtchITO');
      this.pushSeriesArray(aega01, 'EtchITO');
      this.pushSeriesArray(aega02, 'EtchITO');
      this.pushSeriesArray(aega03, 'EtchITO');
    } else if (buMen === 'Etch1SD') {
      const ae1s01 = [];
      const ae1s01_1pc1 = [];
      const ae1s01_1pc2 = [];
      const ae1s01_1pc3 = [];
      const ae1s01_2pc1 = [];
      const ae1s01_2pc2 = [];
      const ae1s01_2pc3 = [];
      const ae1s02 = [];
      const ae1s02_1pc1 = [];
      const ae1s02_1pc3 = [];
      const ae1s02_2pc1 = [];
      const ae1s02_2pc2 = [];
      const ae1s02_2pc3 = [];
      const ae1s03 = [];
      const ae1s03_1pc1 = [];
      const ae1s03_1pc3 = [];
      const ae1s03_2pc1 = [];
      const ae1s03_2pc2 = [];
      const ae1s03_2pc3 = [];

      this.seriesArray = [];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8AE1S01':
            ae1s01.push(obj);
            break;
          case '8AE1S01-DRE1-PC1':
            ae1s01_1pc1.push(obj);
            break;
          case '8AE1S01-DRE1-PC2':
            ae1s01_1pc2.push(obj);
            break;
          case '8AE1S01-DRE1-PC3':
            ae1s01_1pc3.push(obj);
            break;
          case '8AE1S01-DRE2-PC1':
            ae1s01_2pc1.push(obj);
            break;
          case '8AE1S01-DRE2-PC2':
            ae1s01_2pc2.push(obj);
            break;
          case '8AE1S01-DRE2-PC3':
            ae1s01_2pc3.push(obj);
            break;
          case '8AE1S02':
            ae1s02.push(obj);
            break;
          case '8AE1S02-DRE1-PC1':
            ae1s02_1pc1.push(obj);
            break;
          case '8AE1S02-DRE1-PC3':
            ae1s02_1pc3.push(obj);
            break;
          case '8AE1S02-DRE2-PC1':
            ae1s02_2pc1.push(obj);
            break;
          case '8AE1S02-DRE2-PC2':
            ae1s02_2pc2.push(obj);
            break;
          case '8AE1S02-DRE2-PC3':
            ae1s02_2pc3.push(obj);
            break;
          case '8AE1S03':
            ae1s03.push(obj);
            break;
          case '8AE1S03-DRE1-PC1':
            ae1s03_1pc1.push(obj);
            break;
          case '8AE1S03-DRE1-PC3':
            ae1s03_1pc3.push(obj);
            break;
          case '8AE1S03-DRE2-PC1':
            ae1s03_2pc1.push(obj);
            break;
          case '8AE1S03-DRE2-PC2':
            ae1s03_2pc2.push(obj);
            break;
          case '8AE1S03-DRE2-PC3':
            ae1s03_2pc3.push(obj);
            break;
        }
      }
      this.pushSeriesArray(ae1s01, buMen);
      this.pushSeriesArray(ae1s01_1pc1, buMen);
      this.pushSeriesArray(ae1s01_1pc2, buMen);
      this.pushSeriesArray(ae1s01_1pc3, buMen);
      this.pushSeriesArray(ae1s01_2pc1, buMen);
      this.pushSeriesArray(ae1s01_2pc2, buMen);
      this.pushSeriesArray(ae1s01_2pc3, buMen);
      this.pushSeriesArray(ae1s02, buMen);
      this.pushSeriesArray(ae1s02_1pc1, buMen);
      this.pushSeriesArray(ae1s02_1pc3, buMen);
      this.pushSeriesArray(ae1s02_2pc1, buMen);
      this.pushSeriesArray(ae1s02_2pc2, buMen);
      this.pushSeriesArray(ae1s02_2pc3, buMen);
      this.pushSeriesArray(ae1s03, buMen);
      this.pushSeriesArray(ae1s03_1pc1, buMen);
      this.pushSeriesArray(ae1s03_1pc3, buMen);
      this.pushSeriesArray(ae1s03_2pc1, buMen);
      this.pushSeriesArray(ae1s03_2pc2, buMen);
      this.pushSeriesArray(ae1s03_2pc3, buMen);
    } else if (buMen === 'Etch2SD') {
      const ae2s01 = [];
      const ae2s01_1pc1 = [];
      const ae2s01_1pc3 = [];
      const ae2s01_2pc1 = [];
      const ae2s01_2pc2 = [];
      const ae2s01_2pc3 = [];
      const ae2s02 = [];
      const ae2s02_1pc1 = [];
      const ae2s02_1pc3 = [];
      const ae2s02_2pc1 = [];
      const ae2s02_2pc2 = [];
      const ae2s02_2pc3 = [];
      const ae2s03 = [];
      const ae2s03_1pc1 = [];
      const ae2s03_1pc3 = [];
      const ae2s03_2pc1 = [];
      const ae2s03_2pc3 = [];

      this.seriesArray = [];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8AE2S01':
            ae2s01.push(obj);
            break;
          case '8AE2S01-DRE1-PC1':
            ae2s01_1pc1.push(obj);
            break;
          case '8AE2S01-DRE1-PC3':
            ae2s01_1pc3.push(obj);
            break;
          case '8AE2S01-DRE2-PC1':
            ae2s01_2pc1.push(obj);
            break;
          case '8AE2S01-DRE2-PC2':
            ae2s01_2pc2.push(obj);
            break;
          case '8AE2S01-DRE2-PC3':
            ae2s01_2pc3.push(obj);
            break;
          case '8AE2S02':
            ae2s02.push(obj);
            break;
          case '8AE2S02-DRE1-PC1':
            ae2s02_1pc1.push(obj);
            break;
          case '8AE2S02-DRE1-PC3':
            ae2s02_1pc3.push(obj);
            break;
          case '8AE2S02-DRE2-PC1':
            ae2s02_2pc1.push(obj);
            break;
          case '8AE2S02-DRE2-PC2':
            ae2s02_2pc2.push(obj);
            break;
          case '8AE2S02-DRE2-PC3':
            ae2s02_2pc3.push(obj);
            break;
          case '8AE2S03':
            ae2s03.push(obj);
            break;
          case '8AE2S03-DRE1-PC1':
            ae2s03_1pc1.push(obj);
            break;
          case '8AE2S03-DRE1-PC3':
            ae2s03_1pc3.push(obj);
            break;
          case '8AE2S03-DRE2-PC1':
            ae2s03_2pc1.push(obj);
            break;
          case '8AE2S03-DRE2-PC3':
            ae2s03_2pc3.push(obj);
            break;
        }
      }
      this.pushSeriesArray(ae2s01, buMen);
      this.pushSeriesArray(ae2s01_1pc1, buMen);
      this.pushSeriesArray(ae2s01_1pc3, buMen);
      this.pushSeriesArray(ae2s01_2pc1, buMen);
      this.pushSeriesArray(ae2s01_2pc2, buMen);
      this.pushSeriesArray(ae2s01_2pc3, buMen);
      this.pushSeriesArray(ae2s02, buMen);
      this.pushSeriesArray(ae2s02_1pc1, buMen);
      this.pushSeriesArray(ae2s02_1pc3, buMen);
      this.pushSeriesArray(ae2s02_2pc1, buMen);
      this.pushSeriesArray(ae2s02_2pc2, buMen);
      this.pushSeriesArray(ae2s02_2pc3, buMen);
      this.pushSeriesArray(ae2s03, buMen);
      this.pushSeriesArray(ae2s03_1pc1, buMen);
      this.pushSeriesArray(ae2s03_1pc3, buMen);
      this.pushSeriesArray(ae2s03_2pc1, buMen);
      this.pushSeriesArray(ae2s03_2pc3, buMen);
    } else if (buMen === 'EtchVIA') {
      const aevi01 = [];
      const aevi01_1pc1 = [];
      const aevi01_1pc2 = [];
      const aevi01_1pc3 = [];
      const aevi01_2pc1 = [];
      const aevi01_2pc2 = [];
      const aevi01_2pc3 = [];
      const aevi02 = [];
      const aevi02_1pc1 = [];
      const aevi02_1pc2 = [];
      const aevi02_1pc3 = [];
      const aevi02_2pc1 = [];
      const aevi02_2pc2 = [];
      const aevi02_2pc3 = [];

      this.seriesArray = [];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8AEVI01':
            aevi01.push(obj);
            break;
          case '8AEVI01-DRE1-PC1':
            aevi01_1pc1.push(obj);
            break;
          case '8AEVI01-DRE1-PC2':
            aevi01_1pc2.push(obj);
            break;
          case '8AEVI01-DRE1-PC3':
            aevi01_1pc3.push(obj);
            break;
          case '8AEVI01-DRE2-PC1':
            aevi01_2pc1.push(obj);
            break;
          case '8AEVI01-DRE2-PC2':
            aevi01_2pc2.push(obj);
            break;
          case '8AEVI01-DRE2-PC3':
            aevi01_2pc3.push(obj);
            break;
          case '8AEVI02':
            aevi02.push(obj);
            break;
          case '8AEVI02-DRE1-PC1':
            aevi02_1pc1.push(obj);
            break;
          case '8AEVI02-DRE1-PC2':
            aevi02_1pc2.push(obj);
            break;
          case '8AEVI02-DRE1-PC3':
            aevi02_1pc3.push(obj);
            break;
          case '8AEVI02-DRE2-PC1':
            aevi02_2pc1.push(obj);
            break;
          case '8AEVI02-DRE2-PC2':
            aevi02_2pc2.push(obj);
            break;
          case '8AEVI02-DRE2-PC3':
            aevi02_2pc3.push(obj);
            break;
        }
      }
      this.pushSeriesArray(aevi01, buMen);
      this.pushSeriesArray(aevi01_1pc1, buMen);
      this.pushSeriesArray(aevi01_1pc2, buMen);
      this.pushSeriesArray(aevi01_1pc3, buMen);
      this.pushSeriesArray(aevi01_2pc1, buMen);
      this.pushSeriesArray(aevi01_2pc2, buMen);
      this.pushSeriesArray(aevi01_2pc3, buMen);
      this.pushSeriesArray(aevi02, buMen);
      this.pushSeriesArray(aevi02_1pc1, buMen);
      this.pushSeriesArray(aevi02_1pc2, buMen);
      this.pushSeriesArray(aevi02_1pc3, buMen);
      this.pushSeriesArray(aevi02_2pc1, buMen);
      this.pushSeriesArray(aevi02_2pc2, buMen);
      this.pushSeriesArray(aevi02_2pc3, buMen);
    }

  }

  // 生成echarts图方法
  setEcharts(data, yIndex1, yIndex2) {
    this.jiadongOption = {
      title: {
        text: this.nowDate + '设备状态',
        left: 'center',
        textStyle: {
          color: '#F2F6FA',
          fontSize: 15
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return params.name + '<hr>' + params.marker + params.seriesName + ': ' + params.value[0].toFixed(2) + 'min';
        }
      },
      legend: {
        selectedMode: false,
        textStyle: {
          color: '#F2F6FA'
        },
        top: '3.5%',
        left: '10%',
        data: ['RUN', 'DOWN', 'IDLE', 'ETIME', 'PM', 'MAINT', 'ETC']
      },
      grid: {
        top: '8%',
        left: '10%',
        bottom: '5%',
        right: '1%'
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: 1440,
        interval: 60,
        axisLine: {
          lineStyle: {
            color: '#455e9c'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#455e9c'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          fontSize: 9,
          color: '#F2F6FA',
          formatter: function (min) {
            if (min <= 1020) {
              return (6 + min / 60) + ':00';
            } else if (min === 1440) {
              return '';
            } else {
              return (min - 1020) / 60 - 1 + ':00';
            }
          }
        }
      },
      yAxis: [{
        type: 'category',
        inverse: true,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#455e9c'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#F2F6FA'
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#455e9c'
          }
        },
        data: yIndex1
      },
      {
        type: 'category',
        inverse: true,
        axisTick: {
          show: false
        },
        axisLine: {
          show: true
        },
        axisLabel: {
          fontSize: 12,
          color: '#F2F6FA'
        },
        position: 'left',
        offset: 36,
        data: yIndex2
      }],
      series: data
    };
  }

  // 根据获取的数据为eqpState数组赋值
  setEqpState(data, bumen) {

    if (bumen === 'Photo') {
      this.eqpStatePhoto = [
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
      ];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8APPH01':
            this.setEqpStateData(obj, 0, this.eqpStatePhoto);
            break;
          case '8APPH02':
            this.setEqpStateData(obj, 1, this.eqpStatePhoto);
            break;
          case '8APPH03':
            this.setEqpStateData(obj, 2, this.eqpStatePhoto);
            break;
          case '8APPH04':
            this.setEqpStateData(obj, 3, this.eqpStatePhoto);
            break;
          case '8APPH05':
            this.setEqpStateData(obj, 4, this.eqpStatePhoto);
            break;
          case '8APPH06':
            this.setEqpStateData(obj, 5, this.eqpStatePhoto);
            break;
          case '8APPH07':
            this.setEqpStateData(obj, 6, this.eqpStatePhoto);
            break;
          case '8APPH08':
            this.setEqpStateData(obj, 8, this.eqpStatePhoto);
            break;
          case '8APPH09':
            this.setEqpStateData(obj, 9, this.eqpStatePhoto);
            break;
          case '8APPH10':
            this.setEqpStateData(obj, 10, this.eqpStatePhoto);
            break;
          case '8APPH11':
            this.setEqpStateData(obj, 12, this.eqpStatePhoto);
            break;
          case '8APPH12':
            this.setEqpStateData(obj, 13, this.eqpStatePhoto);
            break;
          case '8APPH13':
            this.setEqpStateData(obj, 14, this.eqpStatePhoto);
            break;
          case '8APPH14':
            this.setEqpStateData(obj, 16, this.eqpStatePhoto);
            break;
          case '8APPH15':
            this.setEqpStateData(obj, 17, this.eqpStatePhoto);
            break;
          case '8APPH16':
            this.setEqpStateData(obj, 18, this.eqpStatePhoto);
            break;
          case '8APPH17':
            this.setEqpStateData(obj, 19, this.eqpStatePhoto);
            break;
          case '8APPH18':
            this.setEqpStateData(obj, 20, this.eqpStatePhoto);
            break;
        }
      }
    } else if (bumen === 'Sputter') {
      this.eqpStateSputter = [
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
      ];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8ATSP01':
            this.setEqpStateData(obj, 0, this.eqpStateSputter);
            break;
          case '8ATSP02':
            this.setEqpStateData(obj, 1, this.eqpStateSputter);
            break;
          case '8ATSP03':
            this.setEqpStateData(obj, 7, this.eqpStateSputter);
            break;
          case '8ATSP04':
            this.setEqpStateData(obj, 2, this.eqpStateSputter);
            break;
          case '8ATSP05':
            this.setEqpStateData(obj, 3, this.eqpStateSputter);
            break;
          case '8ATSP06':
            this.setEqpStateData(obj, 4, this.eqpStateSputter);
            break;
          case '8ATSP07':
            this.setEqpStateData(obj, 5, this.eqpStateSputter);
            break;
          case '8ATSP08':
            this.setEqpStateData(obj, 8, this.eqpStateSputter);
            break;
          case '8ATSP09':
            this.setEqpStateData(obj, 9, this.eqpStateSputter);
            break;
          case '8ATSP10':
            this.setEqpStateData(obj, 10, this.eqpStateSputter);
            break;
          case '8ATSP11':
            this.setEqpStateData(obj, 12, this.eqpStateSputter);
            break;
          case '8ATSP12':
            this.setEqpStateData(obj, 13, this.eqpStateSputter);
            break;
          case '8ATSP13':
            this.setEqpStateData(obj, 14, this.eqpStateSputter);
            break;
          case '8ATSP14':
            this.setEqpStateData(obj, 15, this.eqpStateSputter);
            break;
        }
      }
    } else if (bumen === 'PecvdFGI') {
      this.eqpStatePecvdFGI = [
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
      ];
      for (const obj of data) {
        if (obj.eqp_id === '8ATPE01') {
          this.setEqpStateData(obj, 0, this.eqpStatePecvdFGI);
        } else if (obj.eqp_id === '8ATPE02') {
          this.setEqpStateData(obj, 2, this.eqpStatePecvdFGI);
        } else if (obj.eqp_id === '8ATPE03') {
          this.setEqpStateData(obj, 4, this.eqpStatePecvdFGI);
        } else if (obj.eqp_id === '8ATPE04') {
          this.setEqpStateData(obj, 6, this.eqpStatePecvdFGI);
        }
      }
    } else if (bumen === 'PecvdMulti') {
      this.eqpStatePecvdMulti = [
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
      ];
      for (const obj of data) {
        if (obj.eqp_id === '8ATPE02') {
          this.setEqpStateData(obj, 0, this.eqpStatePecvdMulti);
        } else if (obj.eqp_id === '8ATPE06') {
          this.setEqpStateData(obj, 2, this.eqpStatePecvdMulti);
        } else if (obj.eqp_id === '8ATPE07') {
          this.setEqpStateData(obj, 4, this.eqpStatePecvdMulti);
        } else if (obj.eqp_id === '8ATPE08') {
          this.setEqpStateData(obj, 6, this.eqpStatePecvdMulti);
        }
      }
    } else if (bumen === 'PecvdPVX') {
      this.eqpStatePecvdPVX = [
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
      ];
      for (const obj of data) {
        if (obj.eqp_id === '8ATPE09') {
          this.setEqpStateData(obj, 0, this.eqpStatePecvdPVX);
        } else if (obj.eqp_id === '8ATPE10') {
          this.setEqpStateData(obj, 2, this.eqpStatePecvdPVX);
        } else if (obj.eqp_id === '8ATPE11') {
          this.setEqpStateData(obj, 4, this.eqpStatePecvdPVX);
        } else if (obj.eqp_id === '8ATPE12') {
          this.setEqpStateData(obj, 6, this.eqpStatePecvdPVX);
        } else if (obj.eqp_id === '8ATPE13') {
          this.setEqpStateData(obj, 8, this.eqpStatePecvdPVX);
        }
      }
    } else if (bumen === 'EtchITO') {
      this.eqpStateEtchITO = [
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
      ];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8AEIT01':
            this.setEqpStateData(obj, 0, this.eqpStateEtchITO);
            break;
          case '8AEIT02':
            this.setEqpStateData(obj, 1, this.eqpStateEtchITO);
            break;
          case '8AEIT03':
            this.setEqpStateData(obj, 2, this.eqpStateEtchITO);
            break;
          case '8AEIT04':
            this.setEqpStateData(obj, 3, this.eqpStateEtchITO);
            break;
          case '8AEIT05':
            this.setEqpStateData(obj, 4, this.eqpStateEtchITO);
            break;
          case '8AEGA01':
            this.setEqpStateData(obj, 6, this.eqpStateEtchITO);
            break;
          case '8AEGA02':
            this.setEqpStateData(obj, 7, this.eqpStateEtchITO);
            break;
          case '8AEGA03':
            this.setEqpStateData(obj, 8, this.eqpStateEtchITO);
            break;
        }
      }
    } else if (bumen === 'Etch1SD') {
      this.eqpStateEtch1SD = [
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
      ];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8AE1S01':
            this.setEqpStateData(obj, 0, this.eqpStateEtch1SD);
            break;
          case '8AE1S02':
            this.setEqpStateData(obj, 2, this.eqpStateEtch1SD);
            break;
          case '8AE1S03':
            this.setEqpStateData(obj, 4, this.eqpStateEtch1SD);
            break;
        }
      }
    } else if (bumen === 'Etch2SD') {
      this.eqpStateEtch2SD = [
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
      ];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8AE2S01':
            this.setEqpStateData(obj, 0, this.eqpStateEtch2SD);
            break;
          case '8AE2S02':
            this.setEqpStateData(obj, 2, this.eqpStateEtch2SD);
            break;
          case '8AE2S03':
            this.setEqpStateData(obj, 4, this.eqpStateEtch2SD);
            break;
        }
      }
    } else if (bumen === 'EtchVIA') {
      this.eqpStateEtchVIA = [
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
        new EqpAllState('', '', '', '', '', '', '', '', '', '', '', '', '', ''),
        new EqpAllState('-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-')
      ];
      for (const obj of data) {
        switch (obj.eqp_id) {
          case '8AEVI01':
            this.setEqpStateData(obj, 0, this.eqpStateEtchVIA);
            break;
          case '8AEVI02':
            this.setEqpStateData(obj, 2, this.eqpStateEtchVIA);
            break;
        }
      }
    }
  }
  // 为设备不同状态赋值
  setEqpStateData(obj, index, arr) {
    switch (obj.eqp_state) {
      case 'RUN':
        arr[index].run = parseFloat((obj.duration / 3600).toFixed(1)).toString();
        arr[index].runratio = parseFloat((obj.ratio * 100).toFixed(1)) + '%';
        break;
      case 'IDLE':
        arr[index].idle = parseFloat((obj.duration / 3600).toFixed(1)).toString();
        arr[index].idleratio = parseFloat((obj.ratio * 100).toFixed(1)) + '%';
        break;
      case 'DOWN':
        arr[index].down = parseFloat((obj.duration / 3600).toFixed(1)).toString();
        arr[index].downratio = parseFloat((obj.ratio * 100).toFixed(1)) + '%';
        break;
      case 'ETIME':
        arr[index].etime = parseFloat((obj.duration / 3600).toFixed(1)).toString();
        arr[index].etimeratio = parseFloat((obj.ratio * 100).toFixed(1)) + '%';
        break;
      case 'PM':
        arr[index].pm = parseFloat((obj.duration / 3600).toFixed(1)).toString();
        arr[index].pmratio = parseFloat((obj.ratio * 100).toFixed(1)) + '%';
        break;
      case 'MAINT':
        arr[index].maint = parseFloat((obj.duration / 3600).toFixed(1)).toString();
        arr[index].maintratio = parseFloat((obj.ratio * 100).toFixed(1)) + '%';
        break;
      case 'ETC':
        arr[index].etc = parseFloat((obj.duration / 3600).toFixed(1)).toString();
        arr[index].etcratio = parseFloat((obj.ratio * 100).toFixed(1)) + '%';
        break;
    }
  }

  query() {
    if (this.dateName != null) {
      this.bumen = 'Photo';
      this.selectPanduan = false;
      this.setOptionParamsQ('8APPH');

      this.PhotoTable = true;
      this.SputterTable = false;
      this.PecvdFGI = false;
      this.PecvdMulti = false;
      this.PecvdPVX = false;
      this.EtchITO = false;
      this.Etch1SD = false;
      this.Etch2SD = false;
      this.EtchVIA = false;

      this.apiService.get('/sc/arrayjiadongQ', this.option).subscribe(
        (res) => {
          if (res.length !== 0) {
            this.setSeriesArray(res, 'Photo');
            this.nowDate = this.option.params.dateValue;
            this.setEcharts(this.seriesArray, this.yPhoto1, this.yPhoto2);
          } else {
            this.msgs = [{ severity: 'error', summary: '查询结果', detail: '没有查询到数据 !' }];
          }
        }
      );
      this.apiService.get('/sc/arrayjiadongtableQ', this.option).subscribe(
        (res) => {
          if (res.length !== 0) {
            this.setEqpState(res, 'Photo');
          }
        }
      );
    }
  }

  refresh() {
    this.selectPanduan = true;
    this.bumen = 'Photo';
    this.dateName = null;
    this.setOptionParams('8APPH');

    this.PhotoTable = true;
    this.SputterTable = false;
    this.PecvdFGI = false;
    this.PecvdMulti = false;
    this.PecvdPVX = false;
    this.EtchITO = false;
    this.Etch1SD = false;
    this.Etch2SD = false;
    this.EtchVIA = false;

    this.apiService.get('/sc/arrayjiadong', this.option).subscribe(
      (res) => {
        this.setSeriesArray(res, 'Photo');
        this.nowDate = '当前';
        this.setEcharts(this.seriesArray, this.yPhoto1, this.yPhoto2);
      }
    );

    this.apiService.get('/sc/arrayjiadongtable', this.option).subscribe(
      (res) => {
        this.setEqpState(res, 'Photo');
      }
    );
  }
  // 每次选择时调用方法，切换不同Echarts图和ptable
  select(buMen) {
    this.msgs = [{ severity: 'info', summary: '查询状态', detail: '正在查询，请稍候 !' }];
    if (buMen === 'Photo') {
      this.PhotoTable = true;
      this.SputterTable = false;
      this.PecvdFGI = false;
      this.PecvdMulti = false;
      this.PecvdPVX = false;
      this.EtchITO = false;
      this.Etch1SD = false;
      this.Etch2SD = false;
      this.EtchVIA = false;
      if (this.selectPanduan) {
        this.setOptionParams('8APPH');
        this.apiService.get('/sc/arrayjiadong', this.option).subscribe(
          (res) => {
            this.setSeriesArray(res, buMen);
            this.setEcharts(this.seriesArray, this.yPhoto1, this.yPhoto2);
          }
        );
        this.apiService.get('/sc/arrayjiadongtable', this.option).subscribe(
          (res) => {
            this.setEqpState(res, buMen);
            this.msgs = [];
          }
        );
      } else {
        this.setOptionParamsQ('8APPH');
        this.apiService.get('/sc/arrayjiadongQ', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setSeriesArray(res, buMen);
              this.nowDate = this.option.params.dateValue;
              this.setEcharts(this.seriesArray, this.yPhoto1, this.yPhoto2);
            } else {
              this.msgs = [{ severity: 'error', summary: '查询结果', detail: '没有查询到数据 !' }];
            }
          }
        );
        this.apiService.get('/sc/arrayjiadongtableQ', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setEqpState(res, buMen);
              this.msgs = [];
            }
          }
        );
      }

    } else if (buMen === 'Sputter') {
      this.PhotoTable = false;
      this.SputterTable = true;
      this.PecvdFGI = false;
      this.PecvdMulti = false;
      this.PecvdPVX = false;
      this.EtchITO = false;
      this.Etch1SD = false;
      this.Etch2SD = false;
      this.EtchVIA = false;
      if (this.selectPanduan) {
        this.setOptionParams('8ATSP');
        this.apiService.get('/sc/arrayjiadong', this.option).subscribe(
          (res) => {
            this.setSeriesArray(res, buMen);
            this.setEcharts(this.seriesArray, this.ySputter1, this.ySputter2);
          }
        );
        this.apiService.get('/sc/arrayjiadongtable', this.option).subscribe(
          (res) => {
            this.setEqpState(res, buMen);
            this.msgs = [];
          }
        );
      } else {
        this.setOptionParamsQ('8ATSP');
        this.apiService.get('/sc/arrayjiadongQ', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setSeriesArray(res, buMen);
              this.nowDate = this.option.params.dateValue;
              this.setEcharts(this.seriesArray, this.ySputter1, this.ySputter2);
            } else {
              this.msgs = [{ severity: 'error', summary: '查询结果', detail: '没有查询到数据 !' }];
            }
          }
        );
        this.apiService.get('/sc/arrayjiadongtableQ', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setEqpState(res, buMen);
              this.msgs = [];
            }
          }
        );
      }
    } else if (buMen === 'PecvdFGI') {
      this.PhotoTable = false;
      this.SputterTable = false;
      this.PecvdFGI = true;
      this.PecvdMulti = false;
      this.PecvdPVX = false;
      this.EtchITO = false;
      this.Etch1SD = false;
      this.Etch2SD = false;
      this.EtchVIA = false;
      if (this.selectPanduan) {
        this.setOptionParamsPecvd();
        this.apiService.get('/sc/PecvdFGIjiadong', this.option).subscribe(
          (res) => {
            this.setSeriesArray(res, buMen);
            this.setEcharts(this.seriesArray, this.yPecvdFGI1, this.yPecvdFGI2);
          }
        );
        this.apiService.get('/sc/Pecvdjiadongtable', this.option).subscribe(
          (res) => {
            this.setEqpState(res, buMen);
            this.msgs = [];
          }
        );
      } else {
        this.setOptionParamsPecvdQ();
        this.apiService.get('/sc/PecvdFGIjiadongQ', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setSeriesArray(res, buMen);
              this.nowDate = this.option.params.dateValue;
              this.setEcharts(this.seriesArray, this.yPecvdFGI1, this.yPecvdFGI2);
            } else {
              this.msgs = [{ severity: 'error', summary: '查询结果', detail: '没有查询到数据 !' }];
            }
          }
        );
        this.apiService.get('/sc/PecvdjiadongtableQ', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setEqpState(res, buMen);
              this.msgs = [];
            }
          }
        );
      }
    } else if (buMen === 'PecvdMulti') {
      this.PhotoTable = false;
      this.SputterTable = false;
      this.PecvdFGI = false;
      this.PecvdMulti = true;
      this.PecvdPVX = false;
      this.EtchITO = false;
      this.Etch1SD = false;
      this.Etch2SD = false;
      this.EtchVIA = false;
      if (this.selectPanduan) {
        this.setOptionParamsPecvd();
        this.apiService.get('/sc/PecvdMultijiadong', this.option).subscribe(
          (res) => {
            this.setSeriesArray(res, buMen);
            this.setEcharts(this.seriesArray, this.yPecvdMulti1, this.yPecvdMulti2);
          }
        );
        this.apiService.get('/sc/Pecvdjiadongtable', this.option).subscribe(
          (res) => {
            this.setEqpState(res, buMen);
            this.msgs = [];
          }
        );
      } else {
        this.setOptionParamsPecvdQ();
        this.apiService.get('/sc/PecvdMultijiadongQ', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setSeriesArray(res, buMen);
              this.nowDate = this.option.params.dateValue;
              this.setEcharts(this.seriesArray, this.yPecvdMulti1, this.yPecvdMulti2);
            } else {
              this.msgs = [{ severity: 'error', summary: '查询结果', detail: '没有查询到数据 !' }];
            }
          }
        );
        this.apiService.get('/sc/PecvdjiadongtableQ', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setEqpState(res, buMen);
              this.msgs = [];
            }
          }
        );
      }
    } else if (buMen === 'PecvdPVX') {
      this.PhotoTable = false;
      this.SputterTable = false;
      this.PecvdFGI = false;
      this.PecvdMulti = false;
      this.PecvdPVX = true;
      this.EtchITO = false;
      this.Etch1SD = false;
      this.Etch2SD = false;
      this.EtchVIA = false;
      if (this.selectPanduan) {
        this.setOptionParamsPecvd();
        this.apiService.get('/sc/PecvdPVXjiadong', this.option).subscribe(
          (res) => {
            this.setSeriesArray(res, buMen);
            this.setEcharts(this.seriesArray, this.yPecvdPVX1, this.yPecvdPVX2);
          }
        );
        this.apiService.get('/sc/Pecvdjiadongtable', this.option).subscribe(
          (res) => {
            this.setEqpState(res, buMen);
            this.msgs = [];
          }
        );
      } else {
        this.setOptionParamsPecvdQ();
        this.apiService.get('/sc/PecvdPVXjiadongQ', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setSeriesArray(res, buMen);
              this.nowDate = this.option.params.dateValue;
              this.setEcharts(this.seriesArray, this.yPecvdPVX1, this.yPecvdPVX2);
            } else {
              this.msgs = [{ severity: 'error', summary: '查询结果', detail: '没有查询到数据 !' }];
            }
          }
        );
        this.apiService.get('/sc/PecvdjiadongtableQ', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setEqpState(res, buMen);
              this.msgs = [];
            }
          }
        );
      }
    } else if (buMen === 'EtchITO') {
      this.PhotoTable = false;
      this.SputterTable = false;
      this.PecvdFGI = false;
      this.PecvdMulti = false;
      this.PecvdPVX = false;
      this.EtchITO = true;
      this.Etch1SD = false;
      this.Etch2SD = false;
      this.EtchVIA = false;
      if (this.selectPanduan) {
        this.setOptionParamsPecvd();
        this.apiService.get('/sc/getEtchITO', this.option).subscribe(
          (res) => {
            this.setSeriesArray(res, buMen);
            this.setEcharts(this.seriesArray, this.yEtchITO1, this.yEtchITO2);
          }
        );
        this.apiService.get('/sc/getEtchITOTable', this.option).subscribe(
          (res) => {
            this.setEqpState(res, buMen);
            this.msgs = [];
          }
        );
      } else {
        this.setOptionParamsQ('8APPH');
        this.apiService.get('/sc/queryEtchITO', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setSeriesArray(res, buMen);
              this.nowDate = this.option.params.dateValue;
              this.setEcharts(this.seriesArray, this.yEtchITO1, this.yEtchITO2);
            } else {
              this.msgs = [{ severity: 'error', summary: '查询结果', detail: '没有查询到数据 !' }];
            }
          }
        );
        this.apiService.get('/sc/queryEtchITOTable', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setEqpState(res, buMen);
              this.msgs = [];
            }
          }
        );
      }
    } else if (buMen === 'Etch1SD') {
      this.PhotoTable = false;
      this.SputterTable = false;
      this.PecvdFGI = false;
      this.PecvdMulti = false;
      this.PecvdPVX = false;
      this.EtchITO = false;
      this.Etch1SD = true;
      this.Etch2SD = false;
      this.EtchVIA = false;
      if (this.selectPanduan) {
        this.setOptionParams('8AE1');
        this.apiService.get('/sc/getEtchSDVIA', this.option).subscribe(
          (res) => {
            this.setSeriesArray(res, buMen);
            this.setEcharts(this.seriesArray, this.yEtch1SD1, this.yEtch1SD2);
          }
        );
        this.apiService.get('/sc/getEtchSDVIATable', this.option).subscribe(
          (res) => {
            this.setEqpState(res, buMen);
            this.msgs = [];
          }
        );
      } else {
        this.setOptionParamsQ('8AE1');
        this.apiService.get('/sc/queryEtchSDVIA', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setSeriesArray(res, buMen);
              this.nowDate = this.option.params.dateValue;
              this.setEcharts(this.seriesArray, this.yEtch1SD1, this.yEtch1SD2);
            } else {
              this.msgs = [{ severity: 'error', summary: '查询结果', detail: '没有查询到数据 !' }];
            }
          }
        );
        this.apiService.get('/sc/queryEtchSDVIATable', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setEqpState(res, buMen);
              this.msgs = [];
            }
          }
        );
      }
    } else if (buMen === 'Etch2SD') {
      this.PhotoTable = false;
      this.SputterTable = false;
      this.PecvdFGI = false;
      this.PecvdMulti = false;
      this.PecvdPVX = false;
      this.EtchITO = false;
      this.Etch1SD = false;
      this.Etch2SD = true;
      this.EtchVIA = false;
      if (this.selectPanduan) {
        this.setOptionParams('8AE2');
        this.apiService.get('/sc/getEtchSDVIA', this.option).subscribe(
          (res) => {
            this.setSeriesArray(res, buMen);
            this.setEcharts(this.seriesArray, this.yEtch2SD1, this.yEtch2SD2);
          }
        );
        this.apiService.get('/sc/getEtchSDVIATable', this.option).subscribe(
          (res) => {
            this.setEqpState(res, buMen);
            this.msgs = [];
          }
        );
      } else {
        this.setOptionParamsQ('8AE2');
        this.apiService.get('/sc/queryEtchSDVIA', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setSeriesArray(res, buMen);
              this.nowDate = this.option.params.dateValue;
              this.setEcharts(this.seriesArray, this.yEtch2SD1, this.yEtch2SD2);
            } else {
              this.msgs = [{ severity: 'error', summary: '查询结果', detail: '没有查询到数据 !' }];
            }
          }
        );
        this.apiService.get('/sc/queryEtchSDVIATable', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setEqpState(res, buMen);
              this.msgs = [];
            }
          }
        );
      }
    } else if (buMen === 'EtchVIA') {
      this.PhotoTable = false;
      this.SputterTable = false;
      this.PecvdFGI = false;
      this.PecvdMulti = false;
      this.PecvdPVX = false;
      this.EtchITO = false;
      this.Etch1SD = false;
      this.Etch2SD = false;
      this.EtchVIA = true;
      if (this.selectPanduan) {
        this.setOptionParams('8AEV');
        this.apiService.get('/sc/getEtchSDVIA', this.option).subscribe(
          (res) => {
            this.setSeriesArray(res, buMen);
            this.setEcharts(this.seriesArray, this.yEtchVIA1, this.yEtchVIA2);
          }
        );
        this.apiService.get('/sc/getEtchSDVIATable', this.option).subscribe(
          (res) => {
            this.setEqpState(res, buMen);
            this.msgs = [];
          }
        );
      } else {
        this.setOptionParamsQ('8AEV');
        this.apiService.get('/sc/queryEtchSDVIA', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setSeriesArray(res, buMen);
              this.nowDate = this.option.params.dateValue;
              this.setEcharts(this.seriesArray, this.yEtchVIA1, this.yEtchVIA2);
            } else {
              this.msgs = [{ severity: 'error', summary: '查询结果', detail: '没有查询到数据 !' }];
            }
          }
        );
        this.apiService.get('/sc/queryEtchSDVIATable', this.option).subscribe(
          (res) => {
            if (res.length !== 0) {
              this.setEqpState(res, buMen);
              this.msgs = [];
            }
          }
        );
      }
    }
  }

  // 设置刷新和初始化时get方法的参数
  setOptionParams(eqp: string) {
    this.nowTime = new Date();
    if (this.nowTime.getHours() < 6) {
      this.option = {
        params: {
          dayControl: '-1',
          eqp_id: eqp
        }
      };
    } else {
      this.option = {
        params: {
          dayControl: '',
          eqp_id: eqp
        }
      };
    }
  }

  // 设置查询时get方法的参数
  setOptionParamsQ(eqp: string) {
    const year = this.dateName.getFullYear().toString();
    let month: string;
    let day: string;
    if (this.dateName.getMonth() < 9) {
      month = '0' + (this.dateName.getMonth() + 1);
    } else {
      month = (this.dateName.getMonth() + 1).toString();
    }
    if (this.dateName.getDate() < 10) {
      day = '0' + this.dateName.getDate();
    } else {
      day = this.dateName.getDate().toString();
    }

    this.option = {
      params: {
        dateValue: year + month + day,
        eqp_id: eqp
      }
    };
  }

  setOptionParamsPecvd() {
    this.nowTime = new Date();
    if (this.nowTime.getHours() < 6) {
      this.option = {
        params: {
          dayControl: '-1'
        }
      };
    } else {
      this.option = {
        params: {
          dayControl: ''
        }
      };
    }
  }

  setOptionParamsPecvdQ() {
    const year = this.dateName.getFullYear().toString();
    let month: string;
    let day: string;
    if (this.dateName.getMonth() < 9) {
      month = '0' + (this.dateName.getMonth() + 1);
    } else {
      month = (this.dateName.getMonth() + 1).toString();
    }
    if (this.dateName.getDate() < 10) {
      day = '0' + this.dateName.getDate();
    } else {
      day = this.dateName.getDate().toString();
    }

    this.option = {
      params: {
        dateValue: year + month + day
      }
    };
  }

}
