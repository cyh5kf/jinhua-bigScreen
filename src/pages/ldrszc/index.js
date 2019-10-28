import React, { PureComponent } from 'react'
import styles from './index.less'
import HeaderBtnGroup from "../../components/HeaderBtnGroup";


class Ldrszc extends PureComponent {

  render () {
    const data = [
      {
        label: '首页', path: '/#/ldrszc', classname: 'ldgxmenu'
      }];

    return (
        <div className={styles.container}>
        <HeaderBtnGroup data={data} />
        <iframe width="100%" height="100%" src="http://10.83.139.151:8090/ldzc/arbitrationScreen/?businessKey=8f06337c-0c1e-420a-89e5-6c0807d73b88&businessSecret=158d3f37df2848d76f0bcfcf3274307ehttp://10.83.139.151:8090/wlyq/yqdpzs?businessKey=6214df4d-a2aa-472a-b1fe-162b5923cbbd&businessSecret=a534d5e2775398c6cdcfb3b76caeb016&aab301=330700"></iframe>
        </div>
    )
  }
}


export default Ldrszc;

