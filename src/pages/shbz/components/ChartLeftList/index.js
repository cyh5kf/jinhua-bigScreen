  import React from 'react'
  import { Row, Col } from 'antd'
  import { leftListData, leftListData2, leftListData3 } from '../../dataSource'
  const funcCols = (data) => {
    const MapCol = data.map((item) => {
      return <Col span={24}><span>{item.label}: </span><span className="value">{item.value}</span>亿</Col>
    })
    return (
      <Row className="shbz-left-list">
        {MapCol}
      </Row>
    )
  }
  export const ChartLeftList = function (data) {return funcCols(data || leftListData)}
  export const ChartLeftList2 = function (data) {return funcCols(data || leftListData2)}
  export const ChartLeftList3 = function (data) {return funcCols(data || leftListData3)}
