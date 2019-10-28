import React from 'react'
import ReactEcharts from 'echarts-for-react'

class Line extends React.Component{

    render() {
        const datas = this.props.JYCY_ZMMY;
        let option ={};
        if (datas) {
            option = {
                title: {
                    text: datas.title,
                    textStyle: {
                        color: '#7FAFF6',
                        fontFamily: 'PingFangSC-Regular,PingFangSC',
                        fontSize: 14,
                        fontWight: 'normal',
                    },
                    padding: [5, 5, 11, 0]
                },
                grid: {
                    // left: '7%',
                    top: 60,
                    right: 0,
                    bottom: 30
                },
                xAxis: {
                    type: 'category',
                    data: datas.xdata,
                    // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                    name: '预警指数',
                    nameTextStyle: {
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'PingFangSC-Regular,PingFangSC',
                        fontSize: 12,
                        fontWight: 400,
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
                    },
                    boundaryGap: true,
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)'
                        }
                    }
                },
                tooltip: {
                    show: true,
                    confine: true,
                    backgroundColor: '#0C1F5B',
                    padding: 0,
                    textStyle: {
                        color: 'rgba(255,255,255,1)',
                        fontFamily: 'PingFangSC-Regular,PingFangSC',
                        fontSize: 14,
                        fontWight: 400,
                    },
                    // hideDelay: 9999999999,
                    formatter: params => {
                        let dec = datas.ydata[params.dataIndex].dec;
                        if (dec.length >0 && dec.indexOf(':')) {
                            dec = dec.split(':');
                        }
                        let html = `<div class="line_hint_box">
                     <i class="one_i"></i>
                     <i class="two_i"></i>
                     <p>${params.name}:${params.data}</p>
                     <div class="dec">
                        <p>${dec[0] ? dec[0] : ''}</p>
                        <p>${dec[1] ? dec[1]: ''}</p>
                     </div>
                     <i class="three_i"></i>
                     <i class="four_i"></i>
                    </div>`;
                        return html
                    }
                },
                series: [{
                    // data: [200, 200, 200, 300, 250, 160, null, null, null, null, null, null],
                    data: datas.yVal,
                    type: 'line',
                    lineStyle: {
                        color: '#FFA102'
                    },
                    areaStyle: { // 设置填充色
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                { offset: 0, color: '#FFA102' }, // 0% 处的颜色
                                { offset: 0.02, color: '#684720' }, // 2% 处的颜色
                                { offset: 1, color: '#040C33' } // 100% 处的颜色
                            ],
                            global: false // 缺省为 false
                        }
                    }
                }, 
                    /* {
                        // data: [null, null, null, null, null, 160, 188, 210, 320, 220, 200, 200],
                        data: datas.ydata,
                        type: 'line',
                        lineStyle: {
                            type: 'dotted',
                            color: '#055CD2'
                        }
                    } */
                ]
            };
        }
        
        return (
            <ReactEcharts option = { option } style = {{ width: '100%', height: 200 }}></ReactEcharts>
        )
    }
}

export default Line;