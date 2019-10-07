import React, { PureComponent } from 'react'
import HeaderMenu from 'components/HeaderMenu'
import styles from './index.less'


class Sbruninfo extends PureComponent {

  render () {


    return (
        <div className={styles.container}>
            <HeaderMenu />
            <iframe width="100%" height="100%" src="http://10.83.132.33:9050/sbruninfo"></iframe>
        </div>
    )
  }
}


export default Sbruninfo;

