import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { CfWipHourObject, colsObject } from './model/objects';
import { SelectItem } from 'primeng/api';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-cfwiphour',
  templateUrl: './cfwiphour.component.html',
  styleUrls: ['./cfwiphour.component.css']
})
export class CfwiphourComponent implements OnInit {

  timestr : string = '----------';

  productSepcNames : string[] = []; 
  modelTypes : string[] = [];

  data:CfWipHourObject[] = [];

  totalQtys:number[] = [];

  selectedObject : CfWipHourObject = new CfWipHourObject();

  selectedProductiontype : string = 'Production'; //Production、Develop
  inputtime : string = '';

  productiontypes:SelectItem[] = [
    {label:'Production',value:'Production'},
    {label:'Develop',value:'Develop'},
  ];


  scrollableCols = [ // 正常的列
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];
frozenCols = [ // 冰冻的列 ,这个是确定的
    { field: 'opercode', header: 'OperCode' },
    { field: 'operdesc', header: 'OperDesc' },
    { field: 'total', header: 'Total' },
];


  constructor(private apiService:ApiService) { }

  ngOnInit() {
    //console.log(this.getSearchTime());
    this.timestr = this.getSearchTime();
    this.searchData(this.timestr,'Production'); //Production Develop
  }

  //1.查询数据：根据传入的时间参数
  searchData(timekey:string,productiontype:string){
    const url = '/cfwiphour';
    const option={
      params:{
        hourtimekey:timekey,
        productiontype:productiontype
      }
    };
    this.apiService.get(url,option).subscribe(
      (res)=>{
        //console.log(res);
        this.handleData(res);
      }
    );
  }

  //2.处理数据的操作
  handleData(datas:any[]){

    this.productSepcNames = [];
    this.modelTypes = [];
    this.data = [];
    this.totalQtys = [];
    this.scrollableCols = [
      { field: 'opercode', header: 'OperCode' },
      { field: 'operdesc', header: 'OperDesc' },
      { field: 'total', header: 'Total' },
    ]; // 列的创建

    //1.第一个循环，拿到 表头的productspecname 和  modeltype 的数据，并且能够对应起来
    let tempopercodes : string[] = []; // 保存opercode的数组，临时的，在第二个循环的时候需要用到的
    let tempoperdescs : string[] = [];
    for(const object of datas){
      let productspecname = object['productspecname'];
      let modeltype = object['modeltype'];
      let opercode = object['opercode'];
      let operdesc = object['operdesc'];
      if(!this.productSepcNames.includes(productspecname)){
        this.productSepcNames.push(productspecname);
        this.modelTypes.push(modeltype);
      }
      if(!tempopercodes.includes(opercode)){
        tempopercodes.push(opercode);
        tempoperdescs.push(operdesc);
      }
    }

    //创建scrollcols数组对象
    for(const ccc of this.productSepcNames){
      let newobject = new colsObject();
      newobject.field = ccc;
      newobject.header = ccc;
      this.scrollableCols.push(newobject);
    }
     console.log(this.productSepcNames);
    // console.log(this.modelTypes);
    // console.log(tempopercodes);
    // console.log(tempoperdescs);

    //2.第二个循环，便利所有的数据创建一条一条的数据放入到数组中去
    for(let i = 0; i < tempopercodes.length;i++){
      let newobject = new CfWipHourObject(); // 每一个opercode就应该对应着一个对象
      newobject.opercode = tempopercodes[i];
      newobject.operdesc = tempoperdescs[i];
      newobject.qtys = []; 
      for(let aaa = 0 ; aaa < this.productSepcNames.length+1;aaa++){ // 给数组赋值为0
        newobject.qtys.push(0);
      }
      //console.log(newobject);
      //2.1循环所有的数据对象，为当前newobject的qtys数组赋值
      for(const obj of datas){
        let opercode = obj['opercode'];
        let operdesc = obj['operdesc'];
        let productspecname = obj['productspecname'];
        let modeltype = obj['modeltype'];
        let qty = obj['qty'];
        if(opercode == newobject.opercode && operdesc == newobject.operdesc){ // 当前两个对象与newobject的属性匹配时，再进行productspecname 和 modeltype 的匹配
          for(let bbb = 0 ; bbb < this.productSepcNames.length;bbb++){ // 循环productspecname数组，取得下标位置，为属性赋值
            if(productspecname == this.productSepcNames[bbb] && modeltype == this.modelTypes[bbb]){ // 当这里两个也匹配上的时候，说明位置找对了
              newobject.qtys[bbb+1] = parseInt(qty); // 把数据放进来就可以了
              //break;
            }
          }
        }    
      }

      //2.2循环数组中的数据，求每一行的和
      let sumtotal = 0;
      for(let bbbbb = 1;bbbbb < newobject.qtys.length;bbbbb++){
        sumtotal += newobject.qtys[bbbbb];
      }
      newobject.qtys[0] = sumtotal;
      //console.log(newobject);
      //console.log("=============================");

      this.data.push(newobject); // 最后把这个对象放入到数组中
   }

   //3.第三个循环，把最上面的totalqiuchulai 
   for(let aaa = 0 ; aaa < this.productSepcNames.length+1;aaa++){ // 给数组赋值为0
      this.totalQtys.push(0); // 同时给最上面的total赋初始值为0
    }
    let indexlength = this.productSepcNames.length+1; // 一共有这么多的数
    for(let iii = 0; iii < indexlength;iii++){
      let sum = 0;
      for(const objjj of this.data){
        sum += objjj.qtys[iii];
      }
      this.totalQtys[iii] = sum;
    }
  }

  getSearchTime():string{

    if(this.inputtime.trim() != ''){
      return this.inputtime;
    }else{
      let date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
  
      let aa = year + '';
      if (month < 10) {
        aa += '0' + month;
      } else {
        aa += month;
      }
  
      if (day < 10) {
        aa += '0' + day;
      } else {
        aa += day;
      }
  
      if(hour < 10){
        aa += '0'+hour;
      }else{
        aa += hour;
      }
      return aa;

    }


  }

  //3.点击查询按钮
  searchbytime(){
    if(this.inputtime.trim() == ''){ // 为空
      alert("请输入查询日期");
    }else if(this.inputtime.length != 10){ // 长度不够
      alert("请输入正确的查询日期");
    }else{
      this.timestr = this.inputtime;
      this.searchData(this.inputtime,this.selectedProductiontype);
      //console.log(this.inputtime);
    }
  }

  //4.切换按钮productiontype
  productiontypeChange(){
   // console.log(this.selectedProductiontype);
   if(this.inputtime.trim() == ''){
    this.searchData(this.getSearchTime(),this.selectedProductiontype);
   }else{
    this.searchData(this.inputtime,this.selectedProductiontype);
   }
  }

   // 10.导出excel
   exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('cfwiphourtable')); // 将这个表格转换成一个 sheet
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // 这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
    this.saveAsExcelFile(excelBuffer, 'Cf Wip小时段数据');

  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName  +'-'+this.getSearchTime()+ '.xls');
  }

}
