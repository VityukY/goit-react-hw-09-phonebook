import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
//import * as operations from './redux/contacts/contact-operations';
import { connect } from 'react-redux';
import './Components/styles.css';
import routes from './routs';
import AppBar from './Components/AppBar';
import * as operations from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const Home = lazy(() =>
   import('./pages/Home' /* webpackChunkName: "home-page" */),
);
const Contacts = lazy(() =>
   import('./pages/Contacts' /* webpackChunkName: "contacts-page" */),
);
const Registarion = lazy(() =>
   import('./pages/Registarion' /* webpackChunkName: "registration-page" */),
);
const Login = lazy(() =>
   import('./pages/Login' /* webpackChunkName: "login-page" */),
);

class App extends Component {
   state = {};
   componentDidMount() {
      this.props.getCurrentUser();
   }
   render() {
      return (
         <>
            <AppBar />
            <Suspense fallback={<h1>грузимся...</h1>}>
               <Switch>
                  <PrivateRoute
                     path={routes.contacts}
                     redirectTo="/home"
                     component={Contacts}
                  />
                  <PublicRoute path={routes.home} component={Home} />
                  <PublicRoute
                     path={routes.registarion}
                     restricted
                     redirectTo="/contacts"
                     component={Registarion}
                  />
                  <PublicRoute
                     path={routes.login}
                     restricted
                     redirectTo="/contacts"
                     component={Login}
                  />
               </Switch>
            </Suspense>
         </>
      );
   }
}

const mapDispatchToProps = {
   getCurrentUser: operations.getCurrentUserUser,
};

export default connect(null, mapDispatchToProps)(App);
//<Route path={routes.contacts} component={Contacts} />
//                  <Route path={routes.registarion} component={Registarion} />
//              <Route path={routes.login} component={Login} />
