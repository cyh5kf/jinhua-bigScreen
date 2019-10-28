import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from './index.less'

@connect(({ screen, loading }) => ({ screen, loading }))
class CenterData extends PureComponent {
    constructor(props){
        super(props)
        this.timer = ''
        this.ticker = this.ticker.bind(this);
    }

    ticker = () => {
        const { dispatch, screen } = this.props
        const { zbSelect } = screen

        let count = zbSelect + 1
        count = count > 5 ? 0 : count
        dispatch({
            type: 'screen/updateState',
            payload: {
                zbSelect: count
            }
        })
    }

    onHover = (ind, flag) => {
        // const { dispatch } = this.props
        // dispatch({
        //     type: 'screen/updateState',
        //     payload: {
        //         zbSelect: ind,
        //         isHover: flag
        //     }
        // })
    }

    onChangeZb = (count) => {
        const { dispatch } = this.props

        dispatch({
            type: 'screen/updateState',
            payload: {
                zbSelect: count
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    
    render() {
        const { GGFW, jycy, RCZS, LDGX, SHBZ, WLXX, zbSelect, isHover } = this.props.screen

        let jycyzs = jycy && jycy.length > 0 ? jycy[0] : {};
        let rc = RCZS && RCZS.length > 0 ? RCZS[0] : {};
        let ldgx = LDGX && LDGX.length > 0 ? LDGX[0] : {};
        let wlxxaq = WLXX && WLXX.length > 0 ? WLXX[0] : {};
        let ggfw = GGFW && GGFW.length > 0 ? GGFW[0] : {};
        let shbz = SHBZ && SHBZ.length > 0 ? SHBZ[0] : {};

        // if (isHover) {
        //     clearInterval(this.timer)
        // } else {
        //     clearInterval(this.timer)
        //     this.timer = setInterval(this.ticker, 5000)
        // }
        
        return (
            <div id="centerContent" className={styles.centerData}>
                <div className={styles.line}>
                    <div className={`${styles.sider} ${zbSelect === 0? styles.active: ''}`} onClick={() => this.onChangeZb(0)} onMouseOver={() => this.onHover(0, true)} onMouseOut={() => this.onHover(0, false)}>
                        <div className={styles.left}>
                            <img className={styles.icon_title} style={{width: '0.2rem', height: '0.2rem'}} src={require("../../../../../assets/images/screen/ggfwzs.svg")} alt="" ></img>
                            <div className={styles.title}>
                                <p className={styles.name}>公共服务指数</p>
                                <p className={styles.en_name}>PUBLIC SERVICE INDEX</p>
                            </div>
                        </div>
                        <span className={styles.value}>{ggfw.KPI_VALUE? parseInt(ggfw.KPI_VALUE): 0}</span>
                    </div>

                    <div className={`${styles.sider} ${zbSelect === 1? styles.active: ''}`} onClick={() => this.onChangeZb(1)} onMouseOver={() => this.onHover(1, true)} onMouseOut={() => this.onHover(1, false)}>
                        <div className={styles.left}>
                            <img className={styles.icon_title} style={{width: '0.2rem', height: '0.19rem'}} src={require("../../../../../assets/images/screen/jiuyexinxi.svg")} alt="" ></img>
                            <div className={styles.title}>
                                <p className={styles.name}>就业创业指数</p>
                                <p className={styles.en_name}>EMPLOYMENT  INDEX</p>
                            </div>
                        </div>
                        <span className={styles.value}>{jycyzs.KPI_VALUE? parseInt(jycyzs.KPI_VALUE): 0}</span>
                    </div>

                    <div className={`${styles.sider} ${zbSelect === 2? styles.active: ''}`} onClick={() => this.onChangeZb(2)} onMouseOver={() => this.onHover(2, true)} onMouseOut={() => this.onHover(2, false)}>
                        <div className={styles.left}>
                            <img className={styles.icon_title} style={{width: '0.1583rem', height: '0.1666rem'}} src={require("../../../../../assets/images/screen/rencaizhishu.svg")} alt="" ></img>
                            <div className={styles.title}>
                                <p className={styles.name}>人才指数</p>
                                <p className={styles.en_name}>TALENT INDEX</p>
                            </div>
                        </div>
                        <span className={styles.value}>{parseInt(rc.KPI_VALUE)}</span>
                    </div>
                </div>

                <div className={styles.line}>
                    <div className={`${styles.sider} ${zbSelect === 3? styles.active: ''}`} onClick={() => this.onChangeZb(3)} onMouseOver={() => this.onHover(3, true)} onMouseOut={() => this.onHover(3, false)}>
                        <div className={styles.left}>
                            <img className={styles.icon_title} style={{width: '0.1833rem', height: '0.1833rem'}} src={require("../../../../../assets/images/screen/guanxi.svg")} alt="" ></img>
                            <div className={styles.title}>
                                <p className={styles.name}>劳动关系指数</p>
                                <p className={styles.en_name}>LABOR RELATIONS INDEX</p>
                            </div>
                        </div>
                        <span className={styles.value}>{ldgx.KPI_VALUE? parseInt(ldgx.KPI_VALUE): 0}</span>
                    </div>

                    <div className={`${styles.sider} ${zbSelect === 4? styles.active: ''}`} onClick={() => this.onChangeZb(4)} onMouseOver={() => this.onHover(4, true)} onMouseOut={() => this.onHover(4, false)}>
                        <div className={styles.left}>
                            <img className={styles.icon_title} style={{width: '0.175rem', height: '0.2rem'}} src={require("../../../../../assets/images/screen/baozhang.svg")} alt="" ></img>
                            <div className={styles.title}>
                                <p className={styles.name}>社会保障指数</p>
                                <p className={styles.en_name}>SOCIAL SECURITY INDEX</p>
                            </div>
                        </div>
                        <span className={styles.value}>{shbz.KPI_VALUE? parseInt(shbz.KPI_VALUE): 0}</span>
                    </div>

                    <div className={`${styles.sider} ${zbSelect === 5? styles.active: ''}`} onClick={() => this.onChangeZb(5)} onMouseOver={() => this.onHover(5, true)} onMouseOut={() => this.onHover(5, false)}>
                        <div className={styles.left}>
                            <img className={styles.icon_title} style={{width: '0.1833rem', height: '0.1666rem'}} src={require("../../../../../assets/images/screen/wanglou.svg")} alt="" ></img>
                            <div className={styles.title}>
                                <p className={styles.name}>网络信息安全指数</p>
                                <p className={styles.en_name}>SAFETY INDEX</p>
                            </div>
                        </div>
                        <span className={styles.value}>{wlxxaq.KPI_VALUE? parseInt(wlxxaq.KPI_VALUE): 0}</span>
                    </div>
                </div>


            </div>
        )
    }
}

CenterData.propTypes = {
    loading: PropTypes.object,
}

export default CenterData;

