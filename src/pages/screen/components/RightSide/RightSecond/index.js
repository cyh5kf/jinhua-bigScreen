import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import styles from '../RightSide.less'
import classNames from 'classnames'
import IndexStyle from '../../../index.less'
import LineSheBao from '../../echarts/LineSheBao'
// import BarBaoXian from  '../../echarts/BarBaoXian'
import GDPProgress from '../../Progress/GDPProgress'

@connect(({ screen, loading }) => ({ screen, loading }))
class RightSecond extends PureComponent {

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
        const { SHBZ, SHBZ_YXQYS, SHBZ_GDPZB, SHBZ_LFNL, SHBZ_RJFL, SHBZ_CKHY } = screen;
        const underline = classNames(styles.flex_item, styles.under_line);
        const container = classNames('float-clear', styles.flex_item, styles.flex_hasBg);

        const shbz = SHBZ && SHBZ.length > 0 ? SHBZ[0] : {};
        const yxqys = SHBZ_YXQYS && SHBZ_YXQYS.length > 0 ? SHBZ_YXQYS[0] : {};
        const gdpzb = SHBZ_GDPZB && SHBZ_GDPZB.length > 0 ? SHBZ_GDPZB[0] : {};

        let lfnl;
        if (SHBZ_LFNL) {
            let xdata = SHBZ_LFNL.map((data) => data.YEAR_ID);
            let shiji = SHBZ_LFNL.map(data => {
                return data.DATA_TYPE === '实际' ? data.KPI_VALUE : null;
            });
            let yuce = SHBZ_LFNL.map(data => {
                return data.DATA_TYPE === '预测' ? data.KPI_VALUE : null;
            });
            const all = SHBZ_LFNL.map(da => {
                return da.DATA_TYPE
            });
            const ind = all.indexOf('预测') - 1;
            yuce[ind] = shiji[ind];
            lfnl = {
                title: SHBZ_LFNL[0].KPI_NAME,
                xdata: xdata || [],
                shiji: shiji || [],
                yuce: yuce || []
            }
        }

        let rjfl = [];
        let title;
        if (SHBZ_RJFL) {
            rjfl = SHBZ_RJFL.map((data, index) => {
                const text = data.KPI_NAME;
                const name = text.substring(text.indexOf("（") + 1, text.indexOf("）"));
                title = text.substring(0, text.indexOf("（"));
                return (
                    <div className={styles.fle_content} key={index}>
                        <p>{name}</p>
                        <p><b className={`${styles.has_margin_right} ${IndexStyle.numfont}`}>{data.KPI_VALUE}{data.KPI_UNIT}</b></p>
                        {/* <p><label>全省: </label><b className={styles.orange}>{data.全省}</b>/{data.省内城市数}</p> */}
                        <p><label>全省: </label><b className={styles.orange}>--</b>/{data.省内城市数}</p>
                    </div>
                )
            });
        }

        let ckhy = [];
        let subtitle;
        if (SHBZ_CKHY) {
            ckhy = SHBZ_CKHY.map((data, index) => {
                const text = data.KPI_NAME;
                const subname = text.substring(text.indexOf("（") + 1, text.indexOf("）"));
                subtitle = text.substring(0, text.indexOf("（"));
                // return <div key={index} >
                //     <p>{subname}</p>
                //     <p className={styles.flex_item}>
                //         <span><b className={styles.has_margin_right}>{data.KPI_VALUE}{data.KPI_UNIT}</b> </span>
                //         <span><label>全省:</label><b className={styles.orange}>{data.全省}</b>/{data.省内城市数}</span>
                //     </p>
                // </div>
                return <div key={index}>
                    <span className={styles.label_text}>{subtitle ? subtitle : '----'}</span>
                    <span>
                        <b className={IndexStyle.numfont}>{data.KPI_VALUE ? data.KPI_VALUE : 0}</b> &nbsp;&nbsp;
                            <label>全省:</label><b className={styles.orange}>{data.全省}</b>/{data.省内城市数}
                    </span>
                </div>
            });
        }


        return (
            <div className={styles.rightContent}>
                <div className={IndexStyle.text_title} onClick={() => this.onChangeZb(4)}>
                    <span>社会保障水平指数</span>
                    <span className={IndexStyle.num}>{shbz.KPI_VALUE? Math.round(shbz.KPI_VALUE): 0}</span>
                </div>
                <div className={IndexStyle.block_item} onClick={() => this.onLinkTo('/shbz')}>
                    <div className={underline}>
                        <div>
                            <p>{shbz.KPI_NAME ? shbz.KPI_NAME : '----'}</p>
                            {/* <p><b className={IndexStyle.numfont}>{shbz.KPI_VALUE ? shbz.KPI_VALUE : 0}</b>/{shbz.全省平均 ? shbz.全省平均 : 0} */}
                            <p><b className={IndexStyle.numfont}>{shbz.KPI_VALUE ?  Math.round(shbz.KPI_VALUE) : 0}</b>/ --
                            全省平均</p>
                        </div>
                        <div>
                            <p>{yxqys.KPI_NAME ? yxqys.KPI_NAME : '----'}</p>
                            <p><b className={IndexStyle.numfont}>{yxqys.KPI_VALUE ? yxqys.KPI_VALUE : 0}</b>{yxqys.KPI_UNIT ? yxqys.KPI_UNIT : ''}</p>
                        </div>
                    </div>
                    <div className={underline}>
                        <div>
                            <p>{gdpzb.KPI_NAME ? gdpzb.KPI_NAME : '----'}</p>
                            <div>
                                <p className={styles.flex_item}>
                                    <span><b className={`${styles.has_margin_right} ${IndexStyle.numfont}`}>{gdpzb.KPI_VALUE ? gdpzb.KPI_VALUE : 0}{gdpzb.KPI_UNIT ? gdpzb.KPI_UNIT : ''}</b></span>
                                    {/* <span>全省:<b className={styles.orange}>{gdpzb.全省 ? gdpzb.全省 : 0}</b>/{gdpzb.省内城市数 ? gdpzb.省内城市数 : 0}</span> */}
                                    <span>全省:<b className={styles.orange}>--</b>/{gdpzb.省内城市数 ? gdpzb.省内城市数 : 0}</span>
                                </p>
                            </div>
                            <GDPProgress gdpzb={gdpzb} />
                            {/* <div className={styles.gdp}>
                                <p className={styles.val}></p>
                                <p className={styles.all}></p>
                            </div> */}
                        </div>
                        <LineSheBao lfnl={lfnl} />
                    </div>
                    <div>
                        <p>{title}</p>
                        <div className={styles.flex_item} style={{ 'margin': '0.05rem 0' }}>
                            {rjfl}
                        </div>
                    </div>
                    {/* <BarBaoXian /> */}
                    {/* <p className={styles.margin_bottom}>{subtitle} </p> */}
                    {/* <div className={container}>
                        {ckhy}
                    </div> */}
                    <div>
                        {ckhy}
                    </div>  
                </div>

            </div>
        )
    }
}

RightSecond.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default withRouter(RightSecond);

