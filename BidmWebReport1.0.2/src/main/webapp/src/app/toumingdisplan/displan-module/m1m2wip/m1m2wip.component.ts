import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { moduleWipObject } from './model/ModuleWipObject';
import { tableData } from './model/TableData';
import { Message } from 'primeng/api';


import { TabService } from 'core/layout/retab/service/tab.service';

import { MessageService } from 'primeng/components/common/messageservice';
import { selectObject } from './model/selectItemModel';
import { col } from './model/TableCols';
import { spec } from './model/spec';
import { ApiService } from '../../../common/service/api/api.service';
import { FileUploadService } from '../../../boe-ui/boe-list/service/file-upload.service';

@Component({
  selector: 'app-m1m2wip',
  templateUrl: './m1m2wip.component.html',
  styleUrls: ['./m1m2wip.component.css']
})
export class M1m2wipComponent implements OnInit {

  factoryName: string = 'MODULE'; // 这个标题用来控制选择的对象是Module 还是 S2,查询用的

isFirst : boolean = false; // 控制一级试图还是二级试图的操作
isSecond : boolean = true; // 控制二级试图还是二级试图的操作
isUpload : boolean = false; // 控制是否是 导入生产计划的操作

checkInCode: SelectItem[] = []; // checkincode 的下拉框
selectedCodes : string[] = []; // 定义这个被选中的code

Lines: SelectItem[]; // line 的 多选框的操作     
selectedLines: string[] = []; // 这个变量就是用来保存被选中的数据的

productSize : SelectItem[]; // productsize 的多选下拉框
selectedSizes : string[] = []; // 被选中的productsize

productType : SelectItem[]; // S2 的producttype 的多选下拉框
selectedTypes : string[] = []; // 被选中的producttype
isS2 : boolean = false; // 判断是够是S2 的标志位

searchTime : Date = new Date();

xAxisLabel:string[] = []; // x轴坐标的内容 ,二级柱状图的
legendsLabel:string[] = []; // 图例的坐标内容二级柱状图的
dataArray:moduleWipObject[] = []; // 用来保存所得数据转换之后的对象的数组 二级柱状图的

tableCols:any[] = []; // 表格的 列 的定义数组 二级表格的
tableData:tableData[] = []; // 保存 表格中 数据的数组 二级表格的 

tableDataSum:number[] = []; // 保存每隔站点的总和的 数据的数组，其中的数据需要和表头的数据对应上 二级表格的

plandata : number[] = []; //保存 二级柱状图中 plan 横轴的数据
subdata : number[] = []; // 保存 二级柱状图中 差值 横轴的数据

/************上面的定义都是二级视图的 end ******************************************** */


xAxisLabel_first:string[] = []; // x轴坐标的内容 ,一级柱状图的
legendsLabel_first:string[] = []; // 图例的坐标内容，一级柱状图的
serises_array_first:any[] = []; // 柱状图的坐标系中的实际的数据内容
//dataArray_first:moduleWipObject[] = []; // 用来保存所得数据转换之后的对象的数组 一级柱状图的

//这个是一级 柱状图中 切换 module 和 s2 数据的标志变量
checkedNameFirst : boolean;
//这个是二级 界面中 切换 module 和 s2 数据的标志变量 ，暂时没有用到
checkedNameSecond : boolean;

//这个是一级 柱状图
wip_chart1_first;
wip_chart2_first;
//一级柱状图上面的尺寸别筛选下拉框
productSizeFirst1 : SelectItem[] = [];
selectedSizesFirst1 : string [] = [];
productSizeFirst2 : SelectItem[] = [];
selectedSizesFirst2 : string [] = [];
//一级柱状图上面的checkincode筛选下拉框
checkInCodeFirst1 : SelectItem[] = [];
selectedCodeFirst1 : string[] = [];
checkInCodeFirst2 : SelectItem[] = [];
selectedCodeFirst2 : string[] = [];
//一级柱状图上面的lottype筛选下拉框
lottypeFirst1 : SelectItem[] = [
    {label:'非Z',value:'非Z'},
    {label:'Z',value:'Z'}
];
selectedlottypeFirst1 : string[] = ['非Z','Z'];

lottypeFirst2 : SelectItem[] = [
    {label:'非Z',value:'非Z'},
    {label:'Z',value:'Z'}
];
selectedlottypeFirst2 : string[] = ['非Z','Z'];

//这个是二级 柱状图
wip_chart_seconde;

//页面切换按钮的名字
pageName:string = 'MonthPage'; //MonthPage 月别的页面 CurrentPage 当前的页面

//一级界面 工厂名称的切换标志
factoryNameFirst : string = 'Module';  //  Module  s2 就这两个值

//查询 切换 时候的提示信息
msgs:Message[] = [];

//一级界面的月份显示
currentMonthNameFirst : string = '';



//下面的是三级界面中的 用到的变量 
  data:spec[];
  pageData:spec[];
  cols: any[] = [
      { field: 'factory',header:'Factory'},
      { field: 'operation',header:'Opeartion'},
      { field: 'qty',header:'Qty'}
  ];
  showFlag: boolean = false;
  
  uploadedFiles: any[] = [];

  rows = 10;
  totalRecords;
  rowsPerPageOptions = [10,50,100];
  pageInfo = { pageRow: this.rows, startRow: 0 };

