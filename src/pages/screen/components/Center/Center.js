import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import CenterTop from './CenterTop'
// import CenterData from './CenterData'
import CenterZs from './CenterZs'

class Center extends PureComponent {

    render() {
        return (
            <>
                {/* <CenterTop /> */}
                {/* <CenterData /> */}
                <CenterZs />
            </>
        )
    }
}

Center.propTypes = {
    loading: PropTypes.object,
}

export default Center;

