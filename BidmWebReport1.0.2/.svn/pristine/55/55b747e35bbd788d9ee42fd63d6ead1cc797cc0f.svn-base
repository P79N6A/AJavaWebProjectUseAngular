import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CfmovewipComponent } from './cfmovewip/cfmovewip.component';
import { CfmovehourComponent } from './cfmovehour/cfmovehour.component';
import { CfMoveMonthComponent } from './cf-move-month/cf-move-month.component';
import { CfwiphourComponent } from './cfwiphour/cfwiphour.component';

const routes: Routes = [
  {
    path: 'cfmovewip',
    component: CfmovewipComponent,
    data: {
      tabLabel: 'CF MOVEMENT&WIP',
      destroy: false
    }
  },
  {
    path: 'cfmovehour',
    component: CfmovehourComponent,
    data: {
      tabLabel: 'Cf Move小时段',
      destroy: false
    }
  },
  {
    path: 'movemonth',
    component: CfMoveMonthComponent,
    data: {
      tabLabel: 'Cf Move月别',
      destroy: false
    }
  },
  {
    path: 'cfwiphour',
    component: CfwiphourComponent,
    data: {
      tabLabel: 'Cf Wip小时别',
      destroy: false
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CfBaobiaoRoutingModule { }
