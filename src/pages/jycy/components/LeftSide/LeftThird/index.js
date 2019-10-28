import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../LeftSide.less'
import IndexStyle from '../../../index.less'
import classNames from 'classnames'
import Pie from '../../echarts/Pie'
import LineRenShi from '../../echarts/LineRenShi'

@connect(({ screen, loading }) => ({ screen, loading }))
class LeftThird extends PureComponent {

    onHover = (ind, ishover) => {
        const { dispatch } = this.props
        dispatch({
            type: 'screen/updateState',
            payload: {
                wheelStatus: ind,
                isHover: ishover
            }
        })
    }

    render() {
        // const { screen } = this.props;
        // const { LDGX, LDGX_RCYJ, LDGX_YJHJ, LDGX_LDJC, LDGX_RSZY, wheelStatus } = screen;
        // const container = classNames('float-clear', styles.flex_item, styles.flex_hasBg);

        // const ldgx = LDGX && LDGX.length > 0 ? LDGX[0] : {};
        // const rcyj = LDGX_RCYJ && LDGX_RCYJ.length > 0 ? LDGX_RCYJ[0] : {};
        // const yjhj = LDGX_YJHJ && LDGX_YJHJ.length > 0 ? LDGX_YJHJ[0] : {};
        // let ldjc, ldrs;
        // if (LDGX_LDJC) {
        //     let xdata = LDGX_LDJC.map((data) => data.YEAR_ID);
        //     let ydata = LDGX_LDJC.map(data => data.KPI_VALUE);
        //     ldjc = {
        //         title: LDGX_LDJC[0].KPI_NAME,
        //         xdata: xdata || [],
        //         ydata: ydata || []
        //     }
        // }
        // if (LDGX_RSZY) {
        //     let xdata = LDGX_RSZY.map((data) => data.YEAR_ID);
        //     let ydata = LDGX_RSZY.map(data => data.KPI_VALUE);
        //     ldrs = {
        //         title: LDGX_RSZY[0].KPI_NAME,
        //         xdata: xdata || [],
        //         ydata: ydata || []
        //     }
        // }

        return (
            <div onMouseOver={() => this.onHover(2, true)} onMouseOut={() => this.onHover(2, false)} className={`${styles.leftContent} ${0 === 2 ? styles.is_active : ''}`}>
                {/* <div className={IndexStyle.text_title}>劳动关系指数</div>
                <div className={container}>
                    <div>
                        <p>{ldgx.KPI_NAME ? ldgx.KPI_NAME : '----'}</p>
                        <p className={styles.flex_item}>
                            <span><b className={styles.has_margin_right}>{ldgx.KPI_VALUE ? ldgx.KPI_VALUE : 0}</b> </span>
                            <span>
                                <label className={styles.fontsize_small}>全省:</label>
                                <b className={styles.orange}>{ldgx.全省 ? ldgx.全省 : 0}</b>/{ldgx.省内城市数 ? ldgx.省内城市数 : 0}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>{rcyj.KPI_NAME ? rcyj.KPI_NAME : '----'}</p>
                        <p>
                            <span className={styles.line_height}>
                                <b>{rcyj.KPI_VALUE ? rcyj.KPI_VALUE : 0}{rcyj.KPI_UNIT ? rcyj.KPI_UNIT : ''}</b>
                                <label className={styles.fontsize_small}>／{rcyj.全省平均 ? rcyj.全省平均 : 0}</label>
                                <label className={styles.fontsize_small}>全省平均</label>
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>{yjhj.KPI_NAME ? yjhj.KPI_NAME : '----'}</p>
                        <p className={styles.flex_item}>
                            <span><b className={styles.has_margin_right}>{yjhj.KPI_VALUE ? yjhj.KPI_VALUE : 0}{yjhj.KPI_UNIT ? yjhj.KPI_UNIT : ''}</b> </span>
                            <span>
                                <label className={styles.fontsize_small}>全省:</label>
                                <b className={styles.orange}>{yjhj.全省 ? yjhj.全省 : 0}</b>/{yjhj.省内城市数 ? yjhj.省内城市数 : 0}
                            </span>
                        </p>
                    </div>
                </div> */}
                <h2 style={{ color: "#fff" }}>浙江无欠薪</h2>
                <div>日常抽查率：</div>
                <div className={styles.flex_item}>
                    <Pie style={{ width: '100%', height: 129 }} colorA='#055CD2' colorC='#188df0' colorB="#0ED6F7" title="企业月抽检出率"></Pie>
                    <Pie style={{ width: '100%', height: 129 }} colorB='#D25E0C' colorA='#D98916' colorC="#E8E92C" title="工程项目月抽查率"></Pie>
                </div>
                <div>
                    <div>欠薪事件发生率</div>
                    <div style={{ background:'#1F2239',width:'430px',height:'70px',padding:'20px 50px'}}>全市：    较去年同期：    全省排名：</div>
                </div>
            </div>
        )
    }
}

LeftThird.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default LeftThird;

