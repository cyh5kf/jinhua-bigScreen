import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import { cloneDeep } from 'lodash'
import styles from './index.less'
import './animate.less'
const $ = window.$;

@connect(({ screen, loading }) => ({ screen, loading }))
class Map extends PureComponent {

    state = {
        cityArr: [],
    }

    upAnimate = (zbSelect) => {
        let cityArr = []
        if(zbSelect === 6) { // 综合指数
            const { ZHZS_GDQ } = this.props.screen
            const ZHZS_GDQ_clone = cloneDeep(ZHZS_GDQ)
            cityArr = ZHZS_GDQ_clone.sort(function(a, b){ // 排序
                return b.KPI_VALUE - a.KPI_VALUE
            })
            for(let i of cityArr) { // 除以6
                i.KPI_VALUE = Math.round(i.KPI_VALUE / 6)
            }
        } else { // 其他指数
            cityArr = this.rankCity(zbSelect)
        }
        this.setState({cityArr})
        this.runData(cityArr)
    }

    runData = (data) => {
        data.forEach((j, index) => {
            if(j.AREA_NAME === '婺城区') {
                this.numberAnimation(j.KPI_VALUE, '.am-water1', index) //婺城区
            } else if(j.AREA_NAME === '武义县') {
                this.numberAnimation(j.KPI_VALUE, '.am-water2', index) //武义县
            } else if(j.AREA_NAME === '兰溪市') {
                this.numberAnimation(j.KPI_VALUE, '.am-water3', index) //兰溪市
            } else if(j.AREA_NAME === '金东区') {
                this.numberAnimation(j.KPI_VALUE, '.am-water4', index) //金东区
            } else if(j.AREA_NAME === '浦江县') {
                this.numberAnimation(j.KPI_VALUE, '.am-water5', index) //浦江县
            } else if(j.AREA_NAME === '永康市') {
                this.numberAnimation(j.KPI_VALUE, '.am-water6', index) //永康市
            } else if(j.AREA_NAME === '义乌市') {
                this.numberAnimation(j.KPI_VALUE, '.am-water7', index) //义乌市
            } else if(j.AREA_NAME === '东阳市') {
                this.numberAnimation(j.KPI_VALUE, '.am-water8', index) //东阳市
            } else if(j.AREA_NAME === '磐安县') {
                this.numberAnimation(j.KPI_VALUE, '.am-water9', index) //磐安县
            }
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { zbSelect } = this.props.screen;
        const nextZbSelect = nextProps.screen.zbSelect;
        if(zbSelect !== nextZbSelect) {
            $('.verticalProgressBar').empty();
            this.upAnimate(nextZbSelect)
        }
    }

    numberAnimation = (num, rootDom, rank) => {
        let progressNumGap = 10;
        let progressIdx = 0;
        $(rootDom + ' verticalProgressBar').remove();
        let progressPanelDom = document.createElement('div'),
            targetDom = document.createElement('p'),
        progressDom = document.createElement('div');
        progressPanelDom.className = 'verticalProgressBar';
        targetDom.className = 'number';
        let liColor = '#18F0FF'
        let sum = 3;
        if(rank === 0) {
            liColor = '#dfa944'
            sum = 8
        } else if(rank === 1) {
            liColor = '#808ca0'
            sum = 8
        } else if(rank === 2) {
            liColor = '#af7964'
            sum = 8
        } else {
            liColor = '#18F0FF'
        }
        targetDom.style.color = liColor

        progressDom.className = 'active-progress';
        progressPanelDom.appendChild(targetDom);
        progressPanelDom.appendChild(progressDom)
        $(rootDom).append(progressPanelDom.outerHTML);

        // let sum = Math.ceil(num / progressNumGap);
        // let sum = 3;

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
            let liColor = '#18F0FF'
            if(rank === 0) {
                liColor = '#dfa944'
            } else if(rank === 1) {
                liColor = '#808ca0'
            } else if(rank === 2) {
                liColor = '#af7964'
            } else {
                liColor = '#18F0FF'
            }
            for (let i = currentNum; i > 0; i--) {
                html += '<li style="background-color: ' + liColor +'" style="opacity:' + (1 / sum * (i + 1)) + '"></li>'
            }
            html += '</ul>';
            $(rootDom + ' .verticalProgressBar .active-progress').html(html);
        }
    }

    rankCity = (zbSelect) => {
        const { MAP_ZS } = this.props.screen;
        let jycy = []
        let rczs = []
        let ldgx = []
        let shbz = []
        let ggfw = []
        let wlxxaq = []
        let cityArr = []
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

            jycy = jycy.sort(function(a, b){
                return b.KPI_VALUE - a.KPI_VALUE
            })
            rczs = rczs.sort(function(a, b){
                return b.KPI_VALUE - a.KPI_VALUE
            })
            ldgx = ldgx.sort(function(a, b){
                return b.KPI_VALUE - a.KPI_VALUE
            })
            shbz = shbz.sort(function(a, b){
                return b.KPI_VALUE - a.KPI_VALUE
            })
            ggfw = ggfw.sort(function(a, b){
                return b.KPI_VALUE - a.KPI_VALUE
            })
            wlxxaq = wlxxaq.sort(function(a, b){
                return b.KPI_VALUE - a.KPI_VALUE
            })

            if(zbSelect === 1) {
                cityArr = jycy
            } else if(zbSelect === 2) {
                cityArr = rczs
            } else if(zbSelect === 3) {
                cityArr = ldgx
            } else if(zbSelect === 4) {
                cityArr = shbz
            } else if(zbSelect === 0) {
                cityArr = ggfw
            } else if(zbSelect === 5) {
                cityArr = wlxxaq
            }
        }

        return cityArr
    }

