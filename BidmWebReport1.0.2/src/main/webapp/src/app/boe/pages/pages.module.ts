import { SplitButtonModule } from 'primeng/splitbutton';
import { NgxEchartsModule } from 'ngx-echarts';
import { ButtonModule } from 'primeng/button';
import { ApiService } from './../../common/service/api/api.service';
import { PanelModule } from 'primeng/panel';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule, AccordionModule, TabViewModule } from 'primeng/primeng';
import { Test1Component } from './test1/test1.component';
import { TranslateModule } from '@ngx-translate/core';
import { TabService } from 'core/layout/retab/service/tab.service';
import { EchartsComponent } from './echarts/echarts.component';
import { PanelService } from './echarts/panel.service';
import { DeviceComponent } from './device/device.component';
import { D3Component } from './d3/d3.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    NgxEchartsModule,
    AccordionModule,
    SplitButtonModule,
    TabViewModule,
    TranslateModule
  ],
  declarations: [TestComponent, Test1Component, EchartsComponent, DeviceComponent, D3Component],
  providers: [
    ApiService,
    TabService,
    PanelService
  ]
})
export class PagesModule { }
