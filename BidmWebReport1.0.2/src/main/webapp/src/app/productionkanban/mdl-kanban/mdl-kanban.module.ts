import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdlKanbanRoutingModule } from './mdl-kanban-routing.module';
import { RatioAComponent } from './ratio-a/ratio-a.component';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { DropdownModule } from 'primeng/primeng';
import { Top5Component } from './top5/top5.component';

@NgModule({
  imports: [
    CommonModule,
    MdlKanbanRoutingModule,
    FormsModule,
    NgxEchartsModule,
    DropdownModule
  ],
  declarations: [RatioAComponent, Top5Component]
})
export class MdlKanbanModule { }
