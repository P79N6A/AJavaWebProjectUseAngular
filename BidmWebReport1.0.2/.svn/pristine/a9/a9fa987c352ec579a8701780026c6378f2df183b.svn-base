import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MenuclickComponent } from './menuclick/menuclick.component';
import { ReportloadComponent } from './reportload/reportload.component';
import { AnalysispageComponent } from './analysispage/analysispage.component';

const routes: Routes = [
  {
    path: 'userlogin',
    component: UserloginComponent,
    data: {
      tabLabel: 'userlogin',
      destroy:true
    }
  },
  {
    path: 'menuclick',
    component: MenuclickComponent,
    data: {
      tabLabel: 'menuclick',
      destroy:true
    }
  },
  {
    path: 'reportload',
    component: ReportloadComponent,
    data: {
      tabLabel: 'reportload',
      destroy:true
    }
  },
  {
    path: 'analysispage',
    component: AnalysispageComponent,
    data: {
      tabLabel: 'analysispage',
      destroy:true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
