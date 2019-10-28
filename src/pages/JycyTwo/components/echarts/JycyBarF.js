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

class JycyBarF extends PureComponent {
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
    props.hasOwnProperty('seriesData') && (option.series[0].data = props.seriesData)
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
        formatter: function (params) {
          var result = '';
          params.forEach(function (item) {
            var color = "#08e5f4";
            var str = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>'
            result += item.axisValueLabel + "月份：<br>" + str + "新增就业人数" + " : " + item.value;
          });
          return result;
        }
      },
      grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          name: "月份",
          nameTextStyle: {
            color: "#fff",
            fontSize: 15,
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
            color: "#adc3e4",
            fontSize: 15
          }
        }
      ],
      yAxis: [
        {
          name: '',
          nameTextStyle: {
            color: "#fff",
            fontSize: 15,
            padding: [0, 0, 7, 0]
          },
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#7FAFF6",
              opacity: 0
            }
          },
          axisLabel: {
            color: "#adc3e4",
            fontSize: 15
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              opacity: 0.1
            }
          }
        }
      ],
      series: [
        {
          name: '',
          type: 'bar',
          barWidth: 30,
          data: [],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#CDEAFF'
              }, {
                offset: 1,
                color: '#2765FF'
              }]),
              // barBorderRadius: 7, // 统一设置四个角的圆角大小
              barBorderRadius: [15, 15, 0, 0], //（顺时针左上，右上，右下，左下）
            },
          }
        }
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
JycyBarF.propTypes = {}

export default JycyBarF