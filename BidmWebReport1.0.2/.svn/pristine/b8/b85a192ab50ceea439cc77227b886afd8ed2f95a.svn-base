import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsproductComponent } from './gsproduct/gsproduct.component';
import { FactoryproductComponent } from './factoryproduct/factoryproduct.component';
import { SortbankComponent } from './sortbank/sortbank.component';
import { PanelbankComponent } from './panelbank/panelbank.component';
import { CellwipshiptofgmsComponent } from './cellwipshiptofgms/cellwipshiptofgms.component';

const routes: Routes = [
  {
    path: 'gsproduct',
    component: GsproductComponent,
    data: {
      tabLabel: '生产监控工厂别明细',
      destroy: false
    }
  },
  {
    path: 'factorypro',
    component: FactoryproductComponent,
    data: {
      tabLabel: '生产监控Summary',
      destroy: false
    }
  },
  {
    path: 'sortbank',
    component: SortbankComponent,
    data: {
      tabLabel: 'SortBank情况信息',
      destroy: false
    }
  },
   {
    path: 'panelbank',
    component: PanelbankComponent,
    data: {
      tabLabel: 'Panel Bank',
      destroy: false
    }
  },
  {
    path:'cellwipshiptofgms',
    component:CellwipshiptofgmsComponent,
    data:{
      tabLabel:'Ship To FGMS',
      destroy:false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SgBaobiaoRoutingModule { }
