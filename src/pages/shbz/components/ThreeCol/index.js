import React from 'react'
import { Row, Col } from 'antd'
const iconList = ['qiyezhigong', 'chengxiangjumin', 'jiguanshiye'];
const initDataLeft = [{ label: '城乡居民', value: '', content: '' }, { label: '机关事业', value: '', content: '' }, { label: '企业职工', value: '', content: '' }, ]
const initDataRight = [{ label: '城乡居民', value: '' }, { label: '机关事业', value: '' }, { label: '企业职工', value: '' } ]
const funcCols = (data) => {
  const MapCol = data.map((item, index) => {
    return (
      <Col span={24} className="shbz-text-22 shbz-box">
        <div className={`icon-box ${iconList[index]}`}></div>
        <div>{item.label}</div>
        <div className="shbz-text-blue">{item.value}</div>
        <div>全省排名：<span className="shbz-text-yellow">{item.content}</span>/11</div>
      </Col>
    )
  })
  return (
    <Row className="shbz-blue-background">
      {MapCol}
    </Row>
  )
}
const funcCols2 = (data) => {
  const MapCol = data.map((item) => {
    const value = Number(item.value).toFixed(1)
    return <Col span={8} className="shbz-text-20"><span>{item.label}</span><span className="shbz-text-blue-30">{value}</span>月</Col>
  })
  return (
    <Row className="shbz-blue-background2">
      {MapCol}
    </Row>
  )
}
export const TreeColLeft = function (data) { return funcCols(data || initDataLeft)}
export const TreeColRight = function (data) { return funcCols2(data || initDataRight)}
