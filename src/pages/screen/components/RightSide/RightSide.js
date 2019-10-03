import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RightFirst from './RightFirst'
import RightSecond from './RightSecond'
import RightThird from './RightThird'


class RightSide extends PureComponent {

    render() {
        return (
            <div>
                <RightFirst />
                <RightSecond />
                <RightThird />
            </div>
        )
    }
}

RightSide.propTypes = {
    form: PropTypes.object,
    loading: PropTypes.object,
}

export default RightSide;

