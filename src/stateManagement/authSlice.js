import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status:null,
        logInfo:{
            user: '',
            password: ''
        },
        registerInfo:{
            user:'',
            status:null,
            password:'',
            
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
        },
        setRegisterInfo: (state, action) => {
            state.registerInfo.user = action.payload.user;
            state.registerInfo.status = action.payload.status;
            state.registerInfo.password = action.payload.password;
            state.registerInfo.matchPassword = action.payload.matchPassword;
        }
    }
});

export default authSlice.reducer;
export const { setUser,setLogInfo,setRegisterInfo } = authSlice.actions;