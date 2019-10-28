import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../LeftSide.less'
import classNames from 'classnames'
import JycyLine from '../../echarts/JycyLine';
import JycyBar from '../../echarts/JycyBar'
import { Layout, Pane } from 'components/Layout'

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class LeftFour extends PureComponent {
 

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
    const { blockSelect, JYCYZS_SBCBRS, JYCYZS_WLRKS } = jycytwo;

    const flex = classNames(styles.flex_item, styles.under_line);

    let sbcbrs;
    if (JYCYZS_SBCBRS) {
      let xdata = JYCYZS_SBCBRS.map((data) => data.MONTH);
      let ydata = JYCYZS_SBCBRS.map((data) => data.NUM / 10000);
      sbcbrs = {
        title: JYCYZS_SBCBRS[0].KPI_NAME,
        xAxis: xdata || [],
        seriesData: ydata || [],
        yNamne: "万人",
        lineColor: "#0067E0",
        LinearGradient: ['#4294FF', 'rgba(85,182,251, 0.57)', 'rgba(108,225,245, 0)', 'transparent'],
        smooth: false
      }
    };

    let wlrks;
    if (JYCYZS_WLRKS) {
      let xdata = JYCYZS_WLRKS.map((data) => data.YEAR);
      let ydata = JYCYZS_WLRKS.map((data) => data.NUM);
      wlrks = {
        title: JYCYZS_WLRKS[0].KPI_NAME,
        xAxis: xdata || [],
        seriesData: ydata || [],
        yNamne: "万人",
        LinearGradient: ['#E4D626', '#D98C16']
      }
    };

    return (
      <div onClick={() => this.onLinkTo('人才指数1')} onMouseOver={() => this.onChangeBlock('人才指数1', true)} onMouseOut={() => this.onChangeBlock('', false)} className={`${styles.leftContent} ${styles.left - flex} ${blockSelect === '人才指数1' ? styles.is_active : ''}`}>
        <Layout direction="rows">
          <Pane>
            <div style={{ width: '90%' }}>
              <div className={styles.title_Flag}>社保参保人员</div>
              <JycyLine className={styles.charts} curId='four_left' width="1.9rem" height='1.8rem' {...sbcbrs}  left={38} split={5}/>
            </div>
          </Pane>
          <Pane>
            <div style={{ width: '100%' }}>
              <div className={styles.title_Flag}>外来人口</div>
              <JycyBar className={styles.charts} curId='four_right' height='1.7rem' {...wlrks} interval={100} />
            </div>
          </Pane>
        </Layout>
      </div >
    )
  }
}

LeftFour.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default LeftFour;

