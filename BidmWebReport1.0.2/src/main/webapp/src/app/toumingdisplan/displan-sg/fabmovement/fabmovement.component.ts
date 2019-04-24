import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ThirdObject, array_move_current, move_crrent_cols, StationMessage, stationMessage } from './model/array_move';


import { SumMovementArray, SumMovementCf, SumMovementCell, SumMovementCellBoth } from './model/sum_movement';
import { cf_move_current } from './model/cf_move';
import { cell_move_current, cell_move_current_both } from './model/cell_move';
import { ApiService } from '../../../common/service/api/api.service';
import { ReportUiCommonService } from '../../../report-ui/service/report-ui-common.service';
import { FullscreenService } from '../../../common/service/fullscreen.service';


@Component({
  selector: 'app-fabmovement',
  templateUrl: './fabmovement.component.html',
  styleUrls: ['./fabmovement.component.css']
})
export class FabmovementComponent implements OnInit {

  title_yiji: string = 'Array MOVEMENT';//定义的标题，有大用处的内容

  /***********下面定义一级视图 柱状图 用到的内容******************** */

  movementTableIsShow: boolean = true;//控制一级柱状图是否显示
  movementCurrentTableIsShow: boolean = false;//控制current movement 表格的显示 array 和 cf 的
  CurrentMoveStationTableIsShow: boolean = false;//控制实时的站点信息的 表格显示
  chartOption_array_cf_MOVEMENT;//柱状图的声明

  chart_cf_PH1_move; // cf move 的 ph1 的柱状图
  chart_cf_PH2_move; // cf move 的 ph2 的柱状图

  chart_cl_both_move; // cell 分产线的 柱状图
  LineName:SelectItem[]=[ // 用于保存cell 下拉选择框的中的数据
      {label:'PCL',value:'PCL'},
      {label:'PCS',value:'PCS'}
  ];
  selectedNames:string[] = []; // 用于保存被选中的数据信息

  isCfPH:boolean = false; // 控制是否存在 cf ph1 ph2  的变量
  isCellBoth:boolean = false; // 控制 cellmove 的第二个柱状图的显示与否


  move_operation: string[] = [];//用来保存站点的数组：也就是图表中的X轴的标志
  data_date_before_3: number[] = [];//下面这三个数组用来保存从数据库读出来的数据，三天的，每天一个数组来保存
  data_date_before_2: number[] = [];
  data_date_before_1: number[] = [];
  data_date_current: number[] = [];
  //下面的这个用来保存上面的数组
  dataArray: any[] = [this.data_date_before_3, this.data_date_before_2, this.data_date_before_1, this.data_date_current];


  legendArray: string[] = ['前天move', '昨天move', '今天move', '实时move', 'MOVEMENT', '标准4700'];
  legendCF: string[] = ['前天move', '昨天move', '今天move', '实时move', 'MOVEMENT', '标准4700'];
  legendCell: string[] = ['前天move', '昨天move', '今天move', '实时move', 'MOVEMENT', '标准4700'];
  // 下面的是legend的显示
  legends : string[] = [];//定义一个用来存放legends 的数组，这个需要根据当前刷新的时间来进行创建
  xAxisLegends :string[] = [];//多个x轴的标签

  move_operation_PH1: string[] = [];//用来保存站点的数组：也就是图表中的X轴的标志
  data_date_before_3_PH1: number[] = [];//下面这三个数组用来保存从数据库读出来的数据，三天的，每天一个数组来保存
  data_date_before_2_PH1: number[] = [];
  data_date_before_1_PH1: number[] = [];
  data_date_current_PH1: number[] = [];
  //下面的这个用来保存上面的数组
  dataArray_PH1: any[] = [this.data_date_before_3_PH1, this.data_date_before_2_PH1, this.data_date_before_1_PH1, this.data_date_current_PH1];
  // 下面的是legend的显示
  legends_PH1 : string[] = [];//定义一个用来存放legends 的数组，这个需要根据当前刷新的时间来进行创建
  xAxisLegends_PH1 :string[] = [];//多个x轴的标签

  move_operation_PH2: string[] = [];//用来保存站点的数组：也就是图表中的X轴的标志
  data_date_before_3_PH2: number[] = [];//下面这三个数组用来保存从数据库读出来的数据，三天的，每天一个数组来保存
  data_date_before_2_PH2: number[] = [];
  data_date_before_1_PH2: number[] = [];
  data_date_current_PH2: number[] = [];
  //下面的这个用来保存上面的数组
  dataArray_PH2: any[] = [this.data_date_before_3_PH2, this.data_date_before_2_PH2, this.data_date_before_1_PH2, this.data_date_current_PH2];
  // 下面的是legend的显示
  legends_PH2 : string[] = [];//定义一个用来存放legends 的数组，这个需要根据当前刷新的时间来进行创建
  xAxisLegends_PH2 :string[] = [];//多个x轴的标签

  move_operation_cell_both: string[] = [];//用来保存cell 第二个柱状图的 数据信息的内容站点的数组：也就是图表中的X轴的标志
  data_date_before_3_cell_both: number[] = [];//下面这三个数组用来保存从数据库读出来的数据，三天的，每天一个数组来保存
  data_date_before_2_cell_both: number[] = [];
  data_date_before_1_cell_both: number[] = [];
  data_date_current_cell_both: number[] = [];
  //下面的这个用来保存上面的数组
  dataArray_cell_both: any[] = [this.data_date_before_3_cell_both, this.data_date_before_2_cell_both, this.data_date_before_1_cell_both, this.data_date_current_cell_both];
  // 下面的是legend的显示
  legends_cell_both : string[] = [];//定义一个用来存放legends 的数组，这个需要根据当前刷新的时间来进行创建
  xAxisLegends_cell_both :string[] = [];//多个x轴的标签


  
  datatime: Date = null;//定义一个日期类:这个日期的对象是与一级视图，二级视图通用的
  //这个日期，在每次刷新，切换的时候，都需要重新new一个当前对象
  //其他的时候，不需要重新new，

  timestrOnSecondTable: string = '';//临时用在二级视图上的时间
  /***********上面定义一级视图 柱状图 用到的内容 end******************** */

  /************下面是定义current movement 数量的内容******************* */
  data_key: string[] = [];//这个用来保存modeltype:也就是每一个对象的key的值
  data_array_current: any[] = [];//这个用来保存每一行的对象的数组
  data_array_current_cols: any[] = [{ field: 'Key', header: '型号' }];//这个应该是个动态创建的，需要根据实际的情况进行创建
  data_array_current_cols_cl:any[] = []; // 单独为 cell 的创建一个保存列的名称
  data_array_current_cl_both : any[] = []; // 保存 cell both 两条产线的表格对象数据的操作
  data_array_current_cols_cl_both:any[] = []; // 单独为 cell 分line 的创建一个保存列的名称
  /************上面是定义current movement 数量的内容 end******************* */
  fronzecols = [
      { field: 'Key', header: '型号' }
  ];
  /************下面是定义站点信息的内容******************************* */
  clickName: string;//这个是控制标题显示的,同时也用在向后面传参的时候用的
  eqp_id: string[] = [];//用于保存设备id的数组
  //eqp_state:string[] = [];//用于保存设备状态的数组
  modeltype: string[] = [];//用于保存型号的数组
  stationWipMessage: any[] = [];//用于保存一行一行的数据

  rowSpan: number = 2;//这个用来控制表格锁占的行的数量
  lengthhead: number;
  modeltypeNumber: number = 0;//这个用来获取型号的数量

  objArray: ThirdObject[] = [];
  /***********上面是定义站点信息的内容end******************************* */

  /**********下面是定义cell两个视图显示相关的布尔量****************** */
  movementCellIsShow:boolean = false; // cell 控制current两个表格的显示 
  movementTableIsShowcell:boolean = false; // 控制表格显示的操作 ，和上面的是一个意思
  movementCurrentTableIsShowcell:boolean = false; // 控制cell当前 数据的表格是否显示的

  /**********下面是定义cell两个视图显示相关的布尔量end****************** */
  constructor(
      private apiService: ApiService,
      private reportComnService: ReportUiCommonService,
      private fullscreen: FullscreenService
  ) {
  }

