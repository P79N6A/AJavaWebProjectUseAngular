import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../common/service/api/api.service';
import { spec } from '../module/spec';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { alarm } from '../module/alarm';
import { isObject } from 'util';
import { EchartSet } from '../module/EchartSet';
import { FileUploadService } from 'app/boe-ui/boe-list/service/file-upload.service';

@Component({
  selector: 'app-spec-table',
  templateUrl: './spec-table.component.html',
  styleUrls: ['./spec-table.component.css']
})
export class SpecTableComponent implements OnInit,OnDestroy  {
  ngOnDestroy(): void {
    this.interval.clearInterval();
  }

  //data
  data:spec[];
  cols: any[];
  addspec: spec = new spec();
  selectedData;
  deleteddata:spec[];


  //弹窗数据显示与数据module
  modalVisible = false;

  checkUpdate = false;

  //echarts
  selectedTimeOption;
  timeOption: any[];
  chartOption;
  xlist: any[];
  datalist: any[];
  isDisplay = false;
  isdelete = false;
  echartdata:alarm[];
  setechart = new EchartSet();
  spec1 = new Array();
  spec2 = new Array();
  Actcolor = new Array();
  DataColor = new Array();
  etitle:string;
  time;
  interval;
  
  constructor(private apiService: ApiService,private breadcrumbService: BreadcrumbService,public tService: TabService,private file: FileUploadService) { }


  ngOnInit() {
    this.setData();

    this.cols = [
      { field: 'productid',header:'1'},
      { field: 'stepid',header:'2'},
      { field: 'defectname',header:'3'},
      { field: 'control1',header:'4'},
      { field: 'alarmtype1',header:'5'},
      { field: 'alarmreceivername1',header:'6'},
      { field: 'alarmreceiverid1',header:'7'},
      { field: 'control2',header:'8'},
      { field: 'alarmtype2',header:'9'},
      { field: 'alarmreceivername2',header:'10'},
      { field: 'alarmreceiverid2',header:'11'},
      { field: 'freshtime',header:'12'}
    ];

  }
 
  save() {
    if (!this.checkUpdate) {
      this.insert();
    } else {
      this.update();
    }

  }

    update() {
      const url = '/alarmspec/update';
      const data = this.addspec;
      this.apiService.put(url, data).subscribe(
        (res) => {
          this.modalVisible = false;
          this.setData();
          this.addspec = new spec();
        },
        (error) => {
          console.log(error);
        }
      );
      this.checkUpdate = false;
    }

     // gridfunction;
    setData() {
      //spec数据导入
    const url = '/alarmspec/list';
    this.apiService.getAll(url).subscribe(
      (res)=>{
        this.data = <spec[]>res;
        console.log(this.data);
      },
    );
    }

    deleteSelectedData(obj) {
      this.addspec = Object.assign({}, obj);
      const arrayData = new Array<spec>();
      arrayData.push(this.addspec);
      this.actionDelete(arrayData);
    }

    actionDelete(arrayData) {
      const url = '/alarmspec/delete';
      const data1 = { body: arrayData };
      this.apiService.delete(url, data1).subscribe(
        (res) => {
          this.setData();
          this.selectedData = null;     
        },
        (error) => {
          console.log(error);
        }
      );
    }


    openDetail(obj) {
      // object copy
      this.addspec = Object.assign({}, obj);
      this.modalVisible = true;
      this.checkUpdate = true;
      return false;
    }

   // dialog function
  addData() {
    this.addspec = new spec();
    this.modalVisible = true;
    this.checkUpdate = false;
  }

