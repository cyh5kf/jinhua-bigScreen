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
    props.hasOwnProperty('data_yjyx') && (option.series[0].data = props.data_yjyx)
    props.hasOwnProperty('data_lmgg') && (option.series[1].data = props.data_lmgg)
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
    const { curId } = this.props
    // 基于准备好的dom，初始化echarts实例
    this.state.myChart = echarts.init(document.getElementById((this.props.curId || 'main')));
    // 指定图表的配置项和数据
    const option = {
      color: ['#E4D626', '#D98C16'],
      title: {
        text: ''
      },
     tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        // formatter: function (params) {
        //   var result = '';
        //   params.forEach(function (item) {
        //       var color = "#007fff";
        //     var str = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>'
        //       result += item.axisValueLabel + "<br>" + str + " : " + item.value+"万人";
        //   });
        //   return result;
        // }
      },
      grid: {
        left: '28',
        right: '10',
        bottom: '3%',
        containLabel: true,
        top:45
      },
      xAxis: [
        {
          curId: "月份",
          curIdTextStyle: {
            color: "#fff",
            fontSize: 18,
            padding: [0, 0, 4, 0]
          },
          type: 'category',
          // data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
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
            fontSize: 20,
            fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
          }
        }
      ],
      yAxis: [
        {
          curId: '',
          name: '万人',
          nameTextStyle: { fontSize: 18, align: 'right' },

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
          //interval:1,
          splitNumber:3,
          axisLabel: {
            color: "#adc3e4",
            fontSize: 20,
            fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
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
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          lineStyle: {
            color: "#3083F7"
          },
          // data: [0.5, 0.2, 0.5, 0.7, 0.7, 0.6, 0.6, 0.5, 0.50, 0.4],
          data: [],
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#DA9418'
              }, {
                offset: 0.5,
                color: 'rgba(85,182,251, 0.57)'
              }, {
                offset: 0.8,
                color: 'rgba(108,225,245, 0)'
              },
              {
                offset: 1,
                color: 'transparent'
              }
              ], false),
            }
          },
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          lineStyle: {
            color: "#DC8C08"
          },
          // data: [0.3, 0.1, 0.3, 0.5, 0.5, 0.4, 0.4, 0.3, 0.3, 0.2],
          data: [],
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#DA9418'
              }, {
                offset: 0.5,
                color: 'rgba(224,182,31, 0.49)'
              }, {
                offset: 0.8,
                color: 'rgba(228,211,38, 0)'
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
    const { curId, height } = this.props;
    return (
      <div id={curId} style={{ 'width': '100%', 'height': height }}></div>
    )
  }
}
JycyLine.propTypes = {}

export default JycyLine
