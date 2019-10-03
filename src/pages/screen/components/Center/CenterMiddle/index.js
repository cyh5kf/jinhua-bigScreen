import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import styles from './index.less'
import './animate.less'
const $ = window.$;

@connect(({ screen, loading }) => ({ screen, loading }))
class CenterMiddle extends PureComponent {

    componentDidMount() {
        this.upAnimate()
    }

    upAnimate = () => {
        const { MAP_ZS, wheelStatus } = this.props.screen
        let jycy = []
        let rczs = []
        let ldgx = []
        let shbz = []
        let ggfw = []
        let wlxxaq = []
        if(MAP_ZS) {
            for(let i of MAP_ZS) {
                switch (i.KPI_NAME) {
                    case "就业创业指数":
                        jycy.push(i)
                        break;
                    case "人才指数":
                        rczs.push(i)
                        break;
                    case "劳动关系指数":
                        ldgx.push(i)
                        break;
    
                    case "社会保障指数":
                        shbz.push(i)
                        break;
                    case "公共服务指数":
                        ggfw.push(i)
                        break;
    
                    case "网络信息安全指数":
                        wlxxaq.push(i)
                        break;

                    default:
                        break;
                }
            }

            if(wheelStatus === 0) {
                this.runData(jycy)
            } else if(wheelStatus === 1) {
                this.runData(rczs)
            } else if(wheelStatus === 2) {
                this.runData(ldgx)
            } else if(wheelStatus === 3) {
                this.runData(shbz)
            } else if(wheelStatus === 4) {
                this.runData(ggfw)
            } else if(wheelStatus === 5) {
                this.runData(wlxxaq)
            }
        }

    }

