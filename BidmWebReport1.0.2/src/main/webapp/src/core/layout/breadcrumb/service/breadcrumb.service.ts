import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'primeng/primeng';

@Injectable()
export class BreadcrumbService {

    private itemsSource = new Subject<MenuItem[]>();

    itemsHandler = this.itemsSource.asObservable();
    
    private breadcrumbItem:MenuItem[];
    setItems(items: MenuItem[]) {
        this.breadcrumbItem = items;
        this.itemsSource.next(items);
    }
    getItem(){
        return this.breadcrumbItem;
    }
}
