import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import styles from '../RightSide.less'
import IndexStyle from '../../../index.less'
import classNames from 'classnames'
import LineJianCha from '../../echarts/LineJianCha'
import LineRenShi from '../../echarts/LineRenShi'

@connect(({ screen, loading }) => ({ screen, loading }))
class RightFirst extends PureComponent {

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
        const { LDGX, LDGX_RCYJ, LDGX_YJHJ, LDGX_LDJC, LDGX_RSZY } = screen;
        const container = classNames('float-clear', styles.flex_item, styles.flex_hasBg);

        const ldgx = LDGX && LDGX.length > 0 ? LDGX[0] : {};
        const rcyj = LDGX_RCYJ && LDGX_RCYJ.length > 0 ? LDGX_RCYJ[0] : {};
        const yjhj = LDGX_YJHJ && LDGX_YJHJ.length > 0 ? LDGX_YJHJ[0] : {};
        let ldjc, ldrs;
        if (LDGX_LDJC) {
            let xdata = LDGX_LDJC.map((data) => data.YEAR_ID);
            let ydata = LDGX_LDJC.map(data => data.KPI_VALUE);
            ldjc = {
                title: LDGX_LDJC[0].KPI_NAME,
                xdata: xdata || [],
                ydata: ydata || []
            }
        }
        if (LDGX_RSZY) {
            let xdata = LDGX_RSZY.map((data) => data.YEAR_ID);
            let ydata = LDGX_RSZY.map(data => data.KPI_VALUE);
            ldrs = {
                title: LDGX_RSZY[0].KPI_NAME,
                xdata: xdata || [],
                ydata: ydata || []
            }
        }

        return (
            <div className={styles.rightContent}>
                <div className={IndexStyle.text_title} onClick={() => this.onChangeZb(3)}>
                    <span>劳动关系和谐指数</span>
                    <span className={IndexStyle.num}>{ldgx.KPI_VALUE? Math.round(ldgx.KPI_VALUE): 0}</span>
                </div>
                <div className={IndexStyle.block_item} onClick={() => this.onLinkTo('/fpldgx')}>
                    <div className={container}>
                        <div>
                            <p>{ldgx.KPI_NAME ? ldgx.KPI_NAME : '----'}</p>
                            <p className={styles.flex_item}>
                                <span><b className={IndexStyle.numfont}>{ldgx.KPI_VALUE ? Math.round(ldgx.KPI_VALUE*100)/100 : 0}</b> </span>
                                <span>
                                    全省:
                                    <b className={styles.orange}>{ldgx.全省 ? ldgx.全省 : 0}</b>/{ldgx.省内城市数 ? ldgx.省内城市数 : 0}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>{rcyj.KPI_NAME ? rcyj.KPI_NAME : '----'}</p>
                            <p>
                                <span className={styles.line_height}>
                                    <b className={IndexStyle.numfont}>{rcyj.KPI_VALUE ? Math.round(rcyj.KPI_VALUE * 100) / 100 : 0}<span style={{fontSize:'14px'}}>{rcyj.KPI_UNIT ? rcyj.KPI_UNIT : ''}</span></b>
                                    ／{rcyj.全省平均 ? rcyj.全省平均 : 0}
                                    %全省平均
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>{yjhj.KPI_NAME ? yjhj.KPI_NAME : '----'}</p>
                            <p className={styles.flex_item}>
                                <span><b className={IndexStyle.numfont}>{yjhj.KPI_VALUE ? Math.round(yjhj.KPI_VALUE * 100) / 100 : 0}<span style={{ fontSize: '14px'}}>{yjhj.KPI_UNIT ? yjhj.KPI_UNIT : ''}</span></b> </span>
                                <span>
                                    全省:
                                    <b className={styles.orange}>{yjhj.全省 ? yjhj.全省 : 0}</b>/{yjhj.省内城市数 ? yjhj.省内城市数 : 0}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.flex_item}>
                        <LineJianCha datas={ldjc} />
                        <LineRenShi datas={ldrs} />
                    </div>
                </div>

            </div>
        )
    }
}

RightFirst.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default withRouter(RightFirst);
