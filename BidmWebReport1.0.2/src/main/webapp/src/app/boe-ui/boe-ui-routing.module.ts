import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoeListComponent } from './boe-list/boe-list.component';
import { BoeGridComponent } from './boe-grid/boe-grid.component';
import { BoeChartComponent } from './boe-chart/boe-chart.component';
import { BoeDashboardComponent } from './boe-dashboard/boe-dashboard.component';
import { Type5Component } from 'app/boe-ui/type5/type5.component';
import { Type4Component } from 'app/boe-ui/type4/type4.component';
import { Type6Component } from 'app/boe-ui/type6/type6.component';



const routes: Routes = [
  {
    path: 'boe-list',
    component: BoeListComponent,
    data: {
        tabLabel: 'menu.list'
    }
  },
  {
    path: 'boe-grid',
    component: BoeGridComponent,
    data: {
        tabLabel: 'menu.grid'
    }
  },
  {
    path: 'boe-chart',
    component: BoeChartComponent,
    data: {
        tabLabel: 'menu.chart'
    }
  },
  {
    path: 'boe-dashboard',
    component: BoeDashboardComponent,
    data: {
        tabLabel: 'menu.dashboard'
    }
  },
  {
    path: 'type4',
    component: Type4Component,
    data: {
      tabLabel: 'DashBoard1'
    }
  },
  {
    path: 'type5',
    component: Type5Component,
    data: {
      tabLabel: 'DashBoard2'
    }
  },
  {
    path:'type6',
    component:Type6Component,
    data:{
      tabLabel:'BOE UI - DASHBOARD 3'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoeUiRoutingModule { }
