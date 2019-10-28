import React, { PureComponent } from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/axis';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/grid';

let scale = ''

class QrblBar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      myChart: {},
      nextProps: {}
    }
  }

  componentDidMount () {
    this.initData();
    this.setOption(this.props)
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    this.setOption(nextProps)
  }

  // 组件参数
  setOption = (props) => {
    let option = this.state.myChart.getOption();
    props.hasOwnProperty('xAxis') && (option.xAxis[0].data = props.xAxis)
    props.hasOwnProperty('legend') && (option.legend[0].data = props.legend)
    props.hasOwnProperty('title1') && (option.series[0].name = props.title1)
    props.hasOwnProperty('title2') && (option.series[1].name = props.title2)
    props.hasOwnProperty('seriesData1') && (option.series[0].data = props.seriesData1)
    props.hasOwnProperty('seriesData2') && (option.series[1].data = props.seriesData2)
    props.hasOwnProperty('yNamne') && (option.yAxis[0].curId = props.yNamne) && (option.series[0].curId = props.yNamne) && (option.yAxis[0].name = props.yNamne)
    props.hasOwnProperty('LinearGradient') && (option.series[0].itemStyle = {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: props.LinearGradient[0]
        }, {
          offset: 1,
          color: props.LinearGradient[1]
        }]),
        // barBorderRadius: 7, // 统一设置四个角的圆角大小
        barBorderRadius: [7, 7, 0, 0], //（顺时针左上，右上，右下，左下）
      },
    })
    this.state.myChart.setOption(option);
  }

  //加载图表
  initData = () => {
    const that = this
    const { curId } = this.props
    // 基于准备好的dom，初始化echarts实例
    this.state.myChart = echarts.init(document.getElementById((this.props.curId || 'main')));
    const splitNum = [5, 5, 5, 5, 8, 10]
    // 指定图表的配置项和数据
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b0}<br />{a0}: {c0}人<br />{a1}: {c1}人'
        // formatter: function (params) {
        //   var result = '';
        //   params.forEach(function (item) {
        //     if (curId == "left_2") {
        //       var color = "#40d47f";
        //     } else if (curId == "right_2") {
        //       var color = "#007fff";
        //     } else if (curId == "right_3") {
        //       var color = "#40d47f";
        //     }
        //     var str = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>'
        //     if (curId == "left_2") {
        //       result += item.axisValueLabel + "月份：<br>" + str + "常住人数" + " : " + item.value + "万";
        //     } else if (curId == "right_2") {
        //       result += item.axisValueLabel + "月份：<br>" + str + "新增企业数" + " : " + item.value;
        //     } else if (curId == "right_3") {
        //       result += item.axisValueLabel + "月份：<br>" + str + "个体工商户数" + " : " + item.value;
        //     }
        //   });
        //   return result;
        // }
      },
      grid: {
        left: 0,
        right: 8,
        bottom: 15,
        containLabel: true
      },
      legend: {
        data: [],
        left: 'left',
        textStyle: {
          color: 'rgba(234, 239, 255, 0.5)',
          fontSize: 22,
          fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
        },
        icon: 'rect',
        itemGap: 40,
        itemWidth: 10,
        itemHeight: 10
      },
      xAxis: [
        {
          curId: "",
          name: "",
          curIdTextStyle: {
            color: "rgba(234, 239, 255, 0.5)",
            fontSize: 20,
            padding: [0, 0, 4, 0]
          },
          type: 'category',
          data: [],
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: "#376aa8",
              opacity: 0
            }
          },
          axisLabel: {
            rotate: -60,
            color: "rgba(234, 239, 255, 0.5)",
            fontSize: 20,
            fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
          }
        }
      ],
      yAxis: [
        {
          curId: '',
          name: '',
          splitNumber: 2,
          nameTextStyle: {
            color: 'rgba(234, 239, 255, 0.5)',
            fontFamily: 'HelveticaNeue',
            fontSize: 20,
            align: 'right',
          },
          nameLocation: 'start',
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#7FAFF6",
              opacity: 0,
              fontSize: 20,
            }
          },
          axisLabel: {
            color: "rgba(234, 239, 255, 0.5)",
            fontSize: 20,
            fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              opacity: 0.1
            }
          }
        },
      ],
      series: [
        {
          curId: '',
          type: 'bar',
          name: '',
          barWidth: 11,
          data: [],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#CBE9FF'
              }, 
                {
                  offset: 0.13,
                  color: '#98C9FF'
                },
                {
                  offset: 0.57,
                  color: '#4090FF'
                },
                {
                  offset: 1,
                  color: '#2867FF'
              }]),
              // barBorderRadius: 7, // 统一设置四个角的圆角大小
              barBorderRadius: [7, 7, 0, 0], //（顺时针左上，右上，右下，左下）
            },
          }
        },
        {
          curId: '',
          type: 'bar',
          name: '',
          barWidth: 11,
          data: [],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#FAF8DB'
              }, 
              {
                offset: 0.13,
                color: '#E3CF25'
              },
              {
                offset: 0.57,
                color: '#DCA21B'
              },
              {
                offset: 1,
                color: '#DBAC18'
              }]),
              // barBorderRadius: 7, // 统一设置四个角的圆角大小
              barBorderRadius: [7, 7, 0, 0], //（顺时针左上，右上，右下，左下）
            },
          }
        },
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    this.state.myChart.setOption(option);
    // this.setOption(this.props);
    window.addEventListener('resize', function () {
      that.state.myChart.resize();
    });
    setTimeout(function () {
      that.state.myChart.resize();
    }, 500)
  }

  render () {
    const { curId, height } = this.props;
    return (
      <div id={curId} style={{ 'width': '100%', 'height': height }}></div>
    )
  }
}
QrblBar.propTypes = {}

export default QrblBar
