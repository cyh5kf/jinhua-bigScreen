import React, { PureComponent } from 'react'
import HeaderMenu from 'components/HeaderMenu'
import styles from './index.less'


class Zjygzw extends PureComponent {

  render () {


    return (
        <div className={styles.container}>
            <HeaderMenu />
            <iframe width="100%" height="100%" src="http://10.83.137.161:7020/zjygzw"></iframe>
        </div>
    )
  }
}


export default Zjygzw;

