import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicinfoCellRoutingModule } from './basicinfo-cell-routing.module';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DropdownModule, InputTextModule, ConfirmDialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ProductnameinfoComponent } from './productnameinfo/productnameinfo.component';

@NgModule({
  imports: [
    CommonModule,
    BasicinfoCellRoutingModule,
    PanelModule, // p-panle模块
    TableModule, // 表格模块
    DropdownModule, // 下拉框组件
    ButtonModule, // 按钮组件
    DialogModule, // 弹出对话框模块
    InputTextModule, // 输入框的组件
    FormsModule, // 数据双向绑定需要用到的组件
    ConfirmDialogModule // 弹出的确认框
  ],
  declarations: [ProductnameinfoComponent]
})
export class BasicinfoCellModule { }