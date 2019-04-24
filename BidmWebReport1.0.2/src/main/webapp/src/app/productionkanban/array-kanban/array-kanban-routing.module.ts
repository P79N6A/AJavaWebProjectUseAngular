import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayjiadongkanbanComponent } from './arrayjiadongkanban/arrayjiadongkanban.component';
import { ProDataZaohuiComponent } from './pro-data-zaohui/pro-data-zaohui.component';
import { ProDataShishiComponent } from './pro-data-shishi/pro-data-shishi.component';



const routes: Routes = [

  {
    path: 'arrayjdkanban',
    component: ArrayjiadongkanbanComponent,
    data: {
      tabLabel: 'Array稼动',
      destroy: false
    }
  },
  {
    path: 'prodata_zaohui',
    component: ProDataZaohuiComponent,
    data: {
      tabLabel: 'Array生产数据(早会)',
      destroy: false
    }
  },
  {
    path: 'prodata_shishi',
    component: ProDataShishiComponent,
    data: {
      tabLabel: 'Array生产数据(实时)',
      destroy: false
    }
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrayKanbanRoutingModule { }
