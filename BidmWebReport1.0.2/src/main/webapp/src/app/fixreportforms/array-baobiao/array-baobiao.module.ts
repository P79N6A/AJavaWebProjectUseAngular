import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrayBaobiaoRoutingModule } from './array-baobiao-routing.module';
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
import { ArraywipkanbanShishiComponent } from './arraywipkanban-shishi/arraywipkanban-shishi.component';

import { BankcellinComponent } from './bankcellin/bankcellin.component';
import { ToZeroPipePipe } from './arraywipkanban-shishi/pipes/toZero/to-zero-pipe.pipe';
import { ArraymovegundongComponent } from './arraymovegundong/arraymovegundong.component';
import { HandlezeroPipe } from './arraymovegundong/argundongpipe/handlezero.pipe';
import { Handlezero2Pipe } from './arraymovegundong/argundongpipe2/handlezero2.pipe';
import { ArraymoveshishiComponent } from './arraymoveshishi/arraymoveshishi.component';
import { ZeroToKongPipe } from './arraymoveshishi/pipe/zero-to-kong.pipe';

@NgModule({
  imports: [
    CommonModule,
    ArrayBaobiaoRoutingModule,
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
    TabViewModule, // 切换标��的模块
    RadioButtonModule
  ],
  declarations: [ToZeroPipePipe, ArraywipkanbanShishiComponent, BankcellinComponent,ArraymovegundongComponent, HandlezeroPipe, Handlezero2Pipe, ArraymoveshishiComponent, ZeroToKongPipe],
  providers: [ApiService, PanelService, FileUploadService, MessageService]
})
export class ArrayBaobiaoModule { }
