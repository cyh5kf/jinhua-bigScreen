import React from "react";
import { Statistic, Icon } from "antd";
import PropTypes from "prop-types";
import "./index.less";

export default class InfoItem extends React.Component {
  static defaultProps = {
    total: "0",
    direction: "column"
  };
  static propTypes = {
    direction: PropTypes.oneOf(["column", "rows"])
  };
  render() {
    const {
      direction,
      title,
      num,
      year,
      numunit,
      percent,
      icon,
      rank,
      total
    } = this.props;
    return (
      <div className="info-item-statistic">
        <div className="info-item-line">
          <div>{title}</div>
          <Statistic
            value={num}
            prefix={year || ""}
            suffix={numunit || ""}
            className="title-number"
          />
        </div>
        <div className={direction === "column" ? " direction-colume" : ""}>
          <Statistic
            value={percent}
            prefix="较去年："
            suffix={
              <span>
                %
                <Icon type={icon} style={{ fontSize: 14, color: "#ff004f" }} />
              </span>
            }
            className="compare-with-before"
          />
          <Statistic
            className="rank"
            value={rank}
            prefix="全省排名："
            suffix={`/${total}`}
          />
        </div>
      </div>
    );
  }
}
