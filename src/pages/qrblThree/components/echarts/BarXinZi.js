import React, { PureComponent } from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'


class BarXinZi extends PureComponent {

  render () {
    const datas = this.props;
    let option = {};
    if (datas) {
      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: [],
          left: 'right',
          textStyle: {
            color: '#fff'
          },
          icon: 'roundRect',
          itemWidth: 14
        },
        grid: {
          top: 36,
          left: 0,
          right: 60,
          bottom: 0,
          containLabel: true
        },
        yAxis: [
          {
            curId: "",
            name: datas.yNamne,
            nameTextStyle: {
              color: 'rgba(234, 239, 255, 0.5)',
              fontFamily: 'HelveticaNeue',
              fontSize: 20,
              align: 'right',
            },
            nameGap: 15,
            nameLocation: 'end',
            type: 'category',
            boundaryGap: true,
            data: datas.yAxis,
            axisTick: {
              show: false,
              alignWithLabel: true
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#376aa8",
                opacity: 0
              }
            },
            axisLabel: {
              interval: 0,
              color: "rgba(234, 239, 255, 0.5)",
              fontSize: 20,
              fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
              margin: 8,
            },
          }
        ],
        xAxis: [
          {
            show: false,
            min: datas.min,
            max: datas.max,
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: 5,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(0, 104, 159, 1)'
                },
                {
                  offset: 0.5,
                  color: 'rgba(24, 212, 255, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(210, 252, 255, 1)'
                }]),
                barBorderRadius: 5,
                shadowBlur: 4,
                shadowColor: 'rgba(7, 161, 255, 1)'
              }
            },
            label: {
              show: true,
              position: 'right',
              distance: 10,
              color: "rgba(234, 239, 255, 0.5)",
              fontSize: 20,
              fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
            },
            data: datas.seriesData,
            markLine: {
              symbol: 'emptyCircle',
              symbolSize: 10,
              precision: 2,
              label: {
                show: false,
                position: 'end',
                formatter: '平均：{c}元'
              },
              lineStyle: {
                color: 'rgba(0, 240, 255, 1)',
                type: 'solid'
              },
              data: [{
                name: "平均",
                type: 'average',
              }]
            }
          }
        ]
      };
    }

    return (
      <ReactEcharts option={option} style={this.props.style}></ReactEcharts>
    )
  }
}

export default BarXinZi
