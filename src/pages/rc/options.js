import echarts from "echarts";
import { Axis } from "highcharts";

const itemStyle = {
  color: "rgba(221, 165, 28, 0.1)",
  borderColor: "rgba(221, 165, 28, 1)",
  borderWidth: 1
};
export const barOpt = {
  xAxisData: ["2018", "2019", "2020", "2021", "2022"],
  datas: [
    {
      type: "bar",
      data: [
        1490,
        1690,
        {
          value: 1890,
          itemStyle
        },
        {
          value: 1990,
          itemStyle
        },
        {
          value: 2090,
          itemStyle
        }
      ]
    }
  ],
  option: {
    theme: "yellow",
    type: "bar",
    title: {
      text: "按年份",
      left: '2%',
      textStyle: {
        color: "#7FAFF6",
        fontSize: 24,
        fontWeight: "normal"
      }
    },
    grid: {
      left: "15%",
      top: '25%',
      right: "15%",
      bottom: '10%'
    },
    xAxis: {
      name: "年份",
      nameTextStyle: {
        fontSize: 14
      },
      axisLabel: {
        fontSize: 16
      }
    },
    yAxis: {
      minInterval: 1000
    }
  }
};

export const collegeStdPieOpt = {
  datas: [
    {
      type: "pie",
      radius: ["35%", "55%"],
      data: [
        {
          value: 30,
          name: "本科30%"
        },
        {
          value: 25,
          name: "大专25%"
        },
        {
          value: 25,
          name: "高中及以下25%"
        },
        {
          value: 15,
          name: "硕士15%%"
        },
        {
          value: 5,
          name: "博士5%"
        }
      ],
      label: {
        normal: {
          show: true
        }
      },
      labelLine: {
        normal: {
          show: true
        }
      }
    }
  ],
  option: {
    type: "pie",
    theme: "pure",
    title: {
      text: "学历\n构成",
      left: "center",
      top: "center",
      textStyle: {
        fontSize: 16,
        color: "#7FAFF6",
        lineHeight: 18
      }
    },
    legend: {
      show: false
    }
  }
};

export const heighLightOpt = {
  datas: [
    {
      type: "pie",
      radius: ["70%", "90%"],
      data: [
        {
          value: 97.13,
          name: "满意",
          label: {
            normal: {
              show: true,
              formatter: "{c}%",
              fontSize: 14,
              color: "#fff"
            }
          }
        },
        {
          value: 2.87,
          name: "不满意"
        }
      ]
    }
  ],
  option: {
    type: "pie",
    color: ["#0469E5", "#00F0FF"],
    legend: {
      show: false
    },
    grid: {
      top: -300
    }
  }
};

const item1Style = {
  color: "rgba(52,67,107, 0.1)",
  borderColor: "rgba(96,193,251, 0.5)",
  borderWidth: 1
};

export const collegeStdBarOpt = {
  xAxisData: ["2018", "2019", "2020", "2021", "2022"],
  datas: [
    {
      type: "bar",
      data: [
        50,
        60,
        {
          value: 70,
          itemStyle: item1Style
        },
        {
          value: 80,
          itemStyle: item1Style
        },
        {
          value: 90,
          itemStyle: item1Style
        }
      ]
    }
  ],
  option: {
    type: "bar",
    title: {
      text: "按年份",
      // left: '5%',
      textStyle: {
        color: "#7FAFF6",
        fontSize: 24,
        fontWeight: "normal"
      }
    },
    grid: {
      left: "15%",
      top: '30%',
      right: "15%",
      bottom: '10%'
    },
    xAxis: {
      name: "年份",
      nameTextStyle: {
        fontSize: 14
      },
      axisLabel: {
        fontSize: 16
      }
    },
    yAxis: {
      name: "%",
      nameTextStyle: {
        align: "right"
      },
    }
  }
};

const data = [
  { value: 33, name: "初级" },
  { value: 22, name: "中级" },
  { value: 11, name: "高级" }
];

export const professFunnelOpt = {
  datas: [
    {
      name: "预期",
      type: "funnel",
      left: "25%",
      top: "5%",
      bottom: "15%",
      width: "60%",
      sort: "ascending",
      label: {
        normal: {
          position: "left",
          textStyle: {
            fontSize: 16
          }
        },
        emphasis: {
          position: "inside",
          formatter: "{b}预期: {c}%"
        }
      },
      labelLine: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          opacity: 1
        }
      },
      data: data
    },
    {
      name: "实际",
      type: "funnel",
      left: "25%",
      top: "5%",
      bottom: "15%",
      width: "60%",
      maxSize: "100%",
      sort: "ascending",
      itemStyle: {
        normal: {
          opacity: 0.5,
          borderColor: "#fff",
          borderWidth: 2
        }
      },
      data: data
    }
  ],
  option: {
    type: "funnel",
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#4394FF"
        },
        {
          offset: 1,
          color: "#fff"
        }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#4394FF"
        },
        {
          offset: 1,
          color: "#4394FF"
        }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#2765FF"
        },
        {
          offset: 1,
          color: "#4394FF"
        }
      ])
    ],
    textStyle: {
      fontSize: 14,
      color: "white"
    }
  },
  option1: {
    type: "funnel",
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#DDA51C"
        },
        {
          offset: 1,
          color: "#E4D626"
        }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#DA9318"
        },
        {
          offset: 1,
          color: "#DDA51C"
        }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#D98C16"
        },
        {
          offset: 1,
          color: "#DA9318"
        }
      ])
    ],
    textStyle: {
      fontSize: 14,
      color: "white"
    }
  }
};

export const parentBoxStyle = (height, width) => {
  return { height: height || 200, width: width || "100%" };
};

export const rankData = {
  num: "500",
  numunit: "人",
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: "11"
};

export const rank1Data = {
  num: "1.63",
  numunit: "人",
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: "11"
};

export const rank2Data = {
  num: "97.13",
  numunit: "人",
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: "11"
};

export const rankDataPercent = {
  num: "90.13",
  numunit: "%",
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: "11"
};

export const rankDataNoUnit = {
  num: "90.13",
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: "11"
}

export const titleData = {
  num: "2090",
  numunit: "人",
  year: "2019年",
  percent: "7.0",
  icon: "arrow-up",
  rank: "3",
  total: "11"
};

export const title1Data = {
  num: "65",
  numunit: "%",
  percent: "6.0",
  icon: "arrow-up"
};
export const gridData = {
  category: "A类",
  num: "11",
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: "10"
};
export const grid1Data = {
  category: "B类",
  num: "11",
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: "10"
};
export const grid2Data = {
  category: "C类",
  num: "11",
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: "10"
};
export const grid3Data = {
  category: "D类",
  num: "11",
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: "10"
};
export const itemGridData = {
  num: 1.72,
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: 11
};
export const itemGrid1Data = {
  num: 10,
  numunit: "项",
  percent: "6.0",
  icon: "arrow-up",
  rank: "3",
  total: 11
};

export const mapData = [
  {
    name: "东阳市",
    data: {
      企业数: 89,
      劳动关系指数: 95.13,
      受影响企业个数: 23,
      受影响员工: 45400,
      平均减征金额: 86459
    },
    value: 95.13,
    val: [120.24191, 29.28946, 95.13]
  },
  {
    name: "义乌市",
    data: {
      企业数: 89,
      劳动关系指数: 90.48,
      受影响企业个数: 23,
      受影响员工: 45400,
      平均减征金额: 86459
    },
    value: 90.48,
    val: [120.07468, 29.30558, 90.48]
  },
  {
    name: "兰溪市",
    data: {
      企业数: 89,
      劳动关系指数: 92.26,
      受影响企业个数: 23,
      受影响员工: 45400,
      平均减征金额: 86459
    },
    value: 92.26,
    val: [119.46051, 29.20838, 92.26]
  },
  {
    name: "婺城区",
    data: {
      企业数: 89,
      劳动关系指数: 93.58,
      受影响企业个数: 23,
      受影响员工: 45400,
      平均减征金额: 86459
    },
    value: 93.58,
    val: [119.5715, 29.08624, 93.58]
  },
  {
    name: "武义县",
    data: {
      企业数: 89,
      劳动关系指数: 87.34,
      受影响企业个数: 23,
      受影响员工: 45400,
      平均减征金额: 86459
    },
    value: 87.34,
    val: [119.81651, 28.8926, 87.34]
  },
  {
    name: "永康市",
    data: {
      企业数: 89,
      劳动关系指数: 90.74,
      受影响企业个数: 23,
      受影响员工: 45400,
      平均减征金额: 86459
    },
    value: 90.74,
    val: [120.04731, 28.88851, 90.74]
  },
  {
    name: "浦江县",
    data: {
      企业数: 89,
      劳动关系指数: 91.14,
      受影响企业个数: 23,
      受影响员工: 45400,
      平均减征金额: 86459
    },
    value: 91.14,
    val: [119.89206, 29.45251, 91.14]
  },
  {
    name: "磐安县",
    data: {
      企业数: 89,
      劳动关系指数: 97.23,
      受影响企业个数: 23,
      受影响员工: 45400,
      平均减征金额: 86459
    },
    value: 97.23,
    val: [120.45022, 29.05403, 97.23]
  },
  {
    name: "金东区",
    data: {
      企业数: 89,
      劳动关系指数: 92.79,
      受影响企业个数: 23,
      受影响员工: 45400,
      平均减征金额: 86459
    },
    value: 92.79,
    val: [119.69311, 29.09914, 92.79]
  }
];
