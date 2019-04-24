import { Injectable } from '@angular/core';
import "assets/echartTheme/dark.js";
import "assets/echartTheme/infographic.js";
import "assets/echartTheme/macarons.js";
import "assets/echartTheme/roma.js";
import "assets/echartTheme/shine.js";
import "assets/echartTheme/vintage.js";
import * as echarts from 'echarts';

@Injectable()
export class EchartService {
  constructor() { }
  init(dom:HTMLElement){
    const theme = window.localStorage.getItem('echartTheme');
    if( theme != null){
      return echarts.init(<HTMLDivElement>dom,theme);
    }
    return echarts.init(<HTMLDivElement>dom,'macarons');
  }
}
