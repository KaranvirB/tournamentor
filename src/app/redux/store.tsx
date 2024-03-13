'use client'
import { configureStore } from "@reduxjs/toolkit";
import loginPageReducer from "@/app/redux/slices/loginPageSlice";
import contestantReducer from "@/app/redux/slices/contestantSlice";

export const store = configureStore({
    reducer: {
        loginPageButton: loginPageReducer, 
        contestantButtons: contestantReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

