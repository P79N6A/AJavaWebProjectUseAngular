import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeeKanbanRoutingModule } from './oee-kanban-routing.module';
import { DanAeInfoComponent } from './dan-ae-info/dan-ae-info.component';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { GrowlModule } from 'primeng/growl';
import { DropdownModule, CalendarModule, RadioButtonModule, InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
    OeeKanbanRoutingModule,
    FormsModule,
    NgxEchartsModule,
    GrowlModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    RadioButtonModule,
    PanelModule
  ],
  declarations: [DanAeInfoComponent]
})
export class OeeKanbanModule { }
