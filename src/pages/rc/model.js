import modelExtend from "dva-model-extend";
import { pathMatchRegexp } from "utils";
import { pageModel } from "utils/model";
import api from "services";

const {
  RCSL_MWRKRCS,
  RCSL_ANF,
  RCXL_ANF,
  RCXL_AXL,
  RCXL_DZJYS,
  RCZS_RCJG,
  RCZS_BZYCG,
  RCZS_RCPTSL,
  ZYJSRC_ZB,
  ZYJSRC_ACC,
  GJSRC_ZB,
  GJSRC_ACC,
  RCGX_QRBL,
  RCZS_QYYRMYQK,
  MAP_ZS,
  RCZS
} = api;

export default modelExtend(pageModel, {
  namespace: "rc",

  state: {
    wheelStatus: 0,
    isHover: false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp("/rc", location.pathname)) {
          dispatch({
            type: "RCZS" // 就业创业指数
          });
          dispatch({
            type: "RCSL_MWRKRCS" // 就业创业指数
          });
          dispatch({
            type: "RCSL_ANF" // 就业创业指数
          });
          dispatch({
            type: "RCXL_ANF" // 就业创业指数--中美贸易摩擦就业失业预警指数
          });
          dispatch({
            type: "RCXL_AXL" // 就业创业指数--就业景气指数
          });
          dispatch({
            type: "RCXL_DZJYS" // 人才指数
          });
          dispatch({
            type: "RCZS_RCJG" // 人才指数--人才增量
          });
          dispatch({
            type: "RCZS_BZYCG" // 人才指数--人才匹配度
          });
          dispatch({
            type: "RCZS_RCPTSL" // 人才指数--新能源构成图
          });
          dispatch({
            type: "ZYJSRC_ZB" // 劳动关系指数
          });
          dispatch({
            type: "ZYJSRC_ACC" // 劳动关系指数-人才预警率
          });
          dispatch({
            type: "GJSRC_ZB" // 劳动关系指数-预警化解率
          });
          dispatch({
            type: "GJSRC_ACC" // 劳动和谐关系-劳动监察案件结案率
          });
          dispatch({
            type: "RCGX_QRBL" // 劳动关系指数-劳动人事争议调解仲裁结案率
          });
          dispatch({
            type: "RCZS_QYYRMYQK" // 社会保障指数
          });

          dispatch({
            type: "MAP_ZS" // --地图展示-人才流动
          });

          setInterval(() => {
            dispatch({
              type: "MAP_ZS" // --地图展示-人才流动
            });
          }, 1000 * 60);
        }
      });
    }
  },

  effects: {
    *RCZS({ payload = {} }, { call, put }) {
      const data = yield call(RCZS, payload);
      yield put({
        type: "updateState",
        payload: {
          RCZS: data.data
        }
      });
    },
    *RCSL_MWRKRCS({ payload = {} }, { call, put }) {
      const data = yield call(RCSL_MWRKRCS, payload);
      yield put({
        type: "updateState",
        payload: {
          RCSL_MWRKRCS: data.data
        }
      });
    },
    *RCSL_ANF({ payload = {} }, { call, put }) {
      const data = yield call(RCSL_ANF, payload);
      yield put({
        type: "updateState",
        payload: {
          RCSL_ANF: data.data
        }
      });
    },
    *RCXL_ANF({ payload = {} }, { call, put }) {
      const data = yield call(RCXL_ANF, payload);
      yield put({
        type: "updateState",
        payload: {
          RCXL_ANF: data.data
        }
      });
    },
    *RCXL_AXL({ payload = {} }, { call, put }) {
      const data = yield call(RCXL_AXL, payload);
      yield put({
        type: "updateState",
        payload: {
          RCXL_AXL: data.data
        }
      });
    },
    *RCXL_DZJYS({ payload = {} }, { call, put }) {
      const data = yield call(RCXL_DZJYS, payload);
      yield put({
        type: "updateState",
        payload: {
          RCXL_DZJYS: data.data
        }
      });
    },
    *RCZS_RCJG({ payload = {} }, { call, put }) {
      const data = yield call(RCZS_RCJG, payload);
      yield put({
        type: "updateState",
        payload: {
          RCZS_RCJG: data.data
        }
      });
    },
    *RCZS_BZYCG({ payload = {} }, { call, put }) {
      const data = yield call(RCZS_BZYCG, payload);
      yield put({
        type: "updateState",
        payload: {
          RCZS_BZYCG: data.data
        }
      });
    },
    *RCZS_RCPTSL({ payload = {} }, { call, put }) {
      const data = yield call(RCZS_RCPTSL, payload);
      yield put({
        type: "updateState",
        payload: {
          RCZS_RCPTSL: data.data
        }
      });
    },
    *ZYJSRC_ZB({ payload = {} }, { call, put }) {
      const data = yield call(ZYJSRC_ZB, payload);
      yield put({
        type: "updateState",
        payload: {
          ZYJSRC_ZB: data.data
        }
      });
    },
    *ZYJSRC_ACC({ payload = {} }, { call, put }) {
      const data = yield call(ZYJSRC_ACC, payload);
      yield put({
        type: "updateState",
        payload: {
          ZYJSRC_ACC: data.data
        }
      });
    },
    *GJSRC_ZB({ payload = {} }, { call, put }) {
      const data = yield call(GJSRC_ZB, payload);
      yield put({
        type: "updateState",
        payload: {
          GJSRC_ZB: data.data
        }
      });
    },
    *GJSRC_ACC({ payload = {} }, { call, put }) {
      const data = yield call(GJSRC_ACC, payload);
      yield put({
        type: "updateState",
        payload: {
          GJSRC_ACC: data.data
        }
      });
    },
    *RCGX_QRBL({ payload = {} }, { call, put }) {
      const data = yield call(RCGX_QRBL, payload);
      yield put({
        type: "updateState",
        payload: {
          RCGX_QRBL: data.data
        }
      });
    },
    *RCZS_QYYRMYQK({ payload = {} }, { call, put }) {
      const data = yield call(RCZS_QYYRMYQK, payload);
      yield put({
        type: "updateState",
        payload: {
          RCZS_QYYRMYQK: data.data
        }
      });
    },

    *MAP_ZS({ payload = {} }, { call, put }) {
      const data = yield call(MAP_ZS, payload);
      yield put({
        type: "updateState",
        payload: {
          MAP_ZS: data.data
        }
      });
    }
  },

  reducers: {}
});
