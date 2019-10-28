import React from 'react'
import ReactEcharts from 'echarts-for-react'

class LineRenShi extends React.Component {

    render() {
        let option = {
            title: {
                text: '劳动人事争议调解仲裁结案率',
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
                top: 50,
                right: 0,
                bottom: 20
            },
            xAxis: {
                type: 'category',
                data: ['2015', '2016', '2017', '2018', '2019'],
                boundaryGap: true,
                axisLabel: {
                    align: 'center',
                    interval: 0,
                    color: 'rgba(234,239,255,0.5)'
                },
                axisTick: {
                    alignWithLabel: true,
                    lineStyle: {
                        color: 'rgba(255,251,234,0.1)',
                        fontFamily: 'HelveticaNeue',
                        fontSize: 12,
                        fontWight: 400,
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
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                boundaryGap: true,
                splitLine: {
                    show: false
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
                    fontWight: 400,
                },
                formatter: {}
            },
            series: [{
                data: [80, 60, 55, 70, 50],
                type: 'line',
                lineStyle: {
                    color: '#FF6500'
                },
                itemStyle: {
                    color: '#FF6500'
                }
            }]
        };
        return (
            <ReactEcharts option={option} style={{ width: '48%', height: 120 }}></ReactEcharts>
        )
    }
}

export default LineRenShi;