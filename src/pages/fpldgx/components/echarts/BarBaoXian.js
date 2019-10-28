import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class BarBaoXian extends React.Component {
   

    render() {
      
        var yMax = 4;
        var dataShadow = [];
        var data = this.props.gct.ydata ? this.props.gct.ydata.length:0
       
        for (var i = 0; i < data; i++) {
            dataShadow.push(yMax);
        }
       
        const option = {
            title: {
                text: '',
                textStyle: {
                    color: '#7FAFF6',
                    fontFamily: 'PingFangSC-Regular,PingFangSC',
                    fontSize: 14,
                    fontWight: 200,
                    padding: [25, 5, 11, 40]
                }

               
            },
            grid: {
                left:70,
                top: 10,
                right:75,
                bottom:0
                
            },
            xAxis: {

                axisLabel: {
                    show: false,
                    fontFamily: 'Times New Roman,HelveticaNeue',
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
                data: this.props.gct ? this.props.gct.ydata:[],
               
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
                        interval: 0,
                        fontSize: "18",
                    fontFamily: 'Times New Roman,HelveticaNeue',
                        fontWeight:"400",
                    color: 'rgba(234,239,255,0.5)',
                   
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
                    barWidth: '13',
                    barCategoryGap: '30%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    animation: true,
                    barWidth: '13',
                    label: {
                        normal: {
                        fontSize:'1px',
                            show: true,
                            position: ['410', '0'],
                            color: 'rgba(234,239,255,0.5)',
                           formatter: prams=>{
                               return 96+prams.data+'%'
                           }
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
                    data: this.props.gct.xdata ? this.props.gct.xdata.map(item=>item-96):[]
                }
            ]
        };

        return (
            <ReactEcharts option={option} style={{ width: '100%', height: 245}}></ReactEcharts>
        )
    }
}

export default BarBaoXian;