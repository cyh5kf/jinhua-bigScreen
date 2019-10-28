import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../RightSide.less'
import IndexStyle from '../../../index.less'
import classNames from 'classnames'
import LineJianCha from '../../echarts/LineJianCha'
import LineRenShi from '../../echarts/LineRenShi'
import JycyBar from '../../echarts/JycyBar'

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class LeftThird extends PureComponent {

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
    const { blockSelect, JYCYZS_XKBQYS } = jycytwo;

    let xkbqys;
    if (JYCYZS_XKBQYS) {
      let xdata = JYCYZS_XKBQYS.map((data) => data.MONTH);
      let ydata = JYCYZS_XKBQYS.map((data) => data.NUM / 10000);
      xkbqys = {
        title: JYCYZS_XKBQYS[0].KPI_NAME,
        xAxis: xdata || [],
        seriesData: ydata || [],
        yNamne: "万家",
        LinearGradient: ['#CDEAFF', '#2765FF']
      }
    };

    let left_2_data = {
      xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      seriesData: [21, 22, 22, 22, 23, 23, 24, 24, 25, 25],
      yNamne: "万家",
      LinearGradient: ['#CDEAFF', '#2765FF']
    }

    return (
      <div onClick={() => this.onLinkTo('劳动关系指数')} onMouseOver={() => this.onChangeBlock('劳动关系指数', true)} onMouseOut={() => this.onChangeBlock('', false)} className={`${styles.rightContent} ${blockSelect === '劳动关系指数' ? styles.is_active : ''}`}>
        <div className={styles.title_Flag}>新开办企业</div>
        <JycyBar className={styles.charts} curId='right_1' height='1.5rem' {...xkbqys} interval={10}/>
      </div>
    )
  }
}

LeftThird.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default LeftThird;

