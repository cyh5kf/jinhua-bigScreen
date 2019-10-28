import React, { PureComponent } from 'react'
import HeaderMenu from 'components/HeaderMenu'
import styles from './index.less'
import HeaderBtnGroup from "../../components/HeaderBtnGroup";


class Ldgxt extends PureComponent {

  render () {
    //  qxyj

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

    const name = this.props.match.params.name;
    let src = '';
    if (name === '1') {
      src = 'http://10.83.139.151:8090/yj/Index?token=4bb3f845da96026d3915f49513bb5cJH';
    } else if (name === '2') {
      src = 'http://10.83.139.151:8090/ldzc/arbitrationScreen/?businessKey=8f06337c-0c1e-420a-89e5-6c0807d73b88&businessSecret=158d3f37df2848d76f0bcfcf3274307ehttp://10.83.139.151:8090/wlyq/yqdpzs?businessKey=6214df4d-a2aa-472a-b1fe-162b5923cbbd&businessSecret=a534d5e2775398c6cdcfb3b76caeb016&aab301=330700';
    } else if (name === '3') {
      src = 'http://10.83.139.151:8090/wlyq/yqdpzs?businessKey=6214df4d-a2aa-472a-b1fe-162b5923cbbd&businessSecret=a534d5e2775398c6cdcfb3b76caeb016&aab301=330700'
    }


    return (
        <div className={styles.container}>
          <HeaderBtnGroup data={data} />
          <iframe width="100%" height="100%" src={src}></iframe>
        </div>
    )
  }
}


export default Ldgxt;

