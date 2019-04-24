import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  //1.生管的 第一个
  {
    path: 'info_sg',
    loadChildren: 'app/basicinfomaintenance/basicinfo-sg/basicinfo-sg.module#BasicinfoSgModule'
  },
  //2.array 第二个
  {
    path: 'info_array',
    loadChildren: 'app/basicinfomaintenance/basicinfo-array/basicinfo-array.module#BasicinfoArrayModule'
  },
  //3.cf 第三个
  {
    path: 'info_cf',
    loadChildren: 'app/basicinfomaintenance/basicinfo-cf/basicinfo-cf.module#BasicinfoCfModule'
  },

  //4.cell 第四个
  {
    path: 'info_cell',
    loadChildren: 'app/basicinfomaintenance/basicinfo-cell/basicinfo-cell.module#BasicinfoCellModule'
  },

  //5.module 第五个
  {
    path: 'info_module',
    loadChildren: 'app/basicinfomaintenance/basicinfo-module/basicinfo-module.module#BasicinfoModuleModule'
  },

  //6.factory 第六个 这个临时不用了的，后期如果不用可以删除掉
  // {
  //   path:'info_factory',
  //   loadChildren:'app/basicinfomaintenance/basicinfo-factory/basicinfo-factory.module#BasicinfoFactoryModule'
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicinfomaintenanceRoutingModule { }
