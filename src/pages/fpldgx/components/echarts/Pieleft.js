import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class Pieleft extends React.Component {

    render() {


        let option = {
            textStyle: {
                fontSize: 14
            },
            title: {
                text: this.props.title ? this.props.title : "",
                textStyle: {
                    color: "rgba(127,175,246,1)", 
                    fontFamily: 'PingFangSC-Medium,PingFangSC',
                    fontSize: 24,
                    fontWeight: 500
                },

                padding: [5, 5, 11, 30]
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
                    fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC',
                    fontSize: 14,
                    fontWight: 400,
                },
                formatter: {}
            },
            graphic:{
                elements:[
                    {
                        type: 'text',
                        style: {
                            fill: '#7FAFF6',
                            text: '全省目标值: ',
                            fontWight: 400,
                            font: '20px Times New Roman,PingFangSC- Regular, PingFangSC',
                            x: 20,
                            y: 200,

                        }
                    },
                    {
                    type: 'text',
                    style: {

                      fill: 'rgba(24,240,255,1)',
                        text: this.props.pm,
                        fontWight: 500,
                        font: '30px Times New Roman,PingFangSC- Regular, PingFangSC',
                        x: 130,
                        y: 195,

                    }}
                ]


        },
            series: [{
                type: 'pie',
                center: ['45%', '45%'],
                radius: ['55%', '65%'],
                clockwise: false,
                hoverAnimation: false,
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    color: 'rgba(24,240,255,1)',
                    fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC',
                    fontSize: 30,
                    fontWight: 500,
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize:22,
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
                    value: this.props.otherval,
                    name: this.props.otherval+'%',
                    itemStyle: {

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
                            borderRadius: [10, 10, 10, 10]

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
                    value: this.props.val,
                    itemStyle: {
                        color: 'rgba(255, 255, 255, 0.04)',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC',
                        fontSize: 14,
                        fontWight: 400,
                        borderRadius: [10, 10, 10, 10]

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
