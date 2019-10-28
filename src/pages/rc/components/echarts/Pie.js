import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class Pie extends React.Component {

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
                bottom: 0,
                left: 'center',
                padding: [5, 5, 11, 50]
            },
            grid: {
                left: 0,
                top: 30,
                right: 0,
                bottom: 0
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
                    position: 'outside',
                    color: 'rgba(255,255,255,1)',
                    fontFamily: 'PingFangSC-Regular,PingFangSC',
                    fontSize: 6,
                    fontWight: 70,
                    formatter: `{c} {d}%`,
                },
                labelLine: {
                    normal: {
                        show:true
                    }
                },
                data: [{
                    value: 100,
                    name: '主',
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
                   
                },
                {
                    value: 40,
                    name: '次',
                    itemStyle: {
                        color: '#575A6B',
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

export default Pie;