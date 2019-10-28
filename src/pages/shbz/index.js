import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'antd';
import styles from './index.less';
import { fontSizeInit, getHtmlFontSize } from 'utils';
import { Layout, Pane } from 'components/Layout';
import Chart from 'components/Chart/chartComponent';
import { TreeColLeft, TreeColRight } from './components/ThreeCol';
import { ChartLeftList, ChartLeftList2, ChartLeftList3 } from './components/ChartLeftList';
import BlowOut from './components/BlowOut';
import { lineData0, lineData1, lineData2, configPie, pieData0, pieData1, pieData2, pieData3, barLeft, barRight, getLiquid } from './dataSource';
import { gridStyle, grid1Style, grid4Style, grid1Style2 } from './styleName';
import Header from 'components/Header';

@connect(({ shbz, loading }) => ({ shbz, loading }))
class Shbz extends PureComponent {
  state = {
    timeDelay: 0
  };
  componentDidMount() {
    window.addEventListener('resize', function() {
      fontSizeInit();
      getHtmlFontSize();
    });
    this.intervalId = setInterval(() => {
      this.setTimeDelay();
    }, 1000);
  }
  setTimeDelay = () => {
    this.setState({ timeDelay: this.state.timeDelay + 1 });
  };

  formatterDatas = () => {
    const {
      shbz: { SHBZZS_CBFGM, SHBZZS_GLXQYDYBZ, SHBZZS_SBJZJX, SHBZZS_ZFNLYC }
    } = this.props;
    // 参保覆盖面
    let fullPercent = 100;
    SHBZZS_CBFGM &&
      SHBZZS_CBFGM.forEach(item => {
        switch (item.KPI_NAME) {
          case '基本养老保险参保覆盖率':
            pieData0[0].value = parseFloat(item.NUM);
            pieData0[1].value = +(fullPercent - parseFloat(item.NUM)).toFixed(1);
            break;
          case '失业保险参保覆盖率':
            pieData1[0].value = parseFloat(item.NUM);
            pieData1[1].value = +(fullPercent - parseFloat(item.NUM)).toFixed(1);
            break;
          case '工伤保险参保覆盖率':
            pieData2[0].value = parseFloat(item.NUM);
            pieData2[1].value = +(fullPercent - parseFloat(item.NUM)).toFixed(1);
            break;
          case '社会保险夯实率':
            pieData3[0].value = parseFloat(item.NUM);
            pieData3[1].value = +(fullPercent - parseFloat(item.NUM)).toFixed(1);
            break;
          default:
            break;
        }
      });

    // 各类型企业待遇
    let tmpXAxisData = [],
      barLeftData = [];
    SHBZZS_GLXQYDYBZ &&
      SHBZZS_GLXQYDYBZ.forEach(item => {
        tmpXAxisData.push(item.KPI_NAME);
        barLeftData.push(item.NUM);
      });
    barLeft.xAxisData = tmpXAxisData;
    barLeft.datas[0].data = barLeftData;

    // 社保减征绩效
    let barRightXAxisData = [],
      barRightData = [];
    SHBZZS_SBJZJX &&
      SHBZZS_SBJZJX.forEach(item => {
        barRightXAxisData.push(item.KPI_NAME);
        barRightData.push(item.NUM);
      });
    barRight.xAxisData = barRightXAxisData;
    barRight.datas[0].data = barRightData;
    // 支付能力
    // 支付能力预测
    if (SHBZZS_ZFNLYC) {
      lineData0.xAxisData = this.buildPayAbility(SHBZZS_ZFNLYC, '养老基金支付能力', '支付能力预测').xAxisData;
      lineData0.datas[0].data = this.buildPayAbility(SHBZZS_ZFNLYC, '养老基金支付能力', '支付能力预测').data.slice(0, 4);
      lineData0.datas[1].data = [
        undefined,
        undefined,
        undefined,
        ...this.buildPayAbility(SHBZZS_ZFNLYC, '养老基金支付能力', '支付能力预测').data.slice(3)
      ];
      lineData1.xAxisData = this.buildPayAbility(SHBZZS_ZFNLYC, '失业保险基金支付能力', '支付能力预测').xAxisData;
      lineData1.datas[0].data = this.buildPayAbility(SHBZZS_ZFNLYC, '失业保险基金支付能力', '支付能力预测').data.slice(0, 4);
      lineData1.datas[1].data = [
        undefined,
        undefined,
        undefined,
        ...this.buildPayAbility(SHBZZS_ZFNLYC, '失业保险基金支付能力', '支付能力预测').data.slice(3)
      ];
      lineData2.xAxisData = this.buildPayAbility(SHBZZS_ZFNLYC, '工伤保险基金支付能力', '支付能力预测').xAxisData;
      lineData2.datas[0].data = this.buildPayAbility(SHBZZS_ZFNLYC, '工伤保险基金支付能力', '支付能力预测').data.slice(0, 4);
      lineData2.datas[1].data = [
        undefined,
        undefined,
        undefined,
        ...this.buildPayAbility(SHBZZS_ZFNLYC, '工伤保险基金支付能力', '支付能力预测').data.slice(3)
      ];
    }
  };

