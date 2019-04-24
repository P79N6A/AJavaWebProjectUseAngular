import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';


const routes: Routes = [
  {
    path : 'type1',
    component : Type1Component,
    data: {
        tabLabel: 'report-type1'
    }
  },
  {
    path : 'type2',
    component : Type2Component,
    data: {
        tabLabel: 'report-type2'
    }
  },
  {
    path : 'type3',
    component : Type3Component,
    data: {
        tabLabel: 'report-type3'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportUiRoutingModule { }
