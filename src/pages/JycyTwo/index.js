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

@connect(({ jycytwo, loading }) => ({ jycytwo, loading }))
class JycyTwo extends PureComponent {

  componentDidMount () {
    this.initBideo()
    window.addEventListener('resize', function () {
      fontSizeInit();
      getHtmlFontSize()
    });

    // var video = document.getElementById('tree_video');
    // video.addEventListener('ended', function () {
    //   video.currentTime = 10
    //   video.play()
    // })
  }

    // 初始化视频
    initBideo () {
      var bv = new Bideo();
      bv.init({
        // Video element
        videoEl: document.querySelector('#tree_video'),
  
        // Container element
        container: document.querySelector('body'),
  
        // Resize
        resize: true,
  
        autoplay: true,
  
        playButton: document.querySelector('#play'),
        pauseButton: document.querySelector('#pause'),
  
        // Array of objects containing the src and type
        // of different video formats to add
        src: [
          {
            // src: 'http://vjs.zencdn.net/v/oceans.mp4',
            // src: '/video/oceans.mp4',
            src: '/video/tree_animate.mp4',
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
    const data = [
      {
        label: '就业失业', path: '/#/jycyt/1', classname: 'jysy'
      },
      {
        label: '东西部扶贫', path: '/#/jycyt/2', classname: 'dxbfp'
      },
      {
        label: '首页', path: '/#/jycyTwo', classname: 'jycymenu'
      }];
    
    const { jycy } = this.props.jycytwo;
    const jycy_zs = jycy && jycy.length > 0 ? jycy[0] : {};

    return (
      <div className={styles.container}>

        <video id="tree_video" muted></video>

        <div className={styles.main_content}>
          <Header data={data} />
          <div className="center-big-title">
            {jycy_zs.KPI_VALUE? Math.round(jycy_zs.KPI_VALUE): 0}<span>就业创业景气指数</span>
          </div>
          <div className={styles.left_father}><LeftSide /></div>
          <div className={styles.center_father}><Center /></div>
          <div className={styles.map}><Map /></div>
          <div className={styles.right_father}><RightSide /></div>
        </div>
      </div>
    )
  }
}

JycyTwo.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default JycyTwo;
