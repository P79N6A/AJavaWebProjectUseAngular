import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicinfoSgRoutingModule } from './basicinfo-sg-routing.module';
import { WipMoveProcessinfoComponent } from './wip-move-processinfo/wip-move-processinfo.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { SortbankinfoComponent } from './sortbankinfo/sortbankinfo.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule, InputTextModule, ConfirmDialogModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { PanelbankinfoComponent } from './panelbankinfo/panelbankinfo.component';


@NgModule({
  imports: [
    CommonModule,
    BasicinfoSgRoutingModule,
    ButtonModule, // 按钮模块
    PanelModule, // p-panle模块
    TableModule, // 表格模块
    DialogModule, // 弹出对话框模块
    DropdownModule, // 下拉框模块
    InputTextModule, // 输入模块的吧
    FormsModule, // 数据绑定需要用到的模块
    ConfirmDialogModule // 弹出的确认框
  ],
  declarations: [WipMoveProcessinfoComponent, ProductinfoComponent, SortbankinfoComponent, PanelbankinfoComponent]
})
export class BasicinfoSgModule { }
