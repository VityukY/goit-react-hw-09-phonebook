import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './auth-actions';
const initialState = {
   name: null,
   email: null,
};
const user = createReducer(
   {
      name: null,
      email: null,
   },
   {
      [actions.registrationSucces]: (_, { payload }) => payload.user,
      [actions.loginSucces]: (_, { payload }) => payload.user,
      [actions.getCurrentUserSucces]: (_, { payload }) => payload,
      [actions.loginSucces]: () => initialState,
   },
);

const token = createReducer('', {
   [actions.registrationSucces]: (_, { payload }) => payload.token,
   [actions.loginSucces]: (_, { payload }) => payload.token,

   [actions.logoutSucces]: () => '',
});

const isLogin = createReducer(false, {
   [actions.registrationSucces]: () => true,
   [actions.loginSucces]: () => true,
   [actions.getCurrentUserSucces]: () => true,
   [actions.logoutSucces]: () => false,
});
const error = createReducer('', {
   [actions.registrationError]: (_, { payload }) => payload,
   [actions.loginError]: (_, { payload }) => payload,
   [actions.logoutError]: (_, { payload }) => payload,
   [actions.getCurrentUserError]: (_, { payload }) => payload,
});
const complexAuthReducer = combineReducers({
   user,
   token,
   isLogin,
   error,
});
export default complexAuthReducer;
