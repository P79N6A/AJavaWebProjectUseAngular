import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { ReportUiCommonService } from '../../../report-ui/service/report-ui-common.service';
import { FullscreenService } from '../../../common/service/fullscreen.service';
import { station_msg, array_wip_current, stationMessage, wip_crrent_cols } from './model/array_wip';
import { SelectItem } from '../../../../../node_modules/primeng/api';
import { cf_wip_current } from './model/cf_wip';
import { cell_wip_current } from './model/cell_wip';
import { sum_wip_array, sum_wip_cf, sum_wip_cell } from './model/sum_wip';

@Component({
  selector: 'app-b4-wip',
  templateUrl: './b4-wip.component.html',
  styleUrls: ['./b4-wip.component.css']
})
export class B4WipComponent implements OnInit {

// chart data
dataChart: any;

// echart data
chartOption;

factory;

CurrentWipTableIsShowCL = false;
nowTime;

// gride data;
data: station_msg[]; // 这个地方的数据类型Type1是自己定义的
selectedData;
cols: any[];

/********下面的是自己定义的echart图的内容*************** */
chartOption_wip; // array cf cell 基本的柱状图透明化情况展示图
chartOption_wip_cf_PH1; // CF 的wip line = 'ph1'
chartOption_wip_cf_PH2; // CF 的wip line = 'ph2'
chartOption_wip_cl_both; // cell 的wip 右边的柱状图，可以根据条件进行筛选的操作
LineName:SelectItem[] = [
  {label:'PCS', value:'PCS'},
  {label:'PCL', value:'PCL'}
];
selectedNames:string[] = []; // 用来保存被选中的选项的

//data_array_wip: array_wip[] = []; // 这个图标中的数据，从data_array_wip.json文件中读出来

wip_operation: string[] = []; // 用来保存站点的数组：也就是图表中的X轴的标志
data_date_before_2: number[] = []; // 下面这三个数组用来保存从数据库读出来的数据，三天的，每天一个数组来保存
data_date_before_1: number[] = [];
data_date_before_0: number[] = [];
data_date_current: number[] = [];
data_date_move: number[] = [];
data_date_move_current: number[] = [];
// 下面的这个用来保存上面的
dataArray: any[] = [this.data_date_before_2, this.data_date_before_1, this.data_date_before_0,
this.data_date_current, this.data_date_move, this.data_date_move_current];

// 下面是对三天的数据求和的变量
data_date_before_2_sum :number = 0; // 下面这三个数组用来保存从数据库读出来的数据，三天的，每天一个数组来保存
data_date_before_1_sum: number = 0;
data_date_before_0_sum: number = 0;
data_date_before_sum: number[] = [this.data_date_before_2_sum,this.data_date_before_1_sum,this.data_date_before_0_sum];
data_date_before_sum_str : string[] = []; // 例子 ： 12日：185645
// 下面的是legend的显示
legends: string[] = [];//定义一个用来存放legends 的数组，这个需要根据当前刷新的时间来进行创建
xAxisLegends: string[] = [];//多个x轴的标签

isCfPH: boolean = false; // 这个是控制cf两条产线的数据是否显示的
wip_operation_cf_PH1: string[] = []; // 用来保存CF line ph1 站点的数组：也就是图表中的X轴的标志 ，与大图的是一样的
data_date_before_2_cf_PH1: number[] = []; // 下面这三个数组用来保存从数据库读出来的数据，三天的，每天一个数组来保存
data_date_before_1_cf_PH1: number[] = [];
data_date_before_0_cf_PH1: number[] = [];
data_date_current_cf_PH1: number[] = [];
data_date_move_cf_PH1: number[] = [];
data_date_move_current_cf_PH1: number[] = [];
// 下面的这个用来保存上面的
dataArray_cf_PH1: any[] = [this.data_date_before_2_cf_PH1, this.data_date_before_1_cf_PH1, this.data_date_before_0_cf_PH1,
this.data_date_current_cf_PH1, this.data_date_move_cf_PH1, this.data_date_move_current_cf_PH1];
// 下面的是legend的显示
legends_cf_PH1: string[] = [];//定义一个用来存放legends 的数组，这个需要根据当前刷新的时间来进行创建
xAxisLegends_cf_PH1: string[] = [];//多个x轴的标签

wip_operation_cf_PH2: string[] = []; // 用来保存CF line ph1 站点的数组：也就是图表中的X轴的标志 ，与大图的是一样的
data_date_before_2_cf_PH2: number[] = []; // 下面这三个数组用来保存从数据库读出来的数据，三天的，每天一个数组来保存
data_date_before_1_cf_PH2: number[] = [];
data_date_before_0_cf_PH2: number[] = [];
data_date_current_cf_PH2: number[] = [];
data_date_move_cf_PH2: number[] = [];
data_date_move_current_cf_PH2: number[] = [];
// 下面的这个用来保存上面的
dataArray_cf_PH2: any[] = [this.data_date_before_2_cf_PH2, this.data_date_before_1_cf_PH2, this.data_date_before_0_cf_PH2,
this.data_date_current_cf_PH2, this.data_date_move_cf_PH2, this.data_date_move_current_cf_PH2];
// 下面的是legend的显示
legends_cf_PH2: string[] = [];//定义一个用来存放legends 的数组，这个需要根据当前刷新的时间来进行创建
xAxisLegends_cf_PH2: string[] = [];//多个x轴的标签


isCellBoth: boolean = false; // 这个是控制cell可筛选操作的柱状图的显示
wip_operation_cell_both: string[] = []; // 用来保存cell可筛选站点的数组：也就是图表中的X轴的标志 ，与大图的是一样的
data_date_before_2_cell_both: number[] = [];  // 下面这三个数组用来保存从数据库读出来的数据，三天的，每天一个数组来保存
data_date_before_1_cell_both: number[] = [];
data_date_before_0_cell_both: number[] = [];
data_date_current_cell_both: number[] = [];
data_date_move_cell_both: number[] = [];
data_date_move_current_cell_both: number[] = [];
// 下面的这个用来保存上面的
dataArray_cell_both: any[] = [this.data_date_before_2_cell_both, this.data_date_before_1_cell_both, this.data_date_before_0_cell_both,
this.data_date_current_cell_both, this.data_date_move_cell_both, this.data_date_move_current_cell_both];
// 下面的是legend的显示
legends_cell_both: string[] = [];//定义一个用来存放legends 的数组，这个需要根据当前刷新的时间来进行创建
xAxisLegends_cell_both: string[] = [];//多个x轴的标签

datatime: Date = null; // 定义一个日期类:这个日期的对象是与一级视图，二级视图通用的
// 这个日期，在每次刷新，切换的时候，都需要重新new一个当前对象
// 其他的时候，不需要重新new，
// mydatatimestr : string =  this.getTimeStr();//字符串的时间：用于当前wip的操作

timestrOnSecondTable: string = '';// 临时用在二级视图上的时间
/********上面的是自己定义的echart图的内容end*************** */

/********下面是用来显示一级视图的当前array_wip的表格的内容***** */
wipTableIsShow: boolean = true;//控制一级柱状图显示
CurrentWipTableIsShow: boolean = false;//控制一级实时wip表格显示
CurrentWipStationTableIsShow: boolean = false;//控制二级站点wip表格显示的
CurrentWipStationTableIsShowCT = false;

//current_time_key:string = this.datatimestr;//先把当前的时间放进来，目前还没有用到

data_array_current: array_wip_current[] = [];//这个用来保存每一行的对象的数组
data_key: string[] = [];//这个用来保存modeltype:也就是每一个对象的key的值

data_sum: number[] = [];//这个用来计算每一列的值得操作，需要与wip_operation,和data_date_current两个数组进行结合操作！

data_array_current_cols: any[] = [//这个应该是个动态创建的，需要根据实际的情况进行创建
  //{ field: 'Key', header: '型号' }
];
fronzecols = [
  { field: 'Key', header: '型号' }
];
data_array_current_keys: string[] = [];//用来分离获取到的数据结构 key+数组
data_array_current_nums: number[] = [];//用来分离获取到的数据结构 key+数组

data_station: station_msg[];
clickName: string; //这个是控制标题显示的,同时也用在向后面传参的时候用的
isShowTable: boolean = false;//这个是控制整个表的显示 的


eqp_id: string[] = [];//用于保存设备id的数组
eqp_state: string[] = [];//用于保存设备状态的数组
modeltype: string[] = [];//用于保存型号的数组

stationWipMessage: stationMessage[] = [];//用于保存一行一行的数据

rowSpan: number = 3;//这个用来控制表格所占的行的数量
modeltypeNumber: number = 0;//这个用来获取型号的数量
thirdName: string = '设备';//控制设备行的名称，cell的时候不叫设备，叫操作名称
thirdStateIsShow: boolean = true; // 控制设备状态那一行是不是显示，当cell 的时候是不显示的

/*********************上面是用来画二级表格的内容************ */
title_yiji: string = "Array WIP";

//长度
lengthhead = 0;

