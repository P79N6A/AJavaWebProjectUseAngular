import { Component, OnInit } from '@angular/core';
import { CstStockerInfo, CstInfo4VO, CstInfo, CstInfoRes, CstInfoResEmpty } from './model/cst_stocker_info';
import { ApiService } from '../../../common/service/api/api.service';

@Component({
  selector: 'app-cstgls',
  templateUrl: './cstgls.component.html',
  styleUrls: ['./cstgls.component.css']
})
export class CstglsComponent implements OnInit {

  dateStart;
  dateEnd;
  SecondTableArray = [];

  firstView = false;
  secondView = false;

  // 判断第二个表的ratio是否超过90%
  tfst01 = false;
  tfst02 = false;
  tfst03 = false;
  tfst04 = false;

  // 判断第三个表的ratio是否超过90%
  tfst01s = false;
  tfst02s = false;
  tfst03s = false;
  tfst04s = false;

  // 控制是否报警，判断几个单元格的数值和是否大于某一个值。
  edACNArraySort = false;
  pedACNCell = false;
  edFCWCFScfStft = false;
  dumFCWCFScfStft = false;
  peddFCWCell = false;
  peddCCNArraySort = false;
  edCCNPIOther = false;
  dumCCNPIOther = false;

  // 定义一个数组用来保存报警的阈值。
  alarmArray = [50, 0, 26, 9, 50, 0, 0, 38];

  // 声明两个变量用来存上一次执行queryData方法的开始时间和结束时间
  predateStart = -1;
  predateEnd = -1;

  ArrayFirst: Array<Array<any>> = []; // 用来存下面的十三个数组


  // 用来存左边第一个表Ratio、pro、E/D、Dum四列数据
  ACNArrayTFT: Array<string> = ['-', '-', '-', '-'];
  ACNSortTFT: Array<string> = ['-', '-', '-', '-'];
  ACNCellTFT: Array<string> = ['-', '-', '-', '-'];
  FCWCFCF: Array<string> = ['-', '-', '-', '-'];
  FCWSortCF: Array<string> = ['-', '-', '-', '-'];
  FCWSortTFT: Array<string> = ['-', '-', '-', '-'];
  FCWCellTFT: Array<string> = ['-', '-', '-', '-'];
  FCWCellCF: Array<string> = ['-', '-', '-', '-'];
  CCNArray: Array<string> = ['-', '-', '-', '-'];
  CCNSort: Array<string> = ['-', '-', '-', '-'];
  CCNPIRW: Array<string> = ['-', '-', '-', '-'];
  CCNOther: Array<string> = ['-', '-', '-', '-'];
  MCWCell: Array<string> = ['-', '-', '-', '-'];

  ArraySecond: Array<Array<any>> = []; // 用来存下面的四个数组

  // 用来左边第一个表empty七列的数据
  ACNEMPTY: Array<string> = ['-', '-', '-', '-', '-', '-', '-'];
  FCWEMPTY: Array<string> = ['-', '-', '-', '-', '-', '-', '-'];
  CCNEMPTY: Array<string> = ['-', '-', '-', '-', '-', '-', '-'];
  MCWEMPTY: Array<string> = ['-', '-', '-', '-', '-', '-', '-'];

  // 用来存第二个表stocker是TFST等几行的数据
  TFST01: Array<string> = ['-', '-', '-'];
  TFST02: Array<string> = ['-', '-', '-'];
  TFST03: Array<string> = ['-', '-', '-'];
  TFST04: Array<string> = ['-', '-', '-'];

  // 用来存第二个表ACN、FCW、CCN三行的数据
  TFST1: Array<CstStockerInfo> = [
      new CstStockerInfo('-', '-', '-', '-'),
      new CstStockerInfo('-', '-', '-', '-'),
      new CstStockerInfo('-', '-', '-', '-')
  ];
  TFST2: Array<CstStockerInfo> = this.TFST1;
  TFST3: Array<CstStockerInfo> = this.TFST1;
  TFST4: Array<CstStockerInfo> = this.TFST1;

  // 用来存第三个表stocker是TFST等几行的数据
  TFST01S: Array<string> = ['-', '-', '-'];
  TFST02S: Array<string> = ['-', '-', '-'];
  TFST03S: Array<string> = ['-', '-', '-'];
  TFST04S: Array<string> = ['-', '-', '-'];

