import { configureStore, createSlice } from "@reduxjs/toolkit";
import {createStore}from "redux"

const AuthSlice=createSlice({
 name:"auth",
 initialState:false,
 reducers:{
    loggin(state){
        return true;
    },
    logout(state){
        return false;
    }
 }

})

export const store=configureStore({
    reducer:{
        auth:AuthSlice.reducer
    }
})

export  const action=AuthSlice.actions;

// export const store=createStore(reducer);



