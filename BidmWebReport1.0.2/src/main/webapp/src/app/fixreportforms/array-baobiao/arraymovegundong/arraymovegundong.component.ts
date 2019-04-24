import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { ArrayMoveScrollOjbects } from './model/objects';
import { SelectItem } from 'primeng/api';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { MessageService } from 'primeng/components/common/messageservice';
import { col } from '../../../toumingdisplan/displan-module/m1m2wip/model/TableCols';


@Component({
  selector: 'app-arraymovegundong',
  templateUrl: './arraymovegundong.component.html',
  styleUrls: ['./arraymovegundong.component.css']
})
export class ArraymovegundongComponent implements OnInit {

  daysNum:string[] = []; // 表头中的日期数组
  nowdaysNum : number = 1; // 这个是用来计算平均值的时候用到的实际天数：
                           // 在获取表头日期天数的时候一起计算出来的 

  data : ArrayMoveScrollOjbects[] = []; // 保存数据的数组
 

  //下面是进行查询的条件
  selectedDate : Date = new Date();
  monthstr : string = '---'; // 查询时候使用的month参数

  productiontypes:SelectItem[] = [
   {label:'Production',value:'Production'},
   {label:'Develop',value:'Develop'},
   {label:'Dummy',value:'Dummy'},
  ];
  selectedType : string = 'Production'; // 初始化的时候给的值

  ratiovalue : string = 'glass'; // 初始值是这个

  cols:any[] = [
    { field: 'operation', header: 'Operation' },
    { field: 'description', header: 'Description' },
    { field: 'avgqty', header: '平均值' },
    { field: 'sumqty', header: '月产能' }
  ];


  frozenCols:any[] = [
    { field: 'operation', header: 'Operation' },
    { field: 'description', header: 'Description' },
    { field: 'avgqty', header: '平均值' },
    { field: 'sumqty', header: '月产能' }
  ];

  standerNum : number = 4600; 

  isupdateComment : boolean = false; // 这个是用来控制 keyin的操作
 // tempComment : string = '';//这个是数据绑定的操作
 selectedObject : ArrayMoveScrollOjbects = new ArrayMoveScrollOjbects(); // 这个是修改的时候的绑定的对象

  constructor(private apiService : ApiService,
            private messageService: MessageService) { }

  ngOnInit() {

    this.selectedDate = new Date();
    this.monthstr = '---';
    this.selectedType = 'Production';
    this.ratiovalue = 'glass';

    this.daysNum = this.getDays(null);
    //console.log(this.daysNum);

    this.searchData(this.monthstr,new Date().getHours()+'',this.selectedType); // 直接查询
    
  }

  //1.获取表头日期的数组 ： 
      //1.如果有数据确定月份的话，则直接获取到那个月份的天数 ok
      //2.如果是默认情况下的话，需要根据日期和小时来进行判断
         //如果日期是大于 2 号的话， 3，4，5，6，。。。 ： 则获取的就是当月的天数
         //如果日期是 2 号的话，需要根据小时来判断需要获取的是哪个月份 ： 
              //如果小时大于等于6，获取的是当月的天数
              //如果小时小于6，获取的是前一个月的天数
                // 如果当前月份是 2 3 4 。。。 的话，仍然是获取这一年的前一个月的天书
                //如果当前月份时 1 的话，则获取的就是前一年的12月的天数 ： 31天
         //如果日期是1号的话 ： 直接获取的是前一个月的天数  
            //如果不是1月1号的话，2.1，3.1 。。直接获取的是前一个月的天数 
            //如果是1月1号的话，获取 前一年的 12 月的数据 ： 这个确定日期就是31天，不过也可以把年份展示出来
  getDays(date : Date):string[]{
    this.daysNum = [];
    this.cols = [
      // { field: 'operation', header: 'Operation' },
      // { field: 'description', header: 'Description' },
      // { field: 'avgqty', header: '平均值' },
      // { field: 'sumqty', header: '月产能' }
    ];
    let days : string[] = []; // 二维数组：第一维保存 年 月 的信息：第二维保存 当月的日期信息
    let month1 = [1,3,5,7,8,10,12]; // 31 天的月份
    let month2 = [4,6,9,11]; // 30 天的月份
    if(date != null){ // 有确定的输入月份的时候
      let year = date.getFullYear();
      let month = date.getMonth()+1; // 这个是月份
      let daynum = 0;
      if(month1.includes(month)){
        daynum = 31;
      }else if(month2.includes(month)){
        daynum = 30;
      }else if(month == 2){ // 当时2月的时候，需要进行闰年的判断
        if((year % 4 == 0 && year%100 != 0) || (year % 400 == 0)){ // 闰年
          daynum = 29;
        }else{ // 不是闰年
          daynum = 28;
        }
      }

      for(let i = 1; i <= daynum;i++){
        days.push(i+'日');
        this.cols.push({field:'h'+i,header:i+'日'});
      }
      this.cols.push({field:'comment',header:'Comment'});
      console.log(this.cols);
      this.nowdaysNum = daynum; // 当有确定输入日期的时候，计算的个数 就是整个月份的 天数，这个思路很关键

    }else{ // 当没有输入日期的时候，默认是当前的日期，需要进行各种的判断
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let nowdate = date.getDate();
      let nowhour = date.getHours();
      let daynum = 0;
      if(nowdate > 2){ // 直接获取当月的天数
        if(month1.includes(month)){
          daynum = 31;
        }else if(month2.includes(month)){
          daynum = 30;
        }else if(month == 2){ // 当时2月的时候，需要进行闰年的判断
          if((year % 4 == 0 && year%100 != 0) || (year % 400 == 0)){ // 闰年
            daynum = 29;
          }else{ // 不是闰年
            daynum = 28;
          }
        }
        this.nowdaysNum = nowdate-1; // 这个时候，个数就是 当前的日期数 ，比如 3号，那就是有两个数
      }else if(nowdate == 2){ // 当2号的时候，大于6点，就是当月，小于6点，就是前一个月
        if(nowhour >= 6){
          if(month1.includes(month)){
            daynum = 31;
          }else if(month2.includes(month)){
            daynum = 30;
          }else if(month == 2){ // 当时2月的时候，需要进行闰年的判断
            if((year % 4 == 0 && year%100 != 0) || (year % 400 == 0)){ // 闰年
              daynum = 29;
            }else{ // 不是闰年
              daynum = 28;
            }
          }
          this.nowdaysNum = 1 ; //这个时候只有一天的数据 ，比如 5.2号八点，只有5.1号的数据，所以只有一个数
        }else{
          month = month-1;
          if(month != 0 ){ // 这个时候还是这一年
            if(month1.includes(month)){
              daynum = 31;
            }else if(month2.includes(month)){
              daynum = 30;
            }else if(month == 2){
              if((year % 4 == 0 && year%100 != 0) || (year % 400 == 0)){ // 闰年
                daynum = 29;
              }else{ // 不是闰年
                daynum = 28;
              }
            }
            this.nowdaysNum = daynum ; // 当每个月2号六点之前的时候，还是取上个月的天数来作为除数的
          }else if(month == 0){ // 这个时候，就需要时前一年的
            year = year -1;
            month = 12;
            daynum = 31;
            this.nowdaysNum = daynum; // 前一年的12月，也是 31天的
          }

        }

      }else if(nowdate == 1){
        if(month > 1){ // 2 3 4 ...月份的时候，直接获取前一个月的天数
          if(month1.includes(month)){
            daynum = 31;
          }else if(month2.includes(month)){
            daynum = 30;
          }else if(month == 2){
            if((year % 4 == 0 && year%100 != 0) || (year % 400 == 0)){ // 闰年
              daynum = 29;
            }else{ // 不是闰年
              daynum = 28;
            }
          }
          this.nowdaysNum = daynum; // 还是前一个月的天数
        }else{
          year = year -1;
          month = 12;
          daynum = 31;
          this.nowdaysNum = daynum; // 这个时候就是前一年的12月的了
        }
      }

      for(let i = 1; i <= daynum;i++){ // 同时进行列数组的创建
        //days.push(year+'年'+month+'月'+i+'日');
        days.push(i+'日');
        this.cols.push({field:'h'+i,header:i+'日'}); // 创建列
      }
      this.cols.push({field:'comment',header:'Comment'});
      console.log(this.cols);

    }
    return days;
  }   