  // 用来存第三个表ACN、FCW、CCN三行的数据
  TFST1S: Array<CstStockerInfo> = [
      new CstStockerInfo('-', '-', '-', '-'),
      new CstStockerInfo('-', '-', '-', '-'),
      new CstStockerInfo('-', '-', '-', '-')
  ];
  TFST2S: Array<CstStockerInfo> = this.TFST1;
  TFST3S: Array<CstStockerInfo> = this.TFST1;
  TFST4S: Array<CstStockerInfo> = this.TFST1;

  // 最后一个表的stocker是TFST等几行的数据
  SUM1: Array<string> = ['-', '-', '-', '-'];
  SUM2: Array<string> = ['-', '-', '-', '-'];
  SUM3: Array<string> = ['-', '-', '-', '-'];
  SUM4: Array<string> = ['-', '-', '-', '-'];

  // 最后一个表的ACN、FCW、CCN三行的数据
  lastT01: Array<CstInfo4VO> = [
      new CstInfo4VO('-', '-', '-', '-'),
      new CstInfo4VO('-', '-', '-', '-'),
      new CstInfo4VO('-', '-', '-', '-')
  ];
  lastT02: Array<CstInfo4VO> = this.lastT01;
  lastT03: Array<CstInfo4VO> = this.lastT01;
  lastT04: Array<CstInfo4VO> = this.lastT01;

  finalArray: Array<CstInfoRes> = []; // 用来存处理去重后的数组元素，可以直接传进getCstInfoArray方法中
  finalEmptyArray: Array<CstInfoResEmpty> = [];

  //下面 是用来  保存  Empty key In 信息的变量
  ACNRemark : string = '';
  FCWRemark : string = '';
  CCNRemark : string = '';
  remarks : string[] = [this.ACNRemark,this.FCWRemark,this.CCNRemark];

  // 下面是用来 做定时刷新的操作
  socket : WebSocket;


  constructor(private apiService: ApiService) { }
  ngOnInit() {

      //建立websocket 连接
      this.socket = new WebSocket("ws://localhost:8080/api/cstinfo");
      this.socket.onmessage = (event)=>{
          //1.获取到 传递过来的数据
          let datas  = event.data;
          //2.将数据 转成JSON的格式，方便获取值来使用
          let datasJson = JSON.parse(datas);
          console.log(datasJson);

          //3.下面的就是赋值的操作了，直接调用 原来的方法即可
          this.getCstInfoArray(datasJson.cstinfo);
          this.getAlarm();

          this.getCstInfoEmptyArray(datasJson.cstinfoempty);

          this.getCstStockerEInfoArray(datasJson.cststockereqpinfo);

          this.getCstStockerInfoArray(datasJson.cststockerinfo);

          this.getCstInfo4VOArray(datasJson.cstinfo4vo);
         
      }

      this.apiService.getAll('/sc/cstinfo').subscribe(
          (res) => {
              this.getCstInfoArray(res);
              this.getAlarm();
          }
      );

      this.apiService.getAll('/sc/cstinfoempty').subscribe(
          (res) => {
              this.getCstInfoEmptyArray(res);
          }
      );
      this.apiService.getAll('/sc/cststockereqpinfo').subscribe(
          (res) => {
              this.getCstStockerEInfoArray(res);
          }
      );
      this.apiService.getAll('/sc/cststockerinfo').subscribe(
          (res) => {
              this.getCstStockerInfoArray(res);
          }
      );

      this.apiService.getAll('/sc/cstinfo4vo').subscribe(
          (res) => {
              this.getCstInfo4VOArray(res);
          }
      );

      // 查询 remark 的内容
      this.queryRemark();

      this.firstView = true;
  }

