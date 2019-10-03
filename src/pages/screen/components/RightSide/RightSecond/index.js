import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../RightSide.less'
import IndexStyle from '../../../index.less'
// import Pie from '../../echarts/Pie'
import classNames from 'classnames'
import FuWuProgress from '../../Progress/FuWuProgress'
const $ = window.$

@connect(({ screen, loading }) => ({ screen, loading }))
class RightSecond extends PureComponent {

    lunbo() {
        $(".lunbo_box").textSlider({
            speed: 120, //数值越大，速度越慢
            line: 1 //触摸翻滚的条数
        });
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
        const { GGFW, PYC_FWMYD, PYC_SXBL, wheelStatus } = screen;
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
            <div className={`${styles.rightContent} ${wheelStatus === 4 ? styles.is_active : ''}`}>
                <div className={IndexStyle.text_title}>公共服务指数</div>
                <div className={styles.flex_item}>
                    <div className={styles.flex_column} style={{ width: '35%' }}>
                        <div>
                            <span className={styles.label_text}>{ggfw.KPI_NAME ? ggfw.KPI_NAME : '----'}</span>
                            <p><span><b>{ggfw.KPI_VALUE ? ggfw.KPI_VALUE : 0}</b>／{ggfw.全省平均 ? ggfw.全省平均 : 0}全省平均</span></p>
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

RightSecond.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default RightSecond;

