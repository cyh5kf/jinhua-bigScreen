import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import styles from '../LeftSide.less'
import IndexStyle from '../../../index.less'
import Bar from '../../echarts/Bar'
import classNames from 'classnames'

@connect(({ screen, loading }) => ({ screen, loading }))
class LeftThird extends PureComponent {

    onChangeBlock = (ind, flag) => {
        const { dispatch } = this.props
        dispatch({
            type: 'screen/updateState',
            payload: {
                blockSelect: ind,
                // zbSelect: flag? '': 0
            }
        })
    }

    onLinkTo = (url) => {
        const { history } = this.props
        history.push(url);
    }

    // 修改中间地图显示状态
    onChangeZb = (count) => {
        const { dispatch } = this.props

        dispatch({
            type: 'screen/updateState',
            payload: {
                zbSelect: count
            }
        })
    }

    render() {
        const { screen } = this.props;
        const { RCZS, RCZS_RCZL, RCZS_RCPPD, RCZS_GCT } = screen;
        const flex = classNames(styles.flex_item, styles.under_line);
        
        const rczs = RCZS && RCZS.length > 0 ? RCZS[0] : {};
        const rcppd = RCZS_RCPPD && RCZS_RCPPD.length > 0 ? RCZS_RCPPD[0] : {};
        let rczl = [];
        if (RCZS_RCZL) {
            rczl = RCZS_RCZL.map((data, index) =>
                <div key={index}>
                    <p>{data.KPI_NAME}</p>
                    <p><b className={IndexStyle.numfont}>{data.KPI_VALUE}{data.KPI_UNIT}</b>/{data.KPI_TARGET}{data.KPI_TARGET_UNIT}</p>
                </div>
            );
        }
        let gct;
        if (RCZS_GCT) {
            let xdata = RCZS_GCT.map((data) =>data.KPI_NAME);
            let ydata = RCZS_GCT.map(data => data.KPI_VALUE);
            gct = {
                // title: RCZS_GCT[0].KPI_NAME,
                xdata: xdata || [],
                ydata: ydata || [],
                unit: RCZS_GCT[0].KPI_UNIT
            }
        }

        return (
            <div className={styles.leftContent}>
                <div className={IndexStyle.text_title} onClick={() => this.onChangeZb(2)}>
                    <span>人才队伍发展指数</span>
                    <span className={IndexStyle.num}>{rczs.KPI_VALUE? Math.round(rczs.KPI_VALUE): 0}</span>
                </div>
                <div className={IndexStyle.block_item} onClick={() => this.onLinkTo('/rc')}>
                    <div className={flex}>
                        <div>
                            <p>{rczs.KPI_NAME ? rczs.KPI_NAME : '----'}</p>
                            <p><span><b className={IndexStyle.numfont}>{rczs.KPI_VALUE ? Math.round(rczs.KPI_VALUE) : 0}</b> / --全省平均</span></p>
                        </div>
                        {rczl}
                    </div>
                    <div className={styles.fixed_right}>
                        {rcppd.KPI_NAME ? rcppd.KPI_NAME.substring(0, 5) : '----'}: <b className={IndexStyle.numfont}>{rcppd.KPI_VALUE ? rcppd.KPI_VALUE : 0}{rcppd.KPI_UNIT}</b>
                    </div>
                    <Bar gct={gct} />
                </div>
                
            </div>
        )
    }
}

LeftThird.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default withRouter(LeftThird);

