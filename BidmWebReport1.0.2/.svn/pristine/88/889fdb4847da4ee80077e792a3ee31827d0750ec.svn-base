import { Test1Component } from './test1/test1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EchartsComponent } from './echarts/echarts.component';
import { DeviceComponent } from './device/device.component';
import { D3Component } from './d3/d3.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    data: {
        tabLabel: 'TEST'
    }
  },
  {
    path: 'test1',
    component: Test1Component,
    data: {
        tabLabel: 'TEST1',
        destroy: true
    }
  },
  {
    path: 'echarts',
    component: EchartsComponent,
    data: {
        tabLabel: 'Echarts Demo',
        destroy: true
    }
  },
  {
    path: 'device',
    component: DeviceComponent,
    data: {
        tabLabel: 'Device',
        destroy: true
    }
  },
  {
    path: 'd3',
    component: D3Component,
    data: {
      tabLabel: 'D3',
      destroy: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
