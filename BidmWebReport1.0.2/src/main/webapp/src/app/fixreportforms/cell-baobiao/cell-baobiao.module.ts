import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellBaobiaoRoutingModule } from './cell-baobiao-routing.module';
import { FormsModule } from '@angular/forms';
import {
  DropdownModule, InputTextModule, SplitButtonModule, MultiSelectModule, CalendarModule,
  InputSwitchModule, FileUploadModule, PaginatorModule, TabViewModule, RadioButtonModule
} from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { NgxEchartsModule } from 'ngx-echarts';
import { GrowlModule } from 'primeng/growl';
import { ApiService } from '../../common/service/api/api.service';
import { PanelService } from '../../boe/pages/echarts/panel.service';
import { FileUploadService } from '../../boe-ui/boe-list/service/file-upload.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CellproductiondailyComponent } from './cellproductiondaily/cellproductiondaily.component';
import { ProwipdailyComponent } from './prowipdaily/prowipdaily.component';
import { PromovedailyComponent } from './promovedaily/promovedaily.component';

@NgModule({
  imports: [
    CommonModule,
    CellBaobiaoRoutingModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    PanelModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ChartModule,
    NgxEchartsModule,
    SplitButtonModule,
    MultiSelectModule, // 这个是多选下拉框的模块
    CalendarModule, // 这个是写日期的
    GrowlModule, // 消息弹窗
    InputSwitchModule, // Module/S2 WIP 中用到的切换的按钮
    FileUploadModule, // 文件导入的模块
    PaginatorModule, // table 的翻页 模块
    TabViewModule, // 切换标签的�, PromovedailyComponent��块
    RadioButtonModule
  ],
  declarations: [CellproductiondailyComponent, ProwipdailyComponent,PromovedailyComponent],
  providers: [ApiService, PanelService, FileUploadService, MessageService]
})
export class CellBaobiaoModule { }
