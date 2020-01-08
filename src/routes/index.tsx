import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Empty } from 'antd';

import Example from './Example';

const Page404 = () => <Empty description={<span>未知链接</span>} />;

export default () => (
  <Switch>
    <Route path="/example" component={Example} key="example" />
    <Route path="/" render={() => <Redirect to="/home" />} exact key="root" />
    <Route path="*" component={Page404} key="other" />
  </Switch>
);
