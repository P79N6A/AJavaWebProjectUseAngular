import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private route: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    req.headers.set('test', 'test');
    const authreq = req.clone({
      headers: req.headers.set('test', 'test')

    });
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('test', 'teset1');


    return next.handle(req).do(evt => {
      if (evt instanceof HttpResponse) {
        // 토큰이 존재하면 localstorage에 저장
        const token = evt.headers.get('test');
        if (token) {

          // this.localStorage.setItem('token', this.encrypt.decrypt(token)).subscribe(() => {});

          // this.localStorage.getItem('token').subscribe((data) => {console.log(data); } );

          // this.storage.set('token', this.encrypt.decrypt(token));

        }
      }
    }
    );
  }
}
