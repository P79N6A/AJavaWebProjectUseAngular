import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { B6DashboardComponent } from './pmkanban/b6-dashboard/b6-dashboard.component';
import { B8DashboardComponent } from './pmkanban/b8-dashboard/b8-dashboard.component';
import { B4CstComponent } from './cannedFReport/b4-cst/b4-cst.component';
import { ModuleWatchboardComponent } from 'app/outstandingcase/pmkanban/module-watchboard/module-watchboard.component';
import { B4WipComponent } from './transparent-display/b4-wip/b4-wip.component';
import { InspectionComponent } from 'app/outstandingcase/transparent-display/inspection/inspection.component';
import { B1PecvdComponent } from './transparent-display/b1-pecvd/b1-pecvd.component';
import { B2DailyComponent } from 'app/outstandingcase/cannedFReport/b2-daily/b2-daily.component';
import { B3ArrayDashboardComponent } from './pmkanban/b3-array-dashboard/b3-array-dashboard.component';
import { B1OemAgingComponent } from './cannedFReport/b1-oem-aging/b1-oem-aging.component';
import { Tm1kanbanComponent } from './pmkanban/tm1kanban/tm1kanban.component';

const routes: Routes = [
  {
    path: 'pmkanban/module-watchboard',
    component: ModuleWatchboardComponent,
    data: {
      tabLabel: 'B3 MDL分厂看板',
      destroy:true
    }
  },
  {
    path: 'pmkanban/b6-dashboard',
    component: B6DashboardComponent,
    data: {
      tabLabel: 'B6-生管看板',
      destroy:true
    }
  },
  {
    path: 'pmkanban/B8-dashboard',
    component: B8DashboardComponent,
    data: {
      tabLabel: 'B8-生管看板',
      destroy:true
    }
  },
  {
    path: 'pmkanban/b3-array-dashboard',
    component: B3ArrayDashboardComponent,
    data: {
      tabLabel: 'B3-Array生产看板',
      destroy:true
  }
},
{
  path: 'pmkanban/tm1kanban',
  component: Tm1kanbanComponent,
  data: {
    tabLabel: 'TM1实时生成看板',
    destroy:true
  }
},
  {
    path: 'cannedFReport/b4-cst',
    component: B4CstComponent,
    data: {
      tabLabel: 'B4-CST信息管理',
      destroy:true
    }
  },
  {
    path: 'cannedFReport/b2-daily',
    component: B2DailyComponent,
    data: {
      tabLabel: 'B2-生管日报',
      destroy:true
    }
  },
  {
    path: 'cannedFReport/b1-oem-aging',
    component: B1OemAgingComponent,
    data: {
      tabLabel: 'B1-OEM-Aging',
      destroy:true
  }
  },
  {
    path: 'transparent-display/b1-pecvd',
    component: B1PecvdComponent,
    data: {
      tabLabel: 'B1-PECVD',
      destroy:true
    }
  }
  ,
  {
    path: 'transparent-display/b4-wip',
    component: B4WipComponent,
    data: {
      tabLabel: 'B4-WIP',
      destroy:true
    }
  },
  {
    path: 'transparent-display/inspection',
    component: InspectionComponent,
    data: {
      tabLabel: 'B3 MOD检查岗透明化',
      destroy:true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutstandingcaseRoutingModule { }
