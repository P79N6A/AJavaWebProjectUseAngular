export class EchartOption {
    title;
    //  : {
    //     text: '堆叠区域图'
    // },
    tooltip;
    // : {
    //     trigger: 'axis'
    // },
    legend;
    // : {
    //     data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    // },
    toolbox;
    // : {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    grid;
    // : {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    xAxis;
    // : [
    //     {
    //         type: 'category',
    //         boundaryGap: false,
    //         data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    //     }
    // ],
    yAxis;
    // : [
    //     {
    //         type: 'value'
    //     }
    // ],
    series: EchartSet;
}


export class EchartSet {
    name;
    type;
    stack;
    label;
    areaStyle;
    data;
    redius;
    center;
}