    render() {
        const { MAP_RCLD, zbSelect } = this.props.screen;
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

        const cityArr = this.state.cityArr

        return (
            <div className={styles.map}>
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

                {/* 图例 */}
                {
                    zbSelect === 0 && (
                        <div className={styles.sider} >
                            <img className={styles.icon_title} style={{width: '0.23rem'}} src={require("../../../../assets/images/screen/ggfwzs.svg")} alt="" ></img>
                            <div className={styles.hr_line}></div>
                            <div className={styles.text}>
                                <p className={styles.name}>公共服务质量指数</p>
                                <p className={styles.en_name}>PUBLIC SERVICE INDEX</p>
                            </div>
                        </div>
                    )
                }

                {
                    zbSelect === 1 && (
                        <div className={styles.sider} >
                            <img className={styles.icon_title} style={{width: '0.23rem'}} src={require("../../../../assets/images/screen/jiuyexinxi.svg")} alt="" ></img>
                            <div className={styles.hr_line}></div>
                            <div className={styles.text}>
                                <p className={styles.name}>就业创业景气指数</p>
                                <p className={styles.en_name}>EMPLOYMENT  INDEX</p>
                            </div>
                        </div>
                    )
                }

                {
                    zbSelect === 2 && (
                        <div className={styles.sider} >
                            <img className={styles.icon_title} style={{width: '0.23rem'}} src={require("../../../../assets/images/screen/rencaizhishu.svg")} alt="" ></img>
                            <div className={styles.hr_line}></div>
                            <div className={styles.text}>
                                <p className={styles.name}>人才队伍发展指数</p>
                                <p className={styles.en_name}>TALENT INDEX</p>
                            </div>
                        </div>
                    )
                }

                {
                    zbSelect === 3 && (
                        <div className={styles.sider} >
                            <img className={styles.icon_title} style={{width: '0.23rem'}} src={require("../../../../assets/images/screen/guanxi.svg")} alt="" ></img>
                            <div className={styles.hr_line}></div>
                            <div className={styles.text}>
                                <p className={styles.name}>劳动关系和谐指数</p>
                                <p className={styles.en_name}>LABOR RELATIONS INDEX</p>
                            </div>
                        </div>
                    )
                }

                {
                    zbSelect === 4 && (
                        <div className={styles.sider} >
                            <img className={styles.icon_title} style={{width: '0.23rem'}} src={require("../../../../assets/images/screen/baozhang.svg")} alt="" ></img>
                            <div className={styles.hr_line}></div>
                            <div className={styles.text}>
                                <p className={styles.name}>社会保障水平指数</p>
                                <p className={styles.en_name}>SOCIAL SECURITY INDEX</p>
                            </div>
                        </div>
                    )
                }

                {
                    zbSelect === 5 && (
                        <div className={styles.sider} >
                            <img className={styles.icon_title} style={{width: '0.23rem'}} src={require("../../../../assets/images/screen/wanglou.svg")} alt="" ></img>
                            <div className={styles.hr_line}></div>
                            <div className={styles.text}>
                                <p className={styles.name}>网络信息安全指数</p>
                                <p className={styles.en_name}>SAFETY INDEX</p>
                            </div>
                        </div>
                    )
                }

                {
                    zbSelect === 6 && (
                        <div className={styles.sider} >
                            <img className={styles.icon_title} style={{width: '0.23rem'}} src={require("../../../../assets/images/screen/mhrs.svg")} alt="" ></img>
                            <div className={styles.hr_line}></div>
                            <div className={styles.text}>
                                <p className={styles.name}>美好人社指数</p>
                                <p className={styles.en_name}>HUMAN RESOURCES & SOCIAL SECURITY</p>
                            </div>
                        </div>
                    )
                }


                {/* 线条流动动画 */}

                {
                    MAP_RCLD && (
                        <>
                        <svg version="1.1" className="water water1">
                        {/* 武义县 */}
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    {
                                        wy_ld === '流出'? (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#FF6500', stopOpacity: 0}} />
                                                <stop offset="100%" style={{stopColor: '#FF6500', stopOpacity: 1}} />
                                            </>
                                        ): (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#E9ED2D', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#E9ED2D', stopOpacity: 0}} />
                                            </>
                                        )
                                    }
                                </linearGradient>
                            </defs>
                            {
                            wy_ld === '流出'? (
                                <path fill="transparent" stroke="url(#grad1)" strokeWidth="3" d="M0 0 Q 100 40 250 15" className="path"></path>
                            ): (
                                <path fill="transparent" stroke="url(#grad1)" strokeWidth="3" d="M250 15 Q 100 40 0 0" className="path"></path>
                            )
                            }
                        </svg>

                        {/* 婺城区 */}
                        <svg version="1.1" className="water water2">
                            <defs>
                                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    {
                                        wc_ld === '流出'? (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#FF6500', stopOpacity: 0}} />
                                                <stop offset="100%" style={{stopColor: '#FF6500', stopOpacity: 1}} />
                                            </>
                                        ): (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#E9ED2D', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#E9ED2D', stopOpacity: 0}} />
                                            </>
                                        )
                                    }
                                </linearGradient>
                            </defs>
                            {
                                wc_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad2)" strokeWidth="3" d="M0 0 Q 100 80 250 93" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad2)" strokeWidth="3" d="M250 93 Q 100 80 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 金东区 */}
                        <svg version="1.1" className="water water3">
                            <defs>
                                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                                    {
                                        jd_ld === '流出'? (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#FF6500', stopOpacity: 0}} />
                                                <stop offset="100%" style={{stopColor: '#FF6500', stopOpacity: 1}} />
                                            </>
                                        ): (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#E9ED2D', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#E9ED2D', stopOpacity: 0}} />
                                            </>
                                        )
                                    }
                                </linearGradient>
                            </defs>
                            {
                                jd_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad3)" strokeWidth="3" d="M0 0 Q 52 62 104 75" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad3)" strokeWidth="3" d="M104 75 Q 52 62 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 兰溪市 */}
                        <svg version="1.1" className="water water4">
                            <defs>
                                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                                    {
                                        lx_ld === '流出'? (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#FF6500', stopOpacity: 0}} />
                                                <stop offset="100%" style={{stopColor: '#FF6500', stopOpacity: 1}} />
                                            </>
                                        ): (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#E9ED2D', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#E9ED2D', stopOpacity: 0}} />
                                            </>
                                        )
                                    }
                                </linearGradient>
                            </defs>
                            {
                                lx_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad4)" strokeWidth="3" d="M0 0 Q 140 10 258 78" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad4)" strokeWidth="3" d="M258 78 Q 140 10 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 永康市 */}
                        <svg version="1.1" className="water water5">
                            <defs>
                                <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
                                    {
                                        yk_ld === '流出'? (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#FF6500', stopOpacity: 0}} />
                                                <stop offset="100%" style={{stopColor: '#FF6500', stopOpacity: 1}} />
                                            </>
                                        ): (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#E9ED2D', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#E9ED2D', stopOpacity: 0}} />
                                            </>
                                        )
                                    }
                                </linearGradient>
                            </defs>
                            {
                                yk_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad5)" strokeWidth="3" d="M0 0 Q 33 15 65 48" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad5)" strokeWidth="3" d="M65 48 Q 33 15 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 浦江县 */}
                        <svg version="1.1" className="water water6">
                            <defs>
                                <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
                                    {
                                        pj_ld === '流出'? (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#FF6500', stopOpacity: 0}} />
                                                <stop offset="100%" style={{stopColor: '#FF6500', stopOpacity: 1}} />
                                            </>
                                        ): (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#E9ED2D', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#E9ED2D', stopOpacity: 0}} />
                                            </>
                                        )
                                    }
                                </linearGradient>
                            </defs>
                            {
                                pj_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad6)" strokeWidth="3" d="M0 0 Q 160 45 183 130" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad6)" strokeWidth="3" d="M183 130 Q 160 45 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 义乌市 */}
                        <svg version="1.1" className="water water7">
                            <defs>
                                <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="0%">
                                    {
                                        yw_ld === '流出'? (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#FF6500', stopOpacity: 0}} />
                                                <stop offset="100%" style={{stopColor: '#FF6500', stopOpacity: 1}} />
                                            </>
                                        ): (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#E9ED2D', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#E9ED2D', stopOpacity: 0}} />
                                            </>
                                        )
                                    }
                                </linearGradient>
                            </defs>
                            {
                                yw_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad7)" strokeWidth="3" d="M0 0 Q 56 102 112 150" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad7)" strokeWidth="3" d="M112 150 Q 56 102 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 东阳市 */}
                        <svg version="1.1" className="water water8">
                            <defs>
                                <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="0%">
                                    {
                                        dy_ld === '流出'? (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#FF6500', stopOpacity: 0}} />
                                                <stop offset="100%" style={{stopColor: '#FF6500', stopOpacity: 1}} />
                                            </>
                                        ): (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#E9ED2D', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#E9ED2D', stopOpacity: 0}} />
                                            </>
                                        )
                                    }
                                </linearGradient>
                            </defs>
                            {
                                dy_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad8)" strokeWidth="3" d="M0 0 Q 20 10 38 118" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad8)" strokeWidth="3" d="M38 118 Q 20 10 0 0" className="path"></path>
                                )
                            }
                        </svg>
                        {/* 磐安县 */}
                        <svg version="1.1" className="water water9">
                            <defs>
                                <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="0%">
                                    {
                                        pa_ld === '流出'? (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#FF6500', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#FF6500', stopOpacity: 0}} />
                                            </>
                                        ): (
                                            <>
                                                <stop offset="0%" style={{stopColor: '#E9ED2D', stopOpacity: 0}} />
                                                <stop offset="100%" style={{stopColor: '#E9ED2D', stopOpacity: 1}} />
                                            </>
                                        )
                                    }
                                </linearGradient>
                            </defs>
                            {
                                pa_ld === '流出'? (
                                    <path fill="transparent" stroke="url(#grad9)" strokeWidth="3" d="M35 0 Q 10 50 0 106" className="path"></path>
                                ): (
                                    <path fill="transparent" stroke="url(#grad9)" strokeWidth="3" d="M0 106 Q 10 50 35 0" className="path"></path>
                                )
                            }
                        </svg>
                        </>
                    )
                }

