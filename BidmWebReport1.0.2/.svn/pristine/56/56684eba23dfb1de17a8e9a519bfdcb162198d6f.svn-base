import { Component, OnInit } from '@angular/core';
import {  ProductNameInfo } from './model/productName';
import { ApiService } from '../../../common/service/api/api.service';
import { SelectItem, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-productnameinfo',
  templateUrl: './productnameinfo.component.html',
  styleUrls: ['./productnameinfo.component.css']
})
export class ProductnameinfoComponent implements OnInit {

  //1.表格列的属性
  cols:any[] = [];
  //2.保存表格中数据的数组
  datas : ProductNameInfo[] = [];
  //3.下拉框保存的数据
  factorys : SelectItem[] = [];

  //4.控制是否显示添加对话框的
  isAdd : boolean = false;
  //5.保存 新建的临时对象
  newObject : ProductNameInfo = new ProductNameInfo();

  //6.控制是否显示要更改或者删除的对话框
  isdeleteOrupdate : boolean = false;
  //7.保存 点击选中的对象
  selectedObject : ProductNameInfo = new ProductNameInfo();

  //8. 删除或者更新的对话框，需要删除的时候都不能更改，只能看不能改，更新的时候可以改
  isdelete : boolean = false;


  constructor(private apiService:ApiService,
              private confirmationService : ConfirmationService) { }

  ngOnInit() {
    this.cols = [
      {field:'factory',header:'Factory'},
      {field:'product',header:'Product'},
      {field:'productName',header:'ProductName'},
      {field:'owner',header:'Owner'}
    ];
    this.factorys = [
      {label:'所有工厂',value:'所有工厂'},
      {label:'ARRAY',value:'ARRAY'},
      {label:'CF',value:'CF'},
      {label:'CELL',value:'CELL'},
      {label:'MODULE',value:'MODULE'},
      {label:'S2MODULE',value:'S2MODULE'},
    ];

    //初始化页面的时候直接查询的是全部的信息
    this.queryAllDatas();
  }

  //1.查询所有的数据 : 这个应该是没有什么问题的了
  queryAllDatas(){
    const url = '/basicinfo/productNameAll';
    this.apiService.get(url).subscribe(
      (res)=>{
       this.datas = <ProductNameInfo[]>res;
      },
      (error)=>{console.log(error)}
    );

  }
  //2.根据筛选的条件查询数据
  queryByFactory(factoryname){
    if(factoryname == '所有工厂'){
      this.queryAllDatas();
    }else{
      const url = '/basicinfo/productName';
      const option = {
        params:{
          factoryname : factoryname
        }
      };
      this.apiService.get(url,option).subscribe(
        (res)=>{
          this.datas = <ProductNameInfo[]>res;
          if(this.datas.length ==0){
            alert("未查询到数据！");
          }
         },
         (error)=>{console.log(error)}
      );
    }
  }

  //3.添加一个对象的方法：弹出一个对话框
  addOne(){
    this.isAdd = true; // 让这个对话框显示即可
  }
  //4.确认添加对象的方法
  confirm(){
    if(this.newObject.factory == null || this.newObject.product == null
      || this.newObject.productName == null || this.newObject.owner == null){
        alert("请完善必填项目！");
    }else{
      const url = '/basicinfo/insertOne';
      const option = {
        params:{
          factory : this.newObject.factory,
          product : this.newObject.product,
          productname : this.newObject.productName,
          owner : this.newObject.owner
        }
      };

      this.apiService.get(url,option).subscribe(
        (res)=>{ // 插入成功，再查询一边数据库中的数据
        //  let result = new Int16Array(res); // 转换成一个别的方式进行操作
        //  let resultLength = result.length; // 获取 转换之后的数据长度 ： 因为返回值是固定的，所以长度也是固定的
        //   if(resultLength == 555){
        //     alert("此数据已存在！");
        //   }else if(resultLength == 1){
        //     alert("新数据插入成功！");
        //   }
          if(res == 555){
            alert("此数据已存在！");
          }else{
            alert("新数据插入成功！");
          }
          this.isAdd = false;
          this.queryAllDatas();
          this.newObject = new ProductNameInfo(); // 使这个对象成为一个新的对象，
         
        },
        (error)=>{alert('插入数据失败！');console.log(error)}
      );
    }
    
  }
  //5.取消添加的方法：就是把对话框关闭，并且对象属性清空
  cancel(){
    this.isAdd = false;
  }

  //6.选中某一行的数据 : 点击一下 就是选中
  onRowSelected(event){
    console.log(this.selectedObject);
    this.isdeleteOrupdate = true;
  }

  //7.取消选中：点击两下就是取消选中 : 这个方法没有用，暂时留着
  onRowUnselect(event){
    this.selectedObject = null; // 取消选中的时候这个对象取值 为 null
    this.isdeleteOrupdate = false; // 取消选中时候，隐藏对话框
  }

  //8.删除一个对象的方法
  delteObject(){
    if(this.selectedObject != null){ // 一般这个情况是成立的，因为是直接点击获取的对象
      this.confirmationService.confirm(
      {
        message:'确认删除当前数据？',
        header:'Delete Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => { // 确认的时候怎么样 : 去数据库中删除数据
          const url = '/basicinfo/deleteOne';
          const data = {body : this.selectedObject};
          this.apiService.delete(url,data).subscribe(
            (res)=>{ // 删除成功之后
              this.isdeleteOrupdate = false; // 确认完成之后 详情信息 对话框隐藏掉
              this.selectedObject = new ProductNameInfo(); // 同时 被选中的对象为null
              this.queryAllDatas();//重新查询一边所有的数据

             },
             (error)=>{console.log(error)},
           );
               
           
          },
        reject: () => { // 取消的时候怎么样
         
          this.isdeleteOrupdate = false; // 确认完成之后 详情信息 对话框隐藏掉
          this.selectedObject = new ProductNameInfo(); // 同时 被选中的对象为null
          }
      }
      );
    }
  }

  //9.更新一个对象的方法
  updateObject(){
    const url = '/basicinfo/updateOne';
  
    this.apiService.post(url,this.selectedObject).subscribe(
      (res)=>{ // 更新成功之后的操作
        this.isdeleteOrupdate = false;
        this.selectedObject = new ProductNameInfo();
        this.queryAllDatas();
      },
      (error)=>{console.log(error)}

    );
  }

}
