import React, { PureComponent } from 'react'
import { Link } from 'dva/router'
import {Menu, Dropdown} from 'antd'
import styles from './index.less'


class HeaderMenu extends PureComponent {

    render() {
      const { linkType } = this.props
      const menu = (
          <Menu>
            {
              (linkType !== 'home') && (
                <Menu.Item key="0">
                  <Link to="/screen">金华人社指数与分析决策平台</Link>
                </Menu.Item>
              )
            }
            
            <Menu.Item key="1">
              <Link to="/zjygzw">最多跑一次改革</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/sbruninfo">社会保障体系</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/wlxxaq">网络信息安全指数</Link>
            </Menu.Item>

          </Menu>
        );

        //   <Menu.Item key="3">
        //         <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
        //           网络信息安全指数
        //         </a>
        //       </Menu.Item>

        return (
            <div className={styles.btn_content}>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                    <div className={styles.btn_menu}></div>
                    </a>
                </Dropdown>
            </div>
        )
    }
}

export default HeaderMenu;