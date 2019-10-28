import React from "react";
import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import mapData from "./jinhuaJson";
import pingC from "./img/qit.jpg";
import jinC from "./img/jin.png";
import yinC from "./img/yin.png";
import tongC from "./img/tong.png";
import PropTypes from "prop-types";

class Jinhua2d extends React.Component {
  static defaultProps = {
    isTooltipShow: true,
    ldgxOption: {
      textSize: 14,
      textLineheight: 18,
      numSize: 18,
      numLineheight: 22,
    }
  };
  componentDidMount() {
    echarts.registerMap("jinhua", mapData);
  }

  render() {

    const datas = this.props.jhldgx;
    const { isTooltipShow, ldgxOption } = this.props;
    const sortData = datas.sort((a, b) => {
      return b.value - a.value;
    });
    const data_top3s = sortData.slice(0, 3),
      scatter_datas = sortData.slice(3);
    let data_top3 = [],
      scatter_data = [];
    data_top3s.map((it, index) => {
      let img =
        index === 0
          ? `image://${jinC}`
          : index === 1
          ? `image://${yinC}`
          : `image://${tongC}`;
      let color1 = "",
        color2 = "";
      if (index === 0) {
        color1 = "#FFA705";
        color2 = "#E5DB28";
      } else if (index === 1) {
        color1 = "#C5C5C5";
        color2 = "#FBFBFB";
      } else {
        color1 = "#B5866A";
        color2 = "#F4CEA9";
      }
      let va = {
        name: it.name,
        value: it.val,
        data: it.data,
        symbol: img,
        label: {
          position: "top",
          // color: color1,
          // fontSize: 16,
          formatter: ((name, value) => {
            return [`{a|${value}}`, `{b|${name}}`].join("\n");
          })(it.name, it.value),
          rich: {
            a: {
              color: color2,
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //     offset: 0,
              //     color: color1
              // }, {
              //     offset: 1,
              //     color: color2
              // }]),
              fontSize: ldgxOption.numSize,
              lineHeight: ldgxOption.numLineheight
            },
            b: {
              color: color1,
              fontSize: ldgxOption.textSize,
              lineheight: ldgxOption.textLineheight,
              align: "center"
            }
          }
        }
      };
      data_top3.push(va);
    });
    scatter_datas.map(it => {
      let va = {
        name: it.name,
        value: it.val,
        data: it.data,
        label: {
          position: "top",
          color: "#fff",
          formatter: ((name, value) => {
            return [`{a|${value}}`, `{b|${name}}`].join("\n");
          })(it.name, it.value),
          rich: {
            a: {
              color: "#fff",
              fontSize: ldgxOption.numSize,
              lineHeight: ldgxOption.numLineheight,
            },
            b: {
              color: "#fff",
              fontSize: ldgxOption.textSize,
              lineHeight: ldgxOption.textLineheight,
              align: "center"
            }
          }
        }
      };
      scatter_data.push(va);
    });
    let option = {};
    if (datas) {
      let vals = datas.map(item => item.value),
        min = Math.min.apply(null, vals),
        max = Math.max.apply(null, vals);
      option = {
        title: [{}],
        tooltip: {
          show: isTooltipShow,
          // position: 'top',
          backgroundColor: "#0C1F5B",
          padding: 0,
          textStyle: {
            color: "rgba(255,255,255,1)",
            fontFamily: "PingFangSC-Regular,PingFangSC",
            fontSize: 14,
            fontWight: 400
          },
          // hideDelay: 9999999999,
          // formatter: `{b}</br>{c},`
          formatter: params => {
              if(params.data) {
                const {name, value} = params.data
                return `<div class="map_jinhua_line_hint_box">
                            <i class="one_i"></i>
                            <i class="two_i"></i>
                            <ul>${name}</br>${value}</ul>
                            <i class="three_i"></i>
                            <i class="four_i"></i>
                        </div>`;
              }
              
          }
        },
        toolbox: {
          show: false
        },
        visualMap: [
          {
            type: "continuous",
            show: false,
            calculable: true,
            seriesIndex: [0],
            text: ["高", "低"],
            min: min,
            max: max,
            range: [0, 100],
            bottom: 0,
            right: 0,
            itemHeight: 250,
            itemWidth: 9,
            orient: "horizontal",
            inverse: true,
            textStyle: {
              color: "#000000",
              // fontSize: 0.16 * scale,
              fontWeight: 300,
              fontFamily: "PingFang Regular"
            },
            inRange: {
              color: [
                "#9cd8ff",
                "#7dd5ff",
                "#5ecbff",
                "#3ec1ff",
                "#1cbffb",
                "#00b2f3",
                "#00a7e4",
                "#0099d1"
              ]
            }
          }
        ],
        geo: [
          {
            map: "jinhua",
            aspectScale: 1,
            roam: false,
            z: 2,
            top: 30,
            left: 200,
            right: 134,
            bottom: 20,
            itemStyle: {
              show: false,
              normal: {
                areaColor: "#0c4c78",
                borderColor: "#0c4c78",
                borderWidth: 0
              },
              emphasis: {
                textStyle: {
                  color: "#ffff63"
                },
                areaColor: "#0c4c78",
                borderColor: "#0c4c78",
                borderWidth: 0
              }
            },
            label: {
              show: false,
              normal: {
                show: false,
                textStyle: {
                  color: "#ffff63",
                  // fontSize: 0.14 * scale,
                  fontWeight: 800,
                  fontFamily: "PingFang Regular"
                }
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#ffff63"
                  // fontSize: 0.16 * scale
                },
                areaColor: "#858f55",
                borderColor: "#ffff63",
                regions: [
                  {
                    // name: that.state.titleValue,
                    itemStyle: {
                      areaColor: "red",
                      color: "red"
                    }
                  }
                ]
              }
            }
          }
        ],
        series: [
          {
            name: "mapData",
            map: "jinhua",
            type: "map",
            top: 30,
            left: 200,
            right: 134,
            bottom: 20,
            aspectScale: 1,
            itemStyle: {
              borderColor: "#00a7e4",
              borderWidth: 2
            },
            label: {
              normal: {
                show: true, // 显示地图label
                textStyle: {
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: 20,
                  fontFamily: "PingFang Regular"
                }
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                },
                // areaColor: '#858f55',
                borderColor: "#ffff63",
                regions: [
                  {
                    // name: that.state.titleValue,
                    itemStyle: {
                      areaColor: "red",
                      color: "red"
                    }
                  }
                ]
              }
            },
            emphasis: {
              itemStyle: {
                areaColor: "#0050ba",
                shadowBlur: 15,
                shadowColor: "#00ccff"
              }
            },
            zlevel: 1,
            data: datas
          },
          /* {
            name: "点",
            type: "scatter",
            // geoIndex: 0,
            coordinateSystem: "geo",
            symbol: `image://${pingC}`,
            // symbol: 'pin',
            symbolSize: [50, 47],
            // symbolOffset: [0, '-50%'],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 9
                },
                formatter(value) {
                  return value.data.value[2];
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#69D1FF" //标志颜色
              }
            },
            zlevel: 6,
            data: scatter_data
          },
          {
            name: "top3",
            type: "scatter",
            // geoIndex: 0,
            coordinateSystem: "geo",
            symbol: `image://${jinC}`,
            // symbol: 'pin',
            symbolSize: [50, 47],
            // symbolOffset: [0, '-50%'],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 9
                },
                formatter(value) {
                  return value.data.value[2];
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#69D1FF" //标志颜色
              }
            },
            zlevel: 6,
            data: data_top3
          } */
        ]
      };
    }

    return (
      <ReactEcharts option={option} style={{ width: "100%", height: "100%" }} />
    );
  }
}

export default Jinhua2d;
