import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArraywipkanbanShishiComponent } from './arraywipkanban-shishi/arraywipkanban-shishi.component';
import { BankcellinComponent } from './bankcellin/bankcellin.component';
import { ArraymovegundongComponent } from './arraymovegundong/arraymovegundong.component';
import { ArraymoveshishiComponent } from './arraymoveshishi/arraymoveshishi.component';

const routes: Routes = [
  {
    path: 'arwipkbss',
    component: ArraywipkanbanShishiComponent,
    data: {
      tabLabel: 'ArrayWip看板(实时)',
      destroy: false
    }
  },
  {
    path: 'bankclin',
    component: BankcellinComponent,
    data: {
      tabLabel: 'Array Bank&Cell In',
      destroy: false
    }
  },
  {
    path: 'armovescroll',
    component: ArraymovegundongComponent,
    data: {
      tabLabel: 'Array Move 滚动看板',
      destroy: false
    }
  },
  {
    path: 'armovess',
    component: ArraymoveshishiComponent,
    data: {
      tabLabel: 'Array Move 实时看板',
      destroy: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrayBaobiaoRoutingModule { }
