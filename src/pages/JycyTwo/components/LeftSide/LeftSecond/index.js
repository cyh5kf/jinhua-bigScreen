import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../LeftSide.less'
import IndexStyle from '../../../index.less'
import classNames from 'classnames'
import JycyLine from '../../echarts/JycyLine'

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class LeftFirst extends PureComponent {

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
    const { blockSelect, JYCYZS_CZDJSYL } = jycytwo;

    let czdjsyl;
    if (JYCYZS_CZDJSYL) {
      let xdata = JYCYZS_CZDJSYL.map((data) => data.MONTH);
      let ydata = JYCYZS_CZDJSYL.map((data) => data.NUM);
      czdjsyl = {
        title: JYCYZS_CZDJSYL[0].KPI_NAME,
        xAxis: xdata || [],
        seriesData: ydata || [],
        yNamne: "百分比",
        lineColor: "#3083F7",
        // seriesName: '达标值',
        symbolSize: 6,
        legend: ['达标值'],
        LinearGradient: ['#4294FF', 'rgba(85,182,251, 0.57)', 'rgba(108,225,245, 0)', 'transparent'],
        smooth: false
      }
    };


    return (
      <div onClick={() => this.onLinkTo('就业创业指数')} onMouseOver={() => this.onChangeBlock('就业创业指数', true)} onMouseOut={() => this.onChangeBlock('', false)} className={`${styles.leftContent} ${blockSelect === '就业创业指数' ? styles.is_active : ''}`}>
        <div className={styles.title_Flag}>{czdjsyl ? czdjsyl.title : '城镇登记失业率'}</div>
        <JycyLine className={styles.charts} curId='left_2' width='3.9rem' height='1.2rem' {...czdjsyl}/>
      </div>
    )
  }
}

LeftFirst.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default LeftFirst;

