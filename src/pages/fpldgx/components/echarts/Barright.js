import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class Barright extends React.Component {

    render() {
        const datas = this.props.gct;
        datas.ydata = datas.ydata.map(item =>
            item !== 0 ? +(Math.log(item) / Math.log(10000)): 0
        )
        let option = {};
        if (datas) {
            option = {
                textStyle: {
                    fontSize: 14
                },
                title: {
                  text:this.props.title?this.props.title:"",
                    textStyle: {
                        color: "rgba(127,175,246,1)", 
                        fontFamily: 'PingFangSC-Regular,PingFangSC',
                        fontSize: 24,
                        fontWeight:500,

                    },
                    padding: [5, 5, 11, 0]
                },
                grid: {
                    left:0,
                    top: 40,
                    right: 30,
                    bottom: 80
                },
                xAxis: {
                    type: 'category',
                    // data: ['三电', '充电桩', '汽车设计', '汽车租赁共享'],
                    data: datas.xdata,
                    boundaryGap: true,
                    axisLabel: {
                        align: 'left',
                        interval: 0,
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'PingFangSC-Regular,PingFangSC',
                        fontSize: 14,
                        rotate: -60
                    },
                    axisTick: {
                        alignWithLabel: false,
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)',
                            fontFamily: 'HelveticaNeue',
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
                    type:'value',
                    //logBase:10000,
                    // name: '预警指数',
                    nameTextStyle: {
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'PingFangSC-Regular,PingFangSC',
                        fontSize: 14,
                        fontWight: 400
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show:false,
                        color: 'rgba(234,239,255,0.5)',
                        fontFamily: 'HelveticaNeue',
                        fontSize: 14,
                        fontWight:400
                    },
                    splitLine: {
                        show:false,
                        lineStyle: {
                            color: 'rgba(255,251,234,0.1)'
                        }
                    }
                },
                tooltip: {
                    show: true,
                    // position: 'top',
                    backgroundColor: '#0C1F5B',
                    padding: 0,
                    textStyle: {
                        color: 'rgba(255,255,255,1)',
                        fontFamily: 'PingFangSC-Regular,PingFangSC',
                        fontSize: 14,
                        fontWight: 400,
                    },
                    // hideDelay: 9999999999,
                    // formatter: `{b}</br>{c},`
                    formatter: params => {
                        //console.log('11111111111111111',params);
                        if (params.data) {
                            const data = params.data
                            const name = params.name
                            let html = `<div class="line_hint_box">
                            <i class="one_i"></i>
                            <i class="two_i"></i>
                            <p>${name}</p>
                             <p class="last_p">${Math.pow(Math.E,data*Math.log(10000)).toFixed(0)}${datas.unit}</p>
                            <i class="three_i"></i>
                            <i class="four_i"></i>
                            </div>`;
                            return html
                        }
                    }
                },
                series: [{
                    // data: [14, 18, 16, 20],
                    data: datas.ydata,
                    type: 'bar',
                    barWidth: '15',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: this.props.color ? this.props.color[0]:'#E0F2FF'
                            }, {
                                offset: 0.1,
                                    color: this.props.color ? this.props.color[1] :'#56B6FF'
                            }, {
                                offset: 1,
                                    color: this.props.color ? this.props.color[2] :'#235EFF'
                            }]),
                            barBorderRadius: [10, 10, 0, 0]
                        }
                    }
                }]
            };
        }

        return (
            <ReactEcharts option={option} style={this.props.style}></ReactEcharts>
        )
    }
}

export default Barright;
