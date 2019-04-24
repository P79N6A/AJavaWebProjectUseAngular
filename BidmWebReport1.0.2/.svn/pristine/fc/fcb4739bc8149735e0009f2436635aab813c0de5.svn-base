import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecRoutingModule } from './spec-routing.module';
import { SpecTableComponent } from './spec-table/spec-table.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ApiService } from '../common/service/api/api.service';
import { PanelService } from '../boe/pages/echarts/panel.service';
import { ButtonModule, InputTextModule, TabViewModule, PaginatorModule, ListboxModule, OverlayPanelModule, ChartModule, FileUploadModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { FileUploadService } from 'app/boe-ui/boe-list/service/file-upload.service';
import { SpecImportComponent } from './spec-import/spec-import.component';
import { MessageService } from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    SpecRoutingModule,
    DialogModule,    //p-dialog需要使用的ngmodule
    TableModule,  //p-table需要使用的ngmodule
    PanelModule,   //p-panel需要使用的ngmodule
    ButtonModule,  //使button的label信息正常显示
    InputTextModule,//inputtext使用需要的ngmodule
    FormsModule,    //显示ngModel不能为input所用时，引用
    TabViewModule,
    PaginatorModule,
    ListboxModule,  //p-listbox
    OverlayPanelModule,   //overlaypanel    
    NgxEchartsModule,   //options
    ChartModule,
    FileUploadModule,
    GrowlModule
  ], 
  declarations: [SpecTableComponent,SpecImportComponent],
  providers: [ApiService,PanelService,FileUploadService,MessageService]
})
export class SpecModule { }
