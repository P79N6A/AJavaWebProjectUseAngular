import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GskanbanComponent } from './gskanban/gskanban.component';


const routes: Routes = [
  {
    path: 'gskanban',
    component: GskanbanComponent,
    data: {
      tabLabel: '公司看板',
      destroy: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SgKanbanRoutingModule { }
