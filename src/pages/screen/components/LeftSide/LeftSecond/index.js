import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../LeftSide.less'
import IndexStyle from '../../../index.less'
import Bar from '../../echarts/Bar'
import classNames from 'classnames'

@connect(({ screen, loading }) => ({ screen, loading }))
class LeftSecond extends PureComponent {

    render() {
        const { screen } = this.props;
        const { RCZS, RCZS_RCZL, RCZS_RCPPD, RCZS_GCT, wheelStatus } = screen;
        const flex = classNames(styles.flex_item, styles.under_line);
        
        const rczs = RCZS && RCZS.length > 0 ? RCZS[0] : {};
        const rcppd = RCZS_RCPPD && RCZS_RCPPD.length > 0 ? RCZS_RCPPD[0] : {};
        let rczl = [];
        if (RCZS_RCZL) {
            rczl = RCZS_RCZL.map((data, index) =>
                <div key={index}>
                    <p>{data.KPI_NAME}</p>
                    <p><b>{data.KPI_VALUE}{data.KPI_UNIT}</b>/{data.KPI_TARGET}{data.KPI_TARGET_UNIT}</p>
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
            <div className={`${styles.leftContent} ${wheelStatus === 1 ? styles.is_active : ''}`}>
                <div className={IndexStyle.text_title}>人才指数</div>
                <div className={flex}>
                    <div>
                        <p>{rczs.KPI_NAME ? rczs.KPI_NAME : '----'}</p>
                        <p><b>{rczs.KPI_VALUE ? rczs.KPI_VALUE : 0}</b>/{rczs.全省平均 ? rczs.全省平均 : 0}全省平均</p>
                    </div>
                    {rczl}
                </div>
                <div className={styles.fixed_right}>
                    {rcppd.KPI_NAME ? rcppd.KPI_NAME.substring(0, 5) : '----'}: <b>{rcppd.KPI_VALUE ? rcppd.KPI_VALUE : 0}{rcppd.KPI_UNIT}</b>
                </div>
                <Bar gct={gct} />
            </div>
        )
    }
}

LeftSecond.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default LeftSecond;