  /**
   * 构建保险待遇
   * @param {Array} datas 保险待遇数据
   */
  buildInsurance(datas) {
    let leftData = [];
    datas.forEach(item => {
      const text = item.KPI_NAME;
      const name = text.substring(text.indexOf("（") + 1, text.indexOf("）"));
      leftData.push({
        label: name,
        value: item.KPI_VALUE,
        content: item.全省
      });
    });
    return leftData;
  }

  /**
   * 构建支付能力信息
   * @param {Array} datas 支付能力信息
   * @param {String} type 支付能力类别
   */
  buildPayAbilityInfo(datas, type) {
    return [
      {
        label: '收入',
        value: datas.filter(item => item.KPI_CLASS === type).filter(item => item.KPI_NAME === '收入')[0].NUM
      },
      {
        label: '支出',
        value: datas.filter(item => item.KPI_CLASS === type).filter(item => item.KPI_NAME === '支出')[0].NUM
      },
      {
        label: '结余',
        value: datas.filter(item => item.KPI_CLASS === type).filter(item => item.KPI_NAME === '结余')[0].NUM
      },
      {
        label: '累计结余',
        value: datas.filter(item => item.KPI_CLASS === type).filter(item => item.KPI_NAME === '累计结余')[0].NUM
      }
    ];
  }
  /**
   * 构建支付能力预测
   * @param {Array} datas 支付能力数据
   * @param {String} type 支付能李类别
   * @param {String} name 支付能力预测数据类型
   */
  buildPayAbility(datas, type, name) {
    let xAxisData = [],
      data = [];
    datas
      .filter(item => item.KPI_CLASS === type)
      .filter(item => item.KPI_NAME === name)
      .forEach(item => {
        xAxisData.push(item.YEAR_ID);
        data.push(item.NUM.toFixed(1));
      });
    return {
      xAxisData,
      data
    };
  }

  // c(name) {
  //   const { shbz: {SHBZZS_GJJK} } = this.props;
  //   if(!SHBZZS_GJJK){
  //     return 0.1
  //   }else{
  //     // return parseFloat(SHBZZS_GJJK.filter(item => item.KPI_NAME === name)[0].NUM) / 100
  //     return 0.24
  //   }

  // }

