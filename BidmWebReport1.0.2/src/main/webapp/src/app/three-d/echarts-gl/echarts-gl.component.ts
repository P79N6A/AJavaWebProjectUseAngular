import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echarts-gl',
  templateUrl: './echarts-gl.component.html',
  styleUrls: ['./echarts-gl.component.css']
})
export class EchartsGlComponent implements OnInit {

  chartOption1;
  chartOption2;
  chartOption3;
  chartOption4;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
  }

  initChart1() {
    this.http.get('assets/threed/life-expectancy-table.json').subscribe(
      data => {
        this.chartOption1 = {
          grid3D: {},
          tooltip: {},
          xAxis3D: {
              type: 'category'
          },
          yAxis3D: {
              type: 'category'
          },
          zAxis3D: {},
          visualMap: {
              max: 1e8,
              dimension: 'Population'
          },
          dataset: {
              dimensions: [
                  'Income',
                  'Life Expectancy',
                  'Population',
                  'Country',
                  {name: 'Year', type: 'ordinal'}
              ],
              source: data
          },
          series: [
              {
                  type: 'bar3D',
                  // symbolSize: symbolSize,
                  shading: 'lambert',
                  encode: {
                      x: 'Year',
                      y: 'Country',
                      z: 'Life Expectancy',
                      tooltip: [0, 1, 2, 3, 4]
                  }
              }
          ]
        };
      }
    );
  }

  initChart2() {
    let data = [];
    for (let t=0; t<25; t+=0.001) {
      let x = (1 + 0.25 * Math.cos(75*t)) * Math.cos(t);
      let y = (1 + 0.25 * Math.cos(75*t)) * Math.sin(t);
      let z = t + 2.0 * Math.sin(75*t);
      data.push([x, y, z]);
    }

    this.chartOption2 = {
      tooltip: {},
      backgroundColor: '#fff',
      visualMap: {
          show: false,
          dimension: 2,
          min: 0,
          max: 30,
          inRange: {
              color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
      },
      xAxis3D: {
          type: 'value'
      },
      yAxis3D: {
          type: 'value'
      },
      zAxis3D: {
          type: 'value'
      },
      grid3D: {
          viewControl: {
              projection: 'orthographic'
          }
      },
      series: [{
          type: 'line3D',
          data: data,
          lineStyle: {
              width: 4
          }
      }]
    };
  }

  initChart3() {
    this.http.get('assets/threed/life-expectancy-table.json').subscribe(
      data => {
        this.chartOption3 = {
          grid3D: {},
          xAxis3D: {
              type: 'category'
          },
          yAxis3D: {},
          zAxis3D: {},
          dataset: {
              dimensions: [
                  'Income',
                  'Life Expectancy',
                  'Population',
                  'Country',
                  {name: 'Year', type: 'ordinal'}
              ],
              source: data
          },
          series: [
              {
                  type: 'scatter3D',
                  symbolSize: 2.5,
                  encode: {
                      x: 'Country',
                      y: 'Life Expectancy',
                      z: 'Income',
                      tooltip: [0, 1, 2, 3, 4]
                  }
              }
          ]
        };
      }
    );
  }

  initChart4() {
    this.chartOption4 = {
      tooltip: {},
      backgroundColor: '#fff',
      visualMap: {
          show: false,
          dimension: 2,
          min: -1,
          max: 1,
          inRange: {
              color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
      },
      xAxis3D: {
          type: 'value'
      },
      yAxis3D: {
          type: 'value'
      },
      zAxis3D: {
          type: 'value'
      },
      grid3D: {
          viewControl: {
              // projection: 'orthographic'
          }
      },
      series: [{
          type: 'surface',
          wireframe: {
              // show: false
          },
          equation: {
              x: {
                  step: 0.05
              },
              y: {
                  step: 0.05
              },
              z: function (x, y) {
                  if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
                      return '-';
                  }
                  return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
              }
          }
      }]
    };
  }

}
