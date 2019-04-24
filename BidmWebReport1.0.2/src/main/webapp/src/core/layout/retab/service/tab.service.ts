import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TabItem } from '../tabItem';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { PageReuseStrategy } from 'app/common/strategy/page-reuse-strategy';


@Injectable()
export class TabService {

    private itemsSource = new Subject<TabItem[]>();
    private tabs:TabItem[] = new Array;
    private menuList: any[];
    itemsHandler = this.itemsSource.asObservable();
    constructor(private breadcrumbService: BreadcrumbService
        //,private router: Router
        ) {}
    
    setMenuList(m:any[]){
        this.menuList = m;
    }

    init(bread_delete:boolean){
        this.tabs = [];
        if(bread_delete){
            console.log("TabService bread_delete : ",bread_delete);
            this.breadcrumbService.setItems([]);
        }
        this.itemsSource.next(this.tabs);
    }
    setItems(label: string,url:string) {
        // console.log('setItems2 label {} ', label);
        // console.log('setItems2 menuList {} ', this.menuList);
        // console.log('this.router.url : ',this.router.url);
        
        let duplication:boolean = false;
        for(let i=0;i<this.tabs.length;i++){
            let _tmpItem:TabItem =  this.tabs[i];
            if(_tmpItem.orgLabel === label){
                duplication = true;
                break;
            }
        }
        //console.log('setItems2 duplication {} ', duplication);
        if(!duplication){
            for(let i=0;i<this.tabs.length;i++){
                let _tmpItem:TabItem =  this.tabs[i];
                    _tmpItem.selected = false;
                this.tabs[i] = _tmpItem;
            }
            let newItem:TabItem = new TabItem();
            // newItem.label = label;
            newItem.label = this.getLabel(label);
            newItem.orgLabel = label;
            newItem.breadcrumb = this.breadcrumbService.getItem();
            newItem.url = url;//this.router.url;
            newItem.selected = true;
            this.tabs.push(newItem)
        }else{
            for(let i=0;i<this.tabs.length;i++){
                let _tmpItem:TabItem =  this.tabs[i];
                if(_tmpItem.orgLabel === label){
                    _tmpItem.selected = true;
                }else{
                    _tmpItem.selected = false;
                }
                this.tabs[i] = _tmpItem;
            }
        }
        this.itemsSource.next(this.tabs);
    }
    getLabel(label:string):string{
        let len = label.length;
        if(len > 20){
            return label.substring(0,20)+'..'
        }
        return label;
    }
    
    getItems(){
        return this.tabs;
    }
    deleteItem(index:number){
        let removeTab = this.tabs.splice(index,1);
        console.log("deleteItem removeTab is : ",removeTab);
        
        if(removeTab[0].selected){
            let _tmpItem:TabItem =  this.tabs[0];
            _tmpItem.selected = true;
            this.tabs[0] = _tmpItem;
        }
        //console.log('deleteItem after this.tabs is {} ', this.tabs);
        this.itemsSource.next(this.tabs);
        setTimeout(() => {
            PageReuseStrategy.deleteRouteSnapshot(removeTab[0].url);
        },100);
        
    }
    deleteItemOther(index:number){
        let selectTab = this.tabs[index];
        console.log("selectTab  is : ",selectTab);
        let cnt = this.tabs.length-1;
        for(let i=this.tabs.length-1; i >= 0;i--){
            if(i != index){
                PageReuseStrategy.deleteRouteSnapshot(this.tabs[i].url);
                
            }
        }
       
        this.tabs.splice(0,this.tabs.length);
        this.tabs.push(selectTab);
        this.itemsSource.next(this.tabs);
        // setTimeout(() => {
        //     PageReuseStrategy.deleteOtherRouteSnapshot(selectTab.url,cnt);
        // },100);
    }
    deleteItemAll(){
        this.tabs.splice(0,this.tabs.length);
        this.itemsSource.next(this.tabs);
    }
}
