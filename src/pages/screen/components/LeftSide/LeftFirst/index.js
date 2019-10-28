import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import styles from '../LeftSide.less'
import IndexStyle from '../../../index.less'
// import Pie from '../../echarts/Pie'
import classNames from 'classnames'
import FuWuProgress from '../../Progress/FuWuProgress'
const $ = window.$

@connect(({ screen, loading }) => ({ screen, loading }))
class LeftFirst extends PureComponent {

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

    lunbo() {
        $(".lunbo_box").textSlider({
            speed: 120, //数值越大，速度越慢
            line: 1 //触摸翻滚的条数
        });
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

    // 组件已经被渲染到 DOM 中，设置定时器
    componentDidMount() {
        this.lunboCount = setTimeout(() => this.lunbo(), 3000);
    }

    // 组件从 DOM 中被移除，清除定时器
    componentWillUnmount() {
        clearInterval(this.lunboCount);
    }

    render() {
        const { screen } = this.props;
        const { GGFW, PYC_FWMYD, PYC_SXBL } = screen;
        const container = classNames(styles.flex_item, styles.fontsize_small);

        const ggfw = GGFW && GGFW.length > 0 ? GGFW[0] : {};
        const fwmyd = PYC_FWMYD && PYC_FWMYD.length > 0 ? PYC_FWMYD[0] : {};

        let sxbl = [];
        let title;
        if (PYC_SXBL) {
            sxbl = PYC_SXBL.map((data, index) => {
                const text = data.KPI_NAME;
                const name = text.substring(text.indexOf("（") + 1, text.indexOf("）"));
                title = text.substring(0, text.indexOf("（"));
                return <li className={container} key={index} >
                    <span>{name}</span>
                    <span>
                        <b className={styles.has_margin_right}>{data.KPI_VALUE}{data.KPI_UNIT}</b>
                        <label>全省:</label><b className={styles.orange}>{data.全省}</b>/{data.省内城市数}
                                    </span>
                </li>
            });
        }

        return (
            <div className={styles.leftContent}>
                <div className={IndexStyle.text_title} onClick={() => this.onChangeZb(0)}>
                    <span>公共服务质量指数</span>
                    <span className={IndexStyle.num}>{ggfw.KPI_VALUE? Math.round(ggfw.KPI_VALUE): 0}</span>
                </div>
                <div className={`${styles.flex_item} ${IndexStyle.block_item}`} onClick={() => this.onLinkTo('/zjygzw')}>
                    <div className={styles.flex_column} style={{ width: '35%' }}>
                        <div>
                            <span className={styles.label_text}>{ggfw.KPI_NAME ? ggfw.KPI_NAME : '----'}</span>
                            <p><span><b className={IndexStyle.numfont}>{ggfw.KPI_VALUE ? Math.round(ggfw.KPI_VALUE) : 0}</b> / --全省平均</span></p>
                        </div>
                        <FuWuProgress fwmyd={fwmyd} />
                        {/* <Pie /> */}
                    </div>
                    <div style={{width: '60%'}}>
                        <div className={styles.hasBg}>
                            <p>{title}</p>
                            <div className="lunbo_box">
                                <ul>
                                    {sxbl}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LeftFirst.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default withRouter(LeftFirst)

