import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import titleFont from './constant'

class Bar extends React.Component {

    render() {
        const datas = this.props.gct;
        let option = {};
        if (datas) {
            option = {
                textStyle: {
                    fontSize: 14
                },
                title: {
                    text: '重点行业人才贡献率--新能源汽车',
                    textStyle: {
                        color: '#7FAFF6',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        // fontSize: 16,
                        fontSize: titleFont,
                        fontWeight: 'normal',
                    },
                    padding: [5, 5, 11, 0]
                },
                grid: {
                    // left: '10%',
                    top: 40,
                    right: 0,
                    bottom: 30
                },
                xAxis: {
                    type: 'category',
                    // data: ['三电', '充电桩', '汽车设计', '汽车租赁共享'],
                    data: datas.xdata,
                    boundaryGap: true,
                    axisLabel: {
                        align: 'center',
                        interval: 0,
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 14,
                    },
                    axisTick: {
                        alignWithLabel: true,
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)',
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
                    // name: '预警指数',
                    nameTextStyle: {
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 14,
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
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 14,
                        formatter: `{value} ${datas.unit}`
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
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 14,
                        fontWeight: 400,
                    },
                    formatter: `{b}:{c}${datas.unit}`
                },
                series: [{
                    // data: [14, 18, 16, 20],
                    data: datas.ydata,
                    type: 'bar',
                    barWidth: '12',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#E0F2FF'
                            }, {
                                offset: 0.1,
                                color: '#56B6FF'
                            }, {
                                offset: 1,
                                color: '#235EFF'
                            }]),
                            barBorderRadius: [10, 10, 0, 0]
                        },
                    }
                }]
            };
        }

        return (
            <ReactEcharts option={option} style={{ width: '100%', height: 180 }}></ReactEcharts>
        )
    }
}

export default Bar;