  ngOnInit() {

      this.movementTableIsShow = true;//初始化就显示柱状图
      this.datatime = new Date();//初始化时间
      let datatimestr = this.getTimeStr(this.datatime);//这个时间是在设置一级视图的时候使用的

      //1.这里是从后台数据库里面读取出来的数据:整体上面的数据
      const url_array_move_home = '/array/move';
      this.apiService.getAll(url_array_move_home).subscribe(
          (res) => {//这地方就是得到的是数组的形式

              this.getData(res);//调用这个方法然后就得到了所有的数据信息，并且将上面的内容进行了初始化
              console.log('柱状图接收到的数组长度是 ： ' + this.data_date_current.length);
              this.createLegend();
              this.set_MOVE_Echart(this.legends, this.xAxisLegends,this.dataArray, this.move_operation, this.title_yiji, 90, datatimestr,135,35);

          },
          (error) => {
              console.log('myerror ' + error);
          }
      );


  }

  //这个是点击柱状图的响应事件:需要向后太传递一个参数
  //点击柱状图的时候，获取数据并且保存下来
  onClickChart(event) {

      if(this.title_yiji != 'Cell MOVEMENT'){
      this.isCfPH = false;
      this.isCellBoth = false;

      this.movementTableIsShow = false;
      this.CurrentMoveStationTableIsShow = false;

      let datatime: Date = this.datatime;//与一级的柱状图使用同一个时间操作
      let hourtimekeystr = this.getTimeSameToEchart(datatime);

      this.timestrOnSecondTable = hourtimekeystr.substr(4, 6);//暂时传进到表里面的东西

      this.clickName = event.name;//获取到事件的名称
      console.log(this.clickName);
      //1.创建要传递的参数
      const option = {
          params: {
              operationdesc: this.clickName
          }
      };

      //2.调用get方法，进行参数传递:根据不同的array  or  cf  进行相关的数据获取或操作
      let url_second_view = '/movecurrentstation';
      if (this.title_yiji == 'Array MOVEMENT') {//当时array的时候
          url_second_view = '/array' + url_second_view;
      } else {//当是cf的时候
          url_second_view = '/cf' + url_second_view;
      }

      this.apiService.get(url_second_view, option).subscribe(
          (res) => {
              console.log(res);
              this.getStationMessage(res);//格式化数据

              this.modeltypeNumber = this.modeltype.length + 1;//获取信号的数量，用于表格的设置
              this.lengthhead = 2 + this.eqp_id.length;
          },
          (error) => {
              console.log(error);
          }
      );

      this.CurrentMoveStationTableIsShow = true;//当点击的时候显示二级视图

  }
  }

  //下面这个是点击表格的表头，显示第三个视图
  toThirdTable(event) {
      this.isCfPH = false;
      this.isCellBoth = false;

      this.movementTableIsShow = false;
      this.CurrentMoveStationTableIsShow = false;
      this.movementCurrentTableIsShow = false;

      let datatime: Date = this.datatime;//与一级的柱状图使用同一个时间操作
      let hourtimekeystr = this.getTimeSameToEchart(datatime);

      this.timestrOnSecondTable = hourtimekeystr.substr(4, 6);//暂时传进到表里面的东西

      this.clickName = event.target.innerText.trim();//获取到事件的名称,这个地方
      //1.创建要传递的参数
      const option = {
          params: {
              operationdesc: this.clickName
          }
      };

      //2.调用get方法，进行参数传递:根据不同的array  or  cf  进行相关的数据获取或操作
      let url_second_view = '/movecurrentstation';
      if (this.title_yiji == 'Array MOVEMENT') {//当时array的时候
          url_second_view = '/array' + url_second_view;
      } else {//当是cf的时候
          url_second_view = '/cf' + url_second_view;
      }

      this.apiService.get(url_second_view, option).subscribe(
          (res) => {
              console.log(res);
              this.getStationMessage(res);//格式化数据
              this.modeltypeNumber = this.modeltype.length + 1;//获取信号的数量，用于表格的设置
              this.lengthhead = 2 + this.eqp_id.length;
          },
          (error) => {
              console.log(error);
          }
      );

      this.CurrentMoveStationTableIsShow = true;//当点击的时候显示二级视图

  }

  //展示当前movement的时候：关闭柱状图，显示当前的表格
  closeTable() {
      this.movementCurrentTableIsShow = false;
      this.movementTableIsShow = true;
      this.movementCellIsShow = false; // 关掉cell 的表格视图
  }

  closeTableSecond() {
      this.CurrentMoveStationTableIsShow = false;//关闭掉站点的视图
      this.movementTableIsShow = true;

      this.movementCellIsShow = false; // 整个的div 关掉       
      this.movementTableIsShowcell = false; // 柱状图
      this.movementCurrentTableIsShowcell = false; // current 表格
      if(this.title_yiji == 'CF MOVEMENT'){ // 特殊处理 cf 的情况
          this.isCfPH = true;
      }
  }

  //切换到array move的操作
  changeToArrayMove() {
      this.isCfPH = false;
      this.isCellBoth = false;
      this.movementCellIsShow = false; // 整个的div 关掉       
      this.movementTableIsShowcell = false; // 柱状图
      this.movementCurrentTableIsShowcell = false; // current 表格

      this.movementTableIsShow = true;//初始化就显示柱状图
      this.movementCurrentTableIsShow = false;
      this.CurrentMoveStationTableIsShow = false;


      this.datatime = new Date();//初始化时间
      let datatimestr = this.getTimeStr(this.datatime);//这个时间是在设置一级视图的时候使用的
      this.title_yiji = 'Array MOVEMENT';

      //1.这里是从后台数据库里面读取出来的数据:整体上面的数据
      const url_array_move_home = '/array/move';
      this.apiService.getAll(url_array_move_home).subscribe(
          (res) => {//这地方就是得到的是数组的形式

              this.getData(res);//调用这个方法然后就得到了所有的数据信息，并且将上面的内容进行了初始化
              console.log('柱状图接收到的数组长度是 ： ' + this.data_date_current.length);
              this.createLegend();
              this.set_MOVE_Echart(this.legends,this.xAxisLegends, this.dataArray, this.move_operation, this.title_yiji, 90, datatimestr,135,30);

          },
          (error) => {
              console.log('myerror ' + error);
          }
      );
  }

  //切换到cf move的操作
  changeToCfMove() {
      this.movementCellIsShow = false; // 整个的div 关掉       
      this.movementTableIsShowcell = false; // 柱状图
      this.movementCurrentTableIsShowcell = false; // current 表格

      this.movementTableIsShow = true;//初始化就显示柱状图
      this.movementCurrentTableIsShow = false;
      this.CurrentMoveStationTableIsShow = false;

      this.isCfPH = true;
      this.isCellBoth = false;

      this.datatime = new Date();//初始化时间
      let datatimestr = this.getTimeStr(this.datatime);//这个时间是在设置一级视图的时候使用的

      this.title_yiji = 'CF MOVEMENT';

      //1.这里是从后台数据库里面读取出来的数据:整体上面的数据
      const url_cf_move_home = '/cf/move';
      this.apiService.getAll(url_cf_move_home).subscribe(
          (res) => {//这地方就是得到的是数组的形式

              this.getData(res);//调用这个方法然后就得到了所有的数据信息，并且将上面的内容进行了初始化
              console.log('柱状图接收到的数组长度是 ： ' + this.data_date_current.length);
              this.createLegend();
              this.set_CF_MOVE_Echart(this.legends,this.xAxisLegends, this.dataArray, this.move_operation, this.title_yiji, 90, datatimestr,135,30);
          },
          (error) => {
              console.log('myerror ' + error);
          }
      );

      
      //2.这里是从后台数据库里面读取出来的数据:整体上面的数据
      const url_cf_PH1_move_home = '/cf/movePH1';
      this.apiService.getAll(url_cf_PH1_move_home).subscribe(
          (res) => {//这地方就是得到的是数组的形式

              this.getDataPH1(res);//调用这个方法然后就得到了所有的数据信息，并且将上面的内容进行了初始化
              this.createLegendPH1();
              this.set_CF_PH1_MOVE_Echart(this.legends_PH1,this.xAxisLegends_PH1, this.dataArray_PH1, this.move_operation_PH1, this.title_yiji, 45, datatimestr,85,25);
          },
          (error) => {
              console.log('myerror ' + error);
          }
      );

      setTimeout(()=>{
          //3.这里是从后台数据库里面读取出来的数据:整体上面的数据
           const url_cf_PH2_move_home = '/cf/movePH2';
           this.apiService.getAll(url_cf_PH2_move_home).subscribe(
               (res) => {//这地方就是得到的是数组的形式

               this.getDataPH2(res);//调用这个方法然后就得到了所有的数据信息，并且将上面的内容进行了初始化
               this.createLegendPH2();
              this.set_CF_PH2_MOVE_Echart(this.legends_PH2,this.xAxisLegends_PH2,this.xAxisLegends_PH1,this.dataArray_PH1, this.dataArray_PH2, this.move_operation_PH2, this.title_yiji, 45, datatimestr,85,25);
               },
              (error) => { console.log('myerror ' + error);}
           );
      },0);
     

  }

