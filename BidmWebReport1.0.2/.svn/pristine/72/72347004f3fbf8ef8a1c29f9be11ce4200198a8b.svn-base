import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
import { UserLoginInfo } from '../log/model/UserLoginInfo';
 
@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient
    ) { }
 
    login(username: string, password: string) {
        if (!environment.unifiedAuth) {
            return this.http.get<any>('assets/demo/user.default.json').map(
                user => {
                    // console.log(user);
                    user.loginTime = new Date().getTime();
                    //清除上次登陆的缓存
                    localStorage.removeItem('currentUser');
                    localStorage.setItem('currentUser', JSON.stringify(user));   
                    let result = {
                        result: 'true',
                        user: user
                    };
                    return result;
                }
            );
        }

        let data = new FormData();
        data.append('username', username);
        data.append('password', password);
 
        return this.http.post<any>(environment.apiPath+'/authenticate', 
            /*{ username: username, password: password }*/
            data)
            .map(result => {
               //console.log(result);
                if (result.result === "true") {
                  
                    localStorage.removeItem('currentUser');
                    localStorage.setItem('currentUser', JSON.stringify(result.user));
                     this.saveUserLogin(username);
                }

                return result;
                // console.log('/api/authenticate result user : ',user);
                // login successful if there's a jwt token in the response
                // if (user && user.token) {
                //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                // }
 
                // return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        if(environment.unifiedAuth){
            this.saveUserLogout();
        }
        localStorage.removeItem('currentUser');
        window.location.href = '/';
    }

    //login log 这个方法是用来写入数据库中保存用户登录记录的方法
    saveUserLogin(username){
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        let userLoginInfo = new UserLoginInfo();
        userLoginInfo.userAccount = username;
        userLoginInfo.token = currentUser.token;
        userLoginInfo.client = this.getBrowser();
        userLoginInfo.loginTime = new Date(currentUser.loginTime);

        this.http.post(environment.apiPath+'/userlog/userlogin/insert',userLoginInfo).subscribe((res) => {});
    }
    //logout log
    saveUserLogout(){
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        let userLoginInfo = new UserLoginInfo();
        userLoginInfo.userAccount = currentUser.userCode;
        userLoginInfo.loginTime = new Date(currentUser.loginTime);
        userLoginInfo.token = currentUser.token;
        this.http.put(environment.apiPath+'/userlog/userlogout/update',userLoginInfo).subscribe((res) => {});
    }
    //
    getBrowser() {
        var is360 = false;
        var isIE = false;
        var isFirefox = false;
        var isChrome = false;
        var isEdge = false;
        var broName = 'Runing';
        var str = '';
        var strStart = 0;
        var strStop = 0;
        var arr = new Array();
        var temp = '';
        
        var userAgent = window.navigator.userAgent; //包含以下属性中所有或一部分的字符串：appCodeName,appName,appVersion,language,platform
        
        /*alert(userAgent);*/
        
        //FireFox
        if (userAgent.indexOf('Firefox') != -1) {
        var isFireFox = true;
        /*broName = 'FireFox浏览器';*/
        strStart = userAgent.indexOf('Firefox');
        temp = userAgent.substring(strStart);
        broName = temp.replace('/', '版本号')
        
        }
        
        //Edge
        if (userAgent.indexOf('Edge') != -1) {
        isEdge = true;
        /*broName = 'Edge浏览器';*/
        strStart = userAgent.indexOf('Edge');
        temp = userAgent.substring(strStart);
        broName = temp.replace('/', '版本号');
        }
        
        //IE浏览器
        if (userAgent.indexOf('NET') != -1 && userAgent.indexOf("rv") != -1) {
        isIE = true;
        /*broName = 'IE浏览器'; */
        strStart = userAgent.indexOf('rv');
        strStop = userAgent.indexOf(')');
        temp = userAgent.substring(strStart, strStop);
        broName = temp.replace('rv', 'IE').replace(':', '版本号');
        }
        
        //360极速模式可以区分360安全浏览器和360极速浏览器
        if (userAgent.indexOf('WOW') != -1 && userAgent.indexOf("NET") < 0 && userAgent.indexOf("Firefox") < 0) {
        if(navigator.javaEnabled()){
        is360 = true;
        broName = '360安全浏览器-极速模式';
        }else{
        is360 = true;
        broName = '360极速浏览器-极速模式';
        } 
        }
        
        //360兼容
        if (userAgent.indexOf('WOW') != -1 && userAgent.indexOf("NET") != -1 && userAgent.indexOf("MSIE") != -1 && userAgent.indexOf("rv") < 0) {
        is360 = true;
        broName = '360兼容模式';
        }
        
        //Chrome浏览器
        if (userAgent.indexOf('WOW') < 0 && userAgent.indexOf("Edge") < 0) {
        isChrome = true;
        /*broName = 'Chrome浏览器';*/
        strStart = userAgent.indexOf('Chrome');
        strStop = userAgent.indexOf(' Safari');
        temp = userAgent.substring(strStart, strStop);
        broName = temp.replace('/', '版本号');
        
        }
        
        return broName;
        }
}