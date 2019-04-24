import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplanModuleRoutingModule } from './displan-module-routing.module';
import { FormsModule } from '@angular/forms';
import { DropdownModule, InputTextModule, MultiSelectModule, CalendarModule, InputSwitchModule, FileUploadModule, PaginatorModule, TabViewModule, CheckboxModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { GrowlModule } from 'primeng/growl';
import { M1m2wipComponent } from './m1m2wip/m1m2wip.component';
import { M1m2workwipComponent } from './m1m2workwip/m1m2workwip.component';

@NgModule({
  imports: [
    CommonModule,
    DisplanModuleRoutingModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    PanelModule,
    TableModule,
    InputTextModule,
    NgxEchartsModule,
    MultiSelectModule,
    MultiSelectModule, // 这个是多选下拉框的模块
    CalendarModule, // 这个是写日期的
    GrowlModule, // 消息弹窗
    InputSwitchModule, // Module/S2 WIP 中用到的切换的按钮
    FileUploadModule, // 文件导入的模块
    PaginatorModule, // table 的翻页 模块
    TabViewModule, // 切换标签的模块
    CheckboxModule // 这个是多选按钮组
  ],
  declarations: [ M1m2wipComponent, M1m2workwipComponent]
})
export class DisplanModuleModule { }
