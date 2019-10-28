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
            
            <Menu.Item key="1.1">
              <Link to="/jycyt/1">就业创业指数</Link>
            </Menu.Item>
            <Menu.Item key="1.2">
              <Link to="/jycyt/2">就业创业预警平台</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/rc">人才指数</Link>
            </Menu.Item>
            <Menu.Item key="3.1">
              <Link to="/ldgx">劳动关系指数</Link>
            </Menu.Item>
            <Menu.Item key="3.2">
              <Link to="/ldgxt">欠薪预警平台</Link>
            </Menu.Item>
            <Menu.Item key="3.3">
              <Link to="/ldrszc">劳动人事仲裁大屏</Link>
            </Menu.Item>
            <Menu.Item key="3.4">
              <Link to="/shbzt">网络舆情平台</Link>
            </Menu.Item>
            <Menu.Item key="4.1">
              <Link to="/sbruninfo">社会保障指数</Link>
            </Menu.Item>
            <Menu.Item key="4.2">
            <Link to="/rct">社会保险稽核风控系统</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/zjygzw">公共服务指数</Link>
            </Menu.Item>
            <Menu.Item key="6">
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
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                    <div className={styles.btn_menu}></div>
                    </a>
                </Dropdown>
            </div>
        )
    }
}

export default HeaderMenu;