import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.logging = true;
        },
        loginSuccess(state, action) {
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action) {
            state.logging = false;
        },

        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
    },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsLogging = (state) => state.auth.logging;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
