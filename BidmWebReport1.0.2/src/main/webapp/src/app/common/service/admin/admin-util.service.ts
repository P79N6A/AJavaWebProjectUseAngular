import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MenuInfo } from '../../../admin/model/MenuInfo';

@Injectable()
export class AdminUtilService {

  constructor(private http: HttpClient) { }

  getAllMenu(){
    var menuList;
    this.http.get(environment.apiPath + '/menuinfo/getAllMenu/').subscribe(
      (res) => {
        menuList = <MenuInfo[]>res;
      },
      (error) => {
        console.log(error);
      }
    );

    return menuList;
  }

}