  //切换到cell move的操作
  changeToClMove(){

      this.isCfPH = false;
      this.isCellBoth = true;
      //关第一遍
      this.movementTableIsShow = true;//初始化就显示柱状图
      this.movementCurrentTableIsShow = false; // 关闭掉实时的表格
      this.CurrentMoveStationTableIsShow = false;

      this.datatime = new Date();//初始化时间
      let datatimestr = this.getTimeStr(this.datatime);//这个时间是在设置一级视图的时候使用的

      this.title_yiji = 'Cell MOVEMENT';

      //1.这里是从后台数据库里面读取出来的数据:整体上面的数据
      const url_cell_move_home = '/cell/move';
      this.apiService.getAll(url_cell_move_home).subscribe(
          (res) => {//这地方就是得到的是数组的形式

              this.getData(res);//调用这个方法然后就得到了所有的数据信息，并且将上面的内容进行了初始化
              //console.log('柱状图接收到的数组长度是 ： ' + this.data_date_current.length);
              this.createLegend();
              this.set_Cell_MOVE_Echart(this.legends,this.xAxisLegends, this.dataArray, this.move_operation, this.title_yiji, 0, datatimestr,45,30);
              //2.也一并把current的表格给显示出来：这个方法中有一个操作时把实时表格显示出来
             // this.showCurrentMove();
          },
          (error) => {
              console.log('myerror ' + error);
          }
      );
      //2.画 第二个柱状图
      const url_cell_move_both = '/cell/moveboth';
      this.apiService.getAll(url_cell_move_both).subscribe(
          (res) => {//这地方就是得到的是数组的形式
              this.getDataCellBoth(res);//调用这个方法然后就得到了所有的数据信息，并且将上面的内容进行了初始化
              this.createLegendCellBoth();
              this.set_Cell_Both_MOVE_Echart(this.legends_cell_both,this.xAxisLegends_cell_both,this.dataArray_cell_both,this.move_operation_cell_both, this.title_yiji,0,'aaa',45,30);
          },
          (error) => {
              console.log('myerror ' + error);
          }
      );
   
      //所以在下面再关掉一边
      // this.movementTableIsShow = false;//初始化就显示柱状图
      // this.movementCurrentTableIsShow = false; // 关闭掉实时的表格
      // this.CurrentMoveStationTableIsShow = false;

      // this.movementCellIsShow = true; // 整个的div 显示       
      // this.movementTableIsShowcell = true; // 柱状图
      // this.movementCurrentTableIsShowcell = false; // current 表格

  }

  //切换到 current move的操作
  showCurrentMove() {

      // 1.先把一级柱状图给隐藏掉
      this.movementTableIsShow = false;
      // 2.如果站点的表格开着的话，也一并关掉
      this.CurrentMoveStationTableIsShow = false;

      // 2.把保存数据的数组清空掉
      this.data_array_current_cols = [];
      this.data_array_current_cols_cl = [{ field: 'Key', header: '型号' }];//这个是cell 的current的表的列的
      this.data_array_current = [];
      let nowTime = new Date();
      let startTime = '';
      const endTime = "TO_CHAR(SYSDATE,'yyyymmddHH24')";
      if (nowTime.getHours() <= 6) {
          startTime = "TO_CHAR(SYSDATE-1,'yyyymmdd')||'06'";
      } else {
          startTime = "TO_CHAR(SYSDATE,'yyyymmdd')||'06'";
      }
      const option = {
          params: {
              starttime: startTime,
              endtime: endTime
          }
      };

      if (this.title_yiji == 'Array MOVEMENT') {//当 当前标题是 Array WIP 的时候，就展示array的当前wip
          this.movementCurrentTableIsShow = false;//先把其去掉，当数据准备好之后再展示出来
          const url_array_wip_current_home = '/array/currentmove';


          this.apiService.get(url_array_wip_current_home, option).subscribe(
              (res) => {
                  this.getDataMoveCurrent(res, 'ARRAY');
                  //为了画实时的表格而准备的
                  this.getSum('Array',this.move_operation,res);
                  this.create_cols();
                  this.movementCurrentTableIsShow = true;//最后将表格展示出来
              },
              (error) => {
                  console.log(error);
              }
          );
      } else if (this.title_yiji == 'CF MOVEMENT') {//当 当前标题 是 CF move的时候，就展示cf的当前move
          this.movementCurrentTableIsShow = false;//先把其去掉，当数据准备好之后再展示出来
          const url_cf_wip_current = '/cf/currentmove';


          this.apiService.get(url_cf_wip_current, option).subscribe(
              (res) => {
                  this.getDataMoveCurrent(res, 'CF');
                  this.getSum('Cf',this.move_operation,res);
                  this.create_cols();
                  this.movementCurrentTableIsShow = true;
              },
              (error) => {
                  console.log(error);
              }
          );
      }else if (this.title_yiji == 'Cell MOVEMENT') {//当 当前标题 是 Cell move的时候，就展示cell的当前move
          this.movementCurrentTableIsShow = false;//先把其去掉，当数据准备好之后再展示出来
          // 1. 当前的cell move 的表格
          const url_cl_move_current = '/cell/currentmove';
          this.apiService.get(url_cl_move_current, option).subscribe(
              (res) => {
                  this.getDataMoveCurrent(res, 'CELL');
                 // console.log(this.data_array_current);
                  this.getSum('Cell',this.move_operation,res);
                  this.create_cols();
                  this.movementCellIsShow = true; // 显示控制cell 两个表格的div
                  this.movementCurrentTableIsShowcell = true; // 显示控制cell 当前表格的div
              },
              (error) => {
                  console.log(error);
              }
          );

          // 2. 两条产线的cell move 的表格
          const url_cl_move_current_both = '/cell/currentmoveboth';
          this.apiService.get(url_cl_move_current_both).subscribe(
              (res)=>{
                  this.getDataMoveCurrentCellBoth(res);
                  //console.log(this.data_array_current_cl_both);
                  this.getSumCellBoth(this.move_operation_cell_both,res);
                  this.create_cols_cell_both();
                
              },
              (error)=>{console.log(error)}
          );
      }

  }

  // cell 的查询柱状图的操作
  searchCell(){

      if(this.selectedNames.length == 2 || this.selectedNames.length == 0){
          console.log("cell boths");
          const url_cell_move_both = '/cell/moveboth';
          this.apiService.get(url_cell_move_both).subscribe(
              (res)=>{
                  this.getDataCellBoth(res);
                  this.createLegendCellBoth();
                  this.set_Cell_Both_MOVE_Echart(this.legends_cell_both,this.xAxisLegends_cell_both,this.dataArray_cell_both,this.move_operation_cell_both,this.title_yiji,0,'aaa',45,30);
              },
              (error)=>{console.log(error)}
          );
      }else if(this.selectedNames.length == 1){ // 当只选中了一个的时候，就需要进行判断了
          const selectednames = this.selectedNames[0];
          let url_cell_move_line = '';
          if(selectednames == 'PCL'){
             url_cell_move_line = '/cell/movePCL';
          }else if(selectednames == 'PCS'){
             url_cell_move_line = '/cell/movePCS';
          }
          this.apiService.get(url_cell_move_line).subscribe(
              (res)=>{
                  this.getDataCellOne(res);
                  this.createLegendCellBoth(); // 因为一个和两个的时候 是一样的，所以只用一个方法就可以了
                  this.set_Cell_Both_MOVE_Echart(this.legends_cell_both,this.xAxisLegends_cell_both,this.dataArray_cell_both,this.move_operation_cell_both,this.title_yiji,0,'aaa',45,30);
              },
              (error)=>{console.log(error)}
          );

      }
  }
  
