import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SgBaobiaoRoutingModule } from './sg-baobiao-routing.module';
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
import { GsproductComponent } from './gsproduct/gsproduct.component';
import { FactoryproductComponent } from './factoryproduct/factoryproduct.component';
import { SortbankComponent } from './sortbank/sortbank.component';
import { PanelbankComponent } from './panelbank/panelbank.component';
import { StrFormatPipe } from '../pipe/strFormat/str-format.pipe';

import { MyzeropipePipe } from '../pipe/mypipe/myzeropipe.pipe';
import { ZeroConvertPipe } from '../pipe/zeroConvert/zero-convert.pipe';
import { CellwipshiptofgmsComponent } from './cellwipshiptofgms/cellwipshiptofgms.component';

@NgModule({
  imports: [
    CommonModule,
    SgBaobiaoRoutingModule,
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
    TabViewModule, // 切换标签的模块
    RadioButtonModule
  ],
  declarations: [StrFormatPipe, ZeroConvertPipe, MyzeropipePipe,
    GsproductComponent, FactoryproductComponent, SortbankComponent, PanelbankComponent, CellwipshiptofgmsComponent],
  providers: [ApiService, PanelService, FileUploadService, MessageService]
})
export class SgBaobiaoModule { }
