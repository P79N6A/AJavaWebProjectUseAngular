import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';

@Component({
  selector: 'app-gskanban',
  templateUrl: './gskanban.component.html',
  styleUrls: ['./gskanban.component.css']
})
export class GskanbanComponent implements OnInit {

  arrayInOption;
  arrayOutOpton;
  cfInOption;
  cfOutOption;
  cellInOption;
  cellOutOption;
  mdlInOption;
  showEchart;

  // 勇追
  arrayInM = '-';
  arrayOutM = '-';
  cfInM = '-';
  cfOutM = '-';
  cellInM = '-';
  cellOutM = '-';
  mdlInM = '-';
  mdlOutM = '-';
  tpc_qM = '-';
  m1M = '-';
  m2_1M = '-';
  m2_2M = '-';
  oemM = '-';

  Issue = 'Issue';

  monthlyModel = '-';

  remarks : any[] = [this.arrayInM,this.arrayOutM,this.cfInM,this.cfOutM,
    this.cellInM,this.cellOutM,this.mdlInM,this.mdlOutM,this.tpc_qM,this.m1M,this.m2_1M,this.Issue,this.monthlyModel];

  // 表格数据数组
  arrayIn = ['-', '-', '-', '-', '-', '-'];
  arrayOut = ['-', '-', '-', '-', '-', '-'];
  arrayWip = '-';
  arrayBank = '-';
  cfIn = ['-', '-', '-', '-', '-', '-'];
  cfOut = ['-', '-', '-', '-', '-', '-'];
  cfWip = '-';
  cfBank = '-';
  cellIn = ['-', '-', '-', '-', '-', '-', '-', '-'];
  cellOut = ['-', '-', '-', '-', '-', '-', '-', '-'];
  mdlIn = ['-', '-', '-', '-', '-', '-'];
  mdlOut = ['-', '-', '-', '-', '-', '-'];
  mdlWip = '-';
  mdlBank = '-';
  tpc_q = ['-', '-', '-', '-', '-', '-', '-', '-'];
  m1 = ['-', '-', '-', '-', '-', '-', '-', '-'];
  m2_1 = ['-', '-', '-', '-', '-', '-', '-', '-'];
  m2_2 = ['-', '-', '-', '-', '-', '-', '-', '-'];
  oem = ['-', '-', '-', '-', '-', '-', '-', '-'];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {

   


    this.apiService.getAll('/sc/gskanbantable').subscribe(
      (res) => {
        this.setArrayData(res);
      // 直接查询这个勇追的数据即可，在查询结束之后再覆盖掉数据
        this.queryRemark(); 
      }
    );

    this.apiService.get('/sc/gskanbanechart').subscribe(
      (res) => {
        this.setEcharts(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setTimeout(() => {
          this.showEchart = true;
        }, 500);
      }
    );
  }

  setEcharts(data) {
    const dateArray = this.setdateArray();
    const arrayInAct = [];
    const arrayInPlan = [];
    const arrayOutAct = [];
    const arrayOutPlan = [];
    const cfInAct = [];
    const cfInPlan = [];
    const cfOutAct = [];
    const cfOutPlan = [];
    const cellInAct = [];
    const cellInPlan = [];
    const cellOutAct = [];
    const cellOutPlan = [];
    const mdlInAct = [];
    const mdlInPlan = [];
    for (const obj of data) {
      switch (obj.factory) {
        case 'ARRAY':
          if (obj.item === 'In') {
            arrayInAct.push(obj.act);
            arrayInPlan.push(obj.plan);
          } else {
            arrayOutAct.push(obj.act);
            arrayOutPlan.push(obj.plan);
          }
          break;
        case 'CF':
          if (obj.item === 'In') {
            cfInAct.push(obj.act);
            cfInPlan.push(obj.plan);
          } else {
            cfOutAct.push(obj.act);
            cfOutPlan.push(obj.plan);
          }
          break;
        case 'CELL':
          if (obj.item === 'In') {
            cellInAct.push(obj.act);
            cellInPlan.push(obj.plan);
          } else {
            cellOutAct.push(obj.act);
            cellOutPlan.push(obj.plan);
          }
          break;
        case 'MDL':
          mdlInAct.push(obj.act);
          mdlInPlan.push(obj.plan);
          break;
      }
    }

    this.arrayInOption = this.setOption(dateArray, arrayInAct, arrayInPlan, '#FFC000');
    this.arrayOutOpton = this.setOption(dateArray, arrayOutAct, arrayOutPlan, '#03aaf7');
    this.cfInOption = this.setOption(dateArray, cfInAct, cfInPlan, '#FFC000');
    this.cfOutOption = this.setOption(dateArray, cfOutAct, cfOutPlan, '#03aaf7');
    this.cellInOption = this.setOption(dateArray, cellInAct, cellInPlan, '#FFC000');
    this.cellOutOption = this.setOption(dateArray, cellOutAct, cellOutPlan, '#03aaf7');
    this.mdlInOption = this.setOption(dateArray, mdlInAct, mdlInPlan, '#FFC000');
  }

  // 当月有几天就生成几个x轴类目日期
  setdateArray(): Array<string> {
    const array = [];
    for (let i = 1; i <= this.getCountDays(); i++) {
      array.push(i.toString());
    }
    return array;
  }

  // 返回一个echart图绑定的option
  setOption(dateArray, actArray, planArray, setColor) {
    const option = {
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '0%',
        right: '0%',
        bottom: '20%',
        left: '0%',
      },
      xAxis: {
        type: 'category',
        data: dateArray,
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          interval: 0,
          color: 'white',
          fontSize: 8,
          margin: 0,
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        min: 2000,
        show: false,
        splitLine: {
          show: false
        }
      },
      series: [{
        data: actArray,
        type: 'bar',
        itemStyle: {
          color: setColor
        }
      }, {
        data: planArray,
        type: 'line',
        itemStyle: {
          color: 'rgb(21, 255, 0)'
        }
      }]
    };
    return option;
  }


