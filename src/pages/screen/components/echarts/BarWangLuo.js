import React from 'react'
import ReactEcharts from 'echarts-for-react'
import titleFont from './constant'

class BarWangLuo extends React.Component {

    render() {
        const datas = this.props.yzcd;
        let option ={};
        if (datas) {
            option = {
                textStyle: {
                    fontSize: 14
                },
                title: {
                    text: '网络信息安全种类及严重程度',
                    textStyle: {
                        color: '#7FAFF6',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        // fontSize: 14,
                        fontSize: titleFont,
                        fontWeight: 'normal',
                    },
                    padding: [5, 5, 11, 0]
                },
                legend: {
                    show: true,
                    right: 0,
                    top: 'middle',
                    orient: 'vertical',
                    itemWidth: 10,
                    itemHeight: 10,
                    data: ['高', '中', '低'],
                    textStyle: {
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 12,
                        fontWeight: 400,
                    }
                },
                grid: {
                    left: 15,
                    top: 50,
                    right: 40,
                    bottom: 80
                },
                xAxis: {
                    type: 'category',
                    // data: ['应用安全风险', '应用安全风险', '应用安全风险', '应用安全风险'],
                    data: datas.xdata,
                    boundaryGap: true,
                    axisLabel: {
                        interval: 0,
                        color: 'rgba(234,239,255,0.5)',
                        rotate: -48,
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 14
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
                    name: '数量',
                    nameTextStyle: {
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 14,
                        fontWeight: 400,
                    },
                    // nameLocation: 'center',
                    // nameRotate: -90,
                    nameGap: 5,
                    axisLine: {
                        show: true
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        interval: 0,
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 12,
                        // formatter: '{value} %'
                    },
                    boundaryGap: true,
                    // minInterval: 100,
                    splitLine: {
                        show: false,
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
                    formatter: {}
                },
                series: [{
                    // name: '低',
                    name: datas.dj[2],
                    // data: [50, 50, 50, 50],
                    data: datas.ydi,
                    type: 'bar',
                    stack: datas.dj[0],
                    // stack:'高',
                    barWidth: '24',
                    label: {
                        show: true,
                        color: 'rgba(249,249,249,1)',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 12,
                        fontWeight: 400,
                    },
                    itemStyle: {
                        normal: {
                            // color: '#3372FF',
                            color: '#11D1DE'
                            // barBorderRadius: [10, 10, 0, 0]
                        },
                    }
                }, {
                    // name: '中',
                    name: datas.dj[1],
                    // data: [50, 50, 50, 50],
                    data: datas.yzhong,
                    type: 'bar',
                    stack: datas.dj[0],
                    // stack: '高',
                    barWidth: '24',
                    label: {
                        show: true,
                        color: 'rgba(249,249,249,1)',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 12,
                        fontWeight: 400,
                    },
                    itemStyle: {
                        normal: {
                            // color: '#3F85FF',
                            color: '#3881FF'
                            // barBorderRadius: [10, 10, 0, 0]
                        },
                    }
                }, {
                    // name: '高',
                    name: datas.dj[0],
                    // data: [50, 50, 50, 50],
                    data: datas.ygao,
                    type: 'bar',
                    stack: datas.dj[0],
                    // stack: '高',
                    barWidth: '24',
                    label: {
                        show: true,
                        color: 'rgba(249,249,249,1)',
                        fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                        fontSize: 12,
                        fontWeight: 400,
                    },
                    itemStyle: {
                        normal: {
                            // color: '#59B1FF',
                            color: '#FF6500'
                            // barBorderRadius: [10, 10, 0, 0]
                        },
                    }
                }]
            };
        }

        return (
            <ReactEcharts option={option} style={{ width: '100%', height: 210 }}></ReactEcharts>
        )
    }
}

export default BarWangLuo;