  insert() {
    const url = '/alarmspec/insert';
    const data = this.addspec;
    this.apiService.post(url, data).subscribe(
      (res) => {
        this.modalVisible = false;
        this.setData();
        this.addspec = new spec();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onRowSelect(event) {
    const url1 = '/alarm/list';
      const options={
        params:{
          productid:event.data.productid,
          stepid:event.data.stepid,
          defectname:event.data.defectname
        }
      };
      this.etitle=event.data.productid+'-'+ event.data.stepid+'-'+ event.data.defectname;
      this.apiService.get(url1,options).subscribe(
        (res) => {
          
          this.echartdata =<alarm[]>res;
          this.setEchart(this.echartdata);
        }
      );
    this.fresh(options);      
      };

      fresh(options){
        this.interval.clearInterval();
        this.interval=setInterval(()=>{
          const url1 = '/alarm/fresh';
          this.apiService.get(url1,options).subscribe(
            (res) => {
              
              this.echartdata =<alarm[]>res;
              this.setEchart(this.echartdata);
            }
          );
          console.log(1);
        },15000);
      }
 
      
      // gettime(){
      //   this.apiService.get('/freshtime').subscribe(
      //     (res) => {
      //       this.time =res;
      //       console.log(res.data);
      //     }
      //   )
      // };
  // echart setting function
  setEchart(data) {
    this.DataColor=[];
    this.setechart=this.setSeriesOption(data);
    this.function(this.setechart.actvalue,this.setechart.specvalue1,this.setechart.specvalue2);
    this.DataColor=this.datacolor(this.setechart.actvalue,this.Actcolor);
    this.spec1=this.setechart.specvalue1;
    this.spec2=this.setechart.specvalue2;
    console.log(this.Actcolor);
    this.chartOption = {
      tooltip: {
        trigger: 'axis',

      },
      legend: {
        data:['实际数据','Spec1','Spec2']
    },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { readOnly: false },
          magicType: { show: true, type: ['line'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          name:'时间',
          boundaryGap: true,
          data: this.setechart.xAxis,
          axisLabel: {
            show: true,
            interval: 0,
            rotate:45,

          },
        }
      ],
      yAxis: [
        {
          axisLabel: {
            formatter: '{value} %'
        },
        }
      ],
      series: [
        {
          color:"red",
          name: '实际数据',
          type: 'line',
          symbolSize:8, 
          symbol:'circle',
          data: this.DataColor,
          label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c} %'
                // formatter:'{c}'
            }
        },
        "textStyle": {
          "fontSize": 30
      },
          itemStyle:{
            normal:{
              color:function(params){
                return params.data.color;
              },
              lineStyle:{                                
                width:3,                                
                type:'solid',  //'dotted'虚线 'solid'实线 
            }
          }
        }
      },
        {
          name: 'Spec1',
          type: 'line',
          data: this.spec1,
          itemStyle:{
            normal:{
              lineStyle:{                                
                width:2,                                
                type:'dotted'  //'dotted'虚线 'solid'实线                            }
            }
            }
          }
        },
        {
          name: 'Spec2',
          type: 'line',
          data: this.spec2,
          itemStyle:{
            normal:{
              lineStyle:{                                
                width:2,                                
                type:'dotted'  //'dotted'虚线 'solid'实线                            }
            }
            }
          }
        }
      ]
    }
  }

  datacolor(value,color){
    const datacolorarray =new Array();
    let DL=value.length;
    let i=0;
    for(i;i<DL;i++){
      const datacolor={value,color};
      datacolor.value = value[i];
      datacolor.color=color[i];
      datacolorarray.push(datacolor);
    }
    return datacolorarray;
  }
  function(data,spec1,spec2) {
    let L=data.length;
    let i=0;
    var index_color = data;
    this.Actcolor=[];
    for(i;i<L;i++){
      if(index_color[i]<spec1[i])
      {
        this.Actcolor.push('blue');
      }
      else 
      if(index_color[i]>spec1[i] && index_color[i]<spec2[i])
      {
        this.Actcolor.push('#CC0099');
      }
      else
      if(index_color[i]>spec2[i])
      {
        this.Actcolor.push('red');
      }
    }
  } 
  setSeriesOption(obj) {
    const seriesArray = new Array();
    const echartSet = new EchartSet();
    const caculatetimeArray = new Array();
    const specvalue1 = new Array(); 
    const specvalue2 = new Array(); 
    const actvalue = new Array();  
    if (isObject(obj)) {
      echartSet.type = 'line';
      let OL = obj.length;
      let O=0;
       for(O;O<OL;O++){
        actvalue.push(obj[O].actvalue);
        specvalue1.push(obj[O].specvalue1);
        specvalue2.push(obj[O].specvalue2);
        caculatetimeArray.push(obj[O].caculatetime);
     }
     echartSet.actvalue = actvalue;
     echartSet.specvalue1 = specvalue1;
     echartSet.specvalue2 = specvalue2;
     echartSet.xAxis = caculatetimeArray;
      
    }
    // seriesArray.push(echartSet);
    //  console.log(seriesArray);
    return echartSet;
  }

  
}