  // 判断单元格值的和是否超过域值。
  getAlarm() {

      this.edACNArraySort = false;
      this.pedACNCell = false;
      this.edFCWCFScfStft = false;
      this.dumFCWCFScfStft = false;
      this.peddFCWCell = false;
      this.peddCCNArraySort = false;
      this.edCCNPIOther = false;
      this.dumCCNPIOther = false;

      if ((this.getReverseChange(this.ACNArrayTFT[2]) + this.getReverseChange(this.ACNSortTFT[2])) > this.alarmArray[0]) {
          this.edACNArraySort = true;
      }
      if ((this.getReverseChange(this.ACNCellTFT[1]) + this.getReverseChange(this.ACNCellTFT[2])) > this.alarmArray[1]) {
          this.pedACNCell = true;
      }
      if ((this.getReverseChange(this.FCWCFCF[2]) + this.getReverseChange(this.FCWSortCF[2]) +
          this.getReverseChange(this.FCWSortTFT[2])) > this.alarmArray[2]) {
          this.edFCWCFScfStft = true;
      }
      if ((this.getReverseChange(this.FCWCFCF[3]) + this.getReverseChange(this.FCWSortCF[3]) +
          this.getReverseChange(this.FCWSortTFT[3])) > this.alarmArray[3]) {
          this.dumFCWCFScfStft = true;
      }
      if ((this.getReverseChange(this.FCWCellTFT[1]) + this.getReverseChange(this.FCWCellTFT[2]) +
          this.getReverseChange(this.FCWCellTFT[3]) + this.getReverseChange(this.FCWCellCF[1]) +
          this.getReverseChange(this.FCWCellCF[2]) + this.getReverseChange(this.FCWCellCF[3])) > this.alarmArray[4]) {
          this.peddFCWCell = true;
      }
      if ((this.getReverseChange(this.CCNArray[1]) + this.getReverseChange(this.CCNArray[2]) +
          this.getReverseChange(this.CCNArray[3]) + this.getReverseChange(this.CCNSort[1]) +
          this.getReverseChange(this.CCNSort[2]) + this.getReverseChange(this.CCNSort[3])) > this.alarmArray[5]) {
          this.peddCCNArraySort = true;
      }
      if ((this.getReverseChange(this.CCNPIRW[2]) + this.getReverseChange(this.CCNOther[2])) > this.alarmArray[6]) {
          this.edCCNPIOther = true;
      }
      if ((this.getReverseChange(this.CCNPIRW[3]) + this.getReverseChange(this.CCNOther[3])) > this.alarmArray[7]) {
          this.dumCCNPIOther = true;
      }
  }

  // 数组赋值
  getCstInfoArray(data) {

      this.ArrayFirst = [];

      this.ACNArrayTFT = [];
      this.ACNSortTFT = [];
      this.ACNCellTFT = [];
      this.FCWCFCF = [];
      this.FCWSortCF = [];
      this.FCWSortTFT = [];
      this.FCWCellTFT = [];
      this.FCWCellCF = [];
      this.CCNArray = [];
      this.CCNSort = [];
      this.CCNPIRW = [];
      this.CCNOther = [];
      this.MCWCell = [];
      for (const obj of data) {
          if (obj.cst_spec === 'ACN') {
              if (obj.factory === 'Array') {
                  this.ACNArrayTFT.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
              }
              if (obj.factory === 'Sort') {
                  this.ACNSortTFT.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
              }
              if (obj.factory === 'Cell') {
                  this.ACNCellTFT.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
              }
          }
          if (obj.cst_spec === 'FCW') {
              if (obj.factory === 'CF') {
                  this.FCWCFCF.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
              }
              if (obj.factory === 'Sort') {
                  if (obj.type === 'CF') {
                      this.FCWSortCF.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
                  }
                  if (obj.type === 'TFT') {
                      this.FCWSortTFT.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
                  }
              }
              if (obj.factory === 'Cell') {
                  if (obj.type === 'CF') {
                      this.FCWCellCF.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
                  }
                  if (obj.type === 'TFT') {
                      this.FCWCellTFT.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
                  }
              }
          }
          if (obj.cst_spec === 'CCN') {
              if (obj.factory === 'Array') {
                  this.CCNArray.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
              }
              if (obj.factory === 'Sort') {
                  this.CCNSort.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
              }
              if (obj.factory === 'PI/RW') {
                  this.CCNPIRW.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
              }
              if (obj.factory === 'Other') {
                  this.CCNOther.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
              }
          }
          if (obj.cst_spec === 'MCW') {
              this.MCWCell.push(obj.full_ratio, obj.pro, obj.eng + obj.dev, obj.dum);
          }
      }
      this.ArrayFirst.push(
          this.ACNArrayTFT,
          this.ACNSortTFT,
          this.ACNCellTFT,
          this.FCWCFCF,
          this.FCWSortCF,
          this.FCWSortTFT,
          this.FCWCellTFT,
          this.FCWCellCF,
          this.CCNArray,
          this.CCNSort,
          this.CCNPIRW,
          this.CCNOther,
          this.MCWCell
      );

      // 遍历数组，如果ArrayFirst中的数组元素有为空的就赋默认值“-”
      for (const array of this.ArrayFirst) {
          if (array.length === 0) {
              array.push('-', '-', '-', '-');
          }
      }
      this.getChange(this.ACNArrayTFT);
      this.getChange(this.ACNSortTFT);
      this.getChange(this.ACNCellTFT);
      this.getChange(this.FCWCFCF);
      this.getChange(this.FCWSortCF);
      this.getChange(this.FCWSortTFT);
      this.getChange(this.FCWCellTFT);
      this.getChange(this.FCWCellCF);
      this.getChange(this.CCNArray);
      this.getChange(this.CCNSort);
      this.getChange(this.CCNPIRW);
      this.getChange(this.CCNOther);
      this.getChange(this.MCWCell);
  }

