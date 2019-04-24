import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { MaterialComponent } from './material/material.component';
import { PrimengComponent } from './primeng/primeng.component';
const routes: Routes = [
  {
    path: 'fontawesome',
    component: FontawesomeComponent,
    data: {
        tabLabel: 'Font Awesome',
        destroy:false
    }
  },
  {
    path: 'material',
    component: MaterialComponent,
    data: {
        tabLabel: 'Material',
        destroy:false
    }
  },
  {
    path: 'primeng',
    component: PrimengComponent,
    data: {
        tabLabel: 'PrimeNG',
        destroy:false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
