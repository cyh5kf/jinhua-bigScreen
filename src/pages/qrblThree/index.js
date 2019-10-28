import React, { PureComponent } from 'react'
import { connect } from 'dva';
import PropTypes from 'prop-types'
import styles from './index.less'
import { fontSizeInit, getHtmlFontSize } from 'utils'
import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'
import Center from './components/Center/Center'
import Header from 'components/Header'

@connect(({ qrblthree, loading }) => ({ qrblthree, loading }))
class qrblthree extends PureComponent {

  componentDidMount () {
    window.addEventListener('resize', function () {
      fontSizeInit();
      getHtmlFontSize()
    });
  }

  render () {
    fontSizeInit();
    getHtmlFontSize();
    const data = [
      {
        label: '人才供需',
        path: '/#/qrblThree',
        classname: 'qrblthree'
      },
      {
        label: '人才分析',
        path: '/#/rct/1',
        classname: 'rcfx'
      },
      {
        label: '人才地图',
        path: '/#/rct/2',
        classname: 'rcdt'
      },
      {
        label: '首页',
        path: '/#/rc',
        classname: 'rcmenu'
      }];
    
      const { QRBL_QSQRBL } = this.props.qrblthree
      let NUM = 0
      let WHOLESOCIETY = 0
      if(QRBL_QSQRBL && QRBL_QSQRBL.length > 0) {
        NUM = QRBL_QSQRBL[0].NUM
        WHOLESOCIETY = QRBL_QSQRBL[0].WHOLESOCIETY
      }

    return (
      <div className={styles.container}>

        <div className={styles.main_content}>
          <Header data={data} />
          <div className="center-big-title">
            {NUM}<span>求人倍率</span>
            <span className="sub-title">全社会求人倍率{WHOLESOCIETY}</span>
          </div>
          <div className={styles.left_father}><LeftSide /></div>
          <div className={styles.center_father}><Center /></div>
          <div className={styles.right_father}><RightSide /></div>
        </div>
      </div>
    )
  }
}

qrblthree.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default qrblthree;
