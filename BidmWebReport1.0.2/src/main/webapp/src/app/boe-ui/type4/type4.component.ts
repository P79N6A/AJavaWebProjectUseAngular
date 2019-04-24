import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/service/api/api.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from '../../../core/layout/retab/service/tab.service';
import { EchartSet } from '../../boe-ui/boe-chart/model/echartSet';

@Component({
  selector: 'app-type4',
  templateUrl: './type4.component.html',
  styleUrls: ['./type4.component.css']
})
export class Type4Component implements OnInit {
// echart data
chartOption;
//chartOption1-start
chartOption1={
  title: {
    text:"Array",
    x:'center',
    y: 190,
    textStyle: {
    color:'white',
    fontSize:12
    }
    },
  tooltip : {                     //提示框组件
      trigger: 'axis',           //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                                 // 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top:"5px",
    containLabel: true
},
xAxis : [
    {
      splitLine:{show: false},//去除网格线
        type : 'category',
        data : ['1st ITO','Gate','Act','SD','PVX','IOT','AT','A Bank'],
        axisLabel:{
          interval:0,//横轴信息全部显示
          rotate:30,//30度角倾斜显示
          textStyle:{
            fontSize:9 // 字体大小
        }
        },
        axisLine:{
          lineStyle:{
            color:'white',
          }
        }
    },
],
yAxis : [
    {
      splitLine:{show: false},//去除网格线
      type : 'value',
      axisLine:{
        lineStyle:{
          color:'white',
        }
      },
      max:7000
    }         
    ],
  series: [
    {
      type:'bar',
      label: {
          normal: {
              show: true,
              position: 'top',
              color:'rgb(11,133,42)'
          }
        },
      data:[564,4002,280,4634,1559,2919,3541,1384],
  }
  ],
  color:['rgb(41,107,155)']
}
//chartOption1-end

//chartOption2-start

chartOption2={
  title: {
    text:"CF",
    x:'center',
    y: 190,
    textStyle: {
    color:'white',
    fontSize:12
    }
    },
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top:"5px",
    containLabel: true
},
xAxis : [
    {
      splitLine:{show: false},//去除网格线
        type : 'category',
        data : ['BM','BLU','GRE','RED','OC','PS','FIL','F Bank','R/W'],
        axisLabel:{
          interval:0,//横轴信息全部显示
          rotate:30,//30度角倾斜显示
          textStyle:{
            fontSize:9 // 字体大小
        }
        },
        axisLine:{
          lineStyle:{
            color:'white',
          }
        }
    },
],
yAxis : [
    {
      show:false,
      type : 'value',
      max:7000,
    }         
    ],
  series: [
    {
      type:'bar',
      label: {
          normal: {
              show: true,
              position: 'top',
              color:'rgb(11,133,42)'
          }
        },
      data:[619,306,487,1760,1800,2436,2724,4607,953],
  }
  ],
  color:['rgb(41,107,155)']
}

//chartOption2-end

//chartOption3-start
chartOption3={
  title: {
    text:"Cell",
    x:'center',
    y: 193,
    textStyle: {
    color:'white',
    fontSize:12
    }
    },
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top:"5px",
    containLabel: true
},
xAxis : [
    {
      splitLine:{show: false},//去除网格线
        type : 'category',
        data : ['PI','RUB','ODF','Cut','CT','Pack','Bank'],
        axisLabel:{
          interval:0,//横轴信息全部显示
          rotate:30,//30度角倾斜显示
          textStyle:{
            fontSize:9 // 字体大小
        }
        },
        axisLine:{
          lineStyle:{
            color:'white',
          }
        }
    },
],
yAxis : [
    {
      show:false,
      type : 'value',
      max:7000
    }         
    ],
  series: [
    {
      type:'bar',
      label: {
          normal: {
              show: true,
              position: 'top',
              color:'rgb(11,133,42)'
          }
        },
      data:[156,854,806,3486,1558,1407,5791],
  }
  ],
  color:['rgb(41,107,155)']
}
 //chartOption3-end
//chartOption4-start
chartOption4={
  title: {
    text:"MDL",
    x:'center',
    y: 193,
    textStyle: {
    color:'white',
    fontSize:12
    }
    },
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top:"5px",
    containLabel: true
},
xAxis : [
    {
      splitLine:{show: false},//去除网格线
        type : 'category',
        data : ['POL','OLB','PT','Assy'],
        axisLabel:{
          interval:0,//横轴信息全部显示
          rotate:30,//30度角倾斜显示
          textStyle:{
            fontSize:9 // 字体大小
        }
        },
        axisLine:{
          lineStyle:{
            color:'white',
          }
        }
    },
],
yAxis : [
    {
      show:false,
      type : 'value',
      max:7000
    }         
    ],
  series: [
    {
      type:'bar',
      label: {
          normal: {
              show: true,
              position: 'top',
              color:'rgb(11,133,42)'
          }
        },
      data:[670,600,700,800],
  }
  ],
  color:['rgb(41,107,155)']
}


constructor(private apiService: ApiService ,private breadcrumbService: BreadcrumbService,public tService: TabService) { 

  this.breadcrumbService.setItems([
    { label: '生产看板' },
    { label: '公司级' },
  ]);
  
  // this.tService.setItems('生产看板 公司级');
}

//ngOnInit,通过url获取指定路径下的数据
ngOnInit() {
  const url = '/assets/demo/data/report-ui/type4.json';
  this.apiService.testGet(url).subscribe(
    (res) => {
      // make chart
      this.setEchart(res);
    },
    (error) => { console.log(error); }

  );
}

setEchart(data) {
  this.chartOption = {
    tooltip: {
      trigger: 'axis'
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Col6','Col7','Col8'],
        axisLine:{
          lineStyle:{
              color:'white',
          }
      },
      axisLabel:{
        interval:0,//横轴信息全部显示
        rotate:30,//30度角倾斜显示
      },
      }
    ],
    //调整echart图的大小各位置
    grid:{
      top:"5px",
      left:"40px",
      right:"5px",
      bottom:"50px",
      width:"65%", //图例宽度
      height:"65%", //图例高度
      },
    yAxis: [
      {
        type: 'value',
        axisLine:{
          lineStyle:{
              color:'white',
              width:1
          }
      },
      axisLabel:{
        interval:0,//横轴信息全部显示
      },
      splitLine: {           // 分隔线
        show: true,        // 默认显示，属性show控制显示与否
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 1,
            type: 'dotted',
            color:['yellow']
        }
    },


      }
    ],
    color:['rgb(227,222,16)'],
  
    series: this.setSeriesOption(data)
  };
}

setSeriesOption(obj) {
  const seriesArray = new Array();
  if (Array.isArray(obj)) {
    for (const list of obj) {
      const echartSet = new EchartSet();
      const dataArray = new Array();
      echartSet.name = list['key'];
      echartSet.type = 'bar';
      for (const value in list) {
        if (list.hasOwnProperty(value)) {
          if (value !== 'key') {
            dataArray.push(list[value]);
          }
        }
      }
      echartSet.data = dataArray;
      seriesArray.push(echartSet);
    }
  }
  return seriesArray;
}
}
