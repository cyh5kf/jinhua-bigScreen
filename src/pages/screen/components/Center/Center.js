import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CenterTop from './CenterTop'
import CenterMiddle from './CenterMiddle'
import CenterData from './CenterData'

class Center extends PureComponent {

    render() {
        return (
            <>
                <CenterTop />
                <CenterMiddle />
                <CenterData />
            </>
        )
    }
}

Center.propTypes = {
    loading: PropTypes.object,
}

export default Center;

