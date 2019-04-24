import { WebsocketService } from './../../../app/boe/services/websocket.service';
import {Component, OnInit} from '@angular/core';
import {AppComponent} from 'app/app.component';
import {MenuItem} from 'primeng/primeng';
import { Router } from '@angular/router';

import {  AuthenticationService } from '../../../app/_services/authentication.service';

import * as $ from 'jquery';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {
    items: MenuItem[];
    unReadNotifyCount: number = 0;
    isBoolean: boolean = false;
    currentDate: Date = new Date();

    currentUser: string = "";

    constructor(
        public app: AppComponent,
        public socket: WebsocketService,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        const user: string = localStorage.getItem('currentUser');
        //终于找了 害人不浅啊
      //  alert(user);
        if (user) {
            const json = JSON.parse(user);
            if (json.userName) {
                this.currentUser = json.userName;
            } else if (json.userCode) {
                this.currentUser = json.userCode;
            } else {
                this.currentUser = json.username;
            }
        }
    }
    clickTest(){
        if(!this.isBoolean){
            this.app.onTestClose();
        }
        event.preventDefault();
    }
    ngOnInit() {
        this.socket.initBroadcastService(this);

        // // this.currentDate = this.formatDate("yyyy-MM-dd hh:mm:ss EEE");
        // setInterval(() => {
        //     // this.currentDate = this.formatDate("yyyy-MM-dd hh:mm:ss EEE");
        //     this.currentDate = new Date();
        // }, 1000);

        this.items = [
            {
                label: 'Menu Modes', 
                icon: 'fa fa-cog',
                items: [
                    { label: 'Static Menu', icon: 'fa fa-arrow-right', command: (event) => { this.changeLayoutMode('static') }},
                    { label: 'Overlay Menu', icon: 'fa fa-arrow-right', command: (event) => { this.changeLayoutMode('overlay') } },
                    { label: 'Horizontal Menu', icon: 'fa fa-arrow-right', command: (event) => { this.changeLayoutMode('horizontal') } },
                    { label: 'Light Menu', icon: 'fa fa-arrow-right', command: (event) => { this.changeDarkMenu(false) } },
                    { label: 'Dark Menu', icon: 'fa fa-arrow-right', command: (event) => { this.changeDarkMenu(true) } }
                ]
            },
            // {
            //     label: 'EchartsThemes', icon: 'fa fa-paint-brush',
            //     items: [
            //         { label: 'dark', icon: 'fa fa-arrow-right', command: (event) => { this.changeEchartTheme('dark'); } },
            //         { label: 'infographic', icon: 'fa fa-arrow-right', command: (event) => { this.changeEchartTheme('infographic'); } },
            //         { label: 'macarons', icon: 'fa fa-arrow-right', command: (event) => { this.changeEchartTheme('macarons'); } },
            //         { label: 'roma', icon: 'fa fa-arrow-right', command: (event) => { this.changeEchartTheme('roma'); } },
            //         { label: 'shine', icon: 'fa fa-arrow-right', command: (event) => { this.changeEchartTheme('shine'); } },
            //         { label: 'vintage', icon: 'fa fa-arrow-right', command: (event) => { this.changeEchartTheme('vintage'); } }
            //     ]
            // },
            {
                "label": "Language", icon: "fa fa-language",
                "items": [
                    { label: '中文（简体）', icon: 'fa fa-arrow-right', command: (event) => { this.changeLang('zh'); } },
                    { label: 'English', icon: 'fa fa-arrow-right', command: (event) => { this.changeLang('en'); } },
                ]
            }
        ];
    }

    addNotify(msg) {
        this.unReadNotifyCount++;
        this.app.receiveNotify(msg);
    }

    clearNotify() {
        this.unReadNotifyCount = 0;
        this.app.clearNotify();
    }
    changeLayoutMode(layoutMode){
        this.app.layoutMode = layoutMode; 
        window.localStorage.setItem('projectLayoutMode', layoutMode);
    }
    changeDarkMenu(status){
        this.app.darkMenu = status;
        window.localStorage.setItem('projectDarkMenu', status);
    }
    changeAppRTL(status){
        this.app.isRTL = status;
        window.localStorage.setItem('projectIsRTL', status);
    }
    changeTheme(theme) {
        const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        //console.log('playTheme : ',theme);
        window.localStorage.setItem('projectTheme', theme);
    }
    changeEchartTheme(theme){
        window.localStorage.setItem('echartTheme',theme);
        //reload the page
        window.location.reload();
    }
    changeLayout(theme) {
        const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
        window.localStorage.setItem('projectLayout', theme);
       // console.log('playLayout : ',theme);
    }
    logout() {
        // reset login status
        this.authenticationService.logout();
     }
    changeLang(lang) {
        this.app.translate.use(lang);
        window.localStorage.setItem('language', lang);
    }

    menuHide() {
        // this.app.sidebarActive = !this.app.sidebarActive;
        // this.app.
    }
}
