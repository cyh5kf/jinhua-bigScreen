import React, { PureComponent } from 'react'
import { withRouter } from 'dva/router';

class App extends PureComponent {

    UNSAFE_componentWillMount() {
        const { location, history } = this.props;
        if (location.pathname === "/") {
          history.push("/screen");
        }
    }

    render () {

        return (
            <></>
        )
    }
}

export default withRouter(App)

