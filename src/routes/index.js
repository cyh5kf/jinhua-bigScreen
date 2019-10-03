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
    path: "/screen",
    LoadingComponent: Loader,
    models: () => [import("pages/screen/model")], //models可多个
    component: () => import("pages/screen")
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