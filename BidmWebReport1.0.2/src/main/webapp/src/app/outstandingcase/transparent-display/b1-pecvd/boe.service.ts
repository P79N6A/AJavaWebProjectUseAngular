import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../../node_modules/rxjs/Observable';

@Injectable()
export class BoeService {

  private boeUrl = '/boe';

  constructor(private http: HttpClient) { }

  // select all
  getAll(url: string) {
    return this.http.get(this.boeUrl + url);
  }

  // select parameter
  get(url: string, data) {
    return this.http.post(this.boeUrl + url, data);
  }

  // insert
  post(url: string, data) {
    return this.http.post(this.boeUrl + url, data);
  }

  // update
  put(url: string, data) {
    return this.http.put(this.boeUrl + url, data);
  }

  // delete
  delete(url: string, data) {
    return this.http.delete(this.boeUrl + url, data);
  }
  /// getOne
  getOne(url:string, option?):Observable<any>{ /// 默认返回类型
    // getOne('/demo/check/session', [{"id":"test","pwd":"1234"}]  ) ;
    return this.http.get(this.boeUrl+url,option);
  }

  testGet(url) {
    return this.http.get(url);
  }
}
