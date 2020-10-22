import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom';
import IssueHeader from './component/Header/index';
import PostPage from './container/PostPage/index';
import HomePage from './container/HomePage/index';
import PostDetails from './container/PostDetails/index';

const Routing = props => (
  <div>
    <IssueHeader />
    <HashRouter basename='/'>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post-list/:userId" component={PostPage} />
        <Route exact path="/post-detail/:userId/:postId" component={PostDetails} />
        <Route exact path="*" component={HomePage} />
      </Switch>
    </HashRouter>
  </div>
)

export default Routing;
