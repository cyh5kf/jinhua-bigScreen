import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from './index.less'
import './animate.less'
const $ = window.$;

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class Map extends PureComponent {
  state = {
    cityArr: []
  }

  upAnimate = (nextMAP_ZS) => {
    const cityArr = this.rankCity(nextMAP_ZS)
    this.setState({ cityArr })
    this.runData(cityArr)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { MAP_ZS } = this.props.jycytwo;
    const nextMAP_ZS = nextProps.jycytwo.MAP_ZS;
    if(MAP_ZS === undefined && MAP_ZS !== nextMAP_ZS) {
        $('.verticalProgressBar').empty();
        this.upAnimate(nextMAP_ZS)
    }
}

  runData = (data) => {
    data.forEach((j, index) => {
      if (j.AREA_NAME === '婺城区') {
        this.numberAnimation(j.KPI_VALUE, '.am-water1', index) //婺城区
      } else if (j.AREA_NAME === '武义县') {
        this.numberAnimation(j.KPI_VALUE, '.am-water2', index) //武义县
      } else if (j.AREA_NAME === '兰溪市') {
        this.numberAnimation(j.KPI_VALUE, '.am-water3', index) //兰溪市
      } else if (j.AREA_NAME === '金东区') {
        this.numberAnimation(j.KPI_VALUE, '.am-water4', index) //金东区
      } else if (j.AREA_NAME === '浦江县') {
        this.numberAnimation(j.KPI_VALUE, '.am-water5', index) //浦江县
      } else if (j.AREA_NAME === '永康市') {
        this.numberAnimation(j.KPI_VALUE, '.am-water6', index) //永康市
      } else if (j.AREA_NAME === '义乌市') {
        this.numberAnimation(j.KPI_VALUE, '.am-water7', index) //义乌市
      } else if (j.AREA_NAME === '东阳市') {
        this.numberAnimation(j.KPI_VALUE, '.am-water8', index) //东阳市
      } else if (j.AREA_NAME === '磐安县') {
        this.numberAnimation(j.KPI_VALUE, '.am-water9', index) //磐安县
      }
    })
  }

  numberAnimation = (num, rootDom, rank) => {
    let progressNumGap = 10;
    let progressIdx = 0;
    $(rootDom + ' verticalProgressBar').remove();
    let progressPanelDom = document.createElement('div'),
      targetDom = document.createElement('p'),
      progressDom = document.createElement('div');
    progressPanelDom.className = 'verticalProgressBar';
    targetDom.className = 'number';
    let liColor = '#18F0FF'
    let sum = 3;
    if(rank === 0) {
        liColor = '#dfa944'
        sum = 8
    } else if(rank === 1) {
        liColor = '#808ca0'
        sum = 8
    } else if(rank === 2) {
        liColor = '#af7964'
        sum = 8
    } else {
        liColor = '#18F0FF'
    }
    targetDom.style.color = liColor

    progressDom.className = 'active-progress';
    progressPanelDom.appendChild(targetDom);
    progressPanelDom.appendChild(progressDom)
    $(rootDom).append(progressPanelDom.outerHTML);

    // let sum = Math.ceil(num / progressNumGap);
    // let sum = 3;

    temp();
    function temp () {
      let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
      $(rootDom + ' .verticalProgressBar .number')
        .prop('number', progressIdx * progressNumGap)
        .animateNumber(
          {
            number: progressIdx + 1 < sum ? (progressIdx + 1) * progressNumGap : num,
            numberStep: comma_separator_number_step
          },
          300,
          function () {
            sum !== 0 && verticalProgressBar(progressIdx + 1, sum);
            progressIdx++;
            progressIdx < sum && temp();
          }
        );
    }

    function verticalProgressBar (currentNum, sum) {
      let html = '<ul>';
      let liColor = '#18F0FF'
      if (rank === 0) {
        liColor = '#dfa944'
      } else if (rank === 1) {
        liColor = '#808ca0'
      } else if (rank === 2) {
        liColor = '#af7964'
      } else {
        liColor = '#18F0FF'
      }
      for (let i = currentNum; i > 0; i--) {
        html += '<li style="background-color: ' + liColor + '" style="opacity:' + (1 / sum * (i + 1)) + '"></li>'
      }
      html += '</ul>';
      $(rootDom + ' .verticalProgressBar .active-progress').html(html);
    }
  }

  rankCity = (MAP_ZS) => {
    let jycy = []

    if (MAP_ZS) {
      for (let i of MAP_ZS) {
        if(i.KPI_NAME === '就业创业指数') {
          jycy.push(i)
        }
      }

      jycy = jycy.sort(function (a, b) {
        return b.KPI_VALUE - a.KPI_VALUE
      })
    }

    return jycy
  }

  render () {

    const cityArr = this.state.cityArr

    return (
      <div className={styles.map}>

        {/* 数字上升动画 */}
        {/* 婺城区 */}
        <div className="am-water1"></div>
        {/* 武义县 */}
        <div className="am-water2"></div>
        {/* 兰溪市 */}
        <div className="am-water3"></div>
        {/* 金东区 */}
        <div className="am-water4"></div>
        {/* 浦江县 */}
        <div className="am-water5"></div>
        {/* 永康市 */}
        <div className="am-water6"></div>
        {/* 义乌市 */}
        <div className="am-water7"></div>
        {/* 东阳市 */}
        <div className="am-water8"></div>
        {/* 磐安县 */}
        <div className="am-water9"></div>

        {/* 区域名称 */}
        {
          (cityArr && cityArr.length > 0) && (
            cityArr.map((item, index) => {
              let imgUrl = 'pingc'
              let areaClass = 'area1'
              let liColor = '18F0FF'
              if (index === 0) {
                imgUrl = 'jin'
              } else if (index === 1) {
                imgUrl = 'yin'
              } else if (index === 2) {
                imgUrl = 'tong'
              }

              if (item.AREA_NAME === '婺城区') {
                areaClass = 'area1'
              } else if (item.AREA_NAME === '武义县') {
                areaClass = 'area2'
              } else if (item.AREA_NAME === '兰溪市') {
                areaClass = 'area3'
              } else if (item.AREA_NAME === '金东区') {
                areaClass = 'area4'
              } else if (item.AREA_NAME === '浦江县') {
                areaClass = 'area5'
              } else if (item.AREA_NAME === '永康市') {
                areaClass = 'area6'
              } else if (item.AREA_NAME === '义乌市') {
                areaClass = 'area7'
              } else if (item.AREA_NAME === '东阳市') {
                areaClass = 'area8'
              } else if (item.AREA_NAME === '磐安县') {
                areaClass = 'area9'
              }

              if (index === 0) {
                liColor = '#dfa944'
              } else if (index === 1) {
                liColor = '#808ca0'
              } else if (index === 2) {
                liColor = '#af7964'
              } else {
                liColor = '#18F0FF'
              }
              return (
                <div className={`area ${areaClass}`} key={index}>
                  <p style={{ color: liColor }}>{item.AREA_NAME}</p>
                  <img src={require('../../../../assets/images/screen/' + imgUrl + '.svg')} alt="" ></img>
                </div>
              )
            })
          )
        }

      </div>
    )
  }
}

Map.propTypes = {
  loading: PropTypes.object,
}

export default Map;