  //2.查询数据的方法
  searchData(month:string,hour:string,productiontype:string){
    this.messageService.add({severity:'info',summary:'查询中',detail:'正在努力的查询数据。。。'});
    const url = '/arraymove/scroll';
    const option = {
      params:{
        month : month,
        nowhour : hour,
        productiontype : productiontype
      }
    };
    this.apiService.get(url,option).subscribe(
      (res)=>{
       
        if(res.length == 0){
          alert("未查询到数据！");
          this.data = [];
        }else{
          console.log(res);
          this.handleData(res);
          //查询并且处理完数据之后，再对数据进一步的数理
         this.readRemark();
        }
        
      },
      (error)=>{console.log(error)},
      ()=>{this.messageService.add({severity:'success',summary:'查询完成',detail:'数据查询成功！'});}
    );
  }

  //3.处理数据格式的方法
  handleData(datas){
    this.data = []; 

    // 1. 获取所有的operation，每一个operation就是一个横着的对象
    let tempOperations : string[] = [];
    let tempDescripts : string[] = [];
    for(const obj of datas){
      let operation = obj['opercode'];
      let descript = obj['operdesc'];
      if(!tempOperations.includes(operation)){
        tempOperations.push(operation);
        tempDescripts.push(descript);
      }
    }
    // for(let i = 0; i < tempOperations.length;i++){
    //   console.log(tempOperations[i] +' - > '+tempDescripts[i]);
    // }
    //2.根据operation循环创建对象
    for(let i = 0 ; i < tempOperations.length;i++){ // 每一个循环都是一个对象
      let newObject = new ArrayMoveScrollOjbects();
      newObject.operation = tempOperations[i];
      newObject.description = tempDescripts[i];
      for(let aa = 0; aa < this.daysNum.length+2;aa++){ // 给这个对象的数组的长度先确定下来
        newObject.qtys[aa] = 0;
      }
      for(let aa = 0; aa < this.daysNum.length;aa++){ // 把这个不包含月产能和平均值的数组创建出来
        newObject.qtys2[aa] = 0;
      }
      //临时存放所有满足当前operation的对象
      let tempOjbects : any[] = [];
      for(const objj of datas){
        if(objj['opercode'] == tempOperations[i] && objj['operdesc'] == tempDescripts[i]){
          tempOjbects.push(objj);
        }
      }
     // console.log(tempOjbects); // 没有错，是按照顺序来的

      for(let bbb = 0 ; bbb < tempOjbects.length; bbb++){ //把数据放入到对象的数组中去
        let qty = 0;
        if(this.ratiovalue == 'glass'){
          let tempqty = tempOjbects[bbb]['glsqty'];
          if(tempqty != null ){ // 当数值为null的时候处理为0
            qty = parseInt(tempOjbects[bbb]['glsqty']);
          }else{
            qty = 0;
          }
          
        }else if(this.ratiovalue == 'panel'){
          let tempqty = tempOjbects[bbb]['lotqty'];
          if(tempqty != null){ // 当数值为null的时候处理为0
            qty = parseInt(tempOjbects[bbb]['lotqty']);
          }else{
            qty = 0;
          }
        
        }
       
        newObject.qtys[bbb+2] = qty;
        newObject.qtys2[bbb] = qty;
      }

      //求平均值 和  月产能
      let iii = 0; // 累计个数的变量
      let sumqty = 0;
      for(let aaaa of newObject.qtys){
        sumqty += aaaa;
       // if(aaaa != ''){
         // iii++;
         // sumqty += parseInt(aaaa) ;
       // }
      }
      newObject.qtys[0] = Math.round(sumqty/this.nowdaysNum);
      newObject.qtys[1] = sumqty;

      //下面把所有的值直接放入到对象的对应的属性中去
      newObject.avgqty = newObject.qtys[0]+'';
      newObject.sumqty = sumqty+'';
      for(let bbbb = 1;bbbb <= this.daysNum.length;bbbb++){ // 循环为这个对象的每一个属性赋值
        newObject.setProperty(bbbb,newObject.qtys[bbbb+1]+'');
      }

     //console.log(newObject);
      this.data.push(newObject);

    }
  }


  //4.点击切换的ratio的时候触发的方法
  clickRatio(ratioid){
    this.searchData(this.monthstr,this.selectedDate.getHours()+'',this.selectedType);
    // if(ratioid == 1){
    //   console.log(this.ratiovalue); 
    // }else if(ratioid == 2){
    //   console.log(this.ratiovalue);
    // }
  }

