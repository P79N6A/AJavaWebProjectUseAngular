import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { DateUtil } from 'app/outstandingcase/utils/date.util';
import { ApiService } from 'app/common/service/api/api.service';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {

  dateUtil:DateUtil=new DateUtil();

  quantityPieOption={};
  quantityPieLayer: number = 1;
  quantityPieGroup: string = 'ALL';
  quantityPieShift: string = 'ALL';
  quantityPieWorkShift: string = 'ALL';
  quantityPieStar: string = 'ALL';
  isQualityPieLoading: boolean;

  qualityPieOption={};
  qualityPieLayer: number = 1;
  qualityPieGroup: string = 'ALL';
  qualityPieShift: string = 'ALL';
  qualityPieWorkShift: string = 'ALL';
  qualityPieStar: string = 'ALL';
  isQuantityPieLoading: boolean;

  searchStars: SelectItem[] = [
    { label: 'ALL', value: "ALL" },
    { label: '1星级', value: "1" },
    { label: '2星级', value: "2" },
    { label: '3星级', value: "3" },
    { label: '4星级', value: "4" }
  ];
  searchStar: string = 'ALL';
  searchGroups: SelectItem[];
  searchGroup: string = 'ALL';
  searchShifts: SelectItem[];
  searchShift: string = 'ALL';
  searchWorkShifts: SelectItem[];
  searchWorkShift: string = 'ALL';
  qualityUserList: string[];
  quantityUserList: string[];
  lotNgProductList:SelectItem[];
  lotNgProduct:string='ALL';
  rtPictureList=[
    {label:'DUCK',value:'DUCK'},
    {label:'White L0',value:'White L0'},
    {label:'White L63',value:'White L63'},
    {label:'L127-N',value:'L127-N'},
    {label:'White L255',value:'White L255'},
    {label:'NEW Cross Talk',value:'NEW Cross Talk'},
    {label:'Red L255',value:'Red L255'},
    {label:'Flicker',value:'Flicker'}
  ];
  rtPicture:string="DUCK";

  today = new Date();
  yesterday = new Date(this.today.getTime() - 24 * 60 * 60 * 1000);
  thirtyDaysAgo = new Date(this.today.getTime() - 30 * 24 * 60 * 60 * 1000);

  fiTopOption={};
  isFiTopChartLoading:boolean;
  viTopOption={};
  isViTopChartLoading:boolean;
  qualityTopStart: Date = this.yesterday;
  qualityTopEnd: Date = this.yesterday;

  fiProductCapacityOption={};
  isFiProductCapacityLoading:boolean;
  viProductCapacityOption={};
  isViProductCapacityLoading:boolean;
  productCapacityStart:Date = this.yesterday;
  productCapacityEnd:Date = this.yesterday;

  fiHourCapacityOption={};
  isFiHourCapacityLoading:boolean;
  viHourCapacityOption={};
  isViHourCapacityLoading:boolean;
  hourCapacitySearchTime:Date = this.yesterday;

  defectPictureOption={};
  defectPictureStart:Date=this.yesterday;
  defectPictureEnd:Date=this.yesterday;
  isDefectPictureLoading:boolean;

  defectQtyOption={};
  defectQtyStart:Date=this.yesterday;
  defectQtyEnd:Date=this.yesterday;
  isDefectQtyLoading:boolean;
  
  defectProductOption={};
  defectProductStart:Date=this.yesterday;
  defectProductEnd:Date=this.yesterday;
  isDefectProductLoading:boolean;

  ppmOption={};
  isPpmLoading;

  lotNgOption={};
  isLotNgLoading;

  rtPictureOption={};
  isRtPictureLoading;

  constructor(private apiService: ApiService,private http:HttpClient) { }

  ngOnInit() {
    this.setQualityPieOption();
    this.setQuantityPieOption();
    this.initSearchSelectors();
  }

  setQualityPieOption() {
    this.isQualityPieLoading = true;
    const url = "assets/data/inspection.json";
    const options = {
      params: {
        type: 'quality',
        star: this.qualityPieStar,
        group: this.qualityPieGroup,
        shift: this.qualityPieShift,
        workShift: this.qualityPieWorkShift,
        layer: this.qualityPieLayer + ''
      }
    };
    this.http.get(url).subscribe(
      (response) => {
        const res=response['qualityPie'];
        this.qualityPieOption = {};
        this.qualityPieOption = {
          title: {
            text: this.setPieTitle('quality', this.qualityPieLayer),
            x: 'center',
            textStyle: {
              fontSize: 13
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          toolbox: {
            right: '15',
            top: '9',
            show: true,
            feature: {
              restore: {},
              saveAsImage: {},
              mytool1: {
                show: true,
                title: '返回上一级',
                icon: 'path://M868 545.5L536.1 163c-12.7-14.7-35.5-14.7-48.3 '
                  + '0L156 545.5c-4.5 5.2-0.8 13.2 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 '
                  + '8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z',
                onclick: () => {
                  if (this.qualityPieLayer === 5) {
                    this.qualityPieLayer--;
                    this.qualityPieWorkShift = 'ALL';
                  } else if (this.qualityPieLayer === 4) {
                    this.qualityPieLayer--;
                    this.qualityPieShift = 'ALL';
                  } else if (this.qualityPieLayer === 3) {
                    this.qualityPieLayer--;
                    this.qualityPieGroup = 'ALL';
                  } else if (this.qualityPieLayer === 2) {
                    this.qualityPieLayer--;
                    this.qualityPieStar = 'ALL';
                  } else {
                    return;
                  }
                  this.setQualityPieOption();
                }
              }
            }
          },
          series: [
            {
              name: '产能分布',
              type: 'pie',
              data: this.getPieSeriesData(res['xData'], res['yData'], this.qualityPieLayer)
            }
          ]
        };
        this.isQualityPieLoading = false;
      }
    );
  }

  setQuantityPieOption() {
    this.isQuantityPieLoading = true;
    const url = "assets/data/inspection.json";
    const options = {
      params: {
        type: 'quantity',
        star: this.quantityPieStar,
        group: this.quantityPieGroup,
        shift: this.quantityPieShift,
        workShift: this.quantityPieWorkShift,
        layer: this.quantityPieLayer + ''
      }
    };
    this.http.get(url).subscribe(
      (response) => {
        const res=response['quantityPie'];
        this.isQuantityPieLoading = false;
        if (this.quantityPieLayer === 1) { }
        this.quantityPieOption = {
          title: {
            text: this.setPieTitle('quantity', this.quantityPieLayer),
            x: 'center',
            textStyle: {
              fontSize: 13
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          toolbox: {
            right: '15',
            top: '9',
            show: true,
            feature: {
              restore: {},
              saveAsImage: {},
              mytool1: {
                show: true,
                title: '返回上一级',
                icon: 'path://M868 545.5L536.1 163c-12.7-14.7-35.5-14.7-48.3 '
                  + '0L156 545.5c-4.5 5.2-0.8 13.2 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 '
                  + '8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z',
                onclick: () => {
                  if (this.quantityPieLayer === 5) {
                    this.quantityPieLayer--;
                    this.quantityPieWorkShift = 'ALL';
                  } else if (this.quantityPieLayer === 4) {
                    this.quantityPieLayer--;
                    this.quantityPieShift = 'ALL';
                  } else if (this.quantityPieLayer === 3) {
                    this.quantityPieLayer--;
                    this.quantityPieGroup = 'ALL';
                  } else if (this.quantityPieLayer === 2) {
                    this.quantityPieLayer--;
                    this.quantityPieStar = 'ALL';
                  } else {
                    return;
                  }
                  this.setQuantityPieOption();
                }
              }
            }
          },
          series: [
            {
              name: '产能分布',
              type: 'pie',
              data: this.getPieSeriesData(res['xData'], res['yData'], this.quantityPieLayer)
            }
          ]
        };
      }
    );
  }

  setPieTitle(type, layer) {
    let title = '';
    if (layer === 1) {
      title = '职工星级分布';
    } else if (layer === 2) {
      if (type === 'quality') {
        title = this.qualityPieStar + '星级职工科室分布';
      } else {
        title = this.quantityPieStar + '星级职工科室分布';
      }
    } else if (layer === 3) {
      if (type === 'quality') {
        title = this.qualityPieGroup + this.qualityPieStar + '星级职工科室分布';
      } else {
        title = this.quantityPieGroup + this.quantityPieStar + '星级职工科室分布';
      }
    } else if (layer === 4) {
      if (type === 'quality') {
        title = this.qualityPieGroup + this.qualityPieShift + this.qualityPieStar + '星级职工科室分布';
      } else {
        title = this.quantityPieGroup + this.quantityPieShift + this.quantityPieStar + '星级职工科室分布';
      }
    } else {
      if (type === 'quality') {
        title = this.qualityPieGroup + this.qualityPieShift + this.qualityPieWorkShift + this.qualityPieStar + '星级职工科室分布';
      } else {
        title = this.quantityPieGroup + this.quantityPieShift + this.quantityPieWorkShift + this.quantityPieStar + '星级职工科室分布';
      }
    }
    if (type === 'quality') {
      title += '(产能)';
    } else {
      title += '(品质)';
    }
    return title;
  }

  pieClick(event, type) {
    /* if (type === 'quality') {
      if (this.qualityPieLayer === 1) {
        this.qualityPieStar = event.name.substring(0, 1);
      } else if (this.qualityPieLayer === 2) {
        this.qualityPieGroup = event.name;
      } else if (this.qualityPieLayer === 3) {
        this.qualityPieShift = event.name;
      } else if (this.qualityPieLayer === 4) {
        this.qualityPieWorkShift = event.name;
      } else {
        return;
      }
      this.qualityPieLayer++;
      this.setQualityPieOption();
    } else {
      if (this.quantityPieLayer === 1) {
        this.quantityPieStar = event.name.substring(0, 1);
      } else if (this.quantityPieLayer === 2) {
        this.quantityPieGroup = event.name;
      } else if (this.quantityPieLayer === 3) {
        this.quantityPieShift = event.name;
      } else if (this.quantityPieLayer === 4) {
        this.quantityPieWorkShift = event.name;
      } else {
        return;
      }
      this.quantityPieLayer++;
      this.setQuantityPieOption();
    } */
    alert('数据不全，无法钻取！');
  }

  getPieSeriesData(xData: Array<any>, yData: Array<any>, layer?: number) {
    let data: Array<any> = new Array<any>();
    for (let i = 0; i < xData.length; i++) {
      if (layer === 1) {
        data = [...data, { value: yData[i], name: xData[i] + '星级' }];
      } else {
        data = [...data, { value: yData[i], name: xData[i] }];
      }
    }
    return data;
  }

  initSearchSelectors() {
    this.updateSearchGroups();
  }

  updateSearchGroups() {
    const url = "/transparent/inspection/group/selectors";
    const options = {
      params: {
        group: this.searchGroup,
        shift: this.searchShift,
        type: 'group'
      }
    };
    this.apiService.get(url, options).subscribe(
      (res) => {
        this.searchGroups = [];
        for (let i = 0; i < res.length; i++) {
          this.searchGroups = [...this.searchGroups, { label: res[i], value: res[i] }];
        }
        this.searchGroup = this.searchGroups[0]['value'];
        this.updateSearchShifts();
      }
    );
  }

  updateSearchShifts() {
    const url = "/transparent/inspection/group/selectors";
    const options = {
      params: {
        group: this.searchGroup,
        shift: this.searchShift,
        type: 'shift'
      }
    };
    this.apiService.get(url, options).subscribe(
      (res) => {
        this.searchShifts = [];
        for (let i = 0; i < res.length; i++) {
          this.searchShifts = [...this.searchShifts, { label: res[i], value: res[i] }];
        }
        this.searchShift = this.searchShifts[0]['value'];
        this.updateSearchWorkShifts();
      }
    );
  }

  updateSearchWorkShifts() {
    const url = "/transparent/inspection/group/selectors";
    const options = {
      params: {
        group: this.searchGroup,
        shift: this.searchShift,
        type: 'workShift'
      }
    };
    this.apiService.get(url, options).subscribe(
      (res) => {
        this.searchWorkShifts = [];
        for (let i = 0; i < res.length; i++) {
          this.searchWorkShifts = [...this.searchWorkShifts, { label: res[i], value: res[i] }];
        }
        this.searchWorkShift = this.searchWorkShifts[0]['value'];
        this.initDetail();
      }
    );
  }

  initDetail() {
    this.setUserList();
  }

  setUserList() {
    const url = "/transparent/inspection/group/user-list";
    const options = {
      params: {
        star: this.searchStar,
        group: this.searchGroup,
        shift: this.searchShift,
        workShift: this.searchWorkShift
      }
    };
    this.apiService.get(url, options).subscribe(
      (res) => {
        this.qualityUserList = res['qualityUserList'];
        this.quantityUserList = res['quantityUserList'];
        this.lotNgProductList=[];
        for(let i=0;i<res['productList'].length;i++){
          this.lotNgProductList=[...this.lotNgProductList,{label:res['productList'][i],value:res['productList'][i]}];
        }
        this.lotNgProduct=this.lotNgProductList[0]['value'];
        this.initQuality();
        this.initQuantity();
      }
    );
  }

  initQuality() {
    this.setFiViTopOption();
    this.setProductCapacityOption();
    this.setHourCapacityOption();
  }

  initQuantity() {
    this.setDefectPictureOption();
    this.setDefectQtyOption();
    this.setDefectProductOption();
    this.setPpmOption();
    this.setLotNgOption();
    this.setRtPictureOption();
  }

  setFiViTopOption() {
    this.isFiTopChartLoading=true;
    this.isViTopChartLoading=true;
    const url = "assets/data/inspection.json";
    const options = {
      params: {
        userList: this.qualityUserList,
        startTime: this.dateUtil.getFormatDate(this.qualityTopStart,'yyyymmdd'),
        endTime: this.dateUtil.getFormatDate(this.qualityTopEnd,'yyyymmdd')
      }
    };
    const endDate = new Date(this.qualityTopEnd.getTime() + 24 * 60 * 60 * 1000);
    const subTitle =
      this.qualityTopStart.getFullYear() + '年' + (this.qualityTopStart.getMonth() + 1) + '月' + this.qualityTopStart.getDate() + '日6时~'
      + endDate.getFullYear() + '年' + (endDate.getMonth() + 1) + '月' + endDate.getDate() + '日6时';
    this.http.get(url).subscribe(
      (res) => {
        res=res['fiviTop'];
        this.fiTopOption = {
          title: {
            text: 'FI产能TOP15',
            subtext: subTitle,
            x: 'center',
            y:5
          },
          xAxis: {
            type: 'category',
            data: res['fiUser'],
            axisLabel:{
              rotate:45,
              interval: 0,
              color:'#000000',
              textStyle: {
                fontSize:'8'
              }
            }
          },
          yAxis: {
            type: 'value'
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
          series: [{
            data: res['fiQty'],
            type: 'bar'
          }]
        };
        this.isFiTopChartLoading=false;

        this.viTopOption={
          title: {
            text: 'VI产能TOP15',
            subtext: subTitle,
            x: 'center',
            y:5
          },
          xAxis: {
            type: 'category',
            data: res['viUser'],
            axisLabel:{
              rotate:45,
              interval: 0,
              color:'#000000',
              textStyle: {
                fontSize:'8'
              }
            }
          },
          yAxis: {
            type: 'value'
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
          series: [{
            color:'#91d4fa',
            data: res['viQty'],
            type: 'bar'
          }]
        };
        this.isViTopChartLoading=false;
      }
    );
  }

  setProductCapacityOption(){
    this.isFiProductCapacityLoading=true;
    this.isViProductCapacityLoading=true;
    const url='assets/data/inspection.json';
    const options={
      params:{
        startTime:this.dateUtil.getDate(this.productCapacityStart),
        endTime:this.dateUtil.getDate(this.productCapacityEnd),
        userList:this.qualityUserList
      }
    };
    const endDate = new Date(this.productCapacityEnd.getTime() + 24 * 60 * 60 * 1000);
    const subTitle =
      this.productCapacityStart.getFullYear() + '年' + (this.productCapacityStart.getMonth() + 1)
      + '月' + this.productCapacityStart.getDate() + '日6时~'
      + endDate.getFullYear() + '年' + (endDate.getMonth() + 1) + '月' + endDate.getDate() + '日6时';
    this.http.get(url).subscribe(
      (res)=>{
        res=res['fiviProduct'];
        this.fiProductCapacityOption={
          title:{
            text:'各产品FI产能信息',
            subtext:subTitle,
            x: 'center',
            y:5
          },
          yAxis: {
            type: 'category',
            data: res['fiProduct'],
            axisLabel:{
              interval: 0,
              color:'#000000',
              textStyle: {
                fontSize:'9'
              }
            }
          },
          xAxis: {
            type: 'value',
            min:0
          },
          dataZoom:[
            {
              type: 'inside',
              xAxisIndex: [0],
              start: 1,
              end: 100
            },
            {
              type: 'inside',
              yAxisIndex: [0],
              start: 1,
              end: 100
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
          series: [{
            color:'#B8860B',
            data: res['fiQty'],
            type: 'bar'
          }]
        };
        this.isFiProductCapacityLoading=false;

        this.viProductCapacityOption={
          title:{
            text:'各产品VI产能信息',
            subtext:subTitle,
            x: 'center',
            y:5
          },
          yAxis: {
            type: 'category',
            data: res['viProduct'],
            axisLabel:{
              interval: 0,
              color:'#000000',
              textStyle: {
                fontSize:'9'
              }
            }
          },
          xAxis: {
            type: 'value',
            min:0
          },
          dataZoom:[
            {
              type: 'inside',
              xAxisIndex: [0],
              start: 1,
              end: 100
            },
            {
              type: 'inside',
              yAxisIndex: [0],
              start: 1,
              end: 100
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
          series: [{
            color:'#BCD2EE',
            data: res['viQty'],
            type: 'bar'
          }]
        };
        this.isViProductCapacityLoading=false;
      }
    );
  }

  setHourCapacityOption(){
    this.isFiHourCapacityLoading=true;
    this.isViHourCapacityLoading=true;
    const url="assets/data/inspection.json";
    const options={
      params:{
        userList:this.qualityUserList,
        time:this.dateUtil.getDate(this.hourCapacitySearchTime)
      }
    };
    this.http.get(url,options).subscribe(
      (res)=>{
        res=res['fiviHour'];
        this.isFiHourCapacityLoading=true;
        this.isViHourCapacityLoading=true;
        const subTitle=this.dateUtil.getFormatDate(this.hourCapacitySearchTime,'yyyy年mm月dd日')+'6时'
        +this.dateUtil.getFormatDate(new Date(this.hourCapacitySearchTime.getTime()+24*60*60*1000),'yyyy年mm月dd日')+'5时';
        let fiIndicator:any[]=[];
        let viIndicator:any[]=[];
        for(let i=0;i<res['hour'].length;i++){
          fiIndicator=[...fiIndicator,{text:res['hour'][i],max:res['fiMax']}];
          viIndicator=[...viIndicator,{text:res['hour'][i],max:res['viMax']}];
        }
        this.fiHourCapacityOption={
          title:{
            text:'小时别FI产能信息',
            subtext:subTitle,
            x:'center',
            y:5
          },
          tooltip:{},
          radar:[
            {
              indicator:fiIndicator,
              radius:85,
              center:['50%','60%']
            }
          ],
          series:[
            {
              type:"radar",
              name:'FI小时别产能',
              tooltip: {
                trigger: 'item'
              },
              data:[
                {
                  value:res['fiQty']
                }
              ]
            }
          ]
        };
        this.isFiHourCapacityLoading=false;

        this.viHourCapacityOption={
          title:{
            text:'小时别VI产能信息',
            subtext:subTitle,
            x:'center',
            y:5
          },
          tooltip:{},
          radar:[
            {
              indicator:viIndicator,
              radius:85,
              center:['50%','60%']
            }
          ],
          series:[
            {
              type:"radar",
              name:'VI小时别产能',
              tooltip: {
                trigger: 'item'
              },
              data:[
                {
                  value:res['viQty']
                }
              ]
            }
          ]
        };
        this.isViHourCapacityLoading=false;
      }
    );
  }

  setDefectPictureOption(){
    this.isDefectPictureLoading=true;
    const url="assets/data/inspection.json";
    const options={
      params:{
        userList:this.quantityUserList,
        startTime:this.dateUtil.getDate(this.defectPictureStart),
        endTime:this.dateUtil.getDate(this.defectPictureEnd)
      }
    };
    this.http.get(url).subscribe(
      (response)=>{
        const res=response['defectPicture'];
        let data=[];
        let legend=[];
        for(let i=0;i<res.length;i++){
          data=[...data,{value:res[i]['QTY'],name:res[i]['PATTERN']}];
          legend=[...legend,res[i]['PATTERN']];
        }
        this.defectPictureOption={
          title:{
            text:''
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
              orient: 'horizontal',
              x: 'center',
              y:'bottom',
              data:legend
          },
          series:[
            {
              type:'pie',
              name:'不良画面',
              radius: ['50%', '70%'],
              avoidLabelOverlap: true,
              label: {
                normal: {
                    show: true
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                    show: true
                }
              },
              data:data
            }
          ]
        };
        this.isDefectPictureLoading=false;
      }
    );
  }

  setDefectQtyOption(){
    this.isDefectQtyLoading=true;
    const url='assets/data/inspection.json';
    const options={
      params:{
        userList:this.quantityUserList,
        startTime:this.dateUtil.getDate(this.defectQtyStart),
        endTime:this.dateUtil.getDate(this.defectQtyEnd)
      }
    };
    this.http.get(url,options).subscribe(
      (res)=>{
        res=res['rtType'];
        this.defectQtyOption={
          title:{
            text:'返检不良类型(Top12)',
            x:'center',
            y:5
          },
          tooltip:{},
          xAxis:{
            type:'category',
            data:res['defectCode'],
            axisLabel:{
              rotate:45,
              interval: 0,
              textStyle: {
                fontSize:'8'
              }
            }
          },
          yAxis:{
            type:'value',
            min:0
          },
          series:[
            {
              color:'#66CDAA',
              name:'不良名称',
              type:'bar',
              data:res['qty']
            }
          ]
        };
        this.isDefectQtyLoading=false;
      }
    );
  }

  setDefectProductOption(){
    this.isDefectProductLoading=true;
    const url='assets/data/inspection.json';
    const options={
      params:{
        startTime:this.dateUtil.getDate(this.defectProductStart),
        endTime:this.dateUtil.getDate(this.defectProductEnd),
        userList:this.quantityUserList
      }
    };
    this.http.get(url,options).subscribe(
      (res)=>{
        res=res['rtProduct'];
        const subTitle=this.dateUtil.getFormatDate(this.defectProductStart,'yyyy年mm月dd日6时')+'~'
        +this.dateUtil.getFormatDate(new Date(this.defectProductEnd.getTime()+24*60*60*1000),'yyyy年mm月dd日5时');
        this.defectProductOption={
          title:{
            text:'返检产品数量信息',
            subText:subTitle,
            x:'center',
            y:5
          },
          yAxis: {
            type: 'category',
            data: res['product'],
            axisLabel:{
              interval: 0,
              color:'#000000',
              textStyle: {
                fontSize:'9'
              }
            }
          },
          xAxis: {
            type: 'value',
            min:0
          },
          dataZoom:[
            {
              type: 'inside',
              xAxisIndex: [0],
              start: 1,
              end: 100
            },
            {
              type: 'inside',
              yAxisIndex: [0],
              start: 1,
              end: 100
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
          series: [{
            color:'#1C86EE',
            data: res['qty'],
            type: 'bar'
          }]
        };
        this.isDefectProductLoading=false;
      }
    );
  }

  setPpmOption(){
    this.isPpmLoading=true;
    const url='assets/data/inspection.json';
    const options={
      params:{
        userList:this.quantityUserList
      }
    };
    this.http.get(url,options).subscribe(
      (res)=>{
        res=res['ppm'];
        this.ppmOption={
          title:{
            text:'职工返检PPM',
            x:'center',
            y:5
          },
          xAxis:{
            type: 'category',
            data: res['date'],
            axisLabel:{
              interval: 0,
              color:'#000000',
              textStyle: {
                fontSize:'9'
              }
            }
          },
          yAxis:{
            type:'value',
            min:0
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
              color:'#e6b600',
              type:'line',
              name:'ppm',
              itemStyle: {
                normal: {
                  borderWidth: 1
                }
              },
              label: {
                show: true,
                position: 'insideBottom',
                fontSize:8,
                color:'#000000',
                formatter: (params) => {
                  return params.value;
                }
              },
              data:res['ppm']
            },
            {
              color:'#c12e34',
              type:'line',
              name:'ppm avg',
              itemStyle: {
                normal: {
                  borderWidth: 1
                }
              },
              label: {
                show: true,
                position: 'insideBottom',
                color:'#000000',
                fontSize:8,
                formatter: (params) => {
                  return params.value;
                }
              },
              data:res['avg']
            }
          ]
        };
        this.isPpmLoading=false;
      }
    );
  }

  setLotNgOption(){
    this.isLotNgLoading=true;
    const url="assets/data/inspection.json";
    const options={
      params:{
        userList:this.quantityUserList,
        product:this.lotNgProduct
      }
    };
    this.http.get(url,options).subscribe(
      (res)=>{
        res=res['lotNg'];
        this.lotNgOption={
          title:{
            text:'FI&VI LOT NG率推移图',
            x:'center',
            y:5
          },
          xAxis:{
            type:'category',
            data:res['date'],
            axisLabel:{
              interval: 0,
              rotate:45,
              textStyle: {
                fontSize:'10'
              },
              color:'#000000',
            }
          },
          yAxis:{
            type:'value',
            min:0
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
              color:'#2789e6',
              type:'line',
              name:'月LOT NG率',
              itemStyle: {
                normal: {
                  borderWidth: 1
                }
              },
              label: {
                show: true,
                position: 'insideBottom',
                color:'#000000',
                fontSize:8,
                formatter: (params) => {
                  return params.value+'%';
                }
              },
              data:res['monthlyRatio']
            },
            {
              color:'#2789e6',
              type:'line',
              name:'周LOT NG率',
              itemStyle: {
                normal: {
                  borderWidth: 1
                }
              },
              label: {
                show: true,
                position: 'insideBottom',
                color:'#000000',
                fontSize:8,
                formatter: (params) => {
                  return params.value+'%';
                }
              },
              data:res['weeklyRatio']
            },
            {
              color:'#2789e6',
              type:'line',
              name:'日LOT NG率',
              itemStyle: {
                normal: {
                  borderWidth: 1
                }
              },
              label: {
                show: true,
                position: 'insideBottom',
                color:'#000000',
                fontSize:8,
                formatter: (params) => {
                  return params.value+'%';
                }
              },
              data:res['dailyRatio']
            }
          ]
        };
        this.isLotNgLoading=false;
      }
    );
  }

  setRtPictureOption(){
    this.isRtPictureLoading=true;
    const url="assets/data/inspection.json";
    const options={
      params:{
        userList:this.quantityUserList,
        picture:this.rtPicture
      }
    };
    this.http.get(url,options).subscribe(
      (res)=>{
        res=res['rtGood'];
        this.rtPictureOption={
          title:{
            text:this.rtPicture+'检出优秀人员',
            x:'center',
            y:5
          },
          xAxis: {
            type: 'category',
            data: res['staff'],
            axisLabel:{
              interval: 0,
              rotate:45,
              textStyle: {
                fontSize:'8'
              },
              color:'#000000',
            }
          },
          yAxis: {
            type: 'value',
            min:0
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
              color:'#1C86EE',
              data: res['ppm'],
              type: 'bar'
            }
          ]
        };
        this.isRtPictureLoading=false;
      }
    );
  }

}
