import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import Barright from '../../echarts/Barright'
import Pieleft from '../../echarts/Pieleft'


@connect(({ screencopy, loading }) => ({ screencopy, loading }))
class RightFirst extends PureComponent {




    render() {
        const { screencopy } = this.props
        const { LDZXTJ = [], LDZXTJ_TJALFB = [] } = screencopy
       
        const a = 'T.KPI_VALUE||T.KPI_UNIT'
        let a1 = LDZXTJ.length>0 ? LDZXTJ[0][a].substr(0, LDZXTJ[0][a].length - 1) : 0
        let b1 = 100 - a1
        let pm = LDZXTJ.length > 0 ? LDZXTJ[0]['全省均值'] : 0


        let xdata = [], ydata = []
        



        LDZXTJ_TJALFB&&LDZXTJ_TJALFB.map(item => {
            xdata.push(item["KPI_NAME"])
            ydata.push(item["KPI_VALUE"])
        })
        let gct;
        gct = {
            xdata: [],
            ydata: [],
            unit: ''

        }

        gct.xdata = xdata;
        gct.ydata = ydata;


        return (
            <div>
                <div style={{ color: '#fff', fontSize: '30px', fontFamily: 'PingFangSC-Medium,PingFangSC', fontweight: 500, marginBottom: '14px' }}>劳动争议调解</div>
                <Pieleft style={{ width: '40%', height: 235, float: 'left' }} pm={pm} val={b1} otherval={a1} colorA='#055CD2' colorC='#188df0' colorB="#0ED6F7" title="调解成功率"></Pieleft>
                <Barright gct={gct} style={{ width: '60%', height: 235, float: 'left' }} title={"各类型仲裁调解案件数分布"} />
                 <div style={{float:'left',width:'100%',height:'20px'}}></div>
            </div>
        )
    }
}

RightFirst.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}
export default RightFirst;
