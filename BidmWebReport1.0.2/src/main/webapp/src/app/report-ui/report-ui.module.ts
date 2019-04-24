import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportUiRoutingModule } from './report-ui-routing.module';
import { Type1Component } from './type1/type1.component';
import { FormsModule } from '@angular/forms';

// primeng
import { DropdownModule, InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { ChartModule } from 'primeng/chart';
import { ApiService } from '../common/service/api/api.service';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';

// echart
import { NgxEchartsModule } from 'ngx-echarts';
import { ReportUiCommonService } from './service/report-ui-common.service';

@NgModule({
  imports: [
    CommonModule,
    ReportUiRoutingModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    PanelModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ChartModule,
    NgxEchartsModule
  ],
  declarations: [Type1Component, Type2Component, Type3Component],
  providers: [ApiService, ReportUiCommonService]
})
export class ReportUiModule { }