  setArrayData(data) {
    for (const obj of data) {
      switch (obj.factory) {
        case 'ARRAY':
          if (obj.item === 'In') {
            this.arrayInM = obj.plan_ttl;
            this.setIndexData(this.arrayIn, obj);
            this.arrayWip = obj.wip;
            this.arrayBank = obj.bank;
          } else {
            this.arrayOutM = obj.plan_ttl;
            this.setIndexData(this.arrayOut, obj);
          }
          break;
        case 'CF':
          if (obj.item === 'In') {
            this.cfInM = obj.plan_ttl;
            this.setIndexData(this.cfIn, obj);
            this.cfWip = obj.wip;
            this.cfBank = obj.bank;
          } else {
            this.cfOutM = obj.plan_ttl;
            this.setIndexData(this.cfOut, obj);
          }
          break;
        case 'CELL':
          if (obj.item === 'In') {
            this.cellInM = obj.plan_ttl;
            this.setIndexDataOthers(this.cellIn, obj);
          } else {
            this.cellOutM = obj.plan_ttl;
            this.setIndexDataOthers(this.cellOut, obj);
          }
          break;
        case 'MDL':
          if (obj.item === 'In') {
            this.mdlInM = obj.plan_ttl;
            this.setIndexData(this.mdlIn, obj);
            this.mdlWip = obj.wip;
            this.mdlBank = obj.bank;
          } else {
            this.mdlOutM = obj.plan_ttl;
            this.setIndexData(this.mdlOut, obj);
          }
          break;
        case 'TPC-Q':
          this.tpc_qM = obj.plan_ttl;
          this.setIndexDataOthers(this.tpc_q, obj);
          break;
        case 'M1':
          this.m1M = obj.plan_ttl;
          this.setIndexDataOthers(this.m1, obj);
          break;
        case 'M2-1':
          this.m2_1M = obj.plan_ttl;
          this.setIndexDataOthers(this.m2_1, obj);
          break;
      }
    }
  }

