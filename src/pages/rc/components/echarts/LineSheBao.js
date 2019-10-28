import React from 'react'
import ReactEcharts from 'echarts-for-react'

class LineSheBao extends React.Component {

    render() {
      
         var echarts = require('echarts')
            let option = {
               
                grid: {
                    // left: '10%',
                    top: 40,
                    right: 0,
                    bottom: 30
                },
                xAxis: {
                    type: 'category',
                    data: [1,2,3,4,5,6,7,8,9,10,11,12],
                   
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
                        interval: 0,
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'HelveticaNeue',
                        fontSize: 12,
                        formatter: `{value}%`
                    },
                    boundaryGap: false,
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: "#0C1F5B",
                    trigger: 'axis',
                    formatter: "月份:{b}月<br/>化解率: {c}%",
                   
                    
                },
                series: [{
                    data: [11,33,44,56,22,45,35,56,77,22,54,66,43],
                    symbol: 'none',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        color: 'rgba(45, 111, 255, 1)'
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