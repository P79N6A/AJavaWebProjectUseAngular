import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesUiRoutingModule } from './mes-ui-routing.module';
import { Type1Component } from './type1/type1.component';
import { FormsModule } from '@angular/forms';

// primeng
import { DropdownModule, InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';


// service
import { ApiService } from '../common/service/api/api.service';

// child component
import { Type1ModalComponent } from './type1/component/type1-modal/type1-modal.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { SpsService } from '../common/service/sps.service';
import { SearchComponent } from '../common/component/search/search.component';
import { PagenateComponent } from '../common/component/pagenate/pagenate.component';

@NgModule({
  imports: [
    CommonModule,
    MesUiRoutingModule,
    FormsModule,
    PaginatorModule,
    DropdownModule,
    ButtonModule,
    PanelModule,
    TableModule,
    DialogModule,
    InputTextModule,
    TreeModule,
    TabViewModule
  ],
  declarations: [Type1Component, Type1ModalComponent, Type2Component, Type3Component, SearchComponent, PagenateComponent],
  providers: [ApiService, SpsService]
})
export class MesUiModule { }
