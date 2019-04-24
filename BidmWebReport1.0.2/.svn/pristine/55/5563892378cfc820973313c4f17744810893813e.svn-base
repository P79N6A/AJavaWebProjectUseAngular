import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ApiService {

  private apiUrl = environment.apiPath;

  constructor(private http: HttpClient) { }

  // select all
  getAll(url: string) {
    return this.http.get(this.apiUrl + url);
  }

  // options를 추가할 경우 response type이 default로 arraybuffer로 설정되기 때문에,
  // 모든 타입을 받기위해 observable<any> 로 설정한다.
  getOne(url: string, options?): Observable<any> {
    return this.http.get(this.apiUrl + url, options);
  }

  // select parameter
  get(url: string, options?): Observable<any> {
    return this.http.get(this.apiUrl + url, options);
  }

  // insert
  post(url: string, data, option?) {
    console.log(this.apiUrl + url);
    return this.http.post(this.apiUrl + url, data, option);
  }

  // update
  put(url: string, data, option?) {
    return this.http.put(this.apiUrl + url, data,option);
  }

  putBoth(url: string, data, option?) {
    return this.http.put(this.apiUrl + url, data, option);
  }

  // delete
  delete(url: string, data) {
    return this.http.delete(this.apiUrl + url, data);
  }

  testGet(url): Observable<any>  {
    return this.http.get(url);
  }


  getHeaders() {
    let obj = JSON.parse(localStorage.getItem("currentUser"));
    if (obj != null) {
      return new HttpHeaders({ 'userCode': obj.userCode,'loginTime':obj.loginTime,'token':obj.token });
    } else {
      return null;
    }

  }
}
