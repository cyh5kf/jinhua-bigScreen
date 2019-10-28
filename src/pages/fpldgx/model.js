import modelExtend from 'dva-model-extend'
import { pathMatchRegexp } from 'utils'
import { pageModel } from 'utils/model'
import api from 'services'

const {
  LDGXYJHJ_RJYJL,
  LDGXYJHJ_HY,
  YJHJL_DY,
  YJHJL_MY,
  ZJWQX_CCL,
  ZJWQX_QXAJFSL,
  JHLDGX,
  MAP_JHLDGX,
  LDGXXF,
  LDZXTJ,
  LDZXTJ_TJALFB,
  LDZXTJ_AJJAS,
  SRFP_GZ,
  SRFP_SHGZBZ,
  SRFP_ZDGZBZ,
  LDGXXF_QS
} = api

export default modelExtend(pageModel, {
  namespace: "screencopy",

  state: {
    wheelStatus: 0,
    isHover: false,
    LDGXYJHJ_HY: [],
    YJHJL_MY: [],
    ZJWQX_CCL: [],
    LDZXTJ: [],
    LDZXTJ_TJALFB: [],
    LDZXTJ_AJJAS: [],
    SRFP_GZ: [],
    SRFP_ZDGZBZ: [],
    SRFP_SHGZBZ: [],
    LDGXXF: [],
    LDGXYJHJ_RJYJL: [],
    YJHJL_DY: [],
    ZJWQX_QXAJFSL: [],
    LDGXXF_QS:[]

  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/fpldgx', location.pathname)) {

          dispatch({
            type: 'LDGXYJHJ_RJYJL', //1劳动关系预警化解-人均预警率
          });
          dispatch({
            type: 'LDGXXF_QS', //1劳动关系预警化解-人均预警率
          });
          dispatch({
            type: 'LDGXYJHJ_HY', //2--劳动关系预警化解-行业
          });
          dispatch({
            type: 'YJHJL_DY' // 3--预警化解率-当月
          });
          dispatch({
            type: 'YJHJL_MY', // 4--预警化解率-每月
          });
          dispatch({
            type: 'ZJWQX_CCL', // 5--浙江无欠薪-抽查率
          });
          dispatch({
            type: 'ZJWQX_QXAJFSL', // 6--浙江无欠薪-欠薪案件发生率
          });
          dispatch({
            type: 'JHLDGX', // 7--金华劳动关系指数
          });
          dispatch({
            type: 'MAP_JHLDGX', // 8--地图展示-金华劳动关系指数
          });
          dispatch({
            type: 'LDGXXF', // 9--劳动关系信访
          });
          dispatch({
            type: 'LDZXTJ', // 10--劳动争议调解
          });
          dispatch({
            type: 'LDZXTJ_TJALFB', // 11--劳动争议调解-调解案例数分布
          });
          dispatch({
            type: 'LDZXTJ_AJJAS', // 12--劳动争议调解-案件结案数分布
          });
          dispatch({
            type: 'SRFP_GZ', // 13--收入分配-工资
          });
          dispatch({
            type: 'SRFP_SHGZBZ', //14-收入分配-社会工资比值
          });
          dispatch({
            type: 'SRFP_ZDGZBZ', // 15--收入分配-最低工资比值
          });

        }
      })
    },
  },

  effects: {
    * LDGXYJHJ_RJYJL ({ payload = {} }, { call, put }) {
      const data = yield call(LDGXYJHJ_RJYJL, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGXYJHJ_RJYJL: data.data,
        },
      })
    },
    *LDGXYJHJ_HY ({ payload = {} }, { call, put }) {
      const data = yield call(LDGXYJHJ_HY, payload)

      yield put({
        type: 'updateState',
        payload: {
          LDGXYJHJ_HY: data.data,
        },
      })
    },
    *YJHJL_DY ({ payload = {} }, { call, put }) {

      const data = yield call(YJHJL_DY, payload)

      yield put({
        type: 'updateState',
        payload: {
          YJHJL_DY: data.data,
        },
      })
    },
    *LDGXXF_QS({ payload = {} }, { call, put }) {

      const data = yield call(LDGXXF_QS, payload)

      yield put({
        type: 'updateState',
        payload: {
          LDGXXF_QS: data.data,
        },
      })
    },
    *YJHJL_MY ({ payload = {} }, { call, put }) {
      const data = yield call(YJHJL_MY, payload)
      yield put({
        type: 'updateState',
        payload: {
          YJHJL_MY: data.data,
        },
      })
    },
    *ZJWQX_CCL ({ payload = {} }, { call, put }) {
      const data = yield call(ZJWQX_CCL, payload)
      yield put({
        type: 'updateState',
        payload: {
          ZJWQX_CCL: data.data,
        },
      })
    },
    *ZJWQX_QXAJFSL ({ payload = {} }, { call, put }) {
      const data = yield call(ZJWQX_QXAJFSL, payload)
      yield put({
        type: 'updateState',
        payload: {
          ZJWQX_QXAJFSL: data.data,
        },
      })
    },
    *JHLDGX ({ payload = {} }, { call, put }) {
      const data = yield call(JHLDGX, payload)
      yield put({
        type: 'updateState',
        payload: {
          JHLDGX: data.data,
        },
      })
    },
    *MAP_JHLDGX ({ payload = {} }, { call, put }) {
      const data = yield call(MAP_JHLDGX, payload)
      yield put({
        type: 'updateState',
        payload: {
          MAP_JHLDGX: data.data,
        },
      })
    },
    *LDGXXF ({ payload = {} }, { call, put }) {
      const data = yield call(LDGXXF, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDGXXF: data.data,
        },
      })
    },
    *LDZXTJ ({ payload = {} }, { call, put }) {
      const data = yield call(LDZXTJ, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDZXTJ: data.data,
        },
      })
    },
    *LDZXTJ_TJALFB ({ payload = {} }, { call, put }) {
      const data = yield call(LDZXTJ_TJALFB, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDZXTJ_TJALFB: data.data,
        },
      })
    },
    *LDZXTJ_AJJAS ({ payload = {} }, { call, put }) {
      const data = yield call(LDZXTJ_AJJAS, payload)
      yield put({
        type: 'updateState',
        payload: {
          LDZXTJ_AJJAS: data.data,
        },
      })
    },
    *SRFP_GZ ({ payload = {} }, { call, put }) {
      const data = yield call(SRFP_GZ, payload)
      yield put({
        type: 'updateState',
        payload: {
          SRFP_GZ: data.data,
        },
      })
    },
    *SRFP_SHGZBZ ({ payload = {} }, { call, put }) {
      const data = yield call(SRFP_SHGZBZ, payload)
      yield put({
        type: 'updateState',
        payload: {
          SRFP_SHGZBZ: data.data,
        },
      })
    },
    *SRFP_ZDGZBZ ({ payload = {} }, { call, put }) {
      const data = yield call(SRFP_ZDGZBZ, payload)
      yield put({
        type: 'updateState',
        payload: {
          SRFP_ZDGZBZ: data.data,
        },
      })
    },


  },


  reducers: {

  }

})
