import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../LeftSide.less'
import IndexStyle from '../../../index.less'
import LineSheBao from '../../echarts/LineSheBao'
import classNames from 'classnames'

@connect(({ screencopy, loading }) => ({ screencopy, loading }))
class LeftSecond extends PureComponent {



    render() {
        const {screencopy}=this.props
        const { YJHJL_MY, YJHJL_DY} =screencopy

        let xdata = [], ydata = []
         YJHJL_MY&&YJHJL_MY.map(item => {
            xdata.push(item["当月"].substr(0, item["当月"].length - 1))
            ydata.push(item["月份"])
        })

        let gct = {}

        gct.xdata = ydata;
        gct.ydata = xdata;
        gct.unit = '%'
        return (
            <div >

                <div style={{ fontSize: 24, fontFamily: 'PingFangSC-Medium,PingFangSC', fontWeight: 500,color: "#7FAFF6",paddingTop:'15px' }}>预警化解率</div>
                <div style={{ marginTop: '0px', fontSize: '20px', }}>
                    <span> 当月:    <span style={{ fontSize:30,fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC', fontWeight: 500, color: 'rgba(24,240,255,1)', marginLeft: 6 }}>  {YJHJL_DY.length>0 ? YJHJL_DY[0]['当月'] : ""} </span></span>
                    <span style={{ marginLeft: '13px' }}> 全省排名:
                    <span style={{ fontSize: 30, textAlign: 'center', fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC', fontWeight: 500, color: '#FFA206', margin: 0, padding: 0 }}>
                        {YJHJL_DY.length>0  ? YJHJL_DY[0]['全省'] : ""}
                            <span style={{ color: 'rgba(24,240,255,1)', fontSize: 22}}>/11</span>
                    </span>
                    </span>
                 </div>
                <LineSheBao style={{ width: '100%', height: 175 }} title={"预警化解率"} data={gct} ></LineSheBao>
            </div>
        )
    }
}

LeftSecond.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default LeftSecond;
