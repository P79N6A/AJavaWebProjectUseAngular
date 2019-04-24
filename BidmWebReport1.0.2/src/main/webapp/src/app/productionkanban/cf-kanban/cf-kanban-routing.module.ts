import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProDataComponent } from './pro-data/pro-data.component';

const routes: Routes = [
  {
    path: 'cfpro',
    component: ProDataComponent,
    data: {
      tabLabel: 'CF生产数据',
      destroy: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CfKanbanRoutingModule { }