  constructor(
    private apiService: ApiService,
    private reportComnService: ReportUiCommonService,
    private fullscreen: FullscreenService
  ) { }

  ngOnInit() {
    this.wipTableIsShow = true; // 初始化就显示柱状图
    this.datatime = new Date(); // 初始化时间
    let datatimestr = this.getTimeStr(this.datatime);//这个时间是在设置一级视图的时候使用的

    //1.这里是从后台数据库里面读取出来的数据:整体上面的数据
    const url_array_wip_home = '/assets/demo/data/B4/arraywip.json';
    this.apiService.testGet(url_array_wip_home).subscribe(
      (res) => {//这地方就是得到的是数组的形式

        this.getData(res);//调用这个方法然后就得到了所有的数据信息，并且将上面的内容进行了初始化
        this.createLegend();//创建legend的信息
        this.getRowSumDate();//求和
        this.getRowSumStr();//创建信息
        this.set_WIP_Echart(this.legends, this.xAxisLegends, this.dataArray, this.wip_operation, this.title_yiji, 90, datatimestr);

      },
      (error) => { console.log("myerror " + error); }
    );
  }


      /************创建二级视图时候，需要转换的时间格式的****************** */
  getTimeSameToEchart(datatime: Date): string {
    let hourtimekey: string = '';
    let yearstr = datatime.getFullYear().toString();
    let month = datatime.getMonth() + 1;
    let date = datatime.getDate();
    let hour = datatime.getHours();

    let monthstr: string = '';
    let datestr: string = '';
    let hourstr: string = '';

    if (month > 9) {
      monthstr = month + '';
    } else {
      monthstr = '0' + month;
    }

    if (date > 9) {
      datestr = date + '';
    } else {
      datestr = '0' + date;
    }

    if (hour > 9) {
      hourstr = hour + '';
    } else {
      hourstr = '0' + hour;
    }

    hourtimekey = yearstr + monthstr + datestr + hourstr;

    return hourtimekey;
  }
  /************创建二级视图时候，需要转换的时间格式的end************** */
    getData(data) {
      //在getData之前，先把所有的数组都晴空
      this.wip_operation = [];
      this.data_date_before_2 = [];
      this.data_date_before_1 = [];
      this.data_date_before_0 = [];
      this.data_date_current = [];
      this.data_date_move = [];
      this.data_date_move_current = [];
  
      this.dataArray = [this.data_date_before_2, this.data_date_before_1, this.data_date_before_0,
      this.data_date_current, this.data_date_move, this.data_date_move_current];
      if (Array.isArray(data)) {
        for (const list of data) {
          for (const value in list) {
            if (value == 'oper_desc') {
              this.wip_operation.push(list[value]);
            }
            if (value == 'date_before_2') {
              this.data_date_before_2.push(list[value]);
            }
            if (value == 'date_before_1') {
              this.data_date_before_1.push(list[value]);
            }
            if (value == 'date_before_0') {
              this.data_date_before_0.push(list[value]);
            }
            if (value == 'date_current') {
              this.data_date_current.push(list[value]);
            }
            if (value == 'date_move') {
              this.data_date_move.push(list[value]);
            }
            if (value == 'date_move_current') {
              this.data_date_move_current.push(list[value]);
            }
          }
        }
      }
      console.log(this.dataArray);
    }

      /********* 一个根据日期创建legend 标签名字 和 多个x轴 名字的 的操作************************** */
  createLegend() {

    this.legends = [];
    this.xAxisLegends = [];

    const today = new Date(); // 现在的
    const day_1 = new Date(); // 上一天的
    const day_2 = new Date(); //上两天的

    const date = today.getDate();
    const hour = today.getHours();

    if (hour > 5) { // 当时间大于5点的时候，就是 6 7 8 。。。点
      day_2.setDate(today.getDate() - 3);
      day_1.setDate(today.getDate() - 2);
      today.setDate(today.getDate() - 1);
    } else { // 否则的话需要时  日期多减一天
      day_2.setDate(today.getDate() - 4);
      day_1.setDate(today.getDate() - 3);
      today.setDate(today.getDate() - 2);
    }
    //这个是多个x轴的
    this.xAxisLegends.push(day_2.getDate() + '日');
    this.xAxisLegends.push(day_1.getDate() + '日');
    this.xAxisLegends.push(today.getDate() + '日');
    this.xAxisLegends.push('实时');
    if (this.title_yiji == 'CF WIP' || this.title_yiji == 'Cell WIP') {
      this.xAxisLegends.push(today.getDate() + '日');
      this.xAxisLegends.push('实时');
    }
    //legends的标签的
    this.legends.push(day_2.getDate() + '日wip');
    this.legends.push(day_1.getDate() + '日wip');
    this.legends.push(today.getDate() + '日wip');
    this.legends.push('实时wip');
    this.legends.push(today.getDate() + '日move');
    this.legends.push('实时move');

  }

  /***********计算每一行的 SUM 的内容******************** */
  getRowSumDate() {
    this.data_date_before_2_sum = 0;
    this.data_date_before_1_sum = 0;
    this.data_date_before_0_sum = 0;
    this.data_date_before_sum = [];
    for(const a of this.data_date_before_2){
      this.data_date_before_2_sum += a; 
    }
    for(const a of this.data_date_before_1){
      this.data_date_before_1_sum += a; 
    }
    for(const a of this.data_date_before_0){
      this.data_date_before_0_sum += a; 
    }
    this.data_date_before_sum.push(this.data_date_before_2_sum,this.data_date_before_1_sum,this.data_date_before_0_sum);
  }
  getRowSumStr(){
    this.data_date_before_sum_str = [];

    for(let i = 0 ; i < 3; i++){
      let d = this.xAxisLegends[i];
      let s = this.data_date_before_sum[i];
      let ds = d+" : "+s;
      this.data_date_before_sum_str.push(ds);
    }
  }
  /* **********计算每一行的 SUM 的内容end ************** */

