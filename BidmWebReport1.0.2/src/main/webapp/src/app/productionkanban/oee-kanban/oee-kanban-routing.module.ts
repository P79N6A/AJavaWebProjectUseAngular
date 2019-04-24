import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanAeInfoComponent } from './dan-ae-info/dan-ae-info.component';

const routes: Routes = [
  {
    path: 'aeinfo',
    component: DanAeInfoComponent,
    data: {
      tabLabel: 'OEE单分厂AE信息',
      destroy: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeeKanbanRoutingModule { }
