import 'react-notifications/lib/notifications.css';

import { Provider, connect } from 'react-redux';
import { Route, withRouter, Switch, BrowserRouter } from 'react-router-dom';
import { compose } from 'redux';
import { NotificationContainer } from 'react-notifications';

import store from './redux/redux-store';

import HeaderContainer from './components/header/header-container';
import FooterContainer from './components/footer/footer-container';
import IndexContainer from './components/index/index-container';
import CategoryContainer from './components/category/category-container';

const App = () => {
  return (
    <div id="wrapper">
      <HeaderContainer/>

      <Switch>
        <Route exact path={'/'} render={() => <IndexContainer/>}/>
        <Route path={'/category/:name?/:search_string?'} render={() => <CategoryContainer/>}/>
      </Switch>

      <FooterContainer/>
      <NotificationContainer/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {  })
)(App);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  )
}

export default AppRouter;