import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'app/common/service/api/api.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private http: HttpClient,
        private apiService:ApiService
    ) { }

    private availableMenu = [];

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //console.log('AuthGuard  canActivate : ', this.router.url);
        // if (!this.isSessionCheck()) {
        //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // }
        return this.checkSession(state.url);

        // const result = this.checkSession(state.url);
        // if (result === false || result === new Observable<boolean>())
        // console.log("canActivate");
        //  const result = this.checkSession(state.url);

        //  if(result){   
        //         // 获取当前用户有权限的菜单
        //         const headers_ =  this.apiService.getHeaders();
        //         if(environment.unifiedAuth && headers_ != null){
        //             const options = {
        //                 headers:headers_
        //             };
        //             this.http.get(environment.apiPath+'/menuinfo/getMenuByuser/',options).subscribe(
        //                 (res) => {
        //                     this.availableMenu = <string[]>res;
        //                 //  console.log('登陆时加载当前用户有权限访问的菜单');routerlink 字段
        //                 },
        //                 (error) => {
        //                 console.log(error);
        //                 }
        //             )
        //         }
        //   }

        // return result;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const result = this.checkSession(state.url);
        if (!result) {
            return false;
        }

        if (this.availableMenu.length == 0) {
            // 获取当前用户有权限的菜单
            const headers_ =  this.apiService.getHeaders();
            if (environment.unifiedAuth && headers_ != null) {
                const options = {
                    headers:headers_
                };
                return this.http.get(environment.apiPath+'/menuinfo/getMenuByuser/', options).toPromise().then(
                    (res) => {
                        this.availableMenu = <string[]>res;
                        // console.log(this.availableMenu);
                        return this.checkRoute(state.url);
                    },
                    (error) => {
                        console.log(error);
                        return false;
                    }
                )
            }
        } else {
            return this.checkRoute(state.url);
        }
        // console.log("canActivateChild -- " + route.url + " -- " + state.url);
        // //  权限过滤 不拦截首页
        // if (environment.unifiedAuth && environment.defaultTabRouter != null && environment.defaultTabRouter != state.url) {
        //     let flag_ = false;
        //     // console.log(this.availableMenu);
        //     this.availableMenu.forEach((routerLink_)=>{
        //         let tmp_ = state.url.split("?")[0].split("/" + routerLink_);
        //         if(tmp_.length === 2 && tmp_[1] === ""){
        //             flag_ = true;
        //         }
        //     });

        //     if (!flag_) {
        //         localStorage.removeItem('currentUser');
        //         this.router.navigate(['/login'],{ queryParams: { returnUrl: environment.defaultTabRouter } });
        //         return false;
        //     }
        // }

        // //console.log('AuthGuard  canActivateChild : ', this.router.url);
        // // if (!this.isSessionCheck()) {
        // //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // // }
        // // return this.isSessionCheck();

        // return this.checkSession(state.url);
    }

    checkRoute(url: string): boolean {
        let flag = true;

        //  权限过滤 不拦截首页
        if (environment.unifiedAuth && environment.defaultTabRouter != null && environment.defaultTabRouter != url) {
            // console.log(this.availableMenu);
            // console.log(url);
            flag = false;
            this.availableMenu.forEach((routerLink_)=>{
                let tmp_ = url.split("?")[0].split("/" + routerLink_);
                if(tmp_.length === 2 && tmp_[1] === ""){
                    flag = true;
                }
            });

            if (!flag) {
                localStorage.removeItem('currentUser');
                alert("您没有权限访问这个页面！");
                this.router.navigate(['/login'],{ queryParams: { returnUrl: environment.defaultTabRouter } });
                return false;
            }
        }

        return flag;
    }

    isSessionCheck(): boolean {
        let result: boolean = false;
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            let user = JSON.parse(localStorage.getItem('currentUser'));
            let loginTime = user.loginTime;
            let t = Date.now() - +(new Date(loginTime));
            let aliveTime = environment.aliveTime;
            // 5sec
            if (t >= aliveTime * 1000) {
                localStorage.removeItem('currentUser');
            } else {
                // loginTime update
                user.loginTime = Date.now();
                localStorage.setItem('currentUser', JSON.stringify(user));
                result = true;
            }
        }
        return result;
    }

    checkSession(url: string) {
        if (!localStorage.getItem('currentUser')) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
            return false;
        }

        let user = JSON.parse(localStorage.getItem('currentUser'));
        let loginTime = user.loginTime;
        let t = Date.now() - +(new Date(loginTime));
        let aliveTime = environment.aliveTime;

        if (t >= aliveTime * 1000) {
            alert("会话超时，请重新登录！");
            localStorage.removeItem('currentUser');
            this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
            return false;
        }

        if (!environment.unifiedAuth) {
            return true;
        }
        
        let data = new FormData();
        data.append('username', user.userCode);
        data.append('token', user.token);
        return this.http.post<boolean>('/api/authenticate/token', data)
        .toPromise()
        .then(
            result => {
                if (!result) {
                    console.log("token验证失败，请重新登录！");

                    this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
                } else {
                    user.loginTime = Date.now();
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return result;
            }
        );
    }
}