import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { M1m2wipComponent } from './m1m2wip/m1m2wip.component';
import { M1m2workwipComponent } from './m1m2workwip/m1m2workwip.component';

const routes: Routes = [
    {
    path:'m1m2wip',
    component:M1m2wipComponent,
    data:{
      tabLabel:'M1&M2 WIP 信息',
      destroy:false
    }
  },

  {
    path:'m1m2workwip',
    component:M1m2workwipComponent,
    data:{
      tabLabel:'M1&M2 WORK WIP 信息',
      destroy:false
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplanModuleRoutingModule { }
