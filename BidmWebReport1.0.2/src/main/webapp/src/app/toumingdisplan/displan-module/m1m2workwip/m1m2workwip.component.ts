import { Component, OnInit } from '@angular/core';
import { SelectItem, Message } from 'primeng/api';

import { workWip } from './model/workWip';
import { ApiService } from '../../../common/service/api/api.service';

@Component({
  selector: 'app-m1m2workwip',
  templateUrl: './m1m2workwip.component.html',
  styleUrls: ['./m1m2workwip.component.css']
})
export class M1m2workwipComponent implements OnInit {

  //#.控制页面显示的标志位
  isFirstPage : boolean = true;
  isSecondPage : boolean = false;

  //1.控制 工厂 切换的按钮
  //witchFactory  : boolean = false;
  CurrentFactoryName : string = 'MODULE';  // 显示当前工厂的名字的 MOD / S2

  //2.起止时间的 绑定变量: 双向绑定的= new Date()
  startTime :Date ;
  endTime :Date ;
  startTimeStr : string = ''; // 两个字符串 是转换完成之后的字符串
  endTimeStr : string = '';

  //3.工单组多选下拉框 
  WORKTYPE : SelectItem[] = [{label:'MRB工单',value:'MRB工单'},
                            {label:'Rework工单',value:'Rework工单'},
                            {label:'RMA工单',value:'RMA工单'},
                            {label:'RT工单',value:'RT工单'},
                            {label:'测试工单',value:'测试工单'},
                            {label:'降级报废工单',value:'降级报废工单'},
                            {label:'量产工单',value:'量产工单'},
                            {label:'研发工单',value:'研发工单'}];
  selectedWORKTYPES : string[] = [];

  
  //4. BU别 多选按钮 : 直接写死的，因为就这两个
  // BUTYPE :SelectItem[] =[{'label':'COG','value':'COG'},
  //                        {'label':'COF','value':'COF'},] ;
  selectedBUTypes : string [] = [];

  //5.工单类型多选下拉框
  LOTTYPE : SelectItem[] =[
    {label:'B401',value:'B401'},{label:'B402',value:'B402'},{label:'B403',value:'B403'},{label:'B404',value:'B404'},
    {label:'B405',value:'B405'},{label:'B406',value:'B406'},{label:'B407',value:'B407'},{label:'B408',value:'B408'},
    {label:'B409',value:'B409'},{label:'B410',value:'B410'},{label:'B411',value:'B411'},{label:'B412',value:'B412'},
    {label:'B413',value:'B413'},{label:'B414',value:'B414'},{label:'B415',value:'B415'},{label:'B416',value:'B416'},
    {label:'B417',value:'B417'},{label:'B418',value:'B418'},{label:'B419',value:'B419'},{label:'B420',value:'B420'},
    {label:'B421',value:'B421'},{label:'B422',value:'B422'},{label:'B423',value:'B423'},{label:'B424',value:'B424'},
    {label:'B425',value:'B425'},{label:'B426',value:'B426'},{label:'B427',value:'B427'},{label:'B428',value:'B428'},
    {label:'B429',value:'B429'},{label:'B430',value:'B430'},{label:'B431',value:'B431'},{label:'B432',value:'B432'},
    {label:'B433',value:'B433'},{label:'B434',value:'B434'},{label:'B435',value:'B435'},{label:'B436',value:'B436'},
    {label:'B437',value:'B437'},{label:'B438',value:'B438'},{label:'B439',value:'B439'},{label:'B440',value:'B440'},
    {label:'B441',value:'B441'},{label:'B442',value:'B442'},{label:'B443',value:'B443'},{label:'B444',value:'B444'}
  ];
  selectedLotTypes : string [] =[];

  selectLotTypesShow : string = ''; // 这个用来保存  被选中的lottype的 字符串，主要是用来换行的

  //6.工厂单选框
  // FACTORY :SelectItem[] = [{label:'MODULE',value:'MODULE'},
  //                         {label:'S2MODULE',value:'S2MODULE'}];
  // selectedFactory : string = '';

  //6.工单状态多选下拉框
  WORKSTATE : SelectItem[] = [{label:'Completed',value:'Completed'},
                             {label:'Created',value:'Created'},
                             {label:'Released',value:'Released'}];
  selectedState : string[] = [];

  //8.关闭率 数据
  closeRatio : string = '--';
  closeUniverse : string = '--';

 //isClosedRatioShow : boolean = false; // 根据按钮的切换状态，决定是否显示 二级的页面


  //9.表格 列的属性  												
  cols : any[] = [
    {field:'lottype',header:'Lot Type'}, 
    {field:'fgcode',header:'FG Code'},  
    {field:'workorder',header:'WorkOrder'},
    {field:'wostate',header:'WO state'},  
    {field:'bangding',header:'绑定时间'},  
    {field:'runtime',header:'运行天数'},
    {field:'planqty',header:'Plan'},  
    {field:'assigntowo',header:'Assign To WO'},  
    {field:'notstart',header:'NOT Start'},
    {field:'wip',header:'WIP'},  
    {field:'shipped',header:'Shipped'},  
    {field:'fgmsnoreceipt',header:'FGMS NO RECEIPT'},
    {field:'scrap',header:'Scrap'},  
    {field:'reworkqty',header:'REWORK QTY'}
  ];
  workInfo : any[] = [
    {'lottype':'--', 
   'fgcode':'--',  
   'workorder':'--',
    'wostate':'--',
    'bangding':'--',
   'runtime':'--',
    'planqty':'--',
    'assigntowo':'--',
   'notstart':'--',
    'wip':'--',
    'shipped':'--',  
    'fgmsnoreceipt':'--',
   'scrap':'--',
    'reworkqty':'--'}
  ]; // 这个是保存表格中的数据的数组

  //10.二级视图的柱状图
  echartClosed; // 这就是那个柱状图
  xAxisName :string[] = []; // x轴的日期内容
  bangdingNumber : number[] = [];
  closeNumber : number [] = [];
  closeRatioNumber : number [] = [];
  destTRatioNumber : number [] = [];


  //11.添加一个一级页面的查询提示消息的功能
  msgs : Message[] = [];
  msg : Message = {severity:'info',summary:'查询。。。',detail:'正在查询 MODULE 数据 <br />'+'查询用时 ：'+0+' 秒'};




  constructor(private apiService : ApiService) {
  }

  ngOnInit() {
  }

  /** 一级界面中用到的方法 */

  //1. 查询 表格数据 和  调用查询 关闭率关闭周期子方法   的  方法，一级界面
  searchFirst(){
    this.selectLotTypesShow = '';
    if(this.startTime == null || this.endTime == null){
      alert("请选择正确的起止时间！");
    }else if(this.selectedBUTypes.length == 0){
      alert("请选择BU别！");
    }else if(this.selectedWORKTYPES.length == 0){
      alert("请选择工单组！");
    }else if(this.selectedLotTypes.length == 0){
      alert("请选择工单类型！");
    }else if(this.selectedState.length == 0){
      alert("请选择工单状态！");
    } else{
      this.msgs.push(this.msg); // 把这个消息的提示放进来,也就是这个时候开始显示的
      let startInterval; // 声明这个定时器,这个引用可以用来停止计时器，
      if(this.CurrentFactoryName == 'MODULE'){
        let secondes = 0;
        startInterval = setInterval(
          ()=>{
            secondes++;
            this.msg.detail = '正在查询 MODULE 数据 <br />'+'查询用时 ：'+secondes+' 秒';
          },1000
        );

        this.msg.detail = '正在查询 MODULE 数据 <br />'+'查询用时 ：'+0+' 秒';
       
      }else{
        let secondes = 0;
        startInterval = setInterval(
          ()=>{
            secondes++;
            this.msg.detail = '正在查询 S2MODULE 数据 <br />'+'查询用时 ：'+secondes+' 秒';
          },1000
        );
        this.msg.detail = '正在查询 S2MODULE 数据 <br />'+'查询用时 ：'+0+' 秒';
      }

      //在这里把 要可能 在二级界面上展示的被选中的lottype的字符串处理一下
      for(let i = 0;i < this.selectedLotTypes.length;i++){
        if((i+1) % 5 != 0 ){ // 五个一换行
          this.selectLotTypesShow += this.selectedLotTypes[i]+', ';
        }else{
          this.selectLotTypesShow += this.selectedLotTypes[i]+', \n';
        }
      }
      //console.log(this.selectLotTypesShow); 这种换行的方式是可以的，有效果的
      this.startTimeStr = this.getTimestr(this.startTime);
      this.endTimeStr = this.getTimestr(this.endTime);
      const url = '/modules2/workwip';
      const option = {
        params :{
          starttime : this.startTimeStr,
          endtime : this.endTimeStr,
          butypes : this.selectedBUTypes,
          workgroup :this.selectedWORKTYPES,
          lottypes : this.selectedLotTypes,
          workstates : this.selectedState,
          factoryname : this.CurrentFactoryName
        }
      };

      this.apiService.get(url,option).subscribe(
        (res)=>{
        //  console.log(res);
          this.getDataFirst(res);
          clearInterval(startInterval); // 直接停掉这个计时器
          if(this.CurrentFactoryName == 'MODULE'){

            this.msgs = [];
            this.msgs.push({severity:'success',summary:'查询成功！',detail:'MODULE 数据 查询完成'});
            setTimeout(
              ()=>{
                this.msgs = [];
              },3000
            );
          }else{
            this.msgs = [];
            this.msgs.push({severity:'success',summary:'查询成功！',detail:'S2MODULE 数据 查询完成'});
            setTimeout(
              ()=>{
                this.msgs = [];
              },3000
            );
          }
        },
        (error)=>{console.log(error)}
      );

      //2.查询 关闭率和关闭周期
      this.searchClosed();
    }
  }
  //1.1 查询 关闭周期和关闭率的方法
  searchClosed(){
    const closedRatio_url = '/modules2/closedRatio';
    const option1 = {
      params:{
        factoryname:this.CurrentFactoryName,
        buttypes : this.selectedBUTypes,
        worktypes :  this.selectedWORKTYPES,
        lottypes : this.selectedLotTypes
      }
    };
    this.apiService.get(closedRatio_url,option1).subscribe(
      (res)=>{
        let closedRatioaaa = res['closedRatio']+'';
        let closedRatiobbb : number = null;
        let closedRatiostr = parseFloat(closedRatioaaa).toFixed(4)+'';
       // alert(closedRatiostr);
        closedRatiobbb = parseFloat(closedRatiostr)*100;// 截取两位小数的操作，四舍五入的
       
        this.closeRatio = closedRatiobbb+''; 
      },
      (error)=>{console.log(error)}
    );
      //查询关闭周期
    const closeCycle_url = '/modules2/closeCycle';
    const option2 = {
      params:{
        factoryname:this.CurrentFactoryName,
        buttypes : this.selectedBUTypes,
        worktypes :  this.selectedWORKTYPES,
        lottypes : this.selectedLotTypes
      }
    };
    this.apiService.get(closeCycle_url,option2).subscribe(
      (res)=>{
        let closedCycleaaa = res['closeCycle']+'';
        this.closeUniverse =  parseFloat(closedCycleaaa).toFixed(2)+'';
       
      },
      (error)=>{console.log(error)}
    );

  }
  //2.日期转换成字符串的方法 ： 目标格式 2019011209 一级界面
  getTimestr(searchTime: Date): string {
    let timestr = '';

    let year: number = 0;
    let month: number = 0;
    let monthstr: string = '';
    let day: number = 0;
    let daystr: string = '';
    let hour: number = 0;
    let hourstr: string = '';
    let minute: number = 0;
    let minutestr: string = '';

    year = searchTime.getFullYear();

    month = searchTime.getMonth() + 1;

    day = searchTime.getDate();

    hour = searchTime.getHours();

    minute = searchTime.getMinutes();


    if (month < 10) {
      monthstr = '0' + month;
    } else {
      monthstr = '' + month;
    }

    if (day < 10) {
      daystr = '0' + day;
    } else {
      daystr = '' + day;
    }

    if (hour < 10) {
      hourstr = '0' + hour;
    } else {
      hourstr = '' + hour;
    }

    if (minute < 10) {
      minutestr = '0' + minute;
    } else {
      minutestr = '' + minute;
    }

    timestr = year + monthstr + daystr + hourstr + minutestr;

    return timestr;
  }

  //3.1切换到 二级界面的方法
  changeToSecondPage(){
    this.selectLotTypesShow = '';

    this.isFirstPage = false;
    this.isSecondPage = true;
    this.xAxisName = this.getXaxis();
    const url = '/modules2/workclose';
    const option = {
      params:{
        factoryname:this.CurrentFactoryName,
        buttypes : this.selectedBUTypes,
        worktypes :  this.selectedWORKTYPES,
        lottypes : this.selectedLotTypes
      }
    };
    if(this.selectedBUTypes.length != 0 && this.selectedWORKTYPES.length !=0 && this.selectedLotTypes.length != 0){
      //在这里把 要可能 在二级界面上展示的被选中的lottype的字符串处理一下
      for(let i = 0;i < this.selectedLotTypes.length;i++){
        if((i+1) % 5 != 0 ){ // 五个一换行
          this.selectLotTypesShow += this.selectedLotTypes[i]+', ';
        }else{
         this.selectLotTypesShow += this.selectedLotTypes[i]+', \n';
       }
      }
    this.apiService.get(url,option).subscribe(
      (res)=>{
        this.searchClosed(); // 同时把 关闭率给查出来
        this.getDataSecond(res); // 调用获取二级界面的方法
        this.setEchart(this.xAxisName,this.bangdingNumber,this.closeNumber,this.closeRatioNumber,this.destTRatioNumber); // 画图
      },
      (error)=>{console.log(error)}
    );
    }else{
      alert("选择 筛选条件！");
      this.isFirstPage = true;
      this.isSecondPage = false;
    }
   
  }
  //3.2切换到  一级界面的方法 : 直接返回，就是 不用管其他的了
  changeToFirstPage(){
    this.isSecondPage = false;
    this.isFirstPage = true;
  }
  // changeToSecondPageBySwitch(event){
  //   if(this.isClosedRatioShow){
  //     this.isFirstPage = false;
  //     this.isSecondPage = true;
  //     this.xAxisName = this.getXaxis();
  //     const url = '/modules2/workclose';
  //     const option = {
  //       params:{
  //         factoryname:this.CurrentFactoryName,
  //         buttypes : this.selectedBUTypes,
  //         worktypes :  this.selectedWORKTYPES,
  //         lottypes : this.selectedLotTypes
  //       }
  //     };
  //     if(this.selectedBUTypes.length != 0 && this.selectedWORKTYPES.length !=0 && this.selectedLotTypes.length != 0){
  //       //在这里把 要可能 在二级界面上展示的被选中的lottype的字符串处理一下
  //       for(let i = 0;i < this.selectedLotTypes.length;i++){
  //         if((i+1) % 5 != 0 ){ // 五个一换行
  //           this.selectLotTypesShow += this.selectedLotTypes[i]+', ';
  //         }else{
  //          this.selectLotTypesShow += this.selectedLotTypes[i]+', \n';
  //        }
  //       }
  //     this.apiService.get(url,option).subscribe(
  //       (res)=>{
  //         this.searchClosed(); // 同时把 关闭率给查出来
  //         this.getDataSecond(res); // 调用获取二级界面的方法
  //         this.setEchart(this.xAxisName,this.bangdingNumber,this.closeNumber,this.closeRatioNumber,this.destTRatioNumber); // 画图
  //       },
  //       (error)=>{console.log(error)}
  //     );
  //     }else{
  //       alert("选择 筛选条件！");
  //       this.isFirstPage = true;
  //       this.isSecondPage = false;
  //       this.isClosedRatioShow = false; // 强行给关闭掉
  //     }
  //   }else{
  //     this.isSecondPage = false;
  //     this.isFirstPage = true;
  //   }
  // }
  //4.切换工厂的方法 ，一级
    // 切换到 Module 
  changeToModuleFirst(){
    if(this.CurrentFactoryName != 'MODULE'){
    this.CurrentFactoryName = 'MODULE' ;
    this.startTime = null;
    this.endTime = null;
    this.selectedBUTypes = [];
    this.selectedLotTypes = [];
    this.selectedWORKTYPES = [];
    this.selectedState = [];
    this.workInfo = [  {'lottype':'--', 
    'fgcode':'--',  
    'workorder':'--',
     'wostate':'--',
     'bangding':'--',
    'runtime':'--',
     'planqty':'--',
     'assigntowo':'--',
    'notstart':'--',
     'wip':'--',
     'shipped':'--',  
     'fgmsnoreceipt':'--',
    'scrap':'--',
     'reworkqty':'--'}];
     this.closeRatio = '--';
     this.closeUniverse = '--';
    // 查询 MOD 关闭率
    // const closedRatio_url = '/modules2/closedRatio';
    // const option1 = {
    //   params:{
    //     factoryname:'MODULE'
    //   }
    // };
    // this.apiService.get(closedRatio_url,option1).subscribe(
    //   (res)=>{
    //     this.closeRatio = res['closedRatio'];
    //   },
    //   (error)=>{console.log(error)}
    // );
      //查询MOD 关闭周期
    // const closeCycle_url = '/modules2/closeCycle';
    // const option2 = {
    //   params:{
    //     factoryname:'MODULE'
    //   }
    // };
    // this.apiService.get(closeCycle_url,option2).subscribe(
    //   (res)=>{
    //     this.closeUniverse = res['closeCycle'];
    //   },
    //   (error)=>{console.log(error)}
    // );
    }

  }
    // 切换到 S2
  changeToS2First(){
    if(this.CurrentFactoryName != 'S2MODULE'){
    this.CurrentFactoryName = 'S2MODULE' ;
    this.startTime = null;
    this.endTime = null;
    this.selectedBUTypes = [];
    this.selectedLotTypes = [];
    this.selectedWORKTYPES = [];
    this.selectedState = [];
    this.workInfo = [  {'lottype':'--', 
    'fgcode':'--',  
    'workorder':'--',
     'wostate':'--',
     'bangding':'--',
    'runtime':'--',
     'planqty':'--',
     'assigntowo':'--',
    'notstart':'--',
     'wip':'--',
     'shipped':'--',  
     'fgmsnoreceipt':'--',
    'scrap':'--',
     'reworkqty':'--'}];
     this.closeRatio = '--';
     this.closeUniverse = '--';
    // 查询 S2 关闭率
    // const closedRatio_url = '/modules2/closedRatio';
    // const option1 = {
    //   params:{
    //     factoryname:'S2MODULE'
    //   }
    // };
    // this.apiService.get(closedRatio_url,option1).subscribe(
    //   (res)=>{
    //     this.closeRatio = res['closedRatio'];
    //   },
    //   (error)=>{console.log(error)}
    // );
      //查询S2 关闭周期
    // const closeCycle_url = '/modules2/closeCycle';
    // const option2 = {
    //   params:{
    //     factoryname:'S2MODULE'
    //   }
    // };
    // this.apiService.get(closeCycle_url,option2).subscribe(
    //   (res)=>{
    //     this.closeUniverse = res['closeCycle'];
    //   },
    //   (error)=>{console.log(error)}
    // );
    }
  }
  
