import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from '../RightSide.less'
import JycyTwoLine from '../../echarts/JycyTwoLine'

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class RightThird extends PureComponent {

  onChangeBlock = (ind, flag) => {
    const { dispatch } = this.props
    // dispatch({
    //   type: 'jycytwo/updateState',
    //   payload: {
    //     blockSelect: ind,
    //     zbSelect: flag ? '' : 0
    //   }
    // })
  }

  onLinkTo = (ind) => {
    const { history } = this.props
    // history.push("/jycytwo");
  }

  render () {
    const { jycytwo } = this.props;
    const { blockSelect, JYCYZS_CYQK } = jycytwo;

    let cyqk, data_yjyx = [], data_lmgg = [];
    if (JYCYZS_CYQK) {
      JYCYZS_CYQK.map(it => {
        if (it.KPI_NAME === '联盟广告') {
          data_lmgg.push(it);
        } else if (it.KPI_NAME === '邮件营销') {
          data_yjyx.push(it);
        }
      });

      cyqk = {
        xAxis: data_yjyx.map((data) => data.MONTH) || [],
        data_yjyx: data_yjyx.map((data) => data.NUM) || [],
        data_lmgg: data_lmgg.map((data) => data.NUM) || [],
        yNamne: "万人",
      }
    };

    return (
      <div onClick={() => this.onLinkTo('创业情况')} onMouseOver={() => this.onChangeBlock('创业情况', true)} onMouseOut={() => this.onChangeBlock('', false)} className={`${styles.rightContent} ${blockSelect === '创业情况' ? styles.is_active : ''}`}>
        <div className={styles.title_Flag}>创业情况</div>
        <JycyTwoLine className={styles.charts} curId='right_3' height='1.5rem' {...cyqk} />
      </div>
    )
  }
}

RightThird.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default RightThird;