  // echart setting function
  set_WIP_Echart(legendname: string[], xlegends: string[], datap: any[], xAxisName: string[], title_text: string, rotatem: number, datatime: string) {

    console.log('11');
    console.log(xlegends);
    console.log('11');
    this.chartOption_wip = {//这个地方就是自己定义的那个chartOption_array_wip图表

      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: legendname,//这个地方的图例通过参数传递进来
        top: '0%',
        textStyle: {
          color: '#F2F6FA'
        }
      },
      //calculable: true,

      grid: {
        left: '5%',
        right: '3.4%',
        bottom: '47%',
      },
      xAxis: [//设置x轴
        {
          type: 'category',
          data: xAxisName,//x轴的坐标
          axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            length: 0,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLine: {
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            interval: 0,//强制设置坐标轴间隔
            rotate: 30,//rotatem  x轴的刻度旋转度数，通过参数传递进来的
            formatter: function (value)//设置多少个就换行
            {
              var ret = "";// 拼接加\n返回的类目项
              var maxLength = 21;// 每项显示文字个数
              var valLength = value.length;//X轴类目项的文字个数
              var rowN = Math.ceil(valLength / maxLength); // 类目项需要换行的行数
              if (rowN > 1)// 如果类目项的文字大于21,
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = "";// 每次截取的字符串
                  var start = i * maxLength;// 开始截取的位置
                  var end = start + maxLength;// 结束截取的位置
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串
                }
                return ret;
              }
              else {
                return value;
              }
            },
            margin: 15,//x轴的刻度离x轴的距离
            textStyle: {//设置字体的格式
              fontStyle: 'Times',
              fontSize: '18',
              color: '#F2F6FA'
            }

          },

        },
        {//第二个x轴  柱形图下的table
          name: xlegends[0],
          nameLocation: 'start',    //这个是□x1的位置，在开始的位置  
          nameTextStyle: {
            color: '#F2F6FA',
            padding: [27, -5, 0, 0]  //这个是设置名字的位置：通过内边距进行上、右、下、作的设置进行
          },
          position: 'bottom',//在x轴的下面
          offset: 85,//离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条y轴是否可见
          },
          axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            length: 30,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            color: '#F2F6FA',
            interval: 0,
            inside: false,//设置内容在这一条坐标轴的上边还是下边
            rotate: '0'
          },
          inverse: false, //设置这条轴是否反转     
          //data: this.setSeriesOption(data)[1].data//设置数据
          data: datap[0]
        },
        {//第三个x轴
          name: xlegends[1],
          nameLocation: 'start',    //这个是□x1的位置，在开始的位置
          nameTextStyle: {
            color: '#F2F6FA',
            padding: [26, -5, 0, 0]
          },
          position: 'bottom',//在x轴的下面
          offset: 115,//离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条x轴是否可见        
          },
          axisTick: {//这个设置的是竖着的那条线是什么样子的
            length: 30,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            color: '#F2F6FA',
            interval: 0,
            inside: false,//设置内容在这一条坐标轴的上边还是下边
            rotate: '0'
          },
          inverse: false, //设置这条轴是否反转     
          //data: this.setSeriesOption(data)[2].data//设置数据
          data: datap[1]
        },
        {//第四个x轴
          name: xlegends[2],
          nameLocation: 'start',    //这个是□x1的位置，在开始的位置  
          nameTextStyle: {
            color: '#F2F6FA',
            padding: [26, -5, 0, 0]
          },
          position: 'bottom',//在x轴的下面
          offset: 145,//离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条y轴是否可见        
          },
          axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            length: 30,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            color: '#F2F6FA',
            interval: 0,
            inside: false,//设置内容在这一条坐标轴的上边还是下边
            rotate: '0'
          },
          inverse: false, //设置这条轴是否反转     
          //data: this.setSeriesOption(data)[3].data//设置数据
          data: datap[2]
        },
        {//第五个x轴
          name: xlegends[3],
          nameLocation: 'start',    //这个是□x1的位置，在开始的位置  
          nameTextStyle: {
            color: '#F2F6FA',
            padding: [26, -5, 0, 0]
          },
          position: 'bottom',//在x轴的下面
          offset: 175,//离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条y轴是否可见        
          },
          axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            length: 30,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            color: '#F2F6FA',
            interval: 0,
            inside: false,//设置内容在这一条坐标轴的上边还是下边
            rotate: '0'
          },
          inverse: false, //设置这条轴是否反转
          data: datap[3]//设置数据
        },
        {// 第六个x轴:封口的轴
          position: 'bottom',// 在x轴的下面
          offset: 205,// 离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条y轴是否可见
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            color: '#F2F6FA',
            formatter: '{value}'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#455e9c'
            }
          },
          splitLine: {
            show: false
          }
        },
        {
          type: 'value',
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
          }
        }
      ],
      series: [
        {
          name: legendname[0],//这个地方需要和legend对应起来才可以的
          type: 'bar',
          //barWidth:'50%',
          data: datap[0],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#0073FF',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[1],
          type: 'bar',
          //barWidth:'50%',
          data: datap[1],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#3AA4FB',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[2],
          type: 'bar',
          //barWidth:'50%',
          data: datap[2],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#1FE9BA',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[3],
          type: 'bar',
          //barWidth:'50%',
          data: datap[3],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#44FF32',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[4],
          type: 'line',
          //barWidth:'50%',
          data: datap[4], //通过对象获取到的数据进行操作
          label: {
            show: true,
            color: '#F2F6FA',
            fontSize: 9
          },
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#1FE9BA'
          },
          lineStyle: {
            normal: {
              color: '#1FE9BA'
            }
          },
          yAxisIndex: 1//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[5],
          type: 'line',
          data: datap[5], //通过对象获取到的数据进行操作
          label: {
            show: true,
            color: 'white',
            fontSize: 9
          },
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#44FF32'
          },
          lineStyle: {
            normal: {
              color: '#44FF32'
            }
          },
          yAxisIndex: 1//这个是选择使用哪一个y坐标轴
        }
      ]
    };
  }
    /******************修改时间格式 ： 2018-12-14 10：01：02 用于在一级视图上面显示****************** */
    getTimeStr(datatime: Date): string {
      let timestr: string = '';
      let datestr: string = datatime.toISOString().substr(0, 10);
      let hour = datatime.getHours();
      let hourstr: string = '';
      if (hour > 9) {
        hourstr = hour + '';
      } else {
        hourstr = '0' + hour;
      }
      let minute = datatime.getMinutes();
      let minutestr: string = '';
      if (minute > 9) {
        minutestr = minute + '';
      } else {
        minutestr = '0' + minute;
      }
      let second = datatime.getSeconds();
      let secondstr: string = '';
      if (second > 9) {
        secondstr = second + '';
      } else {
        secondstr = '0' + second;
      }
      timestr = datestr + ' ' + hourstr + ':' + minutestr + ':' + secondstr;
      return timestr;
    }
    /******************修改时间格式 ： 2018-12-14 10：01：02 end************** */

    // echart setting function
  set_WIP_cf_PH1_Echart(legendname: string[], xlegends: string[], datap: any[], xAxisName: string[], title_text: string, rotatem: number, datatime: string, offsetfirst: number, xlength: number) {

    this.chartOption_wip_cf_PH1 = {

      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },

      //calculable: true,

      grid: {
        left: '8%',
        right: '1%',
        bottom: '15%',
      },
      xAxis: [//设置x轴
        {
          type: 'category',
          data: xAxisName,//x轴的坐标
          axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            length: 0,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLine: {
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            interval: 0,//强制设置坐标轴间隔
            rotate: rotatem,//x轴的刻度旋转度数，通过参数传递进来的
            formatter: function (value)//设置多少个就换行
            {
              var ret = "";// 拼接加\n返回的类目项
              var maxLength = 21;// 每项显示文字个数
              var valLength = value.length;//X轴类目项的文字个数
              var rowN = Math.ceil(valLength / maxLength); // 类目项需要换行的行数
              if (rowN > 1)// 如果类目项的文字大于21,
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = "";// 每次截取的字符串
                  var start = i * maxLength;// 开始截取的位置
                  var end = start + maxLength;// 结束截取的位置
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串
                }
                return ret;
              }
              else {
                return value;
              }
            },
            margin: 15,//x轴的刻度离x轴的距离
            textStyle: {//设置字体的格式
              fontStyle: 'Times',
              fontSize: '18',
              color: '#F2F6FA'
            }

          },

        },


      ],
      yAxis: [
        {
          // name:'PH1',
          nameLocation: 'center', // name的名字
          nameGap: 40,  // 离轴线的距离
          nameTextStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white'
          },
          type: 'value',
          interval: 1000,
          axisLabel: {
            color: '#F2F6FA',
            formatter: function (value) {
              return value / 1000 + 'K';
            }
          },

          axisLine: {
            show: true,
            lineStyle: {
              color: '#455e9c'
            }
          },
          splitLine: {
            show: false
          }
        },
        {
          type: 'value',
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
          }
        }
      ],
      series: [
        {
          name: legendname[0],//这个地方需要和legend对应起来才可以的
          type: 'bar',
          //barWidth:'50%',
          data: datap[0],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#0073FF',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[1],
          type: 'bar',
          //barWidth:'50%',
          data: datap[1],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#3AA4FB',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[2],
          type: 'bar',
          //barWidth:'50%',
          data: datap[2],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#1FE9BA',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[3],
          type: 'bar',
          //barWidth:'50%',
          data: datap[3],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#44FF32',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[4],
          type: 'line',
          //barWidth:'50%',
          data: datap[4], //通过对象获取到的数据进行操作
          label: {
            show: true,
            color: '#F2F6FA',
            fontSize: 9
          },
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#1FE9BA'
          },
          lineStyle: {
            normal: {
              color: '#1FE9BA'
            }
          },
          yAxisIndex: 1//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[5],
          type: 'line',
          data: datap[5], //通过对象获取到的数据进行操作
          label: {
            show: true,
            color: 'white',
            fontSize: 9
          },
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#44FF32'
          },
          lineStyle: {
            normal: {
              color: '#44FF32'
            }
          },
          yAxisIndex: 1//这个是选择使用哪一个y坐标轴
        }
      ]
    };
  }
  getDataCfPH2(data) {
    //在getData之前，先把所有的数组都晴空
    this.wip_operation_cf_PH2 = [];
    this.data_date_before_2_cf_PH2 = [];
    this.data_date_before_1_cf_PH2 = [];
    this.data_date_before_0_cf_PH2 = [];
    this.data_date_current_cf_PH2 = [];
    this.data_date_move_cf_PH2 = [];
    this.data_date_move_current_cf_PH2 = [];

    this.dataArray_cf_PH2 = [this.data_date_before_2_cf_PH2, this.data_date_before_1_cf_PH2, this.data_date_before_0_cf_PH2,
    this.data_date_current_cf_PH2, this.data_date_move_cf_PH2, this.data_date_move_current_cf_PH2];
    if (Array.isArray(data)) {
      for (const list of data) {
        for (const value in list) {
          if (value == 'oper_desc') {
            this.wip_operation_cf_PH2.push(list[value]);
          }
          if (value == 'date_before_2') {
            this.data_date_before_2_cf_PH2.push(list[value]);
          }
          if (value == 'date_before_1') {
            this.data_date_before_1_cf_PH2.push(list[value]);
          }
          if (value == 'date_before_0') {
            this.data_date_before_0_cf_PH2.push(list[value]);
          }
          if (value == 'date_current') {
            this.data_date_current_cf_PH2.push(list[value]);
          }
          if (value == 'date_move') {
            this.data_date_move_cf_PH2.push(list[value]);
          }
          if (value == 'date_move_current') {
            this.data_date_move_current_cf_PH2.push(list[value]);
          }
        }
      }
    }
  }
  createLegendCfPH2() {

    this.legends_cf_PH2 = [];
    this.xAxisLegends_cf_PH2 = [];

    const today = new Date(); // 现在的
    const day_1 = new Date(); // 上一天的
    const day_2 = new Date(); //上两天的

    const date = today.getDate();
    const hour = today.getHours();

    if (hour > 5) { // 当时间大于5点的时候，就是 6 7 8 。。。点
      day_2.setDate(today.getDate() - 3);
      day_1.setDate(today.getDate() - 2);
      today.setDate(today.getDate() - 1);
    } else { // 否则的话需要时  日期多减一天
      day_2.setDate(today.getDate() - 4);
      day_1.setDate(today.getDate() - 3);
      today.setDate(today.getDate() - 2);
    }
    //这个是多个x轴的
    this.xAxisLegends_cf_PH2.push(day_2.getDate() + '日');
    this.xAxisLegends_cf_PH2.push(day_1.getDate() + '日');
    this.xAxisLegends_cf_PH2.push(today.getDate() + '日');
    this.xAxisLegends_cf_PH2.push('实时');
    //legends的标签的
    this.legends_cf_PH2.push(day_2.getDate() + '日wip');
    this.legends_cf_PH2.push(day_1.getDate() + '日wip');
    this.legends_cf_PH2.push(today.getDate() + '日wip');
    this.legends_cf_PH2.push('实时wip');
    this.legends_cf_PH2.push(today.getDate() + '日move');
    this.legends_cf_PH2.push('实时move');

  }

   // echart setting function
   set_WIP_cf_PH2_Echart(legendname: string[], xlegends: string[], dataph1: any[], datap: any[], xAxisName: string[], title_text: string, rotatem: number, datatime: string, offsetfirst: number, xlength: number) {

    this.chartOption_wip_cf_PH2 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },

      grid: {
        left: '8%',
        right: '1%',
        bottom: '55%',
      },
      xAxis: [//设置x轴
        {
          type: 'category',
          data: xAxisName,//x轴的坐标
          axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            length: 0,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLine: {
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            interval: 0,//强制设置坐标轴间隔
            rotate: rotatem,//x轴的刻度旋转度数，通过参数传递进来的
            formatter: function (value)//设置多少个就换行
            {
              var ret = "";// 拼接加\n返回的类目项
              var maxLength = 21;// 每项显示文字个数
              var valLength = value.length;//X轴类目项的文字个数
              var rowN = Math.ceil(valLength / maxLength); // 类目项需要换行的行数
              if (rowN > 1)// 如果类目项的文字大于21,
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = "";// 每次截取的字符串
                  var start = i * maxLength;// 开始截取的位置
                  var end = start + maxLength;// 结束截取的位置
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串
                }
                return ret;
              }
              else {
                return value;
              }
            },
            margin: 15,//x轴的刻度离x轴的距离
            textStyle: {//设置字体的格式
              fontStyle: 'Times',
              fontSize: '18',
              color: '#F2F6FA'
            }

          },

        },
        {//PH1 第三个x轴
          name: xlegends[1],
          nameLocation: 'start',    //这个是□x1的位置，在开始的位置
          nameTextStyle: {
            color: '#F2F6FA',
            padding: [26, -5, 0, 0]
          },
          position: 'bottom',//在x轴的下面
          offset: offsetfirst,//离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条x轴是否可见        
          },
          axisTick: {//这个设置的是竖着的那条线是什么样子的
            length: xlength,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            color: '#F2F6FA',
            interval: 0,
            inside: false,//设置内容在这一条坐标轴的上边还是下边
            rotate: '0'
          },
          inverse: false, //设置这条轴是否反转     
          //data: this.setSeriesOption(data)[2].data//设置数据
          data: dataph1[1]
        },
        {//PH1 第四个x轴
          name: xlegends[2],
          nameLocation: 'start',    //这个是□x1的位置，在开始的位置  
          nameTextStyle: {
            color: '#F2F6FA',
            padding: [26, -5, 0, 0]
          },
          position: 'bottom',//在x轴的下面
          offset: offsetfirst + xlength,//离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条y轴是否可见        
          },
          axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            length: xlength,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            color: '#F2F6FA',
            interval: 0,
            inside: false,//设置内容在这一条坐标轴的上边还是下边
            rotate: '0'
          },
          inverse: false, //设置这条轴是否反转     
          //data: this.setSeriesOption(data)[3].data//设置数据
          data: dataph1[2]
        },
        {//PH1第五个x轴
          name: xlegends[3],
          nameLocation: 'start',    //这个是□x1的位置，在开始的位置  
          nameTextStyle: {
            color: '#F2F6FA',
            padding: [26, -5, 0, 0]
          },
          position: 'bottom',//在x轴的下面
          offset: offsetfirst + xlength * 2,//离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条y轴是否可见        
          },
          axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            length: xlength,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            color: '#F2F6FA',
            interval: 0,
            inside: false,//设置内容在这一条坐标轴的上边还是下边
            rotate: '0'
          },
          inverse: false, //设置这条轴是否反转
          data: dataph1[3]//设置数据
        },

        {// PH2 第三个x轴
          name: xlegends[1],
          nameLocation: 'start',    //这个是□x1的位置，在开始的位置
          nameTextStyle: {
            color: '#F2F6FA',
            padding: [26, -5, 0, 0]
          },
          position: 'bottom',//在x轴的下面
          offset: offsetfirst + xlength * 3,//离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条x轴是否可见        
          },
          axisTick: {//这个设置的是竖着的那条线是什么样子的
            length: xlength,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            color: '#F2F6FA',
            interval: 0,
            inside: false,//设置内容在这一条坐标轴的上边还是下边
            rotate: '0'
          },
          inverse: false, //设置这条轴是否反转     
          //data: this.setSeriesOption(data)[2].data//设置数据
          data: datap[1]
        },
        {//第四个x轴
          name: xlegends[2],
          nameLocation: 'start',    //这个是□x1的位置，在开始的位置  
          nameTextStyle: {
            color: '#F2F6FA',
            padding: [26, -5, 0, 0]
          },
          position: 'bottom',//在x轴的下面
          offset: offsetfirst + xlength * 4,//离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条y轴是否可见        
          },
          axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            length: xlength,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            color: '#F2F6FA',
            interval: 0,
            inside: false,//设置内容在这一条坐标轴的上边还是下边
            rotate: '0'
          },
          inverse: false, //设置这条轴是否反转     
          //data: this.setSeriesOption(data)[3].data//设置数据
          data: datap[2]
        },
        {//第五个x轴
          name: xlegends[3],
          nameLocation: 'start',    //这个是□x1的位置，在开始的位置  
          nameTextStyle: {
            color: '#F2F6FA',
            padding: [26, -5, 0, 0]
          },
          position: 'bottom',//在x轴的下面
          offset: offsetfirst + xlength * 5,//离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条y轴是否可见        
          },
          axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            length: xlength,
            inside: false,//设置方向：true:向右，false：向左
            lineStyle: { color: '#455e9c' }
          },
          axisLabel: {
            color: '#F2F6FA',
            interval: 0,
            inside: false,//设置内容在这一条坐标轴的上边还是下边
            rotate: '0'
          },
          inverse: false, //设置这条轴是否反转
          data: datap[3]//设置数据
        },
        {// 第六个x轴:封口的轴
          position: 'bottom',// 在x轴的下面
          offset: offsetfirst + xlength * 6,// 离x轴的距离
          type: 'category',
          axisLine: {
            lineStyle: { color: '#455e9c' },
            onZero: false,
            show: true//设置这一条y轴是否可见
          }
        }
      ],
      yAxis: [
        {
          // name:'PH2',
          nameLocation: 'center', // name的名字
          nameGap: 40,  // 离轴线的距离
          nameTextStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white'
          },
          type: 'value',
          interval: 1000,
          axisLabel: {
            color: '#F2F6FA',
            formatter: function (value) {
              return value / 1000 + 'K';
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#455e9c'
            }
          },
          splitLine: {
            show: false
          }
        },
        {
          type: 'value',
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
          }
        }
      ],
      series: [
        {
          name: legendname[0],//这个地方需要和legend对应起来才可以的
          type: 'bar',
          //barWidth:'50%',
          data: datap[0],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#0073FF',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[1],
          type: 'bar',
          //barWidth:'50%',
          data: datap[1],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#3AA4FB',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[2],
          type: 'bar',
          //barWidth:'50%',
          data: datap[2],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#1FE9BA',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[3],
          type: 'bar',
          //barWidth:'50%',
          data: datap[3],//通过对象获取到的数据进行操作
          itemStyle: {
            normal: {
              color: '#44FF32',
              label: {
                //show:true,
                color: '#455e9c',
                position: 'top'
              }
            }
          },
          yAxisIndex: 0//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[4],
          type: 'line',
          //barWidth:'50%',
          data: datap[4], //通过对象获取到的数据进行操作
          label: {
            show: true,
            color: '#F2F6FA',
            fontSize: 9
          },
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#1FE9BA'
          },
          lineStyle: {
            normal: {
              color: '#1FE9BA'
            }
          },
          yAxisIndex: 1//这个是选择使用哪一个y坐标轴
        },
        {
          name: legendname[5],
          type: 'line',
          data: datap[5], //通过对象获取到的数据进行操作
          label: {
            show: true,
            color: 'white',
            fontSize: 9
          },
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#44FF32'
          },
          lineStyle: {
            normal: {
              color: '#44FF32'
            }
          },
          yAxisIndex: 1//这个是选择使用哪一个y坐标轴
        }
      ]
    };
  }
   /********* 一级 ： 转换数据格式 ：array_current的数据：这个是用来做表格的****************** */
   getDataWipCurrent(data, factoryname: string) {
    this.data_key = [];
    if (Array.isArray(data)) {
      //第一个循环用于获取到key的值:,并且在这里在添加最后的求和sum的操作
      for (const list of data) {
        if (list['hourtimekey'] != null) {//排除为空的情况
          for (const value in list) {
            if (value == 'modeltype') {//获取到key的值
              if (!this.data_key.includes(list[value])) {//当已经存在的时候，就不需要放入到数组中了，什么都不做就可以了
                //console.log("you are already has a value : "+list[value]);
                this.data_key.push(list[value]);
              }
            }
          }
        }
      }

      console.log(this.data_key);
      console.log('data_key');

      this.data_array_current = [];//清空要保存数据的数组！

      for (const key of this.data_key) {//整个循环是根据得到的key进行的对象的创建的
        //第二个循环data_key用于创建对象，并且把对象放入到数组中去
        let newObject: any;

        if (factoryname == "ARRAY") {
          newObject = new array_wip_current;//当传进来的是一个array的时候，创建的是个array的对象

        } else if (factoryname == "CF") {
          newObject = new cf_wip_current;//当传进来的是一个cf的时候，创建的是个cf的对象

        } else if (factoryname == "CELL") {
          newObject = new cell_wip_current;//当传进来的是一个cell的时候，创建的是个cell的对象
        }

        newObject.Key = key;//先给key赋值

        this.data_array_current_keys.push(key);//把key另存为到新的数组中

        let glassNumbers: number[] = []; // 1.声明一个用来保存glass数量的数组（添加SUM列的操作）

        for (const list of data) {//然后再循环接收到的数据的每一个对象，
          let modeltypename = list['modeltype'];

          if (modeltypename == key) {//当相等的时候，再创建对象的属性
            let operationdescname = list['operationdesc'];
            let glassqtyvalue = list['glassqty'];

            glassNumbers.push(parseInt(glassqtyvalue, 10)); // 2.把glassqty放入到数组中保存（添加SUM列的操作）

            newObject.setProperty(operationdescname, glassqtyvalue);//调用对象的方法进行的操作
          }
        }
        //3.添加求和的操作（添加SUM列的操作）
        let glassSUM: number = 0;
        for (const glassqty of glassNumbers) {
          glassSUM += glassqty;
        }
        newObject.setProperty("SUM", glassSUM);

        //把这个的对象放入到数组中去
        this.data_array_current.push(newObject);
      }

    }
    console.log(this.data_array_current);
    console.log('data_array_current');
  }
  /*******转换数据格式 ：array_current的数据end****************** */

    /***********计算最后行 SUM 的内容******************** */
    getSumDate(fname: string) {
      let newobject;
      if (fname == 'Array') {
        newobject = new sum_wip_array();
      } else if (fname == 'Cf') {
        newobject = new sum_wip_cf();
      } else if (fname == 'Cell') {
        newobject = new sum_wip_cell;
      }
  
      console.log(this.data_date_current);
  
      let glassnum: number = 0;//用于计算总和的
      for (let i = 0; i < this.data_date_current.length; i++) {//循环当前的内容
        let num = this.data_date_current[i];
        glassnum += num; // 直接求一个和
        newobject.setProperty((i + 1), num);
      }
      if (fname == 'Array') {
        newobject.setProperty(36, glassnum);//最后给赋值操作
      } else if (fname == 'Cf') {
        newobject.setProperty(16, glassnum);//最后给赋值操作
      } else if (fname == 'Cell') {
        newobject.setProperty(8, glassnum);//最后给赋值操作
      }
  
      this.data_array_current.push(newobject); // 把数组放进去
    }
    /* **********计算行SUM 的内容end ************** */
      /******** 一级 ：动态的创建表格的 header 和 feild ********************* */
  create_cols() {
    //this.data_array_current_cols = [];
    // console.log('you have in method create_cols...');
    for (const value of this.wip_operation) {
      // 1.创建对象
      let colObjetc = new wip_crrent_cols;
      colObjetc.setProperty(value, value);
      //console.log('aaa  bb  ' + colObjetc);
      // 2.把对象放进到数组中去
      this.data_array_current_cols.push(colObjetc);
    }

    //最后再添加一个SUM列
    let colSUM = new wip_crrent_cols;
    colSUM.setProperty('SUM', 'SUM');
    this.data_array_current_cols.push(colSUM);
  }
  /********动态的创建表格的 header 和 feild  end********************* */

  //点击柱状图的时候，获取数据并且保存下来
  onClickChart(event) {

    this.wipTableIsShow = false;
    this.CurrentWipTableIsShow = false;

    this.isCfPH = false;

    // let datatime: Date = this.datatime;//与一级的柱状图使用同一个时间操作
    // let hourtimekeystr = this.getTimeSameToEchart(datatime);

    // this.timestrOnSecondTable = hourtimekeystr.substr(4, 6);//暂时传进到表里面的东西
    // this.clickName = event.name;//获取到事件的名称
    this.showCurrentWip();
    // const url_second_view = '/assets/demo/data/B4/arraywipcurrent1.json';
    // this.apiService.testGet(url_second_view).subscribe(
    //   (res) => {
    //     this.getStationMessage(res);//格式化数据
    //     console.log(res);
    //     console.log(11111);
    //     this.modeltypeNumber = this.modeltype.length + 1;//获取信号的数量，用于表格的设置
    //     this.lengthhead = 2 + this.eqp_id.length;
    //   },
    //   (error) => { console.log(error); }
    // );

    this.CurrentWipTableIsShow=true;//当点击的时候显示一级视图

    // this.CurrentWipTableIsShowCL=true;
    // this.CurrentWipStationTableIsShow = true;//当点击的时候显示二级视图
  }
    //下面是显示当前wip数量的内容，根据当前表格是array的还是cf的进行操作
    showCurrentWip() {
      //1.先把一级柱状图给隐藏掉
      this.wipTableIsShow = false;
      this.CurrentWipStationTableIsShow = false;
  
      //2.把保存数据的数组清空掉
      this.data_array_current_cols = [];
      this.data_array_current = [];
      let datatime: Date = this.datatime;//与一级的柱状图使用同一个时间操作
  
      const url_array_wip_current_home = '/assets/demo/data/B4/arraywipcurrent.json';
      this.apiService.testGet(url_array_wip_current_home).subscribe(
        (res) => {
          console.log(res);
          console.log('showCurrentWip');
          this.getDataWipCurrent(res, 'ARRAY');
          this.getSumDate('Array');//获取当前的Sum的事情
          this.data_array_current_cols = [];
          this.create_cols();
          this.CurrentWipTableIsShow = true;//最后将表格展示出来
        },
        (error) => { console.log(error); }
      );
    }

  /***************创建二级试图时候，接受数据的方法************************ */
  getStationMessage(data) {


    let eqp_id_tepm: string[] = [];//创建临时的操作用于去掉重复的值
    let eqp_id_tepm2: string[] = [];//创建临时的操作用于去掉重复的值
    let get_index: number[] = [];//用来保存下标使用

    this.eqp_id = [];//清空eqp_id
    this.eqp_state = [];//清空eqp_state
    this.modeltype = [];//清空型号数组
    this.stationWipMessage = [];//清空对象数组

    if (Array.isArray(data)) {

      // console.log(data);

      //1.第一个循环获取到基本的元素信息，放入到数组中进行保存
      for (const list of data) {
        for (const value in list) {
          if (value == 'eqp_id') {//保存eqp_id的信息
            this.eqp_id.push(list[value]);
          }
          if (value == 'eqp_state') {//保存eqp_state的信息
            this.eqp_state.push(list[value]);
          }
          if (value == 'modeltype') {//保存modeltype的信息
            if (!this.modeltype.includes(list[value])) {//当数组中已经存在这个的时候，那就不用再放进去了
              this.modeltype.push(list[value]);
            }
          }
        }
      }
    }


    // for (let i = 0; i < this.eqp_id.length; i++) {
    //   console.log(i + " : " + this.eqp_id[i] + " ： " + this.eqp_state[i]);
    // }


    //2.第二个循环，用于创建保存型号和wip数量的操作
    for (const modeltype of this.modeltype) {//循环modeltype

      let newObject: stationMessage = new stationMessage();//一个modeltype 创建一个临时变量用于保存对象
      newObject.setmodeltype(modeltype);//直接设置这个modeltype型号

      let listsofmodeltype: any[] = [];//用来保存和当前modeltype匹配的数据
      //1.循环找到这个型号的所有的list的信息
      for (const list of data) {
        if (modeltype == list['modeltype']) {
          listsofmodeltype.push(list);
        }
      }
      //console.log("长度 ： "+listsofmodeltype.length);

      let eqp_id_inlist: string[] = [];//用来保存这个modeltype下的所有的设备的名称
      for (const list of listsofmodeltype) {
        if (!eqp_id_inlist.includes(list['eqp_id'])) {
          eqp_id_inlist.push(list['eqp_id']);
        }
      }


      //2.遍历得到的eqp_id_inlist数组，与eqp_id进行对比
      for (const eqp_id of this.eqp_id) {
        if (eqp_id_inlist.includes(eqp_id)) {//当eqp_id在这些对象里面的时候，才进行循环，如果不再这里面的时候，直接给复制空字符串
          for (const list of listsofmodeltype) {
            if (eqp_id == list['eqp_id']) {
              newObject.setglassqtys(list['glassqty']);
            }
          }
        } else {
          newObject.setglassqtys('');
        }


      }
      //每次把创建的对象打印一下
      //console.log(newObject);
      //3.当所有的设备在这个modeltype类型下都循环完成之后，证明这个对象已经创建完成了
      this.stationWipMessage.push(newObject);

    }

    // //再用一个循环把重复的数据给删除掉
    //   console.log("内容 ： ");
    // eqp_id_tepm = this.eqp_id;
    // console.log("临时的数组是 ： "+eqp_id_tepm);

    for (let i = 0; i < this.eqp_id.length; i++) {
      eqp_id_tepm[i] = i + this.eqp_id[i];//重新添加上一个i的值这个内容
      //console.log(i+" : "+eqp_id_tepm[i]);
    }
    // console.log("1 ： " + eqp_id_tepm);
    // console.log("1 :  " + this.eqp_id);


    for (let i = 0; i < eqp_id_tepm.length; i++) {

      let eqpidtemp: string = '';//用来保存真实的设备名称
      let index: number = null;//用来保存真实的下表数据
      if (i < 10) {
        eqpidtemp = eqp_id_tepm[i].substr(1);//截取出来这个操作
        index = parseInt(eqp_id_tepm[i].substr(0, 1), 10);
      } else if (i > 9 && i < 100) {
        eqpidtemp = eqp_id_tepm[i].substr(2);//截取出来这个操作
        index = parseInt(eqp_id_tepm[i].substr(0, 2), 10);
      } else if (i > 99 && i < 1000) {
        eqpidtemp = eqp_id_tepm[i].substr(3);//截取出来这个操作
        index = parseInt(eqp_id_tepm[i].substr(0, 3), 10);
      }

      if (eqp_id_tepm2.includes(eqpidtemp)) {
        //  console.log("重复的下标是 ： " + eqp_id_tepm[i] + " : " + eqpidtemp + " : " + index);
        this.eqp_id[i] = '666666888888';//就是写成一个标志位
        this.eqp_state[i] = '666666888888';
        for (const object of this.stationWipMessage) {
          object.glassqtys[i] = '666666888888';//删除每一个对象的对应下标的数据
        }
      } else {
        eqp_id_tepm2.push(eqpidtemp);//最后这个eqp_id_temp2应该和this.eqp_id 是一样的
      }
    }

    // console.log("2 ：  " + eqp_id_tepm2);
    //  console.log("2 ：  " + this.eqp_id);//这两个应该是能够对上的才可以

    while (this.eqp_id.includes('666666888888')) {
      let index = this.eqp_id.indexOf('666666888888');
      this.eqp_id.splice(index, 1);
    }
    while (this.eqp_state.includes('666666888888')) {
      let index = this.eqp_state.indexOf('666666888888');
      this.eqp_state.splice(index, 1);
    }
    for (const object of this.stationWipMessage) {
      while (object.glassqtys.includes('666666888888')) {
        let index = object.glassqtys.indexOf('666666888888');
        object.glassqtys.splice(index, 1);
      }
    }

    // console.log("3 ：  " + eqp_id_tepm2);
    // console.log("3 ：  " + this.eqp_id);//这两个应该是能够对上的才可以
    console.log("inner eqp_id length: " + this.eqp_id.length);
    console.log("inner eqp_state length: " + this.eqp_state.length);


  }
  /***************创建二级试图时候，接受数据的方法end************************ */

  //下面这个是点击表格的表头，显示第三个视图
  toThirdTable(event) {

    let datatime: Date = this.datatime;//与一级的柱状图使用同一个时间操作
    let hourtimekeystr = this.getTimeSameToEchart(datatime);

    this.timestrOnSecondTable = hourtimekeystr.substr(4, 6);//暂时传进到表里面的东西

    this.clickName = event.target.innerText.trim(); // 获取到事件的名称,这个地方
    if (!((this.clickName === '型号') || (this.clickName === 'SUM'))) {
      this.CurrentWipTableIsShow = false;
      this.CurrentWipTableIsShowCL = false;
      this.wipTableIsShow = false;
      //1.创建要传递的参数
      const option = {
        params: {
          // hourtimekey: hourtimekeystr,
          operationdesc: this.clickName
        }
      };


      // 2.调用get方法，进行参数传递:根据不同的array  or  cf  进行相关的数据获取或操作
      let url_second_view = '/assets/demo/data/B4/arraywipcurrentstation.json';
      // if (this.title_yiji == 'Array WIP') {// 当时array的时候
      //   this.rowSpan = 3;
      //   this.thirdName = '设备';
      //   this.thirdStateIsShow = true;
      //   url_second_view = '/array' + url_second_view;
      // } else if (this.title_yiji == 'CF WIP') {// 当是cf的时候
      //   this.rowSpan = 3;
      //   this.thirdName = '设备';
      //   this.thirdStateIsShow = true;
      //   url_second_view = '/cf' + url_second_view;
      // } else if (this.title_yiji == 'Cell WIP') {
      //   this.rowSpan = 2; // 这个地方需要改一下行的数量
      //   this.thirdName = '站点名称';
      //   this.thirdStateIsShow = false;
      //   url_second_view = '/cell' + url_second_view;
      // } else {// 其他情况下显示空的
      //   url_second_view = '';
      // }

      this.apiService.testGet(url_second_view).subscribe(
        (res) => {
          this.getStationMessage(res);//格式化数据 
          console.log(res);
          console.log(this.eqp_id);
          this.modeltypeNumber = this.modeltype.length + 1;//获取信号的数量，用于表格的设置

          this.lengthhead = 2 + this.eqp_id.length;
        },
        (error) => { console.log(error); }
      );
      this.CurrentWipStationTableIsShow = true;
      //当点击的时候显示二级视图
    }
  }
    //下面是关闭一级视图的按钮
    closeTable() {
      this.CurrentWipTableIsShow = false;
      this.CurrentWipTableIsShowCL = false;
      this.wipTableIsShow = true;
    }
    //下面是关闭二级站点视图的按钮
    closeTableSecond() {
      this.CurrentWipStationTableIsShow = false;//关闭掉站点的视图
      this.wipTableIsShow = true;
    }
  

}
