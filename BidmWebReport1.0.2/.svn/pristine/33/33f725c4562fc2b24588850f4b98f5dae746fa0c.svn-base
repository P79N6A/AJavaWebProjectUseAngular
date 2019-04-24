import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-module-watchboard',
    templateUrl: './module-watchboard.component.html',
    styleUrls: ['./module-watchboard.component.css']
})
export class ModuleWatchboardComponent implements OnInit {

    constructor(private apiService: ApiService, private http:HttpClient) { }
    fpyOption;
    updateOption;
    inOutOption;
    options: Array<any> = new Array<any>();

    ngOnInit() {
        this.setFpyOption();
        this.setInOutOption();
    }

    setFpyOption() {
        const url = "assets/data/mod.json";
        this.http.get(url).subscribe(
            (response) => {
                const res=response['fpy'];
                this.fpyOption = {
                    title: {
                        text: 'FPY APP趋势图',
                        left: 'center'
                    },
                    xAxis: {
                        type: 'category',
                        data: res['timeAxis'],
                        axisLabel: {
                            interval: 0
                        },
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    grid: {
                        bottom: 25,
                        right: 30,
                        top: 30,
                        left: 35
                    },
                    tooltip: {
                        trigger: 'axis',
                        confine: true,
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        },
                        textStyle: {
                            fontSize: 7
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            name: '背板变形',
                            stack: 'fpy-app',
                            data: res['AB29']
                        },
                        {
                            type: 'bar',
                            name: '组装不良',
                            stack: 'fpy-app',
                            data: res['AB49']
                        },
                        {
                            type: 'bar',
                            name: '铝箔不良',
                            stack: 'fpy-app',
                            data: res['AE20']
                        },
                        {
                            type: 'bar',
                            name: 'PCB 卡合不良',
                            stack: 'fpy-app',
                            data: res['AB41']
                        },
                        {
                            type: 'bar',
                            name: 'PCB元件脱落',
                            stack: 'fpy-app',
                            data: res['AB44']
                        },
                        {
                            type: 'bar',
                            name: '钢琴盖不良',
                            stack: 'fpy-app',
                            data: res['AB50']
                        },
                        {
                            type: 'bar',
                            name: 'FPC折损',
                            stack: 'fpy-app',
                            data: res['AF04']
                        },
                        {
                            type: 'bar',
                            name: '凹点',
                            stack: 'fpy-app',
                            data: res['AC81']
                        },
                        {
                            type: 'bar',
                            name: '凸点',
                            stack: 'fpy-app',
                            data: res['AC82']
                        },
                        {
                            type: 'bar',
                            name: 'POL 划伤',
                            stack: 'fpy-app',
                            data: res['PP02']
                        },
                        {
                            type: 'line',
                            name: '总和',
                            stack: 'sum',
                            label: {
                                show: true,
                                borderColor: '#fff',
                                position: 'insideBottom',
                                fontSize: 9,
                                formatter: (params) => {
                                    return 'Total:\n' + params.value;
                                }
                            },
                            data: res['sum']
                        }
                    ]
                };
                this.options = [...this.options, this.fpyOption];
            }
        );
    }

    setInOutOption() {
        const url="assets/data/mod.json";
        this.http.get(url).subscribe(
            (res)=>{
                const response=res['inputOutput'];
                this.inOutOption = {
                    tooltip: {
                        formatter: "{a} <br/>{c}"
                    },
                    series: [
                        {
                            name: 'WIP(K)',
                            type: 'gauge',
                            min: 0,
                            max: 500,
                            splitNumber: 10,
                            radius: '95%',
                            axisLine: {
                                lineStyle: {
                                    color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                                    width: 3,
                                    shadowColor: '#fff',
                                    shadowBlur: 2
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor: '#fff',
                                    shadowBlur: 2
                                }
                            },
                            axisTick: {
                                length: 10,
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 2
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 18,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 2
                                }
                            },
                            pointer: {           // 分隔线
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 10,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                backgroundColor: 'rgba(30,144,255,0.8)',
                                borderWidth: 1,
                                fontSize: 10,
                                borderColor: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5,
                                formatter:(value)=>{
                                    return value+'K';
                                },
                                offsetCenter: [0, '50%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }
                            },
                            data: [{ value: (response['wip']/1000).toFixed(1), name: 'Wip/K' }]
                        },
                        {
                            name: 'FPY(%)',
                            type: 'gauge',
                            center: ['27%', '55%'],    // 默认全局居中
                            radius: '75%',
                            min: 0,
                            max: 100,
                            endAngle: 45,
                            splitNumber: 5,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                                    width: 2,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisLabel: {            // 坐标轴小标记
                                textStyle: {       // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 12,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 20,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                width: 5,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                offsetCenter: [0, '-30%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontStyle: 'italic',
                                    fontSize: 10,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                //backgroundColor: 'rgba(30,144,255,0.8)',
                                // borderWidth: 1,
                                shadowBlur: 5,
                                width: 80,
                                fontSize: 15,
                                height: 30,
                                formatter: (value) => {
                                    return value + '%';
                                },
                                offsetCenter: [0, '30%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }
                            },
                            data: [{ value:  (response['fpy']*100).toFixed(1), name: 'FPY' }]
                        },
                        {
                            name: '投入',
                            type: 'gauge',
                            center: ['75%', '50%'],    // 默认全局居中
                            radius: '80%',
                            min: 0,
                            max: 4000,
                            startAngle: 145,
                            endAngle: 30,
                            splitNumber: 2,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                                    width: 2,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 12,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisLabel: {
                                textStyle: {       // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 15,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                width: 2,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                offsetCenter: [0, '-45%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontStyle: 'italic',
                                    fontSize: 10,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                show: true,
                                fontSize: 10,
                                formatter: (value) => {
                                    return value + 'K';
                                },
                                offsetCenter: [0, '-25%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }
                            },
                            data: [{ value:  (response['input']/1000).toFixed(1), name: '投入' }]
                        },
                        {
                            name: '产出',
                            type: 'gauge',
                            center: ['75%', '50%'],    // 默认全局居中
                            radius: '85%',
                            min: 0,
                            max: 4000,
                            startAngle: 330,
                            endAngle: 225,
                            splitNumber: 2,
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                                    width: 2,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 12,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisLabel: {
                                textStyle: {       // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                },
                            },
                            splitLine: {           // 分隔线
                                length: 15,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                width: 2,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                offsetCenter: [0, '45%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontStyle: 'italic',
                                    fontSize: 10,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                show: true,
                                fontSize: 10,
                                formatter: (value) => {
                                    return value + 'K';
                                },
                                offsetCenter: [0, '25%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }
                            },
                            data: [{ value:  (response['output']/1000).toFixed(1), name: '产出' }]
                        }
                    ]
                };
            }
        );
    }
}