    runData = (data) => {
        for(let j of data) {
            if(j.AREA_NAME === '婺城区') {
                this.numberAnimation(j.KPI_VALUE, '.am-water1') //婺城区
            } else if(j.AREA_NAME === '武义县') {
                this.numberAnimation(j.KPI_VALUE, '.am-water2') //武义县
            } else if(j.AREA_NAME === '兰溪市') {
                this.numberAnimation(j.KPI_VALUE, '.am-water3') //兰溪市
            } else if(j.AREA_NAME === '金东区') {
                this.numberAnimation(j.KPI_VALUE, '.am-water4') //金东区
            } else if(j.AREA_NAME === '浦江县') {
                this.numberAnimation(j.KPI_VALUE, '.am-water5') //浦江县
            } else if(j.AREA_NAME === '永康市') {
                this.numberAnimation(j.KPI_VALUE, '.am-water6') //永康市
            } else if(j.AREA_NAME === '义乌市') {
                this.numberAnimation(j.KPI_VALUE, '.am-water7') //义乌市
            } else if(j.AREA_NAME === '东阳市') {
                this.numberAnimation(j.KPI_VALUE, '.am-water8') //东阳市
            } else if(j.AREA_NAME === '磐安县') {
                this.numberAnimation(j.KPI_VALUE, '.am-water9') //磐安县
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { wheelStatus } = this.props.screen;
        const nextWheelStatus = nextProps.screen.wheelStatus;
        if(wheelStatus !== nextWheelStatus) {
            $('.verticalProgressBar').empty();
            this.upAnimate()
        }
    }

    numberAnimation = (num, rootDom) => {
        let progressNumGap = 0;
        let progressIdx = 0;
        $(rootDom + ' verticalProgressBar').remove();
        let progressPanelDom = document.createElement('div'),
            targetDom = document.createElement('p'),
        progressDom = document.createElement('div');
        progressPanelDom.className = 'verticalProgressBar';
        targetDom.className = 'number';
        progressDom.className = 'active-progress';
        progressPanelDom.appendChild(targetDom);
        progressPanelDom.appendChild(progressDom)
        $(rootDom).append(progressPanelDom.outerHTML);

        // let sum = Math.ceil(num / progressNumGap);
        let sum = 3;

        temp();
        function temp () {
            let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $(rootDom + ' .verticalProgressBar .number')
            .prop('number', progressIdx * progressNumGap)
            .animateNumber(
                {
                    number: progressIdx + 1 < sum ? (progressIdx + 1) * progressNumGap : num,
                    numberStep: comma_separator_number_step
                },
                300,
                function () {
                    sum !== 0 && verticalProgressBar(progressIdx + 1, sum);
                    progressIdx++;
                    progressIdx < sum && temp();
                }
            );
        }

        function verticalProgressBar (currentNum, sum) {
            let html = '<ul>';
            for (let i = currentNum; i > 0; i--) {
                html += '<li style="opacity:' + (1 / sum * (i + 1)) + '"></li>'
            }
            html += '</ul>';
            $(rootDom + ' .verticalProgressBar .active-progress').html(html);
        }
    }
    
    render() {
        
        const { MAP_RCLD } = this.props.screen;
        // const zbArr = ['就业创业指数', '人才指数', '劳动关系指数', '网络信息安全指数', '公共服务指数', '社会保障指数']
        let wc_ld = ''
        let wy_ld = ''
        let lx_ld = ''
        let jd_ld = ''
        let pj_ld = ''
        let yk_ld = ''
        let yw_ld = ''
        let dy_ld = ''
        let pa_ld = ''
        if(MAP_RCLD) {
            for(let i of MAP_RCLD) {
                if(i.AREA_NAME === '婺城区') {
                    wc_ld = i.流向
                } else if(i.AREA_NAME === '武义县') {
                    wy_ld = i.流向
                } else if(i.AREA_NAME === '兰溪市') {
                    lx_ld = i.流向
                } else if(i.AREA_NAME === '金东区') {
                    jd_ld = i.流向
                } else if(i.AREA_NAME === '浦江县') {
                    pj_ld = i.流向
                } else if(i.AREA_NAME === '永康市') {
                    yk_ld = i.流向
                } else if(i.AREA_NAME === '义乌市') {
                    yw_ld = i.流向
                } else if(i.AREA_NAME === '东阳市') {
                    dy_ld = i.流向
                } else if(i.AREA_NAME === '磐安县') {
                    pa_ld = i.流向
                }
            }
        }
        return (
            <div className={styles.centerMiddle}>
                {/* <div className={styles.title}>
                    <p>
                        <span className={styles.icon_block}></span>
                        <span className={styles.name}>{zbArr[wheelStatus]}</span>
                    </p>
                    {
                        wheelStatus === 1 && (
                            <p>
                                <span className={styles.icon_block} style={{backgroundColor: '#3881FF'}}></span>
                                <span className={styles.name}>人才贡献率</span>
                            </p>
                        )
                    }
                </div> */}

                {/* 线条流动动画 */}

                {
                    MAP_RCLD && (
                        <>
                        <svg version="1.1" className="water water1">
                        {/* 武义县 */}
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                    <stop offset="50%" style={{stopColor: '#18F0FF', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                            {
                            wy_ld === '流出'? (
                                <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M0 0 Q 100 40 250 15" className="path"></path>
                            ): (
                                <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M250 15 Q 100 40 0 0" className="path"></path>
                            )
                            }
                        </svg>

                        {/* 婺城区 */}
                        <svg version="1.1" className="water water2">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                    <stop offset="50%" style={{stopColor: '#18F0FF', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                            {
                                wc_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M0 0 Q 100 80 250 93" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M250 93 Q 100 80 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 金东区 */}
                        <svg version="1.1" className="water water3">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                    <stop offset="50%" style={{stopColor: '#18F0FF', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                            {
                                jd_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M0 0 Q 52 62 104 75" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M104 75 Q 52 62 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 兰溪市 */}
                        <svg version="1.1" className="water water4">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                    <stop offset="50%" style={{stopColor: '#18F0FF', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                            {
                                lx_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M0 0 Q 140 10 258 78" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M258 78 Q 140 10 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 永康市 */}
                        <svg version="1.1" className="water water5">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                    <stop offset="50%" style={{stopColor: '#18F0FF', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                            {
                                yk_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M0 0 Q 33 15 65 48" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M65 48 Q 33 15 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 浦江县 */}
                        <svg version="1.1" className="water water6">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                    <stop offset="50%" style={{stopColor: '#18F0FF', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                            {
                                pj_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M0 0 Q 160 45 183 130" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M183 130 Q 160 45 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 义乌市 */}
                        <svg version="1.1" className="water water7">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                    <stop offset="50%" style={{stopColor: '#18F0FF', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                            {
                                yw_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M0 0 Q 56 102 112 150" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M112 150 Q 56 102 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 东阳市 */}
                        <svg version="1.1" className="water water8">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                    <stop offset="50%" style={{stopColor: '#18F0FF', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                            {
                                dy_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M0 0 Q 20 10 38 118" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M38 118 Q 20 10 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 磐安县 */}
                        <svg version="1.1" className="water water9">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                    <stop offset="50%" style={{stopColor: '#18F0FF', stopOpacity: 1}} />
                                    <stop offset="100%" style={{stopColor: '#18F0FF', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                            {
                                pa_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M35 0 Q 10 50 0 106" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad1)" strokeWidth="2" d="M0 106 Q 10 50 35 0" className="path"></path>
                                )
                            }
                        </svg>
                        </>
                    )
                }



                {/* 数据点上升动画 */}
                <div className="dataPoint point1"></div>
                <div className="dataPoint point2"></div>
                <div className="dataPoint point3"></div>
                <div className="dataPoint point4"></div>
                <div className="dataPoint point5"></div>
                <div className="dataPoint point6"></div>
                <div className="dataPoint point7"></div>
                <div className="dataPoint point8"></div>
                <div className="dataPoint point9"></div>
                <div className="dataPoint point10"></div>
                <div className="dataPoint point11"></div>
                <div className="dataPoint point12"></div>
                <div className="dataPoint point13"></div>
                <div className="dataPoint point14"></div>
                <div className="dataPoint point15"></div>
                <div className="dataPoint point16"></div>
                <div className="dataPoint point17"></div>
                <div className="dataPoint point18"></div>

                {/* 数字上升动画 */}
                {/* 婺城区 */}
                <div className="am-water1"></div>
                {/* 武义县 */}
                <div className="am-water2"></div>
                {/* 兰溪市 */}
                <div className="am-water3"></div>
                {/* 金东区 */}
                <div className="am-water4"></div>
                {/* 浦江县 */}
                <div className="am-water5"></div>
                {/* 永康市 */}
                <div className="am-water6"></div>
                {/* 义乌市 */}
                <div className="am-water7"></div>
                {/* 东阳市 */}
                <div className="am-water8"></div>
                {/* 磐安县 */}
                <div className="am-water9"></div>

            </div>
        )
    }
}

CenterMiddle.propTypes = {
    loading: PropTypes.object,
}

export default CenterMiddle;

