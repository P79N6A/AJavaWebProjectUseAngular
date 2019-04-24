import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionplanComponent } from './productionplan/productionplan.component';
import { ProductionplancellComponent } from './productionplancell/productionplancell.component';
import { CfmoveplanComponent } from './cfmoveplan/cfmoveplan.component';
import { ModelplanComponent } from './modelplan/modelplan.component';
import { ArbankcellinplanComponent } from './arbankcellinplan/arbankcellinplan.component';


const routes: Routes = [

  {
    path:'productionplan',
    component : ProductionplanComponent,
    data:{
      tabLabel:'生产计划导入',
      destroy:false
    }
  },

  {
    path:'productionplancell',
    component : ProductionplancellComponent,
    data:{
      tabLabel:'cell生产计划导入',
      destroy:false
    }
  },

  {
    path:'cfmoveplan',
    component : CfmoveplanComponent,
    data:{
      tabLabel:'CF Move 生产计划导入',
      destroy:false
    }
  },
  {
    path: 'arbankclin',
    component: ArbankcellinplanComponent,
    data: {
      tabLabel: 'Array CellIn 生产计划导入',
      destroy: false
    }
  },

  {
    path:'modelplan',
    component : ModelplanComponent,
    data:{
      tabLabel:'Module 生产计划导入',
      destroy:false
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataimportRoutingModule { }