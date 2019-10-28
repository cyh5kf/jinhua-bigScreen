import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import Lottie from 'react-lottie';
import styles from './index.less'
import * as animationData from '../../../../../assets/animation/data.json'

@connect(({ screen, loading }) => ({ screen, loading }))
class CenterData extends PureComponent {

    onChangeZb = () => {
        const { dispatch } = this.props

        dispatch({
            type: 'screen/updateState',
            payload: {
                zbSelect: 6
            }
        })
    }

    onHover = (flag) => {
        const { dispatch } = this.props
        dispatch({
            type: 'screen/updateState',
            payload: {
                isHover: flag
            }
        })
    }
    
    render() {
        const { ZHZS_QX, isHover } = this.props.screen

        let zhzs = ZHZS_QX && ZHZS_QX.length > 0 ? ZHZS_QX[0] : '';

        const animateOptions = {
            loop: false,
            autoplay: true,
            animationData: animationData.default,
            renderer: 'svg'
        }
        
        return (
            // ${zbSelect === 0? styles.active: ''}`} onClick={() => this.onChangeZb(0)}
            <div className={styles.centerData}>
                <div id="centerContent" className={styles.content} onClick={() => this.onChangeZb()} onMouseOver={() => this.onHover(true)} onMouseOut={() => this.onHover(false)}>
                    <div className={styles.textContent}>
                        <div className={styles.name}>
                            <p className={styles.title1}>美好人社指数</p>
                            <p className={styles.title2}>实施检测  量化评估</p>
                        </div>
                        <div className={styles.num}>{zhzs.KPI_VALUE? (zhzs.KPI_VALUE/6).toFixed(1): 0}</div>
                        
                    </div>

                    {
                        isHover && (
                            <div className={styles.animateContent}>
                                <Lottie
                                    options={animateOptions}
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </div>
                        )
                    }
                    
                </div>
            </div>
        )
    }
}

CenterData.propTypes = {
    loading: PropTypes.object,
}

export default CenterData;

