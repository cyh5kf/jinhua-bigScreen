import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import styles from '../LeftSide.less'
import IndexStyle from '../../../index.less'
import classNames from 'classnames'
import Line from '../../echarts/Line'


@connect(({ screen, loading }) => ({ screen, loading }))
class LeftSecond extends PureComponent {

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
        const { jycy, JYCY_ZMMY, JYCY_JQZS } = screen;
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
                    <p>
                        <b className={styles.has_margin_right}>
                            <span className={IndexStyle.numfont}>{data.KPI_VALUE}</span>
                            <span style={{color: '#fff'}}>人</span>
                        </b>
                        <span>全省:<b className={styles.orange}>{data.全省}</b>/{data.省内城市数}</span>
                    </p>
                </div>
            );
        }

        return (
            <div className={styles.leftContent}>
                <div className={IndexStyle.text_title} style={{display: 'flex', justifyContent: 'space-between'}} onClick={() => this.onChangeZb(1)}>
                    <div>
                        <span>就业创业景气指数</span>
                        <span className={IndexStyle.num}>{jycy_zs.KPI_VALUE? Math.round(jycy_zs.KPI_VALUE): 0}</span>
                    </div>
                    <div style={{fontSize: '12px'}}>
                        {/* <span><b style={{fontSize: '0.1833rem'}}>{jycy_zs.KPI_VALUE ? jycy_zs.KPI_VALUE : 0}</b> / {jycy_zs.全省平均 ? jycy_zs.全省平均 : 0}</span> <span style={{color: '#75809B'}}>全省平均</span> */}
                        <span><b style={{fontSize: '0.1833rem'}}>{jycy_zs.KPI_VALUE ? Math.round(jycy_zs.KPI_VALUE) : 0}</b> / --</span> <span style={{color: '#75809B'}}>全省平均</span>
                    </div>
                </div>
                <div className={IndexStyle.block_item} onClick={() => this.onLinkTo('/jycyTwo')}>
                    <Line JYCY_ZMMY={zmmy} />
                    <div style={{marginTop: '0.1rem'}} className={container}>
                        {jqzs}
                    </div> 
                </div>
                
            </div>
        )
    }
}

LeftSecond.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default withRouter(LeftSecond);

