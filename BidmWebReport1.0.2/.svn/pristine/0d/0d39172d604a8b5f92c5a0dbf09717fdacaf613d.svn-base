import { ApiService } from './../../../common/service/api/api.service';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { NgxEchartsService } from 'ngx-echarts';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Test1Component implements OnInit {

  chartOption;
  multiOption;

  @ViewChild('multiCharts') multiCharts: ElementRef;

  div1Full: boolean = false;

  div1Icon: string = 'fa fa-expand';

  div1Class: string = 'ui-g-12 ui-md-6 ui-lg-6';

  div1Visible: string = 'block';
  div2Visible: string = 'block';
  div3Visible: string = 'block';
  div4Visible: string = 'block';
  div5Visible: string = 'block';
  div6Visible: string = 'block';
  div7Visible: string = 'block';
  div8Visible: string = 'block';
  div9Visible: string = 'block';

  constructor(
      private api: ApiService,
      private es: NgxEchartsService
  ) { }

  ngOnInit() {
    this.chartOption =  {
      title : {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series : [
          {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    };  

    this.multiOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series: []
    };

    this.setMultiDataPromise();
  }

  setMultiDataPromise() {
      const dataPromise: any[] = [];
      dataPromise.push(this.api.get('/multi1').toPromise());
      dataPromise.push(this.api.get('/multi2').toPromise());
      dataPromise.push(this.api.get('/multi3').toPromise());
      dataPromise.push(this.api.get('/multi4').toPromise());
      dataPromise.push(this.api.get('/multi5').toPromise());
      dataPromise.push(this.api.get('/multi6').toPromise());
      dataPromise.push(this.api.get('/multi7').toPromise());
      dataPromise.push(this.api.get('/multi8').toPromise());
      dataPromise.push(this.api.get('/multi9').toPromise());

      Promise.all(dataPromise).then(
          (datas) => {
              datas.forEach(item => {
                this.multiOption.series.push(item);
              });
              this.es.getInstanceByDom(this.multiCharts.nativeElement).setOption(
                  this.multiOption
              );
          }
      );
  }

  div1Click() {
    if (this.div1Full) {
        this.restore();
    } else {
        this.div1FullShow();
    }
  }

  div1FullShow() {
    this.div2Visible = 'none';
    this.div3Visible = 'none';
    this.div4Visible = 'none';
    this.div5Visible = 'none';
    this.div6Visible = 'none';
    this.div7Visible = 'none';
    this.div8Visible = 'none';
    this.div9Visible = 'none';

    this.div1Class = 'ui-g-12';
    this.div1Icon = 'fa fa-compress';

    this.div1Full = true;
  }

  restore() {
    this.div1Visible = 'block';
    this.div2Visible = 'block';
    this.div3Visible = 'block';
    this.div4Visible = 'block';
    this.div5Visible = 'block';
    this.div6Visible = 'block';
    this.div7Visible = 'block';
    this.div8Visible = 'block';
    this.div9Visible = 'block';

    this.div1Class = 'ui-g-12 ui-md-6 ui-lg-6';
    this.div1Icon = 'fa fa-expand';

    this.div1Full = false;
  }

}
