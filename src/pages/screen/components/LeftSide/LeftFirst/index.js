import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../LeftSide.less'
import IndexStyle from '../../../index.less'
import classNames from 'classnames'
import Line from '../../echarts/Line'


@connect(({ screen, loading }) => ({ screen, loading }))
class LeftFirst extends PureComponent {

    render() {
        const { screen } = this.props;
        const { jycy, JYCY_ZMMY, JYCY_JQZS, wheelStatus } = screen;
        const container = classNames('float-clear', styles.flex_item);
        const jycy_zs = jycy && jycy.length > 0 ? jycy[0] : {};
        let zmmy;
        if (JYCY_ZMMY) {
            let xdata = JYCY_ZMMY.map((data) => 
                data.MONTH_ID === 1 ? `${data.YEAR_ID}` : `${data.MONTH_ID}月`
            );
            let yVal = JYCY_ZMMY.map( da =>da.KPI_VALUE );
            let ydata = JYCY_ZMMY.map((data) => {
                return {
                    val: data.KPI_VALUE,
                    dec: data.补充说明
                }
            });
            zmmy = {
                title: JYCY_ZMMY[0].KPI_NAME,
                xdata: xdata || [],
                ydata: ydata || [],
                yVal: yVal || []
            }
        };
        let jqzs = [];
        if (JYCY_JQZS) {
            jqzs = JYCY_JQZS.map((data, index) => 
                <div key={index}>
                    <p>{data.KPI_NAME}</p>
                    <p><b className={styles.has_margin_right}>{data.KPI_VALUE}人</b> <span>全省:<b className={styles.orange}>{data.全省}</b>/{data.省内城市数}</span></p>
                </div>
            );
        }

        return (
            <div className={`${styles.leftContent} ${wheelStatus === 0 ? styles.is_active : ''}`}>
                <div className={IndexStyle.text_title}>就业创业指数</div>
                <div className={styles.under_line}>
                    <span className={styles.label_text}>{jycy_zs.KPI_NAME ? jycy_zs.KPI_NAME : '----' }</span>
                    <span><b>{jycy_zs.KPI_VALUE ? jycy_zs.KPI_VALUE : 0}</b> / {jycy_zs.全省平均 ? jycy_zs.全省平均 : 0}</span> 全省平均
                </div>
                <Line JYCY_ZMMY={zmmy} />
                <div className={container}>
                    {jqzs}
                </div>
            </div>
        )
    }
}

LeftFirst.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default LeftFirst;

