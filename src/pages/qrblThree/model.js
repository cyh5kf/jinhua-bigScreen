import modelExtend from 'dva-model-extend'
import { pathMatchRegexp } from 'utils'
import { pageModel } from 'utils/model'
import api from 'services'

const {
  QRBL_GWLXGQRS, //岗位类型的供求人数
  QRBL_GXZPM, // 各岗位薪资排名TOP10
  QRBL_GZNXGQRS, //工作年限的供求人数
  QRBL_GDQQRBL, //各地区求人倍率
  QRBL_ZPQZ, //招聘求职
  QRBL_QSQRBL, //全市求人倍率
  QRBL_JBNGQQK, //近半年供求情况
  QRBL_XLGQRS, //学历的供求人数TOP10
  QRBL_NLGQRS, //年龄的供求人数
  QRBL_XBGQQK, //性别的供求情况
} = api

export default modelExtend(pageModel, {
  namespace: "qrblthree",

  state: {
    blockSelect: '', // 左右两边区域选中状态
    zbSelect: 0, // 中间按钮区域选中状态
    isHover: false, // 中间区域鼠标hover状态
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/qrblthree', location.pathname)) {

          dispatch({
            type: 'QRBL_GWLXGQRS', //岗位类型的供求人数
          });
          dispatch({
            type: 'QRBL_GXZPM', //各岗位薪资排名TOP10
          });
          dispatch({
            type: 'QRBL_GZNXGQRS', // 工作年限的供求人数
          });
          dispatch({
            type: 'QRBL_GDQQRBL', // 各地区求人倍率
          });
          dispatch({
            type: 'QRBL_ZPQZ', // 招聘求职 
          });
          dispatch({
            type: 'QRBL_QSQRBL', //全市求人倍率
          });
          dispatch({
            type: 'QRBL_JBNGQQK', //近半年供求情况
          });
          dispatch({
            type: 'QRBL_XLGQRS', //学历的供求人数TOP10
          });
          dispatch({
            type: 'QRBL_NLGQRS', //年龄的供求人数
          });
          dispatch({
            type: 'QRBL_XBGQQK', //性别的供求情况
          });
        }
      })
    },
  },

  effects: {

    *QRBL_GWLXGQRS({ payload = {} }, { call, put }) {
      const data = yield call(QRBL_GWLXGQRS, payload)
      yield put({
        type: 'updateState',
        payload: {
          QRBL_GWLXGQRS: data.data,
        },
      })
    },

    *QRBL_GXZPM({ payload = {} }, { call, put }) {
      const data = yield call(QRBL_GXZPM, payload)
      yield put({
        type: 'updateState',
        payload: {
          QRBL_GXZPM: data.data,
        },
      })
    },

    *QRBL_GZNXGQRS({ payload = {} }, { call, put }) {
      const data = yield call(QRBL_GZNXGQRS, payload)
      yield put({
        type: 'updateState',
        payload: {
          QRBL_GZNXGQRS: data.data,
        },
      })
    },

    *QRBL_GDQQRBL({ payload = {} }, { call, put }) {
      const data = yield call(QRBL_GDQQRBL, payload)
      yield put({
        type: 'updateState',
        payload: {
          QRBL_GDQQRBL: data.data,
        },
      })
    },

    *QRBL_ZPQZ({ payload = {} }, { call, put }) {
      const data = yield call(QRBL_ZPQZ, payload)
      yield put({
        type: 'updateState',
        payload: {
          QRBL_ZPQZ: data.data,
        },
      })
    },

    *QRBL_QSQRBL({ payload = {} }, { call, put }) {
      const data = yield call(QRBL_QSQRBL, payload)
      yield put({
        type: 'updateState',
        payload: {
          QRBL_QSQRBL: data.data,
        },
      })
    },

    *QRBL_JBNGQQK({ payload = {} }, { call, put }) {
      const data = yield call(QRBL_JBNGQQK, payload)
      yield put({
        type: 'updateState',
        payload: {
          QRBL_JBNGQQK: data.data,
        },
      })
    },

    *QRBL_XLGQRS({ payload = {} }, { call, put }) {
      const data = yield call(QRBL_XLGQRS, payload)
      yield put({
        type: 'updateState',
        payload: {
          QRBL_XLGQRS: data.data,
        },
      })
    },

    *QRBL_NLGQRS({ payload = {} }, { call, put }) {
      const data = yield call(QRBL_NLGQRS, payload)
      yield put({
        type: 'updateState',
        payload: {
          QRBL_NLGQRS: data.data,
        },
      })
    },

    *QRBL_XBGQQK({ payload = {} }, { call, put }) {
      const data = yield call(QRBL_XBGQQK, payload)
      yield put({
        type: 'updateState',
        payload: {
          QRBL_XBGQQK: data.data,
        },
      })
    },

  },


  reducers: {

  }

})
