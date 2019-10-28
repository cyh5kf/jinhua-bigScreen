import React, { PureComponent } from 'react'
import styles from './index.less'
import Header from 'components/Header'

class Zjygzw extends PureComponent {

  render() {

    return (
      <div className={styles.container}>
            <Header />
            <iframe title="最多跑一次改革" width="100%" height="100%" src="http://10.83.137.161:7020/zjygzw/sysmanager/login/mainPage"></iframe>
        </div>
    )
  }
}


export default Zjygzw;