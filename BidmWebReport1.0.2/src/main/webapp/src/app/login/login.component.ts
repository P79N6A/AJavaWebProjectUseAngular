import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
//import { AlertService,  } from '../_services/index';
import {  AuthenticationService } from '../_services/authentication.service'
import { TranslateService } from '@ngx-translate/core';
// import {InputTextModule} from 'primeng/inputtext';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: [
        './login.component.css'
    ],
    encapsulation: ViewEncapsulation.None
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    languageList: any;
    selectLang: string = 'zh';

    hint: string;
    hintVisible: boolean = false;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private translate: TranslateService,
        //private alertService: AlertService
    ) { 
        this.selectLang = window.localStorage.getItem('language') || 'zh';
        translate.setDefaultLang('en');
        translate.use(this.selectLang);
    }
 
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; // 跳转的地址
       // console.log(this.returnUrl); // /boe/admin/home

        this.languageList = [
            {label: '中文（简体）', value: 'zh'},
            {label: 'English', value: 'en'}
        ];
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.loading = false;
                    window.localStorage.setItem('language', this.selectLang);
                    if (data.result === "true") {
                        this.router.navigate([this.returnUrl]);  // 这里是路由的跳转操作
                        
                    } else {
                        this.hint = data.message;
                        this.hintVisible = true;
                    }
                    // this.router.navigate([this.returnUrl]);
                },
                error => {
                    // this.alertService.error(error);
                    console.error(error);
                    this.loading = false;
                });
    }

    langChanged() {
        // console.log(this.selectLang);
        this.translate.use(this.selectLang);
    }
}