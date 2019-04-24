import { ApiService } from './../../../common/service/api/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: [
    './test.component.css'
  ]
})
export class TestComponent implements OnInit {

  urlSite: string;
  placeholderSite: string;
  labelSite: string = "name";
  urlFac: string;
  placeholderFac: string;
  labelFac: string = "name";

  selectSite: string;
  selectFac: string;

  conditions: any[];
  // private factoryUrl: string;

  gridValues: any;

  @ViewChild('searchBar')
  searchBar: any;

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.urlSite = "assets/boe/sites.json";
    this.placeholderSite = "Select a site";
    // this.urlFac = "assets/boe/factories.json";
    this.placeholderFac = "Select a factory";

    this.conditions = [
      {
        "label": "date",
        "type": "calendar",
        "placeholder": "请选择日期"
      },
      {
        "label": "现地",
        "type": "boe-dropdown",
        "placeholder": "请选择现地",
        "url": "assets/boe/sites.json",
        "labelTag": "name",
        "selectItem": (event: any)=>{
          // console.log('select======');
          // this.factoryUrl = "assets/boe/factories/" + event.name + ".json";
          // console.log(this.factoryUrl);
          this.conditions.forEach(item => {
            // console.log(item);
            if (item['label'] == '工厂' && item['type'] == 'boe-dropdown') {
              if (event == null) {
                item['url'] = null;
              } else {
                item['url'] = "assets/boe/factories/" + event.name + ".json";
              }
            }
          });
          // console.log(this.conditions);
          this.searchBar.conditionChanged(this.conditions);
        }
      },
      {
        "label": "工厂",
        "type": "boe-dropdown",
        // "options": [],
        "placeholder": "请选择工厂",
        "url": "",
        "labelTag": "name",
        "selectItem": ()=>{}
      },
      // {
      //   "label": "condition3",
      //   "type": "calendar"
      // },
      {
        "label": "基准",
        "type": "select",
        "options": [
          {label: 'Glass', value: 'GLS'},
          {label: 'Panel', value: 'PNL'}
        ]
      },
      {
        "label": "搜索条件1",
        "type": "text",
        "placeholder": "请输入条件"
      },
      {
        "label": "现地2",
        "type": "dropdown",
        "placeholder": "请选择条件",
        "options": [
          {label: 'B1', value: 'B1'},
          {label: 'B2', value: 'B2'},
          {label: 'B3', value: 'B3'},
          {label: 'B4', value: 'B4'},
          {label: 'B5', value: 'B5'},
          {label: 'B6', value: 'B6'},
          {label: 'B7', value: 'B7'},
          {label: 'B8', value: 'B8'},
          {label: 'B9', value: 'B9'},
          {label: 'B10', value: 'B10'},
          {label: 'BMDT', value: 'BMDT'},
          {label: 'TM1', value: 'TM1'}
        ]
      }
    ];

