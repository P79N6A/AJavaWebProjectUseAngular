import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WipMoveProcessinfoComponent } from './wip-move-processinfo/wip-move-processinfo.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { SortbankinfoComponent } from './sortbankinfo/sortbankinfo.component';
import { PanelbankinfoComponent } from './panelbankinfo/panelbankinfo.component';



const routes: Routes = [

  //1.WIP&Mov工序信息维护表		
  {
    path:'wipmove',
    component:WipMoveProcessinfoComponent,
    data:{
      tabLabel:'WIP&Mov工序信息维护表',
      destroy:false
    }
  },
  //2.产品信息维护
  {
    path:'product',
    component:ProductinfoComponent,
    data:{
      tabLabel:'产品信息维护表',
      destroy:false
    }
  },
  //3.sort bank 型号对应关系表
  {
    path:'sortbank',
    component:SortbankinfoComponent,
    data:{
      tabLabel:'Sort Bank 型号对应关系表',
      destroy:false
    }
  },

    //4.panle bank 型号对应关系表
    {
      path:'panelbank',
      component:PanelbankinfoComponent,
      data:{
        tabLabel:'Panle Bank 信息维护表',
        destroy:false
      }
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicinfoSgRoutingModule { }
