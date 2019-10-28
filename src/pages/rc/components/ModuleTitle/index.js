import React from "react";
import { Statistic, Icon } from "antd";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./index.less";

export default class ModuleTitle extends React.Component {
  render() {
    const {
      title,
      num,
      numunit,
      percent,
      icon,
      rank,
      total,
      year,
      classname
    } = this.props;
    return (
      <div className={classnames("moduleTitle-box", classname)}>
        <div className="title">{title}</div>
        <Statistic
          className="center-number"
          value={num}
          suffix={numunit || ""}
          prefix={year || ""}
        />
        <Statistic
          className="compare-with-before"
          value={percent}
          prefix="较去年"
          suffix={
            <span>
              %
              <Icon
                type={icon}
                style={{ fontSize: 14, color: "#ff004f", marginLeft: 10 }}
              />
            </span>
          }
        />
        {rank ? (
          <Statistic
            value={rank}
            className="rank-statistic"
            prefix="全省排名"
            suffix={`/${total}`}
          />
        ) : null}
      </div>
    );
  }
}
