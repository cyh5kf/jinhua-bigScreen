import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../LeftSide.less'
import IndexStyle from '../../../index.less'
// import Pie from '../../echarts/Pie'
import classNames from 'classnames'
import FuWuProgress from '../../Progress/FuWuProgress'
import JycyLine from '../../echarts/JycyLine'
const $ = window.$

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class RightSecond extends PureComponent {

  onChangeBlock = (ind, flag) => {
    const { dispatch } = this.props
    // dispatch({
    //   type: 'jycytwo/updateState',
    //   payload: {
    //     blockSelect: ind,
    //     zbSelect: flag ? '' : 0
    //   }
    // })
  }

  onLinkTo = (ind) => {
    const { history } = this.props
    // history.push("/jycytwo");
  }


  render () {
    const { jycytwo } = this.props;
    const { blockSelect, JYCYZS_CZXZJYRS } = jycytwo;

    let czxzjyrs;
    if (JYCYZS_CZXZJYRS) {
      let xdata = JYCYZS_CZXZJYRS.map((data) => data.MONTH);
      let ydata = JYCYZS_CZXZJYRS.map((data) => data.NUM/10000);
      czxzjyrs = {
        title: JYCYZS_CZXZJYRS[0].KPI_NAME,
        xAxis: xdata || [],
        seriesData: ydata || [],
        yNamne: "万人",
        splitNumber: 40000,
        lineColor: "#DC8C08",
        // seriesName: '达标值',
        symbolSize: 6,
        LinearGradient: ['#DA9418', 'rgba(224,182,31, 0.49)', 'rgba(228,211,38, 0)', 'transparent'],
        smooth: false
      }
    };

    return (
      <div onClick={() => this.onLinkTo('公共服务指数')} onMouseOver={() => this.onChangeBlock('公共服务指数', true)} onMouseOut={() => this.onChangeBlock('', false)} className={`${styles.leftContent} ${blockSelect === '公共服务指数' ? styles.is_active : ''}`}>
        <div className={styles.title_Flag}>{czxzjyrs ? czxzjyrs.title : '城镇新增就业人数'}</div>
        <JycyLine className={styles.charts} curId='left_1' width='100%' height='1.2rem' {...czxzjyrs} />
      </div>
    )
  }
}

RightSecond.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default RightSecond;