    // console.log(this.conditions);
    this.initGridValue();
  }

  siteSelected(event: any) {
    // console.log(event.name);
    this.urlFac = "assets/boe/factories/" + event.name + ".json";
  }

  initGridValue() {
    this.gridValues = [
      {
        header: {
          backgroundColor: '#ffc',
          items: [
            [
              { header: 'Shop', rowspan: 3 },
              { header: 'Des.', rowspan: 3 },
              { header: 'Input', colspan: 6 },
              { header: 'Output', colspan: 6 },
              { header: 'WIP', colspan: 2 },
              { header: 'Bank', rowspan: 3 }
            ],
            [
              { header: 'Plan', colspan: 3 },
              { header: 'Act', colspan: 2 },
              { header: 'Bal.', rowspan: 2 },
              { header: 'Plan', colspan: 3 },
              { header: 'Act', colspan: 2 },
              { header: 'Bal.', rowspan: 2 },
              { header: 'Main Line', rowspan: 2 },
              { header: 'R/W & M02 & 中转仓', rowspan: 2 }
            ],
            [
              { header: 'Monthly' },
              { header: 'Cum' },
              { header: 'Daily' },
              { header: 'Cum' },
              { header: 'Daily' },
              { header: 'Monthly' },
              { header: 'Cum' },
              { header: 'Daily' },
              { header: 'Cum' },
              { header: 'Daily' },
            ]
          ]
        },
        values: {
          items: [
            [
              { value: 'Array' },
              { value: '-' },
              { value: '109.1k' },
              { value: '93.9k' },
              { value: '3.8k' },
              { value: '92.9k' },
              { value: '3.9k' },
              { value: '-1.0k', color: 'blue' },
              { value: '109.2k' },
              { value: '94.0k' },
              { value: '3.6k' },
              { value: '91.8k' },
              { value: '3.6k' },
              { value: '-2.2k', color: 'blue' },
              { value: '18.2k' },
              { value: '0.0k' },
              { value: '3.0k' }
            ],
            [
              { value: 'CF' },
              { value: '-' },
              { value: '109.0k' },
              { value: '94.6k' },
              { value: '3.8k' },
              { value: '92.7k' },
              { value: '3.1k' },
              { value: '-1.9k', color: 'blue' },
              { value: '109.0k' },
              { value: '94.8k' },
              { value: '3.5k' },
              { value: '94.0k' },
              { value: '3.5k' },
              { value: '-0.7k', color: 'blue' },
              { value: '7.2k' },
              { value: '0.9k' },
              { value: '7.5k' }
            ]
          ]
        }
      },
      {
        header: {
          backgroundColor: '#ffc',
          items: [
            [
              { header: 'Des.', colspan: 2 },
              { header: 'Monthly Plan' },
              { header: 'CUM Plan' },
              { header: 'CUM ACT' },
              { header: 'Gap' },
              { header: '计划达成率' },
              { header: '产能Loss分析', colspan: 10 }
            ]
          ]
        },
        values: {
          items: [
            [
              { value: '总投入', colspan: 2 },
              { value: '109.1k' },
              { value: '93.9k' },
              { value: '92.9k' },
              { value: '-1.0k', color: 'blue' },
              { value: '98.9%', color: 'blue' },
              { value: 'content', rowspan: 8, colspan: 10, editable: true, editrows: 20, editcols: 30 }
            ],
            [
              { value: 'Array Out', colspan: 2 },
              { value: '109.2k' },
              { value: '94.0k' },
              { value: '91.8k' },
              { value: '-2.2k', color: 'blue' },
              { value: '97.7%', color: 'blue' }
            ],
            [
              { value: '瓶颈工序Mov-ODF', colspan: 2 },
              { value: '108.3k' },
              { value: '94.9k' },
              { value: '92.9k' },
              { value: '-2.0k', color: 'blue' },
              { value: '97.9%', color: 'blue' }
            ],
            [
              { value: '总产出（含Q产出）', rowspan: 5 },
              { value: '厂内MDL', width: '150px' },
              { value: '84.8k' },
              { value: '73.4k' },
              { value: '77.2k' },
              { value: '3.8k' },
              { value: '105.1%' }
            ],
            [
              { value: 'OEM' },
              { value: '15.4k' },
              { value: '12.8k' },
              { value: '10.9k' },
              { value: '-1.9k', color: 'blue' },
              { value: '85.0%', color: 'blue' }
            ],
            [
              { value: 'Q-Panel' },
              { value: '2.3k' },
              { value: '2.3k' },
              { value: '2.6k' },
              { value: '0.3k' },
              { value: '113.2%' }
            ],
            [
              { value: '正常品TTL' },
              { value: '102.5k' },
              { value: '88.6k' },
              { value: '90.7k' },
              { value: '0.3k' },
              { value: '102.4%' }
            ],
            [
              { value: '全部产品TTL' },
              { value: '103.2k' },
              { value: '89.2k' },
              { value: '91.9k' },
              { value: '2.7k' },
              { value: '103.0%' }
            ]
          ]
        }
      },
      {
        header: {
          backgroundColor: '#ffc',
          items: [
            [
              { header: 'Daily Issue', colspan: 14 },
              { header: '瓶颈Move' },
              { header: 'Cum/sh' },
              { header: 'Daily/sh' }
            ]
          ]
        },
        values: {
          items: [
            [
              { value: '', colspan: 14, rowspan: 9, editable: true, editrows: 16, editcols: 30 }
            ],
            [
              { value: 'Metal SPT' },
              { value: '215.6k' },
              { value: '18.0k' }
            ],
            [
              { value: 'Photo' },
              { value: '518.5k' },
              { value: '19.0k' }
            ],
            [
              { value: 'DE' },
              { value: '105.4k' },
              { value: '8.0k' }
            ],
            [
              { value: 'PS' },
              { value: '101.5k' },
              { value: '4.0k' }
            ],
            [
              { value: 'BM' },
              { value: '103.7k' },
              { value: '4.0k' }
            ],
            [
              { value: 'ODF' },
              { value: '104.4k' },
              { value: '4.0k' }
            ],
            [
              { value: 'PI(CF)' },
              { value: '103.3k' },
              { value: '4.0k' }
            ],
            [
              { value: 'CUT' },
              { value: '104.9k' },
              { value: '3.8k' }
            ]
          ]
        }
      }
    ];
  }

  valParam: number;

  set() {
    console.log("seeeeeeeeeeeeeet");
    this.http.post("http://localhost:8080/param/set", {'value': this.valParam}).subscribe(
      (res) => {
        console.log('res : ',res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setParam() {
    // console.log("api service set");
    const options = {
      value: this.valParam
    };
    this.apiService.post('/test/param/set', this.valParam).subscribe(
      res => {
        console.log("post ok");
      }
    )
  }

  mouseover() {
    $('#buttontest').attr('src', 'assets/layout/images/mousein.png')
  }

  mouseout() {
    $('#buttontest').attr('src', 'assets/layout/images/button.png')
  }  

  click() {
    $('#buttontest').attr('src', 'assets/layout/images/mousedown.png')
  }

}
