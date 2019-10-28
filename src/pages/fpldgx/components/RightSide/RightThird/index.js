import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../RightSide.less'
import Line from '../../echarts/Line'


@connect(({ screencopy, loading }) => ({ screencopy, loading }))
class RightThird extends PureComponent {

  
    render() {
        const { SRFP_SHGZBZ, SRFP_ZDGZBZ}=this.props.screencopy
        let xdata = [], y1data = [],y2data=[]

        const sortBy=(pro)=>{
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
        if (SRFP_SHGZBZ && SRFP_ZDGZBZ){
            SRFP_SHGZBZ.sort(sortBy('YEAR_ID'))
            SRFP_ZDGZBZ.sort(sortBy('YEAR_ID'))
            SRFP_SHGZBZ.map(item => {
                xdata.push(item["YEAR_ID"])
                y1data.push(item["KPI_VALUE"])
            })
            SRFP_ZDGZBZ.map(item => {

                y2data.push(item["KPI_VALUE"])
            })  
        }
     
       
        let gct={}
        

        gct.xdata = xdata;
        gct.y1data = y1data;
        gct.y2data = y2data;
       
        const { SRFP_GZ}=this.props.screencopy
        return (
            <div>
                <div style={{ color: '#fff', fontSize: '30px', fontFamily: 'PingFangSC-Medium,PingFangSC', fontweight: 500,marginButtom:'20px'}}>收入分配</div>  
                <div style={{ marginLeft: '10px' }}> <span style={{ fontSize: '20px' }}>社会平均工资：<span style={{ color: '#18F0FF', fontSize: 30 }} >{SRFP_GZ.length > 0 ? SRFP_GZ[0]['社会平均工资'] : 0}</span > 元</span> <span style={{ marginLeft: '30px', fontSize: '20px' }}>最低工资标准：<span style={{ color: '#18F0FF', fontSize: 30, }}>{SRFP_GZ.length > 0 ?SRFP_GZ[1]['社会平均工资']:0}</span> 元</span></div>
                <Line gct={gct}></Line>
            </div>
        )
    }
}

RightThird.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default RightThird;

