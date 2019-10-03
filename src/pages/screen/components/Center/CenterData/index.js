import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from './index.less'

@connect(({ screen, loading }) => ({ screen, loading }))
class CenterData extends PureComponent {
    
    render() {
        const { wheelStatus, MAP_FJLXZB } = this.props.screen

        let jycy = []
        let rc = []
        let ldgx = []
        let wlxxaq = []
        let ggfw = []
        let shbz = []
        if(MAP_FJLXZB && MAP_FJLXZB.length > 0) {
            for(let i of MAP_FJLXZB) {
                if(i.KPI_CLASS === '就业创业指数') {
                    jycy.push(i)
                } else if(i.KPI_CLASS === '人才指数') {
                    rc.push(i)
                } else if(i.KPI_CLASS === '劳动关系指数') {
                    ldgx.push(i)
                } else if(i.KPI_CLASS === '社会保障指数') {
                    shbz.push(i)
                } else if(i.KPI_CLASS === '公共服务指数') {
                    ggfw.push(i)
                } else if(i.KPI_CLASS === '网络信息安全指数') {
                    wlxxaq.push(i)
                }
            }
        }
        

        return (
            <div className={styles.centerData}>
                {
                    MAP_FJLXZB && MAP_FJLXZB.length> 0 && wheelStatus === 0 && (
                        jycy.map((item, index) => {
                            return (
                                <div className={styles.sider} key={index}>
                                    <p className={styles.title}>{item.KPI_NAME}</p>
                                    <p>
                                        <span className={styles.value}>{item.KPI_VALUE}</span>
                                        <span className={styles.target}> /{item.目标} 全省平均</span>
                                    </p>
                                </div>
                            )
                        }) 
                    )
                }

            {
                MAP_FJLXZB && MAP_FJLXZB.length> 0 && wheelStatus === 1 && (
                    rc.map((item, index) => {
                            return (
                                <div className={styles.sider} key={index}>
                                    <p className={styles.title}>{item.KPI_NAME}</p>
                                    <p>
                                        <span className={styles.value}>{item.KPI_VALUE}</span>
                                        <span className={styles.target}> /{item.目标} 全省平均</span>
                                    </p>
                                </div>
                            )
                        }) 
                    )
                }

            {
                MAP_FJLXZB && MAP_FJLXZB.length> 0 && wheelStatus === 2 && (
                    ldgx.map((item, index) => {
                            return (
                                <div className={styles.sider} key={index}>
                                    <p className={styles.title}>{item.KPI_NAME}</p>
                                    <p>
                                        <span className={styles.value}>{item.KPI_VALUE}</span>
                                        <span className={styles.target}> /{item.目标} 全省平均</span>
                                    </p>
                                </div>
                            )
                        }) 
                    )
                }

            {
                MAP_FJLXZB && MAP_FJLXZB.length> 0 && wheelStatus === 3 && (
                    wlxxaq.map((item, index) => {
                            return (
                                <div className={styles.sider} key={index}>
                                    <p className={styles.title}>{item.KPI_NAME}</p>
                                    <p>
                                        <span className={styles.value}>{item.KPI_VALUE}</span>
                                        <span className={styles.target}> /{item.目标} 全省平均</span>
                                    </p>
                                </div>
                            )
                        }) 
                    )
                }

            {
                MAP_FJLXZB && MAP_FJLXZB.length> 0 && wheelStatus === 4 && (
                    ggfw.map((item, index) => {
                            return (
                                <div className={styles.sider} key={index}>
                                    <p className={styles.title}>{item.KPI_NAME}</p>
                                    <p>
                                        <span className={styles.value}>{item.KPI_VALUE}</span>
                                        <span className={styles.target}> /{item.目标} 全省平均</span>
                                    </p>
                                </div>
                            )
                        }) 
                    )
                }

                {
                    MAP_FJLXZB && MAP_FJLXZB.length> 0 && wheelStatus === 5 && (
                        shbz.map((item, index) => {
                            return (
                                <div className={styles.sider} key={index}>
                                    <p className={styles.title}>{item.KPI_NAME}</p>
                                    <p>
                                        <span className={styles.value}>{item.KPI_VALUE}</span>
                                        <span className={styles.target}> /{item.目标} 全省平均</span>
                                    </p>
                                </div>
                            )
                        }) 
                    )
                }
            </div>
        )
    }
}

CenterData.propTypes = {
    loading: PropTypes.object,
}

export default CenterData;

