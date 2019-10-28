import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import styles from './index.less';
import classnames from 'classnames';
import { fontSizeInit, getHtmlFontSize } from 'utils';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import Center from './components/Center/Center';
import Chart from 'components/Chart/chartComponent';
import Header from 'components/Header';

import InfoItem from './components/InfoItem/';
import ModuleTitle from './components/ModuleTitle/';
import GridItem from './components/GridItem/';
import { Pane, Layout } from 'components/Layout/index';
import JinHuaMap from '../fpldgx/components/Center/CenterTop/Map/jinhua';

import leftIcon from './static/left-title-icon.svg';
import rightIcon from './static/right-title-icon.svg';

import {
  barOpt,
  collegeStdBarOpt,
  collegeStdPieOpt,
  heighLightOpt,
  professFunnelOpt,
  parentBoxStyle,
  titleData,
  title1Data,
  itemGridData,
  itemGrid1Data,
  gridData,
  grid1Data,
  grid2Data,
  grid3Data,
  rankData,
  rank1Data,
  rank2Data,
  rankDataPercent,
  rankDataNoUnit
} from './options';

@connect(({ rc, loading }) => ({ rc, loading }))
class Rc extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rc_titleData: {},
      rc_rankData: {},
      rc_rankData1: {},
      rc_rankData2: {},
      rc_rankData3: {},
      rc_itemGridData: {},
      rc_itemGridData1: {},
      rc_gridData: {},
      rc_gridData1: {},
      rc_gridData2: {},
      rc_gridData3: {},
      rc_titleData1: {},
      rc_titleData2: {},
      rc_titleData3: {},
      rc_rankData4: {radio: ''},
      rc_rankData5: {},
      rc_professFunnelOpt: {},
      rc_professFunnelOpt1: {}
    };
  }

  onLinkTo = (url) => {
    const { history } = this.props
    if (url) {
      window.location.href = url;
    }
    // history.push(url);
  }

  componentDidMount() {
    window.addEventListener('resize', function() {
      fontSizeInit();
      getHtmlFontSize();
    });
  }

  componentWillReceiveProps() {
    this.formatterDatas();
  }

  formatterDatas() {
    const {
      rc: { RCSL_MWRKRCS, RCSL_ANF, RCXL_ANF,RCXL_AXL, RCXL_DZJYS, RCZS_RCJG, RCZS_BZYCG, RCZS_RCPTSL,ZYJSRC_ZB,ZYJSRC_ACC ,GJSRC_ZB,GJSRC_ACC,RCGX_QRBL,RCZS_QYYRMYQK}
    } = this.props;
    let rc_titleData = {},
      rc_rankData = {},
      rc_rankData1 = {},
      rc_rankData2 = {},
      rc_rankData3 = {},
      rc_itemGridData = {},
      rc_itemGridData1 = {},
      rc_gridData = {},
      rc_gridData1 = {},
      rc_gridData2 = {},
      rc_gridData3 = {},
      rc_titleData1 = {},
      rc_titleData2 = {},
      rc_titleData3 = {},
      rc_rankData4 = {},
      rc_rankData5 = {},
      rc_professFunnelOpt = {},
      rc_professFunnelOpt1 = {}
      ;

    // 人才指数 -- 人才數量
    RCSL_MWRKRCS &&
      (rc_titleData = { ...titleData, num: RCSL_MWRKRCS[0].NUM, percent: parseFloat(RCSL_MWRKRCS[0].LASTYEAR), rank: RCSL_MWRKRCS[0].RANK });

    // 人才指数 -- 人才结构
    RCZS_RCJG && (rc_rankData = { ...rankData, ...this.buildRankData(RCZS_RCJG, '每万名从业人员专业技术人才') });
    RCZS_RCJG && (rc_rankData1 = { ...rank1Data, ...this.buildRankData(RCZS_RCJG, '新引进领军人才') });
    RCZS_RCJG && (rc_rankData2 = { ...rank2Data, ...this.buildRankData(RCZS_RCJG, '引进海外人才数') });
    RCZS_RCJG && (rc_rankData3 = { ...rank2Data, ...this.buildRankData(RCZS_RCJG, '新引进大学生就业数') });

    // 人才指数 -- 保障与成果
    RCZS_BZYCG && (rc_itemGridData = { ...itemGridData, ...this.buildRankData(RCZS_BZYCG, 'R&D经费支出占GDP比重') });
    RCZS_BZYCG && (rc_itemGridData1 = { ...itemGrid1Data, ...this.buildRankData(RCZS_BZYCG, '万人发明专利拥有量') });

    // 人才指数 -- 人才平台数量
    RCZS_RCPTSL && (rc_gridData = { ...gridData, ...this.buildRankData(RCZS_RCPTSL, 'A类') });
    RCZS_RCPTSL && (rc_gridData1 = { ...grid1Data, ...this.buildRankData(RCZS_RCPTSL, 'B类') });
    RCZS_RCPTSL && (rc_gridData2 = { ...grid2Data, ...this.buildRankData(RCZS_RCPTSL, 'C类') });
    RCZS_RCPTSL && (rc_gridData3 = { ...grid3Data, ...this.buildRankData(RCZS_RCPTSL, 'D类') });

    // 人才发展 -- 按年份
    RCSL_ANF && (barOpt.xAxisData = this.buildBarDatas(RCSL_ANF, 'RCSL_ANF').xAxisData);
    RCSL_ANF && (barOpt.datas[0].data = this.buildBarDatas(RCSL_ANF, 'RCSL_ANF').data);

    // 人才匹配 -- 按年份
    RCXL_ANF && (collegeStdBarOpt.xAxisData = this.buildBarDatas(RCXL_ANF, 'RCXL_ANF').xAxisData);
    RCXL_ANF && (collegeStdBarOpt.datas[0].data = this.buildBarDatas(RCXL_ANF, 'RCXL_ANF').data);

    // 人才匹配 -- 大专及以上大学生占比
    RCXL_DZJYS &&
      (rc_titleData1 = { ...title1Data, num: parseFloat(RCXL_DZJYS[0].NUM), percent: parseFloat(RCXL_DZJYS[0].LASTYEAR || 0)});
    // 人才匹配 -- 按学历
    RCXL_AXL && (collegeStdPieOpt.datas[0].data = RCXL_AXL.map(item => {
      return {name: `${item.KPI_NAME}\n${parseFloat(item.NUM)}%`, value: parseFloat(item.NUM)}}));

    // 人才匹配 -- 专业技术人才占比
    ZYJSRC_ZB && (rc_titleData2 = { ...title1Data, ...this.buildRankData(ZYJSRC_ZB, '专业技术人才占比')});
    // 专业技术人才 - 按层次
    if (ZYJSRC_ACC) {
      professFunnelOpt.datas[0].data.forEach(item => {
        ZYJSRC_ACC.forEach(elm => {
          item.name === elm.KPI_NAME && (item.actualValue = parseFloat(elm.NUM));
        });
      });
      professFunnelOpt.datas[1].data = professFunnelOpt.datas[0].data;
      rc_professFunnelOpt = JSON.parse(JSON.stringify(professFunnelOpt))
    }
    // 人才匹配 -- 高技能人才占比
    GJSRC_ZB && (rc_titleData3 = { ...title1Data, ...this.buildRankData(GJSRC_ZB, '高技能人才占比')});
    // 高技能人才 -- 按层次
    if (GJSRC_ACC) {
      professFunnelOpt.datas[0].data.forEach(item => {
        GJSRC_ACC.forEach(elm => {
          item.name === elm.KPI_NAME && (item.actualValue = parseFloat(elm.NUM));
        });
      });

      professFunnelOpt.datas[1].data = professFunnelOpt.datas[0].data;
      rc_professFunnelOpt1 = JSON.parse(JSON.stringify(professFunnelOpt))
    }
    // 人才供需 -- 求人倍率
    RCGX_QRBL && (rc_rankData4 = { ...rankDataNoUnit, ...this.buildRankData(RCGX_QRBL, '求人倍率')});

    // 人才匹配 -- 企业用人满意情况
    if (RCZS_QYYRMYQK) {
      rc_rankData5 = {...rankDataPercent, ...this.buildRankData(RCZS_QYYRMYQK, '企业用人满意情况')};
      heighLightOpt.datas[0].data[0].value = rc_rankData5.num;
      heighLightOpt.datas[0].data[1].value = 100 - rc_rankData5.num;
    }
    this.setState({
      rc_titleData,
      rc_rankData,
      rc_rankData1,
      rc_rankData2,
      rc_rankData3,
      rc_itemGridData,
      rc_itemGridData1,
      rc_gridData,
      rc_gridData1,
      rc_gridData2,
      rc_gridData3,
      rc_titleData1,
      rc_titleData2,
      rc_titleData3,
      rc_rankData4,
      rc_rankData5,
      rc_professFunnelOpt,
      rc_professFunnelOpt1
    });
  }

  buildRankData(datas, type) {
    let rank = {
      num: parseFloat(datas.filter(item => item.KPI_NAME === type)[0].NUM),
      percent: parseFloat(datas.filter(item => item.KPI_NAME === type)[0].LASTYEAR || 0),
      rank: datas.filter(item => item.KPI_NAME === type)[0].RANK
    }
    type === '求人倍率' && (rank = {...rank, ratio: datas.filter(item => item.KPI_NAME === type)[0]['上期倍率']})
    return rank;
  }

  buildBarDatas(datas, type) {
    let xAxisData = [],
      data = [];
    let barOption = type === 'RCSL_ANF' ? barOpt : collegeStdBarOpt;
    datas.forEach((item, index) => {
      xAxisData.push(item.YEAR_ID);
      data.push(index < 2 ? item.NUM : { value: item.NUM, itemStyle: barOption.datas[0].data[2].itemStyle });
    });
    return {
      xAxisData,
      data
    };
  }

  render() {
    fontSizeInit();
    getHtmlFontSize();
    const {
      rc_titleData,
      rc_rankData,
      rc_rankData1,
      rc_rankData2,
      rc_rankData3,
      rc_itemGridData,
      rc_itemGridData1,
      rc_gridData,
      rc_gridData1,
      rc_gridData2,
      rc_gridData3,
      rc_titleData1,
      rc_titleData2,
      rc_titleData3,
      rc_rankData4,
      rc_rankData5,
      rc_professFunnelOpt,
      rc_professFunnelOpt1
    } = this.state;

    const { rc, rc: { MAP_ZS, RCZS } } = this.props;

    const data = [
      {
        label: '人才供需',
        path: '/#/qrblThree',
        classname: 'qrblthree'
      },
      {
        label: '人才分析',
        path: '/#/rct/1',
        classname: 'rcfx'
      },
      {
        label: '人才地图',
        path: '/#/rct/2',
        classname: 'rcdt'
      },
      {
        label: '首页',
        path: '/#/rc',
        classname: 'rcmenu'
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

          if (item.KPI_CLASS === '人才指数') {
            jhldgx[ind].value = +item.KPI_VALUE.toFixed(0);
          }
        }
      });
      jhldgx.map(item => {
        if (item.name === '婺城区') {
            item.val = [119.47150, 28.95024, item.value]; //婺城区
        } else if (item.name === '武义县') {
            item.val = [119.66651, 28.69260, item.value]; //武义县
        } else if (item.name === '兰溪市') {
            item.val = [119.58051, 29.35838, item.value]; //兰溪市
        } else if (item.name === '金东区') {
            item.val = [119.79311, 29.19914, item.value]; //金东区
        } else if (item.name === '浦江县') {
            item.val = [119.89906, 29.45251, item.value]; //浦江县
        } else if (item.name === '永康市') {
            item.val = [120.08731, 28.94851, item.value]; //永康市
        } else if (item.name === '义乌市') {
            item.val = [120.07468, 29.40558, item.value]; //义乌市
        } else if (item.name === '东阳市') {
            item.val = [120.34191, 29.28946, item.value]; //东阳市
        } else if (item.name === '磐安县') {
            item.val = [120.55022, 29.05403, item.value]; //磐安县
        }
      });
    }

    return (
      <div className={classnames(styles.screen, 'rc-container-box')}>
        <Header data={data} />

        <div className={styles.container}>
          <div className="center-big-title">
            {RCZS && RCZS[0].KPI_VALUE || 0}
            <span>人才队伍发展指数</span>
          </div>
          <Layout direction="rows" className="rc-pane-header">
            <Pane>
              <div className="pane-title-box">
                <img src={leftIcon} className="left-icon" alt="" />
                人才发展
              </div>
              <Layout>
                <Pane style={{ flexBasis: '40%' }}>
                  <Card title="人才数量" className="top-card-head-without-bg">
                    <ModuleTitle title="每万人口人才数" {...rc_titleData} />
                    <Layout direction="rows">
                      <Pane>
                        <div style={parentBoxStyle(240)} className="chart-box">
                          <Chart data={barOpt} option={barOpt.option} />
                        </div>
                      </Pane>
                      <Pane>
                        <div style={parentBoxStyle(200)} className="chart-box map-chart-box">
                          <JinHuaMap jhldgx={jhldgx} isTooltipShow={false} />
                        </div>
                      </Pane>
                    </Layout>
                  </Card>
                </Pane>
                <Pane style={{ flexBasis: '60%' }}>
                  <Layout direction="rows">
                    <Pane>
                      <Card title="人才结构" className="rcjg-box">
                        <InfoItem title={<span className="title">每万名从业人员专业技术人才</span>} {...rc_rankData} />
                        <InfoItem title={<span className="title">新引进领军人才</span>} {...rc_rankData1} />
                        <InfoItem title={<span className="title">引进海外人才数</span>} {...rc_rankData2} />
                        <InfoItem title={<span className="title">新引进大学生就业数</span>} {...rc_rankData3} />
                      </Card>
                    </Pane>
                    <Pane>
                      <Card title="保障与成果" className="bzcg-box">
                        <Layout>
                          <Pane>
                            <Layout className="bzcg-grid-layout">
                              <Pane>
                                <InfoItem title={<span className="title">R&D经费支出占GDP比重</span>} {...rc_itemGridData} />
                              </Pane>
                              <Pane>
                                <InfoItem title={<span className="title">万人发明专利拥有量</span>} {...rc_itemGridData1} />
                              </Pane>
                            </Layout>
                          </Pane>
                          <Pane>
                            <div className="four-grid-box">
                              <div className="title">人才平台数量</div>
                              <GridItem {...rc_gridData} />
                              <GridItem {...rc_gridData1} />
                              <GridItem {...rc_gridData2} />
                              <GridItem {...rc_gridData3} />
                            </div>
                          </Pane>
                        </Layout>
                      </Card>
                    </Pane>
                  </Layout>
                </Pane>
              </Layout>
            </Pane>
            <Pane>
              <div className="pane-title-box right">
                <span className="left-small-title">新能源汽车领域 &数字经济领域</span>
                人才匹配
                <img src={rightIcon} className="right-icon" />
              </div>
              <Layout>
                <Pane style={{ flexBasis: '30%' }}>
                  <Card title="人才学历" className="right-part-card top-card-head-without-bg">
                    <ModuleTitle
                      classname="right-title"
                      title={
                        <span>
                          大专及以上大学生占比
                          {/* <span className="small-title">（本市上市公司平均数 - 50%）</span> */}
                        </span>
                      }
                      {...rc_titleData1}
                    />
                    <Layout direction="rows">
                      <Pane>
                        <div style={parentBoxStyle(280)} className="chart-box chart-pie-box">
                          <Chart data={collegeStdPieOpt} option={collegeStdPieOpt.option} />
                        </div>
                      </Pane>
                      <Pane>
                        <div style={parentBoxStyle(300)} className="chart-box">
                          <Chart data={collegeStdBarOpt} option={collegeStdBarOpt.option} />
                        </div>
                      </Pane>
                    </Layout>
                  </Card>
                </Pane>
                <Pane style={{ flexBasis: '20%' }}>
                  <Layout direction="rows">
                    <Pane>
                      <Card title="专业技术人才" className="margin-right-zero">
                        <ModuleTitle title="占比" {...rc_titleData2} />
                        {/* <div className="funnel-top-title">（本市上市公司平均数 - 50%）</div> */}
                        <div style={parentBoxStyle()} className="chart-funnel-box chart-box">
                          <Chart data={rc_professFunnelOpt} option={professFunnelOpt.option1} />
                        </div>
                      </Card>
                    </Pane>
                    <Pane>
                      <Card title="高技能人才" className="margin-left-zero">
                        <ModuleTitle title="占比" {...rc_titleData3} />
                        {/* <div className="funnel-top-title">（本市上市公司平均数 - 50%）</div> */}
                        <div style={parentBoxStyle()} className="chart-funnel-box chart-box">
                          <Chart data={rc_professFunnelOpt1} option={professFunnelOpt.option} />
                        </div>
                      </Card>
                    </Pane>
                  </Layout>
                </Pane>
                <Pane style={{ height: 0 }}>
                  <Layout direction="rows">
                    <Pane className="right-bottom-left-pane">
                      <Card title="人才供需" className="left-bottom-item margin-right-zero">
                        <InfoItem
                          title={
                            <span className="title">
                              求人倍率
                              <span className="small-title">{`（上期倍率${rc_rankData4.ratio}）`}</span>
                            </span>
                          }
                          {...rc_rankData4}
                        />
                      </Card>
                    </Pane>
                    <Pane>
                      <Card title="企业用人满意情况" className="margin-left-zero">
                        <Layout direction="rows" style={{ overflow: 'visible' }}>
                          <Pane style={{ flexBasis: '60%' }}>
                            <div className="right-bottom-title">
                              <InfoItem title={<span className="title">企业HR满意指数</span>} {...rc_rankData5} />
                            </div>
                          </Pane>
                          <Pane>
                            <div style={parentBoxStyle(150)} className="right-bottom-pie chart-box">
                              <Chart data={heighLightOpt} option={heighLightOpt.option} />
                            </div>
                          </Pane>
                        </Layout>
                      </Card>
                    </Pane>
                  </Layout>
                </Pane>
              </Layout>
            </Pane>
          </Layout>
        </div>
        {/* <footer></footer> */}
      </div>
    );
  }
}

Rc.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object
};

export default Rc;
