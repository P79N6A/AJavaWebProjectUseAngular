import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToumingdisplanRoutingModule } from './toumingdisplan-routing.module';


import { FormsModule } from '@angular/forms';
import { DropdownModule, MultiSelectModule, CalendarModule, GrowlModule, InputSwitchModule, FileUploadModule, PaginatorModule, TabViewModule, CheckboxModule, InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { ApiService } from '../common/service/api/api.service';
import { ReportUiCommonService } from '../report-ui/service/report-ui-common.service';
import { PanelService } from '../boe/pages/echarts/panel.service';
import { FileUploadService } from '../boe-ui/boe-list/service/file-upload.service';
import { MessageService } from 'primeng/components/common/messageservice';





@NgModule({
  imports: [
    CommonModule,
    ToumingdisplanRoutingModule,
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
  declarations: [],
  providers: [ApiService, ReportUiCommonService,PanelService,FileUploadService,MessageService]
})
export class ToumingdisplanModule { }
