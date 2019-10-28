

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import IndexStyle from '../../../index.less'
import BarBaoXian from '../../echarts/BarBaoXian'
@connect(({ screencopy, loading }) => ({ screencopy, loading }))
class LeftFirst extends PureComponent {


    render() {
        const { screencopy } = this.props
        const { LDGXXF, LDGXXF_QS } = screencopy
        let xdata = [], ydata = []
        const sortBy = (pro) => {
            return function (obj1, obj2) {
                var val1 = obj1[pro];
                var val2 = obj2[pro];
                if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                    val1 = Number(val1);
                    val2 = Number(val2);
                }
                if (val1 > val2) {
                    return 1;
                }
                else if (val1 < val2) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        }
        if (LDGXXF){
            LDGXXF.sort(sortBy("T.KPI_VALUE||T.KPI_UNIT"))
            LDGXXF.map(item => {
                xdata.push(item["T.KPI_VALUE||T.KPI_UNIT"].substr(0, item["T.KPI_VALUE||T.KPI_UNIT"].length - 1))
                ydata.push(item["AREA_NAME"])
            })
        }


        let gct = {}

        gct.xdata = xdata;
        gct.ydata = ydata;
        gct.unit = '%'
        // if(LDGXXF_QS.length>0){
        //     debugger
        // }
        return (
            <div >
                {/* className={`${styles.leftContent} ${wheelStatus === 1 ? styles.is_active : ''}`} */}
                <div style={{ color: '#fff', fontSize: '30px', fontFamily: 'PingFangSC-Medium,PingFangSC', fontweight: 500 }}>
                    劳动关系信访 - <span style={{ fontSize: 25, fontWeight: 500, fontFamily: 'PingFangSC-Medium,PingFangSC' }}>全年累计</span></div>
                <div style={{ color: "rgba(127,175,246,1)", fontSize: '24px', fontFamily: 'PingFangSC-Medium,PingFangSC', fontweight: 500, marginTop: '5px' }}>信访结案率<span style={{ paddingLeft: 15, fontSize: 24, fontWeight: 500, fontFamily: 'PingFangSC-Medium,PingFangSC' }}>全市：<span style={{ fontSize: 30, fontFamily: 'Times New Roman,PingFangSC-Regular,PingFangSC', fontWeight: 500, color: 'rgba(24,240,255,1)', marginLeft: 1 }}>{(LDGXXF_QS && LDGXXF_QS.length>0)?LDGXXF_QS[0]["百分比"]:0}</span></span></div>
                <BarBaoXian gct={gct}/>
            </div>
        )
    }
}

LeftFirst.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default LeftFirst;
