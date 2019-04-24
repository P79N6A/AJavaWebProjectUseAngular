import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { OutstandingcaseRoutingModule } from './outstandingcase-routing.module';
import { ApiService } from 'app/common/service/api/api.service';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule, ButtonModule, DataTableModule, SharedModule, PickListModule, ListboxModule, SelectButtonModule, InputSwitchModule, DropdownModule, KeyFilterModule, MessageModule, MessagesModule, TreeModule, PanelModule, ConfirmDialogModule, PaginatorModule, ChartModule, CardModule, TabViewModule, GalleriaModule, MultiSelectModule, CarouselModule, ToolbarModule, CalendarModule} from 'primeng/primeng';
import { TranslateModule } from '@ngx-translate/core';
import { B6DashboardComponent } from './pmkanban/b6-dashboard/b6-dashboard.component';
import { B8DashboardComponent } from './pmkanban/b8-dashboard/b8-dashboard.component';
import { NgxEchartsModule } from '../../../node_modules/ngx-echarts';
import { ReportUiCommonService } from '../report-ui/service/report-ui-common.service';
import { B4CstComponent } from './cannedFReport/b4-cst/b4-cst.component';
import { ModuleWatchboardComponent } from './pmkanban/module-watchboard/module-watchboard.component';
import { ModWipComponent } from 'app/outstandingcase/pmkanban/module-watchboard/mod-wip/mod-wip.component';
import { PolMachineStatusComponent } from 'app/outstandingcase/pmkanban/module-watchboard/pol-machine-status/pol-machine-status.component';
import { B3ArrayDashboardComponent } from './pmkanban/b3-array-dashboard/b3-array-dashboard.component';
import { B4WipComponent } from './transparent-display/b4-wip/b4-wip.component';
import { InspectionComponent } from 'app/outstandingcase/transparent-display/inspection/inspection.component';
import { B1PecvdComponent } from 'app/outstandingcase/transparent-display/b1-pecvd/b1-pecvd.component';
import { BoeService } from 'app/outstandingcase/transparent-display/b1-pecvd/boe.service';
import { B2DailyComponent } from './cannedFReport/b2-daily/b2-daily.component';
import { B1OemAgingComponent } from './cannedFReport/b1-oem-aging/b1-oem-aging.component';
import { Tm1kanbanComponent } from 'app/outstandingcase/pmkanban/tm1kanban/tm1kanban.component';
import { CountUpModule } from 'countup.js-angular2';
import { ComponentsModule } from 'app/boe/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    OutstandingcaseRoutingModule,
    ChartModule,
    NgxEchartsModule,
    FormsModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    PickListModule ,
    ListboxModule,
    SelectButtonModule,
    InputSwitchModule,
    DropdownModule,
    KeyFilterModule,
    MessageModule,
    MessagesModule,
    TranslateModule,
    TreeModule,
    PanelModule,
    ConfirmDialogModule,
    PaginatorModule,
    CardModule,
    TabViewModule,
    CarouselModule,
    GalleriaModule,
    MultiSelectModule,
    ToolbarModule,
    CalendarModule,
    CountUpModule,
    ComponentsModule
  ],
  declarations: [B6DashboardComponent,B8DashboardComponent,
     B4CstComponent, ModuleWatchboardComponent,ModWipComponent,PolMachineStatusComponent, 
     B4WipComponent,B3ArrayDashboardComponent,InspectionComponent, B1PecvdComponent, B2DailyComponent, B1OemAgingComponent,Tm1kanbanComponent],
  providers:[ApiService,ReportUiCommonService,DatePipe,BoeService]
})
export class OutstandingcaseModule { }