                {/* 数据点上升动画 */}
                {/* <div className="dataPoint point1"></div>
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
                <div className="dataPoint point18"></div> */}

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

                {/* 区域名称 */}
                {
                    (cityArr && cityArr.length > 0) && (
                        cityArr.map((item, index) => {
                            let imgUrl = 'pingc'
                            let areaClass = 'area1'
                            let liColor = '18F0FF'
                            if(index === 0) {
                                imgUrl = 'jin'
                            } else if(index === 1) {
                                imgUrl = 'yin'
                            } else if(index === 2) {
                                imgUrl = 'tong'
                            }

                            if(item.AREA_NAME === '婺城区') {
                                areaClass = 'area1'
                            } else if(item.AREA_NAME === '武义县') {
                                areaClass = 'area2'
                            } else if(item.AREA_NAME === '兰溪市') {
                                areaClass = 'area3'
                            } else if(item.AREA_NAME === '金东区') {
                                areaClass = 'area4'
                            } else if(item.AREA_NAME === '浦江县') {
                                areaClass = 'area5'
                            } else if(item.AREA_NAME === '永康市') {
                                areaClass = 'area6'
                            } else if(item.AREA_NAME === '义乌市') {
                                areaClass = 'area7'
                            } else if(item.AREA_NAME === '东阳市') {
                                areaClass = 'area8'
                            } else if(item.AREA_NAME === '磐安县') {
                                areaClass = 'area9'
                            }

                            if(index === 0) {
                                liColor = '#dfa944'
                            } else if(index === 1) {
                                liColor = '#808ca0'
                            } else if(index === 2) {
                                liColor = '#af7964'
                            } else {
                                liColor = '#18F0FF'
                            }
                            return (
                                <div className={`area ${areaClass}`} key={index}>
                                    <p style={{color: liColor}}>{item.AREA_NAME}</p>
                                    <img src={require('../../../../assets/images/screen/' + imgUrl + '.svg')} alt="" ></img>
                                </div>
                            )
                        })
                    )
                }

            </div>
        )
    }
}

Map.propTypes = {
    loading: PropTypes.object,
}

export default Map;
