import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../RightSide.less'
import IndexStyle from '../../../index.less'
import Line from '../../echarts/Line'
// import GaugeWangLuo from '../../echarts/GaugeWangLuo/GaugeWangLuo'

@connect(({ screen, loading }) => ({ screen, loading }))
class RightThird extends PureComponent {

    onHover = (ind, ishover) => {
        const { dispatch } = this.props
        // dispatch({
        //     type: 'screen/updateState',
        //     payload: {
        //         wheelStatus: ind,
        //         isHover: ishover
        //     }
        // })
    }

    render() {
        // const { screen } = this.props;
        // const { WLXX, WLXX_YZCD, wheelStatus } = screen;

        // const wlxx = WLXX && WLXX.length > 0 ? WLXX[0] : {};

        // let yzcd, ygao=[], yzhong=[], ydi=[], xdata=[], dj=[];
        // if (WLXX_YZCD) {
        //     xdata = WLXX_YZCD.map((data) => data.SAFE_CLASS);
        //     const dengji = WLXX_YZCD.map((data) => data.SAFE_LEVEL);
        //     dj = new Set(dengji);
        //     WLXX_YZCD.map((data) => {
        //         if (data.SAFE_LEVEL === '高') {
        //             ygao.push(data.PROBLEM_NUM);
        //         } else if (data.SAFE_LEVEL === '中') {
        //             yzhong.push(data.PROBLEM_NUM);
        //         } else if (data.SAFE_LEVEL === '低') {
        //             ydi.push(data.PROBLEM_NUM);
        //         }
        //     });
        //     yzcd = {
        //         // title: RCZS_GCT[0].KPI_NAME,
        //         xdata: Array.from(new Set(xdata)) || [],
        //         ygao: ygao || [],
        //         yzhong: yzhong || [],
        //         ydi: ydi || [],
        //         dj: Array.from(dj) || []
        //     }
        // }

        return (
            <div onMouseOver={() => this.onHover(3, true)} onMouseOut={() => this.onHover(3, false)} className={`${styles.rightContent} ${0 === 3 ? styles.is_active : ''}`}>
                {/* <div className={IndexStyle.text_title}>网络信息安全指数</div>
                <div className={styles.flex_item}>
                    <div style={{ width: '40%'}}>
                        <GaugeWangLuo wlxx={wlxx} />
                    </div>
                    <div style={{ width: '60%',padding: '0 0 0 0.1rem'}}>
                        <BarWangLuo yzcd={yzcd} />
                    </div>
                </div> */}
                <h2 style={{color:'#fff'}}>收入分配</h2>  
                <div>社会平均工资：  最低工资标准：：</div>
                <Line></Line>
            </div>
        )
    }
}

RightThird.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default RightThird;

