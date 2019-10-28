import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../RightSide.less'
import JycyLine from '../../echarts/JycyLine'

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class RightFour extends PureComponent {

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

  onLinkTo = (url) => {
    const { history } = this.props
    // if (url) {
    //   window.location.href = url;
    // }
    // history.push(url);
  }

  render () {
    const { jycytwo } = this.props;
    const { blockSelect, JYCYZS_QRBL } = jycytwo;

    let qrbl;
    if (JYCYZS_QRBL) {
      let xdata = JYCYZS_QRBL.map((data) => data.KPI_NAME);
      let ydata = JYCYZS_QRBL.map((data) => data.NUM);
      qrbl = {
        title: JYCYZS_QRBL[0].KPI_CLASS,
        xAxis: xdata || [],
        seriesData: ydata || [],
        yNamne: "倍率",
        per: true,
        lineColor: "#E6DD28",
        LinearGradient: ['#DA9418', 'rgba(224,182,31, 0.49)', 'rgba(228,211,38, 0)', 'transparent'],
        smooth: true
      }
    };

    let left_2_data = {
      xAxis: ["16-24岁", "25-34岁", "35-44岁", "45岁以上"],
      seriesData: [1.64, 1.51, 0.93, 0.99],
      yNamne: "倍率",
      per: true,
      lineColor: "#E6DD28",
      LinearGradient: ['#DA9418', 'rgba(224,182,31, 0.49)', 'rgba(228,211,38, 0)', 'transparent'],
      smooth: true
    };

    return (
      <div onClick={() => this.onLinkTo('/#/qrblThree')} onMouseOver={() => this.onChangeBlock('求人倍率', true)} onMouseOut={() => this.onChangeBlock('', false)} className={`${styles.rightContent} ${blockSelect === '求人倍率' ? styles.is_active : ''}`}>
        <div className={styles.title_Flag}>求人倍率</div>
        <JycyLine className={styles.charts} curId='right_4' height='1.5rem' {...qrbl}  left={50} split={2}/>
      </div>
    )
  }
}

RightFour.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default RightFour;

