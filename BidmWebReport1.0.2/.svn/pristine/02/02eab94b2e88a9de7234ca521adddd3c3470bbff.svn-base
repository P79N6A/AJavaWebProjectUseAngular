import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

   //1.生管的 第一个
   {
    path: 'displan_sg',
    loadChildren: 'app/toumingdisplan/displan-sg/displan-sg.module#DisplanSgModule'
  },
  //2.array 第二个
  {
    path: 'displan_array',
    loadChildren: 'app/toumingdisplan/displan-array/displan-array.module#DisplanArrayModule'
  },
  //3.cf 第三个
  {
    path: 'displan_cf',
    loadChildren: 'app/toumingdisplan/displan-cf/displan-cf.module#DisplanCfModule'
  },

  //4.cell 第四个
  {
    path: 'displan_cell',
    loadChildren: 'app/toumingdisplan/displan-cell/displan-cell.module#DisplanCellModule'
  },

  //5.module 第五个
  {
    path: 'displan_module',
    loadChildren: 'app/toumingdisplan/displan-module/displan-module.module#DisplanModuleModule'
  },
  


  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToumingdisplanRoutingModule { }
