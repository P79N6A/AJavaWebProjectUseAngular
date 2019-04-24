import { Component, OnInit } from '@angular/core';
import { CfMoveHourBasicinfoObject } from './model/objects';
import { ApiService } from '../../../common/service/api/api.service';
import { ConfirmationService } from 'primeng/api';
import { Factory } from '../../../dash-board-ui/b8-dashboard/model/Factory';



@Component({
  selector: 'app-cfmovehour',
  templateUrl: './cfmovehour.component.html',
  styleUrls: ['./cfmovehour.component.css']
})
export class CfmovehourComponent implements OnInit {

  data : CfMoveHourBasicinfoObject[] = []; //保存数据的数组
  databackup :CfMoveHourBasicinfoObject[] =[]; // 备份用的数组，更新操作的时候会用到

  isadd : boolean = false; // 添加时候弹出来的对话框
  newObject : CfMoveHourBasicinfoObject = new CfMoveHourBasicinfoObject(); // 添加时候的绑定对象

  isediting :boolean = false; // 编辑时候控制按钮是否弹出的
  rowindex : number = 0; // 编辑时候控制按钮是否弹出的

  constructor(private apiService:ApiService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.searchAllData();
  }
 
  //1.查询所有的数据信息
  searchAllData(){
    this.data = []; // 每次查询之前都先置空数组
    const url = '/cfmovehourbasicinfo/queryall';
    this.apiService.get(url).subscribe(
      (res)=>{
       // console.log(res);
       this.data = [];
       this.databackup = [];
       this.data = <CfMoveHourBasicinfoObject[]>res;
       this.databackup = JSON.parse(JSON.stringify(this.data)); // 只有这种方式是可以的
      },
      (error)=>{console.log(error)}
    );
  }

  //2.添加一个对象的方法
  addOne(){
    this.isadd = true;
  }
  //2.1取消添加的方法
  cancelAdd(){
    this.newObject = new CfMoveHourBasicinfoObject(); // 对象晴空
    this.isadd =false; // 隐藏添加界面
  }
  //2.2确认添加的方法
  confirmAdd(){
    //console.log(this.newObject);
    if(this.newObject.factory == null || this.newObject.product == null 
        || this.newObject.productname == null || this.newObject.modeltype == null
        || this.newObject.factory.trim() == '' ||this.newObject.product.trim() == ''
        || this.newObject.productname.trim() == ''   || this.newObject.modeltype.trim() == ''){
          alert("请完善必填信息！");
    }else{
      if(this.newObject.flag != null){
        if(this.newObject.flag.trim() == ''){
          this.newObject.flag = null; // 强行给赋值一个null值
        }
      }
      if(this.isInDataArray(this.data,this.newObject)){ // 判断新创建的对象是否在当前的数组中已经存在
        alert("当前数据已经存在！");
      }else{
        const url = '/cfmovehourbasicinfo/insertone';
        let factorystr = this.newObject.factory.trim();
        let productstr = this.newObject.product.trim();
        let productnamestr = this.newObject.productname.trim();
        let modeltypestr = this.newObject.modeltype.trim();
        let flagstr = ''; 
        if(this.newObject.flag == null){ // 处理不填的情况
          flagstr = '';
        }else{
          if(this.newObject.flag.trim() == ''){
            flagstr = '';
          }else{
            flagstr = this.newObject.flag.trim();
          }
        }
        
        const option = {
          params:{
            factory: factorystr,
            product:productstr,
            productname:productnamestr,
            modeltype:modeltypestr,
            flag:flagstr
          }
        };
        this.apiService.get(url,option).subscribe(
          (res)=>{
            alert("数据插入成功！");
            this.searchAllData();
            this.newObject = new CfMoveHourBasicinfoObject();
            
          },
          (error)=>{alert("数据插入失败！");console.log(error);}
        );
      }

    }
  }

  //2.2.1比较两个对象相同的方法 ： 只需要比较 factory,product,productname,modeltype,flag 五个属性是否一致即可 : 此方法去掉了前后空格的影响
  equals(aa:CfMoveHourBasicinfoObject,bb:CfMoveHourBasicinfoObject):boolean{
    let isequal : boolean = false;
      if(bb.flag != null && aa.flag !=null){
       if(aa.factory.trim() == bb.factory.trim() && aa.product.trim() == bb.product.trim()
       && aa.productname.trim() == bb.productname.trim() && aa.modeltype.trim() == bb.modeltype.trim()
       && aa.flag.trim() == bb.flag.trim()){
         isequal = true; // 当五个属性都相等的时候，证明这两个对象是相等的
      }
    }else if(bb.flag == null && aa.flag == null){ // 当两个都为空的时候，只需要比较四个属性即可
      if(aa.factory.trim() == bb.factory.trim() && aa.product.trim() == bb.product.trim()
      && aa.productname.trim() == bb.productname.trim() && aa.modeltype.trim() == bb.modeltype.trim()){ 
        isequal = true; // 当五个属性都相等的时候，证明这两个对象是相等的
     }
    }else if(bb.flag == null && aa.flag != null){ // 当有一个为null的时候
      if(aa.flag.trim() == ''){ // 如果只有空的话，也是相当于为空的 
        isequal = true;
      }else{
        isequal = false;
      }
    }else if(bb.flag != null && aa.flag == null){ // 这种情况下是一定不相等的
      isequal = false;
    }
    
    return isequal;
  }
  //2.2.2查看某个对象是否已经在 当前的数组中
  isInDataArray(data:CfMoveHourBasicinfoObject[],aa:CfMoveHourBasicinfoObject):boolean{
    let isin = false;
    for(const obj of data){
      if(this.equals(obj,aa)){ // 如果 这个地方 返回的为true的时候，证明有一个对象是相等的，即，已经存在当前的对象了
        isin = true;
        break; // 直接调出循环即可
      }
    }
    return isin;
  }

  //3.删除的方法
  deleteOne(rowdata){
    console.log(rowdata);
    this.confirmationService.confirm(
      {
        message: '确定删除此条数据?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          const url = '/cfmovehourbasicinfo/deleteone';
          let factorystr = rowdata.factory.trim();
        let productstr = rowdata.product.trim();
        let productnamestr = rowdata.productname.trim();
        let modeltypestr = rowdata.modeltype.trim();
        let flagstr = ''; 
        if(rowdata.flag == null){ // 处理不填的情况
          flagstr = '';
        }else{
          if(rowdata.flag.trim() == ''){
            flagstr = '';
          }else{
            flagstr = rowdata.flag.trim();
          }
        }
          const option = {
             params :{
              factory: factorystr,
              product:productstr,
              productname:productnamestr,
              modeltype:modeltypestr,
              flag:flagstr
               }
          };
          this.apiService.get(url,option).subscribe(
            (res)=>{
              alert("删除成功！");
              this.searchAllData();
            },
            (error)=>{alert("删除数据失败！");console.log(error)}
          );
         
        },
        reject: () => {
        }
      }
    );

  }

  //4.更新时候的方法
  updateone(rowdata : CfMoveHourBasicinfoObject){
    console.log(rowdata);
    // 1.从 备份的数组中获取到 对应序号的数据对象
    let rownum = rowdata.rownum;
    let tempObject = this.databackup[rownum-1]; // 直接读取对象就ok了
    console.log(tempObject);
    //2.判断两个对象是否相等
    if(this.equals(tempObject,rowdata)){ //直接调用上面的判断两个对象是否相等的方法即可
      alert("数据无变化，无需更新！");
    }else{
      this.isediting = true; // 显示两个按钮
      this.rowindex = rownum; // 控制显示的操作
    }
   
  }
  //4.1 取消更新按钮
  cancelupdate(rowdata:CfMoveHourBasicinfoObject){
    // 1.隐藏两个按钮
    this.isediting = false; 
    //2.数据恢复到原来的样子
     // 1.从 备份的数组中获取到 对应序号的数据对象
     let rownum = rowdata.rownum;
     const tempobj = this.databackup[rownum-1];

    this.data[rownum-1].factory = tempobj.factory; // 直接修改这个对象的属性，而不是指向另一个对象
    this.data[rownum-1].product = tempobj.product;
    this.data[rownum-1].productname = tempobj.productname;
    this.data[rownum-1].modeltype = tempobj.modeltype;
    this.data[rownum-1].flag = tempobj.flag;

  }

  //4.2确定更新的操作
  confirmupdate(rowdata:CfMoveHourBasicinfoObject){
    const url = '/cfmovehourbasicinfo/updateone';
    let factorystr = rowdata.factory.trim();
    let productstr = rowdata.product.trim();
    let productnamestr = rowdata.productname.trim();
    let modeltypestr = rowdata.modeltype.trim();
    let flagstr = ''; 
    if(rowdata.flag == null){ // 处理不填的情况
      flagstr = '';
    }else{
      if(rowdata.flag.trim() == ''){
        flagstr = '';
      }else{
        flagstr = rowdata.flag.trim();
      }
    }
    const option = {
      params:{
        factory : factorystr,
        product : productstr,
        productname : productnamestr,
        modeltype : modeltypestr,
        flag : flagstr
      }
    };
    this.apiService.get(url,option).subscribe(
      (res)=>{
        this.isediting = false;
        //alert("更新成功！");
       
        this.searchAllData();
      },
      (error)=>{alert("更新失败！");console.log(error)}
    );
  }

}
