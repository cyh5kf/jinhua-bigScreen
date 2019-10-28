import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class BarBaoXian extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let option = {
            title: {
                text: '社会保险费减征绩效 - 有效企业数',
                textStyle: {
                    color: '#7FAFF6',
                    fontFamily: 'PingFangSC-Regular,PingFangSC',
                    fontSize: 14,
                    fontWeight: 'normal',
                },
                padding: [5, 5, 11, 0]
            },
            grid: {
                // left: '10%',
                top: 60,
                right: 10,
                bottom: 70
            },
            xAxis: {
                type: 'category',
                data: ['制造业', '信息及通信技术', '机械领域', '纺织品', '金属行业', '汽车行业', '医疗行业', '金融行业'],
                boundaryGap: true,
                axisLabel: {
                    interval: 0,
                    color: 'rgba(234,239,255,0.5)',
                    rotate: -48
                },
                axisTick: {
                    alignWithLabel: true,
                    lineStyle: {
                        color: 'rgba(255,251,234,0.1)',
                        fontFamily: 'HelveticaNeue',
                        fontSize: 12,
                        fontWeight: 400,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,251,234,0.1)'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '企业数',
                nameTextStyle: {
                    color: 'rgba(234,239,255,0.5)',
                    fontFamily: 'PingFangSC-Regular,PingFangSC',
                    fontSize: 12,
                    fontWeight: 400
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
                    fontFamily: 'HelveticaNeue',
                    fontSize: 12,
                    // formatter: '{value} %'
                },
                boundaryGap: true,
                // minInterval: 100,
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,251,234,0.1)'
                    }
                }
            },
            tooltip: {
                show: true,
                backgroundColor: '#0C1F5B',
                padding: 8,
                textStyle: {
                    color: 'rgba(255,255,255,1)',
                    fontFamily: 'PingFangSC-Regular,PingFangSC',
                    fontSize: 14,
                    fontWeight: 400,
                },
                formatter: {}
            },
            series: [{
                data: [1400, 880, 900, 550, 480, 450, 440, 400],
                type: 'bar',
                barWidth: '12',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            // color: '#FFD99D'
                            color: '#FF6500'
                        }, {
                            offset: 0.1,
                            // color: '#FF9B00'
                            color: '#3881FF'
                        }, {
                            offset: 1,
                            // color: '#BB6317'
                            color: '#11D1DE'
                        }]),
                        barBorderRadius: [10, 10, 0, 0]
                    },
                }
            }]
        };
        return (
            <ReactEcharts option={option} style={{ width: '100%', height: 220 }}></ReactEcharts>
        )
    }
}

export default BarBaoXian;