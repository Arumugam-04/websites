// signupSlice.js

import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        userData: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    },
    reducers: {
        saveSignupData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const { saveSignupData } = signupSlice.actions;

export default signupSlice.reducer;
