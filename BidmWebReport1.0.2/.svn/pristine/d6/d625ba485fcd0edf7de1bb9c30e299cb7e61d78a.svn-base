import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecTableComponent } from './spec-table/spec-table.component';
import { SpecImportComponent } from './spec-import/spec-import.component';

const routes: Routes = [
  {
    path:'specTable',
    component:SpecTableComponent,
    data:{
      tabLabel:'监控'
    }
  },
  {
    path:'specImport',
    component:SpecImportComponent,
    data:{
      tabLabel:'导入spec'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecRoutingModule { }
