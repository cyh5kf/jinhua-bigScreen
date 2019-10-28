import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RightFirst from './RightFirst'
import RightSecond from './RightSecond'
import RightThird from './RightThird'
import styles from './RightSide.less'


class RightSide extends PureComponent {

    render() {
        return (
            <div >
                < div className={styles.flex_hasBg}>
                    <RightFirst />
                    <RightSecond />
                </div>
                < div className={styles.flex_hasBg}>
                    <RightThird />
                </div>
                
               
            </div>
        )
    }
}

RightSide.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default RightSide;

