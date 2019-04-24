import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicinfoArrayRoutingModule } from './basicinfo-array-routing.module';
import { ArrayOperComponent } from './array-oper/array-oper.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule, ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BasicinfoArrayRoutingModule,
    ButtonModule, // 按钮模块
    PanelModule, // p-panle模块
    TableModule, // 表格模块
    DialogModule, // 弹出对话框模块
    InputTextModule, // 输入模块的吧
    FormsModule, // 数据绑定需要用到的模块
    ConfirmDialogModule // 弹出的确认框
  ],
  declarations: [ArrayOperComponent],
  providers: [ConfirmationService]
})
export class BasicinfoArrayModule { }
