import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from '../../index.less'
import QrblBarLine from '../echarts/QrblBarLine'
import Jinhua2d from '../echarts/Map/jinhua2d'
import { connect } from 'dva';

@connect(({ qrblthree, loading }) => ({ qrblthree, loading }))
class Center extends PureComponent {

  render () {
    const { qrblthree } = this.props
    const { QRBL_GDQQRBL, QRBL_ZPQZ, QRBL_JBNGQQK } = qrblthree

    // 中间顶部数据
    let danwei = 0
    let zhiwei = 0
    let qiuzhirs = 0
    if(QRBL_ZPQZ && QRBL_ZPQZ.length > 0) {
      for(let i of QRBL_ZPQZ) {
        if(i.KPI_NAME === '招聘单位数') {
          danwei = i.KPI_VALUE
        } else if(i.KPI_NAME === '招聘职位数') {
          zhiwei = i.KPI_VALUE
        } else if(i.KPI_NAME === '求职人数') {
          qiuzhirs = i.KPI_VALUE
        }
      }
    }

    // 中间地图数据
    let jhldgx = [];
    if (QRBL_GDQQRBL && QRBL_GDQQRBL.length > 0) {
      const names = QRBL_GDQQRBL.map((data) => data.AREA_NAME);
      let name = Array.from(new Set(names));
      name.map(da => {
        let obj = {
          name: da,
          data: [],
          value: '',
          val: []
        };
        jhldgx.push(obj);
      });
      QRBL_GDQQRBL.map(item => {
        let ind = name.indexOf(item.AREA_NAME);
        if (ind > -1) {
          let obj = {
            name: item.KPI_CLASS,
            value: +item.KPI_VALUE
          };
          jhldgx[ind].data.push(obj);

          if (item.KPI_CLASS === '求人倍率') {
            jhldgx[ind].value = +item.NUM
          }
        }
      });
      jhldgx.map(item => {
        if (item.name === '婺城区') {
          item.val = [119.57150, 29.05024, item.value]; //婺城区
        } else if (item.name === '武义县') {
          item.val = [119.71651, 28.89260, item.value]; //武义县
        } else if (item.name === '兰溪市') {
          item.val = [119.46051, 29.30838, item.value]; //兰溪市
        } else if (item.name === '金东区') {
          item.val = [119.79311, 29.19914, item.value]; //金东区
        } else if (item.name === '浦江县') {
          item.val = [119.89906, 29.55251, item.value]; //浦江县
        } else if (item.name === '永康市') {
          item.val = [120.08731, 28.98851, item.value]; //永康市
        } else if (item.name === '义乌市') {
          item.val = [120.07468, 29.40558, item.value]; //义乌市
        } else if (item.name === '东阳市') {
          item.val = [120.34191, 29.28946, item.value]; //东阳市
        } else if (item.name === '磐安县') {
          item.val = [120.55022, 29.05403, item.value]; //磐安县
        }
      })
    }

    // 中间底部图标数据
    let zprs = []
    let qzrs = []
    let qrbl = []
    let xData = []
    if(QRBL_JBNGQQK && QRBL_JBNGQQK.length>0) {
      for(let i of QRBL_JBNGQQK) {
        if(i.KPI_NAME === '招聘人数') {
          zprs.push(i.NUM)
          xData.push(i.MONTH_ID + '月')
        } else if(i.KPI_NAME === '求职人数') {
          qzrs.push(i.NUM)
        } else if(i.KPI_NAME === '求人倍率') {
          qrbl.push(i.NUM)
        }
      }
    }
    
    let center_3_data = {
      xAxis: xData,
      title1: '招聘人数',
      title2: '求职人数',
      title3: '求人倍率',
      legend: ['招聘人数', '求职人数', '求人倍率'],
      seriesData1: zprs,
      seriesData2: qzrs,
      seriesData3: qrbl,
      yNamne: "人",
      yNamneRight: '百分率',
      LinearGradient: ['#CDEAFF', '#2765FF']
    }

    let ldgxOption = {
      textSize: 16,
      textLineheight: 20,
      numSize: 32,
      numLineheight: 36,
    };

    return (
      <div>
        <div className={`${styles.flex_item} ${styles.top_f}`}>
          <div className={styles.flex_item_1}>
            <div>
              <p>招聘单位数</p>
              <p style={{marginBottom: 0}}><b>{danwei}</b>家</p>
            </div>
          </div>
          <div className={styles.flex_item_2}>
            <div>
              <p>招聘职位数</p>
              <p style={{ marginBottom: 0 }}><b>{zhiwei}</b>个</p>
            </div>
          </div>
          <div className={styles.flex_item_3}>
            <div>
              <p>求职人数</p>
              <p style={{ marginBottom: 0 }}><b>{qiuzhirs}</b>人</p>
            </div>
          </div>
        </div>
        <div className={styles.map_fa} >
          <Jinhua2d jhldgx={jhldgx} ldgxOption={ldgxOption} />
        </div>
        <div className={styles.center_bottom}>
          <div className={styles.title_Flag}>近半年供求情况</div>
          <QrblBarLine className={styles.charts} curId='center_1' width='100%' height='1.73rem' {...center_3_data} />
        </div>
      </div>
    )
  }
}

Center.propTypes = {
  loading: PropTypes.object,
}

export default Center;