  render() {
    fontSizeInit();
    getHtmlFontSize();
    const {
      shbz: { SHBZZS_GJJK, SHBZZS_SBJJZFNL, SHBZZS_YLJJZF, MAP_ZS, SHBZ, SHBZ_RJFL }
    } = this.props;
    let { timeDelay } = this.state;
    const data = [
      {
        label: '社会保障',
        path: '/#/shbzt/1',
        classname: 'shbz'
      },
      {
        label: '稽核风控',
        path: '/#/shbzt/2',
        classname: 'jhfk'
      },
      {
        label: '全民参保',
        path: '/#/shbzt/3',
        classname: 'qmcb'
      },
      {
        label: '机关养老',
        path: '/#/shbzt/4',
        classname: 'jgyl'
      },
      {
        label: '首页',
        path: '/#/shbz',
        classname: 'shbzmenu'
      }
    ];

    let jhldgx = [];

    if (MAP_ZS) {
      const names = MAP_ZS.map(data => data.AREA_NAME);
      let name = Array.from(new Set(names));
      name.map(da => {
        let obj = {
          name: da,
          data: [],
          value: '',
          val: []
        };
        jhldgx.push(obj);
      });
      MAP_ZS.map(item => {
        let ind = name.indexOf(item.AREA_NAME);
        if (ind > -1) {
          let obj = {
            name: item.KPI_CLASS,
            value: +item.KPI_VALUE.toFixed(0)
          };
          jhldgx[ind].data.push(obj);

          if (item.KPI_CLASS === '社会保障指数') {
            jhldgx[ind].value = +item.KPI_VALUE.toFixed(0);
          }
        }
      });
      jhldgx.map(item => {
        if (item.name === '婺城区') {
          item.val = [119.4715, 29.05024, item.value]; //婺城区
        } else if (item.name === '武义县') {
          item.val = [119.71651, 28.8926, item.value]; //武义县
        } else if (item.name === '兰溪市') {
          item.val = [119.46051, 29.30838, item.value]; //兰溪市
        } else if (item.name === '金东区') {
          item.val = [119.79311, 29.19914, item.value]; //金东区
        } else if (item.name === '浦江县') {
          item.val = [119.89906, 29.55251, item.value]; //浦江县
        } else if (item.name === '永康市') {
          item.val = [120.08731, 28.98851, item.value]; //永康市
        } else if (item.name === '义乌市') {
          item.val = [120.07468, 29.40558, item.value]; //义乌市
        } else if (item.name === '东阳市') {
          item.val = [120.34191, 29.28946, item.value]; //东阳市
        } else if (item.name === '磐安县') {
          item.val = [120.55022, 29.05403, item.value]; //磐安县
        }
      });
    }
    jhldgx.sort((obj1, obj2) => obj2.value - obj1.value);
    this.formatterDatas();

    return (
      <div className={styles.screen}>
        <Header data={data} />
        <div className="center-big-title">
          {SHBZ && SHBZ[0].KPI_VALUE || 0}
          <span>社会保障水平指数</span>
        </div>
        <div className={styles.container}>
          <Layout direction="rows">
            <Pane style={{ flexBasis: '30%' }}>
              <Layout>
                <Pane>
                  <Card title="社会保险参保覆盖面">
                    <p className="shbz-card-junior-title" style={{ paddingLeft: 20 }}>
                      人均预警率
                    </p>
                    <div className="cardGrid" style={gridStyle}>
                      <Chart data={configPie(pieData0)} option={configPie([], ['#0092F7', '#28C286'], '基本养老保险参保覆盖率', '99%').option} />
                    </div>
                    <div className="cardGrid" style={gridStyle}>
                      <Chart data={configPie(pieData1)} option={configPie([], ['#00D1F7', '#DBAC18'], '失业保险参保覆盖率', '75%').option} />
                    </div>
                    <div className="cardGrid" style={gridStyle}>
                      <Chart data={configPie(pieData2)} option={configPie([], ['#0092F7', '#28C286'], '工伤保险参保覆盖率', '90%').option} />
                    </div>
                    <div className="cardGrid" style={gridStyle}>
                      <Chart data={configPie(pieData3)} option={configPie([], ['#00D1F7', '#DBAC18'], '社会保险夯实率', '10%').option} />
                    </div>
                  </Card>
                </Pane>
                <Pane style={{}}>
                  <Layout>
                    <Pane>
                      <Card title="保险待遇保障水平">
                        {TreeColLeft(SHBZ_RJFL && this.buildInsurance(SHBZ_RJFL))}
                        <p className="shbz-card-junior-title margin-top20">各类型企业待遇保障水平</p>
                        <div style={{ height: 250 }}>
                          <Chart data={barLeft} option={barLeft.option} />
                        </div>
                      </Card>
                    </Pane>
                  </Layout>
                </Pane>
              </Layout>
            </Pane>

            <Pane style={{ flexBasis: '40%' }} className="blowout-bgi">
              <Layout direction="rows">
                <Pane>
                  <Layout>
                    <Pane style={{ flexBasis: '70%' }}>
                      <Card style={{ background: 'unset' }}>
                        <div style={{ position: 'relative', top: 190, left: 125 }}>{timeDelay % 20 !== 0 ? <BlowOut data={jhldgx} /> : ''}</div>
                      </Card>
                    </Pane>
                    <Pane style={{ flexBasis: '30%' }}>
                      <Card title="基金监督">
                        <Card.Grid style={grid4Style}>
                          <div className="liquid-circle">
                            <Chart
                              data={getLiquid(
                                '#00B5FF',
                                '#007ACF',
                                'rgba(5,106,230,0.2)',
                                (SHBZZS_GJJK && parseFloat(SHBZZS_GJJK.filter(item => item.KPI_NAME === '监督检查指数')[0].NUM) / 100) || 0.25
                              )}
                              option={{ type: 'liquidFill', tooltip: { show: true } }}
                            />
                          </div>
                          <p className="margin-top-30">监督检查指数</p>
                        </Card.Grid>
                        <Card.Grid style={grid4Style}>
                          <div className="liquid-circle">
                            <Chart
                              data={getLiquid(
                                '#54F9FF',
                                '#00BFCB',
                                'rgba(43, 220, 230, 0.18)',
                                (SHBZZS_GJJK && parseFloat(SHBZZS_GJJK.filter(item => item.KPI_NAME === '业务经办管控指数')[0].NUM) / 100) || 0.25
                              )}
                              option={{ type: 'liquidFill', tooltip: { show: true } }}
                            />
                          </div>
                          <p className="margin-top-30">业务经办管控指数</p>
                        </Card.Grid>
                        <Card.Grid style={grid4Style}>
                          <div className="liquid-circle">
                            <Chart
                              data={getLiquid(
                                '#92FFBF',
                                '#0A7449',
                                'rgba(124, 214, 165, 0.15)',
                                (SHBZZS_GJJK && parseFloat(SHBZZS_GJJK.filter(item => item.KPI_NAME === '财务管控指数')[0].NUM) / 100) || 0.25
                              )}
                              option={{ type: 'liquidFill', tooltip: { show: true } }}
                            />
                          </div>
                          <p className="margin-top-30">财务管控指数</p>
                        </Card.Grid>
                        <Card.Grid style={grid4Style}>
                          <div className="liquid-circle">
                            <Chart
                              data={getLiquid(
                                '#FFE79A',
                                '#CE9D00',
                                'rgba(233, 198, 85, 0.1)',
                                (SHBZZS_GJJK && parseFloat(SHBZZS_GJJK.filter(item => item.KPI_NAME === '信息管控指数')[0].NUM) / 100) || 0.24
                              )}
                              option={{ type: 'liquidFill', tooltip: { show: true } }}
                            />
                          </div>
                          <p className="margin-top-30">信息管控指数</p>
                        </Card.Grid>
                      </Card>
                    </Pane>
                  </Layout>
                </Pane>
              </Layout>
            </Pane>

            <Pane style={{ flexBasis: '30%' }}>
              <Layout direction="rows">
                <Card title="社保基金支付能力">
                  <div style={grid1Style}>
                    <p className="shbz-card-junior-title">养老基金支付能力</p>
                    {TreeColRight(SHBZZS_YLJJZF && this.buildInsurance(SHBZZS_YLJJZF))}
                    <Row>
                      <Col span={10}>{ChartLeftList(SHBZZS_SBJJZFNL && this.buildPayAbilityInfo(SHBZZS_SBJJZFNL, '养老基金支付能力'))}</Col>
                      <Col span={14} style={{ height: 150 }}>
                        <Chart data={lineData0} option={lineData0.option} />
                      </Col>
                    </Row>
                  </div>
                  <div style={grid1Style}>
                    <p className="shbz-card-junior-title">失业保险基金支付能力</p>
                    <Row>
                      <Col span={10}>{ChartLeftList2(SHBZZS_SBJJZFNL && this.buildPayAbilityInfo(SHBZZS_SBJJZFNL, '失业保险基金支付能力'))}</Col>
                      <Col span={14} style={{ height: 150 }}>
                        <Chart data={lineData1} option={lineData0.option} />
                      </Col>
                    </Row>
                  </div>
                  <div style={grid1Style}>
                    <p className="shbz-card-junior-title">工伤保险基金支付能力</p>
                    <Row>
                      <Col span={10}>{ChartLeftList3(SHBZZS_SBJJZFNL && this.buildPayAbilityInfo(SHBZZS_SBJJZFNL, '工伤保险基金支付能力'))}</Col>
                      <Col span={14} style={{ height: 150 }}>
                        <Chart data={lineData2} option={lineData0.option} />
                      </Col>
                    </Row>
                  </div>
                  <div style={grid1Style}>
                    <p className="shbz-card-junior-title">社保费减征绩效 - 有效企业数</p>
                    <div style={{ height: 300 }}>
                      <Chart data={barRight} option={barRight.option} />
                    </div>
                  </div>
                </Card>
              </Layout>
            </Pane>
          </Layout>
        </div>
        {/* <footer></footer> */}
      </div>
    );
  }
}

Shbz.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object
};

export default Shbz;
