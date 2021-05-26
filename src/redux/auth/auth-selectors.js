export const isAuthenticated = state => {
   return state.auth.isLogin;
};

export const getUserName = state => {
   return state.auth.user.name;
};