  // 遍历数组，如果数组中有元素为'0'，则替换为'-'
  getChange(array: Array<string>) {
      for (const i in array) {
          if (array[i] == '0') {
              array[i] = '-';
          }
      }
  }

  getReverseChange(item: any): number {
      if (item == '-') {
          return 0;
      } else {
          return parseInt(item, 10);
      }
  }

  // 遍历对象数组，如果数组中有对象的属性为'0'，则替换为'-'
  getChangeObj(array: Array<object>) {
      for (const obj of array) {
          for (const key in obj) {
              if (obj.hasOwnProperty(key)) {
                  if (obj[key] == '0') {
                      obj[key] = '-';
                  }
              }
          }
      }
  }

  // Empty部分数组赋值
  getCstInfoEmptyArray(data) {

      this.ArraySecond = [];

      this.ACNEMPTY = [];
      this.FCWEMPTY = [];
      this.CCNEMPTY = [];
      this.MCWEMPTY = [];
      for (const obj of data) {
          if (obj.cst_spec === 'ACN') {
              this.ACNEMPTY.push(obj.ttl, obj.oneqp, obj.move, obj.instk, obj.dirty, obj.outstk, obj.others);
          }
          if (obj.cst_spec === 'FCW') {
              this.FCWEMPTY.push(obj.ttl, obj.oneqp, obj.move, obj.instk, obj.dirty, obj.outstk, obj.others);
          }
          if (obj.cst_spec === 'CCN') {
              this.CCNEMPTY.push(obj.ttl, obj.oneqp, obj.move, obj.instk, obj.dirty, obj.outstk, obj.others);
          }
          if (obj.cst_spec === 'MCW') {
              this.MCWEMPTY.push(obj.ttl, obj.oneqp, obj.move, obj.instk, obj.dirty, obj.outstk, obj.others);
          }
      }

      this.ArraySecond.push(
          this.ACNEMPTY,
          this.FCWEMPTY,
          this.CCNEMPTY,
          this.MCWEMPTY
      );

      for (const array of this.ArraySecond) {
          if (array.length === 0) {
              array.push('-', '-', '-', '-', '-', '-', '-');
          }
      }

      this.getChange(this.ACNEMPTY);
      this.getChange(this.FCWEMPTY);
      this.getChange(this.CCNEMPTY);
      this.getChange(this.MCWEMPTY);
  }