  // 创建最后一行的求和的操作
  getSum(fname: string,move_operation:string[],data:any) {
      let newobject;
      if (fname === 'Array') {
          newobject = new SumMovementArray();
      } else if (fname === 'Cf') {
          newobject = new SumMovementCf();
      } else if(fname == 'Cell'){
          newobject = new SumMovementCell();
      }

      let dataSum: number = 0;//用于计算最后的总和的
      for(const oper of move_operation){ // 这时候是 ：每一个站点有一个数
          let sumnum : number = 0;
          for(const object of data){
              let operationdesc = object['operationdesc'];
              if(oper == operationdesc){ // 当匹配成功的时候，取出数据进行求和操作
                  let glsqty = parseInt(object['glassqty'],10);
                  sumnum += glsqty;
              }
          }
          dataSum += sumnum; // 这个是最后的总和
          newobject.setProperty(oper,sumnum); // 把计算的结果进行求和操作
      }
      if (fname === 'Array') {
          newobject.setProperty('SUM', dataSum);//最后给赋值操作
      } else if (fname === 'Cf') {
          newobject.setProperty('SUM', dataSum);//最后给赋值操作
      } else if (fname === 'Cell') {
          newobject.setProperty('SUM', dataSum);//最后给赋值操作
      } 
      this.data_array_current.push(newobject); // 把数组放进去
  }

