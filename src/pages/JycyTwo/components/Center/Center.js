import React, { PureComponent } from 'react'
import { connect } from 'dva';
import PropTypes from 'prop-types'

import styles from '../../index.less'

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class Center extends PureComponent {

  render () {

    const { JYCYZS_GDP, MAP_ZS } = this.props.jycytwo;
    let gdp = []
    let rjgdp = []
    let wlrk = 0
    let ecjyrs = 0
    let shcbrs = 0
    let xzjyrs = 0
    if(JYCYZS_GDP && JYCYZS_GDP.length > 0) {
      for(let i of JYCYZS_GDP) {
        if(i.KPI_NAME === 'GDP') {
          gdp = (Math.round(i.NUM)).toString().split('')
          if(gdp.length < 7) {
            const sum = 7 - gdp.length
            for(let i=0; i<sum; i++) {
              gdp.unshift('0')
            }
          }
        } else if(i.KPI_NAME === '人均GDP') {
          rjgdp = (Math.round(i.NUM)).toString().split('')
          if(rjgdp.length < 7) {
            const sum = 7 - rjgdp.length
            for(let i=0; i<sum; i++) {
              rjgdp.unshift('0')
            }
          }
        }
      }
    }

    if(MAP_ZS && MAP_ZS.length > 0) {
      for(let j of MAP_ZS) {
        if(j.KPI_NAME === '外来人口') {
          wlrk = j.KPI_VALUE
        } else if(j.KPI_NAME === '二次就业人数') {
          ecjyrs = j.KPI_VALUE
        } else if(j.KPI_NAME === '社会参保人数') {
          shcbrs = j.KPI_VALUE
        } else if(j.KPI_NAME === '新增就业人数') {
          xzjyrs = j.KPI_VALUE
        }
      }
    }

    return (
      <div>
        <div className={styles.center}>
          <div className={styles.gdp}>
            <div className={styles.text} style={{ left: '0.3rem' }}>GDP：</div>
            <div className={styles.num}>
              {
                gdp.length > 0 && gdp.map((item, index) => {
                  return (
                    <i key={index}>{item}</i>
                  )
                })
              }
              <i>亿元</i>
            </div>
          </div>
          <div className={styles.gdp}>
            <div className={styles.text}>人均GDP：</div>
            <div className={styles.num}>
              {
                rjgdp.length > 0 && rjgdp.map((item, index) => {
                  return (
                    <i key={index}>{item}</i>
                  )
                })
              }
              <i>元</i>
            </div>
          </div>
        </div>
        <div className="apple1 apple-ball">
          <p><span className="rsnum">{xzjyrs}</span><span className="ren">万人</span></p>
          <div>新增就业人数</div>
        </div>

        <div className="apple2 apple-ball">
          <p><span className="rsnum">{shcbrs}</span><span className="ren">万人</span></p>
          <div>社会参保人数</div>
        </div>
        <div className="apple3 apple-ball">
          <p><span className="rsnum">{ecjyrs}</span><span className="ren">万人</span></p>
          <div>二次就业人数</div>
        </div>
        <div className="apple4 apple-ball">
          <p><span className="rsnum">{wlrk}</span><span className="ren">万人</span></p>
          <div>外来人口</div>
        </div>
      </div>
    )
  }
}

Center.propTypes = {
  loading: PropTypes.object,
}

export default Center;
