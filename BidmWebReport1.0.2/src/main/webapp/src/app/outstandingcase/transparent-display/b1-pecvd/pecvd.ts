export const mdlOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['RUN','IDLE','ETC','E_TIME','PM','DOWN']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : []
            }
        ],
        yAxis : [
            {
                type : 'value',
                max:1
            }
        ],
        series : [
            {
                name:'RUN',
                type:'bar',
                stack: 'pvx',
                data:[],
                itemStyle: { normal: { color:'#9ACD32'} }
            },
            {
                name:'IDLE',
                type:'bar',
                stack: 'pvx',
                data:[],
                itemStyle: { normal: { color:'#EEDD82 '} }
            },
            {
                name:'ETC',
                type:'bar',
                stack: 'pvx',
                data:[],
                itemStyle: { normal: { color:'#CD8500'} }
            },
            {
                name:'E_TIME',
                type:'bar',
                stack: 'pvx',
                data:[],
                itemStyle: { normal: { color:'#87CEFA'} }
            },
            {
                name:'PM',
                type:'bar',
                stack: 'pvx',
                data:[],
                itemStyle: { normal: { color:'#009ACD'} }
            },
            {
                name:'DOWN',
                type:'bar',
                stack: 'pvx',
                data:[],
                itemStyle: { normal: { color:'#FF0000'} }
            },
            {
                name:'RUN',
                type:'bar',
                stack: 'multi',
                data:[],
                itemStyle: { normal: { color:'#9ACD32'} }
            },
            {
                name:'IDLE',
                type:'bar',
                stack: 'multi',
                data:[],
                itemStyle: { normal: { color:'#EEDD82 '} }
            },
            {
                name:'ETC',
                type:'bar',
                stack: 'multi',
                data:[],
                itemStyle: { normal: { color:'#CD8500'} }
            },
            {
                name:'E_TIME',
                type:'bar',
                stack: 'multi',
                data:[],
                itemStyle: { normal: { color:'#87CEFA'} }
            }, {
                name:'PM',
                type:'bar',
                stack: 'multi',
                data:[],
                itemStyle: { normal: { color:'#009ACD'} }
            },
            {
                name:'DOWN',
                type:'bar',
                stack: 'multi',
                data:[],
                itemStyle: { normal: { color:'#FF0000'} }
            }
        ]
    };
    