  // 获取第二个表的数组数据
  getCstStockerEInfoArray(data) {
      this.TFST01 = [];
      this.TFST02 = [];
      this.TFST03 = [];
      this.TFST04 = [];

      this.TFST1 = [];
      this.TFST2 = [];
      this.TFST3 = [];
      this.TFST4 = [];


      for (const obj of data) {
          if (obj.stocker === 'TFST01') {
              if (obj.cst_spec === 'TFST01') {
                  this.TFST01.push(obj.maxqty, obj.currentqty, obj.full_ratio);
              }
              if (obj.cst_spec === 'ACN') {
                  this.TFST1.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'FCW') {
                  this.TFST1.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'CCN') {
                  this.TFST1.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
          }
          if (obj.stocker === 'TFST02') {
              if (obj.cst_spec === 'TFST02') {
                  this.TFST02.push(obj.maxqty, obj.currentqty, obj.full_ratio);
              }
              if (obj.cst_spec === 'ACN') {
                  this.TFST2.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'FCW') {
                  this.TFST2.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'CCN') {
                  this.TFST2.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
          }
          if (obj.stocker === 'TFST03') {
              if (obj.cst_spec === 'TFST03') {
                  this.TFST03.push(obj.maxqty, obj.currentqty, obj.full_ratio);
              }
              if (obj.cst_spec === 'ACN') {
                  this.TFST3.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'FCW') {
                  this.TFST3.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'CCN') {
                  this.TFST3.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
          }
          if (obj.stocker === 'TFST04') {
              if (obj.cst_spec === 'TFST04') {
                  this.TFST04.push(obj.maxqty, obj.currentqty, obj.full_ratio);
              }
              if (obj.cst_spec === 'ACN') {
                  this.TFST4.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'FCW') {
                  this.TFST4.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'CCN') {
                  this.TFST4.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
          }
      }

      if (parseInt(this.TFST01[2], 10) >= 90) {
          this.tfst01 = true;
      }
      if (parseInt(this.TFST02[2], 10) >= 90) {
          this.tfst02 = true;
      }
      if (parseInt(this.TFST03[2], 10) >= 90) {
          this.tfst03 = true;
      }
      if (parseInt(this.TFST04[2], 10) >= 90) {
          this.tfst04 = true;
      }


      this.getChange(this.TFST01);
      this.getChange(this.TFST02);
      this.getChange(this.TFST03);
      this.getChange(this.TFST04);

      this.getChangeObj(this.TFST1);
      this.getChangeObj(this.TFST2);
      this.getChangeObj(this.TFST3);
      this.getChangeObj(this.TFST4);
  }

  // 获取第三个表的数组数据
  getCstStockerInfoArray(data) {
      this.TFST01S = [];
      this.TFST02S = [];
      this.TFST03S = [];
      this.TFST04S = [];

      this.TFST1S = [];
      this.TFST2S = [];
      this.TFST3S = [];
      this.TFST4S = [];
      for (const obj of data) {
          if (obj.stocker === 'TFST01') {
              if (obj.cst_spec === 'TFST01') {
                  this.TFST01S.push(obj.maxqty, obj.currentqty, obj.full_ratio);
              }
              if (obj.cst_spec === 'ACN') {
                  this.TFST1S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'FCW') {
                  this.TFST1S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'CCN') {
                  this.TFST1S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
          }
          if (obj.stocker === 'TFST02') {
              if (obj.cst_spec === 'TFST02') {
                  this.TFST02S.push(obj.maxqty, obj.currentqty, obj.full_ratio);
              }
              if (obj.cst_spec === 'ACN') {
                  this.TFST2S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'FCW') {
                  this.TFST2S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'CCN') {
                  this.TFST2S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
          }
          if (obj.stocker === 'TFST03') {
              if (obj.cst_spec === 'TFST03') {
                  this.TFST03S.push(obj.maxqty, obj.currentqty, obj.full_ratio);
              }
              if (obj.cst_spec === 'ACN') {
                  this.TFST3S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'FCW') {
                  this.TFST3S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'CCN') {
                  this.TFST3S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
          }
          if (obj.stocker === 'TFST04') {
              if (obj.cst_spec === 'TFST04') {
                  this.TFST04S.push(obj.maxqty, obj.currentqty, obj.full_ratio);
              }
              if (obj.cst_spec === 'ACN') {
                  this.TFST4S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'FCW') {
                  this.TFST4S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
              if (obj.cst_spec === 'CCN') {
                  this.TFST4S.push(new CstStockerInfo(obj.cst_spec, obj.maxqty, obj.currentqty, obj.full_ratio));
              }
          }
      }

      if (parseInt(this.TFST01S[2], 10) >= 90) {
          this.tfst01s = true;
      }
      if (parseInt(this.TFST02S[2], 10) >= 90) {
          this.tfst02s = true;
      }
      if (parseInt(this.TFST03S[2], 10) >= 90) {
          this.tfst03s = true;
      }
      if (parseInt(this.TFST04S[2], 10) >= 90) {
          this.tfst04s = true;
      }

      this.getChange(this.TFST01S);
      this.getChange(this.TFST02S);
      this.getChange(this.TFST03S);
      this.getChange(this.TFST04S);

      this.getChangeObj(this.TFST1S);
      this.getChangeObj(this.TFST2S);
      this.getChangeObj(this.TFST3S);
      this.getChangeObj(this.TFST4S);
  }

  // 获取第四个表的数组数据
  getCstInfo4VOArray(data) {
      this.SUM1 = [];
      this.SUM2 = [];
      this.SUM3 = [];
      this.SUM4 = [];

      this.lastT01 = [];
      this.lastT02 = [];
      this.lastT03 = [];
      this.lastT04 = [];

      for (const obj of data) {
          if (obj.stocker === 'TFST01') {
              if (obj.cst_spec === 'TFST01') {
                  this.SUM1.push(obj.production, obj.engdev, obj.dummy, obj.empty);
              }
              if (obj.cst_spec === 'ACN') {
                  this.lastT01.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
              if (obj.cst_spec === 'FCW') {
                  this.lastT01.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
              if (obj.cst_spec === 'CCN') {
                  this.lastT01.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
          }
          if (obj.stocker === 'TFST02') {
              if (obj.cst_spec === 'TFST02') {
                  this.SUM2.push(obj.production, obj.engdev, obj.dummy, obj.empty);
              }
              if (obj.cst_spec === 'ACN') {
                  this.lastT02.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
              if (obj.cst_spec === 'FCW') {
                  this.lastT02.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
              if (obj.cst_spec === 'CCN') {
                  this.lastT02.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
          }
          if (obj.stocker === 'TFST03') {
              if (obj.cst_spec === 'TFST03') {
                  this.SUM3.push(obj.production, obj.engdev, obj.dummy, obj.empty);
              }
              if (obj.cst_spec === 'ACN') {
                  this.lastT03.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
              if (obj.cst_spec === 'FCW') {
                  this.lastT03.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
              if (obj.cst_spec === 'CCN') {
                  this.lastT03.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
          }
          if (obj.stocker === 'TFST04') {
              if (obj.cst_spec === 'TFST04') {
                  this.SUM4.push(obj.production, obj.engdev, obj.dummy, obj.empty);
              }
              if (obj.cst_spec === 'ACN') {
                  this.lastT04.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
              if (obj.cst_spec === 'FCW') {
                  this.lastT04.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
              if (obj.cst_spec === 'CCN') {
                  this.lastT04.push(new CstInfo4VO(obj.production, obj.engdev, obj.dummy, obj.empty));
              }
          }
      }

      this.getChange(this.SUM1);
      this.getChange(this.SUM2);
      this.getChange(this.SUM3);
      this.getChange(this.SUM4);

      this.getChangeObj(this.lastT01);
      this.getChangeObj(this.lastT02);
      this.getChangeObj(this.lastT03);
      this.getChangeObj(this.lastT04);
  }

  // 点击查询按钮调用的方法
  queryData() {
      if (this.dateStart != null && this.dateEnd != null) {
          this.predateStart = -1;
          this.predateEnd = -1;
          const option = {
              params: {
                  start: this.dateStart,
                  end: this.dateEnd
              }
          };

          this.apiService.get('/sc/querycstinfo', option).subscribe(
              (res) => {
                  this.getReduce(res); // 把数组处理成元素cst_spec、factory、type属性没有重复的数组，如果有重复求和，ratio求平均
                  this.getCstInfoArray(this.finalArray);
                  this.getAlarm();
              }
          );

          this.apiService.get('/sc/queryempty', option).subscribe(
              (res) => {
                  this.getReduceEmpty(res);
                  this.getCstInfoEmptyArray(this.finalEmptyArray);
              }
          );

           // 查询 remark 的内容
          this.queryRemark();


          // 方法执行结束后，记录查询时间，以便下钻时调用

          this.predateStart = this.dateStart;
          this.predateEnd = this.dateEnd;
      }
  }

  // 把数组处理成元素cst_spec、factory、type属性没有重复的数组，如果有重复求和，ratio求平均
  getReduce(data) {

      this.finalArray = [];

      const tempArray: Array<CstInfo> = [];

      // 去掉数组中cst_spec、factory、type属性一样的元素
      for (const obj of data) {
          let flag = true;
          if (tempArray.length !== 0) {
              for (const obj1 of tempArray) {
                  if (obj.cst_spec === obj1.cst_spec && obj.factory === obj1.factory && obj.type === obj1.type) {
                      flag = false;
                  }
              }
              if (flag) {
                  tempArray.push(obj);
              }
          } else {
              tempArray.push(obj);
          }
      }

      for (const obj of tempArray) { // 遍历去重后的数组
          const full_ratioArray = [];
          const proArray = [];
          const engArray = [];
          const devArray = [];
          const dumArray = [];
          for (const obj1 of data) { // 取出原数据中和去重后数组中元素一样的数据，把他们的相应属性值放到一个新数组中
              if (obj1.cst_spec === obj.cst_spec && obj1.factory === obj.factory && obj1.type === obj.type) {
                  full_ratioArray.push(obj1.full_ratio);
                  proArray.push(obj1.pro);
                  engArray.push(obj1.eng);
                  devArray.push(obj1.dev);
                  dumArray.push(obj1.dum);
              }
          }

          let sumFullRatio = 0;
          let avgFullRatio = 0;
          let avgFullRatioStr = '';
          let sumPro = 0;
          let sumEng = 0;
          let sumDev = 0;
          let sumDum = 0;

          // 数组求平均、数组求和
          sumFullRatio = this.getArraySum(full_ratioArray);
          avgFullRatio = parseFloat((sumFullRatio / full_ratioArray.length).toFixed(1));
          avgFullRatioStr = avgFullRatio + '%';

          sumPro = this.getArraySum(proArray);

          sumEng = this.getArraySum(engArray);

          sumDev = this.getArraySum(devArray);

          sumDum = this.getArraySum(dumArray);

          this.finalArray.push(new CstInfoRes(obj.cst_spec, obj.factory, obj.type, avgFullRatioStr, sumPro, sumEng, sumDev, sumDum));

      }

  }

  getReduceEmpty(data) {

      this.finalEmptyArray = [];
      const tempArray: Array<string> = [];

      for (const obj of data) {
          if (tempArray.length === 0) {
              tempArray.push(obj.cst_spec);
          } else {
              if (tempArray.indexOf(obj.cst_spec) < 0) {
                  tempArray.push(obj.cst_spec);
              }
          }
      }

      for (const cstSpec of tempArray) {
          const ttlArray = [];
          const oneqpArray = [];
          const moveArray = [];
          const instkArray = [];
          const dirtyArray = [];
          const outstkArray = [];
          const othersArray = [];
          for (const obj of data) {
              if (obj.cst_spec === cstSpec) {
                  ttlArray.push(obj.ttl);
                  oneqpArray.push(obj.oneqp);
                  moveArray.push(obj.move);
                  instkArray.push(obj.instk);
                  dirtyArray.push(obj.dirty);
                  outstkArray.push(obj.outstk);
                  othersArray.push(obj.others);
              }
          }

          const sumTtl = this.getArraySum(ttlArray);
          const sumOneqp = this.getArraySum(oneqpArray);
          const sumMove = this.getArraySum(moveArray);
          const sumInstk = this.getArraySum(instkArray);
          const sumDirty = this.getArraySum(dirtyArray);
          const sumOutstk = this.getArraySum(outstkArray);
          const sumOthers = this.getArraySum(othersArray);

          this.finalEmptyArray.push(new CstInfoResEmpty(cstSpec, sumTtl, sumOneqp, sumMove, sumInstk, sumDirty, sumOutstk, sumOthers));
      }

  }

  // number类型数组所有元素求和
  getArraySum(array: Array<number>): number {
      let sum = 0;
      for (const item of array) {
          sum += item;
      }
      return sum;
  }

  // 下钻左边三列的点击方法
  toSecondTable(event, cst_specS, factoryS, typeS, indexS) {

      if (event.target.innerHTML !== '-' && indexS !== 0) {
          this.SecondTableArray = [];

          let productiontypeArray = [];

          if (indexS === 1) {
              productiontypeArray = ['Production'];
          } else if (indexS === 2) {
              productiontypeArray = ['Engineer', 'Develop'];
          } else if (indexS === 3) {
              productiontypeArray = ['Dummy'];
          }

          if (this.predateStart === -1 && this.predateEnd === -1) {
              const option = {
                  params: {
                      cst_spec: cst_specS,
                      factory: factoryS,
                      type: typeS,
                      productiontypes: productiontypeArray
                  }
              };

              this.apiService.get('/sc/cstinfosecond', option).subscribe(
                  (res) => {
                      this.SecondTableArray = res;
                  }
              );
          } else {
              const option = {
                  params: {
                      cst_spec: cst_specS,
                      factory: factoryS,
                      type: typeS,
                      productiontypes: productiontypeArray,
                      start: this.predateStart,
                      end: this.predateEnd
                  }
              };

              this.apiService.get('/sc/cstinfosecondQ', option).subscribe(
                  (res) => {
                      this.SecondTableArray = res;
                  }
              );
          }

          this.firstView = false;
          this.secondView = true;
      }
  }

  // 下钻右边五列的方法，根据*ngFor的索引判断点击的是否是Dirty，并根据实际点击的列传不同的参数
  toSecondTableEmpty(event, cst_specE, indexE) {

      if (event.target.innerHTML !== '-' && indexE !== 0 && indexE !== 6) {
          this.SecondTableArray = [];



          if (this.predateStart === -1 && this.predateEnd === -1) {

              if (indexE === 4) {
                  const option = {
                      params: {
                          cst_spec: cst_specE
                      }
                  };
                  this.apiService.get('/sc/cstemptydirty', option).subscribe(
                      (res) => {
                          this.SecondTableArray = res;
                      }
                  );
              } else {
                  let transferstateE = '';
                  if (indexE === 1) {
                      transferstateE = 'ONEQP';
                  } else if (indexE === 2) {
                      transferstateE = 'MOVING';
                  } else if (indexE === 3) {
                      transferstateE = 'INSTK';
                  } else if (indexE === 5) {
                      transferstateE = 'OUTSTK';
                  }

                  const option = {
                      params: {
                          cst_spec: cst_specE,
                          transferstate: transferstateE
                      }
                  };

                  this.apiService.get('/sc/cstemptyclean', option).subscribe(
                      (res) => {
                          this.SecondTableArray = res;
                      }
                  );

              }

          } else {

              if (indexE === 4) {
                  const option = {
                      params: {
                          cst_spec: cst_specE,
                          start: this.predateStart,
                          end: this.predateEnd
                      }
                  };
                  this.apiService.get('/sc/cstemptydirtyQ', option).subscribe(
                      (res) => {
                          this.SecondTableArray = res;
                      }
                  );
              } else {
                  let transferstateE = '';
                  if (indexE === 1) {
                      transferstateE = 'ONEQP';
                  } else if (indexE === 2) {
                      transferstateE = 'MOVING';
                  } else if (indexE === 3) {
                      transferstateE = 'INSTK';
                  } else if (indexE === 5) {
                      transferstateE = 'OUTSTK';
                  }

                  const option = {
                      params: {
                          cst_spec: cst_specE,
                          transferstate: transferstateE,
                          start: this.predateStart,
                          end: this.predateEnd
                      }
                  };

                  this.apiService.get('/sc/cstemptycleanQ', option).subscribe(
                      (res) => {
                          this.SecondTableArray = res;
                      }
                  );

              }
          }



          this.firstView = false;
          this.secondView = true;
      }
  }

  showFirstTable() {
      this.firstView = true;
      this.secondView = false;
  }

  refresh() {
      this.predateStart = -1;
      this.predateEnd = -1;
      this.dateStart = null;
      this.dateEnd = null;
      this.ngOnInit();
  }

  //1.下面是 写remark 的地方
  updateRemark(item,id){
      let  datenamestr = this.getTimeStr(new Date());
      this.remarks= [this.ACNRemark,this.FCWRemark,this.CCNRemark];
      let remarkstr = this.remarks[id];
      const option={
        params:{
          datename : datenamestr,
          report : 'CST info',
          item : item,
          remark : remarkstr
        }
      };
      const url = '/keyinremartk';
      this.apiService.get(url,option).subscribe(
        (res)=>{
          //这里面其实什么都不用写
        },
        (error)=>{console.log(error)}
      );
  }
  //2.下面是一个处理日期类型的字符串的操作
  getTimeStr(date : Date):string{
      let datenamestr = '';
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let day = date.getDate();

      datenamestr = year+'/'+month+'/'+day;
      return datenamestr;
  }

  //3. 下面是一个从数据库中读取值得操作
  queryRemark(){
      let  datenamestr = this.getTimeStr(new Date());
      const option={
        params:{
          datename : datenamestr,
          report : 'CST info',
        }
      };
      const url = '/queryRemark';
      this.apiService.get(url,option).subscribe(
        (res)=>{
          if(Array.isArray(res)){
            for(const object of res){
              let item = object['item'];
              let remark = object['remark'];
             switch(item){
               case 'ACN' : {this.ACNRemark = remark;break;}
               case 'FCW' : {this.FCWRemark = remark;break;}
               case 'CCN' : {this.CCNRemark = remark;break;}
             }
            }
          }
        },
        (error)=>{console.log(error)}
      );
    }

}
