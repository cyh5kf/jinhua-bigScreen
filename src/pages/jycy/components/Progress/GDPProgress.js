import React from 'react'
import { Progress } from 'antd';

class GDPProgress extends React.Component {

    render() {
        const datas = this.props.gdpzb;
        return (
            <div style={{ width: '100%', margin: '0.125rem 0 0' }}>
                <Progress percent={datas.KPI_VALUE}
                size="small"
                showInfo={false}
                strokeColor={{
                    '0%': '#D25F0C',
                    '100%': '#ECFA31',
                }}  />
            </div>
        )
    }
}

export default GDPProgress;