  //5.获取数据的方法，一级
  getDataFirst(data){
    this.workInfo = [] ; // 清空数组
    if(Array.isArray(data)){
      if(data.length == 0){
        alert("未查询到数据！");
      }else{
        for(const object of data){
          let aa : workWip = new workWip; // 创建一个对象

          for(const prop in object){
            let value = object[prop];
            aa.setProperties(prop,value);

          }
         // console.log(aa);

          this.workInfo.push(aa); // 把创建的对象放入到数组中去
        }
      }
    }
  }

  /**  二级界面中用到的方法  */
  //1.创建 二级柱状图的方法
  setEchart(xAxis:string[],bangding:number[],closenumber:number[],closerationumber:number[],destrationumber:number[]) {
    this.echartClosed = {
      title: {
        text: this.CurrentFactoryName+' 工单关闭情况',
        x: 'center',
        textStyle: {
          color: 'white'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) { // 设置提示标签的展示格式
          let tips = '';
          for (let i = 0; i < params.length; i++) {
            let value = params[i].value;
            if (value < 1.1) {
              let res = params[i].value * 100 + '';
              let resshort = res.substring(0,5);
              tips = tips + params[i].marker + params[i].seriesName + ' : ' +resshort + '%' + '<br />';
            } else {
              tips = tips + params[i].marker + params[i].seriesName + ' : ' + params[i].value + '<br />';
            }
          }
          return tips;
        }
      },
      legend: {
        y: 'bottom',
        textStyle: {
          color: 'white'
        },
        data: ['绑定数', '关闭数', '关闭率', '目标']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          axisLine: { // 设置 x轴 的样式的
            lineStyle: {
              color: 'white'
            }
          },
          data: xAxis
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: { // 设置 y轴的分割线的
            show: false,
          },
          axisLine: { // 设置 y轴 的样式的
            lineStyle: {
              color: 'white'
            }
          },

        },
        {
          type: 'value',
          min: 0,
          max: 1,
          interval: 0.2,
          splitLine: { // 设置 y轴的分割线的
            show: false,
          },
          axisLine: { // 设置 y轴 的样式的
            lineStyle: {
              color: 'white'
            }
          },
          axisLabel: { // 
            formatter: function (value) {
              return value * 100 + '%'
            }
          }

        }
      ],
      series: [
        {
          name: '绑定数',
          type: 'bar',
          itemStyle: {
            color: 'rgb(30, 197, 197)'
          },
          data: this.bangdingNumber
        },
        {
          name: '关闭数',
          type: 'bar',
          itemStyle: {
            color: 'rgb(28, 180, 23)'
          },
          data: closenumber
        },
        {
          name: '关闭率',
          type: 'line',
         
          itemStyle: {

            normal: { // 在这里设置显示 label
              color: 'rgb(24, 139, 8)',
              // label: {
              //   show: true,
              //   formatter: function (aa) {
              //     let res = aa.value*100+'';
              //     let resshort = res.substring(0,5);
              //     return resshort+ '%'
              //   }
              // }
            }
          },
          label:{
            show: true,
            formatter: function (aa) {
              let res = aa.value*100+'';
              let resshort = res.substring(0,5);
              return resshort+ '%'
            },
            fontWeight:'bold',
            //fontSize:13
          },
          yAxisIndex: 1, // 设置使用那一个Y轴
          data: closerationumber
        },
        {
          name: '目标',
          type: 'line',
          itemStyle: { // 修改这里的颜色会使图例的颜色跟着改变

            normal: { // 在这里设置显示 label
              color: 'rgb(161, 20, 20)',
            }
          },
          label: {
            show: true,
            formatter: function (aa) {
              let res = aa.value*100+'';
              let resshort = res.substring(0,5);
              return resshort+'%'
            },
            fontWeight:'bold'
          },
          lineStyle: { // 设置线的样式
            type: 'dotted'
          },
          yAxisIndex: 1,// 设置使用那一个Y轴
          data: destrationumber
        },

      ]
    }
  }

  //2. 创建 二级柱状图 x轴坐标的 方法
  getXaxis():string[]{
    let dates:string [] =  [ '01','02','03','04','05','06','07','08','09','10', // 正常情况下是有这两个的
    '11','12','13','14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27','28'];

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    //如果月份是 1 3 5 7 8 10 12 则是31天
     //如果月份是 4 6 9 11 则是30天
      //如果月份是 2 则判断闰年从而确定是28 天还是 29 天
    if(month == 1 ||month == 3 ||month == 5 ||month == 7 ||month == 8 ||month == 10 ||month == 12){
       dates.push('29');
       dates.push('30');
       dates.push('31');
    }else if(month == 4 ||month == 6 ||month == 9 ||month == 11){
       dates.push('29');
       dates.push('30');
    }else if(month == 2){
        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
           dates.push('29');
        }
    }
    return dates;
  }

  //3.查询，获取 二级柱状图的 数据的方法
  getDataSecond(data){
    this.bangdingNumber = [];
    this.closeNumber = [];
    this.closeRatioNumber = [];
    this.destTRatioNumber = [];
    console.log(data);
    //在这个方法中需要做一个求和的操作
    if(Array.isArray(data)){
      for(const object of data){
        this.bangdingNumber.push(object['assignqty']);
        this.closeNumber.push(object['closedqty']);
        this.closeRatioNumber.push(object['closedratio']);
        this.destTRatioNumber.push(object['destratio']);
      }
    }

  }

  //4.二级页面中的 切换到 module的方法
  changeToModuleSecond(){
    if(this.CurrentFactoryName != 'MODULE'){
      this.CurrentFactoryName = 'MODULE';

      //需要重新查询一次关闭率和关闭周期
      this.searchClosed();

      this.xAxisName = this.getXaxis();
        const url = '/modules2/workclose';
        const option = {
          params:{
            factoryname:this.CurrentFactoryName,
            buttypes : this.selectedBUTypes,
            worktypes :  this.selectedWORKTYPES,
            lottypes : this.selectedLotTypes
          }
        };
        if(this.selectedBUTypes.length != 0 && this.selectedWORKTYPES.length !=0 && this.selectedLotTypes.length != 0){
        this.apiService.get(url,option).subscribe(
          (res)=>{
            this.getDataSecond(res); // 调用获取二级界面的方法
            this.setEchart(this.xAxisName,this.bangdingNumber,this.closeNumber,this.closeRatioNumber,this.destTRatioNumber); // 画图
          },
          (error)=>{console.log(error)}
        );
        }else{
          alert("请返回 一级界面选择 筛选条件！");
          this.isFirstPage = true;
          this.isSecondPage = false;
          //this.isClosedRatioShow = false; // 强行给关闭掉
        }
    }  
  }

  //5. 二级界面中切换到 s2Module 的方法
  changeToS2Second(){
    if(this.CurrentFactoryName != 'S2MODULE'){
      this.CurrentFactoryName = 'S2MODULE';
      //需要重新查询一边关闭率和关闭周期
      this.searchClosed();
      this.xAxisName = this.getXaxis();
        const url = '/modules2/workclose';
        const option = {
          params:{
            factoryname:this.CurrentFactoryName,
            buttypes : this.selectedBUTypes,
            worktypes :  this.selectedWORKTYPES,
            lottypes : this.selectedLotTypes
          }
        };
        if(this.selectedBUTypes.length != 0 && this.selectedWORKTYPES.length !=0 && this.selectedLotTypes.length != 0){
        this.apiService.get(url,option).subscribe(
          (res)=>{
            this.getDataSecond(res); // 调用获取二级界面的方法
            this.setEchart(this.xAxisName,this.bangdingNumber,this.closeNumber,this.closeRatioNumber,this.destTRatioNumber); // 画图
          },
          (error)=>{console.log(error)}
        );
        }else{
          alert("请返回 一级界面选择 筛选条件！");
          this.isFirstPage = true;
          this.isSecondPage = false;
         // this.isClosedRatioShow = false; // 强行给关闭掉
        }
    }  
  }

}
