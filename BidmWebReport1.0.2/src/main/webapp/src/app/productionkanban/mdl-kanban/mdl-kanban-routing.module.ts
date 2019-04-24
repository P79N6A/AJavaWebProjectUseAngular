import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatioAComponent } from './ratio-a/ratio-a.component';
import { Top5Component } from './top5/top5.component';

const routes: Routes = [
  {
    path: 'ratioA',
    component: RatioAComponent,
    data: {
      tabLabel: 'A级率看板',
      destroy: false
    }
  },
  {
    path: 'top5',
    component: Top5Component,
    data: {
      tabLabel: '不良Top5',
      destroy: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdlKanbanRoutingModule { }
