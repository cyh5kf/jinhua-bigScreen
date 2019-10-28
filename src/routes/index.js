import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Loader from 'components/Loader';

const { ConnectedRouter } = routerRedux;

let config = [
  {
    path: "/",
    component: () => import("pages")
  },
  {
    path: "/screen", // 主屏
    LoadingComponent: Loader,
    models: () => [import("pages/screen/model")], //models可多个
    component: () => import("pages/screen")
  },
  {
    path: "/jycyTwo",// 就业指数
    LoadingComponent: Loader,
    models: () => [import("pages/JycyTwo/model")], //models可多个
    component: () => import("pages/JycyTwo")
  },
  {
    path: "/fpldgx", // 劳动关系指数
    LoadingComponent: Loader,
    models: () => [import("pages/fpldgx/model")], //models可多个
    component: () => import("pages/fpldgx")
  },
  // {
  //   path: "/jycy", // 就业创业指数
  //   models: () => [import("pages/jycy/model")], //models可多个
  //   component: () => import("pages/jycy")
  // },
  {
    path: "/rc", // 人才指数
    models: () => [import("pages/rc/model")], //models可多个
    component: () => import("pages/rc")
  },
  {
    path: "/shbz", // 社会保障指数
    models: () => [import("pages/shbz/model")], //models可多个
    component: () => import("pages/shbz")
  },
  {
    path: "/jycyt/:name", // 就业创业预警平台----三级--就业创业
    component: () => import("pages/jycyt")
  },
  {
    path: "/ldgxt/:name", // 欠薪预警平台 ----三级--劳动关系
    component: () => import("pages/ldgxt")
  },
  {
    path: "/qrblThree", // 就业创业预警平台----三级--求人倍率
    LoadingComponent: Loader,
    models: () => [import("pages/qrblThree/model")], //models可多个
    component: () => import("pages/qrblThree")
  },
  // {
  //   path: "/ldrszc", // 劳动人事仲裁大屏
  //   component: () => import("pages/ldrszc")
  // },
  {
    path: "/shbzt/:name", // 网络舆情平台 ---三级--社会保障
    component: () => import("pages/shbzt")
  },
  {
    path: "/rct/:name", // 社会保险稽核风控系统 ---三级--人才
    component: () => import("pages/rct")
  },
  {
    path: "/zjygzw", // 公共服务指数
    component: () => import("pages/zjygzw")
  },
  {
    path: "/wlxxaq", // 网络信息安全指数
    component: () => import("pages/wlxxaq")
  },
];

function RouterConfig ({ history, app }) {
  return (
    <ConfigProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          {config.map(({ path, layout, ...dynamics }, index) => {
            const Component = dynamic({ app, ...dynamics });
            return (
              <Route
                key={path + index}
                path={path}
                exact
                render={props => {
                  return <Component {...props} />;
                }}
              />
            );
          })}
        </Switch>
      </ConnectedRouter>
    </ConfigProvider>
  );
}

export default RouterConfig;
