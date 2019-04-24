import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { MenuInfo } from '../model/MenuInfo';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userAccount:string;
  favoriteMenuList:MenuInfo[] = []; // 收藏的惨淡列表 
  topMenuInfoList:MenuInfo[] = []; // 之前访问过的菜单列表

  path_:string = environment.boePath;

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.userAccount = JSON.parse(localStorage.getItem("currentUser")).userCode;
    console.log(this.userAccount);
    this.getFavoriteMenu(); // 查询收藏的菜单列表
    this.getTop6MenuByuser(); // 查询最后访问的前六个菜单
    //console.log(this.topMenuInfoList);
  }

  getFavoriteMenu(){
    const options = {
      params: {
        userAccount:this.userAccount
      }
    };
    this.service.get('/menuinfo/getFavoriteMenuByuser/',options).subscribe(
      (res) => {
        this.favoriteMenuList = <MenuInfo[]>res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getTop6MenuByuser(){
    const options = {
      params: {
        userAccount:this.userAccount
      }
    };
    this.service.get('/menuinfo/getTop6MenuByuser/',options).subscribe(
      (res) => {
        //console.log(res);
        this.topMenuInfoList = <MenuInfo[]>res;
        //console.log(this.topMenuInfoList);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