   //这个方法就是一个模板的方法，不知道为什么这样写，但是就是这样写
   onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}  

  constructor( private apiService: ApiService,
    public tService: TabService,
    private file: FileUploadService,
    private messageService: MessageService) {
   }

  ngOnInit() {

    // 获取当前月的名字
    this.currentMonthNameFirst = this.getCurrentMonthFirst();

    this.msgs = [{severity:'info',summary:'初始化页面',detail:'正在初始化页面'}];
    // 1.初始化的时候展示一级视图，关闭二级视图
    this.isFirst = true;
    this.isSecond =false;
    // 2.获取x轴的日期信息
    this.getXaxisLable();

   

    
     // 单独获取坐标轴
     this.legendsLabel_first =  this.getLegendsFirst('Module');
    //  console.log("thisthisthis ...");
    //  console.log(this.legendsLabel_first);
    //3.1 . 获取数据 ，创建 一级柱状图
    const url_wip_first_mnt = '/module/wipfirst';
    const optionmnt = {
        params:{
            types:['MNT']
        }
    };
    this.apiService.get(url_wip_first_mnt,optionmnt).subscribe(
        (res)=>{
            this.getDataFirst(res,'Module','MNT');
            
            this.productSizeFirst1= this.createDrownArrayFirst(this.selectedSizesFirst1);
            this.checkInCodeFirst1 = this.createDrownArrayFirst(this.selectedCodeFirst1);
            //4. 两个一级视图
            this.setWipChart1First(this.xAxisLabel_first,this.legendsLabel_first,this.serises_array_first,'Module MNT');
            
            if(this.msgs[0].severity == 'info'){
                this.msgs = [];
            }
            this.msgs.push({severity:'success',summary:'初始化页面',detail:'MNT完成'});
        },
        (error)=>{console.log(error)},   
    );
   //3.2 . 获取数据 ，创建 一级柱状图
   const url_wip_first__tv = '/module/wipfirst';
   const optiontv = {
       params:{
           types:['TV']
       }
   };
   this.apiService.get(url_wip_first__tv,optiontv).subscribe(
       (res)=>{
           this.getDataFirst(res,'Module','TV');
            
           this.productSizeFirst2 = this.createDrownArrayFirst(this.selectedSizesFirst2);
           this.checkInCodeFirst2 = this.createDrownArrayFirst(this.selectedCodeFirst2);
           //4. 两个一级视图
           this.setWipChart2First(this.xAxisLabel_first,this.legendsLabel_first,this.serises_array_first,'Module TV');
           if(this.msgs[0].severity == 'info'){
            this.msgs = [];
        }
        this.msgs.push({severity:'success',summary:'初始化页面',detail:'TV完成'});
        },
       (error)=>{console.log(error)},
   );

  }


  //下面是进行查询的方法 ： 是这个页面中的主要方法 二级柱状图
  search(){

    if(this.selectedLines.length != 0 && this.selectedCodes.length != 0 && this.selectedSizes.length != 0){

    //1.进行查询
    let timestr = this.getTimeStr(this.searchTime);
    let option;
    let url;
    if(this.factoryName == 'MODULE'){
        option = {
            params:{
                hourtimekey : timestr,
                checkincodes:this.selectedCodes,
                lines:this.selectedLines,
                productsizes:this.selectedSizes
            }
        };
       url = '/module/wip';
    }else if(this.factoryName == 'S2'){
        option = {
            params:{
                hourtimekey : timestr,
                checkincodes:this.selectedCodes,
                lines:this.selectedLines,
                productsizes:this.selectedSizes,
                producttypes:this.selectedTypes
            }
        };
       url = '/S2/wip';
    }
    
    this.apiService.get(url,option).subscribe(
        (res) =>{//成功得到所有的数据
            this.getData(res);
           // console.log(this.xAxisLabel);
           // console.log(this.legendsLabel);
            this.createTableCols(this.dataArray); 
            this.createTable1Data(this.dataArray,this.xAxisLabel); // 创建 Plan数据的内
            //查询导入的计划 : 这里面实际上是 计算了差值的
            this.importExcelInfo();                                                   
            setTimeout(() => {
                this.setWipChartSecond(this.xAxisLabel,this.legendsLabel,90,110,30,this.plandata,this.tableDataSum,this.subdata);  
            }, 1000);
           
            //console.log(this.xAxisLabel);
            //this.createTable2Data(this.dataArray);
            //console.log(this.tableData);
        },
        (error)=>{console.log(error)}
    );
  }else{
    alert("当前查询条件不足！");
  }
    
       
  
   
  }

  //下面是画一级 柱状图的 操作
  setWipChart1First(xAxisLabel:string[],lengdslabels:string[],serisesarray:any,title:string){
      this.wip_chart1_first={
        title:{
            text:title,
            x:'center',
            textStyle:{
                color:'white'
            }
        },
        tooltip : {
            trigger: 'axis',
            triggerOn:'onmousemove', // 设置提示的方式
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
                label:{
                    show:true, // 这个是显示 被触发的轴的标签
                    textStyle:{
                        color:'black'
                    }
                }
            },
            backgroundColor:'rgba(0,0,0,0.8)',
            formatter:function(params){
                let tip = '';
                let isenter : boolean = false; // 控制是否换行的标志位
                let isou : boolean = false;
                for(let i = 0; i < params.length;i++){
                    isenter = (params[i].value != 0 && params[i].seriesName != 'sum'); // 当对2求余,不为0的时候控制换行
                    isou = (i%2 == 0);
                    if(isenter){
                        tip = tip+params[i].marker+params[i].seriesName+" : "+params[i].value+"<br />";
                    }
                    // else{
                    //     let currenttip = params[i].marker+params[i].seriesName+" : "+params[i].value+";";
                    //     let lengthq = currenttip.length;
                    //     if(lengthq < 155){
                    //         let cha = 155-lengthq; // 求出差多少来
                           
                    //         for(let i = 0 ; i < cha;i++){
                    //             currenttip = currenttip+'&nbsp;';
                    //         }
                    //     };
                    //     tip = tip+currenttip;
                    // }
                }
                return tip;
            }
        },
        legend: {
            type:'scroll', // 设置滚动样式
            orient:'vertical', // 设置垂直显示模式
            right:30, // 设置位置
            bottom:20,
            top:10,
            textStyle:{
                color:'white'
              },
              pageTextStyle:{ // 图例页信息的文字样式
                  color:'white'
              },
              pageIconColor:'green', // 设置 图例箭头翻页的颜色
              pageIconInactiveColor:'gray', // 设置 不可点击的图例的颜色
            data:lengdslabels
        },
        grid: {
            left: '3%',
            right: '13%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                interval:2,
                axisLabel:{
                    color:'white'
                },
                axisLine:{
                    lineStyle:{
                         color:'white'
                    }
                   
                },
                data : xAxisLabel
            }
        ],
        yAxis : [
            {
                name:'PanleQty',
                type : 'value',
                
                yAxisIndex:0,
                axisLine:{
                    lineStyle:{
                         color:'white'
                    }
                   
                },
                axisLabel:{
                    color:'white',
                    formatter:function(value){
                    if(value > 999){
                        return value/1000+'K'
                    }else{
                        return value+''
                    }
                }
                },
                splitLine:{
                    show:false
                }
                
            },
             {
                name:'GlassQty',
                type : 'value',
                yAxisIndex:1,
                
                axisLine:{
                    lineStyle:{
                         color:'white'
                    }
                },
                axisLabel:{
                    color:'white',
                    formatter:function(value){
                    if(value > 999){
                        return value/1000+'K'
                    }else{
                        return value+''
                    }
                }
                },
                splitLine:{
                    show:false
                }
                
            }
        ],
        series :  serisesarray
      }
  }

  setWipChart2First(xAxisLabel:string[],lengdslabels:string[],serisesarray:any,title:string){
    this.wip_chart2_first={
        title:{
            text:title,
            x:'center',
            textStyle:{
                color:'white'
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
                label:{
                    show:true, // 这个是显示 被触发的轴的标签
                    textStyle:{
                        color:'black'
                    }
                }
            },
            backgroundColor:'rgba(0,0,0,0.8)',
            formatter:function(params){
                let tip = '';
                let isenter : boolean = false; // 控制是否换行的标志位
                for(let i = 0; i < params.length;i++){
                    isenter = (params[i].value != 0 && params[i].seriesName != 'sum'); // 当对2求余,不为0的时候控制换行
                    if(isenter){
                        tip = tip+params[i].marker+params[i].seriesName+" : "+params[i].value+"<br />";
                    }
                    // else{
                    //     let currenttip = params[i].marker+params[i].seriesName+" : "+params[i].value+";";
                    //     let lengthq = currenttip.length;
                    //     if(lengthq < 155){
                    //         let cha = 155-lengthq; // 求出差多少来
                           
                    //         for(let i = 0 ; i < cha;i++){
                    //             currenttip = currenttip+'&nbsp;';
                    //         }
                    //     };
                    //     tip = tip+currenttip;
                    // }
                }
                return tip;
            }
        },
        legend: {
            type:'scroll', // 设置滚动样式
            orient:'vertical', // 设置垂直显示模式
            right:30, // 设置位置
            bottom:20,
            top:10,
            textStyle:{
                color:'white'
              },
              pageTextStyle:{ // 图例页信息的文字样式
                  color:'white'
              },
              pageIconColor:'green', // 设置 图例箭头翻页的颜色
              pageIconInactiveColor:'gray', // 设置 不可点击的图例的颜色
            data:lengdslabels
        },
        grid: {
            left: '3%',
            right: '13%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                interval:0,
                axisLabel:{
                    color:'white'
                },
                axisLine:{
                    lineStyle:{
                         color:'white'
                    }
                   
                },
                data : xAxisLabel
            }
        ],
        yAxis : [
            {
                name:'PanleQty',
                type : 'value',
                yAxisIndex:0,
                axisLine:{
                    lineStyle:{
                         color:'white'
                    }
                   
                },
                axisLabel:{
                    color:'white',
                    formatter:function(value){
                    if(value > 999){
                        return value/1000+'K'
                    }else{
                        return value+''
                    }
                }
                },
                splitLine:{
                    show:false
                }
                
            },
             {
                name:'GlassQty',
                type : 'value',
                yAxisIndex:1,
                
                axisLine:{
                    lineStyle:{
                         color:'white'
                    }
                },
                axisLabel:{
                    color:'white',
                    formatter:function(value){
                    if(value > 999){
                        return value/1000+'K'
                    }else{
                        return value+''
                    }
                }
                },
                splitLine:{
                    show:false
                }
                
            }
        ],
        series :  serisesarray
      }
  }
  //下面是画二级 柱状图的操作
  setWipChartSecond(xlabel:string[],lengdslabel:string[],rotatem:number,offsetfirst:number,xlength:number,PlanNumber:number[],ACTNumber:number[],subNumber:number[]){

    

    this.wip_chart_seconde = {
      title:{
        text:this.factoryName + ' WIP' ,
        x:'center',
        y:20,
        textStyle:{
            color:'white'
        },
    },
    tooltip : {
         trigger: 'item', // 不写这个的时候，就是只显示一个的标签
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor:'rgba(0,0,0,0.7)',
    //     formatter:function(params){ // 对提示框的格式化
    //         return formatterTip(params) // 在这里调用方法，格式化提示标签的内容，为0 的就不显示了
    //    }
    },
    legend: {
        type:'scroll', // 设置滚动样式
        y:'bottom',
        left:50,
        right:50,
        //orient:'vertical', // 设置垂直样式
        // right:30,  // 设置位置
        // top:20,  
        // bottom:90, // 设置位置，和top配合可以实现展示
        textStyle:{
            color:'white'
          },
          pageTextStyle:{ // 图例页信息的文字样式
              color:'white'
          },
          pageIconColor:'green', // 设置 图例箭头翻页的颜色
          pageIconInactiveColor:'gray', // 设置 不可点击的图例的颜色
        data:lengdslabel 
    },
    grid: {
        top:'15%',
        left: '2%',
        right: '2%',
        bottom: '20%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisLabel: {
                interval: 0,//强制设置坐标轴间隔
                color:'white',
                rotate: rotatem//x轴的刻度旋转度数，通过参数传递进来的
            },
            axisLine:{ // 设置坐标轴线的样式
                lineStyle:{
                    color:'white'
                }
            },
            data : xlabel
        },
         {//第二个x轴
            name: 'Plan',
            nameLocation: 'start',    //这个是□x1的位置，在开始的位置  
            nameTextStyle: {
              color: '#F2F6FA',
              padding: [27, -5, 0, 0]  //这个是设置名字的位置：通过内边距进行上、右、下、作的设置进行
            },
            position: 'bottom',//在x轴的下面
            offset: offsetfirst,//离x轴的距离
            type: 'category',
            axisLine: {
              lineStyle: { color: '#455e9c' },
              onZero: false,
              show: true//设置这一条x轴是否可见
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
            data: PlanNumber
          },
           {//第三个x轴
            name: 'ACT',
            nameLocation: 'start',    //这个是□x1的位置，在开始的位置  
            nameTextStyle: {
              color: '#F2F6FA',
              padding: [27, -5, 0, 0]  //这个是设置名字的位置：通过内边距进行上、右、下、作的设置进行
            },
            position: 'bottom',//在x轴的下面
            offset: offsetfirst+xlength,//离x轴的距离
            type: 'category',
            axisLine: {
              lineStyle: { color: '#455e9c' },
              onZero: false,
              show: true//设置这一条x轴是否可见
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
            data: ACTNumber
          },
           {//第四个x轴
            name: '差值',
            nameLocation: 'start',    //这个是□x1的位置，在开始的位置  
            nameTextStyle: {
              color: '#F2F6FA',
              padding: [27, -5, 0, 0]  //这个是设置名字的位置：通过内边距进行上、右、下、作的设置进行
            },
            position: 'bottom',//在x轴的下面
            offset: offsetfirst+xlength*2,//离x轴的距离
            type: 'category',
            axisLine: {
              lineStyle: { color: '#455e9c' },
              onZero: false,
              show: true//设置这一条x轴是否可见
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
            data: subNumber
          },
           {//第五个x轴，最后的封口的轴
           
            position: 'bottom',//在x轴的下面
            offset: offsetfirst+xlength*3,//离x轴的距离
            type: 'category',
            axisLine: {
              lineStyle: { color: '#455e9c' },
              onZero: false,
              show: true//设置这一条x轴是否可见
            },
            // axisTick: {//这个设置的是竖着的那条线是什么样子的：暂时没有用
            //   length: xlength,
            //   inside: false,//设置方向：true:向右，false：向左
            //   lineStyle: { color: '#455e9c' }
            // },
            axisLabel: {
              color: '#F2F6FA',
              interval: 0,
              inside: false,//设置内容在这一条坐标轴的上边还是下边
              rotate: '0'
            },
            inverse: false, //设置这条轴是否反转 
           // data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
          }
    ],
    yAxis : [
        {
            name:'PanelQty',
            type : 'value',
            axisLabel:{
                color:'white',
                formatter:function(value){
                    let res = '';
                    if(value > 999){
                        res = value/1000+'k';
                    }else{
                        res = value+'';
                    }
                    return res;
                }
            },
            axisLine:{ // 设置坐标轴线的样式
                lineStyle:{
                    color:'white'
                }
            },
            yAxisIndex:0
        },
        {
          name:'GalssQty',
          type : 'value',
          axisLabel:{
            color:'white'
          },
          axisLine:{ // 设置坐标轴线的样式
            lineStyle:{
                color:'white'
            }
        },
          splitLine:{//这个是关掉横着的分割线
            show:false,
          },
          yAxisIndex:1
      }
    ],
    series:this.setSeriesOption(this.dataArray,this.legendsLabel,this.xAxisLabel)
    }

    // 自定义标签的显示内容 的方法 ： 
    function formatterTip(params){
        let tip = 'PanelQty : <br />';
        for(let i = 0; i < params.length;i++){
            if(params[i].value != 0){
                tip = tip + params[i].marker+params[i].seriesName+' : '+params[i].value+'<br />';
            }
            
        }
        return tip;
    }
  }

  //下面是获取查询参数并且创建下拉框的对象的方法 二级柱状图
  createDrownArray(data):SelectItem[]{
      const objectArray:SelectItem[] = [];

      if(Array.isArray(data)){
        for(const object of data){//遍历每一个对象，并且每一个对象只有一个属性
            let newobject = new selectObject();
            for(const prop in object){//便利属性，创建新的对象
                let valuestr:string = object[prop];
                newobject.setProperty('label',valuestr.toString().trim());//为新的对象赋值操作
                newobject.setProperty('value',valuestr.toString().trim());
            }
            objectArray.push(newobject);
        }
      }
      return objectArray;
  }
  //下面是获取时间格式的方法 ： 2019010811 二级柱状图
  getTimeStr(time?:Date):string{

      let today : Date;
        if(time != null){
            today = time;
        }else{
            today = new Date();
        }
      let year = today.getFullYear();
      let month = today.getMonth()+1;
      let date = today.getDate();
      let hour = today.getHours();

      let yeastr = year+'';
      let monthstr = '';
      let datestr = '';
      let hourstr = '';

      if(month < 10){
        monthstr = '0'+month;
      }else{
        monthstr = ''+month;
      }
      if(date < 10){
        datestr = '0'+date;
      }else{
        datestr = ''+date;
      }

      if(hour < 10){
        hourstr = '0'+hour;
      }else{
        hourstr = ''+hour;
      }
      return yeastr+monthstr+datestr+hourstr;
  }

  //下面是 进行 格式化数据的操作 ,转换成对象的操作 二级柱状图
  getData(data){
      this.xAxisLabel = [];
      this.legendsLabel = [];
      this.dataArray = [];
      this.legendsLabel.push('GlassQty');
    if(Array.isArray(data)){
        for(const obj of data){
            let newobject = new moduleWipObject();
            for(const prop in obj){
                //如果是 fgCode 的话，就保存起来=>图例的数组
                if(prop == 'hourTimeKey'){
                    newobject.setHourTimekey(obj[prop]);
                }
                if(prop == 'fgCode'){
                    if(!this.legendsLabel.includes(obj[prop])){
                        this.legendsLabel.push(obj[prop]);
                    }
                    newobject.setFgCode(obj[prop]);
                }
                if(prop == 'checkInCode'){
                    newobject.setcheckInCode(obj[prop]);
                }
                if(prop == 'line'){
                    newobject.setline(obj[prop]);
                }
                if(prop == 'productSize'){
                    newobject.setproductSize(obj[prop]);
                }
                if(prop == 'productType'){
                    newobject.setproductType(obj[prop]);
                }
                //如果是operationDesc, 就保存起来=>x轴标签的数组
                if(prop == 'operationDesc'){
                    if(!this.xAxisLabel.includes(obj[prop])){
                        this.xAxisLabel.push(obj[prop]);
                    }
                    newobject.setoperationDesc(obj[prop]);
                }
                if(prop == 'glsQty'){
                    newobject.setglsQty(parseInt(obj[prop]) );
                }
                if(prop == 'pnlQty'){
                    newobject.setpnlQty(parseInt(obj[prop]) );
                }
                
            }

            this.dataArray.push(newobject);
        }
        //最后添加一个 x轴的标签的内容
        this.xAxisLabel.push("");
       //this.legendsLabel.push('GlassQty1');
    }
  }

  //下面是创建柱状图  的 series 的方法： 二级柱状图
  setSeriesOption(obj:moduleWipObject[],legends:string[],xlabels:string[]):any[] {

    let colors:string[] = ['rgb(64, 139, 95)','rgb(80, 172, 118)','rgb(43, 190, 105)','rgb(14, 197, 91)','rgb(88, 233, 148)',
    'rgb(100, 129, 102)','rgb(140, 177, 143)','rgb(174, 216, 177)','rgb(128, 160, 130)','rgb(167, 168, 167)',
    'rgb(15, 174, 236)','rgb(40, 181, 236)','rgb(106, 203, 241)','rgb(137, 212, 241)','rgb(118, 192, 221)',
    'rgb(224, 193, 13)','rgb(190, 165, 19)','rgb(150, 129, 15)','rgb(104, 90, 11)','rgb(77, 66, 8)',
    'rgb(53, 71, 172)','rgb(64, 86, 211)','rgb(76, 102, 248)','rgb(127, 144, 241)','rgb(108, 120, 185)',
    'rgb(67, 97, 11)','rgb(113, 145, 55)','rgb(149, 179, 94)','rgb(192, 226, 128)','rgb(215, 241, 165)',
    'rgb(24, 76, 219)','rgb(50, 95, 219','rgb(82, 121, 226)','rgb(114, 146, 231)','rgb(98, 139, 252)',
    'rgb(151, 38, 216)','rgb(171, 92, 216)','rgb(185, 129, 218)','rgb(116, 62, 148)','rgb(98, 26, 139)',
    'rgb(0,0,0)']; 
    
    const seriesArray = new Array(); // 用来存放每一个series 的数组
 
    let i = 0;
    //下面创建柱子
    for(const legend of legends){ // 1.循环 legends ，它的个数就是 serice 的个数
        if(legend == 'GlassQty'){
            //创建一个line的glassQty的折线
             let seriseGlassData : number[] = []; // 用来保存glass的数据
            for(const xlable of xlabels){
                if(xlable != ''){ // 判断 是不是最后一个，如果不是才进行 数据的创建
                    let glassSum = 0;
                    for(const object  of obj){
                    let operationdesc = object.operationDesc;
                    if(operationdesc == xlable){
                        let glassqty = object.glsQty;
                        glassSum += glassqty;
                       }
                    }
                seriseGlassData.push(glassSum);
                }
               
            }

             let glassLine = {
             name:'GlassQty',
            type:'line',
            itemStyle: {
             normal: {
               color: 'rgb(0, 255,106)',
                label: {
               show:true,
               color: 'rgb(255, 255, 255)',
               position: 'top'
                }
            }
            },
            yAxisIndex:1,
             data:seriseGlassData
            }
            seriesArray.push(glassLine);
        }else{
            let objTempArray : moduleWipObject[] = []; // 用来保存fgcode 是 legend的 对象的数组
            for(const objtemp of obj){ // 循环所有的对象，取到对应 legend的 对象保存
                let fgcode = objtemp.fgCode;
                if(legend == fgcode){
                    objTempArray.push(objtemp);
                }   
            }
            //下面的准备数据的操作
            let serisePanelData : number[] = [];
            for(const xlabel of xlabels){
                let panelSum : number = 0;
                for(const obj of objTempArray){
                    let objOperationdesc = obj.operationDesc;
                    if(objOperationdesc == xlabel){
                        panelSum += obj.pnlQty;
                    }
                }           
                serisePanelData.push(panelSum); 
            }
            let panelbar = {
                name:legend,
                type:'bar',
                stack:'aaa',
                itemStyle:{
                    normal:{
                        color:colors[i]  // 在这个地方设置颜色
                    }
                },
                yAxisIndex:0,
               data:serisePanelData
           }
           i += 1; // 控制颜色的变量
            //把欻功能键的serise对象放到数组中用来返回
            seriesArray.push(panelbar);
        } 
    }
   
    // 最后将创建的这些个series返回
    return seriesArray; 
  }

  //下面是根据xAxisLable的值动态的创建 col的方法 根据原始的数据单独做的 没有与上面的任何方法有任何的联系 二级表格
  createTableCols(dataArray:any[]){
    this.tableCols = [{field:'工序',header:'工序'}];
    let xlabels : string[] = [];
    for(const obj of dataArray){
        let xlabel = obj['operationDesc'];
        let fgcode = obj['fgCode'];
        if(!xlabels.includes(xlabel)){
            xlabels.push(xlabel);
        }
    }

    xlabels.forEach((element) => {
        const newCol = new col;
        newCol.setField(element);
        newCol.setHeader(element);
        this.tableCols.push(newCol);
    });
  }
  //下面是把每隔operationdesc 中的数据求和的操作   二级表格
  createTable1Data(dataArray:any[],xlabels:string[]){
      this.tableDataSum = [];
    for(const xlable of xlabels){
        if(xlable != ''){
            let pnlsum :number = 0;
            for(const obj of dataArray){
                let operdesc = obj.operationDesc;
                if(operdesc == xlable){ // 当这个属性匹配成功的时候，说明操作成功了
                    let pnlqty = obj.pnlQty;
                    pnlsum += pnlqty;
                }
            }
            this.tableDataSum.push(pnlsum);
        }
       
    }

    // 计算最后的总和的操作:新添加的内容
    let total = 0;
    for(const aa of this.tableDataSum){
        total += aa;
    }
    this.tableDataSum.push(total);
  }
  //下面是创建表格中的数据的方法 : 根据原始的数据单独做的 没有与上面的任何方法有任何的联系  二级表格
  createTable2Data(dataArray:any[]){

    this.tableData = [];

    let xlabels : string[] = [];
    let fgCodes : string[] = [];

    for(const obj of dataArray){
        let xlabel = obj['operationDesc'];
        let fgcode = obj['fgCode'];
        if(!xlabels.includes(xlabel)){
            xlabels.push(xlabel);
        }
        if(!fgCodes.includes(fgcode)){
            fgCodes.push(fgcode);
        }
    }

    fgCodes.forEach(element => {
        let objTableData = new tableData;
        objTableData.setFgCode(element);
        //把所有 与 当前fgcode相同的对象 取出来
        let objects : moduleWipObject[] = [];
        for(const obj of dataArray){
            let fgcode = obj.fgCode;
            if(fgcode == element){
                objects.push(obj);
            }
        }
        //根据 xlabels 计算pnlqty的数量
        for(const xlabel of xlabels){
            let pnlqtySum : number = 0;
            for(const obj of objects){
                let operationdesc = obj.operationDesc;
                if(operationdesc == xlabel){
                    pnlqtySum += obj.pnlQty;
                }
            }
            objTableData.setPnlqty(pnlqtySum);
        }

        this.tableData.push(objTableData);
    });
  }

  //页面的切换操作 : 一级视图 和 二级 视图之间的切换
  changePage(msg){
    if(msg == 2){
        this.pageName = 'CurrentPage'; // 改变页面名字
        this.isFirst = false;
        this.isSecond = true; 
        if(this.factoryNameFirst == 'Module'){ // 如果月别的页面是Module，则跳转到 Module的实时页面
            this.changeToModule();
        }else{ // 如果月别的页面时 S2 ，则跳转到 S2 的实时页面
            this.changeToS2();
        }

    }else if(msg == 1){
        this.pageName = 'MonthPage'; // 改变页面名字
        this.isSecond = false; 
        this.isFirst = true;

    if(this.factoryNameFirst == 'Module'){ 
        this.changeToModuleFirst();
    }else{ 
        this.changeToS2First();
    }
    
    }
  }

  //切换到 Module 的柱状图 一级界面
  changeToModuleFirst(){ 
      this.factoryNameFirst = "Module";
      this.selectedlottypeFirst1 = ['非Z','Z'];
      this.selectedlottypeFirst2 = ['非Z','Z'];

    this.msgs = [];
    this.msgs = [{severity:'info',summary:'切换',detail:'正在切换到Module界面'}];
      // 2.获取x轴的日期信息
      this.getXaxisLable();

      // 单独获取坐标轴
     this.legendsLabel_first =  this.getLegendsFirst('Module');
    
      //3.1 . 获取数据 ，创建 一级柱状图
      const url_wip_first_mnt = '/module/wipfirst';
      const optionmnt = {
          params:{
              types:['MNT']
          }
      };
      this.apiService.get(url_wip_first_mnt,optionmnt).subscribe(
          (res)=>{
              this.getDataFirst(res,'Module','MNT');
              this.productSizeFirst1= this.createDrownArrayFirst(this.selectedSizesFirst1);
              this.checkInCodeFirst1 = this.createDrownArrayFirst(this.selectedCodeFirst1);
              //4. 两个一级视图
              this.setWipChart1First(this.xAxisLabel_first,this.legendsLabel_first,this.serises_array_first,'Module MNT');
                if(this.msgs[0].severity == 'info'){
                    this.msgs = [];
                }
                this.msgs.push({severity:'success',summary:'切换到 MNT',detail:'Module MNT 切换成功'});
            },
          (error)=>{console.log(error)}
      );
     //3.2 . 获取数据 ，创建 一级柱状图
     const url_wip_first__tv = '/module/wipfirst';
     const optiontv = {
         params:{
             types:['TV']
         }
     };
     this.apiService.get(url_wip_first__tv,optiontv).subscribe(
         (res)=>{
             this.getDataFirst(res,'Module','TV');
             this.productSizeFirst2 = this.createDrownArrayFirst(this.selectedSizesFirst2);
             this.checkInCodeFirst2 = this.createDrownArrayFirst(this.selectedCodeFirst2);
             //4. 两个一级视图
             this.setWipChart2First(this.xAxisLabel_first,this.legendsLabel_first,this.serises_array_first,'Module TV');
             if(this.msgs[0].severity == 'info'){
                this.msgs = [];
            }
            this.msgs.push({severity:'success',summary:'切换到 TV',detail:'Module TV 切换成功'});
            },
         (error)=>{console.log(error)}
     );
  
  }

  //切换到 S2 的柱状图  一级界面
  changeToS2First(){
      this.factoryNameFirst = 'S2';

      this.selectedlottypeFirst1 = ['非Z','Z'];
      this.selectedlottypeFirst2 = ['非Z','Z'];
      
    this.msgs = [];
    this.msgs = [{severity:'info',summary:'切换',detail:'正在切换到S2界面'}];
    //console.log(this.msgs[0].severity);
     // 2.获取x轴的日期信息
     this.getXaxisLable();
    
     // 单独获取坐标轴
     this.legendsLabel_first =  this.getLegendsFirst('S2');
     //3.1 . 获取数据 ，创建 一级柱状图
     const url_wip_first_mnt = '/module/wipfirstS2';
     const optionmnt = {
         params:{
             types:['COG']
         }
     };
     this.apiService.get(url_wip_first_mnt,optionmnt).subscribe(
         (res)=>{
             this.getDataFirst(res,'S2','COG');
             this.productSizeFirst1= this.createDrownArrayFirst(this.selectedSizesFirst1);
             this.checkInCodeFirst1 = this.createDrownArrayFirst(this.selectedCodeFirst1);
             //4. 两个一级视图
             this.setWipChart1First(this.xAxisLabel_first,this.legendsLabel_first,this.serises_array_first,'S2 COG');
            try {
                if(this.msgs.length >0 && this.msgs[0].severity == 'info'){
                    console.log(this.msgs[0].severity+"  s21");
                    this.msgs = [];
                }
            } catch (error) {
                console.log(error);
            } finally{
                this.msgs.push({severity:'success',summary:'切换到 COG',detail:'S2 COG 切换成功'});
            }   
           // console.log(this.msgs);
        },
         (error)=>{console.log(error)}
     );
    //3.2 . 获取数据 ，创建 一级柱状图
    const url_wip_first__tv = '/module/wipfirstS2';
    const optiontv = {
        params:{
            types:['COF']
        }
    };
    this.apiService.get(url_wip_first__tv,optiontv).subscribe(
        (res)=>{
            this.getDataFirst(res,'S2','COF');
            this.productSizeFirst2 = this.createDrownArrayFirst(this.selectedSizesFirst2);
            this.checkInCodeFirst2 = this.createDrownArrayFirst(this.selectedCodeFirst2);
            //4. 两个一级视图
            this.setWipChart2First(this.xAxisLabel_first,this.legendsLabel_first,this.serises_array_first,'S2 COF');
            try {
                if(this.msgs.length > 0 && this.msgs[0].severity == 'info'){
                  //  console.log(this.msgs[0].severity+"s22");
                    this.msgs = [];
                }
            } catch (error) {
                console.log(error);
            }finally{
                this.msgs.push({severity:'success',summary:'切换到 COF',detail:'S2 COF 切换成功'});
            }
          // console.log(this.msgs);
        },
        (error)=>{console.log(error)}
    );
 
  }
  //切换到 Module 的界面 二级界面
  changeToModule(){
    this.wip_chart_seconde = null;
     
      this.selectedCodes = [];
      this.selectedLines = [];
      this.selectedSizes = [];
      this.selectedTypes = [];


      this.isS2 = false;
      this.factoryName = 'MODULE'; // 这个是用来控制search（）方法中的查询的 
      this.factoryNameFirst = 'Module';

     //1.读取checkincode 的列表
     const url_checkincode = '/modulewip/checkincode';
     this.apiService.get(url_checkincode).subscribe(
       (res) =>{
           this.checkInCode = this.createDrownArray(res);
           for(let i = 0; i < this.checkInCode.length; i++){
               this.selectedCodes.push(this.checkInCode[i].value);//初始化赋值为全选中
           }           
       }
     );
     //2.读取line的列表
     const url_line = '/modulewip/line';
     this.apiService.get(url_line).subscribe(
       (res) =>{
           this.Lines = this.createDrownArray(res);
           for(let i = 0; i < this.Lines.length; i++){
               this.selectedLines.push(this.Lines[i].value);//初始化赋值为全选中
           }  
       }
     );
       //3.读取 productsize 的列表
     const url_productsize = '/modulewip/productsizeM';
     //console.log(this.getTimeStr());
     let timestr = this.getTimeStr();
     const option = {
       params:{
           hourtimekey : timestr
       }
     };
     this.apiService.get(url_productsize,option).subscribe(
       (res) =>{
         if(res.length == 0){
          alert("当前时段 无 productsie 数据！");
         }else{
          this.productSize = this.createDrownArray(res);
          for(let i = 0; i < this.productSize.length;i++){
              this.selectedSizes.push(this.productSize[i].value);//初始化赋值为第一个数据
          }
         }
          
       }
     );
     setTimeout(() => {
       this.search();
     }, 1000);
    
  }

  //切换到 S2 的界面 二级界面
  changeToS2(){
    this.wip_chart_seconde = null;
    
      this.selectedCodes = [];
      this.selectedLines = [];
      this.selectedSizes = [];
      this.selectedTypes = [];

      this.isS2 = true;
      this.factoryName = 'S2';
      this.factoryNameFirst = 'S2';
      this.productType = [
        {label: 'COF', value: 'COF'},
        {label: 'COG', value: 'COG'},
    ];
    this.selectedTypes.push(this.productType[0].value);
    this.selectedTypes.push(this.productType[1].value);

     //1.读取checkincode 的列表
     const url_checkincode = '/modulewip/checkincode';
     this.apiService.get(url_checkincode).subscribe(
       (res) =>{
           this.checkInCode = this.createDrownArray(res);
           for(let i = 0; i < this.checkInCode.length; i++){
               this.selectedCodes.push(this.checkInCode[i].value);//初始化赋值为全选中
           }           
       }
     );
     //2.读取line的列表
     const url_line = '/modulewip/line';
     this.apiService.get(url_line).subscribe(
       (res) =>{
           this.Lines = this.createDrownArray(res);
           for(let i = 0; i < this.Lines.length; i++){
               this.selectedLines.push(this.Lines[i].value);//初始化赋值为全选中
           }  
       }
     );
       //3.读取 productsize 的列表
     const url_productsize = '/modulewip/productsizeS';
    // console.log(this.getTimeStr());
     let timestr = this.getTimeStr();
     const option = {
       params:{
           hourtimekey : timestr
       }
     };
     this.apiService.get(url_productsize,option).subscribe(
       (res) =>{
           this.productSize = this.createDrownArray(res);
           for(let i = 0; i < this.productSize.length;i++){
               this.selectedSizes.push(this.productSize[i].value);//初始化赋值为第一个数据
           }
       }
     );
     setTimeout(() => {
       this.search();
     }, 1000);
    

  }

  // 下面是切换的 方法，，调用的是上面的 四个方法，
  handleChangeFirst(){
   if(this.checkedNameFirst){ // 当 切换的变量是 True 的时候，就展示 S2 的内容
    this.factoryNameFirst = 'S2';
    this.changeToS2First();
   }else{
    this.factoryNameFirst = 'Module';
    this.changeToModuleFirst();// 当 切换的变量是 false 的时候，就展示 Module 的内容
   }

  }

  //创建柱状图x轴的label 一级柱状图
  getXaxisLable(){
      this.xAxisLabel_first = [ '01','02','03','04','05','06','07','08','09','10', // 正常情况下是有这两个的
      '11','12','13','14','15','16','17','18','19','20',
      '21','22','23','24','25','26','27','28'];
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth()+1;
      //如果月份是 1 3 5 7 8 10 12 则是31天
       //如果月份是 4 6 9 11 则是30天
        //如果月份是 2 则判断闰年从而确定是28 天还是 29 天
      if(month == 1 ||month == 3 ||month == 5 ||month == 7 ||month == 8 ||month == 10 ||month == 12){
         this.xAxisLabel_first.push('29');
         this.xAxisLabel_first.push('30');
         this.xAxisLabel_first.push('31');
      }else if(month == 4 ||month == 6 ||month == 9 ||month == 11){
         this.xAxisLabel_first.push('29');
         this.xAxisLabel_first.push('30');
      }else if(month == 2){
          if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
             this.xAxisLabel_first.push('29');
          }
      }

  }
  // 获取柱状图数据：包括创建坐标系内的柱子的操作都可以了 一级柱状图 
  getDataFirst(data,factoryName:string,typename:string){
      
    if(Array.isArray(data) && data.length != 0){ // 当有数据的时候才操作，否则数据制空
    //console.log(data);
    //1. 获取 legend 图例的 数组
    let thislegendsLabel_first = ['GlassQty'];  // 清空用于保存 柱状图图例 的数组
    let datenames : string[] = []; // 创建一个临时的数组，用于保存 日期的信息
    let productsizes :string[] =[]; // 创建一个数组，用于保存尺寸的信息
    let checkincode :string[] = []; // 创建一个数组，用于保存checkincode的信息
    for(const object of data){
        let operationdesc = object['operationdesc'];
        let datename = object['datename'];
        let ps = object['productsize'];
        let wotype = object['wotype'];
        productsizes.push(ps);
        if(!thislegendsLabel_first.includes(operationdesc)){ // 把图例放入到数组中
            thislegendsLabel_first.push(operationdesc);
        }
        if(!datenames.includes(datename)){ // 把日期放入到数组中
            datenames.push(datename);
        }
        if(wotype != null && !checkincode.includes(wotype)){ // 把checkincode放入到数组中
            checkincode.push(wotype);
        }
    }
    productsizes.sort(); // 数组排序，有用！
    checkincode.sort(); // 数组排序，有用！
    //console.log(this.legendsLabel_first);
    //console.log(datenames);
    // 下面把productsize筛选出来
    if(typename == 'MNT' || typename == 'COG'){
        this.selectedSizesFirst1 = [];
        this.selectedCodeFirst1 = [];
        for(const ps of productsizes){
            if(!this.selectedSizesFirst1.includes(ps)){
                this.selectedSizesFirst1.push(ps);
            }
        }
        for(const ck of checkincode){
            if(!this.selectedCodeFirst1.includes(ck)){
                this.selectedCodeFirst1.push(ck);
            }
        }
       // console.log(this.selectedCodeFirst1);
    }else if(typename == 'TV' || typename == 'COF'){
        this.selectedSizesFirst2 = [];
        this.selectedCodeFirst2 = [];
        for(const ps of productsizes){
            if(!this.selectedSizesFirst2.includes(ps)){
                this.selectedSizesFirst2.push(ps);
            }
        }
        for(const ck of checkincode){
            if(!this.selectedCodeFirst2.includes(ck)){
                this.selectedCodeFirst2.push(ck);
            }
        }
       // console.log(this.selectedCodeFirst2);
    }
    
    //2. 创建 柱状图的 series 数组 :在所有的最后，需要再添加一个serise：用于显示Panel的总和的
    this.serises_array_first = []; // 清空 保存坐标系 数据的 数组
    //2.1 先把 glassqty 的折线图 画出来
    let serise_line_gls : any = null; // 这个是glassqty 的折线坐标
    let glsqtys : number[] = []; // 记录保存glassqty 的数据
    let xindex = 0; // x轴上面的索引值
    for(let i = 0; i < datenames.length;i++){ 
        let datename = datenames[i];
        let xdatename = this.xAxisLabel_first[xindex]; // 这个是x轴上的对应的日期值， 二者比较，相等才能进行下一步的操作
        let glsqty : number = 0; // 用于计算当前日期的 gls 的数量的
        while(xdatename != datename){ // 当两个不想等的时候，进行一下处理
            glsqtys.push(0); // 需要放进一个数去填充起来
            xindex += 1; //
            xdatename = this.xAxisLabel_first[xindex];
        }
        for(const object of data){
             let objectdatename = object['datename'];   
             if(objectdatename == datename){ // gls 的数量只要是当天的就可以，不需要 判断operationdesc，不用筛选 operationdesc
                let glassqty = parseInt(object['glassqty'],10); // 取出该对象的glassqty 属性,
                glsqty += glassqty; // 进行当天的gls的求和操作
            }
        }
        glsqtys.push(glsqty); // 当所有对象循环技术之后，把gls的求和的数据放入到数组中去
        xindex += 1; //这里也需要+1
    }
    
      // 再创建gls_line 的serise
      serise_line_gls = {
        name:'GlassQty', // 这个serise 的name属性就是当前 的 operationdesc
        type:'line',
        lineStyle:{
            color:'green'
        },
        itemStyle: { // 这个属性是设置折线图 图例的样式的
            normal: {
                // borderWidth: 3,
                // borderColor: 'green',
                color: 'green'
            }
        },
        label:{
            show:false, // 是否显示数值
            textStyle:{
                color:'white'
            }
        },
        yAxisIndex:1, 
        data:glsqtys // 当前serise 的值
    }
    this.serises_array_first.push(serise_line_gls); // 把折线放入到数组中去

    //2.2 创建所有的bar 的panel 的操作 ok
    let sumserise = null; // 这个是独立于所有的正常的serise之外的 总和的serise：目的是为了求每一天的总数的panel
    let sumpanelqtys : number[] = []; // 保存每一天的panel的总数
    let arraysarray : any[] = []; // 保存每一个数组的数组，用来循环且求和的操作

    for(const oper of thislegendsLabel_first){ // 每一个 legend 是一个 serise 
        if(oper != 'GlassQty'){ // 剔除掉 GlassQty 的这个数据
        let serise_bar : any = null; // 当前的 serise
        let panelqtys : number[] = []; // 记录这个serise 的数据 的数组 
            
            let xindex = 0;
            for(let i = 0;i <datenames.length;i++){ // 每一天是一个pnl 数据，需要循环所有的对象进行求和操作
                let datename = datenames[i];
                let xdatename = this.xAxisLabel_first[xindex];
                while(datename != xdatename){
                    panelqtys.push(0);
                    xindex += 1;
                    xdatename = this.xAxisLabel_first[xindex];
                }

                let pnlqty : number = 0; // 用于计算当前日期 的pnl 的数量的
                for(const object of data){ // 循环每一个对象，筛选出符合条件的对象，把数据保存起来
                    let objectdatename = object['datename'];
                    let objcetoperationdesc = object['operationdesc'];
                     if(objectdatename == datename && objcetoperationdesc == oper){ // 当两个条件都符合的时候，证明对象是当前日期，当前 工序的对象
                        let panelqty = parseInt(object['panelqty'],10) ; // 取出该对象的panleqty 属性 
                        pnlqty += panelqty;  // 进行求和操作
                    }
                }
                panelqtys.push(pnlqty); // 当所有对象循环结束之后，把pnl的求和的数据放入到数组中去  
                xindex += 1;
            }

            arraysarray.push(panelqtys); // 添加的操作 ： 把当前的数组放起来保存，用于后面的求和的操作
            let barColor = '';
            if(factoryName == 'Module'){
                barColor = this.createGridColorFirst('Module',oper);
            }else if(factoryName == 'S2'){
                barColor = this.createGridColorFirst('S2',oper);
            }
            serise_bar = { //数据创建完成之后，创建serise的对象
                name:oper, // 这个serise 的name属性就是当前 的 operationdesc
                type:'bar',
                barWidth:'25',
                itemStyle:{
                    normal:{
                        color:barColor
                    }
                },
                stack:'aa', // 为了使一个日期内的 数据都在一个柱子上，stack 属性 直接设置成当前循环的datename 的值
                yAxisIndex:0, 
                data:panelqtys // 当前serise 的值
            };
    
            this.serises_array_first.push(serise_bar); // 最后 把创建的对象放入到数组中保存  
    }
  }

  // 当所有的数组都创建好之后，开始循环
  let arrayLength = arraysarray[0].length; // 数组的长度
  for(let i = 0; i < arrayLength;i++){
      let sum = 0;
    for(const a of arraysarray){
        sum += a[i];
    }
    sumpanelqtys.push(sum);
  }

  //console.log(sumpanelqtys);

  sumserise = {
    name:'sum', // 
    type:'bar',
    barWidth:'25',
    stack:'bb', 
    itemStyle:{
        color:'rgba(0,0,0,0)'
    },
    label:{
        normal:{
            show:true,
            color:'white',
            position:'top',
            textStyle:{
                fontSize:'10'  
              },
            formatter:function(value){ // 定制化的设置label的样式
                let cc = value.value;
                if(cc > 999){
                    let aa = value.value/1000+'';
                    let bb = aa.substring(0,4)+'k';
                    return bb;
                }else{
                    return cc;
                }
               
            }
        }
    },
    barGap:'-100%',
    yAxisIndex:0, 
    data:sumpanelqtys // 当前serise 的值
  }
  this.serises_array_first.push(sumserise);
 
    }else{
        this.serises_array_first = []; // 把数据存储的数组设置为空，注意写法，否则会系统崩溃掉
    }

}

 //创建 一级柱状图 的柱子的颜色的设定，上下两个柱状图的相同类别的 颜色一致
 //module 和 s2 分别来操作：
 createGridColorFirst(factoryname:string,oper:string):string{
     let colors:string[] = ['rgb(64, 139, 95)','rgb(80, 172, 118)','rgb(43, 190, 105)','rgb(14, 197, 91)','rgb(88, 233, 148)',
                            'rgb(100, 129, 102)','rgb(140, 177, 143)','rgb(174, 216, 177)','rgb(128, 160, 130)','rgb(167, 168, 167)',
                            'rgb(15, 174, 236)','rgb(40, 181, 236)','rgb(106, 203, 241)','rgb(137, 212, 241)','rgb(118, 192, 221)',
                            'rgb(224, 193, 13)','rgb(190, 165, 19)','rgb(150, 129, 15)','rgb(104, 90, 11)','rgb(77, 66, 8)',
                            'rgb(53, 71, 172)','rgb(64, 86, 211)','rgb(76, 102, 248)','rgb(127, 144, 241)','rgb(108, 120, 185)',
                            'rgb(67, 97, 11)','rgb(113, 145, 55)','rgb(149, 179, 94)','rgb(192, 226, 128)','rgb(215, 241, 165)',
                            'rgb(24, 76, 219)','rgb(50, 95, 219','rgb(82, 121, 226)','rgb(114, 146, 231)','rgb(98, 139, 252)',
                            'rgb(151, 38, 216)','rgb(171, 92, 216)','rgb(185, 129, 218)','rgb(116, 62, 148)','rgb(98, 26, 139)',
                            'rgb(0,0,0)']; 

     let colorName = '';
     if(factoryname == 'Module'){
         
        switch(oper){
            case 'POL':colorName = colors[0];break;
            case "OLB":colorName = colors[1];break;
            case 'MMT':colorName = colors[2];break;
            case 'Line Out':colorName = colors[3];break;
            case 'MDL外观检':colorName = colors[4];break;
            case 'MDL成BOX':colorName = colors[5];break;
            case 'Packing':colorName = colors[6];break;
            case '手动委托':colorName = colors[7];break;
            case '待抽检':colorName = colors[8];break;
            case 'OQA抽检&LAT':colorName = colors[9];break;
            case '成拍':colorName = colors[10];break;
            case "ASS'Y":colorName = colors[11];break;
            case 'I/T':colorName = colors[12];break;
            case 'Aging':colorName = colors[13];break;
            case 'F/T':colorName = colors[14];break;
            case 'APP':colorName = colors[15];break;
            case 'RT':colorName = colors[16];break;
            case '待Shipping':colorName = colors[17];break;
            case 'M700待IN':colorName = colors[18];break;
            case '待FA分析':colorName = colors[19];break;
            case '待维修':colorName = colors[20];break;
            case '待主线接收':colorName = colors[21];break;
            case 'R/W品Packing':colorName = colors[22];break;
            case 'R/W品检查':colorName = colors[23];break;
            case 'RT 检测':colorName = colors[24];break;
            case 'RT 待成箱':colorName = colors[25];break;
            case 'RT 待OQA抽检':colorName = colors[26];break;
            case 'RT 待成拍':colorName = colors[27];break;
            case 'RMA品BOXING':colorName = colors[28];break;
            case 'Rework待成拍':colorName = colors[29];break;
            case '待FA分析':colorName = colors[30];break;
            case 'P/I':colorName = colors[31];break;
            case '贴POL保护膜':colorName = colors[32];break;
            case 'RMA品APP':colorName = colors[33];break;
            case '二次返修':colorName = colors[34];break;
            case 'RT OQA':colorName = colors[35];break;
            case 'T级亮点维修':colorName = colors[36];break;
            case '':colorName = colors[37];break;
            default:colorName = colors[38];break;

        }
     }else if(factoryname == 'S2'){

        switch(oper){
            case 'POL':colorName = colors[0];break;
            case "OLB":colorName = colors[1];break;
            case 'MMT外观检':colorName = colors[2];break;
            case 'PI':colorName = colors[3];break;
            case 'Assy':colorName = colors[4];break;
            case 'AGING':colorName = colors[5];break;
            case 'FI':colorName = colors[6];break;
            case 'Q-Retest':colorName = colors[7];break;
            case 'APP':colorName = colors[8];break;
            case 'BLU Repair':colorName = colors[9];break;
            case 'BOXING':colorName = colors[10];break;
            case "PALLETIZING":colorName = colors[11];break;
            case 'OQA检查':colorName = colors[12];break;
            case 'NG单片':colorName = colors[13];break;
            case '待返检':colorName = colors[14];break;
            case 'FGMS':colorName = colors[15];break;
            case '待RW In':colorName = colors[16];break;
            case 'FA待分析':colorName = colors[17];break;
            case 'RW待拆解':colorName = colors[18];break;
            case 'RW待维修':colorName = colors[19];break;
            case 'RW待组装':colorName = colors[20];break;
            case 'RW待点灯':colorName = colors[21];break;
            case 'RW待APP':colorName = colors[22];break;
            case 'FA待接收':colorName = colors[23];break;
            case 'RW待OUT':colorName = colors[24];break;
            case '待投主线':colorName = colors[25];break;
            case '尾数组装':colorName = colors[26];break;
            case '尾数点灯':colorName = colors[27];break;
            case 'RW待APP':colorName = colors[28];break;
            case '尾数APP':colorName = colors[29];break;
            case '待P/K BOX':colorName = colors[30];break;
            case '待P/K成拍':colorName = colors[31];break;
            case 'RW待抽检':colorName = colors[32];break;
            case 'RW待接收RMA品':colorName = colors[33];break;
            case 'RW待点灯RMA品':colorName = colors[34];break;
            default:colorName = colors[38];break;
        }
     }
       
    return  colorName;
 } 
 // 创建查询的多选下拉框 一级柱状图:
  createDrownArrayFirst(selecteddatas:string[]):SelectItem[]{
      let objectArray:SelectItem[] = [];
      for(const object of selecteddatas){//遍历每一个对象，并且每一个对象只有一个属性
        let newobject = new selectObject();      
        let valuestr:string = object;
        newobject.setProperty('label',valuestr.toString().trim());//为新的对象赋值操作
        newobject.setProperty('value',valuestr.toString().trim());
    
        objectArray.push(newobject);
    }
    return objectArray;
  }

  //根据尺寸别筛选的方法
  searchDataFirst(data){
    let sequence = data;
    if(this.factoryNameFirst == 'Module'){
        if(sequence == 1){ // 查询 MNT
            this.msgs = [];
            this.msgs = [{severity:'info',summary:'Module MNT 查询状态',detail:'正在查询'}];
            const option = {
                params:{
                    types:['MNT'],
                    productseizes : this.selectedSizesFirst1,
                    checkincodes : this.selectedCodeFirst1,
                    lottypes : this.selectedlottypeFirst1
                }
            };
            const url = '/module/wipfirstproduct';
            this.apiService.get(url,option).subscribe(
               (res)=>{
                this.getDataFirst(res,'Module','MNT');
                this.setWipChart1First(this.xAxisLabel_first,this.legendsLabel_first,this.serises_array_first,'Module MNT');
                
                if(this.msgs.length > 0 && this.msgs[0].severity == 'info'){
                    this.msgs = [];
                }
                this.msgs.push({severity:'success',summary:'Module MNT 查询状态',detail:'查询成功！'});
            }
            );
    
        
        }else if(sequence == 2){ // 查询 TV
            this.msgs = [];
            this.msgs = [{severity:'info',summary:'Module TV 查询状态',detail:'正在查询'}];
            const option = {
                params:{
                    types:['TV'],
                    productseizes : this.selectedSizesFirst2,
                    checkincodes : this.selectedCodeFirst2,
                    lottypes : this.selectedlottypeFirst2
                }
            };
            const url = '/module/wipfirstproduct';
            this.apiService.get(url,option).subscribe(
               (res)=>{
                this.getDataFirst(res,'Module','TV');
                this.setWipChart2First(this.xAxisLabel_first,this.legendsLabel_first,this.serises_array_first,'Module TV');
                if(this.msgs.length > 0 && this.msgs[0].severity == 'info'){
                    this.msgs = [];
                }
                this.msgs.push({severity:'success',summary:'Module TV 查询状态',detail:'查询成功！'});
            }
            );
    
        }
    }else if(this.factoryNameFirst == 'S2'){
        if(sequence == 1){ // 查询 COG
            this.msgs = [];
            this.msgs = [{severity:'info',summary:'S2 COG 查询状态',detail:'正在查询'}];
            const option = {
                params:{
                    types:['COG'],
                    productseizes : this.selectedSizesFirst1,
                    checkincodes : this.selectedCodeFirst1,
                    lottypes : this.selectedlottypeFirst1
                }
            };
            const url = '/module/wipfirstproductS2';
            this.apiService.get(url,option).subscribe(
               (res)=>{
                this.getDataFirst(res,'S2','COG');
                this.setWipChart1First(this.xAxisLabel_first,this.legendsLabel_first,this.serises_array_first,'S2 COG');
                if(this.msgs.length > 0 && this.msgs[0].severity == 'info'){
                    this.msgs = [];
                }
                this.msgs.push({severity:'success',summary:'S2 COG 查询状态',detail:'查询成功！'});
            }
            );
    
        
        }else if(sequence == 2){ // 查询 COF
            this.msgs = [];
            this.msgs = [{severity:'info',summary:'S2 COF 查询状态',detail:'正在查询'}];
            const option = {
                params:{
                    types:['COF'],
                    productseizes : this.selectedSizesFirst2,
                    checkincodes : this.selectedCodeFirst2,
                    lottypes : this.selectedlottypeFirst2
                }
            };
            const url = '/module/wipfirstproductS2';
            this.apiService.get(url,option).subscribe(
               (res)=>{
                this.getDataFirst(res,'S2','COF');
                this.setWipChart2First(this.xAxisLabel_first,this.legendsLabel_first,this.serises_array_first,'S2 COF');
                if(this.msgs.length > 0 && this.msgs[0].severity == 'info'){
                    this.msgs = [];
                }
                this.msgs.push({severity:'success',summary:'S2 COF 查询状态',detail:'查询成功！'});
            }
            );
    
        }
    }

  }
  // 一级界面上面的月份的显示
  getCurrentMonthFirst():string{
    let currentMonth : string = '';
    const currentdate : Date = new Date();
    let year = currentdate.getFullYear();
    let month = currentdate.getMonth()+1;
    let monthstr = '';
    if(month < 10){
        monthstr = '0'+month;
    }else{
        monthstr = ''+month;
    }
    currentMonth = year+'年'+monthstr+'月';
    return currentMonth;
  }
  //获取 一级界面的柱状图的legend的方法：单独写的原因是：查询的另一个表
  getLegendsFirst(factoryname:string):string[]{
    let legends : string[] = ['GlassQty']; // 先放上GlassQty的图例，然后就可以了
    let url = '/module/legend';
    let option = null;
    if(factoryname == 'Module'){
        option={
            params:{
                factoryname:'MODULE'
            }
        }
    }else if(factoryname == 'S2'){
        option={
            params:{
                factoryname:'S2MODULE'
            }
        }
    }
    this.apiService.get(url,option).subscribe(
        (res)=>{
            for(const object of res){
                let ln = object['legendName'];
                legends.push(ln);
            }
        }
    );
    return legends;
  }

  //下面是 倒入生产计划的 方法  三级界面的操作
  changePageFrom2to3(){
      this.isSecond = false;
      this.isUpload = true;

  }

  // 下面是 从3级界面 返回到 2级界面的方法
  changePageFrom3to2(){
      this.isUpload = false;
      this.isSecond = true;
      //导入 数据成功之后 ，返回的时候需要从数据库中读取 数据
      this.importExcelInfo();
  }

  //下面这个是上传文件的方法：
  onBasicUpload(event){
   // console.log(event);
    const response_ = JSON.parse(event.xhr.response);
    let localPath = response_.localPath;
    //console.log(localPath);
    const options = 
    {
        params:{
            localPath : localPath
        }
    }
    this.apiService.get('/ModuleWipspec/excelUpload',options).subscribe(
      (res)=>{
            this.data = <spec[]>res; // 返回的这个结果集是一条一条数据的数组
            this.totalRecords = this.data.length;
            //下面这一行实现的是一个翻页的功能，根据每一页行数显示对应行数表格的是数据信息
            this.pageData = this.data.slice(this.pageInfo.startRow,this.pageInfo.startRow + this.pageInfo.pageRow);
            this.showFlag = true;
         },
      (error) => {
          console.log(error);
      }
    );
  }
 //保存数据的方式 ：
    saveExcelImportInfo(){
        const options = 
        { 
            "moduleWipPlanVOList" : this.data // 传到服务端的参数就是 导入进来的数据
        }
        this.apiService.put('/ModuleWipspec/excelImport',options).subscribe(
        (res)=>{
                this.showFlag = false;
                this.addSingle('Data has been inserted into database');
            },
        (error) => {
            console.log(error);
        }
        );
    }
   //取消的操作： 数据清空，页面信息清空，保存或取消的按钮隐藏
    cancel(){
     this.data = [];
     this.pageData = [];
     this.showFlag = false;
    }
    // 显示 保存到数据库中成功的  信息的方法
    addSingle(msg) {
        this.messageService.add({severity:'success', summary:'save success', detail:msg});
    }
    

  paginate(event) {
    this.pageInfo.pageRow = event['rows'];
    this.pageInfo.startRow = event['first'];      
    this.search1(event.page+1); 
    this.pageData = this.data.slice(this.pageInfo.startRow,this.pageInfo.startRow + this.pageInfo.pageRow);
  }

  search1(page){
  }

  //从数据库中读取出导入到 数据库中的数据的方法:顺便把数据给处理了
  importExcelInfo(){
      this.plandata = [];
      this.subdata = [];
      let factoryname = this.factoryNameFirst;
      console.log(factoryname);
    const url = '/ModuleWipspec/dataImport';
    const option = {
        params:{
            factory : factoryname
        }
    }
    this.apiService.get(url,option).subscribe(
        (res)=>{
            console.log(this.xAxisLabel.length);
            console.log(this.xAxisLabel);
            // 循环x轴的标签 ，进行操作,一个标签对应一个数
            for(const label of this.xAxisLabel){
                for(const obj of res){
                    if(label == obj['operation']){ // 当匹配上的时候，就执行这个操作
                        this.plandata.push(parseInt(obj['qty']));
                    }
                }
            }
           //计算 plan的总数
           let plansum : number = 0;
           for(let i = 0; i < this.plandata.length;i++){
            plansum += this.plandata[i];
           }
           this.plandata.push(plansum);

           //下面计算差值
           for(let i = 0;i < this.plandata.length;i++){
            this.subdata.push(this.tableDataSum[i]-this.plandata[i]);
           }
        },
        (error)=>{console.log(error)}
    );
  }

}
