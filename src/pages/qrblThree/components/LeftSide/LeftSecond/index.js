import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../LeftSide.less'
import IndexStyle from '../../../index.less'
import classNames from 'classnames'
import BarXinZi from '../../echarts/BarXinZi'

@connect(({ qrblthree, loading }) => ({ qrblthree, loading }))
class LeftFirst extends PureComponent {

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

  // 指定排序的比较函数
  compare = (property) => {
    return function (obj1, obj2) {
      var value1 = obj1[property];
      var value2 = obj2[property];
      return value1 - value2;     // 升序
    }
  }
  //求平均值
  arrAverageNum = (arr) => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    };
    return (sum / arr.length * 100) / 100;
  }

  render () {
    const { qrblthree } = this.props;
    const { blockSelect, QRBL_GXZPM } = qrblthree;

    let gwxzpm, average;
    if (QRBL_GXZPM) {
      let sortDatas = QRBL_GXZPM.sort(this.compare('NUM'));
      let ydata = sortDatas.map((data) => data.KPI_NAME);
      let xdata = sortDatas.map((data) => data.NUM);   
      let min = Math.min.apply(null, xdata),
          max = Math.max.apply(null, xdata);
      gwxzpm = {
        // title: QRBL_GXZPM[0].KPI_CLASS,
        yAxis: ydata || [],
        seriesData: xdata || [],
        yNamne: "元",
        symbolSize: 6,
        legend: ['达标值'],
        LinearGradient: ['#CDEAFF', '#2765FF'],
        smooth: false,
        min: min,
        max: max,
      }
      average = this.arrAverageNum(xdata);
    };

    let left_2_data = {
      yAxis: ["环保", "医疗", "设计", "法律", "通信", "销售", "财会", "物流", "人力", "建筑"],//xAxis
      // title: '各岗位薪资排名',
      seriesData: [2220, 2400, 2600, 2640, 2830, 3000, 3280, 3500, 3750, 3920], //seriesData
      yNamne: "元",
      LinearGradient: ['#CDEAFF', '#2765FF']
    }


    return (
      <div onClick={() => this.onLinkTo('就业创业指数')} onMouseOver={() => this.onChangeBlock('就业创业指数', true)} onMouseOut={() => this.onChangeBlock('', false)} style={{paddingBottom: 0}} className={`${styles.leftContent} ${blockSelect === '就业创业指数' ? styles.is_active : ''}`}>
        <div className={styles.title_Flag}>各岗位薪资排名TOP10<b className={styles.sub_s}>(三季度)</b></div>
        {/* <BarXinZi className={styles.charts} curId='left_2' width='100%' height='2.4rem' {...left_2_data} /> */}
        <BarXinZi style={{ width: '100%', height: '2.2rem' }} className={styles.charts} {...gwxzpm} />
        <div className={styles.average_fa}>
          <span>平均:</span><b>{average}</b>元
        </div>
      </div>
    )
  }
}

LeftFirst.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default LeftFirst;

