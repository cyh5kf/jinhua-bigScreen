import React from 'react'
import ReactEcharts from 'echarts-for-react'

class LineSheBao extends React.Component {

    render() {
       var data=this.props.data
         var echarts = require('echarts')
            let option = {

                grid: {
                     left:70,
                    top: 10,
                    right: 0,
                    bottom: 25
                },
                xAxis: {
                    type: 'category',
                    data: data.xdata,

                    boundaryGap: true,
                    axisLabel: {
                        align: 'center',
                        interval: 0,
                        fontFamily: 'Times New Roman,HelveticaNeue',
                        fontSize: 20,
                        color: 'rgba(234,239,255,0.5)'
                    },
                    axisTick: {
                        alignWithLabel: true,
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)',
                            fontFamily: 'HelveticaNeue',
                            fontWight: 400,
                        },
                        inside: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)'
                        }
                    },
                    splitLine: {
                        show: false,
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: true
                    },
                    axisLabel: {
                        color: 'rgba(234, 239, 255, 0.5)',
                        fontFamily: 'Times New Roman,HelveticaNeue',
                        fontSize: 20,
                        formatter: `{value} ${data.unit}`
                    },
                    boundaryGap: false,
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)'
                        }
                    }
                },
                tooltip: {
                    show: true,
                    // position: 'top',
                    backgroundColor: '#0C1F5B',
                    padding: 0,
                    textStyle: {
                        color: 'rgba(255,255,255,1)',
                        fontFamily: 'PingFangSC-Regular,PingFangSC',
                        fontSize: 14,
                        fontWight: 400,
                    },
                    // hideDelay: 9999999999,
                    // formatter: `{b}</br>{c},`
                    formatter: params => {
                        //console.log('11111111111111111',params);
                        if (params.data) {
                            const data = params.data
                            const name = params.name
                            let html = `<div class="line_hint_box">
                            <i class="one_i"></i>
                            <i class="two_i"></i>
                            <p>${name}月</p>
                             <p class="last_p">${data}%</p>
                            <i class="three_i"></i>
                            <i class="four_i"></i>
                            </div>`;
                            return html
                        }
                    }
                },
                series: [{
                    data:data.ydata,
                    type: 'line',
                    smooth: true,

                    showSymbol: true,

                    symbolSize: 10,   //设定实心点的大小
                    hoverAnimation:true,
                    itemStyle:{
                        color: 'rgba(45, 111, 255, 1)',
                        lineStyle: {
                            color: 'rgba(45, 111, 255, 1)'
                        },
                    },

                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset:0,
                                color: 'rgba(45, 111, 255, 1)'
                            }, {
                                offset:1,
                                    color: 'rgba(45, 111, 255, 0.1)'
                            }])
                        }
                    },

                }]
            };

        return (
            <ReactEcharts option={option} style={this.props.style}></ReactEcharts>
        )
    }
}

export default LineSheBao;
