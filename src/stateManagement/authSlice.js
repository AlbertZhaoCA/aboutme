import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status:null,
        logInfo:{
            user: '',
            password: ''
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.status = action.payload.status;
        },
        setLogInfo: (state, action) => {
            state.logInfo.user = action.payload.user;
            state.logInfo.password = action.payload.password;
        }
    }
});

export default authSlice.reducer;
export const { setUser,setLogInfo } = authSlice.actions;