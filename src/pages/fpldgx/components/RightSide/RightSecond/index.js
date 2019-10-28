import PropTypes from 'prop-types'
import { connect } from 'dva';
import Barright from '../../echarts/Barright'
import Pieleft from '../../echarts/Pieleft'
import React, { PureComponent } from 'react'


@connect(({ screencopy, loading }) => ({ screencopy, loading }))
class RightFirst extends PureComponent {




    render() {
        const { screencopy } = this.props
        const { LDZXTJ = [], LDZXTJ_AJJAS = [] } = screencopy

        const a = 'T.KPI_VALUE||T.KPI_UNIT'
        let a1 = LDZXTJ.length>0 ? LDZXTJ[1][a].substr(0, LDZXTJ[1][a].length - 1) : 0
        let b1 = 100 - a1
        let pm = LDZXTJ.length > 0  ? LDZXTJ[1]['全省均值'] : 0


        let xdata = [], ydata = []
      

        LDZXTJ_AJJAS&&LDZXTJ_AJJAS.map(item => {
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
                <Pieleft style={{ width: '40%', height: "235px", float: 'left' }} val={b1} otherval={a1} pm={pm} colorA='#D98916' colorC='#E0BA20' colorB="#E7E72A" title="仲裁结案率"></Pieleft>
                <Barright gct={gct} style={{ width: '60%', height: '235px', float: 'left' }} color={["#E7E72A", '#E0BA20', '#D98916']} title={"各类型仲裁案件数分布"} />
            </div>
        )
    }
}

RightFirst.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default RightFirst;
