
import { createSlice } from '@reduxjs/toolkit';
const loginSlice = createSlice({
    name: 'auth',
    initialState: {
        signupData: null,
        isAuthenticated: false,
    },
    reducers: {
        setSignupData: (state, action) => {
            state.signupData = action.payload;
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    },
});

export const { setSignupData, setIsAuthenticated } = loginSlice.actions;
export default loginSlice.reducer;
