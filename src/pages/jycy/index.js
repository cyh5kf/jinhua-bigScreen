import React, { PureComponent } from 'react'
import { connect } from 'dva';
import PropTypes from 'prop-types'
import { Menu, Dropdown } from 'antd'
import styles from './index.less'
import { fontSizeInit, getHtmlFontSize } from 'utils'
import moment from 'moment'
// import HeaderMenu from 'components/HeaderMenu'
import JycyBar from './JycyBar'
import JycyLine from './JycyLine'
import JycyBarF from './JycyBarF'
import JycyPie from './JycyPie'
import Header from 'components/Header'

@connect(({ jycy, loading }) => ({ jycy, loading }))
class Jycy extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      type: 1,
      carousel: false,
      carousel1: false,
      carousel2: false,
      carousel3: false,
      carousel4: false,
      carousel5: false,
      carousel6: false,
      carousel7: false,
      interval: null,
      timeOut: null
    }
  }
  componentDidMount () {
    window.addEventListener('resize', function () {
      fontSizeInit();
      getHtmlFontSize()
    });
    this.funcAllData();
    this.funcPie(this.state.type)
  }
  tabHover (value) {
    clearInterval(this.state.interval)
    this.setState({
      type: value,
    })
  }
  tabLeave () {
    this.funcPie(this.state.type)
  }
  funcNameAll = async () => {
    clearTimeout(this.state.timeOut);
    if (this.state.carousel) {
      this.setState({
        carousel: false
      })
    } else {
      this.setState({
        carousel: true
      })
    }
    this.state.timeOut = setTimeout(this.funcNameAll, 5000);
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

  funcAllData = async () => {
    let self = this;
    let i = 0
    this.funcData1()
    let interval = setInterval(() => {
      i++
      if (i === 1) {
        self.funcData1()
      }
      if (i === 2) {
        self.funcData2()
      }
      if (i === 3) {
        self.funcData3()
      }
      if (i === 4) {
        self.funcData4()
      }
      if (i === 5) {
        self.funcData5()
      }
      if (i === 6) {
        self.funcData6()
      }
      if (i === 7) {
        self.funcData7()
        i = 0
      }
    }, 2000);
  }
  funcData1 = async () => {
    // let timeOut = null
    // clearTimeout(timeOut);
    if (this.state.carousel1) {
      this.setState({
        carousel1: false
      })
    } else {
      this.setState({
        carousel1: true
      })
    }
    // timeOut = setTimeout(this.funcData1, 2000);
  }
  funcData2 = async () => {
    // let timeOut = null
    // clearTimeout(timeOut);
    if (this.state.carousel2) {
      this.setState({
        carousel2: false
      })
    } else {
      this.setState({
        carousel2: true
      })
    }
    // timeOut = setTimeout(this.funcData2, 2000);
  }
  funcData3 = async () => {
    // let timeOut = null
    // clearTimeout(timeOut);
    if (this.state.carousel3) {
      this.setState({
        carousel3: false
      })
    } else {
      this.setState({
        carousel3: true
      })
    }
    // timeOut = setTimeout(this.funcData3, 2000);
  }
  funcData4 = async () => {
    // let timeOut = null
    // clearTimeout(timeOut);
    if (this.state.carousel4) {
      this.setState({
        carousel4: false
      })
    } else {
      this.setState({
        carousel4: true
      })
    }
    // timeOut = setTimeout(this.funcData4, 2000);
  }
  funcData5 = async () => {
    // let timeOut = null
    // clearTimeout(timeOut);
    if (this.state.carousel5) {
      this.setState({
        carousel5: false
      })
    } else {
      this.setState({
        carousel5: true
      })
    }
    // timeOut = setTimeout(this.funcData5, 2000);
  }
  funcData6 = async () => {
    // let timeOut = null
    // clearTimeout(timeOut);
    if (this.state.carousel6) {
      this.setState({
        carousel6: false
      })
    } else {
      this.setState({
        carousel6: true
      })
    }
    // timeOut = setTimeout(this.funcData6, 2000);
  }
  funcData7 = async () => {
    // let timeOut = null
    // clearTimeout(timeOut);
    if (this.state.carousel7) {
      this.setState({
        carousel7: false
      })
    } else {
      this.setState({
        carousel7: true
      })
    }
    // timeOut = setTimeout(this.funcData7, 2000);
  }

  render () {
    fontSizeInit();
    getHtmlFontSize();
    const { type, carousel, carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7 } = this.state
    const date = moment().format('YYYY/MM/DD')
    const day = moment().day();

    const daysArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期七']
    let left_2_data = {
      xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      seriesData: [56.71, 84.39, 131.04, 76.27, 42.25, 36.16, 18.09, 42.25, 36.16, 18.09],
      yNamne: "人数(万)",
      LinearGradient: ['#E4D626', '#D98C16']
    }
    let left_3_data = {
      xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      seriesData: [486.4, 486.4, 486.8, 474.4, 351.8, 270.3, 481.9, 481.6, 483.7, 683.7],
      yNamne: "人数(万)",
      lineColor: "#0067E0",
      LinearGradient: ['#4294FF', 'rgba(85,182,251, 0.57)', 'rgba(108,225,245, 0)', 'transparent'],
      smooth: false
    };
    let left_bottom_data = {
      xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      seriesData: [8102, 15585, 28960, 40743, 54155, 65004, 76980, 87071, 104789, 124789],
      yNamne: "人数"
    };

    let middle_2_data = {
      xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      seriesData: [-1.0, 0, 1.0, 0.4, -0.1, 0.5, 0, -1.5, -2, -1.2],
      yNamne: "倍率",
      per: true,
      lineColor: "#E6DD28",
      LinearGradient: ['#DA9418', 'rgba(224,182,31, 0.49)', 'rgba(228,211,38, 0)', 'transparent'],
      smooth: true
    };

    let right_1_data = {
      xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      seriesData: [2.13, 2.13, 2.13, 2.16, 2.17, 2.09, 2.06, 2.05, 2.04, 1.04],
      yNamne: "失业率",
      per: true,
      lineColor: "#0067E0",
      LinearGradient: ['#4294FF', 'rgba(85,182,251, 0.57)', 'rgba(108,225,245, 0)', 'transparent'],
      smooth: false
    };

    //圆角柱子
    let right_2_data = {
      xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      seriesData: [5171, 2393, 5308, 7775, 7302, 6019, 6428, 5555, 5759, 4706],
      yNamne: "企业数",
      LinearGradient: ['#CDEAFF', '#2765FF']
    };

    //圆角柱子
    let right_3_data = {
      xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      seriesData: [8954, 3370, 9739, 13581, 14362, 12907, 12531, 11963, 13495, 11533],
      yNamne: "个体工商户数",
      LinearGradient: ['#E4D626', '#D98C16']
    };
    // if (carousel1 === true) {
    //   left_2_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [56.71, 84.39, 131.04, 76.27, 42.25, 36.16, 18.09, 42.25, 36.16, 18.09],
    //     yNamne: "人数(万)",
    //     LinearGradient: ['#E4D626', '#D98C16']
    //   }
    // } else {
    //   left_2_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [12.71, 64.39, 191.04, 96.27, 142.25, 136.16, 118.09, 142.25, 136.16, 118.09],
    //     yNamne: "人数(万)",
    //     LinearGradient: ['#E4D626', '#D98C16']
    //   }
    // }
    // if (carousel2 === true) {
    //   left_3_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [486.4, 486.4, 486.8, 474.4, 351.8, 270.3, 481.9, 481.6, 483.7, 683.7],
    //     yNamne: "人数(万)",
    //     lineColor: "#0067E0",
    //     LinearGradient: ['#4294FF', 'rgba(85,182,251, 0.57)', 'rgba(108,225,245, 0)', 'transparent'],
    //     smooth: false
    //   };
    // } else {
    //   left_3_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [286.4, 286.4, 286.8, 674.4, 151.8, 470.3, 781.9, 281.6, 683.7, 483.7],
    //     yNamne: "人数(万)",
    //     lineColor: "#0067E0",
    //     LinearGradient: ['#4294FF', 'rgba(85,182,251, 0.57)', 'rgba(108,225,245, 0)', 'transparent'],
    //     smooth: false
    //   };
    // }
    // if (carousel3 === true) {
    //   left_bottom_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [8102, 15585, 28960, 40743, 54155, 65004, 76980, 87071, 104789, 124789],
    //     yNamne: "人数"
    //   };
    // } else {
    //   left_bottom_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [4102, 10585, 38960, 30743, 44155, 45004, 96980, 77071, 124789, 104789],
    //     yNamne: "人数"
    //   };
    // }
    // if (carousel4 === true) {
    //   middle_2_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [-1.0, 0, 1.0, 0.4, -0.1, 0.5, 0, -1.5, -2, -1.2],
    //     yNamne: "倍率",
    //     lineColor: "#E6DD28",
    //     LinearGradient: ['#DA9418', 'rgba(224,182,31, 0.49)', 'rgba(228,211,38, 0)', 'transparent'],
    //     smooth: true
    //   };
    // } else {
    //   middle_2_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [-1.0, 0, 1.0, 0.2, -0.1, 0.3, 0, -1.5, -2, -1],
    //     yNamne: "倍率",
    //     lineColor: "#E6DD28",
    //     LinearGradient: ['#DA9418', 'rgba(224,182,31, 0.49)', 'rgba(228,211,38, 0)', 'transparent'],
    //     smooth: true
    //   };
    // }
    // if (carousel5 === true) {
    //   right_1_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [2.13, 2.13, 2.13, 2.16, 2.17, 2.09, 2.06, 2.05, 2.04, 1.04],
    //     yNamne: "失业率",
    //     lineColor: "#0067E0",
    //     LinearGradient: ['#4294FF', 'rgba(85,182,251, 0.57)', 'rgba(108,225,245, 0)', 'transparent'],
    //     smooth: false
    //   };
    // } else {
    //   right_1_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [1.13, 2.13, 2.13, 4.16, 2.17, 2.09, 1.06, 3.05, 2.04, 1.04],
    //     yNamne: "失业率",
    //     lineColor: "#0067E0",
    //     LinearGradient: ['#4294FF', 'rgba(85,182,251, 0.57)', 'rgba(108,225,245, 0)', 'transparent'],
    //     smooth: false
    //   };
    // }
    // if (carousel6 === true) {
    //   //圆角柱子
    //   right_2_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [5171, 2393, 5308, 7775, 7302, 6019, 6428, 5555, 5759, 4706],
    //     yNamne: "企业数",
    //     LinearGradient: ['#CDEAFF', '#2765FF']
    //   };
    // } else {
    //   //圆角柱子
    //   right_2_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [3171, 5393, 3308, 4775, 5302, 4019, 8428, 3555, 2759, 6706],
    //     yNamne: "企业数",
    //     LinearGradient: ['#CDEAFF', '#2765FF']
    //   };
    // }

    // if (carousel7 === true) {
    //   //圆角柱子
    //   right_3_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [8954, 3370, 9739, 13581, 14362, 12907, 12531, 11963, 13495, 11533],
    //     yNamne: "个体工商户数",
    //     LinearGradient: ['#E4D626', '#D98C16']
    //   };
    // } else {
    //   //圆角柱子
    //   right_3_data = {
    //     xAxis: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    //     seriesData: [6954, 7370, 5739, 18581, 6362, 18907, 7531, 19963, 12495, 7533],
    //     yNamne: "个体工商户数",
    //     LinearGradient: ['#E4D626', '#D98C16']
    //   };
    // }

    let middle_1_data = {}
    if (type === 1) {
      middle_1_data = {
        seriesData: {
          a1: "48.7",
          a2: "16735",
          a3: "34349"
        }
      };
    } else if (type === 2) {
      middle_1_data = {
        seriesData: {
          a1: "58.9",
          a2: "46970",
          a3: "79780"
        }
      };
    } else if (type === 3) {
      middle_1_data = {
        seriesData: {
          a1: "71.3",
          a2: "109625",
          a3: "153667"
        }
      };
    }
    const data = [
      {
        label: '就业失业', path: '/#/jycyt/1', classname: 'jysy'
      },
      {
        label: '东西部扶贫', path: '/#/jycyt/2', classname: 'dxbfp'
      },
      {
        label: '首页', path: '/#/jycyTwo', classname: 'jycymenu'
      }];

    return (
      <div className={styles.screen}>
        <Header data={data} />

        <div className={styles.main}>
          <div className={`${styles.content} ${styles.left_1}`}>
            <div className={styles.gdp}>
              <img src={require("../../assets/images/jycy/gdp.svg")} alt="" />
              <div className={styles.num}>
                <i>0</i>
                <i>9</i>
                <i>8</i>
                <i>3</i>
                <i>9</i>
                <i>.</i>
                <i>4</i>
                <i>亿元</i>
              </div>
            </div>
            <div className={styles.gdp_avg}>
              <img src={require("../../assets/images/jycy/gdp_avg.svg")} alt="" />
              <div className={styles.num}>
                <i>0</i>
                <i>0</i>
                <i>7</i>
                <i>9</i>
                <i>6</i>
                <i>2</i>
                <i>6</i>
                <i>元</i>
              </div>
            </div>
          </div>
          <div className={`${styles.content} ${styles.left_2}`}>
            <div className={styles.title_Flag}>外来人口</div>
            <JycyBar className={styles.charts} curId='left_2' height='90%' {...left_2_data} />
          </div>
          <div className={`${styles.content} ${styles.left_3}`}>
            <div className={styles.title_Flag}>社保参保人数</div>
            <JycyLine className={styles.charts} curId='left_3' height='90%' {...left_3_data} />
          </div>

          <div className={`${styles.content} ${styles.left_bottom}`}>
            <div className={styles.title_Flag}>新增就业人数</div>
            <JycyBarF className={styles.charts} curId='left_bottom' height='80%' {...left_bottom_data} />
          </div>
          <div className={`${styles.content} ${styles.middle_1}`}>
            <div className={styles.title_Flag}>
              二次就业
                <span className={styles.tab}>
                <i onMouseOver={() => { this.tabHover(1) }} className={type === 1 ? `${styles.active}` : ''} onMouseLeave={() => { this.tabLeave() }}>三个月</i>
                <i onMouseOver={() => { this.tabHover(2) }} className={type === 2 ? `${styles.active}` : ''} onMouseLeave={() => { this.tabLeave() }}>六个月</i>
                <i onMouseOver={() => { this.tabHover(3) }} className={type === 3 ? `${styles.active}` : ''} onMouseLeave={() => { this.tabLeave() }}>一年</i>
              </span>
            </div>
            <JycyPie className={styles.charts} curId='middle_1' height='70%' {...middle_1_data} />
            <div className={styles.two}>
              <div className={styles.twoValue}>
                <span>二次就业人数（人)</span><br /><br />
                <b>{middle_1_data.seriesData.a2}</b>
              </div>
              <div className={styles.twoValue}>
                <span>中断人数（人）</span><br /><br />
                <b>{middle_1_data.seriesData.a3}</b>
              </div>
            </div>
          </div>

          <div className={`${styles.content} ${styles.middle_2}`}>
            <div className={styles.title_Flag}>求人倍率</div>
            <JycyLine className={styles.charts} curId='middle_2' height='90%' {...middle_2_data} />
          </div>
          <div className={`${styles.content} ${styles.right_1}`}>
            <div className={styles.title_Flag}>城镇登记失业率</div>
            <JycyLine className={styles.charts} curId='right_1' height='90%' {...right_1_data} />
          </div>
          <div className={`${styles.content} ${styles.right_2}`}>
            <div className={styles.title_Flag}>新增企业数</div>
            <JycyBar className={styles.charts} curId='right_2' height='90%' {...right_2_data} />
          </div>
          <div className={`${styles.content} ${styles.right_3}`}>
            <div className={styles.title_Flag}>个体工商户数</div>
            <JycyBar className={styles.charts} curId='right_3' height='90%' {...right_3_data} />
          </div>
        </div>
      </div >
    )
  }
}

Jycy.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default Jycy;
