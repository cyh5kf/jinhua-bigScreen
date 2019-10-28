import React from 'react';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import { yellow } from 'ansi-colors';
import { barDefaultItemOption, liquidFillDefaultItemOption, pieDefaultItemOption, funnelDefaultItemOption } from './chartsOption';
import 'echarts-liquidfill';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.theme = {
      pure: ['#12C66D', '#0469E5', '#FBE53D', '#FFA92E', '#7769CD'],
      blue: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#E2F3FF' // 0% 处的颜色
            },
            {
              offset: 0.2,
              color: '#5ABAFF'
            },
            {
              offset: 1,
              color: '#2460FF' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#E7E72A' // 0% 处的颜色
            },
            {
              offset: 0.2,
              color: '#E0BA20'
            },
            {
              offset: 1,
              color: '#D98916' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
      ],
      yellow: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#E7E72A' // 0% 处的颜色
            },
            {
              offset: 0.2,
              color: '#E0BA20'
            },
            {
              offset: 1,
              color: '#D98916' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#E2F3FF' // 0% 处的颜色
            },
            {
              offset: 0.2,
              color: '#5ABAFF'
            },
            {
              offset: 1,
              color: '#2460FF' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
      ]
    };
    this.state = {
      size: {
        width: '100%',
        height: '90%'
      },

      option: {},
      defaultOption: {
        color: this.theme.blue,
        textStyle: {
          color: 'rgba(234, 239, 255, 0.5)',
          // fontFamily: 'PingFangSC-Regular,PingFangSC',
          fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',
          fontSize: 20
        },
        title: {
          show: true
        },
        grid: {
          // left: '10%',
          top: 40,
          // right: 'auto',
          bottom: 10
        },
        tooltip: {
          show: true
        },
        series: []
      },
      barDefaultOption: {
        xAxis: {
          axisLabel: {
            fontSize: 20
          }
        },
        yAxis: {
          axisLabel: {
            fontSize: 20
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 251, 234, 0.1)'
            }
          }
        }
      },
      lineDefaultOption: {
        xAxis: {
          axisLabel: {
            fontSize: 20
          }
        },
        yAxis: {
          axisLabel: {
            fontSize: 20
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 251, 234, 0.1)'
            }
          }
        }
      },
      pieDefaultOption: {
      },
      liquidFillDefaultOption: {},
      funnelDefaultOption: {
        tooltip: {
          show: false,
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        }
      },
      dataset: {},
      data: {
        xAxisData: [],
        yAxisData: [],
        datas: []
      }
    };
  }
  componentDidMount() {
    this.dataChange();
  }
  componentWillReceiveProps(nextProps) {
    // if (data.hasOwnProperty('datas') && JSON.stringify(nextProps.data.datas) !== JSON.stringify(data.datas)) {
    this.dataChange();
    //   }
  }
  dataChange = () => {
    let { option = {}, data = {} } = this.props;
    let { defaultOption, barDefaultOption } = this.state;
    if (!data.datas) {
      return;
    }
    option.type = option.type || 'bar';
    // 配置 xAxis 数据
    if (option.type === 'bar' || option.type === 'line') {
      option.xAxis = { ...barDefaultOption.xAxis, ...option.xAxis, ...{ data: data.xAxisData } };
      option.yAxis = { ...barDefaultOption.yAxis, ...option.yAxis };
    }
    // 配置主题颜色
    option.theme && (defaultOption.color = this.theme[option.theme]);
    // 配置数据项
    if (option.type === 'bar') {
      defaultOption.series = data.datas.map(item => {
        return {
          ...barDefaultItemOption,
          ...item
        };
      });
    } else if (option.type === 'liquidFill') {
      defaultOption.series = data.datas.map(item => {
        return {
          ...liquidFillDefaultItemOption,
          ...item
        };
      });
    } else if (option.type === 'pie') {
      defaultOption.series = data.datas.map(item => {
        return {
          ...pieDefaultItemOption,
          ...item
        };
      });
    } else if (option.type === 'funnel') {
      defaultOption.series = data.datas.map(item => {
        return {
          ...funnelDefaultItemOption,
          ...item
        };
      });
    } else {
      defaultOption.series = data.datas;
    }
    let chartOpt = Object.assign({}, defaultOption, this.state[`${option.type}DefaultOption`] || {}, option);
    this.setState({
      option: chartOpt
    });
    this.refs.echartsReact.getEchartsInstance().setOption(chartOpt)
  };
  combineBarOption() {}
  /**
   * this.props = {
   *      options: {
   *          type: 'bar',    // 指定图表类型，用于组件内部区分并构建对应图表默认 Option
   *          theme: 'blue/yellow',   // 组件内置两套渐变主题色
   *          ...    // 对应 echarts 图表中各个模块配置。 例: xAxis、legend、tooptip...
   *      },
   *      data: {
   *          xAxisData: [],  // 配置 x 轴数据
   *          datas: [    // 配置对应 echarts series,
   *              {
   *                  type: 'bar',    // 指定图表类型
   *                  data: []    // 数据配置
   *              }
   *          ]
   *      }
   * }
   */
  render() {
    const { size, option } = this.state;

    return <ReactEcharts ref="echartsReact" option={option} style={size}></ReactEcharts>;
  }
}

export default Chart;
