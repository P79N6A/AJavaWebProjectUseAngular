import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ApiService } from '../../common/service/api/api.service';
import { UserInfo } from '../model/UserInfo';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from '../../../core/layout/retab/service/tab.service';
import { RoleInfo } from '../model/RoleInfo';
import { ConfirmationService } from 'primeng/api';
import { Paginator } from 'primeng/primeng';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userAccount:string = ""; // 查询 条中的 双向绑定的 账号 变量
  userName:string = ""; // 查询 条中的 双向绑定的 用户名的 变量
  userFactory:string = "";
  userDepartment:string = "";

  userInfo:UserInfo = new UserInfo(); // 用户对象
  userInfoList:UserInfo[]; // 保存用户对象的列表
  display:boolean;  // 控制 是否显示 新建对话框 的 boolean  
  dialogUserInfo:UserInfo = new UserInfo(); //这个对象 是 弹出的新建对话框的 对象

  allRole:RoleInfo[]; // 保存角色的列表
  unAsignRoleList:RoleInfo[]; // 没有绑定的角色列表 ，左边的列表
  asignRoleList:RoleInfo[]; // 已经被绑定的角色的列表，右边的列表
  asignRoleList_:RoleInfo[];//cash asign menu for unpdate
  userAccount_:string="";// cash select row
    // tips
    tip_:string='';
 //page
 @ViewChild('p') paginator:Paginator;
 rows = 5; // 记录每一页的行数 
 totalRecords = 0; // 记录用户的个数
 rowsPerPageOptions = [5, 10, 15]; // 可以选的每一页有多少行的数组
 pageInfo = { pageRow: this.rows, startRow: 0 }; // 每页的信息 ，

  constructor(private service: ApiService,private confirmationService:ConfirmationService,
    private changeDetectorRef: ChangeDetectorRef,
    private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: 'Admin' },
      { label: 'user' },
    ]);

   // this.tService.setItems('Admin-user');
     }

  ngOnInit() {
    this.getUserInfo();
  }

  //是否显示 新建的对话框
  showDialog(){
    this.display = !this.display;   
  }
  getUserInfo(){  
    this.clearPickList();
    this.getPageCount();
    const options = {
      params: {
        userAccount:this.userAccount,
        userName:this.userName,
        userFactory:this.userFactory,
        userDepartment:this.userDepartment,
        pageRow: this.pageInfo['pageRow'],
        startRow: this.pageInfo['startRow']
      }
    };
    this.service.get('/userinfo/selectAllUser/',options).subscribe(
      (res) => {
        this.userInfoList = <UserInfo[]>res;
        this.changeDetectorRef.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  //更新用户信息的方法：用户名，工厂，科室，在 页面上面是可以进行编辑的，所以，如果有变化需要写入到数据库里面
  updateUserInfo(obj){ 
    let options = {
      headers:this.service.getHeaders(),
    }

    this.service.put('/userinfo/update/updateUserInfo',obj,options).subscribe(
      (res) => { 

      },
      (error) => {    
      }
    )    
  }

  //新创建一个用户的方法
  addUserInfo(){ 
    //alert("add userINfo");
    if(this.dialogUserInfo.userAccount==null || this.dialogUserInfo.userAccount==""){
      return;
    }
    this.dialogUserInfo.state=true;
    let options = {
      headers:this.service.getHeaders(),
    }
    this.service.post('/userinfo/insert/userInfo',this.dialogUserInfo,options).subscribe(
      (res) => { 
        //if(res == 1){
          this.userInfoList.push(this.dialogUserInfo);          
          this.dialogHide();
          this.totalRecords = this.totalRecords + 1;
          this.changeDetectorRef.detectChanges();
        //}           
      },
      (error) => {    
      }
    ) 
  }
  //点击叉号关闭对话框时 ： 清空写完的信息并且创建一个新的 userinfo对象
  dialogHide(){
    this.dialogUserInfo = null;
    this.dialogUserInfo = new UserInfo();
  }

   deleteData(obj) {
    this.confirmationService.confirm({
      message: '确定要删除用户 ' + obj.userName + ' 吗?',
      accept: () => {
        this.actionDelete(obj);
      }
    }); 
  }

  actionDelete(obj) {
    const url = '/userinfo/delete/deleteUserInfo';
    this.userInfo = obj;
    const data = { body: this.userInfo };
    this.service.delete(url, data).subscribe(
      (res) => {
        var index = this.userInfoList.indexOf(obj);
        this.userInfoList.splice(index,1);
        this.totalRecords = this.totalRecords - 1;
        this.changeDetectorRef.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }
 
  //init pick list
  onRowSelect(event) {
    this.userAccount_ = this.userInfo.userAccount;
    this.getAllRole();    
  }

  getAllRole(){
    this.service.get('/userrolelink/getRoleList_List/').subscribe(
      (res) => {
        this.allRole = <RoleInfo[]>res;

        this.setPickList(this.userInfo.userAccount);
       },
      (error) => {
        console.log(error);
      }
    );
  }

  setPickList(userAccount_){
    //获取右侧列表
    const options = {
      params:{"userAccount":userAccount_}
    };
    this.service.get('/userrolelink/getAsignedRoleByUserId',options).subscribe(
        (res) => {
          this.asignRoleList = <RoleInfo[]>res;
          this.asignRoleList_ = this.asignRoleList.slice();
          //获取左侧列表
           this.getUNAsignRoleList();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getUNAsignRoleList(){
    const array_ = new Array<string>();
    this.asignRoleList.forEach((role)=>{
       array_.push(role.roleId);
    });
 
    this.unAsignRoleList = this.allRole.filter(function(role){
           return !array_.includes(role.roleId);
      });
       
  }
  
  saveChange(){
    if(this.userAccount_==""){
      return;
    }
    const options = {
      "asignRoleList_":this.asignRoleList_,"asignRole":this.asignRoleList,"userAccount":this.userAccount_
   };
     this.service.put('/userrolelink/update/saveChange',options).subscribe(
     (res) => { 
         if(<any>res == 0){
           this.tip_ = "保存成功";
           setTimeout(()=>{this.tip_=""},3000);
         }
     },
     (error) => {    
        this.tip_ = "保存失败，请刷新页面后重新提交";
        setTimeout(()=>{this.tip_=""},3000);
     }
   ) 
 }

 //清空 绑定角色 的列表的 信息
  clearPickList(){
    this.asignRoleList=null;
    this.unAsignRoleList=null;
    this.userAccount_="";
  }


  // 这个方法是 ： 返回 满足查询条件的用户的个数 ： 
  getPageCount() {
    const url = '/userinfo/getcount';
    const options = {
      params: {
        userAccount:this.userAccount,
        userName:this.userName,
      }
    };
    this.service.get(url, options).subscribe(
      (res) => {
        this.totalRecords = res; // 赋值给全局变量，记录用户的数量
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //这个方法 用来 查询并且刷新页面的
  paginate(event) {
    this.pageInfo.pageRow = event['rows'];
    this.pageInfo.startRow = event['first'];
    this.search(event.page+1);
    this.getUserInfo();
  }

  search(page){
  }
}
