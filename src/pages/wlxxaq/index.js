import React, { PureComponent } from 'react'
import styles from './index.less'
import Header from 'components/Header'


class Wlxxaq extends PureComponent {

  render() {

    return (
      <div className={styles.container}>
            <Header />
            <iframe title="网络信息安全指数" width="100%" height="100%" src="http://10.83.139.221/api/homePage/home"></iframe>
        </div>
    )
  }
}


export default Wlxxaq;