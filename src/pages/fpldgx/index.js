import React, { PureComponent } from 'react'
import { connect } from 'dva';
import PropTypes from 'prop-types'
import styles from './index.less'
import { fontSizeInit, getHtmlFontSize } from 'utils'
import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'
import Center from './components/Center/Center'
import moment from 'moment'
// import HeaderMenu from 'components/HeaderMenu'
import Header from 'components/Header'

@connect(({ screencopy, loading }) => ({ screencopy, loading }))
class Screen extends PureComponent {

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
        label: '欠薪预警', path: '/#/ldgxt/1', classname: 'qxyj'
        },
        {
          label: '人事仲裁', path: '/#/ldgxt/2', classname: 'rszc'
        },
        {
          label: '网络舆情', path: '/#/ldgxt/3', classname: 'wlyq'
        },
      {
        label: '首页', path: '/#/fpldgx', classname: 'ldgxmenu'
      }];

    return (
      <div className={styles.screen}>
        <Header data={data} />
        {/* <header className={styles.header}>
          <span className={styles.title}>金华指数与分析决策平台</span>
          <span className={styles.time}>{`${date} ${daysArr[day-1]}`}</span>
          <HeaderMenu linkType="home" />
        </header> */}

        <div className={styles.container} >
          <div className={styles.left_father} ><LeftSide /></div>
          <div className={styles.center_father} ><Center /></div>
          <div className={styles.right_father} ><RightSide /></div>
        </div>
      
      </div>
    )
  }
}

Screen.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default Screen;

