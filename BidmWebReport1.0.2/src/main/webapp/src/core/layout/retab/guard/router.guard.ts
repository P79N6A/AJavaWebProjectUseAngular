import {CanActivate,Router} from "@angular/router";
import { Injectable, DoCheck } from '@angular/core';
import { TabService } from 'core/layout/retab/service/tab.service';
@Injectable()
export class RouterGuard implements CanActivate 
            //, DoCheck 
            {


    constructor(public tService: TabService,private router: Router){
        // console.log('RouterGuard getitem : ',this.tService.getItems());
        // console.log('RouterGuard this router url   : ',router.url);
        // console.log('RouterGuard this router router.routerState.snapshot.url   : ',router.routerState.snapshot.url);
        
        this.tService.getItems().forEach(element => {
            // console.log('RouterGuard element.url    : ',element.url );
        });
    }

    canActivate() {
      //console.log("RouterGuard run!!!!!!!!!!!",this);
      return true;
    }
    
    // ngDoCheck() {
    //    console.log('RouterGuard ngDoCheck  ');
    // }
  }