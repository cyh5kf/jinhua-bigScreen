import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LeftFirst from './LeftFirst'
import LeftSecond from './LeftSecond'
import LeftThird from './LeftThird'
// import styles from './LeftSide.less'


class LeftSide extends PureComponent {

    render() {
        return (
            <div>
                <LeftFirst />
                <LeftSecond />
                <LeftThird />
            </div>
        )
    }
}

LeftSide.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default LeftSide;

