import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class Pie extends React.Component {


    render() {
        const option = {
            title: {
                text: this.props.title?this.props.title:'',
                textStyle: {
                    color: '#7FAFF6',
                    fontFamily: 'PingFangSC-Regular,PingFangSC',
                    fontSize: 14,
                    fontWight: 'normal',
                },
                // left:'center',
                top:6,


            },
            grid: {
                left: 10,
                top: 112,
                right: 10

            },
            xAxis: {
                type:'value',
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
                data: [''],

                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    fontSize: "14",
                    fontFamily: "PingFangSC- Regular, PingFangSC",
                    fontWeight: "400",
                    color: "rgba(101, 107, 133, 1)"

                }
            },
           
            series: [
                
                {
                    type: 'bar',
                    stack: '总量',
                    barWidth: '7',
                     label: {
                        normal: {
                            show: true,
                            position: ['305', '0'],
                            color: '#E0F2FF',
                           formatter: prams=>{
                               return 96+0+'%'
                           }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: this.props.colorA ? this.props.colorA:''
                            }, {
                                offset: 0.8,
                                    color: this.props.colorB ? this.props.colorB : ''
                            }, {
                                offset: 1,

                                    color: this.props.colorC ? this.props.colorC : ''
                            }]),
                            barBorderRadius: [10, 10, 10, 10]
                        }
                    },
                    data: this.props.val ? this.props.val : []
                },
                { // For shadow
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {  
                           // color: '#595E67',
                           color:'#fff',
                            barBorderRadius: [0, 10, 10, 0]
                      

                    },
                   
                    barWidth: '7',

                    data: this.props.other ? this.props.other : []
                },
            ]
        };

        return (
            <ReactEcharts option={option} style={{ width: '95%',height:'150px',position:'absolute',top:'30px'}}></ReactEcharts>
        )
    }
}

export default Pie;