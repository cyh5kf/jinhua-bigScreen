import React, { PureComponent } from 'react'
import { connect } from 'dva';
import PropTypes from 'prop-types'
import styles from './index.less'
import { fontSizeInit, getHtmlFontSize } from 'utils'
import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'
import Center from './components/Center/Center'
import Map from './components/Map'
import Header from 'components/Header'

const Bideo = window.Bideo
const $ = window.$;

@connect(({ screen, app, loading }) => ({ screen, app, loading }))
class Screen extends PureComponent {

  componentDidMount () {
    this.initBideo()
    this.showMap()
    window.addEventListener('resize', function () {
      fontSizeInit();
      getHtmlFontSize()
    });

    // var video = document.getElementById('background_video');
    // video.addEventListener('ended', function () {
    //   video.currentTime = 10
    // })

    // 键盘控制视频播放暂停
    // document.addEventListener('keydown', function (event) {
    //   var vid = document.getElementById("background_video");
    //   if (event.keyCode === 32) { // 监听空格键，控制播放暂停
    //     const paused = vid.paused;
    //     console.log('paused: ', paused);
    //     if (!paused) {
    //       vid.pause();
    //     } else {
    //       vid.play();
    //     }
    //   }
    // });
    
    // this.showAutoPlay()
  }

  // 控制视频是否自动播放
  showAutoPlay = () => {
    const oMedia=document.getElementById("background_video");
    const { dispatch } = this.props
    oMedia.addEventListener("ended",function(){
      dispatch({
        type: 'app/updateState',
        payload: {
          videoAutoplay: false
        }
      })
    })
  }

  // 点击按钮以外区域隐藏地图
  showMap = () => {
    const { dispatch } = this.props
    $('body').click(function (e) {
      var target = $(e.target);
      // 如果#overlay或者#btn下面还有子元素，可使用
      // !target.is('#btn *') && !target.is('#overlay *')
      if (!target.is('#centerContent')) {
        dispatch({
          type: 'screen/updateState',
          payload: {
            zbSelect: ''
          }
        })
      }
    });
  }

  // 初始化视频
  initBideo () {
    var bv = new Bideo();
    bv.init({
      // Video element
      videoEl: document.querySelector('#background_video'),

      // Container element
      container: document.querySelector('body'),

      // Resize
      resize: true,

      autoplay: false,

      playButton: document.querySelector('#play'),
      pauseButton: document.querySelector('#pause'),

      // Array of objects containing the src and type
      // of different video formats to add
      src: [
        {
          // src: 'http://vjs.zencdn.net/v/oceans.mp4',
          // src: '/video/oceans.mp4',
          src: '/video/1024_10.mp4',
          type: 'video/mp4'
        }
      ],

      // What to do once video loads (initial frame)
      onLoad: function () {
        // document.querySelector('#video_cover').style.display = 'none';
      }
    });
  }

  render () {
    fontSizeInit();
    getHtmlFontSize();
    const { screen, app } = this.props;
    const { zbSelect } = screen;
    // const { videoAutoplay } = app

    return (
      <div className={styles.container}>
          {/* muted */}
          {/* {
            videoAutoplay? (
              <video id="background_video" autoPlay></video>
            ): (
              <video id="background_video"></video>
            )
          } */}

          <video id="background_video"></video>
          
          {/* <div id="video_cover"></div> */}
          <div id="overlay" style={{opacity: zbSelect === ''? 0.3: 0.8}}></div>
          {/* <div id="overlay"></div> */}

        {/* <div id="video_controls">
            <span id="play">
              <img alt="play" src={require('../../assets/images/play.png')}></img>
            </span>
            <span id="pause">
              <img alt="pause" src={require('../../assets/images/pause.png')}></img>
            </span>
          </div> */}

        <div className={styles.header_bg}></div>

        <div className={styles.main_content}>
          <Header headerType="home" />
          <div className={styles.left_father}><LeftSide /></div>
          <div className={styles.center_father}><Center /></div>
          <div className={styles.map} style={{ opacity: zbSelect === '' ? 0 : 1, transition: zbSelect === '' ? 'opacity, 1s' : 'opacity, 0.8s linear 0.8s' }}><Map /></div>
          {/* <div className={styles.map}><Map /></div> */}
          <div className={styles.right_father}><RightSide /></div>
        </div>
      </div>
    )
  }
}

Screen.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default Screen;

