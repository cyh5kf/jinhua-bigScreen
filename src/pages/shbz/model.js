import modelExtend from 'dva-model-extend';
import { pathMatchRegexp } from 'utils';
import { pageModel } from 'utils/model';
import api from 'services';

const {
  SHBZZS_CBFGM,
  SHBZZS_BXDYBZSP,
  SHBZZS_GLXQYDYBZ,
  SHBZZS_GJJK,
  SHBZZS_SBJZJX,
  SHBZZS_SBJJZFNL,
  SHBZZS_ZFNLYC,
  SHBZZS_YLJJZF,
  MAP_ZS,
  SHBZ,
  SHBZ_RJFL
} = api;

export default modelExtend(pageModel, {
  namespace: 'shbz',

  state: {
    wheelStatus: 0,
    isHover: false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/shbz', location.pathname)) {
          dispatch({
            type: 'SHBZ' // 就业创业指数
          });
          dispatch({
            type: 'SHBZZS_CBFGM' // 就业创业指数
          });
          dispatch({
            type: 'SHBZZS_BXDYBZSP' // 就业创业指数--中美贸易摩擦就业失业预警指数
          });
          dispatch({
            type: 'SHBZZS_GLXQYDYBZ' // 就业创业指数--就业景气指数
          });
          dispatch({
            type: 'SHBZZS_GJJK' // 人才指数
          });
          dispatch({
            type: 'SHBZZS_SBJZJX' // 人才指数--人才增量
          });
          dispatch({
            type: 'SHBZZS_SBJJZFNL' // 人才指数--人才匹配度
          });
          dispatch({
            type: 'SHBZZS_ZFNLYC' // 人才指数--人才匹配度
          });
          dispatch({
            type: 'SHBZZS_YLJJZF' // --地图展示-人才流动
          });
          dispatch({
            type: 'MAP_ZS' // --地图展示-人才流动
          });
          dispatch({
            type: 'SHBZ_RJFL', // 社会保障指数--社保保险人均福利额
          });
          setInterval(() => {
            dispatch({
              type: 'MAP_ZS' // --地图展示-人才流动
            });
          }, 1000 * 60);
        }
      });
    }
  },

  effects: {
    *SHBZ({ payload = {} }, { call, put }) {
      const data = yield call(SHBZ, payload);
      yield put({
        type: 'updateState',
        payload: {
          SHBZ: data.data
        }
      });
    },
    *SHBZZS_CBFGM({ payload = {} }, { call, put }) {
      const data = yield call(SHBZZS_CBFGM, payload);
      yield put({
        type: 'updateState',
        payload: {
          SHBZZS_CBFGM: data.data
        }
      });
    },
    *SHBZZS_BXDYBZSP({ payload = {} }, { call, put }) {
      const data = yield call(SHBZZS_BXDYBZSP, payload);
      yield put({
        type: 'updateState',
        payload: {
          SHBZZS_BXDYBZSP: data.data
        }
      });
    },
    *SHBZZS_GLXQYDYBZ({ payload = {} }, { call, put }) {
      const data = yield call(SHBZZS_GLXQYDYBZ, payload);
      yield put({
        type: 'updateState',
        payload: {
          SHBZZS_GLXQYDYBZ: data.data
        }
      });
    },
    *SHBZZS_GJJK({ payload = {} }, { call, put }) {
      const data = yield call(SHBZZS_GJJK, payload);
      yield put({
        type: 'updateState',
        payload: {
          SHBZZS_GJJK: data.data
        }
      });
    },
    *SHBZZS_SBJZJX({ payload = {} }, { call, put }) {
      const data = yield call(SHBZZS_SBJZJX, payload);
      yield put({
        type: 'updateState',
        payload: {
          SHBZZS_SBJZJX: data.data
        }
      });
    },
    *SHBZZS_SBJJZFNL({ payload = {} }, { call, put }) {
      const data = yield call(SHBZZS_SBJJZFNL, payload);
      yield put({
        type: 'updateState',
        payload: {
          SHBZZS_SBJJZFNL: data.data
        }
      });
    },
    *SHBZZS_ZFNLYC({ payload = {} }, { call, put }) {
      const data = yield call(SHBZZS_ZFNLYC, payload);
      yield put({
        type: 'updateState',
        payload: {
          SHBZZS_ZFNLYC: data.data
        }
      });
    },
    *SHBZZS_YLJJZF({ payload = {} }, { call, put }) {
      const data = yield call(SHBZZS_YLJJZF, payload);
      yield put({
        type: 'updateState',
        payload: {
          SHBZZS_YLJJZF: data.data
        }
      });
    },
    *MAP_ZS({ payload = {} }, { call, put }) {
      const data = yield call(MAP_ZS, payload);
      yield put({
        type: 'updateState',
        payload: {
          MAP_ZS: data.data
        }
      });
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
  },

  reducers: {}
});
