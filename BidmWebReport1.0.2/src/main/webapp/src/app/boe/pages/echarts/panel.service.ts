import { Injectable } from '@angular/core';
import { Panel } from './panel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class PanelService {

  ps: Panel[] = [];

  constructor(private http: HttpClient) { }

  add(p: Panel) {
    let headers = new HttpHeaders({responseType: 'text'});
    let options = {headers: headers};
    // this.http.get("assets/boe/echarts/" + p.path + "/data", options).subscribe(
    //   (res) => {
    //     console.log(res);
    //     // p.setOptions(res);
    //   }
    // );
    this.http.get("assets/boe/echarts/" + p.path + "/data", {responseType: 'text'})
      .pipe().subscribe(
        res => { 
          // console.log(typeof(res)); 
          let option;
          eval(res);
          p.setOptions(option);
        }
      )
    this.ps.push(p);
  }

}
