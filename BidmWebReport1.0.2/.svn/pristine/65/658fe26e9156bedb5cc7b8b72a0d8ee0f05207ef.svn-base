import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabwipComponent } from './fabwip/fabwip.component';
import { FabmovementComponent } from './fabmovement/fabmovement.component';
import { CstglsComponent } from './cstgls/cstgls.component';
import { CstpnlComponent } from './cstpnl/cstpnl.component';

const routes: Routes = [
  {
    path:'panelwip',
    component:FabwipComponent,
    data:{
      tabLabel:'Panel WIP透明化',
      destroy:false
    }
  },
  {
    path:'panelmovement',
    component:FabmovementComponent,
    data:{
      tabLabel:'Panel Movement透明化',
      destroy:false
    }
  },
  {
    path:'cstgls',
    component:CstglsComponent,
    data:{
      tabLabel:'Glass CST信息实时监控表',
      destroy:false
    }
  },
  {
    path:'cstpnl',
    component:CstpnlComponent,
    data:{
      tabLabel:'Panel CST信息实时监控表',
      destroy:false
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplanSgRoutingModule { }
