import React from "react";
import { Statistic, Icon } from "antd";
import PropTypes from "prop-types";
import "./index.less";

export default class GridItem extends React.Component {
  static defaultProps = {
    total: "0"
  };
  render() {
    const { category, num, percent, icon, total, rank } = this.props;
    return (
      <div className="grid-item-box">
        <span className="category">{category}</span>
        <Statistic className="center-number" value={num} suffix="个" />
        <Statistic
          value={percent}
          suffix={
            <span>
              %
              <Icon type={icon} style={{ fontSize: 14, color: "#ff004f" }} />
            </span>
          }
          prefix="较去年："
          className="compare-with-before"
        />
        <Statistic
          value={rank}
          suffix={`/${total}`}
          prefix="全省："
          className="rank-statistic"
        />
      </div>
    );
  }
}
