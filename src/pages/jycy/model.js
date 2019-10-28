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
  namespace: "jycy",

  state: {
    wheelStatus: 0,
    isHover: false
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {


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
    *JYCY_ZMMY ({ payload = {} }, { call, put }) {
      const data = yield call(JYCY_ZMMY, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCY_ZMMY: data.data,
        },
      })
    },
    *JYCY_JQZS ({ payload = {} }, { call, put }) {
      const data = yield call(JYCY_JQZS, payload)
      yield put({
        type: 'updateState',
        payload: {
          JYCY_JQZS: data.data,
        },
      })
    },
    *RCZS ({ payload = {} }, { call, put }) {
      const data = yield call(RCZS, payload)
      yield put({
        type: 'updateState',
        payload: {
          RCZS: data.data,
        },
      })
    },
    *RCZS_RCZL ({ payload = {} }, { call, put }) {
      const data = yield call(RCZS_RCZL, payload)
      yield put({
        type: 'updateState',
        payload: {
          RCZS_RCZL: data.data,
        },
      })
    },
    *RCZS_RCPPD ({ payload = {} }, { call, put }) {
      const data = yield call(RCZS_RCPPD, payload)
      yield put({
        type: 'updateState',
        payload: {
          RCZS_RCPPD: data.data,
        },
      })
    },
    *RCZS_GCT ({ payload = {} }, { call, put }) {
      const data = yield call(RCZS_GCT, payload)
      yield put({
        type: 'updateState',
        payload: {
          RCZS_GCT: data.data,
        },
      })
    },
    *LDGX ({ payload = {} }, { call, put }) {
      const data = yield call(LDGX, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGX: data.data,
        },
      })
    },
    *LDGX_RCYJ ({ payload = {} }, { call, put }) {
      const data = yield call(LDGX_RCYJ, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGX_RCYJ: data.data,
        },
      })
    },
    *LDGX_YJHJ ({ payload = {} }, { call, put }) {
      const data = yield call(LDGX_YJHJ, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGX_YJHJ: data.data,
        },
      })
    },
    *LDGX_LDJC ({ payload = {} }, { call, put }) {
      const data = yield call(LDGX_LDJC, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGX_LDJC: data.data,
        },
      })
    },
    *LDGX_RSZY ({ payload = {} }, { call, put }) {
      const data = yield call(LDGX_RSZY, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGX_RSZY: data.data,
        },
      })
    },
    *SHBZ ({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ: data.data,
        },
      })
    },
    *SHBZ_YXQYS ({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ_YXQYS, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ_YXQYS: data.data,
        },
      })
    },
    *SHBZ_GDPZB ({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ_GDPZB, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ_GDPZB: data.data,
        },
      })
    },
    *SHBZ_LFNL ({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ_LFNL, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ_LFNL: data.data,
        },
      })
    },
    *SHBZ_RJFL ({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ_RJFL, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ_RJFL: data.data,
        },
      })
    },
    *SHBZ_CKHY ({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ_CKHY, payload)
      yield put({
        type: 'updateState',
        payload: {
          SHBZ_CKHY: data.data,
        },
      })
    },
    *GGFW ({ payload = {} }, { call, put }) {
      const data = yield call(GGFW, payload)
      yield put({
        type: 'updateState',
        payload: {
          GGFW: data.data,
        },
      })
    },
    *PYC_FWMYD ({ payload = {} }, { call, put }) {
      const data = yield call(PYC_FWMYD, payload)
      yield put({
        type: 'updateState',
        payload: {
          PYC_FWMYD: data.data,
        },
      })
    },
    *PYC_SXBL ({ payload = {} }, { call, put }) {
      const data = yield call(PYC_SXBL, payload)
      yield put({
        type: 'updateState',
        payload: {
          PYC_SXBL: data.data,
        },
      })
    },
    *WLXX ({ payload = {} }, { call, put }) {
      const data = yield call(WLXX, payload)
      yield put({
        type: 'updateState',
        payload: {
          WLXX: data.data,
        },
      })
    },
    *WLXX_YZCD ({ payload = {} }, { call, put }) {
      const data = yield call(WLXX_YZCD, payload)
      yield put({
        type: 'updateState',
        payload: {
          WLXX_YZCD: data.data,
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

    *MAP_RCLD ({ payload = {} }, { call, put }) {
      const data = yield call(MAP_RCLD, payload)
      yield put({
        type: 'updateState',
        payload: {
          MAP_RCLD: data.data,
        },
      })
    },

    *MAP_SZRS ({ payload = {} }, { call, put }) {
      const data = yield call(MAP_SZRS, payload)
      yield put({
        type: 'updateState',
        payload: {
          MAP_SZRS: data.data,
        },
      })
    },

    *MAP_FJLXZB ({ payload = {} }, { call, put }) {
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
