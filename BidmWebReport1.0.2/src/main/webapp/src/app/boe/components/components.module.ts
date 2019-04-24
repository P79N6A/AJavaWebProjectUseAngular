import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DataService } from './../services/data.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoeComboComponent } from './boe-combo/boe-combo.component';
import { DropdownModule, ToolbarModule, InputTextModule, SplitButtonModule, CalendarModule, SelectButtonModule, InputTextareaModule } from 'primeng/primeng';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BoeButtonComponent } from './boe-button/boe-button.component';
import { BoeTabviewComponent } from './boe-tabview/boe-tabview.component';
import { BoeMultigridComponent } from './boe-multigrid/boe-multigrid.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ToolbarModule,
    InputTextModule,
    SplitButtonModule,
    CalendarModule,
    SelectButtonModule,
    TabViewModule,
    TableModule,
    InputTextareaModule,
    TranslateModule
  ],
  declarations: [BoeComboComponent, SearchBarComponent, BoeButtonComponent, BoeTabviewComponent, BoeMultigridComponent],
  exports: [
    BoeComboComponent,
    SearchBarComponent,
    BoeButtonComponent,
    BoeTabviewComponent,
    BoeMultigridComponent
  ],
  providers: [
    DataService
  ]
})
export class ComponentsModule { }
