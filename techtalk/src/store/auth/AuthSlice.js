import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'unauthorized',
        token: null,
        errorMessage: null
    },
    reducers: {
         logIn:(state,{payload})=>{
            state.status = 'authorized',
            state.token = payload
         },
         logOut:(state,{payload})=>{
            state.status= 'unauthorized'
            state.token = null,
            state.errorMessage= payload?.errorMessage
         },
         checking:(state)=>{
            state.status = 'checking'
         }
     }
});


export const { logIn,logOut,checking } = authSlice.actions;