import React from 'react'
import { Progress } from 'antd';
import './Progress.less'

class FuWuProgress extends React.Component {

    render() {
        const fwmyd = this.props.fwmyd;
        
        return (
            <div className="progress_box">
                <Progress
                    type="circle"
                    strokeColor={{
                        '0%': '#E9ED2D',
                        '100%': '#D25E0C',
                    }}
                    width={90}
                    percent={fwmyd.KPI_VALUE ? fwmyd.KPI_VALUE : 0}
                    format={percent => `${percent} ${fwmyd.KPI_UNIT}`}
                />
                <div className="text_title">{fwmyd.KPI_NAME ? fwmyd.KPI_NAME : '--'}</div>
            </div>
        )
    }
}

export default FuWuProgress;