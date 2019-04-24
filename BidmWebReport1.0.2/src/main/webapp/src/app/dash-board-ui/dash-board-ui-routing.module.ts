import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { Type4Component } from './type4/type4.component';

const routes: Routes = [
  {
    path : 'type1',
    component : Type1Component,
    data: {
        tabLabel: 'dashboard-type1'
    }
  },
  {
    path : 'type2',
    component : Type2Component,
    data: {
        tabLabel: 'dashboard-type2'
    }
  },
  {
    path : 'type3',
    component : Type3Component,
    data: {
        tabLabel: 'dashboard-type3'
    }
  },
  {
    path : 'type4',
    component : Type4Component,
    data:{
      tabLabel: '透明化展示'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardUiRoutingModule { }
