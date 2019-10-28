import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import styles from "../../LeftSide/LeftSide.less";
import Pie from "../../echarts/Pie";
import Chart from "components/Chart/chartComponent";
import up from "../../../../../assets/images/up.svg";
import down from "../../../../../assets/images/down.svg";
import allcity from '../../../../../assets/images/screen/qs.svg';


@connect(({ screencopy, loading }) => ({ screencopy, loading }))
class LeftThird extends PureComponent {
    render() {
        const { screencopy } = this.props;
        const { ZJWQX_CCL, ZJWQX_QXAJFSL = [] } = screencopy;
        const a = "KPI_VALUE";
        const b = "其他";

        let a1 = ZJWQX_CCL.length > 0 ? ZJWQX_CCL[0][a] : 0;
        let b1 = ZJWQX_CCL.length > 0 ? ZJWQX_CCL[0][b] : 0;
        let a2 = ZJWQX_CCL.length > 0 ? ZJWQX_CCL[1][a] : 0;
        let b2 = ZJWQX_CCL.length > 0 ? ZJWQX_CCL[1][b] : 0;

        let value = [];
        value.push(100 - b1);
        let value1 = [];
        value1.push(b1);
        let value2 = [];
        value2.push(100 - b2);
        let value3 = [];
        value3.push(b2);


        const pieOpt = {
            datas: [
                {
                    type: "pie",
                    radius: ["70%", "80%"],
                    color: ["#07B8F1", "rgba(43, 108, 255, 0.1)",],
                    data: [
                        {
                            value: a1 ? a1 * 10 : 0,
                            name: "已达标"
                        },
                        {
                            value: a1 ? 100 - a1 * 10 : 0,
                            name: "未达标"
                        },

                    ]
                },
                {
                    type: "pie",
                    radius: ["55%", "65%"],
                    color: ["#00bd9b", "#031421",],
                    data: [
                        {
                            value: b1 ? b1 * 10 : 0,
                            name: "已抽查"
                        },
                        {
                            value: b1 ? 100 - b1 * 10 : 0,
                            name: "未抽查"
                        }
                    ]
                }
            ],
            option: {
                type: "pie",
                legend: {
                    show: false
                },
                graphic: {
                    elements:[
                        {
                            type: 'text',
                            top: 0,
                            right: 5,
                            style: {
                                text: `${a1}%`,
                                fill: "#00a1f9",
                                font: '25px Times New Roman,PingFangSC-Medium,PingFangSC'

                            }
                        },{
                            type: 'text',
                            top: 25,
                            right: 5,
                            style: {
                                text: `达标`,
                                fill: "#546070",
                                font: '15px Times New Roman,PingFangSC-Medium,PingFangSC'

                            }
                        }
                    ]
                  


                },
                silent: true,
                title: {
                    text: `{d|${b1}%}\n{c|已抽查}`,
                    textStyle: {
                        lineHeight: 30,
                        rich: {
                            a: {
                                color: "#00a1f9",
                                fontSize: 50
                            },
                            b: {
                                color: "#00a1f9",
                                fontSize: 15
                            },
                            c: {
                                color: "#546070",
                                fontSize: 15
                            },
                            d: {
                                color: "#00bd9b",
                                fontSize: 30
                            }
                        }
                    },
                    left: "center",
                    top: "center"
                },
                grid: {
                    top: -300
                }
            }
        };
        const pie1Opt = {
            datas: [
                {
                    type: "pie",
                    radius: ["70%", "80%"],
                    color: ["#D98C16", "rgba(228, 214, 38, 0.1)",],
                    data: [
                        {
                            value: a2 ? a2 : 0,
                            name: "达标"
                        },
                        {
                            value: a2 ? 100 - a2 : 0,
                            name: "未达标"
                        }
                    ]
                },
                {
                    type: "pie",
                    radius: ["55%", "65%"],
                    color: ["#00bd9b", "#031421",],
                    data: [
                        {
                            value: b2 ? b2 : 0,
                            name: "已抽查"
                        },
                        {
                            value: b2 ? 100 - b2 : 0,
                            name: "未抽查"
                        }
                    ]
                }
            ],
            option: {
                type: "pie",
                graphic: {
                    elements: [
                        {
                            type: 'text',
                            top: 0,
                            right: 5,
                            style: {
                                text: `${a2}%`,
                                fill: "#e3b227",
                                font: '25px Times New Roman,PingFangSC-Medium,PingFangSC'

                            }
                        }, {
                            type: 'text',
                            top: 25,
                            right: 10,
                            style: {
                                text: `达标`,
                                fill: "#546070",
                                font: '15px Times New Roman,PingFangSC-Medium,PingFangSC'

                            }
                        }
                    ]



                },
                legend: {
                    show: false
                },
                silent: true,
                title: {
                    text: `{d|${b2}%}\n{c|已抽查}`,
                    textStyle: {
                        lineHeight: 30,
                        rich: {
                            a: {
                                color: "#e3b227",
                                fontSize: 50
                            },
                            b: {
                                color: "#e3b227",
                                fontSize: 15
                            },
                            c: {
                                color: "#546070",
                                fontSize: 15
                            },
                            d: {
                                color: "#00bd9b",
                                fontSize: 30
                            }
                        }
                    },
                    left: "center",
                    top: "center"
                },
                grid: {
                    top: -300
                }
            }
        };


        return (
            <div
                style={{
                    position: "absolute",
                    background: "rgba(0, 40, 79,0.2)",
                    width: "735px",
                    left: "36px",
                    top: "719px",
                    padding: "10px",
                    height: "280px"
                }}
            >
                <div
                    style={{
                        color: "#fff",
                        fontSize: "30px",
                        fontFamily: "PingFangSC-Medium,PingFangSC",
                        fontweight: 500,
                        marginBottom: "5px"
                    }}
                >
                    浙江无欠薪
        </div>

                <div className={styles.flex_item}>
                    <div style={{ position: "relative" }}>
                        <div
                            style={{
                                marginTop: "0px",
                                paddingTop: "0px",
                                color: "#7FAFF6",
                                fontFamily: "PingFangSC-Regular,PingFangSC",
                                fontSize: 24,
                                fontWeight: "500",
                                textAlign: 'center'
                            }}
                        >
                            欠薪发生率
            </div>
                        <div
                            style={{
                                width: "300px",
                                height: "170px",
                                display: "flex",
                                marginTop: "2px",
                                paddingTop: "15px",
                                borderRight: "1px solid #333E72",
                            }}
                        >
                            <div
                                style={{


                                    textAlign: "center",
                                    paddingTop: "10px"
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 22,
                                        fontFamily:
                                            "'Times New Roman,PingFangSC-Regular,PingFangSC",
                                        fontWeight: 500,
                                        color: "rgba(24,240,255,1)",
                                        margin: 0,
                                        padding: 0,
                                        height: "30px",
                                        width: '95px',
                                      
                                    }}
                                >
                                    < div style={{ marginBottom: '15px' }}><img src={allcity} alt=""></img></div>
                                    <p style={{ fontSize: '20px', color: '#7FAFF6', marginRight: '3px',padding:0,margin:0 }}>全市</p>
                                    {ZJWQX_QXAJFSL.length > 0 ? ZJWQX_QXAJFSL[0]["全市"] : ""}
                                </div>

                            </div>
                            <div
                                style={{

                                    width: '100px',
                                    textAlign: "center",
                                    paddingTop: "10px"
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 22,
                                        fontFamily: "Times New Roman,PingFangSC-Regular,PingFangSC",
                                        fontWeight: 500,
                                        color: "rgba(24,240,255,1)",
                                        margin: 0,
                                        padding: 0,
                                        position: "relative",
                                        height: "30px"
                                    }}
                                > < div style={{ marginBottom: '15px' }}><img src={require('../../../../../assets/images/screen/bj.svg')} alt=""></img></div>
                                    <p style={{ fontSize: '20px', color: '#7FAFF6', marginRight: '3px', padding: 0, margin: 0  }}>较去年同期</p>
                                    {ZJWQX_QXAJFSL.length > 0
                                        ? ZJWQX_QXAJFSL[0]["较去年同期"]
                                        : ""}
                                    {ZJWQX_QXAJFSL.length > 0 &&
                                        ZJWQX_QXAJFSL[0]["较去年同期"].substr(
                                            0,
                                            ZJWQX_QXAJFSL[0]["较去年同期"].length - 1
                                        ) > 0 ? (
                                            <img
                                                style={{
                                                    marginLeft: "3px",
                                                    position: "absolute",
                                                    top: "110px"
                                                }}
                                                src={down}
                                                alt=""
                                                height="15px"
                                            />
                                        ) : (
                                            <img
                                                src={up}
                                                style={{
                                                    marginLeft: "3px",
                                                    position: "absolute",
                                                    top: "105px"
                                                }}
                                                alt=""
                                                height="15px"
                                            />
                                        )}
                                </div>

                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                    paddingTop: "10px",
                                    width: '100px'
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 24,
                                        textAlign: "center",
                                        fontFamily: "Times New Roman,PingFangSC-Regular,PingFangSC",
                                        fontWeight: 500,
                                        color: "#FFA206",
                                        margin: 0,
                                        padding: 0
                                    }}
                                >
                                    < div style={{ marginBottom: '13px' }}><img src={require('../../../../../assets/images/screen/pm.svg')} alt="" ></img></div>
                                    <p style={{ fontSize: '20px', color: '#7FAFF6', marginRight: '3px', padding: 0, margin: 0  }}>全省排名</p>
                                    {ZJWQX_QXAJFSL.length > 0 ? ZJWQX_QXAJFSL[0]["全省排名"] : ""}
                                    <span style={{ color: "rgba(24,240,255,1)", fontSize: 22 }}>
                                        /11
                  </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            position: "relative",
                            width: "195px",
                            height: '200px'
                           
                        }}
                    >
                        <div
                            style={{
                                textAlign: "center",
                                marginBottom: '10px',
                                fontSize: 24


                            }}
                        >
                            企业月抽查率
            </div>

                        <Chart data={pieOpt} option={pieOpt.option} />

                    </div>
                    <div
                        style={{
                            position: "relative",
                            width: "195px",

                            height: '200px'
                        }}
                    >
                        <div
                            style={{
                                textAlign: "center",
                                marginBottom: '10px',
                                fontSize:24

                            }}
                        >
                            工程项目月抽查率
            </div>

                        <Chart data={pie1Opt} option={pie1Opt.option} />
                    </div>
                </div>
            </div>
        );
    }
}

LeftThird.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object
};

export default LeftThird;
