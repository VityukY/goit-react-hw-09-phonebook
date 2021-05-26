import * as actions from './auth-actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//aths@mail.com
//qweqwe123
const token = {
   set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   },
   unset() {
      axios.defaults.headers.common.Authorization = '';
   },
};

export const registration = newUser => async dispatch => {
   dispatch(actions.registrationRequest());
   try {
      const respons = await axios.post('/users/signup', newUser);
      token.set(respons.data.token);
      dispatch(actions.registrationSucces(respons.data));
   } catch (error) {
      dispatch(actions.registrationError(error.message));
   }
};

export const login = user => async dispatch => {
   dispatch(actions.loginRequest());
   try {
      const respons = await axios.post('/users/login', user);
      token.set(respons.data.token);
      dispatch(actions.loginSucces(respons.data));
   } catch (error) {
      dispatch(actions.loginError(error.message));
   }
};

export const logout = () => async dispatch => {
   dispatch(actions.logoutRequest());
   try {
      const respons = await axios.post('/users/logout');
      token.unset();
      dispatch(actions.logoutSucces(respons.data));
   } catch (error) {
      dispatch(actions.logoutError(error.message));
   }
};

export const getCurrentUserUser = () => async (dispatch, getState) => {
   const {
      auth: { token: persistedToken },
   } = getState();

   if (!persistedToken) {
      return;
   }
   token.set(persistedToken);
   dispatch(actions.getCurrentUserRequest());
   try {
      const respons = await axios.get('/users/current');

      dispatch(actions.getCurrentUserSucces(respons.data));
   } catch (error) {
      dispatch(actions.getCurrentUserError(error.message));
   }
};