  //5.点击却换单选下拉框的方法
  clickType(){
   // console.log(this.selectedType);
    this.searchData(this.monthstr,this.selectedDate.getHours()+'',this.selectedType);
  }

 
  //6.点击日期下拉框触发的方法
  clickDate(){
    console.log(this.selectedDate);
    this.daysNum = this.getDays(this.selectedDate);
    let month = '';
    let montha = this.selectedDate.getMonth()+1;
    let yeara = this.selectedDate.getFullYear();
    month += yeara;
    if(montha < 10){
      month += '0'+montha;
    }else{
      month += ''+montha;
    }
    //一旦改变了 month 则，对应的 monthstr也需要跟着改变
    this.monthstr = month;
    this.searchData(month,'111',this.selectedType); // 这个时候hour参数只需要给一个 数值型的 字符串即可
  }

  //7.刷新按钮 ： 点击回到当前的状态
  refreshData(){
    this.selectedDate = new Date();
    this.monthstr = '---';
    this.selectedType = 'Production';
    this.ratiovalue = 'glass';

    this.daysNum = this.getDays(null);
    //console.log(this.daysNum);

    this.searchData(this.monthstr,new Date().getHours()+'',this.selectedType); // 直接查询
  }


  //8.keyin 的 comment 格子 ,这个是第一个方法展示的时候的
  updateRemark(object : ArrayMoveScrollOjbects){
    console.log(object);
    console.log(this.getYearAndMonth());
    const url = '/arraymove/scrollremarkinsert';
    const option = {
      params:{
        month : this.getYearAndMonth(),
        opercode : object.operation,
        productiontype : this.selectedType,
        ratiotype : this.ratiovalue,
        content : object.comment

      }
    };
    this.apiService.get(url,option).subscribe(
      (res)=>{alert("数据更新成功！");},
      (error)=>{alert("数据更新失败！");console.log(error)}
    );
  }

  //8.1取出selectDate的年份和月份
  getYearAndMonth():string{
    let time = '';
    let year = this.selectedDate.getFullYear();
    let month = this.selectedDate.getMonth()+1;
    time += year;
    if(month < 10){
      time += '0'+month;
    }else{
      time += ''+month;
    }
    return time;
  }

  //8.1 这个是 第二个方法展示的：有冰冻列的
  keyinremark(col,object:ArrayMoveScrollOjbects){
    console.log(col);
    console.log(object);
    if(col.header == 'Comment'){
      this.selectedObject = object; // 对象也绑定上
      this.isupdateComment = true; //显示表哥
      console.log(this.selectedObject);
    }
  }
  //8.2 取消更新
  CancelComment(){
    this.selectedObject = new ArrayMoveScrollOjbects();
    this.isupdateComment = false;
  }
  //8.3 确认更新
  updateComment(){
    const url = '/arraymove/scrollremarkinsert';
    const option = {
      params:{
        month : this.getYearAndMonth(),
        opercode : this.selectedObject.operation,
        productiontype : this.selectedType,
        ratiotype : this.ratiovalue,
        content : this.selectedObject.comment

      }
    };
    this.apiService.get(url,option).subscribe(
      (res)=>{
          alert("数据更新成功！");
          this.isupdateComment = false;
          this.selectedObject = new ArrayMoveScrollOjbects();
        },
      (error)=>{alert("数据更新失败！");console.log(error)}
    );
  }

  //9.读取keyin——remark的数据内容
  readRemark(){
    const url = '/arraymove/scrollremarkread';
    const option={
      params:{
        month:this.getYearAndMonth(),
        productiontype : this.selectedType,
        ratiotype : this.ratiovalue
      }
    };
    this.apiService.get(url,option).subscribe(
      (res)=>{
        console.log(res);
        if(res.length != 0){ // 这时候说明是有数据的
           
          for(const obj of res){
             let opercode = obj['item'];
             let remark = obj['remark'];
             for(const objjj of this.data){
               if(objjj.operation == opercode){ // 当这个条件匹配的时候，说明就是需要的remark
                 objjj.comment = remark;
                 break;
               }
             }
          }
        }
      }
    );
  }


    // 10.导出excel
    exportExcel() {
      const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('armovescroll')); // 将这个表格转换成一个 sheet
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      // 这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
      this.saveAsExcelFile(excelBuffer, 'Array Move 滚动看板');
  
    }
    saveAsExcelFile(buffer: any, fileName: string) {
      const data: Blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
      });
      FileSaver.saveAs(data, fileName  +'-'+this.monthstr+ '.xls');
    }
  

}
