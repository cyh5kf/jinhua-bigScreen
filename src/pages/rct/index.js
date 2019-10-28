import React, { PureComponent } from "react";
import HeaderMenu from "components/HeaderMenu";
import styles from "./index.less";
import HeaderBtnGroup from "../../components/HeaderBtnGroup";

class Rct extends PureComponent {
  render() {
    const data = [
      {
        label: '人才供需',
        path: '/#/qrblThree',
        classname: 'qrblthree'
      },
      {
      label: "人才分析",
      path: "/#/rct/1",
      classname: 'rcfx'
    },
    {
      label: "人才地图",
      path: "/#/rct/2",
      classname: 'rcdt'
    }, {
      label: "首页",
      path: "/#/rc",
      classname: 'rcmenu'
    }
    ];
    const name = this.props.match.params.name;
    let src = "";
    if (name === "1") {
      src = "http://10.83.132.33:9050/main7.html";
    } else if (name === "2") {
      src = "http://10.83.139.151:10089/#/screen-share/share/5d539e8523b27e0a915a7b4a?businessKey=089e81e9-a381-4fde-9182-192626dab7e1&businessSecret=3e937a7e8adb9b4636c6822291979401";
    }

    return (
      <div className={styles.container}>
        <HeaderBtnGroup data={data} />
        <iframe width="100%" height="100%" src={src} />
      </div>
    );
  }
}

export default Rct;