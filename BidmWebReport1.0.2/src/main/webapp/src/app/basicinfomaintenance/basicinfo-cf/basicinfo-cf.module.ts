import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicinfoCfRoutingModule } from './basicinfo-cf-routing.module';
import { CfwipmoveComponent } from './cfwipmove/cfwipmove.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DropdownModule, InputTextModule, DialogModule, ConfirmDialogModule } from 'primeng/primeng';
import { CfmovehourComponent } from './cfmovehour/cfmovehour.component';

@NgModule({
  imports: [
    CommonModule,
    BasicinfoCfRoutingModule,
    ButtonModule, // 按钮模块
    PanelModule, // p-panle模块
    TableModule, // 表格模块
    FormsModule, // 数据绑定需要用到的模块
    DropdownModule, // 下拉框模块
    InputTextModule,
    DialogModule, // 弹出对话框模块
    ConfirmDialogModule // 弹出的确认框
  ],
  declarations: [CfwipmoveComponent, CfmovehourComponent]
})
export class BasicinfoCfModule { }
