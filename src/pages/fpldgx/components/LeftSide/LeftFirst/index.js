import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../LeftSide.less'
import Bar from '../../echarts/Bar'
import up from '../../../../../assets/images/up.svg'
import down from '../../../../../assets/images/down.svg'


@connect(({ screencopy, loading }) => ({ screencopy, loading }))
class LeftFirst extends PureComponent {

    render() {
        const  {screencopy}=this.props
        const { LDGXYJHJ_HY, LDGXYJHJ_RJYJL}=screencopy
        let xdata=[],ydata=[]




         LDGXYJHJ_HY&&LDGXYJHJ_HY.map(item => {
            xdata.push(item["百分比"].substr(0, item["百分比"].length - 1))
            ydata.push(item["行业"])
        })

        let gct={}

        gct.xdata=ydata;
        gct.ydata=xdata;
        gct.unit='%'

        return (
            <div>
                <div style={{ color: '#fff', fontSize: '30px', fontFamily: 'PingFangSC-Medium,PingFangSC', fontweight: 500 }}>劳动关系预警化解</div>
                <div style={{ color: "rgba(127,175,246,1)", fontSize: '24px', fontFamily: 'PingFangSC-Medium,PingFangSC', fontweight: 500,marginTop:'5px'}}>人均预警率</div>
                <div style={{marginTop:'0px',fontSize:'20px',position:'relative'}}>
                    <span> 全市:    <span style={{ fontSize: 30, fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei', fontWeight: 500, color: 'rgba(24,240,255,1)',marginLeft:6 }}>  {LDGXYJHJ_RJYJL.length>0  ? LDGXYJHJ_RJYJL[0]['全市'] : ""} %</span></span>
                    <span style={{ marginLeft:'13px' }}>较去年同期：<span style={{ fontSize: 30, fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei', fontWeight: 500, color: 'rgba(24,240,255,1)' }}>
                    {LDGXYJHJ_RJYJL.length>0 ? LDGXYJHJ_RJYJL[0]['较去年同期'] : ""} %
                     {LDGXYJHJ_RJYJL.length > 0  && LDGXYJHJ_RJYJL[0]['较去年同期'] > 0 ? <img style={{ marginLeft: '3px', position: 'absolute', top: '17px' }} src={down} alt='' height='15px'></img> : <img src={up} style={{ marginLeft: '3px', position: 'absolute', top: '17px' }} alt='' height='15px'></img>}
                    </span></span>
                    <span style={{ marginLeft: '24px', color: "rgba(127,175,246,1)"}}>全省排名：
                    <span style={{ fontSize: 30, fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei', fontWeight: 500, color: '#FFA206', }}>
                            {LDGXYJHJ_RJYJL.length > 0  ? LDGXYJHJ_RJYJL[0]['全省'] : ""}
                            <span style={{ fontSize: 22, color: 'rgba(24,240,255,1)', fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC,Microsoft YaHei',}}>/11</span>
                    </span></span>

                    </div>
                <Bar gct={gct} style={{ width: '100%', height: 184 }}/>
            </div>
        )
    }
}

LeftFirst.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default LeftFirst;
