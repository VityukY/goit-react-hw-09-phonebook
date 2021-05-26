import { createAction } from '@reduxjs/toolkit';

export const registrationRequest = createAction('auth/registrationRequest');
export const registrationSucces = createAction('auth/registrationSucces');
export const registrationError = createAction('auth/registrationError');

export const loginRequest = createAction('auth/loginRequest');
export const loginSucces = createAction('auth/loginSucces');
export const loginError = createAction('auth/loginError');

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSucces = createAction('auth/logoutSucces');
export const logoutError = createAction('auth/logoutError');

export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSucces = createAction('auth/getCurrentUserSucces');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
