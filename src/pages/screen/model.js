import modelExtend from 'dva-model-extend'
import { pathMatchRegexp } from 'utils'
import { pageModel } from 'utils/model'
import api from 'services'

const {
  jycy, JYCY_ZMMY, JYCY_JQZS,
  RCZS, RCZS_RCZL, RCZS_RCPPD, RCZS_GCT,
  LDGX, LDGX_RCYJ, LDGX_YJHJ, LDGX_LDJC, LDGX_RSZY,
  SHBZ, SHBZ_YXQYS, SHBZ_GDPZB, SHBZ_LFNL, SHBZ_RJFL, SHBZ_CKHY,
  GGFW,
  PYC_FWMYD, PYC_SXBL,
  WLXX, WLXX_YZCD,
  MAP_ZS, MAP_RCLD, MAP_SZRS, MAP_FJLXZB
} = api

export default modelExtend(pageModel, {
  namespace: "screen",
  
  state: {
    wheelStatus: 0
  },
  
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/screen', location.pathname)) {
          dispatch({
            type: 'jycy', // 就业创业指数
          });
          dispatch({
            type: 'JYCY_ZMMY', // 就业创业指数--中美贸易摩擦就业失业预警指数
          });
          dispatch({
            type: 'JYCY_JQZS', // 就业创业指数--就业景气指数
          });
          dispatch({
            type: 'RCZS', // 人才指数
          });
          dispatch({
            type: 'RCZS_RCZL', // 人才指数--人才增量
          });
          dispatch({
            type: 'RCZS_RCPPD', // 人才指数--人才匹配度
          });
          dispatch({
            type: 'RCZS_GCT', // 人才指数--新能源构成图
          });
          dispatch({
            type: 'LDGX', // 劳动关系指数
          });
          dispatch({
            type: 'LDGX_RCYJ', // 劳动关系指数-人才预警率
          });
          dispatch({
            type: 'LDGX_YJHJ', // 劳动关系指数-预警化解率
          });
          dispatch({
            type: 'LDGX_LDJC', // 劳动和谐关系-劳动监察案件结案率
          });
          dispatch({
            type: 'LDGX_RSZY', // 劳动关系指数-劳动人事争议调解仲裁结案率
          });
          dispatch({
            type: 'SHBZ', // 社会保障指数
          });
          dispatch({
            type: 'SHBZ_YXQYS', //社会保障指数--社会保险费减增绩效(有效企业数)
          });
          dispatch({
            type: 'SHBZ_GDPZB', // 社会保障指数-GDP占比
          });
          dispatch({
            type: 'SHBZ_LFNL', // 社会保障指数-社保基金养老支付能力
          });
          dispatch({
            type: 'SHBZ_RJFL', // 社会保障指数--社保保险人均福利额
          });
          dispatch({
            type: 'SHBZ_CKHY', // 社会保障指数--持卡活跃度
          });
          dispatch({
            type: 'GGFW', // 公共服务指数
          });
          dispatch({
            type: 'PYC_FWMYD', // 公共服务指数-服务满意度
          });
          dispatch({
            type: 'PYC_SXBL', // 公共服务指数-事项实现比例
          });
          dispatch({
            type: 'WLXX', // 网络信息安全指数
          });
          dispatch({
            type: 'WLXX_YZCD', // 网络信息安全-种类及严重程度
          });

          dispatch({
            type: 'MAP_ZS', // --地图展示-指数相关
          });

          dispatch({
            type: 'MAP_RCLD', // --地图展示-人才流动
          });

          setInterval(()=> {
            dispatch({
              type: 'MAP_RCLD', // --地图展示-人才流动
            });
          }, 1000*60)
          
          dispatch({
            type: 'MAP_SZRS', // --地图展示-数字人社
          });
          dispatch({
            type: 'MAP_FJLXZB', // --地图展示-附加轮询指标
          });
        }
      })
    },
  },
  
  effects: {
    *jycy({ payload = {} }, { call, put }) {
      const data = yield call(jycy, payload)
      yield put({
        type: 'updateState',
        payload: {
          jycy: data.data,
        },
      })
    },
    *JYCY_ZMMY({ payload = {} }, { call, put }) {
      const data = yield call(JYCY_ZMMY, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCY_ZMMY: data.data,
        },
      })
    },
    *JYCY_JQZS({ payload = {} }, { call, put }) {
      const data = yield call(JYCY_JQZS, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCY_JQZS: data.data,
        },
      })
    },
    *RCZS({ payload = {} }, { call, put }) {
      const data = yield call(RCZS, payload)
      yield put({
        type: 'updateState',
        payload: {
          RCZS: data.data,
        },
      })
    },
    *RCZS_RCZL({ payload = {} }, { call, put }) {
      const data = yield call(RCZS_RCZL, payload)
      yield put({
        type: 'updateState',
        payload: {
          RCZS_RCZL: data.data,
        },
      })
    },
    *RCZS_RCPPD({ payload = {} }, { call, put }) {
      const data = yield call(RCZS_RCPPD, payload)
      yield put({
        type: 'updateState',
        payload: {
          RCZS_RCPPD: data.data,
        },
      })
    },
    *RCZS_GCT({ payload = {} }, { call, put }) {
      const data = yield call(RCZS_GCT, payload)
      yield put({
        type: 'updateState',
        payload: {
          RCZS_GCT: data.data,
        },
      })
    },
    *LDGX({ payload = {} }, { call, put }) {
      const data = yield call(LDGX, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGX: data.data,
        },
      })
    },
    *LDGX_RCYJ({ payload = {} }, { call, put }) {
      const data = yield call(LDGX_RCYJ, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGX_RCYJ: data.data,
        },
      })
    },
    *LDGX_YJHJ({ payload = {} }, { call, put }) {
      const data = yield call(LDGX_YJHJ, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGX_YJHJ: data.data,
        },
      })
    },
    *LDGX_LDJC({ payload = {} }, { call, put }) {
      const data = yield call(LDGX_LDJC, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGX_LDJC: data.data,
        },
      })
    },
    *LDGX_RSZY({ payload = {} }, { call, put }) {
      const data = yield call(LDGX_RSZY, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGX_RSZY: data.data,
        },
      })
    },
    *SHBZ({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ: data.data,
        },
      })
    },
    *SHBZ_YXQYS({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ_YXQYS, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ_YXQYS: data.data,
        },
      })
    },
    *SHBZ_GDPZB({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ_GDPZB, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ_GDPZB: data.data,
        },
      })
    },
    *SHBZ_LFNL({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ_LFNL, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ_LFNL: data.data,
        },
      })
    },
    *SHBZ_RJFL({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ_RJFL, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ_RJFL: data.data,
        },
      })
    },
    *SHBZ_CKHY({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ_CKHY, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ_CKHY: data.data,
        },
      })
    },
    *GGFW({ payload = {} }, { call, put }) {
      const data = yield call(GGFW, payload)
      yield put({
        type: 'updateState',
        payload: {
          GGFW: data.data,
        },
      })
    },
    *PYC_FWMYD({ payload = {} }, { call, put }) {
      const data = yield call(PYC_FWMYD, payload)
      yield put({
        type: 'updateState',
        payload: {
          PYC_FWMYD: data.data,
        },
      })
    },
    *PYC_SXBL({ payload = {} }, { call, put }) {
      const data = yield call(PYC_SXBL, payload)
      yield put({
        type: 'updateState',
        payload: {
          PYC_SXBL: data.data,
        },
      })
    },
    *WLXX({ payload = {} }, { call, put }) {
      const data = yield call(WLXX, payload)
      yield put({
        type: 'updateState',
        payload: {
          WLXX: data.data,
        },
      })
    },
    *WLXX_YZCD({ payload = {} }, { call, put }) {
      const data = yield call(WLXX_YZCD, payload)
      yield put({
        type: 'updateState',
        payload: {
          WLXX_YZCD: data.data,
        },
      })
    },
    
    *MAP_ZS({ payload = {} }, { call, put }) {
      const data = yield call(MAP_ZS, payload)
      yield put({
        type: 'updateState',
        payload: {
          MAP_ZS: data.data,
        },
      })
    },

    *MAP_RCLD({ payload = {} }, { call, put }) {
      const data = yield call(MAP_RCLD, payload)
      yield put({
        type: 'updateState',
        payload: {
          MAP_RCLD: data.data,
        },
      })
    },

    *MAP_SZRS({ payload = {} }, { call, put }) {
      const data = yield call(MAP_SZRS, payload)
      yield put({
        type: 'updateState',
        payload: {
          MAP_SZRS: data.data,
        },
      })
    },

    *MAP_FJLXZB({ payload = {} }, { call, put }) {
      const data = yield call(MAP_FJLXZB, payload)
      yield put({
        type: 'updateState',
        payload: {
          MAP_FJLXZB: data.data,
        },
      })
    },


  },

  
  reducers: {
  
  }
  
})
