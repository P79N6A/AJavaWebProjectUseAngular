import {Component, OnDestroy, Renderer, OnInit, NgZone, HostListener} from '@angular/core';
import { Message } from 'primeng/api';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { TabService } from 'core/layout/retab/service/tab.service';
import { Router } from '@angular/router';
import { FullscreenService } from './common/service/fullscreen.service';

@Component({
  //selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

    menuClick: boolean;

    menuButtonClick: boolean;

    topbarMenuButtonClick: boolean;

    topbarMenuClick: boolean;

    topbarMenuActive: boolean;

    activeTopbarItem: Element;

    layoutMode = 'overlay';

    sidebarActive: boolean;

    mobileMenuActive: boolean;

    darkMenu: boolean = true;

    isRTL: boolean;

    rippleInitListener: any;

    rippleMouseDownListener: any;

    menuHoverActive: boolean;

    resetMenu: boolean;

    notifyMsgs: Message[];
    headerSideMenuFlag:boolean = false;

    tabLayout:boolean = false;

    loading: boolean = false;

    receiveNotify(msg) {
        this.notifyMsgs = [];
        const formatMsg = {
            severity: msg.level,
            summary: msg.title,
            detail: msg.content
        }
        this.notifyMsgs.push(formatMsg);
    }

    clearNotify() {
        this.notifyMsgs = [];
    }

    constructor(
        public renderer: Renderer, 
        public zone: NgZone, 
        public translate: TranslateService,
        public tService: TabService,
        private router: Router,
        private fullscreen: FullscreenService
    ) {
        translate.setDefaultLang('en');
        translate.use(localStorage.getItem('language'));

        window.localStorage.setItem('echartTheme', environment.echartTheme);

        let _layoutMode = window.localStorage.getItem('projectLayoutMode');
        //console.log('_layoutMode : ',_layoutMode);
        if(_layoutMode !=null)this.layoutMode = _layoutMode;

        let _darkMenu = window.localStorage.getItem('projectDarkMenu');
        if(_darkMenu !=null){
          if(_darkMenu == 'true'){
              this.darkMenu=true;  
          }else{
            this.darkMenu=false; 
          }
        }
        // let _isRTL = window.localStorage.getItem('projectIsRTL');
        // if(_isRTL !=null){
        //     if(_isRTL == 'true'){
        //         this.isRTL=true;  
        //     }else{
        //       this.isRTL=false; 
        //     }
        //   }
        //   let _playTheme = window.localStorage.getItem('projectTheme');
        //   if(_playTheme !=null)this.changeTheme(_playTheme);

        //   let _playLayout = window.localStorage.getItem('projectLayout');
        //   if(_playLayout !=null)this.changeLayout(_playLayout);
    }
    changeTheme(theme) {
        //console.log('call!! changeTheme app.component ~~~~~~~~~~~~~~')
        const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        window.localStorage.setItem('projectTheme', theme);
    }

    changeLayout(theme) {
        //console.log('call!! changeLayout app.component ~~~~~~~~~~~~~~')
        const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
        window.localStorage.setItem('projectLayout', theme);
    }

    ngOnInit() {
        this.zone.runOutsideAngular(() => {this.bindRipple(); });
        // this.router.navigate(['/guide']);
        let tabSize = this.tService.getItems().length;
        if (tabSize == 0) {
            this.router.navigateByUrl(environment.defaultTabRouter);
        }
    }

    bindRipple() {
        this.rippleInitListener = this.init.bind(this);
        document.addEventListener('DOMContentLoaded', this.rippleInitListener);
    }

    init() {
        this.rippleMouseDownListener = this.rippleMouseDown.bind(this);
        document.addEventListener('mousedown', this.rippleMouseDownListener, false);
    }

    rippleMouseDown(e) {
        for (let target = e.target; target && target !== this; target = target['parentNode']) {
            if (!this.isVisible(target)) {
              continue;
            }

            // Element.matches() -> https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
            if (this.selectorMatches(target, '.ripplelink, .ui-button')) {
              const element = target;
              this.rippleEffect(element, e);
              break;
            }
        }
    }

    selectorMatches(el, selector) {
        const p = Element.prototype;
        const f = p['matches'] || p['webkitMatchesSelector'] || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(el, selector);
    }

    isVisible(el) {
        return !!(el.offsetWidth || el.offsetHeight);
    }

    rippleEffect(element, e) {
        if (element.querySelector('.ink') === null) {
            const inkEl = document.createElement('span');
            this.addClass(inkEl, 'ink');

            if (this.hasClass(element, 'ripplelink') && element.querySelector('span')) {
              element.querySelector('span').insertAdjacentHTML('afterend', '<span class=\'ink\'></span>');
            } else {
              element.appendChild(inkEl);
            }
        }

        const ink = element.querySelector('.ink');
        this.removeClass(ink, 'ripple-animate');

        if (!ink.offsetHeight && !ink.offsetWidth) {
            const d = Math.max(element.offsetWidth, element.offsetHeight);
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }

        const x = e.pageX - this.getOffset(element).left - (ink.offsetWidth / 2);
        const y = e.pageY - this.getOffset(element).top - (ink.offsetHeight / 2);

        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        ink.style.pointerEvents = 'none';
        this.addClass(ink, 'ripple-animate');
    }

    hasClass(element, className) {
        if (element.classList) {
          return element.classList.contains(className);
        } else {
          return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    }

    addClass(element, className) {
        if (element.classList) {
          element.classList.add(className);
        } else {
            element.className += ' ' + className;
        }
    }

    removeClass(element, className) {
        if (element.classList) {
          element.classList.remove(className);
        } else {
          element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    getOffset(el) {
        const rect = el.getBoundingClientRect();

        return {
          top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
        };
    }

    unbindRipple() {
        if (this.rippleInitListener) {
            document.removeEventListener('DOMContentLoaded', this.rippleInitListener);
        }
        if (this.rippleMouseDownListener) {
            document.removeEventListener('mousedown', this.rippleMouseDownListener);
        }
    }

    ngOnDestroy() {
        this.unbindRipple();
    }

    onWrapperClick() {
        if (!this.menuClick && !this.menuButtonClick) {
            this.mobileMenuActive = false;
        }

        if (!this.topbarMenuClick && !this.topbarMenuButtonClick) {
            this.topbarMenuActive = false;
            this.activeTopbarItem = null;
        }

        if (!this.menuClick) {
            if (this.isHorizontal() || this.isOverlay()) {
                this.resetMenu = true;
            }

            this.menuHoverActive = false;
        }


        this.menuClick = false;
        this.menuButtonClick = false;
        this.topbarMenuClick = false;
        this.topbarMenuButtonClick = false;
    }

    onMenuButtonClick(event: Event) {
        this.menuButtonClick = true;

        if (this.isMobile()) {
            this.mobileMenuActive = !this.mobileMenuActive;
        }

        event.preventDefault();
    }

    onTopbarMobileMenuButtonClick(event: Event) {
        this.topbarMenuButtonClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        event.preventDefault();
    }

    // onTopbarRootItemClick(event: Event, item: Element) {
    //     if (this.activeTopbarItem === item) {
    //         this.activeTopbarItem = null; } else {
    //         this.activeTopbarItem = item; }

    //     event.preventDefault();
    // }
    headerSideMenuClick(){
        this.headerSideMenuFlag = true;
    }
    onTopbarRootItemClick(event: Event, item: Element) {
        if(this.activeTopbarItem == null){
            this.activeTopbarItem = item;
        }else{
            if(!this.headerSideMenuFlag)this.activeTopbarItem = null;
            this.headerSideMenuFlag = false;
        }
        
        // if (this.activeTopbarItem != item) {
        //     this.activeTopbarItem = null;
        // } else {
        //     this.activeTopbarItem = item;
        // }
        
        //event stop!
        //event.preventDefault();
    }
    onTestClose(){
        
        this.activeTopbarItem = null;
        event.preventDefault();
        // console.log('onTestClose this.activeTopbarItem',this.activeTopbarItem);
    }
    onTopbarMenuClick(event: Event) {
        this.topbarMenuClick = true;
    }

    onSidebarClick(event: Event) {
        this.menuClick = true;
        this.resetMenu = false;
    }

    onToggleMenuClick(event: Event) {
        this.layoutMode = this.layoutMode !== 'static' ? 'static' : 'overlay';
        event.preventDefault();
    }

    isMobile() {
        return window.innerWidth <= 1024;
    }

    isTablet() {
        const width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    isHorizontal() {
        return this.layoutMode === 'horizontal';
    }

    isOverlay() {
        return this.layoutMode === 'overlay';
    }
    // getPaddingTop() {
    //     let topbar = document.getElementsByClassName("layout-topbar");
    //     let topbarWidth = topbar[0].clientWidth;
    //     if(this.tabLayout =  environment.tabLayout){
    //         if (this.isHorizontal()) {
    //             if(topbarWidth < 1008){
    //                 return '96px';
    //             }
    //             return '140px';
    //         } else{
    //             return '96px';
    //         }
    //     }else{
    //         if (this.isHorizontal()) {
    //             if(topbarWidth < 1008){
    //                 return '48px';
    //             }
    //             return '92px';
    //         } else{
    //             return '48px';
    //         }
    //     }

    // }

    getContentPadding() {
        let topbar = document.getElementsByClassName("layout-topbar");
        let topbarWidth = topbar[0].clientWidth;

        let top = "64px";
        let right = "17px";
        let bottom = "24px";
        let left = "17px";

        if (!this.fullscreen.isFull) {
            top = "96px";
            right = "17px";
            bottom = "24px";
            left = "17px";
        } else {
            top = right = bottom = left = "0px";
        }

        return top + " " + right + " " + bottom + " " + left;
    }
    // @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    //     console.log($event);
        
        
    //   } 

    @HostListener('window:resize')
    _resize() {
        if (!this.fullscreen.getFullStatus()) {
            this.fullscreen.isFull = false;
        }
    }
    
}
