import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashBoardUiRoutingModule } from './dash-board-ui-routing.module';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';

// service
import { ApiService } from '../common/service/api/api.service';

// primeng
import { DropdownModule, InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';

// echart
import { NgxEchartsModule } from 'ngx-echarts';
import { Type4Component } from './type4/type4.component';
import { ReportUiCommonService } from '../report-ui/service/report-ui-common.service';

@NgModule({
  imports: [
    CommonModule,
    DashBoardUiRoutingModule,
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
    GalleriaModule
  ],
  declarations: [Type1Component, Type2Component, Type3Component, Type4Component],
  providers: [ApiService,ReportUiCommonService,DatePipe]
})
export class DashBoardUiModule { }
