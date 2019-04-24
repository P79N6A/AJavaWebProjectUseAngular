import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Panel } from './panel';
import { PanelService } from './panel.service';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EchartsComponent implements OnInit, OnDestroy {

  expand: boolean = false;
  
  private theme: string;

  constructor(
    private pService: PanelService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.theme = environment.echartTheme;

    // let aaa = 'ddd';
    // let js: string = "aaa = 'qwert';";

    // eval(js);
    // // console.log(js);
    // console.log(aaa);

    // let p1: Panel = new Panel("纵坐标分组");
    // p1.author = "程俊";
    // p1.author_site = "B8";
    // p1.echartOption = "double-axis";

    // this.pService.add(p1);

    this.http.get("assets/boe/echarts/echart.json").subscribe(
      res => {
        const items: any[] = res['items'];
        items.forEach(item => {
          const panel: Panel = new Panel(item.title);
          panel.author = item.author;
          panel.author_site = item.site;
          panel.echartOption = item.path;

          this.pService.add(panel);
        });
      }
    );
  }

  ngOnDestroy() {
    localStorage.removeItem('echart_idx');
  }

  expandClick(id) {
    // console.log(id);
    this.expand = !this.expand;
    this.pService.ps.forEach(p => {
      if (this.expand) {
        if (p.id === id) {
          p.clazz = "ui-g-12";
          p.display = "block";
          p.icon = "fullscreen_exit";
          p.expand = true;
        } else {
          p.display = "none";
          p.expand = false;
        }
      } else {
        p.clazz = "ui-g-6 ui-md-4 ui-lg-3";
        p.display = "block";
        p.icon = "fullscreen";
        p.expand = false;
      }
    });
  }

}
