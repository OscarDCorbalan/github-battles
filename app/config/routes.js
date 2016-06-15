const React = require('react');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const Main = require('../components/Main');
const Home = require('../components/Home');

module.exports = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute path='/home' component={Home} />
    </Route>
  </Router>
);
