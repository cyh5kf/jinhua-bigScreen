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

class JycyLine extends PureComponent {
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
    props.hasOwnProperty('lineColor') && (option.series[0].lineStyle.color = props.lineColor)
    props.hasOwnProperty('smooth') && (option.series[0].smooth = props.smooth)
    props.hasOwnProperty('yNamne') && (option.yAxis[0].curId = props.yNamne) && (option.series[0].curId = props.yNamne) && (option.yAxis[0].name = props.yNamne)
    props.hasOwnProperty('LinearGradient') && (option.series[0].areaStyle = {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: props.LinearGradient[0]
        }, {
          offset: 0.5,
          color: props.LinearGradient[1]
        }, {
          offset: 0.8,
          color: props.LinearGradient[2]
        },
        {
          offset: 1,
          color: props.LinearGradient[3]
        }
        ], false),
      }
    })
    this.state.myChart.setOption(option);
  }

  //加载图表
  initData = () => {
    const that = this
    const { curId, per } = this.props
    // 基于准备好的dom，初始化echarts实例
    this.state.myChart = echarts.init(document.getElementById((this.props.curId || 'main')));
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
            if (curId == "left_3") {
              var color = "#18c6ff";
            } else if (curId == "middle_2") {
              var color = "#18c6ff";
            } else if (curId == "right_1") {
              var color = "#4ffa92";
            }
            var str = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>'
            if (curId == "left_3") {
              result += item.axisValueLabel + "月份：<br>" + str + "社保参保人数" + " : " + item.value + "万";
            } else if (curId == "middle_2") {
              result += item.axisValueLabel + "月份：<br>" + str + "求人倍率" + " : " + item.value + "%";
            } else if (curId == "right_1") {
              result += item.axisValueLabel + "月份：<br>" + str + "城镇登记失业率" + " : " + item.value + "%";
            }
          });
          return result;
        }
      },
      grid: {
        left: '3%',
        right: '12%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          curId: "月份",
          name: "月份",
          curIdTextStyle: {
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
            fontSize: 15,
          }
        }
      ],
      yAxis: [
        {
          curId: '',
          curIdTextStyle: {
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
            fontSize: 15,
            formatter: per === true ? '{value} %' : '{value}'
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
          curId: '',
          type: 'line',
          smooth: false,
          symbolSize: 0,
          data: [],
          lineStyle: {
            color: '#0067E0'
          },
          itemStyle: {
            color: '#24c9fb'
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#24c9fb'
              }, {
                offset: 0.5,
                color: '#1478b9'
              }, {
                offset: 0.8,
                color: '#06438a04'
              },
              {
                offset: 1,
                color: 'transparent'
              }
              ], false),
            }
          },
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
    const { curId, height, classcurId } = this.props;
    return (
      <div id={curId} classcurId={classcurId} style={{ 'width': '100%', 'height': height }}></div>
    )
  }
}
JycyLine.propTypes = {}

export default JycyLine