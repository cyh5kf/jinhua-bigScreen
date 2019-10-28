import React from "react";
import { Statistic, Icon } from "antd";
import PropTypes from "prop-types";
import "./index.less";

export default class InfoItemGrid extends React.Component {
  render() {
    const { title, number, numberunit, icon, rank, total } = this.props;
    return (
      <div className="infoitem-grid-box">
        <div className="title">{title}</div>
        <Statistic
          value={number}
          suffix={numberunit || ""}
          className="center-number"
        />
        <div className="box-bottom">
          <Statistic
            value={number}
            suffix={
              <span>
                %
                <Icon
                  type={icon}
                  style={{ fontSize: 14, color: "#ff004f", marginLeft: 5 }}
                />
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
      </div>
    );
  }
}
