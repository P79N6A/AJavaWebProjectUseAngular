import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';
import { TabService } from 'core/layout/retab/service/tab.service';
import { ComponentRef } from '@angular/core';

export class PageReuseStrategy implements RouteReuseStrategy {

    public static handlers: { [key: string]: DetachedRouteHandle } = {};
    public static destroys:string[] = [];
    constructor(public tService: TabService){}    

    //one item delete
    public static deleteRouteSnapshot(name: string): void {
        name = name.replace(/\//g, '_');
        if (PageReuseStrategy.handlers[name]) {
            if(PageReuseStrategy.destroys.indexOf(name) != -1){
                const componentRef: ComponentRef<any> = this.handlers[name]['componentRef']
                if (componentRef) {
                    componentRef.destroy()
                }
                PageReuseStrategy.destroys.splice(PageReuseStrategy.destroys.indexOf(name),1);
            }
            delete PageReuseStrategy.handlers[name];
        }
        //console.log('PageReuseStrategy.handlers : ',PageReuseStrategy.handlers);
    }
    
    /** 表示对所有路由允许复用 如果你有路由不想利用可以加一些业务逻辑判断 */
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false;
        }
        if(this.getRouteUrl(route).includes('_boe_')) {
            return true
        }
         return false;
    }

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        PageReuseStrategy.handlers[this.getRouteUrl(route)] = handle;
         
    }

    /** 若 path 在缓存中有，则认为允许还原路由 */
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
         //if(this.getRouteUrl(route).includes('_boe_') && route.data.tabLabel != undefined) { 
         if(route.data.tabLabel != undefined) { 
             let tabLabel:string = route.data.tabLabel+'';
             if(route.data.destroy && PageReuseStrategy.destroys.indexOf(this.getRouteUrl(route)) == -1){
                PageReuseStrategy.destroys.push(this.getRouteUrl(route));
            }
            this.setTabItem(tabLabel,route);
        }
        return !!PageReuseStrategy.handlers[this.getRouteUrl(route)];
        
    }

    /** 从缓存中获取快照，若无则返回 null */
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig) {
            return null;
        }
        if (route.routeConfig.loadChildren) return null;
        return PageReuseStrategy.handlers[this.getRouteUrl(route)];
    }

    /** 进入路由触发，判断是否同一路由 */
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

    private getRouteUrl(route: ActivatedRouteSnapshot) {
        return route['_routerState'].url.replace(/\//g, '_')
    }

    private setTabItem(label:string,route: ActivatedRouteSnapshot){
        let url = route['_routerState'].url;
        this.tService.setItems(label,url);
    }
}