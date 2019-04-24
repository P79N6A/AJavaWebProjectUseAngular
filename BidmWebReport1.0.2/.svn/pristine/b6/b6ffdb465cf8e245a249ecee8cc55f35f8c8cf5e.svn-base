import { Component, OnInit, Input } from '@angular/core';
import { EchartService } from '../../common/service/echart.service';
import { ApiService } from '../../common/service/api/api.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { format } from 'url';

@Component({
  selector: 'app-type6',
  templateUrl: './type6.component.html',
  styleUrls: ['./type6.component.css']
})
export class Type6Component implements OnInit {


  @Input() values: any;
  headers: any[];
    // search data;
    searchWord = null;
    option1 = null;
    selectedOption1 = null;
    searchDate: Date;

    //
    gridValues: any;

    conditions: any[];



    searchInfo = { searchOption: '', searchWord: '' , searchDate: '' };

  constructor(private apiService: ApiService ,private breadcrumbService: BreadcrumbService,public tService: TabService,private echartService:EchartService)
   { 
    this.breadcrumbService.setItems([
      { label: '模组' },
      { label: '看板' },
    ]);
   }

  ngOnInit() {
    this.conditions = [
      {
        "label": "date",
        "type": "calendar",
        "placeholder": "请选择日期"
      },
    ]
    // this.getTimeStamp();
    
  }

  // getTimeStamp() {
    
  //   return searchDate;
  //   this.initGridValue(this.searchDate);
  // }

  initGridValue(searchDate) {

    const date = this.searchDate;
    if (date) {
      const yyyy = date.getFullYear().toString();
     
      const mm = (date.getMonth() + 1).toString();
      const dd = (date.getDate()).toString();
      searchDate = yyyy + '-' + mm + '-' +dd;//(mm[1] ? mm : '0' + mm[0]) + '-' + (dd[1] ? dd : '0' + dd[0]);
    }
    this.gridValues=[
      {
        header:{
          items:[
            [
              {header:'Dep.',rowspan: 3 },
              {header:'Input',colspan:7},
              {header:'Output',colspan:7}
            ],
            [
              {header:'Plan',colspan:1},
              {header:'Cum实际',colspan:1},
              {header:searchDate,colspan:3},
              {header:'Bal (M基准)',rowspan:2},
              {header:'M01 投入达成率',rowspan:2},
              {header:'Plan',colspan:1},
              {header:'Cum实际',colspan:1},
              {header:searchDate,colspan:3},
              {header:'Bal (M基准)',rowspan:2},
              {header:'M01 投入达成率',rowspan:2}
            ],
            [
              {header:'Monthly'},
              {header:'Monthly'},
              {header:'Plan'},
              {header:'Act'},
              {header:'Gap'},
              {header:'Monthly'},
              {header:'Monthly'},
              {header:'Plan'},
              {header:'Act'},
              {header:'Gap'}
            ]
          ]
        },
        values:{
          items:[
            [
              {value:'1#-5#'},
            ],
            [
              {value:'6#-11#'},
            ],
            [
              {value:'12#-18#'}
            ]
          ]
        }


    }]
  }
}
