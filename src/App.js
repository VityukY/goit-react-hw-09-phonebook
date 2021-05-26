import { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';
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

export default function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(operations.getCurrentUserUser());
   }, [dispatch]);

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
