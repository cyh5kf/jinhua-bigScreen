export const lineData0 = {
  xAxisData: [],
  datas: [
    {
      type: 'line',
      color: 'rgba(255, 161, 2, 1)',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255, 161, 2, 1)' // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(4, 12, 51, 0)' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
        // color: ['rgba(255, 161, 2, 1)', 'rgba(104, 71, 32, 1)', 'rgba(4, 12, 51, 0)']
      },
      label: { show: true },
      data: []
    },
    {
      type: 'line',
      lineStyle: {
        normal: {
          color: '#055CD2',
          width: 1,
          type: 'dotted'
        }
      },
      label: { show: true },
      data: []
    }
  ],
  option: {
    type: 'line',
    title: {
      text: '支付能力预测',
      left: '0%',
      top: 0,
      textStyle: {
        fontSize: 24,
        color: 'rgba(234, 239, 255, 0.5)',
        fontWeight: 400
      }
    },
    grid: {
      left: '0%',
      top: '45%',
      right: 0,
      bottom: '20%'
    },
    yAxis: { show: false }
  }
};
export const lineData1 = {
  xAxisData: [],
  datas: [
    {
      type: 'line',
      color: 'rgba(255, 161, 2, 1)',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255, 161, 2, 1)' // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(4, 12, 51, 0)' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
        // color: ['rgba(255, 161, 2, 1)', 'rgba(104, 71, 32, 1)', 'rgba(4, 12, 51, 0)']
      },
      label: { show: true },
      data: []
    },
    {
      type: 'line',
      lineStyle: {
        normal: {
          color: '#055CD2',
          width: 1,
          type: 'dotted'
        }
      },
      label: { show: true },
      data: []
    }
  ]
};
export const lineData2 = {
  xAxisData: [],
  datas: [
    {
      type: 'line',
      color: 'rgba(255, 161, 2, 1)',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255, 161, 2, 1)' // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(4, 12, 51, 0)' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
        // color: ['rgba(255, 161, 2, 1)', 'rgba(104, 71, 32, 1)', 'rgba(4, 12, 51, 0)']
      },
      label: { show: true },
      data: []
    },
    {
      type: 'line',
      lineStyle: {
        normal: {
          color: '#055CD2',
          width: 1,
          type: 'dotted'
        }
      },
      label: { show: true },
      data: []
    }
  ]
};

export const pieData0 = [
  {
    value: 0,
    name: '已覆盖',
    label: {
      normal: {
        show: true,
        position: 'center',
        formatter: (a, b, c, d) => a.percent + '%',
        fontSize: 26,
        color: 'white'
      }
    }
  },
  { value: 6, name: '未覆盖' }
];
export const pieData1 = [
  {
    value: 0,
    name: '已覆盖',
    label: {
      normal: {
        show: true,
        position: 'center',
        formatter: (a, b, c, d) => a.percent + '%',
        fontSize: 26,
        color: 'white'
      }
    }
  },
  { value: 54, name: '未覆盖' }
];
export const pieData2 = [
  {
    value: 0,
    name: '已覆盖',
    label: {
      normal: {
        show: true,
        position: 'center',
        formatter: (a, b, c, d) => a.percent + '%',
        fontSize: 26,
        color: 'white'
      }
    }
  },
  { value: 43, name: '未覆盖' }
];
export const pieData3 = [
  {
    value: 0,
    name: '已夯实',
    label: {
      normal: {
        show: true,
        position: 'center',
        formatter: (a, b, c, d) => a.percent + '%',
        fontSize: 26,
      }
    }
  },
  { value: 0, name: '未夯实' }
];
export const configPie = (data, color, title, subtext) => {
  // !!data.length && (data[0].label.normal.color = color ? color[0] : 'white');
  return {
    datas: [
      {
        type: 'pie',
        radius: ['48%', '68%'],
        center: ['35%', '40%'],
        data,
        labelLine: { show: false },
        label: { show: false }
      }
    ],
    option: {
      type: 'pie',
      title: {
        text: title,
        left: 'center',
        bottom: 0,
        textStyle: {
          fontSize: 22,
          color: 'white',
          fontWeight: 'normal',
        }
      },
      color: color,
      legend: {
        orient: 'vertical',
        right: 0,
        top: '25%',
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
          color: 'white'
        }
      }
    }
  };
};

export const leftListData = [
  { label: '收入', value: 0 },
  { label: '支出', value: 0 },
  { label: '结余', value: -0 },
  { label: '累计结余', value: 0 }
];
export const leftListData2 = [
  { label: '收入', value: 0 },
  { label: '支出', value: 0 },
  { label: '结余', value: 0 },
  { label: '累计结余', value: 0 }
];
export const leftListData3 = [
  { label: '收入', value: 0 },
  { label: '支出', value: 0 },
  { label: '结余', value: 0 },
  { label: '累计结余', value: 0 }
];

export const barLeft = {
  xAxisData: ['国有企业', '港澳台企业', '私营企业', '外商企业', '其他'],
  datas: [
    {
      type: 'bar',
      data: []
    }
  ],
  option: {
    title: {
      text: '元',
      top: 7,
      left: '10%',
      textStyle: {
        fontSize: 20,
        color: 'rgba(234, 239, 255, 0.5)',
        fontWeight: 400
      }
    },
    grid: {
      left: '15%',
      top: '18%',
      right: '5%',
      bottom: '25%'
    },
    xAxis: { axisLabel: { rotate: -30, fontSize: 18 } }
  }
};

const sbfOption = {
  option: {
    yAxis: {
      interval: 2000
    }
  }
}

export const barRight = {
  xAxisData: ['国有企业', '港澳台企业', '私营企业', '外商企业', '其他'],
  datas: [
    {
      type: 'bar',
      data: [48, 55, 1294, 15, 5790],
      label: {
        normal: {
          show: true,
          position: 'top',
          color: '#18F0FF',
          fontSize: 18
        }
      }
    }
  ],
  option: { ...barLeft.option, ...sbfOption.option, title: { ...barLeft.option.title, text: '家' } }
};

// '#54F9FF' '#00BFCB'
export const getLiquid = function(colorStart, colorEnd, colorBg, value) {
  // xAxisData: ['1', '2', '3', '4', '5'],
  return {
    datas: [
      {
        animation: false,
        type: 'liquidFill',
        data: [value * 4],
        backgroundStyle: {
          color: colorBg
        },
        label: {
          normal: {
            color: '#fff',
            show: true,
            textStyle: {
              fontSize: 40
            },
            formatter: function() {
              return `${value * 100}`;
            }
          }
        },
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: colorStart // 0% 处的颜色
              },
              {
                offset: 1,
                color: colorEnd // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        ],
        outline: {
          show: true,
          borderDistance: 2,
          itemStyle: {
            borderWidth: 3,
            borderColor: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: colorStart // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: colorEnd // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          }
        }
      }
    ]
  };
};
