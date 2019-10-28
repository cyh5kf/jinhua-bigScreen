import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../RightSide.less'
import classNames from 'classnames'
import IndexStyle from '../../../index.less'
import LineSheBao from '../../echarts/LineSheBao'
// import BarBaoXian from  '../../echarts/BarBaoXian'
import GDPProgress from '../../Progress/GDPProgress'
import JycyBar from '../../echarts/JycyBar'

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class RightFirst extends PureComponent {

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
    const { blockSelect, JYCYZS_GTGSHS } = jycytwo;

    let gtgshs;
    if (JYCYZS_GTGSHS) {
      let xdata = JYCYZS_GTGSHS.map((data) => data.MONTH);
      let ydata = JYCYZS_GTGSHS.map((data) => data.NUM / 10000);
      gtgshs = {
        title: JYCYZS_GTGSHS[0].KPI_NAME,
        xAxis: xdata || [],
        seriesData: ydata || [],
        yNamne: "万家",
        LinearGradient: ['#E4D626', '#D98C16']
      }
    };

    return (
      <div onClick={() => this.onLinkTo('社会保障指数')} onMouseOver={() => this.onChangeBlock('社会保障指数', true)} onMouseOut={() => this.onChangeBlock('', false)} className={`${styles.rightContent} ${blockSelect === '社会保障指数' ? styles.is_active : ''}`}>
        <div className={styles.title_Flag}>个体工商户数</div>
        <JycyBar className={styles.charts} curId='right_2' height='1.5rem' {...gtgshs} interval={20} />
      </div>
    )
  }
}

RightFirst.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default RightFirst;

