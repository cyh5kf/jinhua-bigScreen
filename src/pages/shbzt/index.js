import React, { PureComponent } from 'react'
import styles from './index.less'
import HeaderBtnGroup from "../../components/HeaderBtnGroup";


class Shbzt extends PureComponent {

  render () {
    const name = this.props.match.params.name;
    let src = '';
    const data = [{
      label: '社会保障',
      path: '/#/shbzt/1',
      classname: 'shbz'
    }, {
      label: '稽核风控',
      path: '/#/shbzt/2',
      classname: 'jhfk'
    },
    {
      label: '全民参保',
      path: '/#/shbzt/3',
      classname: 'qmcb'
    }, {
      label: '机关养老',
      path: '/#/shbzt/4',
      classname: 'jgyl'
    }, {
      label: '首页',
      path: '/#/shbz',
      classname: 'shbzmenu'
    }
    ];
    if (name === '1') {
      src = 'http://10.83.132.33:9050/sbruninfo';
    } else if (name === '2') {
      src = 'https://mo6rz8.axshare.com';
    } else if (name === '3') {
      src = 'http://10.87.1.165:1221/ScreenUtil/screen/qmcb-jh.jsp';
    } else if (name === '4') {
      src = 'http://10.87.1.165:1221/ScreenUtil/screen/jgb-jh.jsp';
    }

    return (
        <div className={styles.container}>
        <HeaderBtnGroup data={data} />
        <iframe width="100%" height="100%" src={src} ></iframe>
        </div>
    )
  }
}


export default Shbzt;
