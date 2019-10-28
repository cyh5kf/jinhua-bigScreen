import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CenterTop from './CenterTop'
import CenterMiddle from './CenterMiddle'


class Center extends PureComponent {

    render() {
        return (
            <div style={{position:'relative'}}> 
                 
                <CenterTop />
                <CenterMiddle />

            </div>
        )
    }
}

Center.propTypes = {
    loading: PropTypes.object,
}

export default Center;

