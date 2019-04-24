import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mod-wip',
  templateUrl: './mod-wip.component.html',
  styleUrls: ['./mod-wip.component.css']
})
export class ModWipComponent implements OnInit {

  constructor( private http:HttpClient) { }
  options;

  ngOnInit() {
    const url="assets/data/mod.json";
    this.http.get(url).subscribe(
      (response)=>{
        const res=response['wip'];
        const date=new Date();
        const today=date.getDate();
        const yesterday=new Date(date.getTime()-24*60*60*1000).getDate();
        this.options={
          title:{
            text:'Total WIP:'+(res['totalQty']/1000).toFixed(1)+'K(1-6:'+(res['oneToSixTotal']/1000).toFixed(1)+'K,7-11:'
            +(res['sevenToElevenTotal']/1000).toFixed(1)
            +'K,12-18:'+(res['sevenToElevenTotal']/1000).toFixed(1)+'K)',
            left:'center',
            top:'12'
          },
          xAxis: [
            {
              data: res['oper'],
              type:'category',
              gridIndex:0,
              axisLabel:{
                interval: 0,
                formatter: (value) => {
                  return yesterday+'   '+today+'\n'+value;
                }
              },
            }
          ],
          yAxis: {
            type: 'value',
            min: 0,
            max:res['max'],
            axisLabel: {
                formatter: (value) => {
                  return value/1000+'K';
                }
            }
          },
          grid:{
            bottom:'17%',
            top:'25%',
            right:'2%',
            left:'4%'
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
              name:'1-6('+today+'日)',
              type:'bar',
              stack:today,
              xAxisIndex:0,
              color:'#7cb5ec',
              data:res['oneToSix']
            },
            {
              name:'7-11('+today+'日)',
              type:'bar',
              stack:today,
              xAxisIndex:0,
              color:'#90ed7d',
              data:res['sevenToEleven']
            },{
              name:'12-18('+today+'日)',
              type:'bar',
              stack:today,
              xAxisIndex:0,
              color:'#f7a35c',
              data:res['twelveToEighteen']
            },{
              name:'total('+today+'日)',
              type:'bar',
              stack:today,
              color:'rgba(128, 128, 128, 0)',
              xAxisIndex:0,
              label:{
                show:true,
                borderColor:'#fff',
                position:'insideBottom',
                fontSize:9,
                formatter:(params)=>{
                  return 'Total:\n'+(params.value/1000).toFixed(2)+'K';
                }
              },
              data:res['totalLine']
            },
            {
              name:'1-6('+yesterday+'日)',
              type:'bar',
              stack:yesterday,
              xAxisIndex:0,
              color:'#7cb5ec',
              data:res['oneToSixBefore']
            },
            {
              name:'7-11('+yesterday+'日)',
              type:'bar',
              stack:yesterday,
              xAxisIndex:0,
              color:'#90ed7d',
              data:res['sevenToElevenBefore']
            },{
              name:'12-18('+yesterday+'日)',
              type:'bar',
              stack:yesterday,
              xAxisIndex:0,
              color:'#f7a35c',
              data:res['twelveToEighteenBefore']
            },
            {
              name:'total('+yesterday+'日)',
              type:'bar',
              stack:yesterday,
              xAxisIndex:0,
              color:'rgba(128, 128, 128, 0)',
              label:{
                show:true,
                borderColor:'#fff',
                position:'insideBottom',
                fontSize:9,
                formatter:(params)=>{
                  return 'Total:\n'+(params.value/1000).toFixed(2)+'K';
                }
              },
              data:res['totalLineBefore']
            }
          ]
        };
      }
    );
  }

}
