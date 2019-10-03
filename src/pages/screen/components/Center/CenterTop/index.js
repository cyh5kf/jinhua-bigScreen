import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from './index.less'

@connect(({ screen, loading }) => ({ screen, loading }))
class CenterTop extends PureComponent {
    constructor(props){
        super(props)
        this.timer = ''
    }
    
    componentDidMount() {
        this.timer = setInterval(() => {
            const { dispatch, screen } = this.props
            const { wheelStatus } = screen
            let count = wheelStatus + 1
            count = count > 5? 0: count
            dispatch({
                type: 'screen/updateState',
                payload: {
                    wheelStatus: count
                }
            })
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    
    render() {
        const { wheelStatus, MAP_SZRS } = this.props.screen
        let jycy_SZRS = ''
        let rc_SZRS = ''
        let ldgx_SZRS = ''
        let wlxxaq_SZRS = ''
        let ggfw_SZRS = ''
        let shbz_SZRS = ''
        if(MAP_SZRS && MAP_SZRS.length > 0) {
            for(let i of MAP_SZRS) {
                if(i.KPI_NAME === '就业创业指数') {
                    jycy_SZRS = i.KPI_VALUE
                } else if(i.KPI_NAME === '人才指数') {
                    rc_SZRS = i.KPI_VALUE
                } else if(i.KPI_NAME === '劳动关系指数') {
                    ldgx_SZRS = i.KPI_VALUE
                } else if(i.KPI_NAME === '社会保障指数') {
                    shbz_SZRS = i.KPI_VALUE
                } else if(i.KPI_NAME === '公共服务指数') {
                    ggfw_SZRS = i.KPI_VALUE
                } else if(i.KPI_NAME === '网络信息安全指数') {
                    wlxxaq_SZRS = i.KPI_VALUE
                }
            }
        }

        return (
            <div className={styles.centerTop}>
                <div className={styles.icon_yun}></div>
                <svg version="1.1" className="line line1">
                    <path fill="transparent" strokeWidth="1" d="M140 20 Q 95 10 10 30" className="path"></path>
                </svg>

                <div className="ball ball1"></div>

                <svg version="1.1" className="line line2">
                    <path fill="transparent" strokeWidth="1" d="M130 10 Q 95 20 10 90" className="path"></path>
                </svg>

                <div className="ball ball2"></div>

                <svg version="1.1" className="line line3">
                    <path fill="transparent" strokeWidth="1" d="M50 5 Q 30 40 10 90" className="path"></path>
                </svg>

                <div className="ball ball3"></div>

                <svg version="1.1" className="line line4">
                    <path fill="transparent" strokeWidth="1" d="M5 5 Q 32 40 50 90" className="path"></path>
                </svg>

                <div className="ball ball4"></div>

                <svg version="1.1" className="line line5">
                    <path fill="transparent" strokeWidth="1" d="M2 5 Q 95 50 130 90" className="path"></path>
                </svg>

                <div className="ball ball5"></div>

                <svg version="1.1" className="line line6">
                    <path fill="transparent" strokeWidth="1" d="M10 16 Q 95 17 140 28" className="path"></path>
                </svg>

                <div className="ball ball6"></div>

                <div className={`${styles.block} ${styles.block1} ${wheelStatus === 0? styles.active: ''}`}>
                    {
                        jycy_SZRS !== '' ? (
                            <p>就业创业指数{wheelStatus === 0? '(' + jycy_SZRS + ')': '' }</p>
                        ): (
                            <p>就业创业指数</p>
                        )
                    }
                    <div className={styles.icon_block}></div>
                </div>
                <div className={`${styles.block} ${styles.block2} ${wheelStatus === 1? styles.active: ''}`}>
                    {
                        rc_SZRS !== '' ? (
                            <p>人才指数{wheelStatus === 1? '(' + rc_SZRS + ')': '' }</p>
                        ): (
                            <p>人才指数</p>
                        )
                    }
                    <div className={styles.icon_block}></div>
                </div>
                <div className={`${styles.block} ${styles.block3} ${wheelStatus === 2? styles.active: ''}`}>
                    {
                        ldgx_SZRS !== '' ? (
                            <p>劳动关系指数{wheelStatus === 2? '(' + ldgx_SZRS + ')': '' }</p>
                        ): (
                            <p>劳动关系指数</p>
                        )
                    }
                    <div className={styles.icon_block}></div>
                </div>
                <div className={`${styles.block} ${styles.block4} ${wheelStatus === 3? styles.active: ''}`}>
                    {
                        wlxxaq_SZRS !== '' ? (
                            <p>网络信息安全指数{wheelStatus === 3? '(' + wlxxaq_SZRS + ')': '' }</p>
                        ): (
                            <p>网络信息安全指数</p>
                        )
                    }
                    <div className={styles.icon_block}></div>
                </div>
                <div className={`${styles.block} ${styles.block5} ${wheelStatus === 4? styles.active: ''}`}>
                    {
                        ggfw_SZRS !== '' ? (
                            <p>公共服务指数{wheelStatus === 4? '(' + ggfw_SZRS + ')': '' }</p>
                        ): (
                            <p>公共服务指数</p>
                        )
                    }
                    <div className={styles.icon_block}></div>
                </div>
                <div className={`${styles.block} ${styles.block6} ${wheelStatus === 5? styles.active: ''}`}>
                    {
                        shbz_SZRS !== '' ? (
                            <p>社会保障指数{wheelStatus === 5? '(' + shbz_SZRS + ')': '' }</p>
                        ): (
                            <p>社会保障指数</p>
                        )
                    }
                    <div className={styles.icon_block}></div>
                </div>
            </div>
        )
    }
}

CenterTop.propTypes = {
    loading: PropTypes.object,
}

export default CenterTop;

