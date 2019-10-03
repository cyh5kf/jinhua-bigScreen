import React from 'react'
import styles from './GaugeWangLuo.less'
import zhizhen from '../../../../../assets/images/zhi_zhen.svg'

class GaugeWangLuo extends React.Component {

    rotateEvents(val) {
        const el = document.getElementById('rotate');
        let rotate = 0;
        if (val.KPI_VALUE >= 90) {
            rotate = -108 + (100 - val.KPI_VALUE) / 10 * 43.2;
            el.style.transform = `rotate(${rotate}deg)`;
        } else if (val.KPI_VALUE < 90 && val.KPI_VALUE >= 80) {
            rotate = -64.8 + (90 - val.KPI_VALUE) / 10 * 43.2;
            el.style.transform = `rotate(${rotate}deg)`;
        } else if (val.KPI_VALUE < 80 && val.KPI_VALUE >= 70) {
            rotate = -21.6 + (80 - val.KPI_VALUE) / 10 * 43.2;
            el.style.transform = `rotate(${rotate}deg)`;
        } else if (val.KPI_VALUE < 70 && val.KPI_VALUE >= 60) {
            rotate = 21.6 + (70 - val.KPI_VALUE) / 10 * 43.2;
            el.style.transform = `rotate(${rotate}deg)`;
        } else if (val.KPI_VALUE < 60) {
            rotate = 108 - val.KPI_VALUE / 60 * 43.2;
            el.style.transform = `rotate(${rotate}deg)`;
        }
        el.style.transition = '2s';
    }

    // 组件已经被渲染到 DOM 中，设置定时器
    componentDidMount() {
        this.rotate = setTimeout(() => this.rotateEvents(this.props.wlxx), 3000);
    }

    // 组件从 DOM 中被移除，清除定时器
    componentWillUnmount() {
        clearInterval(this.rotate);
    }

    render() {
        const wlxx = this.props.wlxx;
        
        return (
            <div className={styles.container}>
                <div>
                    <span className={styles.label_text}>{wlxx.KPI_NAME ? wlxx.KPI_NAME : '----'}</span>&nbsp;&nbsp;
                    <b>{wlxx.KPI_VALUE ? wlxx.KPI_VALUE : 0}</b>
                </div>
                <div className={styles.fa}>
                    <div className={styles.ch}>
                        <img id="rotate" src={zhizhen} />
                    </div>
                </div>
                <p className={styles.dec}>
                    <span>省排名: <b className={styles.orange}>{wlxx.全省}</b>/{wlxx.省内城市数}</span>
                </p>
            </div>
        )
    }
}

export default GaugeWangLuo;