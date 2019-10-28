import React from 'react'
import ReactEcharts from 'echarts-for-react'

class Line extends React.Component{

    render() {


            let option = {
                title: {

                    textStyle: {
                        color: '#7FAFF6',
                        fontFamily: 'PingFangSC-Regular,PingFangSC',
                        fontSize: 14,
                        fontWight: 'normal',
                    },
                    padding: [5, 5, 11, 0]
                },
                grid: {
                    // left: '7%',
                    top: 40,
                    right: 20,
                    bottom: 70
                },
                legend:{
                    data: ['社会工资与CPI增幅比值','最低工资与城镇低保比值'],
                    bottom:0,
                    leftL:'center',
                    textStyle:{
                        color:'#fff',
                        fontSize:18
                    }

                },
                xAxis: {
                    type: 'category',

                    data: this.props.gct.xdata ? this.props.gct.xdata:[],
                    boundaryGap: false,
                    axisLabel: {
                        align: 'center',
                        interval: 0,
                        fontSize:20,
                        fontFamily: 'Times New Roman,HelveticaNeue',
                        color: 'rgba(234,239,255,0.5)'
                    },
                    axisTick: {
                        alignWithLabel: true,
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)',
                            fontFamily: 'HelveticaNeue',
                            fontWight: 400,
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)'
                        }
                    },
                    splitLine: {
                        show:true,
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '比值',
                    nameTextStyle: {
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'Times New Roman,HelveticaNeue',
                        fontSize: 20,
                        fontWight: 400,
                        align:'right'
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'Times New Roman,HelveticaNeue',
                        fontSize: 20,
                        formatter:`{value}`
                    },
                    boundaryGap: true,
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
                            <p>${name}年</p>
                             <p class="last_p">${data}%</p>
                            <i class="three_i"></i>
                            <i class="four_i"></i>
                            </div>`;
                            return html
                        }
                    }
                },
                series: [{
                    data: this.props.gct.y1data ? this.props.gct.y1data:[],
                    name:'社会工资与CPI增幅比值',
                    type: 'line',
                    symbolSize: 10,
                    itemStyle: {
                        normal: {
                            color: '#FFA102', //改变折线点的颜色
                            lineStyle: {
                                color: '#FFA102' //改变折线颜色
                            }
                        }
                    },
                    areaStyle: { // 设置填充色
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 0.5,
                            colorStops: [
                                { offset: 0, color: 'rgba(220, 141, 9, 1)' }, // 0% 处的颜色

                                { offset: 1, color: 'rgba(220, 141, 9, 0)' } // 100% 处的颜色
                            ],
                            global: false // 缺省为 false
                        }
                    }
                },
                    {
                        data: this.props.gct.y2data ? this.props.gct.y2data : [],
                        name:'最低工资与城镇低保比值',
                        type: 'line',
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                color: 'rgba(48, 133, 249, 1)', //改变折线点的颜色
                                lineStyle: {
                                    color: 'rgba(48, 133, 249, 1)' //改变折线颜色
                                }
                            }
                        },
                        areaStyle: { // 设置填充色
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 0.5,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(48, 133, 249, 1)' }, // 0% 处的颜色

                                    { offset: 1, color:'rgba(48, 133, 249, 0)'} // 100% 处的颜色
                                ],
                                global: false // 缺省为 false
                            }
                        }
                    }
                ]
            };


        return (
            <ReactEcharts option = { option } style = {{ width: '100%', height:'290px' }}></ReactEcharts>
        )
    }
}

export default Line;
