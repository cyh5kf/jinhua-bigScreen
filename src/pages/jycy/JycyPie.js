import React, { PureComponent } from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入饼图
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/axis';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/grid';

let scale = ''

class JycyPie extends PureComponent {
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
    if (props.hasOwnProperty('seriesData')) {
      let bl = parseFloat(props.seriesData.a1);
      let bl_ = 100 - bl;
      props.hasOwnProperty('seriesData') && (option.series[0].data[0].value = bl) && (option.series[0].data[1].value = bl_) && (option.title = {
        text: bl + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#ffffff',
          fontSize: '35'
        }
      })
    }
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
      title: {
        text: '80%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#ffffff',
          fontSize: '35'
        }
      },
      series: [
        {
          name: '二次就业率',
          type: 'pie',
          center: ["50%", "50%"],
          radius: ['50%', '70%'],
          startAngle: 220,
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          data: [{
            value: '',
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#07B8F1' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#2765FF' // 100% 处的颜色
                  }]
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            name: '',
          }, {
            value: '',
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#E4D626' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#D98C16' // 100% 处的颜色
                  }]
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
          }]
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
JycyPie.propTypes = {}

export default JycyPie