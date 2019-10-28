import React, { PureComponent } from "react";
import moment from "moment";
import HeaderMenu from "components/HeaderMenu";
import HeaderBtnGroup from "../HeaderBtnGroup";
import styles from "./index.less";

class Header extends PureComponent {

  hanldeClick(url) {
    const { history } = this.props;
    // console.log(url)
    window.location.href = url;
    // history.push(url);
  }

  //控制视频播放暂停
  playVideo = () => {
    const oMedia=document.getElementById("background_video");
    if(oMedia.paused) {
      oMedia.play()
    } else {
      oMedia.pause()
    }
  }

  render() {
    const date = moment().format("YYYY/MM/DD");
    const day = moment().day();
    const daysArr = [
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
      "星期七"
    ];
    const { title, data, headerType } = this.props;

    return (
      <div className={styles.header_content} >
        <span className={styles.title} onClick={this.hanldeClick.bind(this, '/')}>
          金华人社指数分析决策平台
          {title && (
            <span>
              ·<b style={{ color: "#18F0FF" }}>{title}</b>
            </span>
          )}
        </span>
        <HeaderBtnGroup data={data} />
        {
          headerType === 'home' && (
            <>
              <span onClick={() => this.playVideo()} className={styles.time}>{`${date} ${daysArr[day - 1]}`}</span>
              {/* <HeaderMenu linkType="home" /> */}
            </>
          )
        }
      </div>
    );
  }
}

export default Header;
