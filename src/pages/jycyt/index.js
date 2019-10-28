import React, { PureComponent } from 'react'
// import HeaderMenu from 'components/HeaderMenu'
import styles from './index.less'
import HeaderBtnGroup from "../../components/HeaderBtnGroup";


class Jycyt extends PureComponent {

  render () {
    const name = this.props.match.params.name;
    let src = '';
    const data = [
      {
        label: '就业失业', path: '/#/jycyt/1', classname: 'jysy'
      },
      {
        label: '东西部扶贫', path: '/#/jycyt/2', classname: 'dxbfp'
      },
      {
        label: '首页', path: '/#/jycyTwo', classname: 'jycymenu'
      }];
    if (name === '1') {
      src = 'http://10.83.143.60/webPage/jysy.html';
    } else if (name === '2') {
      src = 'http://10.83.139.151:8090/zjfp/dsj/fpNotitle.html?businessKey=8f528568-f5b8-4d1c-96bc-c53909c9e771&businessSecret=4a15fe30319c8138f4b494a1c4c0a756&aaa301=330700';
    }


    return (
      <div className={styles.container}>
        <HeaderBtnGroup data={data} />
        <iframe width="100%" height="100%" src={src} ></iframe>
      </div>
    )

  }
}


export default Jycyt;

