import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class Pie extends React.Component {

    render() {
        let option = {
            title: {
                show: true,
                text: '服务满意度',
                bottom: 0,
                left: 'center',
                textStyle: {
                    color: '#7FAFF6',
                    fontFamily: 'PingFangSC-Regular,PingFangSC',
                    fontSize: 14,
                    fontWight: 'normal',
                },
                padding: [5, 5, 11, 0]
            },
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            },
            tooltip: {
                show: false,
                backgroundColor: '#0C1F5B',
                padding: 8,
                textStyle: {
                    color: 'rgba(255,255,255,1)',
                    fontFamily: 'PingFangSC-Regular,PingFangSC',
                    fontSize: 14,
                    fontWight: 400,
                },
                formatter: {}
            },
            series: [{
                type: 'pie',
                center: ['50%', '38%'],
                radius: ['55%', '65%'],
                clockwise: false,
                hoverAnimation: false,
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    color: 'rgba(255,255,255,1)',
                    fontFamily: 'PingFangSC-Regular,PingFangSC',
                    fontSize: 18,
                    fontWight: 500,
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 500
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 100,
                    name: '100%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#D25E0C'
                            }, {
                                offset: 1,
                                color: '#E9ED2D'
                            }]),
                            borderRadius: [10, 10, 0, 0]
                        },
                    },
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 18,
                                fontWeight: 500
                            }
                        }
                    },
                },
                {
                    value: 0,
                    itemStyle: {
                        color: 'rgba(255, 255, 255, 0.04)',
                        fontFamily: 'PingFangSC-Regular,PingFangSC',
                        fontSize: 14,
                        fontWight: 400,
                    },
                }
                ]
            }]
        };
        return (
            <ReactEcharts option={option} style={{ width: '100%', height: 120 }}></ReactEcharts>
        )
    }
}

export default Pie;