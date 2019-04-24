import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { SelectItem } from '../../../../../node_modules/primeng/api';

@Component({
  selector: 'app-b3-array-dashboard',
  templateUrl: './b3-array-dashboard.component.html',
  styleUrls: ['./b3-array-dashboard.component.css']
})
export class B3ArrayDashboardComponent implements OnInit, AfterViewInit, OnDestroy{
  
  constructor(private apiService:ApiService,private http:HttpClient) { }

  yieldOption;
  wipMoveOption;
  taktOption;
  updateTaktOption;
  taktTimer;
  inputOption;
  outputOption;
  machineOption;
  taktEqpGroups:SelectItem[]=new Array<SelectItem>();
  taktEqpGroup:SelectItem;
  taktEqpNames:SelectItem[]=new Array<SelectItem>();
  taktEqpName:SelectItem;
  taktUnits:SelectItem[]=new Array<SelectItem>();
  taktUnit:SelectItem;
  factoryName:string="ARRAY";
  machineGroups:SelectItem[]=new Array<SelectItem>();
  machineGroup:string='EXPO_SYSTEM';

  ngOnInit() {
    this.initTakt();
    this.getWipMoveData();
    this.initInOut();
    this.initMachine();
    this.initYield();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    clearInterval(this.taktTimer);
  }

  // Array Wip Move图相关操作
  getWipMoveData() {
    const url = `assets/b3-array/array.json`;
    const options={
      params:{factoryName:'ARRAY'}
    };
        this.http.get(url).subscribe(
            (response) => {
                const res=response['wip'];
                const dataStringList:Array<string>=res;
                const dataList:Array<any>=new Array<any>();
                for(let i=0;i<dataStringList.length;i++){
                  dataList.push(dataStringList[i]);
                }
                this.setWipMoveData(dataList);
            },
            (error) => {
                console.log(`Error:Get wip data failed!`);
            }
        );
  }