  //创建 cell both 的最后一行的sum的数据
  getSumCellBoth(move_operation:string[],data:any){
      let newOjbect  = new SumMovementCellBoth;
      let glassSum : number = 0; // 用于保存最后的glassqty 的总数的
      for(const oper of move_operation){
          let glssum:number = 0; // 用于保存每个站点的glsqty的数据
          for(const object of data){
              let operationdesc = object['operationdesc'];
              let glsqty = object['glassqty'];
              if(operationdesc == oper){
                  glssum += glsqty;
              }
          }
          glassSum += glssum; 
          newOjbect.setProperty(oper,glssum);
      }
      newOjbect.setProperty('SUM',glassSum);

      this.data_array_current_cl_both.push(newOjbect);
  }
  //下面是进行柱状图array  的画图工作
  set_MOVE_Echart(legendname: string[],xlends:string[], datap: any[], xAxisName: string[],
      title_text: string, rotatem: number, datatime: string,offsetfirst:number,offsetInterval:number) {//设置array_cf_wip的图

      this.chartOption_array_cf_MOVEMENT = { // 这个地方就是自己定义的那个chartOption_array_wip图表
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
          grid: {
              left: '6%',
              right: '4%',
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
                      lineStyle: {
                          color: '#455e9c'
                      }
                  },
                  axisLabel: {
                      interval: 0,//强制设置坐标轴间隔
                      rotate: rotatem,//x轴的刻度旋转度数，通过参数传递进来的
                      formatter: function (value)//设置多少个就换行
                      {
                          var ret = '';//拼接加\n返回的类目项
                          var maxLength = 21;//每项显示文字个数
                          var valLength = value.length;//X轴类目项的文字个数
                          var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                          if (rowN > 1)//如果类目项的文字大于21,
                          {
                              for (var i = 0; i < rowN; i++) {
                                  var temp = '';//每次截取的字符串
                                  var start = i * maxLength;//开始截取的位置
                                  var end = start + maxLength;//结束截取的位置
                                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                  temp = value.substring(start, end) + '\n';
                                  ret += temp; //凭借最终的字符串
                              }
                              return ret;
                          } else {
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
              {//第二个x轴
                  name: xlends[0],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]  //这个是设置名字的位置：通过内边距进行上、右、下、作的设置进行
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
                      length: offsetInterval,
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
                  name: xlends[1],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条x轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的
                      length: offsetInterval,
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
                  name: xlends[2],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval*2,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
                      length: offsetInterval,
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
                  name: xlends[3],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval*3,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
                      length: offsetInterval,
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
              {//第六个x轴:封口的轴
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval*4,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  }
              }
          ],
          yAxis: [//设置y轴
              {
                  type: 'value',
                  axisLabel: {
                      color: '#F2F6FA',
                      formatter: '{value}'//设置显示的格式
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
                  name:'标准4700',
                  type:'line',
                  data:[],
                  lineStyle:{
                      color: '#CC3300'
                  },
                  markLine: {
                      silent: true,
                      symbol:'none',
                      label:{
                          show:false
                      },
                      lineStyle:{
                          type:'solid',
                          color:'#CC3300',
                          width:2
                      },
                      data: [{yAxis:4700}]
                  }
              }
          ]
      };
  }
  //下面是 cf 柱状图的画图工作
  set_CF_MOVE_Echart(legendname: string[],xlends:string[], datap: any[], xAxisName: string[],
      title_text: string, rotatem: number, datatime: string,offsetfirst:number,xlength:number) {//设置array_cf_wip的图

      this.chartOption_array_cf_MOVEMENT = { // 这个地方就是自己定义的那个chartOption_array_wip图表
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
          grid: {
              left: '7%',
              right: '3.5%',
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
                      lineStyle: {
                          color: '#455e9c'
                      }
                  },
                  axisLabel: {
                      interval: 0,//强制设置坐标轴间隔
                      rotate: rotatem,//x轴的刻度旋转度数，通过参数传递进来的
                      formatter: function (value)//设置多少个就换行
                      {
                          var ret = '';//拼接加\n返回的类目项
                          var maxLength = 21;//每项显示文字个数
                          var valLength = value.length;//X轴类目项的文字个数
                          var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                          if (rowN > 1)//如果类目项的文字大于21,
                          {
                              for (var i = 0; i < rowN; i++) {
                                  var temp = '';//每次截取的字符串
                                  var start = i * maxLength;//开始截取的位置
                                  var end = start + maxLength;//结束截取的位置
                                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                  temp = value.substring(start, end) + '\n';
                                  ret += temp; //凭借最终的字符串
                              }
                              return ret;
                          } else {
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
              {//第二个x轴
                  name: xlends[0],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]  //这个是设置名字的位置：通过内边距进行上、右、下、作的设置进行
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst,//离x轴的距离
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
                  //data: this.setSeriesOption(data)[1].data//设置数据
                  data: datap[0]
              },
              {//第三个x轴
                  name: xlends[1],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+xlength,//离x轴的距离
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
                  name: xlends[2],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+xlength*2,//离x轴的距离
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
                  name: xlends[3],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+xlength*3,//离x轴的距离
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
              {//第六个x轴:封口的轴
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+xlength*4,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  }
              }
          ],
          yAxis: [//设置y轴
              {
                  type: 'value',
                  axisLabel: {
                      color: '#F2F6FA',
                      formatter: '{value}'//设置显示的格式
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
                  name:'标准4700',
                  type:'line',
                  data:[],
                  lineStyle:{
                      color: '#CC3300'
                  },
                  markLine: {
                      silent: true,
                      symbol:'none',
                      label:{
                          show:false
                      },
                      lineStyle:{
                          type:'solid',
                          color:'#CC3300',
                          width:2
                      },
                      data: [{yAxis:4700}]
                  }
              }
          ]
      };
  }
  // 下面是 cf ph1 的柱状图
  set_CF_PH1_MOVE_Echart(legendname: string[],xlends:string[], datap: any[], xAxisName: string[],
      title_text: string, rotatem: number, datatime: string,offsetfirst:number,xlength:number) {//设置array_cf_wip的图

      this.chart_cf_PH1_move = { // 这个地方就是自己定义的那个chartOption_array_wip图表
          tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
         
          grid: {
              left: '8%',
              right: '1%',
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
                      lineStyle: {
                          color: '#455e9c'
                      }
                  },
                  axisLabel: {
                      interval: 0,//强制设置坐标轴间隔
                      rotate: rotatem,//x轴的刻度旋转度数，通过参数传递进来的
                      formatter: function (value)//设置多少个就换行
                      {
                          var ret = '';//拼接加\n返回的类目项
                          var maxLength = 21;//每项显示文字个数
                          var valLength = value.length;//X轴类目项的文字个数
                          var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                          if (rowN > 1)//如果类目项的文字大于21,
                          {
                              for (var i = 0; i < rowN; i++) {
                                  var temp = '';//每次截取的字符串
                                  var start = i * maxLength;//开始截取的位置
                                  var end = start + maxLength;//结束截取的位置
                                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                  temp = value.substring(start, end) + '\n';
                                  ret += temp; //凭借最终的字符串
                              }
                              return ret;
                          } else {
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
          yAxis: [//设置y轴
              {
                  type: 'value',
                  axisLabel: {
                      color: '#F2F6FA',
                      formatter: function(value){
                         return value/1000+'K'
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
              }
          ]
      };
  }

   // 下面是 cf ph2 的柱状图
   set_CF_PH2_MOVE_Echart(legendname: string[],xlends:string[],xlendsPH1:String[],dataph1:any[], datap: any[], xAxisName: string[],
      title_text: string, rotatem: number, datatime: string,offsetfirst:number,xlength:number) {//设置array_cf_wip的图

      this.chart_cf_PH2_move = { // 这个地方就是自己定义的那个chartOption_array_wip图表
          tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
        
          grid: {
              left: '8%',
              right: '3%',
              bottom: '57%',

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
                      lineStyle: {
                          color: '#455e9c'
                      }
                  },
                  axisLabel: {
                      interval: 0,//强制设置坐标轴间隔
                      rotate: rotatem,//x轴的刻度旋转度数，通过参数传递进来的
                      formatter: function (value)//设置多少个就换行
                      {
                          var ret = '';//拼接加\n返回的类目项
                          var maxLength = 21;//每项显示文字个数
                          var valLength = value.length;//X轴类目项的文字个数
                          var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                          if (rowN > 1)//如果类目项的文字大于21,
                          {
                              for (var i = 0; i < rowN; i++) {
                                  var temp = '';//每次截取的字符串
                                  var start = i * maxLength;//开始截取的位置
                                  var end = start + maxLength;//结束截取的位置
                                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                  temp = value.substring(start, end) + '\n';
                                  ret += temp; //凭借最终的字符串
                              }
                              return ret;
                          } else {
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
               
              {// ph1 第三个x轴
                  name: xlendsPH1[1],
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
              {// ph1 第四个x轴
                  name: xlendsPH1[2],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+xlength*1,//离x轴的距离
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
              {// ph1 第五个x轴
                  name: xlendsPH1[3],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+xlength*2,//离x轴的距离
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
              {// ph2 第三个x轴
                  name: xlends[1],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+xlength*3,//离x轴的距离
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
                  name: xlends[2],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+xlength*4,//离x轴的距离
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
                  name: xlends[3],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+xlength*5,//离x轴的距离
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
              {//第六个x轴:封口的轴
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+xlength*6,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  }
              }
          ],
          yAxis: [//设置y轴
              {
                  type: 'value',
                  interval:1000,
                  axisLabel: {
                      color: '#F2F6FA',
                      formatter: function(value){
                          return value/1000+'K'
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
              }
          ]
      };
  }
   //下面是进行柱状的cell 的画图工作
   set_Cell_MOVE_Echart(legendname: string[], xlends:string[],datap: any[], xAxisName: string[],
      title_text: string, rotatem: number, datatime: string,offsetfirst:number,offsetInterval:number) {//设置array_cf_wip的图

      this.chartOption_array_cf_MOVEMENT = { // 这个地方就是自己定义的那个chartOption_array_wip图表
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
          grid: {
              left: '7%',
              right: '3.5%',
              bottom: '37%'
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
                      lineStyle: {
                          color: '#455e9c'
                      }
                  },
                  axisLabel: {
                      interval: 0,//强制设置坐标轴间隔
                      rotate: rotatem,//x轴的刻度旋转度数，通过参数传递进来的
                      margin: 15,//x轴的刻度离x轴的距离
                      textStyle: {//设置字体的格式
                          fontStyle: 'Times',
                          fontSize: '18',
                          color: '#F2F6FA'
                      }

                  },

              },
              {//第二个x轴
                  name: xlends[0],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]  //这个是设置名字的位置：通过内边距进行上、右、下、作的设置进行
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
                      length: offsetInterval,
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
                  name: xlends[1],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条x轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的
                      length: offsetInterval,
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
                  name: xlends[2],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval*2,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
                      length: offsetInterval,
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
                  name: xlends[3],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval*3,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
                      length: offsetInterval,
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
              {//第六个x轴:封口的轴
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval*4,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  }
              }
          ],
          yAxis: [//设置y轴
              {
                  type: 'value',
                  axisLabel: {
                      color: '#F2F6FA',
                      formatter: '{value}'//设置显示的格式
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
                  yAxisIndex: 0
              },
              {
                  name:'标准4700',
                  type:'line',
                  data:[],
                  lineStyle:{
                      color: '#CC3300'
                  },
                  markLine: {
                      silent: true,
                      symbol:'none',
                      label:{
                          show:false
                      },
                      lineStyle:{
                          type:'solid',
                          color:'#CC3300',
                          width:2
                      },
                      data: [{yAxis:4700}]
                  }
              }
          ]
      };
  }
  set_Cell_Both_MOVE_Echart(legendname: string[], xlends:string[],datap: any[], xAxisName: string[],
      title_text: string, rotatem: number, datatime: string,offsetfirst:number,offsetInterval:number) {//设置array_cf_wip的图

      this.chart_cl_both_move = { // 这个地方就是自己定义的那个chartOption_array_wip图表
          tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '9%',
              right: '4%',
              bottom: '37%'
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
                      lineStyle: {
                          color: '#455e9c'
                      }
                  },
                  axisLabel: {
                      interval: 0,//强制设置坐标轴间隔
                      rotate: rotatem,//x轴的刻度旋转度数，通过参数传递进来的
                      margin: 15,//x轴的刻度离x轴的距离
                      textStyle: {//设置字体的格式
                          fontStyle: 'Times',
                          fontSize: '18',
                          color: '#F2F6FA'
                      }

                  },

              },
              {//第二个x轴
                  name: xlends[0],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]  //这个是设置名字的位置：通过内边距进行上、右、下、作的设置进行
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
                      length: offsetInterval,
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
                  name: xlends[1],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条x轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的
                      length: offsetInterval,
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
                  name: xlends[2],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval*2,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
                      length: offsetInterval,
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
                  name: xlends[3],
                  nameLocation: 'start',    //这个是□x1的位置，在开始的位置
                  nameTextStyle: {
                      color: '#F2F6FA',
                      padding: [26, -5, 0, 0]
                  },
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval*3,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  },
                  axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
                      length: offsetInterval,
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
              {//第六个x轴:封口的轴
                  position: 'bottom',//在x轴的下面
                  offset: offsetfirst+offsetInterval*4,//离x轴的距离
                  type: 'category',
                  axisLine: {
                      lineStyle: { color: '#455e9c' },
                      onZero: false,
                      show: true//设置这一条y轴是否可见
                  }
              }
          ],
          yAxis: [//设置y轴
              {
                  type: 'value',
                  axisLabel: {
                      color: '#F2F6FA',
                      formatter: function(value){//设置显示的格式
                          if(value > 999){
                              return value/1000+'k'
                          }else{
                              return value;
                          }
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
                  yAxisIndex: 0
              }
              // {
              //     name:'标准4700',
              //     type:'line',
              //     data:[],
              //     lineStyle:{
              //         color: '#CC3300'
              //     },
              //     markLine: {
              //         silent: true,
              //         symbol:'none',
              //         label:{
              //             show:false
              //         },
              //         lineStyle:{
              //             type:'solid',
              //             color:'#CC3300',
              //             width:2
              //         },
              //         data: [{yAxis:4700}]
              //     }
              // }
          ]
      };
  }
  /********* 一个根据日期创建legend 标签名字的操作************************** */
createLegend(){

  this.legends = [];
  this.xAxisLegends = [];

   const today = new Date(); // 现在的
   const day_1 = new Date(); // 上一天的
   const day_2 = new Date(); //上两天的

   const date = today.getDate();
   const hour = today.getHours();

   if(hour > 5 ){ // 当时间大于5点的时候，就是 6 7 8 。。。点
    day_2.setDate(today.getDate()-3);
    day_1.setDate(today.getDate()-2);
    today.setDate(today.getDate()-1);
   }else{ // 否则的话需要时  日期多减一天
    day_2.setDate(today.getDate()-4);
    day_1.setDate(today.getDate()-3);
    today.setDate(today.getDate()-2);
   }
   //这个是多个x轴的
   this.xAxisLegends.push(day_2.getDate()+'日');
   this.xAxisLegends.push(day_1.getDate()+'日');
   this.xAxisLegends.push(today.getDate()+'日');
   this.xAxisLegends.push('实时');
   //legends的标签的
   this.legends.push(day_2.getDate()+'日move');
   this.legends.push(day_1.getDate()+'日move');
   this.legends.push(today.getDate()+'日move');
   this.legends.push('实时move');
   this.legends.push('标准4700');
 
 }

 createLegendPH1(){

  //this.legends = [];
  this.xAxisLegends_PH1 = [];

   const today = new Date(); // 现在的
   const day_1 = new Date(); // 上一天的
   const day_2 = new Date(); //上两天的

   const date = today.getDate();
   const hour = today.getHours();

   if(hour > 5 ){ // 当时间大于5点的时候，就是 6 7 8 。。。点
    day_2.setDate(today.getDate()-3);
    day_1.setDate(today.getDate()-2);
    today.setDate(today.getDate()-1);
   }else{ // 否则的话需要时  日期多减一天
    day_2.setDate(today.getDate()-4);
    day_1.setDate(today.getDate()-3);
    today.setDate(today.getDate()-2);
   }
   //这个是多个x轴的
   this.xAxisLegends_PH1.push(day_2.getDate()+'日');
   this.xAxisLegends_PH1.push(day_1.getDate()+'日');
   this.xAxisLegends_PH1.push(today.getDate()+'日');
   this.xAxisLegends_PH1.push('实时');
   //legends的标签的
  //  this.legends.push(day_2.getDate()+'日move');
  //  this.legends.push(day_1.getDate()+'日move');
  //  this.legends.push(today.getDate()+'日move');
  //  this.legends.push('实时move');
  //  this.legends.push('标准4700');
 
 }

 createLegendPH2(){

  //this.legends = [];
  this.xAxisLegends_PH2 = [];

   const today = new Date(); // 现在的
   const day_1 = new Date(); // 上一天的
   const day_2 = new Date(); //上两天的

   const date = today.getDate();
   const hour = today.getHours();

   if(hour > 5 ){ // 当时间大于5点的时候，就是 6 7 8 。。。点
    day_2.setDate(today.getDate()-3);
    day_1.setDate(today.getDate()-2);
    today.setDate(today.getDate()-1);
   }else{ // 否则的话需要时  日期多减一天
    day_2.setDate(today.getDate()-4);
    day_1.setDate(today.getDate()-3);
    today.setDate(today.getDate()-2);
   }
   //这个是多个x轴的
   this.xAxisLegends_PH2.push(day_2.getDate()+'日');
   this.xAxisLegends_PH2.push(day_1.getDate()+'日');
   this.xAxisLegends_PH2.push(today.getDate()+'日');
   this.xAxisLegends_PH2.push('实时');
   //legends的标签的
  //  this.legends.push(day_2.getDate()+'日move');
  //  this.legends.push(day_1.getDate()+'日move');
  //  this.legends.push(today.getDate()+'日move');
  //  this.legends.push('实时move');
  //  this.legends.push('标准4700');
 
 }
 createLegendCellBoth(){
  this.legends_cell_both = [];
  this.xAxisLegends_cell_both = [];

  const today = new Date(); // 现在的
  const day_1 = new Date(); // 上一天的
  const day_2 = new Date(); //上两天的

  const date = today.getDate();
  const hour = today.getHours();

  if(hour > 5 ){ // 当时间大于5点的时候，就是 6 7 8 。。。点
   day_2.setDate(today.getDate()-3);
   day_1.setDate(today.getDate()-2);
   today.setDate(today.getDate()-1);
  }else{ // 否则的话需要时  日期多减一天
   day_2.setDate(today.getDate()-4);
   day_1.setDate(today.getDate()-3);
   today.setDate(today.getDate()-2);
  }
  //这个是多个x轴的
  this.xAxisLegends_cell_both.push(day_2.getDate()+'日');
  this.xAxisLegends_cell_both.push(day_1.getDate()+'日');
  this.xAxisLegends_cell_both.push(today.getDate()+'日');
  this.xAxisLegends_cell_both.push('实时');
  //legends的标签的
  this.legends_cell_both.push(day_2.getDate()+'日move');
  this.legends_cell_both.push(day_1.getDate()+'日move');
  this.legends_cell_both.push(today.getDate()+'日move');
  this.legends_cell_both.push('实时move');
  this.legends_cell_both.push('标准4700');
 }

  //上面是array_wip的图

  /********一级 ： 这个是获取到数据并把数据转换成想要的格式的方法：这个是在画柱状图的时候用的************** */
  getData(data) {
      //在getData之前，先把所有的数组都晴空
      this.move_operation = [];
      this.data_date_before_3 = [];
      this.data_date_before_2 = [];
      this.data_date_before_1 = [];
      this.data_date_current = [];

      this.dataArray = [this.data_date_before_3, this.data_date_before_2, this.data_date_before_1, this.data_date_current];

      if (Array.isArray(data)) {
          for (const list of data) {//循环遍历每一个对象
              for (const value in list) {//遍历循环对象中的每一个属性
                  if (value == 'oper_desc') {
                      this.move_operation.push(list[value]);
                  }
                  if (value == 'date_before_3') {
                      this.data_date_before_3.push(list[value]);
                  }
                  if (value == 'date_before_2') {
                      this.data_date_before_2.push(list[value]);
                  }
                  if (value == 'date_before_1') {
                      this.data_date_before_1.push(list[value]);
                  }
                  if (value == 'date_current') {
                      this.data_date_current.push(list[value]);
                  }
              }
          }
      }
  }
  getDataPH1(data) {
      //在getData之前，先把所有的数组都晴空
      this.move_operation_PH1 = [];
      this.data_date_before_3_PH1 = [];
      this.data_date_before_2_PH1 = [];
      this.data_date_before_1_PH1 = [];
      this.data_date_current_PH1 = [];

      this.dataArray_PH1 = [this.data_date_before_3_PH1, this.data_date_before_2_PH1, this.data_date_before_1_PH1, this.data_date_current_PH1];

      if (Array.isArray(data)) {
          for (const list of data) {//循环遍历每一个对象
              for (const value in list) {//遍历循环对象中的每一个属性
                  if (value == 'oper_desc') {
                      this.move_operation_PH1.push(list[value]);
                  }
                  if (value == 'date_before_3') {
                      this.data_date_before_3_PH1.push(list[value]);
                  }
                  if (value == 'date_before_2') {
                      this.data_date_before_2_PH1.push(list[value]);
                  }
                  if (value == 'date_before_1') {
                      this.data_date_before_1_PH1.push(list[value]);
                  }
                  if (value == 'date_current') {
                      this.data_date_current_PH1.push(list[value]);
                  }
              }
          }
      }
  }
  getDataPH2(data) {
      //在getData之前，先把所有的数组都晴空
      this.move_operation_PH2 = [];
      this.data_date_before_3_PH2 = [];
      this.data_date_before_2_PH2 = [];
      this.data_date_before_1_PH2 = [];
      this.data_date_current_PH2 = [];

      this.dataArray_PH2 = [this.data_date_before_3_PH2, this.data_date_before_2_PH2, this.data_date_before_1_PH2, this.data_date_current_PH2];

      if (Array.isArray(data)) {
          for (const list of data) {//循环遍历每一个对象
              for (const value in list) {//遍历循环对象中的每一个属性
                  if (value == 'oper_desc') {
                      this.move_operation_PH2.push(list[value]);
                  }
                  if (value == 'date_before_3') {
                      this.data_date_before_3_PH2.push(list[value]);
                  }
                  if (value == 'date_before_2') {
                      this.data_date_before_2_PH2.push(list[value]);
                  }
                  if (value == 'date_before_1') {
                      this.data_date_before_1_PH2.push(list[value]);
                  }
                  if (value == 'date_current') {
                      this.data_date_current_PH2.push(list[value]);
                  }
              }
          }
      }
  }
  getDataCellBoth(data){
      this.move_operation_cell_both = [];
      this.data_date_before_3_cell_both = [];
      this.data_date_before_2_cell_both = [];
      this.data_date_before_1_cell_both = [];
      this.data_date_current_cell_both = [];
      this.dataArray_cell_both = [this.data_date_before_3_cell_both,this.data_date_before_2_cell_both,this.data_date_before_1_cell_both,this.data_date_current_cell_both];
      if (Array.isArray(data)) {
          for (const obj of data) {//循环遍历每一个对象
              let operationdesc = obj['oper_desc'];
              if(!this.move_operation_cell_both.includes(operationdesc)){
                  this.move_operation_cell_both.push(operationdesc);
              }
          }
      }

      for(const oper_desc of this.move_operation_cell_both){
          let data_sum_before_3 : number = 0;
          let data_sum_before_2 : number = 0;
          let data_sum_before_1 : number = 0;
          let data_sum_current : number = 0;
          for(const object of data){
              let operationdesc = object['oper_desc'];
              if(operationdesc == oper_desc){
                  data_sum_before_3 += object['date_before_3'];
                  data_sum_before_2 += object['date_before_2'];
                  data_sum_before_1 += object['date_before_1'];
                  data_sum_current += object['date_current'];
              }
          }

          this.data_date_before_3_cell_both.push(data_sum_before_3);
          this.data_date_before_2_cell_both.push(data_sum_before_2);
          this.data_date_before_1_cell_both.push(data_sum_before_1);
          this.data_date_current_cell_both.push(data_sum_current);
      }
  }
  getDataCellOne(data){
      this.move_operation_cell_both = [];
      this.data_date_before_3_cell_both = [];
      this.data_date_before_2_cell_both = [];
      this.data_date_before_1_cell_both = [];
      this.data_date_current_cell_both = [];
      this.dataArray_cell_both = [this.data_date_before_3_cell_both,this.data_date_before_2_cell_both,this.data_date_before_1_cell_both,this.data_date_current_cell_both];
      if (Array.isArray(data)) {
          for (const list of data) {//循环遍历每一个对象
              for (const value in list) {//遍历循环对象中的每一个属性
                  if (value == 'oper_desc') {
                      this.move_operation_cell_both.push(list[value]);
                  }
                  if (value == 'date_before_3') {
                      this.data_date_before_3_cell_both.push(list[value]);
                  }
                  if (value == 'date_before_2') {
                      this.data_date_before_2_cell_both.push(list[value]);
                  }
                  if (value == 'date_before_1') {
                      this.data_date_before_1_cell_both.push(list[value]);
                  }
                  if (value == 'date_current') {
                      this.data_date_current_cell_both.push(list[value]);
                  }
              }
          }
      }
  }
  /*******************转换数据格式的方法end***************************** */

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

  /********* 一级 ： 转换数据格式 ：movement_current的数据：这个是用来做表格的****************** */
  getDataMoveCurrent(data, factoryname: string) {
      this.data_key = [];
      if (Array.isArray(data)) {
          //第一个循环用于获取到key的值:,并且在这里在添加最后的求和sum的操作
          for (const list of data) {
              if (list['modeltype'] != null) {//排除为空的情况
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


          this.data_array_current = [];//清空要保存数据的数组！

          for (const key of this.data_key) {//整个循环是根据得到的key进行的对象的创建的
              //第二个循环data_key用于创建对象，并且把对象放入到数组中去
              let newObject: any;
              if (factoryname == 'ARRAY') {
                  newObject = new array_move_current;//当传进来的是一个array的时候，创建的是个array的对象
              } else if (factoryname == 'CF') {
                  newObject = new cf_move_current;//当传进来的是一个cf的时候，创建的是个cf的对象
              }else if(factoryname == 'CELL'){
                  newObject = new cell_move_current;//当传进来的是一个cell的时候，创建的是个cell的对象
              }

              newObject.Key = key; // 先给key赋值

              let glassNumbers: number[] = [];

              for (const list of data) {//然后再循环接收到的数据的每一个对象，
                  let modeltypename = list['modeltype'];

                  if (modeltypename == key) {//当相等的时候，再创建对象的属性
                      let operationdescname = list['operationdesc'];
                      let glassqtyvalue = list['glassqty'];
                      glassNumbers.push(parseInt(glassqtyvalue, 10));
                      if (newObject[operationdescname] === '') {
                          newObject.setProperty(operationdescname, glassqtyvalue);//调用对象的方法进行的操作
                      } else {
                          let preSum = parseInt(newObject[operationdescname], 10);
                          let newSum = glassqtyvalue + preSum;
                          newObject.setProperty(operationdescname, newSum);
                      }
                  }
              }

              let glassSum = 0;
              for (const glassqty of glassNumbers) {
                  glassSum += glassqty;
              }
              newObject.setProperty('SUM', glassSum);
              //把这个的对象放入到数组中去
              this.data_array_current.push(newObject);
          }

      }
  }

  // 获取 cell both 的数据对象，第二个表格的操作
  getDataMoveCurrentCellBoth(data){
      let data_key : string[] = []; // 用于保存所有的 operationdesc 的数组
      for(const object of data){
          let modeltype = object['modeltype'];
          if(!data_key.includes(modeltype)){
              data_key.push(modeltype);
          }
      }
      console.log(data_key);
      this.data_array_current_cl_both = []; // 清空用于保存对象的数组
     // let sumsum:number = 0; // 计算总和的，用来测试的，可以注释掉
      for(const key1 of data_key){
          let newObject = new cell_move_current_both;
          let glassqtys :number [] = []; // 用于保存这个key下面所有的glassqty的值，用来计算总和的
          newObject.Key = key1;
          for(const object of data){
              let modeltype = object['modeltype'];
              if(modeltype == key1){
                  let operationdesc = object['operationdesc'];
                  let glsqty = object['glassqty'];
                  glassqtys.push(glsqty); // 把这个glsqty保存起来
                  if(newObject[operationdesc] == ''){
                      newObject.setProperty(operationdesc,glsqty);
                  }else{
                      let oldglsqty = parseInt(newObject[operationdesc],10);
                      let newglsqty = parseInt(glsqty,10);
                      let glsqtys = oldglsqty+newglsqty;
                      newObject.setProperty(operationdesc,glsqtys);
                  }

              }
          }
          // 对这一行的glsqty数量进行求个和
          let glssum : number  = 0;
          for(const glsqty of glassqtys){
              glssum += glsqty;
          }
          newObject.setProperty('SUM',glssum);
          //sumsum += glssum;
          // 将上面创建的对象 保存到数组中去
          this.data_array_current_cl_both.push(newObject);
      }
      //console.log('列计算的和是 ： '+sumsum);
     
  }

  /*******转换数据格式 ：array_current的数据end****************** */

  /******** 一级 ：动态的创建表格的 header 和 feild ********************* */
  create_cols() {
      console.log('you have in method create_cols...');
      if(this.title_yiji == 'Array MOVEMENT' || this.title_yiji == 'CF MOVEMENT'){
          for (const value of this.move_operation) {
              // 1.创建对象
              let colObjetc = new move_crrent_cols;
              colObjetc.setProperty(value, value);
              console.log('aaa  bb  ' + colObjetc);
              // 2.把对象放进到数组中去
              this.data_array_current_cols.push(colObjetc);
          }
          let colSUM = new move_crrent_cols;
          colSUM.setProperty('SUM', 'SUM');
          this.data_array_current_cols.push(colSUM);
      }else if(this.title_yiji == 'Cell MOVEMENT'){
          for (const value of this.move_operation) {
              // 1.创建对象
              let colObjetc = new move_crrent_cols;
              colObjetc.setProperty(value, value);
              console.log('aaa  bb  ' + colObjetc);
              // 2.把对象放进到数组中去
              this.data_array_current_cols_cl.push(colObjetc);
          }
          let colSUM = new move_crrent_cols;
          colSUM.setProperty('SUM', 'SUM');
          this.data_array_current_cols_cl.push(colSUM);
      }
    
     
  }
  // 创建 cell  both 对应的 表格的列的操作
  create_cols_cell_both(){
      this.data_array_current_cols_cl_both = [];
      for(const oper of this.move_operation_cell_both){
          let colObject = new move_crrent_cols;
          colObject.setProperty(oper,oper);
          this.data_array_current_cols_cl_both.push(colObject);
      }
      let colObject = new move_crrent_cols;
      colObject.setProperty('SUM','SUM');
      this.data_array_current_cols_cl_both.push(colObject);
  }

  /********动态的创建表格的 header 和 feild  end********************* */

  /************创建二级视图时候，需要转换的时间格式的****************** */
  getTimeSameToEchart(datatime: Date): string {
      let hourtimekey: string = '';
      let yearstr = datatime.getFullYear().toString();
      let month = datatime.getMonth() + 1;
      let date = datatime.getDate();
      let hour = datatime.getHours();//move的小时要减 1

      if (hour < 0) {//当hour小于0的时候，说明是上一天的,先判断跨天的操作，后续应该还会涉及到跨月的操作
          date = date - 1;
          hour = 23;
      }

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

  /***************创建二级试图时候，接受数据的方法************************ */
  getStationMessage(data) {


      let eqp_id_tepm: string[] = [];//创建临时的操作用于去掉重复的值
      let eqp_id_tepm2: string[] = [];//创建临时的操作用于去掉重复的值
      let get_index: number[] = [];//用来保存下标使用

      this.eqp_id = [];//清空eqp_id
      //this.eqp_state = [];//清空eqp_state
      this.modeltype = [];//清空型号数组
      this.stationWipMessage = [];//清空对象数组

      if (Array.isArray(data)) {

          console.log(data);

          //1.第一个循环获取到基本的元素信息，放入到数组中进行保存
          for (const list of data) {
              for (const value in list) {
                  if (value == 'eqp_id') {//保存eqp_id的信息
                      this.eqp_id.push(list[value]);
                  }
                  // if(value == 'eqp_state'){//保存eqp_state的信息
                  //   this.eqp_state.push(list[value]);
                  // }
                  if (value == 'modeltype') {//保存modeltype的信息
                      if (!this.modeltype.includes(list[value])) {//当数组中已经存在这个的时候，那就不用再放进去了
                          this.modeltype.push(list[value]);
                      }
                  }
              }
          }
      } // 所有数据中的类型数组modeltype【】和设备数组eqp_id【】

      //2.第二个循环，用于创建保存型号和m数量的操作
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

          let eqp_id_inlist: string[] = [];//用来保存这个modeltype下的所有的设备的名称
          for (const list of listsofmodeltype) {
              if (!eqp_id_inlist.includes(list['eqp_id'])) {
                  eqp_id_inlist.push(list['eqp_id']);
              }
          }

          //2.遍历得到的eqp_id数组，与eqp_id进行对比
          for (const eqp_id of this.eqp_id) {
              if (eqp_id_inlist.includes(eqp_id)) {//当eqp_id在这些对象里面的时候，才进行循环，如果不再这里面的时候，直接给复制空字符串

                  let glasssum: number = 0;//记录总数
                  console.log("eqp_id : " + eqp_id);
                  for (const list of listsofmodeltype) {
                      if (eqp_id == list['eqp_id']) {
                          glasssum += parseInt(list['glassqty'], 10);//求和
                          console.log("glassqty : " + list['glassqty']);
                          console.log("glasssum : " + glasssum);
                          newObject.setglassqtys(glasssum + '');
                      }
                  }
                  console.log('###################################################');

              } else {
                  newObject.setglassqtys('');
              }
          }
          //每次把创建的对象打印一下
          console.log(newObject);
          //3.当所有的设备在这个modeltype类型下都循环完成之后，证明这个对象已经创建完成了
          this.stationWipMessage.push(newObject);

      }

      // //再用一个循环把重复的数据给删除掉
      console.log('内容 ： ');
      // eqp_id_tepm = this.eqp_id;
      // console.log("临时的数组是 ： "+eqp_id_tepm);

      for (let i = 0; i < this.eqp_id.length; i++) {
          eqp_id_tepm[i] = i + this.eqp_id[i];//重新添加上一个i的值这个内容
          //console.log(i+" : "+eqp_id_tepm[i]);
      }
      console.log('1 ： ' + eqp_id_tepm);
      console.log('1 :  ' + this.eqp_id);


      for (let i = 0; i < eqp_id_tepm.length; i++) {

          let eqpidtemp: string = '';//用来保存真实的设备名称
          let index: number = null;//用来保存真实的下表数据
          if (i < 10) {
              eqpidtemp = eqp_id_tepm[i].substr(1, 7);//截取出来这个操作
              index = parseInt(eqp_id_tepm[i].substr(0, 1), 10);
          } else {
              eqpidtemp = eqp_id_tepm[i].substr(2, 7);//截取出来这个操作
              index = parseInt(eqp_id_tepm[i].substr(0, 2), 10);
          }

          if (eqp_id_tepm2.includes(eqpidtemp)) {
              console.log('重复的下标是 ： ' + eqp_id_tepm[i] + ' : ' + eqpidtemp + ' : ' + index);
              this.eqp_id[i] = '666666888888';//就是写成一个标志位
              //this.eqp_state[i] = '666666888888';
              for (const object of this.stationWipMessage) {
                  object.glassqtys[i] = '666666888888';//删除每一个对象的对应下标的数据
              }
          } else {
              eqp_id_tepm2.push(eqpidtemp);//最后这个eqp_id_temp2应该和this.eqp_id 是一样的
          }
      }

      console.log('2 ：  ' + eqp_id_tepm2);
      console.log('2 ：  ' + this.eqp_id);//这两个应该是能够对上的才可以

      while (this.eqp_id.includes('666666888888')) {
          let index = this.eqp_id.indexOf('666666888888');
          this.eqp_id.splice(index, 1);
      }
      // while(this.eqp_state.includes('666666888888')){
      //   let index = this.eqp_state.indexOf('666666888888');
      //     this.eqp_state.splice(index,1);
      // }
      for (const object of this.stationWipMessage) {
          while (object.glassqtys.includes('666666888888')) {
              let index = object.glassqtys.indexOf('666666888888');
              object.glassqtys.splice(index, 1);
          }
      }

      console.log('3 ：  ' + eqp_id_tepm2);
      console.log('3 ：  ' + this.eqp_id);//这两个应该是能够对上的才可以


  }

  /***************创建二级试图时候，接受数据的方法end************************ */
  getStationMessage2(data) {

      this.eqp_id = [];
      this.modeltype = [];
      this.stationWipMessage = [];


      if (Array.isArray(data)) {
          //1.第一个循环获取到基本的元素信息，放入到数组中进行保存
          for (const list of data) {
              for (const value in list) {
                  if (value == 'eqp_id') {
                      if (!this.eqp_id.includes(list[value])) {
                          this.eqp_id.push(list[value]);
                      }//保存eqp_id的信息
                  }
                  // if(value == 'eqp_state'){//保存eqp_state的信息
                  //   this.eqp_state.push(list[value]);
                  // }
                  if (value == 'modeltype') {//保存modeltype的信息
                      if (!this.modeltype.includes(list[value])) {//当数组中已经存在这个的时候，那就不用再放进去了
                          this.modeltype.push(list[value]);
                      }
                  }
              }
          }
      }

      this.objArray = [];
      for (const type of this.modeltype) {
          for (const eqpid of this.eqp_id) {
              let glassqtysum: number = 0;
              let thirdObject: ThirdObject = new ThirdObject();
              for (const obj of data) {
                  if (obj['eqp_id'] === eqpid && obj['modeltype'] === type) {
                      glassqtysum += obj['glassqty'];
                  }
              }
              thirdObject.setmodeltype(type);
              thirdObject.seteqpid(eqpid);
              thirdObject.setgalssqty(glassqtysum);
              this.objArray.push(thirdObject);
          }
      }


      console.log(this.eqp_id);
      this.stationWipMessage = [];
      for (const thismodeltype of this.modeltype) {
          let newobject: StationMessage = new StationMessage();
          newobject.setModeltype(thismodeltype);


          for (const obj of this.objArray) {

              if (obj['modeltype'] == thismodeltype) {
                  let eqpid = obj.eqpid;
                  // console.log(eqpid);
                  let index = this.eqp_id.indexOf(eqpid);
                  //console.log(index);
                  newobject.setGlasssum(index, obj.galssqty + '');
              } else {

                  //newobject.setGlasssum(index,'');
              }
          }
          console.log(newobject);
          this.stationWipMessage.push(newobject);
      }
  }

}
