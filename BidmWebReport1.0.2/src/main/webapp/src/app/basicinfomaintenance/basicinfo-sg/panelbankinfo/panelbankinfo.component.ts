import { Component, OnInit } from '@angular/core';
import { PanelBankObject } from './model/objects';
import { ApiService } from '../../../common/service/api/api.service';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-panelbankinfo',
  templateUrl: './panelbankinfo.component.html',
  styleUrls: ['./panelbankinfo.component.css']
})
export class PanelbankinfoComponent implements OnInit {

  //1.保存数据 和 列名 的
  data:PanelBankObject[] = [];
  cols:any[] = [];

  //2.添加时候 的临时的对象
  isadd : boolean = false;
  newObject:PanelBankObject = new PanelBankObject();

  //3.更新或者删除时候的临时对象
  isupdateOrdelete : boolean = false;
  selectedObject : PanelBankObject = new PanelBankObject();
  tempObject: PanelBankObject = new PanelBankObject(); // 用于更新时，临时保存的 用来进行对比的 对象


  constructor(private apiService : ApiService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.cols=[
      {field:'productname',header:'ProductName'},
      {field:'productspecname',header:'ProductSpecName'},
      {field:'modeltype',header:'ModelType'},
      {field:'flag',header:'Flag'},
      {field:'bu',header:'Bu'},
      {field:'cst',header:'Cst'},
      {field:'no',header:'No'},
    ];
    this.queryAllBasicInfo();
  }

  //1.查询所有数据的方法
  queryAllBasicInfo(){
    const url = '/panelbankinfo/queryall';
    this.apiService.get(url).subscribe(
      (res)=>{
        //console.log(res);
        this.data = <PanelBankObject[]>res;
      },
      (error)=>{console.log(error)}
    );
  }

  //2.添加一个对象的方法
  insertOne(){
   this.isadd = true;
  }
  //2.1取消添加的方法
  cancelAdd(){
    this.newObject = new PanelBankObject();
    this.isadd = false;
  }
  //2.2确认添加的方法
  confirmAdd(){

    if( this.newObject.productname != null && this.newObject.productspecname != null
      && this.newObject.modeltype != null && this.newObject.flag != null
      && this.newObject.bu != null && this.newObject.no != null){
        if(this.newObject.cst == null){
          this.newObject.cst = ''; 
        }
        const url = '/panelbankinfo/insertone';
        const option = {
          params:{
            productname : this.newObject.productname,
			      productspecname :this.newObject.productspecname,
			      modeltype :this.newObject.modeltype,
			      flag : this.newObject.flag,
			      bu : this.newObject.bu,
			      cst : this.newObject.cst,
			      no : this.newObject.no
          }
        };

        this.apiService.get(url,option).subscribe(
          (res)=>{
            if(res == 555){
              alert("数据已存在！");
            }else if(res == 666){
              alert("数据插入成功！");
              this.isadd = false;
              this.newObject = new PanelBankObject();
              this.queryAllBasicInfo();
            }
          },
          (error)=>{console.log(error)}
          
        );

    }else{
      alert("请完善必填信息！");
    }
   
    
  }

  //3.1当点击某一个对象的方法
  onRowSelect(event){
   this.isupdateOrdelete = true;
   this.tempObject = this.getTempObject(this.selectedObject);// 临时保存 被选中的对象
  }
  //3.2 取消选中的方法
  onRowUnselect(event){
   // console.log(event);
  }

  //3.3更新的方法
  confirmUpdate(){
    //1.先去判断 对象是否有变化，如果有，则进行更新，如果没有则提示
    if(this.equalsObject(this.tempObject,this.selectedObject)){
      alert("数据无变化！");
    }else{
     const url = '/panelbankinfo/updateone';
     this.apiService.post(url,this.selectedObject).subscribe(
       (res)=>{
         alert("更新成功！");
        this.isupdateOrdelete = false;
        this.tempObject = new PanelBankObject();
        this.selectedObject = new PanelBankObject();
        this.queryAllBasicInfo();
       },
       (error)=>{alert("更新数据失败！");console.log(error)}
     );
    }

  }

  //3.4删除的方法
  confirmDelete(){

    this.confirmationService.confirm(
      {
        message: '确定删除此条数据?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
           const url = '/panelbankinfo/deleteone';
           this.apiService.post(url,this.selectedObject).subscribe(
             (res)=>{
              alert("删除成功！");
              this.isupdateOrdelete = false;
              this.selectedObject = new PanelBankObject();
              this.queryAllBasicInfo();
             },
             (error)=>{alert("删除数据失败！");console.log(error)}
           );
        },
        reject: () => {
        }
      }
    );

  }

  //3.5判断两个panelBankinfo 对象是否相等:所有的属性是否都相等
  equalsObject( a : PanelBankObject, object:PanelBankObject):boolean{
    let eqa : boolean = false;
    if(a.productname == object.productname && a.productspecname == object.productspecname
        && a.modeltype == object.modeltype && a.flag == object.flag
        && a.bu == object.bu && a.cst == object.cst
        && a.no == object.no){
            eqa = true;
    }
    return eqa;
  }
  //3.6把一个对象的属性值，赋值给另一个对象
  getTempObject(a : PanelBankObject):PanelBankObject{
    let b : PanelBankObject = new PanelBankObject();
    b.productname = a.productname;
    b.productspecname = a.productspecname;
    b.modeltype = a.modeltype;
    b.flag = a.flag;
    b.bu = a.bu;
    b.cst = a.cst;
    b.no = a.no;
    return b;
  }

}