  setWipMoveData(list){
    const xAxis:Array<string>=new Array<string>();
    for(let i=0;i<list[0]['operName'].split(',').length;i++){
      xAxis.push(list[0]['operName'].split(',')[i].substring(1,list[0]['operName'].split(',')[i].length-1));
    }
    this.wipMoveOption={
      title:{
        text:'Wip Move数据图',
        left:'center',
        textStyle:{
          color:'#FFFFFF'
        }
      },
      xAxis: [{
        type:'category',
        data:xAxis,
        axisLabel:{
          rotate:45,
          textStyle:{
            fontSize:'10',
            color:'#FFFFFF'
          }
        },
        crosshair: false
      }],
      yAxis: [
        {
            type: 'value',
            name: 'Wip/Lot',
            min: 0,
            axisLabel: {
                formatter: '{value}',
                textStyle:{
                  fontSize:'10',
                  color:'#FFFFFF'
                }    
            },
            splitLine: {                // 分隔线
              show: false,        // 默认显示，属性show控制显示与否
              // onGap: null,
            //   lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            //     color:'red',
            //     width: 1,
            //     type: 'solid'
            // }
          }
            
        },
        {
            type: 'value',
            name: 'Move/Lot',
            min: 0,
            axisLabel: {
                formatter: '{value}',
                textStyle:{
                  fontSize:'10',
                  color:'#FFFFFF'
            }  
        },
        splitLine: {                // 分隔线
          show: false,        // 默认显示，属性show控制显示与否
          // onGap: null,
        //   lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
        //     color:'red',
        //     width: 1,
        //     type: 'solid'
        // }
      }
      }
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
      series:this.createWipMoveSeries(list)
    };
  }

  createWipMoveSeries(list) {
    const series:Array<any>=new Array<any>();
    for(let i=0;i<list.length-1;i++) {
      const type='bar';
      const s={
        type:type,
        yAxisIndex:0,
        stack:'WIP',
        name:list[i]['productSpec'],
        label: {
          normal: {
              show: true,
              position: 'insideRight',
              formatter: function (params) {
                if (params.value > 0) {
                    return params.value;
                } else {
                    return '';
                }
            }
          }
        },
        data:list[i]['lotQty'].split(',')
      };
      series.push(s);
    }
    series.push({
      type:'line',
      yAxisIndex:1,
      stack:'MOVE',
      name:list[list.length-1]['productSpec'],
      symbolSize: 5,
      smooth:false,
      itemStyle: {
        normal: {
          borderWidth: 1
        }
      },
      label: {
        normal: {
            show: true,
            position: 'insideRight'
        }
      },
      data:list[list.length-1]['lotQty'].split(',')
    });
    return series;
  }

  // Array Takttime相关函数
  initTakt(){
    // this.taktEqpGroups=[
    //   {label:'TRACK',value:'TRACK'},
    //   {label:'DRY_ETCHER',value:'DRY_ETCHER'},
    //   {label:'WET_ETCHER',value:'WET_ETCHER'},
    //   {label:'PECVD',value:'PECVD'},
    //   {label:'SPUTTER_G_SD',value:'SPUTTER_G_SD'},
    //   {label:'SPUTTER_ITO',value:'SPUTTER_ITO'},
    //   {label:'WET_STRIPPER',value:'WET_STRIPPER'}
    // ];
    // this.taktEqpGroup=this.taktEqpGroups[0]['value'];
    this.refreshTaktEqpName();
  }

  refreshTaktEqpName(){
    /* const url = `/watchboard/takt/eqpName`;
    const options = {
      params:{"eqpGroup":this.taktEqpGroup,"factoryName":this.factoryName}
    };
        this.apiService.get(url,options).subscribe(
            (res) => {
              this.taktEqpNames=new Array<SelectItem>(); 
                for(let i=0;i<res.length;i++){
                  this.taktEqpNames.push({label:res[i],value:res[i]});
                }
                this.taktEqpName=this.taktEqpNames[0]['value']; */
                this.refreshTaktUnit();
           /*  },
            (error) => {
                console.log(`Error:Get takttime equipment name failed !`);
            }
        ); */
  }

  refreshTaktUnit() {
    /* const url = `/watchboard/takt/eqpUnit`;
    const options = {
      params:{"eqpGroup":this.taktEqpGroup,"eqpName":this.taktEqpName,"factoryName":this.factoryName}
    };
        this.apiService.get(url,options).subscribe(
            (res) => {
              this.taktUnits=new Array<SelectItem>();
              for(let i=0;i<res.length;i++){
                this.taktUnits.push({label:res[i],value:res[i]});
              }
              this.taktUnit=this.taktUnits[0]['value']; */
              this.refreshTaktData();
            /* },
            (error) => {
                console.log(`Error:Get takttime equipment unit failed !`);
            }
        ); */
  }

  refreshTaktData(){
    const url=`assets/b3-array/array.json`;
    const options = {
      params:{"eqpGroup":this.taktEqpGroup,"eqpName":this.taktEqpName,"eqpUnit":this.taktUnit,"factoryName":this.factoryName}
    };
    this.http.get(url).subscribe(
      (response) => {
        const res=response['takt'];
        this.taktOption={
          title:{
            left:'center',
            text:'Array Takt Time',
            textStyle:{
              fontSize:'12',
              color:'#FFFFFF'
            }
          },
          xAxis: {
            type: 'category',
            data: res['glassId'],
            axisLabel:{
              rotate:45,
              interval: 0,
              textStyle: {
                fontSize:'8',
                color:'#FFFFFF'
              }
            }
          },
          yAxis: {
            type: 'value',
            name: 'TaktTime',
            min: 0,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color:'#FFFFFF'
                }
            },
            splitLine: {                // 分隔线
              show: false,        // 默认显示，属性show控制显示与否
              // onGap: null,
            //   lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            //     color:'red',
            //     width: 1,
            //     type: 'solid'
            // }
          }
          },
          grid: {
            right:0,
            top:15
          },
          dataZoom:[
            {
              type:'slider',
              show:false,
              realtime:true,
              xAxisIndex:[0],
              start:0,
              end:30
            }
          ],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
          },
          series: [
            {
              name:'Takt Time',
              type:'line',
              symbol: '',
              symbolSize: 5,
              color:'blue',
              itemStyle: {
                normal: {
                    borderWidth: 1
                }
              },
              data:res['taktTime']
            },
            {
              name:'Average',
              type:'line',
              color:'red',
              smooth:false,
              data:res['average']
            }
          ]
        };
        this.changeTaktOption();
      }
    );
  }

  changeTaktOption(){
    let interval=1;
    clearInterval(this.taktTimer);
    this.taktTimer=setInterval(()=>{
      if(this.taktOption.dataZoom[0].end===100){
        this.taktOption.dataZoom[0].start=69;
        this.taktOption.dataZoom[0].end=99;
        interval=-1;
      }else if(this.taktOption.dataZoom[0].start===0){
        this.taktOption.dataZoom[0].start=1;
        this.taktOption.dataZoom[0].end=31;
        interval=1;
      }else{
        this.taktOption.dataZoom[0].start+=interval;
        this.taktOption.dataZoom[0].end+=interval;
      }
      this.updateTaktOption={
        dataZoom:[
          {
            type:'slider',
            show:false,
            realtime:true,
            xAxisIndex:[0],
            start:this.taktOption.dataZoom[0].start,
            end:this.taktOption.dataZoom[0].end
          }
        ]
      };
    },1000);
  }

  // Array投入产出相关函数
  initInOut(){
    this.setInOutData();
  }

  setInOutData() {
    const url=`assets/b3-array/array.json`;
    const options={
      params:{'factoryName':this.factoryName}
    };
    this.http.get(url).subscribe(
      (response) => {
        const res=response['inputOutput'];
        const inDate:Array<string>=new Array<string>();
        const dailyInput:Array<number>=new Array<number>();
        const monthlyInput:Array<number>=new Array<number>();
        const date:Date=new Date();
        const monthDay=new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
        let index =0;
        for(let i=0;i<monthDay;i++){
          const d:string=(i+1)<10?'0'+(i+1):i+1+'';
          if(i<res['inDate'].length){
            if(res['inDate'][i-index]!==d){
              dailyInput.push(0);
              if(i-index-1<0){
                monthlyInput.push(0);
              }else{
                monthlyInput.push(res['monthlyInput'][i-index-1]);
              }
              index++;
            }else {
              monthlyInput.push(res['monthlyInput'][i-index]);
              dailyInput.push(res['dailyInput'][i-index]);
            }
            inDate.push(d);
          }else{
            inDate.push(d);
            dailyInput.push(null);
            monthlyInput.push(null);
          }
        }
        const outDate:Array<string>=new Array<string>();
        const dailyOutput:Array<number>=new Array<number>();
        const monthlyOutput:Array<number>=new Array<number>();
        index=0;
        for(let i=0;i<monthDay;i++){
          const d:string=(i+1)<10?'0'+(i+1):i+1+'';
          if(i<res['outDate'].length){
            if(res['outDate'][i-index]!==d){
              dailyOutput.push(0);
              if(i-index-1<0){
                monthlyOutput.push(0);
              }else{
                monthlyOutput.push(res['monthlyOutput'][i-index-1]);
              }
              index++;
            }else {
              monthlyOutput.push(res['monthlyOutput'][i-index]);
              dailyOutput.push(res['dailyOutput'][i-index]);
            }
            outDate.push(d);
          }else{
            outDate.push(d);
            dailyOutput.push(null);
            monthlyOutput.push(null);
          }
        }
        this.inputOption={
          title:{
            text:'Array月投入',
            left:'center',
            textStyle:{
              fontSize:'12',
              color:'#FFFFFF'
            }
          },
          xAxis: {
            type: 'category',
            data: inDate,
            axisLabel:{
              interval: 0,
              textStyle: {
                fontSize:'7',
                color:'#FFFFFF'
              }
            }
          },
          yAxis: {
            type: 'value',
            name: '数量',
            min: 0,
            axisLabel: {
                formatter: (value) => {
                  return value/1000+'K';
                },
                textStyle: {
                  color:'#FFFFFF'
                }
            },
            splitLine: {                // 分隔线
              show: false,        // 默认显示，属性show控制显示与否
              // onGap: null,
            //   lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            //     color:'red',
            //     width: 1,
            //     type: 'solid'
            // }
          },
          },
          grid: {
            right:0,
            bottom:20,
            top:10,
            left:50
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                  color: '#999'
              }
            },
          },
          series:[
            {
              name:'累计投入',
              type:'bar',
              stack:'投入',
              color:'#518df0',
              label:{
                show:true,
                position:'inside',
                fontSize:'7',
                formatter:(params) => {
                  const val:number=params.value/1000;
                  return val.toFixed(1)+'K';
                }
              },
              data:monthlyInput
            },
            {
              name:'当天投入',
              type:'bar',
              stack:'投入',
              color:'#ff3300',
              label:{
                show:true,
                position:'inside',
                fontSize:'7',
                formatter:(params) => {
                  const val:number=params.value/1000;
                  return val.toFixed(1)+'K';
                }
              },
              data:dailyInput
            }
          ]
        };

        this.outputOption={
          title:{
            text:'Array月产出',
            left:'center',
            textStyle:{
              fontSize:'12',
              color:'#FFFFFF'
            }
          },
          xAxis: {
            type: 'category',
            data: outDate,
            axisLabel:{
              interval: 0,
              textStyle: {
                fontSize:'7',
                color:'#FFFFFF'
              }
            }
          },
          yAxis: {
            type: 'value',
            name: '数量',
            min: 0,
            axisLabel: {
                formatter: (value) => {
                  return value/1000+'K';
                },
                textStyle: {
                  color:'#FFFFFF'
                }
            },
            splitLine: {                // 分隔线
              show: false,        // 默认显示，属性show控制显示与否
              // onGap: null,
            //   lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            //     color:'red',
            //     width: 1,
            //     type: 'solid'
            // }
          },
          },
          grid: {
            right:0,
            bottom:20,
            top:10,
            left:50
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
          },
          series:[
            {
              name:'累计产出',
              type:'bar',
              stack:'产出',
              color:'#518df0',
              label:{
                show:true,
                position:'inside',
                fontSize:'7',
                formatter:(params) => {
                  const val:number=params.value/1000;
                  return val.toFixed(1)+'K';
                }
              },
              data:monthlyOutput
            },
            {
              name:'当天产出',
              type:'bar',
              stack:'产出',
              color:'#ff3300',
              label:{
                show:true,
                position:'inside',
                fontSize:'7',
                formatter:(params) => {
                  const val:number=params.value/1000;
                  return val.toFixed(1)+'K';
                }
              },
              data:dailyOutput
            }
          ]
        };
      },
      (error) => {
        console.log(`Error: Get Array Input & Output data failed !`);
      }
    );
  }

  // Array 设备稼动率相关函数
  initMachine(){
    /* this.machineGroups=[
      {label:'GLASS_UNPACKING',value:'GLASS_UNPACKING'},
      {label:'SPUTTER',value:'SPUTTER_ITO,SPUTTER_G_SD'},
      {label:'PECVD',value:'PECVD'},
      {label:'TRACK',value:'TRACK'},
      {label:'CLEAN_S',value:'CLEAN_S'},
      {label:'EXPO_SYSTEM',value:'EXPO_SYSTEM'},
      {label:'DRY_ETCHER',value:'DRY_ETCHER'},
      {label:'WET_ETCHER',value:'WET_ETCHER'},
      {label:'WET_STRIPPER',value:'WET_STRIPPER'},
      {label:'ANNEAL_MC_FINAL',value:'ANNEAL_MC_FINAL'}
    ]; */
    this.setMachineOptions();
  }

  setMachineOptions(){
    const url=`assets/b3-array/array.json`;
    const options={
      params:{"machineGroup":this.machineGroup,"factoryName":this.factoryName}
    };
    this.http.get(url).subscribe(
      (response) => {
        const res=response['machineActive'];
        this.machineOption={
          title:{
            text:'Array设备稼动',
            left:'center',
            textStyle:{
              fontSize:12,
              color:'#FFFFFF'
            }
          },
          grid:{
            top:30,
            bottom:30
          },
          xAxis:{
            type:'category',
            data:res['eqpId'],
            axisLabel:{
              rotate:45,
              interval: 0,
              textStyle: {
                fontSize:'7',
                color:'#FFFFFF'
              }
            }
          },
          yAxis:[
            {
              type:'value',
              name:'单位(H)',
              min:0,
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color:'#FFFFFF'
                }
              },
              splitLine: {                // 分隔线
                show: false,        // 默认显示，属性show控制显示与否
                // onGap: null,
              //   lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              //     color:'red',
              //     width: 1,
              //     type: 'solid'
              // }
            }
            },
            {
              type:'value',
              name:'稼动率',
              min:0,
              max:100,
              axisLabel: {
                formatter: '{value}%',
                fontSize:8,
                textStyle: {
                  color:'#FFFFFF'
                }
              },
              splitLine: {                // 分隔线
                show: false,        // 默认显示，属性show控制显示与否
                // onGap: null,
              //   lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              //     color:'red',
              //     width: 1,
              //     type: 'solid'
              // }
            }
            }
          ],
          tooltip:{
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
          },
          series:[
            {
              type:'bar',
              color:'#FF8000',
              name:'MAINT',
              yAxisIndex:0,
              stack:'y1',
              label:{
                show:true,
                position:'inside',
                fontSize:'7',
                formatter:(params) => {
                  const str=params.value>0.5?params.value:'';
                  return str;
                }
              },
              data:res['maintTime']
            },
            {
              type:'bar',
              color:'#ADADAD',
              name:'IDLE',
              yAxisIndex:0,
              stack:'y1',
              label:{
                show:true,
                position:'inside',
                fontSize:'7',
                formatter:(params) => {
                  const str=params.value>0.5?params.value:'';
                  return str;
                }
              },
              data:res['idleTime']
            },
            {
              type:'bar',
              color:'#4F9D9D',
              name:'ETIME',
              yAxisIndex:0,
              stack:'y1',
              label:{
                show:true,
                position:'inside',
                fontSize:'7',
                formatter:(params) => {
                  const str=params.value>0.5?params.value:'';
                  return str;
                }
              },
              data:res['eTime']
            },{
              type:'bar',
              color:'#518df0',
              name:'ETC',
              yAxisIndex:0,
              stack:'y1',
              label:{
                show:true,
                position:'inside',
                fontSize:'7',
                formatter:(params) => {
                  const str=params.value>0.5?params.value:'';
                  return str;
                }
              },
              data:res['etcTime']
            },
            {
              type:'bar',
              color:'#FF2D2D',
              name:'DOWN',
              yAxisIndex:0,
              stack:'y1',
              label:{
                show:true,
                position:'inside',
                fontSize:'7',
                formatter:(params) => {
                  const str=params.value>0.5?params.value:'';
                  return str;
                }
              },
              data:res['downTime']
            },
            {
              type:'line',
              color:'#009100',
              name:'RUN',
              yAxisIndex:1,
              symbolSize: 5,
              smooth:false,
              itemStyle: {
                normal: {
                  borderWidth: 1
                }
              },
              label:{
                show:true,
                position:'inside',
                fontSize:'10',
                formatter:(params) => {
                  return params.value+'%';
                }
              },
              data:res['runRatio']
            }
          ]
        };
      }
    );
  }

  // 良率相关
  initYield(){
    this.setYieldOptions();
  }

  setYieldOptions(){
    const url="assets/b3-array/array.json";
    this.http.get(url).subscribe(
      (response) => {
        const res=response['yield'];
        this.yieldOption={
          title:{
            text:'Array良率信息',
            left:'center',
            textStyle:{
              fontSize:12,
              color:'#FFFFFF'
            }
          },
          xAxis:{
            type:'category',
            data:res['product'],
            axisLabel:{
              rotate:45,
              interval: 0,
              textStyle: {
                fontSize:'8',
                color:'#FFFFFF'
              }
            },
          
          },
          yAxis:[
            {
              type:'value',
              data:res['qty'],
              min:0,
              axisLabel:{
                formatter:'{value}',
                textStyle:{
                  color:'#FFFFFF'
                }
              },
              splitLine: {                // 分隔线
                show: false,        // 默认显示，属性show控制显示与否
                // onGap: null,
              //   lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              //     color:'red',
              //     width: 1,
              //     type: 'solid'
              // }
            }
            },
            {
              type:'value',
              data:res['ratio'],
              min:0,
              max:100,
              axisLabel:{
                formatter:'{value}%',
                textStyle:{
                  color:'#FFFFFF'
                }
              },
              splitLine: {                // 分隔线
                show: false,        // 默认显示，属性show控制显示与否
                // onGap: null,
              //   lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              //     color:'red',
              //     width: 1,
              //     type: 'solid'
              // }
            }
            },
            
          ],
          grid:{
            bottom:60
          },
          legend:{
            data:[{name:'出货数',textStyle:{color:"#FFFFFF"}},
            {name:'良率',textStyle:{color:"#FFFFFF"}}],
            left:'70%',
            top:'10%'
          },
          tooltip:{
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
          },
          series:[
            {
              type:'bar',
              color:'#8c6ac4',
              name:'出货数',
              label:{
                show:true,
                position:'inside',
                formatter:(params) => {
                  return params.value;
                }
              },
              data:res['qty']
            },
            {
              type:'line',
              color:'#c23531',
              name:'良率',
              yAxisIndex:1,
              symbolSize: 5,
              smooth:false,
              itemStyle: {
                normal: {
                  borderWidth: 1
                }
              },
              label:{
                show:true,
                position:'inside',
                formatter:(params) => {
                  return params.value+'%';
                }
              },
              data:res['ratio']
            }
          ]
        };
      }
    );
  }

}
