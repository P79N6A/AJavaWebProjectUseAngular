import { Component, OnInit } from '@angular/core';
import { CfMoveHourObject, CfMoveHourObject2 } from './model/objects';
import { ApiService } from '../../../common/service/api/api.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-cfmovehour',
  templateUrl: './cfmovehour.component.html',
  styleUrls: ['./cfmovehour.component.css']
})
export class CfmovehourComponent implements OnInit {

  data : CfMoveHourObject[] = []; // 保存对象的数组 
  datareal : CfMoveHourObject2[] =[] ; // 保存一条一条的数据的数组

  selectedProductiontype : string = 'Production'; //Production、Develop
  selectedDate : Date = new Date(); // 查询使用的 日期时间

  productiontypes:SelectItem[] = [
    {label:'Production',value:'Production'},
    {label:'Develop',value:'Develop'},
  ];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.searchData(this.getTimeAttribute(new Date()),this.selectedProductiontype);
  }

  //1.查询数据的方法
  searchData(datename : string,productiontype:string){
    const url = '/cfmovehour';
    const option = {
      params : {
        datename : datename,
        productiontype:productiontype
      }
    };
    this.apiService.get(url,option).subscribe(
      (res)=>{
        if(res.length == 0){
          alert("未查询到数据！");
        }else{
          console.log(res);
          this.handleData(res); // 调用处理数据的方法
        }
       
      },
      (error)=>{console.log(error)}
    );
  }

   //2. 查询数据时候需要使用的时间 参数 ：返回一个数组：第一个元素是 20190402 第二个元素是 2019040213
   getTimeAttribute(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

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
    return aa;
  }

  //3.处理查询得到的数据的方法 : 这个是主要的方法，比较难算
  handleData(datas:any){
    this.data = [] ; // 把原来的数据置空

    //1.第一个循环，确定有多少个大对象
    const operations : string [] = []; // 保存operation的数组，直接决定了有多少个对象
    const discriptions : string [] = []; // 保存 
    for(const object of datas){
      let opercode = object['opercode'].trim();
      let operdesc = object['operdesc'].trim();
      if(!operations.includes(opercode)){
        operations.push(opercode);
        discriptions.push(operdesc);
      }
    }

    //2.第二个循环，根据第一个循环中的结果来进行对象的创建
    for(let i = 0; i < operations.length;i++){
      const newobject = new CfMoveHourObject(); // 每一个循环都是一个新的对象
      newobject.operation = operations[i];
      newobject.description = discriptions[i];
      //console.log(newobject);
      //2->3.第三个循环 ： 在所有的元数据中寻找满足 当前 operation 和 description 对象进行保存起来，用于数据的保存
      const tempobjects : any[] = [];
      for(const yuanobject of datas){
        if(yuanobject['opercode'] == operations[i] && yuanobject['operdesc'] == discriptions[i]){ //满足条件的
          if(yuanobject['product'] == null && yuanobject['modeltype']==null){ // 当都为null 的时候，就赋值为 ‘-’，这样可以去重，我也不知道为什么，反正就是可以
            yuanobject['product'] = '-' ;
             yuanobject['modeltype'] = '-';
          }
          if(yuanobject['eqpid'] == null){
            yuanobject['eqpid'] = '空';
          }
          tempobjects.push(yuanobject);
        }
      }
      //console.log(tempobjects); // 这个应该被打印n遍，,与上面的 newobject 相对应的，没有问题

      //2->4.第四个循环 : 在第三个循环的基础上，取出eqpid 的值 ，productspecname,modeltype,的值，三者需要进行对应起来才ok
      for(const tempobject of tempobjects){
        let eqpid = tempobject['eqpid'];
        let product = tempobject['product'];
        let modeltype = tempobject['modeltype'];
        if(!newobject.machine.includes(eqpid) || !newobject.productspec.includes(product)){ // 需要满足这两个条件的时候才进行操作
          newobject.machine.push(eqpid); // eqpid “空” 的特殊情况
          if(product == null){
            newobject.productspec.push(""); // product 处理为 null 的特殊情况
          }else{
            newobject.productspec.push(product);
          }
          if(modeltype == null){ // modeltype 处理为 null 的特殊情况
            newobject.cf.push("");
          }else{
            newobject.cf.push(modeltype);
          }
        }
      }

      //console.log(newobject);

      //2->5.第五个循环，根据上面的内容，把数据拿出来进行操作，这个地方是有二维数组的操作*这里是数据的操作
      for(let i = 0; i < newobject.productspec.length;i++){

        let eqpid = newobject.machine[i];
        //console.log(eqpid);
        let product = newobject.productspec[i];
        let modeltype = newobject.cf[i]; 

        newobject.planactnumb[i] = ['','','','','','','','','','','','','','','','','','','','','','','','','']; // 每一个product 对应的就是一个string类型的数组

        //便利所有的复合条件的对象，把具体的数据值，放入到对应的位置上面
        for(const obj of tempobjects){

          if(obj['product'] != null && obj['modeltype'] != null){
            if(obj['opercode'] == newobject.operation && obj['operdesc'] == newobject.description && obj['eqpid'] == eqpid
            && obj['product'] == product && obj['modeltype'] == modeltype){ // 当对象满足所有的条件的时候，才进行数据放入的操作
             // console.log(obj['actqty']);
              this.setNumb(newobject.planactnumb[i],obj['hour'],'planqty',obj['planqty']);
              this.setNumb(newobject.planactnumb[i],obj['hour'],'actqty',obj['actqty']);
            }
          }else if(obj['product'] == null && obj['modeltype'] == null){
            if(obj['opercode'] == newobject.operation && obj['operdesc'] == newobject.description && obj['eqpid'] == eqpid
            && product == "" && modeltype == ""){ // 当对象满足所有的条件的时候，才进行数据放入的操作
             // console.log(obj['actqty']);
              this.setNumb(newobject.planactnumb[i],obj['hour'],'planqty',obj['planqty']);
              this.setNumb(newobject.planactnumb[i],obj['hour'],'actqty',obj['actqty']);
            }
          }
         
        }

        //console.log(newobject.planactnumb[i]);
        //基本数据放完了之后，需要把TTL 和 Bal 的数据进行计算出来 ： 这个地方是非常麻烦的 啊
        let nowDay = new Date(); // 这个记录的是当前的日期
       // console.log(nowDay.getDate() +"  --->  "+nowDay.getDay());
        let selectedDay = this.selectedDate; // 这个是选中的查询日期
        let yearsNumber = nowDay.getFullYear() - selectedDay.getFullYear();
        let monthsNumber = (nowDay.getMonth()+1) - (selectedDay.getMonth()+1);
        let daysNumber = nowDay.getDate() - selectedDay.getDate(); // 两者差的天数

        let planTtl = 0; // 计划的和
        let actTtl = 0; // 实际的和
        let bal = 0; // 均值的和 ,上面两个数进行相减即可
        let indexNumbers :number[]= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]; // 用来作为下标读取已经保存的数据的
        // 需要全都计算的情况 ： 1.不同年的时候；2.同年不同月且当前日期不为1的时候；3.同年同月，但是日期差两天的时候
        if(yearsNumber >0 || (yearsNumber == 0 && monthsNumber >0 && nowDay.getDate() != 1) ||(yearsNumber == 0 && monthsNumber == 0 && daysNumber >=2)){ 
          //alert(日期差2天及以上，所有的数据都需要计算);
          if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
            
            //console.log("eqpid不为空");
            for(let myindex of indexNumbers){
              if( (myindex % 2) == 0){ // plan的计算
                let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
               // console.log(myindex+"-->"+numstr+"<--");
                if(numstr != "" || numstr.trim() != ""){
                  planTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  planTtl += 0;
                }

              }else if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
           // console.log(planTtl);
            //console.log(actTtl);

            newobject.planactnumb[i][22] = planTtl+'';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = actTtl-planTtl+'';

          }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
            //console.log("eqpid为空");
            for(let myindex of indexNumbers){
            if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
            newobject.planactnumb[i][22] = '';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = '';

          }
        }
        // 需要分情况计算的情况 ： 1.同年，同月 差一天的时候 2.同年，不同月，但是 当前日期为1的时候，也就是满足日期只差一天
        else if((yearsNumber == 0 && monthsNumber == 0 && daysNumber ==1)){
          //alert("日期差1天");
          let nowHour = nowDay.getHours(); // 获取到当前日期的小时的信息，这个很关键，用来判断是否都需要进行计算
          //console.log(nowHour);
          if(nowHour >= 6){ // 当小时 大于等于6点的时候，需要全都进行计算：逻辑和上面的全算是一样的
            if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
            
              //console.log("eqpid不为空");
              for(let myindex of indexNumbers){
                if( (myindex % 2) == 0){ // plan的计算
                  let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
                 // console.log(myindex+"-->"+numstr+"<--");
                  if(numstr != "" || numstr.trim() != ""){
                    planTtl += parseInt(numstr); // 取的每个数据进行相加
                  }else{
                    planTtl += 0;
                  }
  
                }else if(myindex % 2 != 0){
                  let numstr = newobject.planactnumb[i][myindex];
                  if(numstr != "" || numstr.trim() != ""){
                    actTtl += parseInt(numstr); // 取的每个数据进行相加
                  }else{
                    actTtl += 0;
                  }
                }
              }
             // console.log(planTtl);
              //console.log(actTtl);
  
              newobject.planactnumb[i][22] = planTtl+'';
              newobject.planactnumb[i][23] = actTtl+'';
              newobject.planactnumb[i][24] = actTtl-planTtl+'';
  
            }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
              //console.log("eqpid为空");
              for(let myindex of indexNumbers){
              if(myindex % 2 != 0){
                  let numstr = newobject.planactnumb[i][myindex];
                  if(numstr != "" || numstr.trim() != ""){
                    actTtl += parseInt(numstr); // 取的每个数据进行相加
                  }else{
                    actTtl += 0;
                  }
                }
              }
              newobject.planactnumb[i][22] = '';
              newobject.planactnumb[i][23] = actTtl+'';
              newobject.planactnumb[i][24] = '';
  
            }
          }else{ // 当当前的小时，为 0，1，2，3，4，5的时候，需要进行筛选计算数据值，因为，有的plan是没有数据值的，所以也不能进行act的计算，因为，如果算了，那么bal的数据值就不准了
            if(nowHour == 0 || nowHour == 1){  // nowHour : 0,1 的时候，计算的是到 00：00的数据
              let indexNumbers0001 :number[]= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
              if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
            
                //console.log("eqpid不为空");
                for(let myindex of indexNumbers0001){
                  if( (myindex % 2) == 0){ // plan的计算
                    let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
                   // console.log(myindex+"-->"+numstr+"<--");
                    if(numstr != "" || numstr.trim() != ""){
                      planTtl += parseInt(numstr); // 取的每个数据进行相加
                    }else{
                      planTtl += 0;
                    }
    
                  }else if(myindex % 2 != 0){
                    let numstr = newobject.planactnumb[i][myindex];
                    if(numstr != "" || numstr.trim() != ""){
                      actTtl += parseInt(numstr); // 取的每个数据进行相加
                    }else{
                      actTtl += 0;
                    }
                  }
                }
               // console.log(planTtl);
                //console.log(actTtl);
    
                newobject.planactnumb[i][22] = planTtl+'';
                newobject.planactnumb[i][23] = actTtl+'';
                newobject.planactnumb[i][24] = actTtl-planTtl+'';
    
              }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
                //console.log("eqpid为空");
                for(let myindex of indexNumbers0001){
                if(myindex % 2 != 0){
                    let numstr = newobject.planactnumb[i][myindex];
                    if(numstr != "" || numstr.trim() != ""){
                      actTtl += parseInt(numstr); // 取的每个数据进行相加
                    }else{
                      actTtl += 0;
                    }
                  }
                }
                newobject.planactnumb[i][22] = '';
                newobject.planactnumb[i][23] = actTtl+'';
                newobject.planactnumb[i][24] = '';
    
              }

            }else if(nowHour == 2 || nowHour == 3){ // nowHour : 2,3 的时候，计算的是 到 02：00的数据
              let indexNumbers0203 :number[]= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
              if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
            
                //console.log("eqpid不为空");
                for(let myindex of indexNumbers0203){
                  if( (myindex % 2) == 0){ // plan的计算
                    let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
                   // console.log(myindex+"-->"+numstr+"<--");
                    if(numstr != "" || numstr.trim() != ""){
                      planTtl += parseInt(numstr); // 取的每个数据进行相加
                    }else{
                      planTtl += 0;
                    }
    
                  }else if(myindex % 2 != 0){
                    let numstr = newobject.planactnumb[i][myindex];
                    if(numstr != "" || numstr.trim() != ""){
                      actTtl += parseInt(numstr); // 取的每个数据进行相加
                    }else{
                      actTtl += 0;
                    }
                  }
                }
               // console.log(planTtl);
                //console.log(actTtl);
    
                newobject.planactnumb[i][22] = planTtl+'';
                newobject.planactnumb[i][23] = actTtl+'';
                newobject.planactnumb[i][24] = actTtl-planTtl+'';
    
              }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
                //console.log("eqpid为空");
                for(let myindex of indexNumbers0203){
                if(myindex % 2 != 0){
                    let numstr = newobject.planactnumb[i][myindex];
                    if(numstr != "" || numstr.trim() != ""){
                      actTtl += parseInt(numstr); // 取的每个数据进行相加
                    }else{
                      actTtl += 0;
                    }
                  }
                }
                newobject.planactnumb[i][22] = '';
                newobject.planactnumb[i][23] = actTtl+'';
                newobject.planactnumb[i][24] = '';
    
              }
            }else if(nowHour == 4 || nowHour == 5){ // nowHour : 4,5 的时候，计算的是到 04：00的数据
              let indexNumbers0405 :number[]= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
              if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
            
                //console.log("eqpid不为空");
                for(let myindex of indexNumbers0405){
                  if( (myindex % 2) == 0){ // plan的计算
                    let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
                   // console.log(myindex+"-->"+numstr+"<--");
                    if(numstr != "" || numstr.trim() != ""){
                      planTtl += parseInt(numstr); // 取的每个数据进行相加
                    }else{
                      planTtl += 0;
                    }
    
                  }else if(myindex % 2 != 0){
                    let numstr = newobject.planactnumb[i][myindex];
                    if(numstr != "" || numstr.trim() != ""){
                      actTtl += parseInt(numstr); // 取的每个数据进行相加
                    }else{
                      actTtl += 0;
                    }
                  }
                }
               // console.log(planTtl);
                //console.log(actTtl);
    
                newobject.planactnumb[i][22] = planTtl+'';
                newobject.planactnumb[i][23] = actTtl+'';
                newobject.planactnumb[i][24] = actTtl-planTtl+'';
    
              }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
                //console.log("eqpid为空");
                for(let myindex of indexNumbers0405){
                if(myindex % 2 != 0){
                    let numstr = newobject.planactnumb[i][myindex];
                    if(numstr != "" || numstr.trim() != ""){
                      actTtl += parseInt(numstr); // 取的每个数据进行相加
                    }else{
                      actTtl += 0;
                    }
                  }
                }
                newobject.planactnumb[i][22] = '';
                newobject.planactnumb[i][23] = actTtl+'';
                newobject.planactnumb[i][24] = '';
    
              }
            }
          }

        }
        // 当日期是当前日期的时候 : 就是初始化打开，或者刷新时候执行的操作，每次刷新执行的都是new Date() ,所以都是新的日期
        else if((yearsNumber == 0 && monthsNumber == 0 && daysNumber == 0)){
         // alert("就是当天！");
         let nowHour = nowDay.getHours();
         if(nowHour == 10 || nowHour == 11){ // 只计算 10点的内容
          let indexNumbers1011 :number[]= [0,1];
          if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
        
            //console.log("eqpid不为空");
            for(let myindex of indexNumbers1011){
              if( (myindex % 2) == 0){ // plan的计算
                let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
               // console.log(myindex+"-->"+numstr+"<--");
                if(numstr != "" || numstr.trim() != ""){
                  planTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  planTtl += 0;
                }

              }else if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
           // console.log(planTtl);
            //console.log(actTtl);

            newobject.planactnumb[i][22] = planTtl+'';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = actTtl-planTtl+'';

          }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
            //console.log("eqpid为空");
            for(let myindex of indexNumbers1011){
            if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
            newobject.planactnumb[i][22] = '';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = '';

          }
         }else if(nowHour == 12 || nowHour == 13){
          let indexNumbers1213 :number[]= [0,1,2,3];
          if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
        
            //console.log("eqpid不为空");
            for(let myindex of indexNumbers1213){
              if( (myindex % 2) == 0){ // plan的计算
                let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
               // console.log(myindex+"-->"+numstr+"<--");
                if(numstr != "" || numstr.trim() != ""){
                  planTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  planTtl += 0;
                }

              }else if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
           // console.log(planTtl);
            //console.log(actTtl);

            newobject.planactnumb[i][22] = planTtl+'';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = actTtl-planTtl+'';

          }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
            //console.log("eqpid为空");
            for(let myindex of indexNumbers1213){
            if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
            newobject.planactnumb[i][22] = '';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = '';

          }
         }else if(nowHour == 14 || nowHour == 15){
          let indexNumbers1415 :number[]= [0,1,2,3,4,5];
          if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
        
            //console.log("eqpid不为空");
            for(let myindex of indexNumbers1415){
              if( (myindex % 2) == 0){ // plan的计算
                let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
               // console.log(myindex+"-->"+numstr+"<--");
                if(numstr != "" || numstr.trim() != ""){
                  planTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  planTtl += 0;
                }

              }else if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
           // console.log(planTtl);
            //console.log(actTtl);

            newobject.planactnumb[i][22] = planTtl+'';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = actTtl-planTtl+'';

          }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
            //console.log("eqpid为空");
            for(let myindex of indexNumbers1415){
            if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
            newobject.planactnumb[i][22] = '';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = '';

          }
         }else if(nowHour == 16 || nowHour == 17){
          let indexNumbers1617 :number[]= [0,1,2,3,4,5,6,7];
          if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
        
            //console.log("eqpid不为空");
            for(let myindex of indexNumbers1617){
              if( (myindex % 2) == 0){ // plan的计算
                let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
               // console.log(myindex+"-->"+numstr+"<--");
                if(numstr != "" || numstr.trim() != ""){
                  planTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  planTtl += 0;
                }

              }else if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
           // console.log(planTtl);
            //console.log(actTtl);

            newobject.planactnumb[i][22] = planTtl+'';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = actTtl-planTtl+'';

          }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
            //console.log("eqpid为空");
            for(let myindex of indexNumbers1617){
            if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
            newobject.planactnumb[i][22] = '';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = '';

          }
         }else if(nowHour == 18 || nowHour == 19){
          let indexNumbers1819 :number[]= [0,1,2,3,4,5,6,7,8,9];
          if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
        
            //console.log("eqpid不为空");
            for(let myindex of indexNumbers1819){
              if( (myindex % 2) == 0){ // plan的计算
                let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
               // console.log(myindex+"-->"+numstr+"<--");
                if(numstr != "" || numstr.trim() != ""){
                  planTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  planTtl += 0;
                }

              }else if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
           // console.log(planTtl);
            //console.log(actTtl);

            newobject.planactnumb[i][22] = planTtl+'';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = actTtl-planTtl+'';

          }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
            //console.log("eqpid为空");
            for(let myindex of indexNumbers1819){
            if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
            newobject.planactnumb[i][22] = '';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = '';

          }
         }else if(nowHour == 20 || nowHour == 21){
          let indexNumbers2021 :number[]= [0,1,2,3,4,5,6,7,8,9,10,11];
          if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
        
            //console.log("eqpid不为空");
            for(let myindex of indexNumbers2021){
              if( (myindex % 2) == 0){ // plan的计算
                let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
               // console.log(myindex+"-->"+numstr+"<--");
                if(numstr != "" || numstr.trim() != ""){
                  planTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  planTtl += 0;
                }

              }else if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
           // console.log(planTtl);
            //console.log(actTtl);

            newobject.planactnumb[i][22] = planTtl+'';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = actTtl-planTtl+'';

          }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
            //console.log("eqpid为空");
            for(let myindex of indexNumbers2021){
            if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
            newobject.planactnumb[i][22] = '';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = '';

          }
         }else if(nowHour == 22 || nowHour == 23){
          let indexNumbers2223 :number[]= [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
          if((eqpid != '空' ) || (eqpid == '空' && product == 'Shipping Total')){ // 当machine不为空的时候，需要进行全部的计算
        
            //console.log("eqpid不为空");
            for(let myindex of indexNumbers2223){
              if( (myindex % 2) == 0){ // plan的计算
                let numstr = newobject.planactnumb[i][myindex]; //这个数为什么获取不到？
               // console.log(myindex+"-->"+numstr+"<--");
                if(numstr != "" || numstr.trim() != ""){
                  planTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  planTtl += 0;
                }

              }else if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
           // console.log(planTtl);
            //console.log(actTtl);

            newobject.planactnumb[i][22] = planTtl+'';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = actTtl-planTtl+'';

          }else if(eqpid == '空'){ // 当machine 为空的时候，只需要计算act的数据
            //console.log("eqpid为空");
            for(let myindex of indexNumbers2223){
            if(myindex % 2 != 0){
                let numstr = newobject.planactnumb[i][myindex];
                if(numstr != "" || numstr.trim() != ""){
                  actTtl += parseInt(numstr); // 取的每个数据进行相加
                }else{
                  actTtl += 0;
                }
              }
            }
            newobject.planactnumb[i][22] = '';
            newobject.planactnumb[i][23] = actTtl+'';
            newobject.planactnumb[i][24] = '';

          }
         }
          
        }


       
      }
     // console.log(newobject);

      this.data.push(newobject);
      //console.log("===   第  "+i+"  个对象创建完成！  ===============");


      //下面的循环把 所有的对象重新创建成 一条一条的对象进行界面上的展示
      this.datareal = [];
      for(const tempobject of this.data){ // 这个是那个大对象，需要拆分成小对象
        let machinelength = tempobject.machine.length; // 这就是小对象的个数
        for(let i = 0;i < machinelength;i++){ // 循环进行创建小对象
          const newobject = new CfMoveHourObject2();
          newobject.operation = tempobject.operation;
          newobject.description = tempobject.description;
          newobject.machine = tempobject.machine[i];
          newobject.productspec = tempobject.productspec[i];
          newobject.cf = tempobject.cf[i];
          newobject.planactnumb = tempobject.planactnumb[i];
          this.datareal.push(newobject);
        }

      }

      


     //console.log(this.data);
      
    }

    console.log(this.datareal); // 这个datareal没有问题
    
      //3.第三个 循环 把一条一条的对象放入到 data的对象数组中去
      for(const aaobj of this.data){
        for(const bbobj of this.datareal){ 
         // console.log(bbobj.operation +" : "+bbobj.description);
          if(aaobj.operation == bbobj.operation && aaobj.description == bbobj.description){
            //if(!aaobj.ereryObjects.includes(bbobj)){ // 这个地方去除掉 shipping中的重复的数据，这个bug隐藏的很深
              aaobj.ereryObjects.push(bbobj);
            //}
           
          }
        }

        //console.log(aaobj.ereryObjects);
        //console.log("********************");
      }
   





  }

  //3.handledata方法中用到的放入数据的方法 : 根据时间和plan or  act 放入数据
  setNumb(numbs:string[], time:string,name:string,numb:string){
    switch(time){
      case  '10' : {
        if(name == 'planqty' && numb != null){
          numbs[0] = numb;
        }else if(name == 'actqty' && numb != null ){
          numbs[1] = numb;
        }
      }break;

      case  '12' : {
        if(name == 'planqty' && numb != null){
          numbs[2] = numb;
        }else if(name == 'actqty' && numb != null ){
          numbs[3] = numb;
        }
      }break;

      case  '14' : {
        if(name == 'planqty'  && numb != null){
          numbs[4] = numb;
        }else if(name == 'actqty'  && numb != null ){
          numbs[5] = numb;
        }
      }break;

      case  '16' : {
        if(name == 'planqty'  && numb != null){
          numbs[6] = numb;
        }else if(name == 'actqty'  && numb != null ){
          numbs[7] = numb;
        }
      }break;

      case  '18' : {
        if(name == 'planqty'  && numb != null){
          numbs[8] = numb;
        }else if(name == 'actqty'  && numb != null ){
          numbs[9] = numb;
        }
      }break;

      case  '20' : {
        if(name == 'planqty'  && numb != null){
          numbs[10] = numb;
        }else if(name == 'actqty'  && numb != null){
          numbs[11] = numb;
        }
      }break;

      case  '22' : {
        if(name == 'planqty'  && numb != null){
          numbs[12] = numb;
        }else if(name == 'actqty'  && numb != null ){
          numbs[13] = numb;
        }
      }break;

      case  '00' : {
        if(name == 'planqty'  && numb != null){
          numbs[14] = numb;
        }else if(name == 'actqty'  && numb != null ){
          numbs[15] = numb;
        }
      }break;

      case  '02' : {
        if(name == 'planqty'  && numb != null){
          numbs[16] = numb;
        }else if(name == 'actqty'  && numb != null){
          numbs[17] = numb;
        }
      }break;

      case  '04' : {
        if(name == 'planqty'  && numb != null){
          numbs[18] = numb;
        }else if(name == 'actqty'  && numb != null){
          numbs[19] = numb;
        }
      }break;

      case  '06' : {
        if(name == 'planqty'  && numb != null){
          numbs[20] = numb;
        }else if(name == 'actqty'  && numb != null){
          numbs[21] = numb;
        }
      }break;

      case  'TTL' : {
        if(name == 'planqty'  && numb != null){
          numbs[22] = numb;
        }else if(name == 'actqty'  && numb != null){
          numbs[23] = numb;
        }
      }break;


    }
  }

  //4.选中时间查询数据
  searchbytime(){
    this.searchData(this.getTimeAttribute(this.selectedDate),this.selectedProductiontype);
  }

  //5.刷新 ： 是刷新当前的数据
  refreshdata(){
    this.selectedDate = new Date();
    this.searchData(this.getTimeAttribute(new Date()),this.selectedProductiontype);
  }

  //6.改变ProductionType的时候触发的方法
  productiontypeChange(){
    this.searchData(this.getTimeAttribute(this.selectedDate),this.selectedProductiontype);
  }

   // 10.导出excel
   exportExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('cfmovehourtable')); // 将这个表格转换成一个 sheet
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // 这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
    this.saveAsExcelFile(excelBuffer, 'Cf 主工艺Move小时段数据');

  }
  saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName  +'-'+this.getTimeAttribute(this.selectedDate)+ '.xls');
  }



}
