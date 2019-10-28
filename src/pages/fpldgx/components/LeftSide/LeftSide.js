import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LeftFirst from './LeftFirst'
import LeftSecond from './LeftSecond'
import LeftThird from './LeftThird'
 import styles from './LeftSide.less'


class LeftSide extends PureComponent {

    render() {
        return (
            <div>
                <div className={styles.flex_hasBg}>
                    <LeftFirst />
                    <LeftSecond />
                </div>
                <div className={styles.flex_hasBg}>
                    <LeftThird />
                </div>
                
               
               
            </div>
        )
    }
}

LeftSide.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default LeftSide;

