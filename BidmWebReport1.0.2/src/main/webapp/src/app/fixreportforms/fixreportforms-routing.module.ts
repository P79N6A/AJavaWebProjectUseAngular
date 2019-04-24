import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'baobiao_sg',
    loadChildren: './sg-baobiao/sg-baobiao.module#SgBaobiaoModule'
  },
  {
    path: 'baobiao_array',
    loadChildren: './array-baobiao/array-baobiao.module#ArrayBaobiaoModule'
  },
  {
    path: 'baobiao_cf',
    loadChildren: './cf-baobiao/cf-baobiao.module#CfBaobiaoModule'
  },
  {
    path: 'baobiao_cell',
    loadChildren: './cell-baobiao/cell-baobiao.module#CellBaobiaoModule'
  },
  {
    path: 'baobiao_mdl',
    loadChildren: './mdl-baobiao/mdl-baobiao.module#MdlBaobiaoModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixreportformsRoutingModule { }
