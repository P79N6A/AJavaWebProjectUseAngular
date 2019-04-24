import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrayKanbanRoutingModule } from './array-kanban-routing.module';
import { ArrayjiadongkanbanComponent } from './arrayjiadongkanban/arrayjiadongkanban.component';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { GrowlModule } from 'primeng/growl';
import { DropdownModule, CalendarModule, RadioButtonModule, PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProDataZaohuiComponent } from './pro-data-zaohui/pro-data-zaohui.component';
import { ProDataShishiComponent } from './pro-data-shishi/pro-data-shishi.component';


@NgModule({
  imports: [
    CommonModule,
    ArrayKanbanRoutingModule,
    FormsModule,
    NgxEchartsModule,
    GrowlModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    RadioButtonModule,
    PanelModule
  ],
  declarations: [ArrayjiadongkanbanComponent, ProDataZaohuiComponent, ProDataShishiComponent]
})
export class ArrayKanbanModule { }
