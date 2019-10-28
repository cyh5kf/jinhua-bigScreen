import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Modal}from 'antd'
import { connect } from 'dva';
import styles from '../LeftSide.less'
import classNames from 'classnames'
import JycyPie from '../../echarts/JycyPie'
import SankeyWheel from '../../highcharts/dependencyWheel';

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class LeftSecond extends PureComponent {
  state = {
    type: 1,
  }

  onChangeBlock = (ind, flag) => {
    const { dispatch } = this.props
    // dispatch({
    //   type: 'jycytwo/updateState',
    //   payload: {
    //     blockSelect: ind,
    //     zbSelect: flag ? '' : 0
    //   }
    // })
  }

  onLinkTo = (ind) => {
    const { history } = this.props
    // history.push("/jycytwo");
  }
  tabHover (value) {
    clearInterval(this.state.interval)
    this.setState({
      type: value,
    })
  }
  tabLeave () {
    // this.funcPie(this.state.type)
  }
  info=(data)=>{
  Modal.info({
    title: '行业流向',
    maskClosable:true,
    footer:null,
    icon:'<></>',
    width:702,
    okText:'',
    className:styles.info,
    cancelType:'primary',
    content: (
     <div>
        <div className={styles.title_Flag} style={{ top: '0rem', left: '0rem'}}>
          <div style={{
            marginTop:'9px',
            marginRight:'10px',
            float:'left',
            width: '11px',
            height: '30px',
            background: 'rgba(24, 240, 255, 1)'
          }}></div> <div style={{fontSize:'30px'}} >行业流向</div>
        </div>
        <div style={{width:'367px',height:'369px',margin:'0 auto'}}>
          <SankeyWheel ydata={data} />
          </div>
       
        </div>
     
    )
  });
}

  funcPie = async (value) => {
    let self = this
    let i = value;
    self.setState({
      type: i
    })
    this.state.interval = setInterval(() => {
      if (i === 3) {
        i = 1
      } else {
        i++
      }
      self.setState({
        type: i
      })
    }, 3000);
  }

  render () {
    const { jycytwo } = this.props;
    const { blockSelect, JYCYZS_ECJYQK, ECJYQK_HYLX } = jycytwo;
    const { type } = this.state

    const flex = classNames(styles.flex_item, styles.under_line);
    let data = [
      ['日用品', '金属制造', 5],
      ['日用品', '贸易', 1],
      ['日用品', '其他批发业', 1],
      ['日用品', '服务行业', 1],
      ['金属制造', '贸易', 1],
      ['金属制造', '服装制造', 5],
      ['金属制造', '服务行业', 1],
      ['贸易', '体育制造', 1],
      ['贸易', '服务行业', 1],
      ['贸易', '其他批发业', 5],
      ['贸易', '服装制造', 1],
      ['服装制造', '日用品', 1],
      ['服装制造', '金属制造', 1],
      ['服装制造', '服务行业', 1],
      ['服装制造', '其他批发业', 5],
      ['体育制造', '日用品', 2],
      ['体育制造', '金属制造', 1],
      ['体育制造', '贸易', 1],
      ['体育制造', '服装制造', 3],
      ['服务行业', '服装制造', 1],
      ['服务行业', '贸易', 3],
      ['服务行业', '日用品', 3],
      ['服务行业', '金属制造', 3],
      ['其他批发业', '日用品', 1],
      ['其他批发业', '金属制造', 1],
      ['其他批发业', '服装制造', 1]
    ];

    let ecjyqk = {
      seriesData: {
        a1: 0,
        a2: 0,
        a3: 0,
      }
    };
    let data1 = [], data2 = [], data3 = [];
    if (JYCYZS_ECJYQK) {
      JYCYZS_ECJYQK.map((data) => {
        if (data.KPI_CLASS === '二次就业三个月') {
          data1.push(data);
        } else if (data.KPI_CLASS === '二次就业六个月') {
          data2.push(data);
        } else if (data.KPI_CLASS === '二次就业一年') {
          data3.push(data);
        }
      });
    };
    if (type === 1) {
      data1.map(it => {
        if (it.KPI_NAME === '就业百分比') {
          ecjyqk.seriesData.a1 = it.NUM
        } else if (it.KPI_NAME === '二次就业人数') {
          ecjyqk.seriesData.a2 = it.NUM
        } else if (it.KPI_NAME === '中断人数') {
          ecjyqk.seriesData.a3 = it.NUM
        }
      });
    } else if (type === 2) {
      data2.map(it => {
        if (it.KPI_NAME === '就业百分比') {
          ecjyqk.seriesData.a1 = it.NUM
        } else if (it.KPI_NAME === '二次就业人数') {
          ecjyqk.seriesData.a2 = it.NUM
        } else if (it.KPI_NAME === '中断人数') {
          ecjyqk.seriesData.a3 = it.NUM
        }
      });
    } else if (type === 3) {
      data3.map(it => {
        if (it.KPI_NAME === '就业百分比') {
          ecjyqk.seriesData.a1 = it.NUM
        } else if (it.KPI_NAME === '二次就业人数') {
          ecjyqk.seriesData.a2 = it.NUM
        } else if (it.KPI_NAME === '中断人数') {
          ecjyqk.seriesData.a3 = it.NUM
        }
      });
    }

    let hylx; // 行业流向data
    if (ECJYQK_HYLX) {
      hylx = ECJYQK_HYLX.map(it => [it.KPI_NAME, it.KPI_UNIT, it.NUM]);
    }
   

    return (
      <div onClick={() => this.onLinkTo('人才指数')} onMouseOver={() => this.onChangeBlock('人才指数', true)} onMouseOut={() => this.onChangeBlock('', false)} className={`${styles.leftContent} ${blockSelect === '人才指数' ? styles.is_active : ''}`}>
        <div className={styles.title_Flag}>二次就业</div>
        <div className={styles.left_box}>
          <div className={styles.width}>
            <div className={`${styles.content} ${styles.middle_1}`}>
              <div className={styles.title_Flag} style={{left:'270px'}}>
                <span className={styles.tab}>
                  <i style={{fontSize:'18px'}} onMouseOver={() => { this.tabHover(1) }} className={type === 1 ? `${styles.active}` : ''} onMouseLeave={() => { this.tabLeave() }}>三个月</i>
                  <i style={{ fontSize: '18px' }}onMouseOver={() => { this.tabHover(2) }} className={type === 2 ? `${styles.active}` : ''} onMouseLeave={() => { this.tabLeave() }}>六个月</i>
                  <i style={{ fontSize: '18px' }}onMouseOver={() => { this.tabHover(3) }} className={type === 3 ? `${styles.active}` : ''} onMouseLeave={() => { this.tabLeave() }}>一年</i>
                </span>
              </div>
              <div>
                <div className={styles.pie}>
                  <JycyPie className={styles.charts} curId='middle_1' width='1.125rem' height='1.2rem' {...ecjyqk} />
                </div>
                <div style={{position:'absolute',top:'60px',left:'150px',width:'150px'}}>
                  <div className={styles.twoValue}>
                    <span style={{ fontSize: '18px',marginLeft:'0px' }}>二次就业人数</span><br />
                    <b style={{ fontSize: '25px', marginLeft: '0px' }}>{ecjyqk ? ecjyqk.seriesData.a2 : 0}<em style={{ fontSize: '18px', marginLeft: '10px' }}>人</em></b>
                  </div>
                  <div className={styles.twoValue}>
                    <span style={{ fontSize: '18px', marginLeft: '0px' }}>中断人数</span><br />
                    <b style={{ fontSize: '25px', marginLeft: '0px' }}>{ecjyqk ? ecjyqk.seriesData.a3 : 0}<em style={{ fontSize: '18px', marginLeft: '0px' }}>人</em></b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.width1} >
            <div style={{marginTop:'37px',marginLeft:'50px'}}>
              <img src={require('../../../../../assets/images/lx.svg')} alt="" width="85%" onClick={() => this.info(hylx)}></img>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

LeftSecond.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default LeftSecond;
