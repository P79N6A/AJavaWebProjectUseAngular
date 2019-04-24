import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BoeUiRoutingModule } from './boe-ui-routing.module';
import { BoeListComponent } from './boe-list/boe-list.component';
import { BoeGridComponent } from './boe-grid/boe-grid.component';
import { BoeDashboardComponent } from './boe-dashboard/boe-dashboard.component';
// service
import { ApiService } from '../common/service/api/api.service';
import { ReportUiCommonService } from '../report-ui/service/report-ui-common.service';
// primeng
import { DropdownModule, InputTextModule, FileUploadModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';
import { PaginatorModule } from 'primeng/paginator';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SplitButtonModule } from 'primeng/splitbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';

// echart
import { NgxEchartsModule } from 'ngx-echarts';
import { BoeChartComponent } from './boe-chart/boe-chart.component';
import { TimeInterverService } from './boe-dashboard/service/time-interver.service';
import { WebSocketService } from '../common/service/web-socket.service';
import { SpsService } from '../common/service/sps.service';
import { FileUploadService } from './boe-list/service/file-upload.service';

// pipe
import { DecimalPrecisionPipe } from '../common/pipe/decimal-precision/decimal-precision.pipe';
import { Type4Component } from './type4/type4.component';
import { Type5Component } from './type5/type5.component';
import { Type6Component } from './type6/type6.component';




@NgModule({
  imports: [
    CommonModule,
    BoeUiRoutingModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    PanelModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ChartModule,
    NgxEchartsModule,
    CardModule,
    TabViewModule,
    GalleriaModule,
    PaginatorModule,
    InputSwitchModule,
    SplitButtonModule,
    OverlayPanelModule,
    ListboxModule,
    CalendarModule,
    FileUploadModule
  ],
  declarations: [BoeListComponent, BoeGridComponent, BoeChartComponent, BoeDashboardComponent, Type4Component,Type5Component,Type6Component,DecimalPrecisionPipe],
  providers: [ApiService, ReportUiCommonService, TimeInterverService, WebSocketService, SpsService, FileUploadService],
})
export class BoeUiModule { }
