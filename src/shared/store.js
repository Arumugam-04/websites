import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './slice/signupSlice';
import loginReducer from './slice/loginSlice'
const store = configureStore({
    reducer: {
        signup: signupReducer,
        login: loginReducer
    },
});

export default store;
