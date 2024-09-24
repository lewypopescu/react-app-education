export const selectIsLoggedIn = state => state.authSlice.isLoggedIn;

export const selectUser = state => state.authSlice.user;
export const isErrorAuth = state => state.authSlice.error;
export const isLoadingAuth = state => state.authSlice.isLoading;