  setIndexData(array, obj) {
    array[0] = obj.plan_mon;
    array[1] = obj.act_mon;
    array[2] = obj.bal_mon;
    array[3] = obj.plan_day;
    array[4] = obj.act_day;
    array[5] = obj.bal_day;
  }

  setIndexDataOthers(array, obj) {
    array[0] = obj.plan_mon;
    array[1] = obj.act_mon;
    array[2] = obj.bal_mon;
    array[3] = obj.plan_day;
    array[4] = obj.act_day;
    array[5] = obj.bal_day;
    array[6] = obj.wip;
    array[7] = obj.bank;
  }

  // 获取当月的天数
  getCountDays(): number {
    const curDate = new Date();
    if (curDate.getDate() !== 1) {
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
    } else {
      curDate.setDate(0);
      return curDate.getDate();
    }
  }


  /**********下面是 key in 的操作********************* */
  
  // 下面是  remark  的内容改变了之后的 往数据库中写入数据的操作

  updateRemark(item, id) {

    this.remarks =  [this.arrayInM,this.arrayOutM,this.cfInM,this.cfOutM,
      this.cellInM,this.cellOutM,this.mdlInM,this.mdlOutM,this.tpc_qM,this.m1M,this.m2_1M,this.Issue,this.monthlyModel];

    let nowDay = new Date();
    let month = nowDay.getMonth()+1;
    let remarkstr = this.remarks[id];
    const option = {
      params: {
        datename: nowDay.getFullYear()+'/'+month+'/'+nowDay.getDate(),
        report: 'gskanban',
        item: item,
        remark: remarkstr
      }
    };
    const url = '/keyinremartk';
    this.apiService.get(url, option).subscribe(
      (res) => {
        //这里面其实什么都不用写
      },
      (error) => { console.log(error) }
    );
  }

    //下面 是 从 数据表中 读取 remark 的操作
    queryRemark(){
    
      this.arrayInM = '0';
      this.arrayOutM = '0';
      this.cfInM = '0';
      this.cfOutM = '0';
      this.cellInM = '0';
      this.cellOutM = '0';
      this.mdlInM = '0';
      this.mdlOutM = '0';

      this.tpc_qM = '0';
      this.m1M = '0';
      this.m2_1M = '0';

      this.Issue  = 'Issue';

      this.monthlyModel = '勇追';

      let nowDay = new Date();
      let month = nowDay.getMonth()+1;

      const option={
        params:{
          datename : nowDay.getFullYear()+'/'+month+'/'+nowDay.getDate(),
          report : 'gskanban',
        }
      };
      const url = '/queryRemark';
      this.apiService.get(url,option).subscribe(
        (res)=>{
          console.log(res);
          if(Array.isArray(res)){
            for(const object of res){
              let item = object['item'];
              let remark = object['remark'];
             switch(item){
               case 'FAC Item Monthly' : {this.monthlyModel = remark;break;}
               case 'Array In' : {this.arrayInM = remark;break;}
               case 'Array Out' : {this.arrayOutM = remark;break;}

               case 'CF In' : {this.cfInM = remark;break;}
               case 'CF Out' : {this.cfOutM = remark;break;}

               case 'Cell In' : {this.cellInM = remark;break;}
               case 'Cell Out' : {this.cellOutM = remark;break;}

               case 'Mdl In' : {this.mdlInM = remark;break;}
               case 'Mdl Out' : {this.mdlOutM = remark;break;}

               case 'tpc_qM' : {this.tpc_qM = remark;break;}
               case 'm1M' : {this.m1M = remark;break;}
               case 'm2_1M' : {this.m2_1M = remark;break;}

               case 'Issue' : {this.Issue = remark;break;}

             
              
             }
            }
          }
        },
        (error)=>{console.log(error)}
      );
    }


}
