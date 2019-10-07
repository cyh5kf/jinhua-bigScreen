import React, { PureComponent } from 'react'
import { connect } from 'dva';
import PropTypes from 'prop-types'
import {Menu, Dropdown} from 'antd'
import styles from './index.less'
import { fontSizeInit, getHtmlFontSize } from 'utils'
import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'
import Center from './components/Center/Center'
import moment from 'moment'
import HeaderMenu from 'components/HeaderMenu'

@connect(({ screen, loading }) => ({ screen, loading }))
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
    // const { dispatch, screen } = this.props;
    // const { wheelStatus } = screen;

    const date = moment().format('YYYY/MM/DD')
    const day = moment().day();
    const daysArr = ['星期一','星期二','星期三','星期四','星期五','星期六','星期七']

    return (
      <div className={styles.screen}>
        <header className={styles.header}>
          <span className={styles.title}>金华人社指数与分析决策平台</span>
          <span className={styles.time}>{`${date} ${daysArr[day-1]}`}</span>
          <HeaderMenu linkType="home" />
        </header>

        {/* <div className={styles.container}> */}
          <div className={styles.left_father}><LeftSide /></div>
          <div className={styles.center_father}><Center /></div>
          <div className={styles.right_father}><RightSide /></div>
        {/* </div> */}
        <footer></footer>
      </div>
    )
  }
}

Screen.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default Screen;

