import modelExtend from 'dva-model-extend'
import { pathMatchRegexp } from 'utils'
import { pageModel } from 'utils/model'
import api from 'services'

const {
  JYCYZS_CZXZJYRS, //-- 就业创业指数-城镇新增就业人数
  JYCYZS_CZDJSYL, //-- 城镇登记失业率
  JYCYZS_ECJYQK, // 二次就业情况
  ECJYQK_HYLX, // 行业流向
  JYCYZS_XKBQYS, // 新开办企业数
  JYCYZS_GTGSHS, // 个体工商户数
  JYCYZS_CYQK, // 创业情况
  JYCYZS_QRBL, // 求人倍率
  JYCYZS_SBCBRS, // 社保参保人数
  JYCYZS_WLRKS, // 外来人口变化
  MAP_ZS, //地图展示-指数相关
  JYCYZS_GDP, // 就业创业指数-GDP
  jycy, // 就业创业指数
} = api

export default modelExtend(pageModel, {
  namespace: "jycytwo",

  state: {
    blockSelect: '', // 左右两边区域选中状态
    zbSelect: 0, // 中间按钮区域选中状态
    isHover: false, // 中间区域鼠标hover状态
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/jycytwo', location.pathname)) {
          dispatch({
            type: 'jycy', // 就业创业指数
          });
          dispatch({
            type: 'JYCYZS_CZXZJYRS', // --城镇新增就业人数
          });
          dispatch({
            type: 'JYCYZS_CZDJSYL', // --城镇登记失业率
          });
          dispatch({
            type: 'JYCYZS_ECJYQK', // --二次就业情况
          });
          dispatch({
            type: 'ECJYQK_HYLX', // --行业流向
          });
          dispatch({
            type: 'JYCYZS_XKBQYS', // --新开办企业数
          });
          dispatch({
            type: 'JYCYZS_GTGSHS', // --个体工商户数
          });
          dispatch({
            type: 'JYCYZS_CYQK', // --创业情况
          });
          dispatch({
            type: 'JYCYZS_QRBL', // --求人倍率
          });
          dispatch({
            type: 'JYCYZS_SBCBRS', // --社保参保人数
          });
          dispatch({
            type: 'JYCYZS_WLRKS', // --外来人口变化
          });

          dispatch({
            type: 'MAP_ZS', // --地图展示-指数相关
          })

          dispatch({
            type: 'JYCYZS_GDP', // --就业创业指数-GDP
          })

        }
      })
    },
  },

  effects: {
    *jycy ({ payload = {} }, { call, put }) {
      const data = yield call(jycy, payload)
      yield put({
        type: 'updateState',
        payload: {
          jycy: data.data,
        },
      })
    },
    
    *MAP_ZS ({ payload = {} }, { call, put }) {
      const data = yield call(MAP_ZS, payload)
      yield put({
        type: 'updateState',
        payload: {
          MAP_ZS: data.data,
        },
      })
    },
    
    *JYCYZS_GDP ({ payload = {} }, { call, put }) {
      const data = yield call(JYCYZS_GDP, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCYZS_GDP: data.data,
        },
      })
    },

    *JYCYZS_CZXZJYRS ({ payload = {} }, { call, put }) {
      const data = yield call(JYCYZS_CZXZJYRS, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCYZS_CZXZJYRS: data.data,
        },
      })
    },

    *JYCYZS_CZDJSYL({ payload = {} }, { call, put }) {
      const data = yield call(JYCYZS_CZDJSYL, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCYZS_CZDJSYL: data.data,
        },
      })
    },

    *JYCYZS_ECJYQK({ payload = {} }, { call, put }) {
      const data = yield call(JYCYZS_ECJYQK, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCYZS_ECJYQK: data.data,
        },
      })
    },

    *ECJYQK_HYLX({ payload = {} }, { call, put }) {
      const data = yield call(ECJYQK_HYLX, payload)
      yield put({
        type: 'updateState',
        payload: {
          ECJYQK_HYLX: data.data,
        },
      })
    },

    *JYCYZS_XKBQYS({ payload = {} }, { call, put }) {
      const data = yield call(JYCYZS_XKBQYS, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCYZS_XKBQYS: data.data,
        },
      })
    },

    *JYCYZS_GTGSHS({ payload = {} }, { call, put }) {
      const data = yield call(JYCYZS_GTGSHS, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCYZS_GTGSHS: data.data,
        },
      })
    },

    *JYCYZS_CYQK({ payload = {} }, { call, put }) {
      const data = yield call(JYCYZS_CYQK, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCYZS_CYQK: data.data,
        },
      })
    },

    *JYCYZS_QRBL({ payload = {} }, { call, put }) {
      const data = yield call(JYCYZS_QRBL, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCYZS_QRBL: data.data,
        },
      })
    },

    *JYCYZS_SBCBRS({ payload = {} }, { call, put }) {
      const data = yield call(JYCYZS_SBCBRS, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCYZS_SBCBRS: data.data,
        },
      })
    },

    *JYCYZS_WLRKS({ payload = {} }, { call, put }) {
      const data = yield call(JYCYZS_WLRKS, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCYZS_WLRKS: data.data,
        },
      })
    },

  },


  reducers: {

  }

})
