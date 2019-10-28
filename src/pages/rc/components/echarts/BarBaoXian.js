import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class BarBaoXian extends React.Component {
   

    render() {
        var dataAxis = ['全市', '全市', '全市', '全市', '全市', '全市', '全市', '全市', '全市', '全市', '全市'];
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90];
        var yMax = 500;
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }

        const option = {
            title: {
                text: '劳动关系信访结案率',
                textStyle: {
                    color: '#fff'
                }

               
            },
            xAxis: {

                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                data: dataAxis,
                axisLine: {
                    show: false
                },
                splitLine:{
                    show:false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: { color: '#545A74',
                            barBorderRadius: [10, 10, 10, 10] }
                       
                    },
                    barGap: '-100%',
                    barWidth: '8',
                    barCategoryGap: '40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    barWidth: '8',
                    label: {
                        normal: {
                            show: true,
                            position: ['690', '0'],
                            color: '#E0F2FF',
                           formatter: `{c}%`
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#235EFF'
                            }, {
                                offset: 0.9,
                                color: '#56B6FF'
                            }, {
                                offset: 1,
                                
                                 color: '#E0F2FF'
                            }]),
                            barBorderRadius: [10, 10, 10, 10]
                        }
                    },
                    data: data
                }
            ]
        };

        return (
            <ReactEcharts option={option} style={{ width: '95%', height: 320 }}></ReactEcharts>
        )
    }
}

export default BarBaoXian;