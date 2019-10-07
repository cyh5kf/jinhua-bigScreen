import React, { PureComponent } from 'react'
import HeaderMenu from 'components/HeaderMenu'
import styles from './index.less'


class Wlxxaq extends PureComponent {

  render () {


    return (
        <div className={styles.container}>
            <HeaderMenu />
            <iframe width="100%" height="100%" src="http://10.83.139.221/api/homePage/home"></iframe>
        </div>
    )
  }
}


export default Wlxxaq;

