import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../RightSide.less'
import IndexStyle from '../../../index.less'
import classNames from 'classnames'
import QrblBar from '../../echarts/QrblBar'
import { Radio } from 'antd';

@connect(({ qrblthree, loading }) => ({ qrblthree, loading }))
class LeftThird extends PureComponent {

  state = {
    value: 1,
    czxzjyrs1: {}
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };


  onChangeBlock = (ind, flag) => {
    const { dispatch } = this.props
    // dispatch({
    //   type: 'qrblthree/updateState',
    //   payload: {
    //     blockSelect: ind,
    //     zbSelect: flag ? '' : 0
    //   }
    // })
  }

  onLinkTo = (ind) => {
    const { history } = this.props
    // history.push("/qrblthree");
  }

  // 指定排序的比较函数
  compare = (property) => {
    return function (obj1, obj2) {
      var value1 = obj1[property];
      var value2 = obj2[property];
      return value2 - value1;     // 降序
    }
  }

  render () {
    const { qrblthree } = this.props;
    const { blockSelect, QRBL_XLGQRS } = qrblthree;

    let xlgqrs;
    if (QRBL_XLGQRS) {
      let sortDatas = QRBL_XLGQRS.sort(this.compare('NUM'));
      let zprs = [], qzrs = [];
      sortDatas.map(data => {
        data.KPI_UNIT === '招聘人数' ? zprs.push(data) : qzrs.push(data);
      })
      if (zprs.length > 0 && qzrs.length > 0) {
        let xdata1 = zprs.map((data) => data.KPI_NAME); //招聘人数排序
        let xdata2 = qzrs.map((data) => data.KPI_NAME); //求职人数排序
        let ydatazp1 = zprs.map((data) => data.NUM); //招聘人数 降序
        let ydataqz1 = [], ydatazp2 = [];
        let ydataqz2 = qzrs.map((data) => data.NUM); // 求职人数 降序

        xdata1.map(it => {
          let ind = xdata2.indexOf(it);
          if (ind > -1) {
            ydataqz1.push(qzrs[ind].NUM);
          }
        });
        xdata2.map(it => {
          let ind = xdata1.indexOf(it);
          if (ind > -1) {
            ydatazp2.push(zprs[ind].NUM);
          }
        });
        xlgqrs = {
          title: QRBL_XLGQRS[0].KPI_CLASS,
          xdata1: xdata1,// x---招聘排序
          ydatazp1: ydatazp1, // 招聘---招聘排序
          ydataqz1: ydataqz1, // 求职 ---招聘排序
          ydatazp2: ydatazp2, // 招聘--- 求职排序
          ydataqz2: ydataqz2,// 求职--- 求职排序
          xdata2: xdata2,// x---求职排序
        }
      }
    };

    let right_1_data = {
      xAxis: xlgqrs ? xlgqrs.xdata1 : [],
      title1: '招聘人数',
      title2: '求职人数',
      legend: ['招聘人数', '求职人数'],
      seriesData1: xlgqrs ? xlgqrs.ydatazp1 : [],
      seriesData2: xlgqrs ? xlgqrs.ydataqz1 : [],
      yNamne: "人",
      LinearGradient: ['#CDEAFF', '#2765FF']
    }

    let right_12_data = {
      xAxis: xlgqrs ? xlgqrs.xdata2 : [],
      title1: '招聘人数',
      title2: '求职人数',
      legend: ['招聘人数', '求职人数'],
      seriesData1: xlgqrs ? xlgqrs.ydatazp2 : [],
      seriesData2: xlgqrs ? xlgqrs.ydataqz2 : [],
      yNamne: "人",
      LinearGradient: ['#CDEAFF', '#2765FF']
    }

    return (
      <div onClick={() => this.onLinkTo('劳动关系指数')} onMouseOver={() => this.onChangeBlock('劳动关系指数', true)} onMouseOut={() => this.onChangeBlock('', false)} className={`${styles.rightContent} ${blockSelect === '劳动关系指数' ? styles.is_active : ''}`}>
        <div className={styles.title_Flag}>学历的供求人数TOP10<b className={styles.sub_s}>(三季度)</b></div>
        {/* <JycyBar className={styles.charts} curId='right_1' height='2.2rem' {...xkbqys} /> */}
        {/* <QrblBar className={styles.charts} curId='right_1' width='100%' height='2.2rem' {...right_1_data} /> */}
        {
          this.state.value === 1 ?
            <QrblBar className={styles.charts} curId='right_1' width='100%' height='1.6rem' {...right_1_data} /> :
            <QrblBar className={styles.charts} curId='right_1' width='100%' height='1.6rem' {...right_12_data} />
        }
        <div style={{ textAlign: 'center', paddingTop: '12px' }}>
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>按照招聘人数排序</Radio>
            <Radio value={2}>按照求职人数排序</Radio>
          </Radio.Group>
        </div>
      </div>
    )
  }
}

LeftThird.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default LeftThird;

