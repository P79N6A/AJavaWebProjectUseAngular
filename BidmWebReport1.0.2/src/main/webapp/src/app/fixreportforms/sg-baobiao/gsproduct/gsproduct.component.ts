import { Component, OnInit } from '@angular/core';
import { ProductionData } from './model/productionData';
import { ProductionDataMod } from './model/productionDataMod';
import { ProductionCellInData } from './model/productionCellIn';
import { ProductionCellCutData, TimeHour } from './model/productionCellCut';
import { SelectItem, Message } from 'primeng/api';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ApiService } from 'app/common/service/api/api.service';

@Component({
  selector: 'app-gsproduct',
  templateUrl: './gsproduct.component.html',
  styleUrls: ['./gsproduct.component.css']
})
export class GsproductComponent implements OnInit {

  ///////////////////////

  option;
  timeArray;
  // array和cf对象数组
  dataArrayIn: Array<ProductionData> = [];
  dataArrayOut: Array<ProductionData> = [];
  // module每一行数据对象的数组
  dataMdlIn: Array<ProductionDataMod> = [];
  dataAssyIn: Array<ProductionDataMod> = [];
  dataPacking: Array<ProductionDataMod> = [];
  // cell不分线别的每一行数据对象数组
  dataCellIn: Array<ProductionCellInData> = [];
  dataCellAssyIn: Array<ProductionCellInData> = [];
  dataCell120K: Array<ProductionCellInData> = [];
  // cell分线别的每一行数据对象数组
  dataCutIn: Array<ProductionCellCutData> = [];
  dataCellOut: Array<ProductionCellCutData> = [];
  data2CutIn: Array<ProductionCellCutData> = [];
  data2CutOut: Array<ProductionCellCutData> = [];

  backupRes = [];

  arrayInTtlPlan;
  arrayInTtlAct;
  arrayInTtlBal;
  arrayOutTtlPlan;
  arrayOutTtlAct;
  arrayOutTtlBal;

  mdlInTtlPlan;
  mdlInTtlAct;
  mdlInTtlBal;
  assyInTtlPlan;
  assyInTtlAct;
  assyInTtlBal;
  PackingInTtlPlan;
  PackingInTtlAct;
  PackingInTtlBal;

  cellInTtlPlan;
  cellInTtlAct;
  cellInTtlBal;
  cellAssyInTtlPlan;
  cellAssyInTtlAct;
  cellAssyInTtlBal;
  cell120KTtlPlan;
  cell120KTtlAct;
  cell120KTtlBal;
  cellCutInTtlPlan;
  cellCutInTtlAct;
  cellCutInTtlBal;
  cellOutTtlPlan;
  cellOutTtlAct;
  cellOutTtlBal;
  cell2CutInTtlPlan;
  cell2CutInTtlAct;
  cell2CutInTtlBal;
  cell2CutOutTtlPlan;
  cell2CutOutTtlAct;
  cell2CutOutTtlBal;


  ifQuery = false; // 判断是否执行过query方法
  showArrayCF: boolean;
  showM1M2: boolean;
  showCell: boolean;
  showPacking: boolean;

  factory; // 下拉框绑定元素
  factory1; // 表头中的绑定元素
  line = null;
  cell = null;
  module_factory1; // module表头元素
  module_factory2; // module表头元素
  nowDay;
  nowTime: Date;
  dateName: Date;
  department: SelectItem[]; // 下拉框元素
  departmentLine: SelectItem[];
  departmentCell: SelectItem[];

