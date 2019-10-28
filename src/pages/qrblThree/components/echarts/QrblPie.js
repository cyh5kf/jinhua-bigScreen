import React, { PureComponent } from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
import ReactEcharts from 'echarts-for-react'


class QrblBar extends PureComponent {

  render () {
    const datas = this.props;
    const colorList = ['#0092F7', '#28C286', '#F146A9'];
    let option = {};
    if (datas) {
      option = {
        title: [{
          show: true,
          text: datas.title,
          x: 'center',
          top: 'bottom',
          left: 'center',
          textStyle: {
            color: "rgba(127, 175, 246, 1)",
            fontWeight: 400,
            fontSize: 24,
            fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
          }
        }],
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/> {b}: {c}%"
        },
        // grid: {
        //   top: 0,
        //   left: 60,
        //   right: 60,
        //   bottom: 60,
        //   containLabel: true
        // },
        legend: {
          data: [],
          left: 'right',
          textStyle: {
            color: '#adc3e4'
          },
          icon: 'roundRect',
          itemWidth: 14
        },
        series: [
          {
            curId: '',
            type: 'pie',
            name: '',
            radius: ['30%', '50%'],
            center: ['50%', '50%'],
            data: datas.seriesData,
            labelLine: {
              normal: {
                show: true,
                length: 0,
                length2: 76,
              }
            },
            label: {
              normal: {
                formatter: function (params) {
                  var str = '';
                  switch (params.name) {
                    case '女性': str = `{a|${params.value}%}\n{c|${params.name}}`; break;
                    case '男性': str = `{b|${params.value}%}\n{c|${params.name}}`; break;
                    case '无要求': str = `{b|${params.value}%}\n{c|${params.name}}`; break;
                  }
                  return str
                },
                padding: [-60, -68],
                rich: {
                  a: {
                    fontSize: 24,
                    color: "#fff",
                    align: 'left',
                    padding: [-5, 10, 0, 0],
                    fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                  },
                  b: {
                    fontSize: 24,
                    color: "#fff",
                    align: 'right',
                    padding: [-5, 10, 0, 0],
                    fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                  },
                  c: {
                    fontSize: 24,
                    align: 'left',
                    padding: [-5, 10, 10, 0],
                    color: "rgba(127, 175, 246, 1)",
                    fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
                  }
                }
              }
            },
            startAngle: 300,
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
          }
        ]
      };
    }

    return (
      // <div id={curId} style={{ 'width': '100%', 'height': height }}></div>
      <ReactEcharts option={option} style={this.props.style}></ReactEcharts>
    )
  }
}

export default QrblBar
