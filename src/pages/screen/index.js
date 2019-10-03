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

    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
            就业创业指数
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
            人才指数
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
            劳动关系指数
          </a>
        </Menu.Item>
        <Menu.Item key="3">
          <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
            网络信息安全指数
          </a>
        </Menu.Item>
        <Menu.Item key="4">
          <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
            公共服务关系
          </a>
        </Menu.Item>
        <Menu.Item key="5">
          <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
            社会保障指数
          </a>
        </Menu.Item>
      </Menu>
    );

    const rightContent = (
      <div className={styles.btn_content}>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            <div className={styles.btn_menu}></div>
          </a>
        </Dropdown>
      </div>
    )

    return (
      <div className={styles.screen}>
        <header className={styles.header}>
          <span className={styles.title}>金华人社指数与分析决策平台</span>
          <span className={styles.time}>{`${date} ${daysArr[day-1]}`}</span>
          {rightContent}
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

