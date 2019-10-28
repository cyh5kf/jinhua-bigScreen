import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import { withRouter } from "dva/router";
import "./index.less";
import { Icon } from 'antd';

class HeaderBtnGroup extends React.Component {
  static defaultProps = {
    data: []
  };
  static propTypes = {
    data: PropTypes.array
  };
  hanldeClick(url) {
    const { history } = this.props;
    // console.log(url)
    if (url) {
      window.location.href = url;
    }
    // history.push(url);
  }
  render() {
    let { data } = this.props;
    // if (data.length) {
    //   data.push({
    //     label: "首页",
    //     path: "/"
    //   });
    // }
    return (
      <div className="header-btn-group-box">
        {data.map((it, idx) => {
          return (
            <Button
              key={idx}
              className={it.classname}
              onClick={this.hanldeClick.bind(this, it.path)}
            >
              {it.label === '首页' ? <Icon type="home" /> : it.label}
            </Button>
          );
        })}
      </div>
    );
  }
}

export default withRouter(HeaderBtnGroup);
