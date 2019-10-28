import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class Pieleft extends React.Component {

    render() {


        let option = {
            title: {
                text: this.props.title ? this.props.title : "",
                textStyle: {
                    color: '#7FAFF6',
                    fontFamily: 'PingFangSC-Regular,PingFangSC',
                    fontSize: 14,
                    fontWight: 'normal',
                },
               
                padding: [5, 5, 11, 50]
            },
            grid: {
                left: 0,
                top: 30,
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
            graphic:{
            type: 'text',
                style: {
                    fill:'#fff',
                    text: `全省平均:100%`,
                    x: 60,
                    y: 180,
                   
            }

        },
            series: [{
                type: 'pie',
                center: ['50%', '40%'],
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
                                color: this.props.colorA

                            }, {
                                offset: 0.5,
                                color: this.props.colorB

                            },
                            {
                                offset: 1,
                                color: this.props.colorC

                            }]),
                            borderRadius: [10, 10, 0, 0]
                        },
                    },
                    label: {
                        label: {
                            normal: {
                                show: true,
                                position: 'center'
                            }
                        },
                    },
                },
                {
                    value: 40,
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
            <ReactEcharts option={option} style={this.props.style}></ReactEcharts>
        )
    }
}

export default Pieleft;