  msgs: Message[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.timeArray = ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
      '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06', 'TTL', 'Remark'];
    this.department = [
      { label: 'ARRAY', value: 'array' },
      { label: 'CF', value: 'cf' },
      { label: 'CELL', value: 'cell' },
      { label: 'M1', value: 'm1' },
      { label: 'M2', value: 'm2' }
    ];
    this.setOption();
    this.showArrayCF = true;
    this.showM1M2 = false;
    this.showCell = false;
    this.apiService.get('/sc/productioninfo', this.option).subscribe(
      (res) => {
        this.factory1 = 'Array';
        this.setTtl(res);
        this.setDataArray(res);
      }
    );
  }

  setOption() {
    this.nowTime = new Date();
    if (this.nowTime.getHours() < 7) {
      this.nowDay = new Date(this.nowTime.getTime() - 24 * 60 * 60 * 1000).toLocaleDateString();
      this.option = {
        params: {
          dayControl: '-1'
        }
      };
    } else {
      this.nowDay = this.nowTime.toLocaleDateString();
      this.option = {
        params: {
          dayControl: ''
        }
      };
    }
  }

  setOptionQ() {
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

  setTimeData(obj, productionData) {
    switch (obj.hour) {
      case '07':
        if (obj.planqty !== null) {
          productionData.plan7 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act7 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal7 = obj.balqty.toString();
        }
        break;
      case '08':
        if (obj.planqty !== null) {
          productionData.plan8 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act8 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal8 = obj.balqty.toString();
        }
        break;
      case '09':
        if (obj.planqty !== null) {
          productionData.plan9 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act9 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal9 = obj.balqty.toString();
        }
        break;
      case '10':
        if (obj.planqty !== null) {
          productionData.plan10 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act10 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal10 = obj.balqty.toString();
        }
        break;
      case '11':
        if (obj.planqty !== null) {
          productionData.plan11 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act11 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal11 = obj.balqty.toString();
        }
        break;
      case '12':
        if (obj.planqty !== null) {
          productionData.plan12 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act12 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal12 = obj.balqty.toString();
        }
        break;
      case '13':
        if (obj.planqty !== null) {
          productionData.plan13 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act13 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal13 = obj.balqty.toString();
        }
        break;
      case '14':
        if (obj.planqty !== null) {
          productionData.plan14 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act14 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal14 = obj.balqty.toString();
        }
        break;
      case '15':
        if (obj.planqty !== null) {
          productionData.plan15 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act15 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal15 = obj.balqty.toString();
        }
        break;
      case '16':
        if (obj.planqty !== null) {
          productionData.plan16 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act16 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal16 = obj.balqty.toString();
        }
        break;
      case '17':
        if (obj.planqty !== null) {
          productionData.plan17 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act17 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal17 = obj.balqty.toString();
        }
        break;
      case '18':
        if (obj.planqty !== null) {
          productionData.plan18 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act18 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal18 = obj.balqty.toString();
        }
        break;
      case '19':
        if (obj.planqty !== null) {
          productionData.plan19 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act19 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal19 = obj.balqty.toString();
        }
        break;
      case '20':
        if (obj.planqty !== null) {
          productionData.plan20 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act20 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal20 = obj.balqty.toString();
        }
        break;
      case '21':
        if (obj.planqty !== null) {
          productionData.plan21 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act21 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal21 = obj.balqty.toString();
        }
        break;
      case '22':
        if (obj.planqty !== null) {
          productionData.plan22 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act22 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal22 = obj.balqty.toString();
        }
        break;
      case '23':
        if (obj.planqty !== null) {
          productionData.plan23 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act23 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal23 = obj.balqty.toString();
        }
        break;
      case '00':
        if (obj.planqty !== null) {
          productionData.plan0 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act0 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal0 = obj.balqty.toString();
        }
        break;
      case '01':
        if (obj.planqty !== null) {
          productionData.plan1 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act1 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal1 = obj.balqty.toString();
        }
        break;
      case '02':
        if (obj.planqty !== null) {
          productionData.plan2 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act2 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal2 = obj.balqty.toString();
        }
        break;
      case '03':
        if (obj.planqty !== null) {
          productionData.plan3 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act3 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal3 = obj.balqty.toString();
        }
        break;
      case '04':
        if (obj.planqty !== null) {
          productionData.plan4 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act4 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal4 = obj.balqty.toString();
        }
        break;
      case '05':
        if (obj.planqty !== null) {
          productionData.plan5 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act5 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal5 = obj.balqty.toString();
        }
        break;
      case '06':
        if (obj.planqty !== null) {
          productionData.plan6 = obj.planqty.toString();
        }
        if (obj.qty !== null) {
          productionData.act6 = obj.qty.toString();
        }
        if (obj.balqty !== null) {
          productionData.bal6 = obj.balqty.toString();
        }
        break;
    }
  }

  setIimeDataXianTi(obj, propPlan, propBal) {
    switch (obj.hour) {
      case '07':
        if (obj.planqty !== null) {
          propPlan['7'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['7'] = obj.balqty.toString();
        }
        break;
      case '08':
        if (obj.planqty !== null) {
          propPlan['8'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['8'] = obj.balqty.toString();
        }
        break;
      case '09':
        if (obj.planqty !== null) {
          propPlan['9'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['9'] = obj.balqty.toString();
        }
        break;
      case '10':
        if (obj.planqty !== null) {
          propPlan['10'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['10'] = obj.balqty.toString();
        }
        break;
      case '11':
        if (obj.planqty !== null) {
          propPlan['11'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['11'] = obj.balqty.toString();
        }
        break;
      case '12':
        if (obj.planqty !== null) {
          propPlan['12'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['12'] = obj.balqty.toString();
        }
        break;
      case '13':
        if (obj.planqty !== null) {
          propPlan['13'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['13'] = obj.balqty.toString();
        }
        break;
      case '14':
        if (obj.planqty !== null) {
          propPlan['14'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['14'] = obj.balqty.toString();
        }
        break;
      case '15':
        if (obj.planqty !== null) {
          propPlan['15'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['15'] = obj.balqty.toString();
        }
        break;
      case '16':
        if (obj.planqty !== null) {
          propPlan['16'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['16'] = obj.balqty.toString();
        }
        break;
      case '17':
        if (obj.planqty !== null) {
          propPlan['17'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['17'] = obj.balqty.toString();
        }
        break;
      case '18':
        if (obj.planqty !== null) {
          propPlan['18'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['18'] = obj.balqty.toString();
        }
        break;
      case '19':
        if (obj.planqty !== null) {
          propPlan['19'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['19'] = obj.balqty.toString();
        }
        break;
      case '20':
        if (obj.planqty !== null) {
          propPlan['20'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['20'] = obj.balqty.toString();
        }
        break;
      case '21':
        if (obj.planqty !== null) {
          propPlan['21'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['21'] = obj.balqty.toString();
        }
        break;
      case '22':
        if (obj.planqty !== null) {
          propPlan['22'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['22'] = obj.balqty.toString();
        }
        break;
      case '23':
        if (obj.planqty !== null) {
          propPlan['23'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['23'] = obj.balqty.toString();
        }
        break;
      case '00':
        if (obj.planqty !== null) {
          propPlan['0'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['0'] = obj.balqty.toString();
        }
        break;
      case '01':
        if (obj.planqty !== null) {
          propPlan['1'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['1'] = obj.balqty.toString();
        }
        break;
      case '02':
        if (obj.planqty !== null) {
          propPlan['2'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['2'] = obj.balqty.toString();
        }
        break;
      case '03':
        if (obj.planqty !== null) {
          propPlan['3'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['3'] = obj.balqty.toString();
        }
        break;
      case '04':
        if (obj.planqty !== null) {
          propPlan['4'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['4'] = obj.balqty.toString();
        }
        break;
      case '05':
        if (obj.planqty !== null) {
          propPlan['5'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['5'] = obj.balqty.toString();
        }
        break;
      case '06':
        if (obj.planqty !== null) {
          propPlan['6'] = obj.planqty.toString();
        }
        if (obj.balqty !== null) {
          propBal['6'] = obj.balqty.toString();
        }
        break;
    }
  }

  getSum(nowHour, productionData) {
    if (nowHour >= 7 || nowHour <= 6) {
      if (productionData.plan7 !== '-') {
        productionData.planTtl += parseInt(productionData.plan7, 10);
      }
      if (nowHour >= 8 || nowHour <= 6) {
        if (productionData.plan8 !== '-') {
          productionData.planTtl += parseInt(productionData.plan8, 10);
        }
        if (nowHour >= 9 || nowHour <= 6) {
          if (productionData.plan9 !== '-') {
            productionData.planTtl += parseInt(productionData.plan9, 10);
          }
          if (nowHour >= 10 || nowHour <= 6) {
            if (productionData.plan10 !== '-') {
              productionData.planTtl += parseInt(productionData.plan10, 10);
            }
            if (nowHour >= 11 || nowHour <= 6) {
              if (productionData.plan11 !== '-') {
                productionData.planTtl += parseInt(productionData.plan11, 10);
              }
              if (nowHour >= 12 || nowHour <= 6) {
                if (productionData.plan12 !== '-') {
                  productionData.planTtl += parseInt(productionData.plan12, 10);
                }
                if (nowHour >= 13 || nowHour <= 6) {
                  if (productionData.plan13 !== '-') {
                    productionData.planTtl += parseInt(productionData.plan13, 10);
                  }
                  if (nowHour >= 14 || nowHour <= 6) {
                    if (productionData.plan14 !== '-') {
                      productionData.planTtl += parseInt(productionData.plan14, 10);
                    }
                    if (nowHour >= 15 || nowHour <= 6) {
                      if (productionData.plan15 !== '-') {
                        productionData.planTtl += parseInt(productionData.plan15, 10);
                      }
                      if (nowHour >= 16 || nowHour <= 6) {
                        if (productionData.plan16 !== '-') {
                          productionData.planTtl += parseInt(productionData.plan16, 10);
                        }
                        if (nowHour >= 17 || nowHour <= 6) {
                          if (productionData.plan17 !== '-') {
                            productionData.planTtl += parseInt(productionData.plan17, 10);
                          }
                          if (nowHour >= 18 || nowHour <= 6) {
                            if (productionData.plan18 !== '-') {
                              productionData.planTtl += parseInt(productionData.plan18, 10);
                            }
                            if (nowHour >= 19 || nowHour <= 6) {
                              if (productionData.plan19 !== '-') {
                                productionData.planTtl += parseInt(productionData.plan19, 10);
                              }
                              if (nowHour >= 20 || nowHour <= 6) {
                                if (productionData.plan20 !== '-') {
                                  productionData.planTtl += parseInt(productionData.plan20, 10);
                                }
                                if (nowHour >= 21 || nowHour <= 6) {
                                  if (productionData.plan21 !== '-') {
                                    productionData.planTtl += parseInt(productionData.plan21, 10);
                                  }
                                  if (nowHour >= 22 || nowHour <= 6) {
                                    if (productionData.plan22 !== '-') {
                                      productionData.planTtl += parseInt(productionData.plan22, 10);
                                    }
                                    if (nowHour >= 23 || nowHour <= 6) {
                                      if (productionData.plan23 !== '-') {
                                        productionData.planTtl += parseInt(productionData.plan23, 10);
                                      }
                                      if (nowHour >= 0 && nowHour <= 6) {
                                        if (productionData.plan0 !== '-') {
                                          productionData.planTtl += parseInt(productionData.plan0, 10);
                                        }
                                        if (nowHour >= 1 && nowHour <= 6) {
                                          if (productionData.plan1 !== '-') {
                                            productionData.planTtl += parseInt(productionData.plan1, 10);
                                          }
                                          if (nowHour >= 2 && nowHour <= 6) {
                                            if (productionData.plan2 !== '-') {
                                              productionData.planTtl += parseInt(productionData.plan2, 10);
                                            }
                                            if (nowHour >= 3 && nowHour <= 6) {
                                              if (productionData.plan3 !== '-') {
                                                productionData.planTtl += parseInt(productionData.plan3, 10);
                                              }
                                              if (nowHour >= 4 && nowHour <= 6) {
                                                if (productionData.plan4 !== '-') {
                                                  productionData.planTtl += parseInt(productionData.plan4, 10);
                                                }
                                                if (nowHour >= 5 && nowHour <= 6) {
                                                  if (productionData.plan5 !== '-') {
                                                    productionData.planTtl += parseInt(productionData.plan5, 10);
                                                  }
                                                  if (nowHour === 6) {
                                                    if (productionData.plan6 !== '-') {
                                                      productionData.planTtl += parseInt(productionData.plan6, 10);
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  getSumCell(nowHour, productionData) {
    if (nowHour >= 7 || nowHour <= 6) {
      if (productionData['7'] !== '-') {
        productionData.ttl += parseInt(productionData['7'], 10);
      }
      if (nowHour >= 8 || nowHour <= 6) {
        if (productionData['8'] !== '-') {
          productionData.ttl += parseInt(productionData['8'], 10);
        }
        if (nowHour >= 9 || nowHour <= 6) {
          if (productionData['9'] !== '-') {
            productionData.ttl += parseInt(productionData['9'], 10);
          }
          if (nowHour >= 10 || nowHour <= 6) {
            if (productionData['10'] !== '-') {
              productionData.ttl += parseInt(productionData['10'], 10);
            }
            if (nowHour >= 11 || nowHour <= 6) {
              if (productionData['11'] !== '-') {
                productionData.ttl += parseInt(productionData['11'], 10);
              }
              if (nowHour >= 12 || nowHour <= 6) {
                if (productionData['12'] !== '-') {
                  productionData.ttl += parseInt(productionData['12'], 10);
                }
                if (nowHour >= 13 || nowHour <= 6) {
                  if (productionData['13'] !== '-') {
                    productionData.ttl += parseInt(productionData['13'], 10);
                  }
                  if (nowHour >= 14 || nowHour <= 6) {
                    if (productionData['14'] !== '-') {
                      productionData.ttl += parseInt(productionData['14'], 10);
                    }
                    if (nowHour >= 15 || nowHour <= 6) {
                      if (productionData['15'] !== '-') {
                        productionData.ttl += parseInt(productionData['15'], 10);
                      }
                      if (nowHour >= 16 || nowHour <= 6) {
                        if (productionData['16'] !== '-') {
                          productionData.ttl += parseInt(productionData['16'], 10);
                        }
                        if (nowHour >= 17 || nowHour <= 6) {
                          if (productionData['17'] !== '-') {
                            productionData.ttl += parseInt(productionData['17'], 10);
                          }
                          if (nowHour >= 18 || nowHour <= 6) {
                            if (productionData['18'] !== '-') {
                              productionData.ttl += parseInt(productionData['18'], 10);
                            }
                            if (nowHour >= 19 || nowHour <= 6) {
                              if (productionData['19'] !== '-') {
                                productionData.ttl += parseInt(productionData['19'], 10);
                              }
                              if (nowHour >= 20 || nowHour <= 6) {
                                if (productionData['20'] !== '-') {
                                  productionData.ttl += parseInt(productionData['20'], 10);
                                }
                                if (nowHour >= 21 || nowHour <= 6) {
                                  if (productionData['21'] !== '-') {
                                    productionData.ttl += parseInt(productionData['21'], 10);
                                  }
                                  if (nowHour >= 22 || nowHour <= 6) {
                                    if (productionData['22'] !== '-') {
                                      productionData.ttl += parseInt(productionData['22'], 10);
                                    }
                                    if (nowHour >= 23 || nowHour <= 6) {
                                      if (productionData['23'] !== '-') {
                                        productionData.ttl += parseInt(productionData['23'], 10);
                                      }
                                      if (nowHour >= 0 && nowHour <= 6) {
                                        if (productionData['0'] !== '-') {
                                          productionData.ttl += parseInt(productionData['0'], 10);
                                        }
                                        if (nowHour >= 1 && nowHour <= 6) {
                                          if (productionData['1'] !== '-') {
                                            productionData.ttl += parseInt(productionData['1'], 10);
                                          }
                                          if (nowHour >= 2 && nowHour <= 6) {
                                            if (productionData['2'] !== '-') {
                                              productionData.ttl += parseInt(productionData['2'], 10);
                                            }
                                            if (nowHour >= 3 && nowHour <= 6) {
                                              if (productionData['3'] !== '-') {
                                                productionData.ttl += parseInt(productionData['3'], 10);
                                              }
                                              if (nowHour >= 4 && nowHour <= 6) {
                                                if (productionData['4'] !== '-') {
                                                  productionData.ttl += parseInt(productionData['4'], 10);
                                                }
                                                if (nowHour >= 5 && nowHour <= 6) {
                                                  if (productionData['5'] !== '-') {
                                                    productionData.ttl += parseInt(productionData['5'], 10);
                                                  }
                                                  if (nowHour === 6) {
                                                    if (productionData['6'] !== '-') {
                                                      productionData.ttl += parseInt(productionData['6'], 10);
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  getSumAll(productionData) {
    if (productionData.plan7 !== '-') {
      productionData.planTtl += parseInt(productionData.plan7, 10);
    }
    if (productionData.plan8 !== '-') {
      productionData.planTtl += parseInt(productionData.plan8, 10);
    }
    if (productionData.plan9 !== '-') {
      productionData.planTtl += parseInt(productionData.plan9, 10);
    }
    if (productionData.plan10 !== '-') {
      productionData.planTtl += parseInt(productionData.plan10, 10);
    }
    if (productionData.plan11 !== '-') {
      productionData.planTtl += parseInt(productionData.plan11, 10);
    }
    if (productionData.plan12 !== '-') {
      productionData.planTtl += parseInt(productionData.plan12, 10);
    }
    if (productionData.plan13 !== '-') {
      productionData.planTtl += parseInt(productionData.plan13, 10);
    }
    if (productionData.plan14 !== '-') {
      productionData.planTtl += parseInt(productionData.plan14, 10);
    }
    if (productionData.plan15 !== '-') {
      productionData.planTtl += parseInt(productionData.plan15, 10);
    }
    if (productionData.plan16 !== '-') {
      productionData.planTtl += parseInt(productionData.plan16, 10);
    }
    if (productionData.plan17 !== '-') {
      productionData.planTtl += parseInt(productionData.plan17, 10);
    }
    if (productionData.plan18 !== '-') {
      productionData.planTtl += parseInt(productionData.plan18, 10);
    }
    if (productionData.plan19 !== '-') {
      productionData.planTtl += parseInt(productionData.plan19, 10);
    }
    if (productionData.plan20 !== '-') {
      productionData.planTtl += parseInt(productionData.plan20, 10);
    }
    if (productionData.plan21 !== '-') {
      productionData.planTtl += parseInt(productionData.plan21, 10);
    }
    if (productionData.plan22 !== '-') {
      productionData.planTtl += parseInt(productionData.plan22, 10);
    }
    if (productionData.plan23 !== '-') {
      productionData.planTtl += parseInt(productionData.plan23, 10);
    }
    if (productionData.plan0 !== '-') {
      productionData.planTtl += parseInt(productionData.plan0, 10);
    }
    if (productionData.plan1 !== '-') {
      productionData.planTtl += parseInt(productionData.plan1, 10);
    }
    if (productionData.plan2 !== '-') {
      productionData.planTtl += parseInt(productionData.plan2, 10);
    }
    if (productionData.plan3 !== '-') {
      productionData.planTtl += parseInt(productionData.plan3, 10);
    }
    if (productionData.plan4 !== '-') {
      productionData.planTtl += parseInt(productionData.plan4, 10);
    }
    if (productionData.plan5 !== '-') {
      productionData.planTtl += parseInt(productionData.plan5, 10);
    }
    if (productionData.plan6 !== '-') {
      productionData.planTtl += parseInt(productionData.plan6, 10);
    }
  }

  getSumCellAll(productionData) {
    if (productionData['7'] !== '-') {
      productionData.ttl += parseInt(productionData['7'], 10);
    }
    if (productionData['8'] !== '-') {
      productionData.ttl += parseInt(productionData['8'], 10);
    }
    if (productionData['9'] !== '-') {
      productionData.ttl += parseInt(productionData['9'], 10);
    }
    if (productionData['10'] !== '-') {
      productionData.ttl += parseInt(productionData['10'], 10);
    }
    if (productionData['11'] !== '-') {
      productionData.ttl += parseInt(productionData['11'], 10);
    }
    if (productionData['12'] !== '-') {
      productionData.ttl += parseInt(productionData['12'], 10);
    }
    if (productionData['13'] !== '-') {
      productionData.ttl += parseInt(productionData['13'], 10);
    }
    if (productionData['14'] !== '-') {
      productionData.ttl += parseInt(productionData['14'], 10);
    }
    if (productionData['15'] !== '-') {
      productionData.ttl += parseInt(productionData['15'], 10);
    }
    if (productionData['16'] !== '-') {
      productionData.ttl += parseInt(productionData['16'], 10);
    }
    if (productionData['17'] !== '-') {
      productionData.ttl += parseInt(productionData['17'], 10);
    }
    if (productionData['18'] !== '-') {
      productionData.ttl += parseInt(productionData['18'], 10);
    }
    if (productionData['19'] !== '-') {
      productionData.ttl += parseInt(productionData['19'], 10);
    }
    if (productionData['20'] !== '-') {
      productionData.ttl += parseInt(productionData['20'], 10);
    }
    if (productionData['21'] !== '-') {
      productionData.ttl += parseInt(productionData['21'], 10);
    }
    if (productionData['22'] !== '-') {
      productionData.ttl += parseInt(productionData['22'], 10);
    }
    if (productionData['23'] !== '-') {
      productionData.ttl += parseInt(productionData['23'], 10);
    }
    if (productionData['0'] !== '-') {
      productionData.ttl += parseInt(productionData['0'], 10);
    }
    if (productionData['1'] !== '-') {
      productionData.ttl += parseInt(productionData['1'], 10);
    }
    if (productionData['2'] !== '-') {
      productionData.ttl += parseInt(productionData['2'], 10);
    }
    if (productionData['3'] !== '-') {
      productionData.ttl += parseInt(productionData['3'], 10);
    }
    if (productionData['4'] !== '-') {
      productionData.ttl += parseInt(productionData['4'], 10);
    }
    if (productionData['5'] !== '-') {
      productionData.ttl += parseInt(productionData['5'], 10);
    }
    if (productionData['6'] !== '-') {
      productionData.ttl += parseInt(productionData['6'], 10);
    }
  }

  getRowTtl(productionData) {
    const nowTime = new Date();
    const nowHour = nowTime.getHours();
    const nowDay = '' + nowTime.getFullYear() + nowTime.getMonth() + nowTime.getDate();
    if (!this.ifQuery) {
      this.getSum(nowHour, productionData);
    } else {
      const selectDay = '' + this.dateName.getFullYear() + this.dateName.getMonth() + this.dateName.getDate();
      if (nowHour >= 7) {
        if (selectDay === nowDay) {
          this.getSum(nowHour, productionData);
        } else {
          this.getSumAll(productionData);
        }
      } else {
        const nowTimePre = new Date(nowTime.getTime() - 24 * 60 * 60 * 1000);
        const nowDayPre = '' + nowTimePre.getFullYear() + nowTimePre.getMonth() + nowTimePre.getDate();
        if (selectDay === nowDayPre) {
          this.getSum(nowHour, productionData);
        } else {
          this.getSumAll(productionData);
        }
      }
    }
    if (productionData.act7 !== '-') {
      productionData.actTtl += parseInt(productionData.act7, 10);
    }
    if (productionData.act8 !== '-') {
      productionData.actTtl += parseInt(productionData.act8, 10);
    }
    if (productionData.act9 !== '-') {
      productionData.actTtl += parseInt(productionData.act9, 10);
    }
    if (productionData.act10 !== '-') {
      productionData.actTtl += parseInt(productionData.act10, 10);
    }
    if (productionData.act11 !== '-') {
      productionData.actTtl += parseInt(productionData.act11, 10);
    }
    if (productionData.act12 !== '-') {
      productionData.actTtl += parseInt(productionData.act12, 10);
    }
    if (productionData.act13 !== '-') {
      productionData.actTtl += parseInt(productionData.act13, 10);
    }
    if (productionData.act14 !== '-') {
      productionData.actTtl += parseInt(productionData.act14, 10);
    }
    if (productionData.act15 !== '-') {
      productionData.actTtl += parseInt(productionData.act15, 10);
    }
    if (productionData.act16 !== '-') {
      productionData.actTtl += parseInt(productionData.act16, 10);
    }
    if (productionData.act17 !== '-') {
      productionData.actTtl += parseInt(productionData.act17, 10);
    }
    if (productionData.act18 !== '-') {
      productionData.actTtl += parseInt(productionData.act18, 10);
    }
    if (productionData.act19 !== '-') {
      productionData.actTtl += parseInt(productionData.act19, 10);
    }
    if (productionData.act20 !== '-') {
      productionData.actTtl += parseInt(productionData.act20, 10);
    }
    if (productionData.act21 !== '-') {
      productionData.actTtl += parseInt(productionData.act21, 10);
    }
    if (productionData.act22 !== '-') {
      productionData.actTtl += parseInt(productionData.act22, 10);
    }
    if (productionData.act23 !== '-') {
      productionData.actTtl += parseInt(productionData.act23, 10);
    }
    if (productionData.act0 !== '-') {
      productionData.actTtl += parseInt(productionData.act0, 10);
    }
    if (productionData.act1 !== '-') {
      productionData.actTtl += parseInt(productionData.act1, 10);
    }
    if (productionData.act2 !== '-') {
      productionData.actTtl += parseInt(productionData.act2, 10);
    }
    if (productionData.act3 !== '-') {
      productionData.actTtl += parseInt(productionData.act3, 10);
    }
    if (productionData.act4 !== '-') {
      productionData.actTtl += parseInt(productionData.act4, 10);
    }
    if (productionData.act5 !== '-') {
      productionData.actTtl += parseInt(productionData.act5, 10);
    }
    if (productionData.act6 !== '-') {
      productionData.actTtl += parseInt(productionData.act6, 10);
    }

    if (productionData.bal7 !== '-') {
      productionData.balTtl += parseInt(productionData.bal7, 10);
    }
    if (productionData.bal8 !== '-') {
      productionData.balTtl += parseInt(productionData.bal8, 10);
    }
    if (productionData.bal9 !== '-') {
      productionData.balTtl += parseInt(productionData.bal9, 10);
    }
    if (productionData.bal10 !== '-') {
      productionData.balTtl += parseInt(productionData.bal10, 10);
    }
    if (productionData.bal11 !== '-') {
      productionData.balTtl += parseInt(productionData.bal11, 10);
    }
    if (productionData.bal12 !== '-') {
      productionData.balTtl += parseInt(productionData.bal12, 10);
    }
    if (productionData.bal13 !== '-') {
      productionData.balTtl += parseInt(productionData.bal13, 10);
    }
    if (productionData.bal14 !== '-') {
      productionData.balTtl += parseInt(productionData.bal14, 10);
    }
    if (productionData.bal15 !== '-') {
      productionData.balTtl += parseInt(productionData.bal15, 10);
    }
    if (productionData.bal16 !== '-') {
      productionData.balTtl += parseInt(productionData.bal16, 10);
    }
    if (productionData.bal17 !== '-') {
      productionData.balTtl += parseInt(productionData.bal17, 10);
    }
    if (productionData.bal18 !== '-') {
      productionData.balTtl += parseInt(productionData.bal18, 10);
    }
    if (productionData.bal19 !== '-') {
      productionData.balTtl += parseInt(productionData.bal19, 10);
    }
    if (productionData.bal20 !== '-') {
      productionData.balTtl += parseInt(productionData.bal20, 10);
    }
    if (productionData.bal21 !== '-') {
      productionData.balTtl += parseInt(productionData.bal21, 10);
    }
    if (productionData.bal22 !== '-') {
      productionData.balTtl += parseInt(productionData.bal22, 10);
    }
    if (productionData.bal23 !== '-') {
      productionData.balTtl += parseInt(productionData.bal23, 10);
    }
    if (productionData.bal0 !== '-') {
      productionData.balTtl += parseInt(productionData.bal0, 10);
    }
    if (productionData.bal1 !== '-') {
      productionData.balTtl += parseInt(productionData.bal1, 10);
    }
    if (productionData.bal2 !== '-') {
      productionData.balTtl += parseInt(productionData.bal2, 10);
    }
    if (productionData.bal3 !== '-') {
      productionData.balTtl += parseInt(productionData.bal3, 10);
    }
    if (productionData.bal4 !== '-') {
      productionData.balTtl += parseInt(productionData.bal4, 10);
    }
    if (productionData.bal5 !== '-') {
      productionData.balTtl += parseInt(productionData.bal5, 10);
    }
    if (productionData.bal6 !== '-') {
      productionData.balTtl += parseInt(productionData.bal6, 10);
    }
  }


  getDataPlanRowTtl(productionData) {
    const nowTime = new Date();
    const nowHour = nowTime.getHours();
    const nowDay = '' + nowTime.getFullYear() + nowTime.getMonth() + nowTime.getDate();
    if (!this.ifQuery) {
      this.getSumCell(nowHour, productionData);
    } else {
      const selectDay = '' + this.dateName.getFullYear() + this.dateName.getMonth() + this.dateName.getDate();
      if (nowHour >= 7) {
        if (selectDay === nowDay) {
          this.getSumCell(nowHour, productionData);
        } else {
          this.getSumCellAll(productionData);
        }
      } else {
        const nowTimePre = new Date(nowTime.getTime() - 24 * 60 * 60 * 1000);
        const nowDayPre = '' + nowTimePre.getFullYear() + nowTimePre.getMonth() + nowTimePre.getDate();
        if (selectDay === nowDayPre) {
          this.getSumCell(nowHour, productionData);
        } else {
          this.getSumCellAll(productionData);
        }
      }
    }
  }

  setDataArray(data) {
    this.dataArrayIn = [];
    this.dataArrayOut = [];
    const arrayIn = [];
    const arrayOut = [];
    for (const obj of data) {
      if (obj.item.substr(-2) === 'In') {
        arrayIn.push(obj);
      } else {
        arrayOut.push(obj);
      }
    }

    // 为dataArrayIn赋值，根据arrayproductspecname去重，每有一个arrayproductspecname创建一个对象放进数组中
    this.setReduceDataArray(arrayIn, this.dataArrayIn);
    this.setReduceDataArray(arrayOut, this.dataArrayOut);

  }

  setDataMod(data) {
    this.dataMdlIn = [];
    this.dataAssyIn = [];
    this.dataPacking = [];
    const mdlIn = [];
    const assyIn = [];
    const packing = [];
    for (const obj of data) {
      if (obj.item === 'M1 In' || obj.item === 'M2 In COG') {
        mdlIn.push(obj);
      } else if (obj.item === 'M1 Assy' || obj.item === 'M2 In COF') {
        assyIn.push(obj);
      } else {
        packing.push(obj);
      }
    }

    this.setReducteDataMod(mdlIn, this.dataMdlIn);
    this.setReducteDataMod(assyIn, this.dataAssyIn);
    this.setReducteDataMod(packing, this.dataPacking);
  }

  setDataCell(data) {
    this.dataCellIn = [];
    this.dataCellAssyIn = [];
    this.dataCell120K = [];
    const cellIn = [];
    const cellAssyIn = [];
    const cell120K = [];
    for (const obj of data) {
      if (obj.item === 'Cell In') {
        cellIn.push(obj);
      } else if (obj.item === 'Cell Assy') {
        cellAssyIn.push(obj);
      } else if (obj.item === 'Cell 120K') {
        cell120K.push(obj);
      }
    }

    this.setReducteDataCell(cellIn, this.dataCellIn);
    this.setReducteDataCell(cellAssyIn, this.dataCellAssyIn);
    this.setReducteDataCell(cell120K, this.dataCell120K);
  }

  setDataCellChangeXianTi(data) {
    this.dataCutIn = [];
    this.dataCellOut = [];
    this.data2CutIn = [];
    this.data2CutOut = [];
    const cutIn = [];
    const cellOut = [];
    const cut2In = [];
    const cut2Out = [];
    for (const obj of data) {
      if (obj.item === 'Cell Cut') {
        cutIn.push(obj);
      } else if (obj.item === 'Cell Out') {
        cellOut.push(obj);
      } else if (obj.item === '2Cut In') {
        cut2In.push(obj);
      } else if (obj.item === '2Cut Out') {
        cut2Out.push(obj);
      }
    }

    this.setReducteDataCellChangeXianTi(cutIn, this.dataCutIn);
    this.setReducteDataCellChangeXianTi(cellOut, this.dataCellOut);
    this.setReducteDataCellChangeXianTi(cut2In, this.data2CutIn);
    this.setReducteDataCellChangeXianTi(cut2Out, this.data2CutOut);
  }

  getIndex24PlanActAndBal(act, bal, i) {
    act[24] += act[i];
    bal[24] += bal[i];
  }

  // 求array和cf的ttl的plan act 和bal 数组
  setTtl(data) {
    this.arrayInTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.arrayInTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.arrayInTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.arrayOutTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.arrayOutTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.arrayOutTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (const obj of data) {
      if (obj.item.substr(-2) === 'In') {
        this.getDataWithTime(obj, this.arrayInTtlPlan, this.arrayInTtlAct, this.arrayInTtlBal);
        this.arrayInTtlPlan[24] += obj.actplan;
      } else {
        this.getDataWithTime(obj, this.arrayOutTtlPlan, this.arrayOutTtlAct, this.arrayOutTtlBal);
        this.arrayOutTtlPlan[24] += obj.actplan;
      }
    }
    for (let index = 0; index < this.arrayInTtlAct.length - 1; index++) {
      this.arrayInTtlAct[24] += this.arrayInTtlAct[index];
      this.arrayInTtlBal[24] += this.arrayInTtlBal[index];
      this.arrayOutTtlAct[24] += this.arrayOutTtlAct[index];
      this.arrayOutTtlBal[24] += this.arrayOutTtlBal[index];
    }
  }

  setTtlMod(data) {
    this.mdlInTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.mdlInTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.mdlInTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.assyInTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.assyInTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.assyInTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.PackingInTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.PackingInTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.PackingInTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (const obj of data) {
      if (obj.item === 'M1 In' || obj.item === 'M2 In COG') {
        this.getDataWithTime(obj, this.mdlInTtlPlan, this.mdlInTtlAct, this.mdlInTtlBal);
        this.mdlInTtlPlan[24] += obj.actplan;
      } else if (obj.item === 'M1 Assy' || obj.item === 'M2 In COF') {
        this.getDataWithTime(obj, this.assyInTtlPlan, this.assyInTtlAct, this.assyInTtlBal);
        this.assyInTtlPlan[24] += obj.actplan;
      } else if (obj.item === 'M1 Packing') {
        this.getDataWithTime(obj, this.PackingInTtlPlan, this.PackingInTtlAct, this.PackingInTtlBal);
        this.PackingInTtlPlan[24] += obj.actplan;
      }
    }
    for (let index = 0; index < this.mdlInTtlPlan.length - 1; index++) {
      this.mdlInTtlAct[24] += this.mdlInTtlAct[index];
      this.mdlInTtlBal[24] += this.mdlInTtlBal[index];
      this.assyInTtlAct[24] += this.assyInTtlAct[index];
      this.assyInTtlBal[24] += this.assyInTtlBal[index];
      this.PackingInTtlAct[24] += this.PackingInTtlAct[index];
      this.PackingInTtlBal[24] += this.PackingInTtlBal[index];
    }
  }

  setTtlCell1(data) {

    this.cellInTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cellInTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cellInTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cellAssyInTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cellAssyInTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cellAssyInTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cell120KTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cell120KTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cell120KTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (const obj of data) {
      switch (obj.item) {
        case 'Cell In':
          this.getDataWithTime(obj, this.cellInTtlPlan, this.cellInTtlAct, this.cellInTtlBal);
          this.cellInTtlPlan[24] += obj.actplan;
          break;
        case 'Cell Assy':
          this.getDataWithTime(obj, this.cellAssyInTtlPlan, this.cellAssyInTtlAct, this.cellAssyInTtlBal);
          this.cellAssyInTtlPlan[24] += obj.actplan;
          break;
        case 'Cell 120K':
          this.getDataWithTime(obj, this.cell120KTtlPlan, this.cell120KTtlAct, this.cell120KTtlBal);
          this.cell120KTtlPlan[24] += obj.actplan;
          break;
      }
    }

    for (let index = 0; index < this.cellInTtlPlan.length - 1; index++) {
      this.getIndex24PlanActAndBal(this.cellInTtlAct, this.cellInTtlBal, index);
      this.getIndex24PlanActAndBal(this.cellAssyInTtlAct, this.cellAssyInTtlBal, index);
      this.getIndex24PlanActAndBal(this.cell120KTtlAct, this.cell120KTtlBal, index);
    }
  }

  setTtlCell2(data) {

    this.cellCutInTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cellCutInTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cellCutInTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cellOutTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cellOutTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cellOutTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cell2CutInTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cell2CutInTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cell2CutInTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cell2CutOutTtlPlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cell2CutOutTtlAct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.cell2CutOutTtlBal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    for (const obj of data) {
      switch (obj.item) {
        case 'Cell Cut':
          this.getDataWithTime(obj, this.cellCutInTtlPlan, this.cellCutInTtlAct, this.cellCutInTtlBal);
          this.cellCutInTtlPlan[24] += obj.actplan;
          break;
        case 'Cell Out':
          this.getDataWithTime(obj, this.cellOutTtlPlan, this.cellOutTtlAct, this.cellOutTtlBal);
          this.cellOutTtlPlan[24] += obj.actplan;
          break;
        case '2Cut In':
          this.getDataWithTime(obj, this.cell2CutInTtlPlan, this.cell2CutInTtlAct, this.cell2CutInTtlBal);
          this.cell2CutInTtlPlan[24] += obj.actplan;
          break;
        case '2Cut Out':
          this.getDataWithTime(obj, this.cell2CutOutTtlPlan, this.cell2CutOutTtlAct, this.cell2CutOutTtlBal);
          this.cell2CutOutTtlPlan[24] += obj.actplan;
          break;
      }
    }

    for (let index = 0; index < this.cellCutInTtlPlan.length - 1; index++) {
      this.getIndex24PlanActAndBal(this.cellCutInTtlAct, this.cellCutInTtlBal, index);
      this.getIndex24PlanActAndBal(this.cellOutTtlAct, this.cellOutTtlBal, index);
      this.getIndex24PlanActAndBal(this.cell2CutInTtlAct, this.cell2CutInTtlBal, index);
      this.getIndex24PlanActAndBal(this.cell2CutOutTtlAct, this.cell2CutOutTtlBal, index);
    }

    for (let index = 0; index < this.cellCutInTtlPlan.length; index++) {

      this.cellCutInTtlAct[index] /= 2;
      this.cellOutTtlAct[index] /= 2;
      this.cell2CutInTtlAct[index] /= 2;
      this.cell2CutOutTtlAct[index] /= 2;

    }
  }

  getDataWithTime(obj, plan, act, bal) {
    switch (obj.hour) {
      case '07':
        plan[0] += obj.planqty;
        act[0] += obj.qty;
        bal[0] += obj.balqty;
        break;
      case '08':
        plan[1] += obj.planqty;
        act[1] += obj.qty;
        bal[1] += obj.balqty;
        break;
      case '09':
        plan[2] += obj.planqty;
        act[2] += obj.qty;
        bal[2] += obj.balqty;
        break;
      case '10':
        plan[3] += obj.planqty;
        act[3] += obj.qty;
        bal[3] += obj.balqty;
        break;
      case '11':
        plan[4] += obj.planqty;
        act[4] += obj.qty;
        bal[4] += obj.balqty;
        break;
      case '12':
        plan[5] += obj.planqty;
        act[5] += obj.qty;
        bal[5] += obj.balqty;
        break;
      case '13':
        plan[6] += obj.planqty;
        act[6] += obj.qty;
        bal[6] += obj.balqty;
        break;
      case '14':
        plan[7] += obj.planqty;
        act[7] += obj.qty;
        bal[7] += obj.balqty;
        break;
      case '15':
        plan[8] += obj.planqty;
        act[8] += obj.qty;
        bal[8] += obj.balqty;
        break;
      case '16':
        plan[9] += obj.planqty;
        act[9] += obj.qty;
        bal[9] += obj.balqty;
        break;
      case '17':
        plan[10] += obj.planqty;
        act[10] += obj.qty;
        bal[10] += obj.balqty;
        break;
      case '18':
        plan[11] += obj.planqty;
        act[11] += obj.qty;
        bal[11] += obj.balqty;
        break;
      case '19':
        plan[12] += obj.planqty;
        act[12] += obj.qty;
        bal[12] += obj.balqty;
        break;
      case '20':
        plan[13] += obj.planqty;
        act[13] += obj.qty;
        bal[13] += obj.balqty;
        break;
      case '21':
        plan[14] += obj.planqty;
        act[14] += obj.qty;
        bal[14] += obj.balqty;
        break;
      case '22':
        plan[15] += obj.planqty;
        act[15] += obj.qty;
        bal[15] += obj.balqty;
        break;
      case '23':
        plan[16] += obj.planqty;
        act[16] += obj.qty;
        bal[16] += obj.balqty;
        break;
      case '00':
        plan[17] += obj.planqty;
        act[17] += obj.qty;
        bal[17] += obj.balqty;
        break;
      case '01':
        plan[18] += obj.planqty;
        act[18] += obj.qty;
        bal[18] += obj.balqty;
        break;
      case '02':
        plan[19] += obj.planqty;
        act[19] += obj.qty;
        bal[19] += obj.balqty;
        break;
      case '03':
        plan[20] += obj.planqty;
        act[20] += obj.qty;
        bal[20] += obj.balqty;
        break;
      case '04':
        plan[21] += obj.planqty;
        act[21] += obj.qty;
        bal[21] += obj.balqty;
        break;
      case '05':
        plan[22] += obj.planqty;
        act[22] += obj.qty;
        bal[22] += obj.balqty;
        break;
      case '06':
        plan[23] += obj.planqty;
        act[23] += obj.qty;
        bal[23] += obj.balqty;
        break;
    }
  }

  query() {
    if (this.dateName != null) {
      this.ifQuery = true;
      this.factory = 'array';
      this.setOptionQ();
      this.showArrayCF = true;
      this.showM1M2 = false;
      this.showCell = false;
      this.apiService.get('/sc/productioninfoQ', this.option).subscribe(
        (res) => {
          this.factory1 = 'Array';
          this.setTtl(res);
          this.setDataArray(res);
        }
      );
    } else {
      this.msgs = [{ severity: 'info', summary: '请输入日期 ！' }];
    }
  }

  refresh() {
    this.dateName = null;
    this.factory = 'array';
    this.ifQuery = false;
    this.setOption();
    this.showArrayCF = true;
    this.showM1M2 = false;
    this.showCell = false;
    this.apiService.get('/sc/productioninfo', this.option).subscribe(
      (res) => {
        this.factory1 = 'Array';
        this.setTtl(res);
        this.setDataArray(res);
      }
    );
  }

  select(factory) {
    this.line = null;
    this.cell = null;
    if (factory === 'array') {
      this.factory1 = 'Array';
      this.showArrayCF = true;
      this.showM1M2 = false;
      this.showCell = false;
      if (this.ifQuery) {
        this.setOptionQ();
        this.apiService.get('/sc/productioninfoQ', this.option).subscribe(
          (res) => {
            this.setTtl(res);
            this.setDataArray(res);
          }
        );
      } else {
        this.setOption();
        this.apiService.get('/sc/productioninfo', this.option).subscribe(
          (res) => {
            this.setTtl(res);
            this.setDataArray(res);
          }
        );
      }
    } else if (factory === 'cf') {
      this.factory1 = 'CF';
      this.showArrayCF = true;
      this.showM1M2 = false;
      this.showCell = false;
      if (this.ifQuery) {
        this.setOptionQ();
        this.apiService.get('/sc/productioninfocfQ', this.option).subscribe(
          (res) => {
            this.setTtl(res);
            this.setDataArray(res);
          }
        );
      } else {
        this.setOption();
        this.apiService.get('/sc/productioninfocf', this.option).subscribe(
          (res) => {
            this.setTtl(res);
            this.setDataArray(res);
          }
        );
      }
    } else if (factory === 'cell') {
      this.showArrayCF = false;
      this.showM1M2 = false;
      this.showCell = true;
      if (this.ifQuery) {
        this.setOptionQ();
        this.apiService.get('/sc/productioninfocell1Q', this.option).subscribe(
          (res) => {
            this.setTtlCell1(res);
            this.setDataCell(res);
          }
        );
        this.apiService.get('/sc/productioninfocell2Q', this.option).subscribe(
          (res) => {
            this.setTtlCell2(res);
            this.setDataCellChangeXianTi(res);
          }
        );
      } else {
        this.setOption();
        this.apiService.get('/sc/productioninfocell1', this.option).subscribe(
          (res) => {
            this.setTtlCell1(res);
            this.setDataCell(res);
          }
        );
        this.apiService.get('/sc/productioninfocell2', this.option).subscribe(
          (res) => {
            this.setTtlCell2(res);
            this.setDataCellChangeXianTi(res);
          }
        );
      }
    } else if (factory === 'm1') {
      this.showArrayCF = false;
      this.showPacking = true;
      this.showM1M2 = true;
      this.showCell = false;
      this.module_factory1 = 'MDL';
      this.module_factory2 = 'Assy';
      if (this.ifQuery) {
        this.setOptionQ();
        this.apiService.get('/sc/productioninfom1Q', this.option).subscribe(
          (res) => {
            this.backupRes = res;
            this.setDepartment(res);
            this.setTtlMod(res);
            this.setDataMod(res);
          }
        );
      } else {
        this.setOption();
        this.apiService.get('/sc/productioninfom1', this.option).subscribe(
          (res) => {
            this.backupRes = res;
            this.setDepartment(res);
            this.setTtlMod(res);
            this.setDataMod(res);
          }
        );
      }
    } else if (factory === 'm2') {
      this.showArrayCF = false;
      this.showPacking = false;
      this.showM1M2 = true;
      this.showCell = false;
      this.module_factory1 = 'COG';
      this.module_factory2 = 'COF';
      if (this.ifQuery) {
        this.setOptionQ();
        this.apiService.get('/sc/productioninfom2Q', this.option).subscribe(
          (res) => {
            this.backupRes = res;
            this.setDepartment(res);
            this.setTtlMod(res);
            this.setDataMod(res);
          }
        );
      } else {
        this.setOption();
        this.apiService.get('/sc/productioninfom2', this.option).subscribe(
          (res) => {
            this.backupRes = res;
            this.setDepartment(res);
            this.setTtlMod(res);
            this.setDataMod(res);
          }
        );
      }
    }
  }

  setReducteDataMod(array1, array2) {
    const pkMdlIn = []; // 确定某一条数据的两个字段，fgcode和line
    for (const obj of array1) {
      const pkArrayInItem = { fgcode: obj.fgcode, line: obj.line };
      pkMdlIn.push(pkArrayInItem);
    }
    // 数组去重
    for (let i = 0; i < pkMdlIn.length - 1; i++) {
      for (let j = i + 1; j < pkMdlIn.length; j++) {
        if (pkMdlIn[i].fgcode === pkMdlIn[j].fgcode && pkMdlIn[i].line === pkMdlIn[j].line) {
          pkMdlIn.splice(j, 1);
          j--;  // 关键，因为splice()删除元素之后，会使得数组长度减小，此时如果没有j=j-1的话，会导致相同项在重复两次以上之后无法进行去重，且会错误删除没有重复的项。
        }
      }
    }

    for (const o of pkMdlIn) {
      const newProductionDataMod = new ProductionDataMod();
      newProductionDataMod.line = o.line;
      newProductionDataMod.fgcode = o.fgcode;
      for (const obj of array1) {
        if (obj.fgcode === o.fgcode && obj.line === o.line) {
          newProductionDataMod.productname = obj.productname;
          newProductionDataMod.model_type = obj.model_type;
          this.setTimeData(obj, newProductionDataMod);
        }
      }
      this.getRowTtl(newProductionDataMod);
      array2.push(newProductionDataMod);
    }
  }

  setReducteDataCell(array1, array2) {
    const temp = []; // 确定某一条数据的两个字段，fgcode和line
    for (const obj of array1) {
      const pkArrayInItem = { productspecname: obj.productspecname, line: obj.line };
      temp.push(pkArrayInItem);
    }
    // 数组去重
    for (let i = 0; i < temp.length - 1; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        if (temp[i].productspecname === temp[j].productspecname && temp[i].line === temp[j].line) {
          temp.splice(j, 1);
          j--;  // 关键，因为splice()删除元素之后，会使得数组长度减小，此时如果没有j=j-1的话，会导致相同项在重复两次以上之后无法进行去重，且会错误删除没有重复的项。
        }
      }
    }

    for (const o of temp) {
      const newProductionDataMod = new ProductionCellInData();
      newProductionDataMod.line = o.line;
      newProductionDataMod.productspecname = o.productspecname;
      for (const obj of array1) {
        if (obj.productspecname === o.productspecname && obj.line === o.line) {
          newProductionDataMod.productname = obj.productname;
          newProductionDataMod.model_type = obj.model_type;
          this.setTimeData(obj, newProductionDataMod);
        }
      }
      this.getRowTtl(newProductionDataMod);
      array2.push(newProductionDataMod);
    }
  }

  setReducteDataCellChangeXianTi(array1, array2) {
    const specnames = [];
    for (const obj of array1) {
      if (!specnames.includes(obj.productspecname)) {
        specnames.push(obj.productspecname);
      }
    }
    for (const specname of specnames) {
      const newData = new ProductionCellCutData();
      newData.productspecname = specname;
      const lines = [];
      for (const obj of array1) {
        if (obj.productspecname === specname) {
          if (!lines.includes(obj.line)) {
            lines.push(obj.line);
          }
        }
      }
      const newTimeHour = new TimeHour();
      for (const obj of array1) {
        if (obj.productspecname === specname) {
          if (obj.productname !== null) {
            newData.productname = obj.productname;
          }
          newData.model_type = obj.model_type;
          if (obj.line === 'ttl') {
            this.setIimeDataXianTi(obj, newData.plan, newData.bal);
            this.setDataActTtl(obj, newTimeHour);
          }
        }
      }
      this.getDataPlanRowTtl(newData.plan); // 需要改的plan
      this.getDataActRowTtl(newData.bal);
      this.getDataActRowTtl(newTimeHour);
      newData.acts.push(newTimeHour);

      for (const line of lines) {
        if (line !== 'ttl') {
          const newTimeHour2 = new TimeHour();
          for (const obj of array1) {
            if (obj.line === line && obj.productspecname === specname) {
              this.setPropActs(obj, newTimeHour2, line);
            }
          }
          this.getDataActRowTtl(newTimeHour2);
          newData.acts.push(newTimeHour2);
        }
      }
      this.setDataRowTtlBal(newData);
      array2.push(newData);
    }
  }

  // 为dataArrayIn赋值，根据arrayproductspecname去重，每有一个arrayproductspecname创建一个对象放进数组中
  setReduceDataArray(array1, array2) {
    const specnameArrayOut = [];
    for (const obj of array1) {
      if (!specnameArrayOut.includes(obj.arrayproductspecname)) {
        specnameArrayOut.push(obj.arrayproductspecname);
      }
    }
    for (const specname of specnameArrayOut) {
      const newProductionData = new ProductionData();
      newProductionData.arrayproductspecname = specname;
      for (const obj of array1) {
        if (obj.arrayproductspecname === specname) {
          newProductionData.productspecname = obj.productspecname;
          newProductionData.modeltype = obj.arraymodeltype;
          this.setTimeData(obj, newProductionData);
        }
      }
      this.getRowTtl(newProductionData);
      array2.push(newProductionData);
    }
  }

  setDataActTtl(obj, timeHour) {
    switch (obj.hour) {
      case '07':
        if (obj.qty !== null) {
          timeHour['7'] = obj.qty.toString();
        }
        break;
      case '08':
        if (obj.qty !== null) {
          timeHour['8'] = obj.qty.toString();
        }
        break;
      case '09':
        if (obj.qty !== null) {
          timeHour['9'] = obj.qty.toString();
        }
        break;
      case '10':
        if (obj.qty !== null) {
          timeHour['10'] = obj.qty.toString();
        }
        break;
      case '11':
        if (obj.qty !== null) {
          timeHour['11'] = obj.qty.toString();
        }
        break;
      case '12':
        if (obj.qty !== null) {
          timeHour['12'] = obj.qty.toString();
        }
        break;
      case '13':
        if (obj.qty !== null) {
          timeHour['13'] = obj.qty.toString();
        }
        break;
      case '14':
        if (obj.qty !== null) {
          timeHour['14'] = obj.qty.toString();
        }
        break;
      case '15':
        if (obj.qty !== null) {
          timeHour['15'] = obj.qty.toString();
        }
        break;
      case '16':
        if (obj.qty !== null) {
          timeHour['16'] = obj.qty.toString();
        }
        break;
      case '17':
        if (obj.qty !== null) {
          timeHour['17'] = obj.qty.toString();
        }
        break;
      case '18':
        if (obj.qty !== null) {
          timeHour['18'] = obj.qty.toString();
        }
        break;
      case '19':
        if (obj.qty !== null) {
          timeHour['19'] = obj.qty.toString();
        }
        break;
      case '20':
        if (obj.qty !== null) {
          timeHour['20'] = obj.qty.toString();
        }
        break;
      case '21':
        if (obj.qty !== null) {
          timeHour['21'] = obj.qty.toString();
        }
        break;
      case '22':
        if (obj.qty !== null) {
          timeHour['22'] = obj.qty.toString();
        }
        break;
      case '23':
        if (obj.qty !== null) {
          timeHour['23'] = obj.qty.toString();
        }
        break;
      case '00':
        if (obj.qty !== null) {
          timeHour['0'] = obj.qty.toString();
        }
        break;
      case '01':
        if (obj.qty !== null) {
          timeHour['1'] = obj.qty.toString();
        }
        break;
      case '02':
        if (obj.qty !== null) {
          timeHour['2'] = obj.qty.toString();
        }
        break;
      case '03':
        if (obj.qty !== null) {
          timeHour['3'] = obj.qty.toString();
        }
        break;
      case '04':
        if (obj.qty !== null) {
          timeHour['4'] = obj.qty.toString();
        }
        break;
      case '05':
        if (obj.qty !== null) {
          timeHour['5'] = obj.qty.toString();
        }
        break;
      case '06':
        if (obj.qty !== null) {
          timeHour['6'] = obj.qty.toString();
        }
        break;
    }
  }

  getDataActRowTtl(timeHour) {
    if (timeHour['7'] !== '-') {
      timeHour.ttl += parseInt(timeHour['7'], 10);
    }
    if (timeHour['8'] !== '-') {
      timeHour.ttl += parseInt(timeHour['8'], 10);
    }
    if (timeHour['9'] !== '-') {
      timeHour.ttl += parseInt(timeHour['9'], 10);
    }
    if (timeHour['10'] !== '-') {
      timeHour.ttl += parseInt(timeHour['10'], 10);
    }
    if (timeHour['11'] !== '-') {
      timeHour.ttl += parseInt(timeHour['11'], 10);
    }
    if (timeHour['12'] !== '-') {
      timeHour.ttl += parseInt(timeHour['12'], 10);
    }
    if (timeHour['13'] !== '-') {
      timeHour.ttl += parseInt(timeHour['13'], 10);
    }
    if (timeHour['14'] !== '-') {
      timeHour.ttl += parseInt(timeHour['14'], 10);
    }
    if (timeHour['15'] !== '-') {
      timeHour.ttl += parseInt(timeHour['15'], 10);
    }
    if (timeHour['16'] !== '-') {
      timeHour.ttl += parseInt(timeHour['16'], 10);
    }
    if (timeHour['17'] !== '-') {
      timeHour.ttl += parseInt(timeHour['17'], 10);
    }
    if (timeHour['18'] !== '-') {
      timeHour.ttl += parseInt(timeHour['18'], 10);
    }
    if (timeHour['19'] !== '-') {
      timeHour.ttl += parseInt(timeHour['19'], 10);
    }
    if (timeHour['20'] !== '-') {
      timeHour.ttl += parseInt(timeHour['20'], 10);
    }
    if (timeHour['21'] !== '-') {
      timeHour.ttl += parseInt(timeHour['21'], 10);
    }
    if (timeHour['22'] !== '-') {
      timeHour.ttl += parseInt(timeHour['22'], 10);
    }
    if (timeHour['23'] !== '-') {
      timeHour.ttl += parseInt(timeHour['23'], 10);
    }
    if (timeHour['0'] !== '-') {
      timeHour.ttl += parseInt(timeHour['0'], 10);
    }
    if (timeHour['1'] !== '-') {
      timeHour.ttl += parseInt(timeHour['1'], 10);
    }
    if (timeHour['2'] !== '-') {
      timeHour.ttl += parseInt(timeHour['2'], 10);
    }
    if (timeHour['3'] !== '-') {
      timeHour.ttl += parseInt(timeHour['3'], 10);
    }
    if (timeHour['4'] !== '-') {
      timeHour.ttl += parseInt(timeHour['4'], 10);
    }
    if (timeHour['5'] !== '-') {
      timeHour.ttl += parseInt(timeHour['5'], 10);
    }
    if (timeHour['6'] !== '-') {
      timeHour.ttl += parseInt(timeHour['6'], 10);
    }
  }

  setDataRowTtlBal(newData) {
    if (newData.plan.ttl !== 0 && newData.acts[0].ttl !== 0) {
      newData.bal.ttl = newData.acts[0].ttl - newData.plan.ttl;
    }
  }

  setPropActs(obj, newTimeHour, oper) {
    newTimeHour.oper = oper;
    this.setDataActTtl(obj, newTimeHour);
  }

  setDepartment(data) {
    const lines = [];
    const cells = [];
    this.departmentLine = [];
    this.departmentCell = [];
    for (const obj of data) {
      if (!lines.includes(obj.line)) {
        lines.push(obj.line);
      }
      if (!cells.includes(obj.model_type)) {
        cells.push(obj.model_type);
      }
    }
    for (const line of lines) {
      this.departmentLine.push({ label: line, value: line });
    }
    for (const cell of cells) {
      this.departmentCell.push({ label: cell, value: cell });
    }
  }

  dtFilter() {
    if (this.line === null && this.cell === null) {
      this.setTtlMod(this.backupRes);
      this.setDataMod(this.backupRes);
    } else if (this.line !== null && this.cell === null) {
      const res = this.backupRes.filter((item) => {
        return (item.line === this.line);
      });
      this.setTtlMod(res);
      this.setDataMod(res);
    } else if (this.line === null && this.cell !== null) {
      const res = this.backupRes.filter((item) => {
        return (item.model_type === this.cell);
      });
      this.setTtlMod(res);
      this.setDataMod(res);
    } else {
      const res = this.backupRes.filter((item) => {
        return (item.line === this.line && item.model_type === this.cell);
      });
      this.setTtlMod(res);
      this.setDataMod(res);
    }
  }

  exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('gsproducttable')); // 将这个表格转换成一个 sheet
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // 这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
    this.saveAsExcelFile(excelBuffer, '固定报表');

  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + '_export_' + '.xls');

  }

}
