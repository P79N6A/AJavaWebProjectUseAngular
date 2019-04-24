import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CfBaobiaoRoutingModule } from './cf-baobiao-routing.module';
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
import { CfmovewipComponent } from './cfmovewip/cfmovewip.component';
import { CfmovehourComponent } from './cfmovehour/cfmovehour.component';
import { Kong2nullPipe } from './cfmovehour/pipe/kong2null.pipe';
import { CfMoveMonthComponent } from './cf-move-month/cf-move-month.component';
import { CfwiphourComponent } from './cfwiphour/cfwiphour.component';
import { ToZeroPipePipe } from './cfwiphour/pipe/toZero/to-zero-pipe.pipe';




@NgModule({
  imports: [
    CommonModule,
    CfBaobiaoRoutingModule,
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
    TabViewModule, // 切�, Kong2nullPipe�标签的�,
    RadioButtonModule, 
  ],
  declarations: [CfmovewipComponent, CfmovehourComponent, CfMoveMonthComponent, Kong2nullPipe,CfwiphourComponent,ToZeroPipePipe],
  providers: [ApiService, PanelService, FileUploadService, MessageService]
})
export class CfBaobiaoModule { }