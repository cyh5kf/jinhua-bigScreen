import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../RightSide.less'
import QrblPie from '../../echarts/QrblPie';


@connect(({ qrblthree, loading }) => ({ qrblthree, loading }))
class RightThird extends PureComponent {

  onChangeBlock = (ind, flag) => {
    const { dispatch } = this.props
    // dispatch({
    //   type: 'qrblThree/updateState',
    //   payload: {
    //     blockSelect: ind,
    //     zbSelect: flag ? '' : 0
    //   }
    // })
  }

  onLinkTo = (ind) => {
    const { history } = this.props
    // history.push("/qrblThree");
  }

  render () {
    const { qrblthree } = this.props;
    const { blockSelect, QRBL_XBGQQK } = qrblthree;


    let xbgqqk, zprs = [], qzrs = [];
    if (QRBL_XBGQQK) {
      QRBL_XBGQQK.map(it => {
        if (it.KPI_UNIT === '招聘人数') {
          let obj = {
            value: it.NUM,
            name: it.KPI_NAME,
            itemStyle: {
              color: it.KPI_NAME === '男性' ? '#0092F7' : (it.KPI_NAME === '女性' ? '#F146A9' : '#28C286')
            }
          };
          zprs.push(obj);
        } else if (it.KPI_UNIT === '求职人数') {
          let obj = {
            value: it.NUM,
            name: it.KPI_NAME,
            itemStyle: {
              color: it.KPI_NAME === '男性' ? '#0092F7' : (it.KPI_NAME === '女性' ? '#F146A9' : '#28C286')
            }
          };
          qzrs.push(obj);
        }
      });
      
      xbgqqk = {
        title1: '招聘人数',
        title2: '求职人数',
        // legend1: ['男性', '无要求', '女性'],
        // legend2: ['男性', '女性'],
        data1: zprs,
        data2: qzrs,
      }
    };

    let right_3_data = {
      title: xbgqqk ? xbgqqk.title1 : '招聘人数',
      // legend: ['男性', '无要求', '女性'],
      seriesData: xbgqqk ? xbgqqk.data1 : [
        { value: 30, name: '男性' },
        { value: 20, name: '无要求' },
        { value: 50, name: '女性' },
      ]
    }
    let right_31_data = {
      title: xbgqqk ? xbgqqk.title2 : '求职人数',
      // legend: ['男性', '女性'],
      seriesData: xbgqqk ? xbgqqk.data2 : [
        { value: 50, name: '男性' },
        { value: 50, name: '女性' },
      ]
    }

    return (
      <div onClick={() => this.onLinkTo('创业情况')} onMouseOver={() => this.onChangeBlock('创业情况', true)} onMouseOut={() => this.onChangeBlock('', false)} className={`${styles.rightContent} ${blockSelect === '创业情况' ? styles.is_active : ''}`}>
        <div className={styles.title_Flag}>性别的供求情况<b className={styles.sub_s}>(三季度)</b></div>
        <div className={styles.flex_item}>
          <div className={styles.width}>
            <QrblPie className={styles.charts} curId='right_3' style={{ width: '100%', height: '1.833rem' }} {...right_3_data} />
          </div>
          <div className={styles.width}>
            <QrblPie className={styles.charts} curId='right_31' style={{ width: '100%', height: '1.833rem' }} {...right_31_data} />
          </div>
        </div>
      </div>
    )
  }
}

RightThird.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default RightThird;

