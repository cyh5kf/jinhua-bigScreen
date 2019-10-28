import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../RightSide.less'
import IndexStyle from '../../../index.less'
import Bar from '../../echarts/Bar'
import Pieleft from '../../echarts/Pieleft'
import classNames from 'classnames'

@connect(({ screen, loading }) => ({ screen, loading }))
class RightFirst extends PureComponent {

  onHover = (ind, ishover) => {
    const { dispatch } = this.props
    // dispatch({
    //     type: 'screen/updateState',
    //     payload: {
    //         wheelStatus: ind,
    //         isHover: ishover
    //     }
    // })
  }

  render () {
    // const { screen } = this.props;
    // const { RCZS, RCZS_RCZL, RCZS_RCPPD, RCZS_GCT, wheelStatus } = screen;
    // const flex = classNames(styles.flex_item, styles.under_line);

    // const rczs = RCZS && RCZS.length > 0 ? RCZS[0] : {};
    // const rcppd = RCZS_RCPPD && RCZS_RCPPD.length > 0 ? RCZS_RCPPD[0] : {};
    // let rczl = [];
    // if (RCZS_RCZL) {
    //     rczl = RCZS_RCZL.map((data, index) =>
    //         <div key={index}>
    //             <p>{data.KPI_NAME}</p>
    //             <p><b>{data.KPI_VALUE}{data.KPI_UNIT}</b>/{data.KPI_TARGET}{data.KPI_TARGET_UNIT}</p>
    //         </div>
    //     );
    // }
    let gct;
    // if (RCZS_GCT) {
    //     let xdata = RCZS_GCT.map((data) =>data.KPI_NAME);
    //     let ydata = RCZS_GCT.map(data => data.KPI_VALUE);
    //     gct = {
    //         // title: RCZS_GCT[0].KPI_NAME,
    //         xdata: xdata || [],
    //         ydata: ydata || [],
    //         unit: RCZS_GCT[0].KPI_UNIT
    //     }
    // }
    gct = {
      xdata: [1, 2, 3, 4, 5, 6],
      ydata: [1, 2, 3, 4, 5, 6],
      unit: "TUE"
    }
    return (
      <div onMouseOver={() => this.onHover(1, true)} onMouseOut={() => this.onHover(1, false)}>
        {/* className={`${styles.leftContent} ${wheelStatus === 1 ? styles.is_active : ''}`} */}

        {/* <div className={flex}>
                    <div>
                        <p>{rczs.KPI_NAME ? rczs.KPI_NAME : '----'}</p>
                        <p><b>{rczs.KPI_VALUE ? rczs.KPI_VALUE : 0}</b>/{rczs.全省平均 ? rczs.全省平均 : 0}全省平均</p>
                    </div>
                    {rczl}
                </div>
                <div className={styles.fixed_right}>
                    {rcppd.KPI_NAME ? rcppd.KPI_NAME.substring(0, 5) : '----'}: <b>{rcppd.KPI_VALUE ? rcppd.KPI_VALUE : 0}{rcppd.KPI_UNIT}</b>
                </div> */}
        <h2 style={{ color: "#fff", margin: '25px' }}>劳动争议调解</h2>

        <Pieleft style={{ width: '40%', height: 210, float: 'left' }} colorA='#055CD2' colorC='#188df0' colorB="#0ED6F7" title="仲裁调解成功率"></Pieleft>
        <Bar gct={gct} style={{ width: '60%', height: 210, float: 'left' }} title={"各单位类型仲裁调解案例数分布"} />
      </div>
    )
  }
}

RightFirst.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default RightFirst;

