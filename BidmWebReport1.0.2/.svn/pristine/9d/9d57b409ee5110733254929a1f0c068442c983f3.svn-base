import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';

const routes: Routes = [
  {
    path: 'type1',
    component: Type1Component,
    data: {
        tabLabel: 'menu.type1',
        destroy: true
    }
  },
  {
    path: 'type2',
    component: Type2Component,
    data: {
        tabLabel: 'type2',
        destroy: true
    }
  },
  {
    path: 'type3',
    component: Type3Component,
    data: {
        tabLabel: 'type3',
        destroy: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesUiRoutingModule { }
