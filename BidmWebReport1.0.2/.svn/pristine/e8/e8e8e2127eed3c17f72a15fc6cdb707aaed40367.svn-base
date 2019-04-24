import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CfwipmoveComponent } from './cfwipmove/cfwipmove.component';
import { CfmovehourComponent } from './cfmovehour/cfmovehour.component';

const routes: Routes = [

   //1. cf WIP&Mov工序信息维护表		
   {
    path:'cfwipmove',
    component:CfwipmoveComponent,
    data:{
      tabLabel:'CF WIP MOVE',
      destroy:false
    }
  },
  //2. cf Mov hour工序信息维护表		
  {
    path:'cfmovehour',
    component:CfmovehourComponent,
    data:{
      tabLabel:'CF MOVE Hour',
      destroy:false
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicinfoCfRoutingModule { }
