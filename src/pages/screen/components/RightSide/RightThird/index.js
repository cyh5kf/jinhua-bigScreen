import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { withRouter } from "dva/router";
import styles from "../RightSide.less";
import IndexStyle from "../../../index.less";
import BarWangLuo from "../../echarts/BarWangLuo";
import GaugeWangLuo from "../../echarts/GaugeWangLuo/GaugeWangLuo";

@connect(({ screen, loading }) => ({ screen, loading }))
class RightThird extends PureComponent {
  onChangeBlock = (ind, flag) => {
    const { dispatch } = this.props;
    dispatch({
      type: "screen/updateState",
      payload: {
        blockSelect: ind
        // zbSelect: flag? '': 0
      }
    });
  };

  onLinkTo = url => {
    const { history } = this.props;
    history.push(url);
  };

  // 修改中间地图显示状态
  onChangeZb = (count) => {
      const { dispatch } = this.props

      dispatch({
          type: 'screen/updateState',
          payload: {
              zbSelect: count
          }
      })
  }

  render() {
    const { screen } = this.props;
    const { WLXX, WLXX_YZCD } = screen;

    const wlxx = WLXX && WLXX.length > 0 ? WLXX[0] : {};

    let yzcd,
      ygao = [],
      yzhong = [],
      ydi = [],
      xdata = [],
      dj = [];
    if (WLXX_YZCD) {
      xdata = WLXX_YZCD.map(data => data.SAFE_CLASS);
      const dengji = WLXX_YZCD.map(data => data.SAFE_LEVEL);
      dj = new Set(dengji);
      WLXX_YZCD.map(data => {
        if (data.SAFE_LEVEL === "高") {
          ygao.push(data.PROBLEM_NUM);
        } else if (data.SAFE_LEVEL === "中") {
          yzhong.push(data.PROBLEM_NUM);
        } else if (data.SAFE_LEVEL === "低") {
          ydi.push(data.PROBLEM_NUM);
        }
      });
      yzcd = {
        // title: RCZS_GCT[0].KPI_NAME,
        xdata: Array.from(new Set(xdata)) || [],
        ygao: ygao || [],
        yzhong: yzhong || [],
        ydi: ydi || [],
        dj: Array.from(dj) || []
      };
    }

    return (
      <div className={styles.rightContent}>
        <div className={IndexStyle.text_title} onClick={() => this.onChangeZb(5)}>
          <span>网络信息安全指数</span>
          <span className={IndexStyle.num}>{ wlxx.KPI_VALUE? Math.round(wlxx.KPI_VALUE): 0}</span>
        </div>
        <div className={`${styles.flex_item} ${IndexStyle.block_item}`} onClick={() => this.onLinkTo("/wlxxaq")}>
          <div style={{ width: "40%" }}>
            <GaugeWangLuo wlxx={wlxx} />
          </div>
          <div style={{ width: "60%", padding: "0 0 0 0.1rem" }}>
            <BarWangLuo yzcd={yzcd} />
          </div>
        </div>
      </div>
    );
  }
}

RightThird.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object
};

export default withRouter(RightThird);
