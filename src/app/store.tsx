'use client'
import { configureStore } from "@reduxjs/toolkit";
import loginPageReducer from "@/app/features/buttons/loginPageSlice";
import contestantReducer from "@/app/features/buttons/contestantSlice";

export const store = configureStore({
    reducer: {
        loginPageButton: loginPageReducer, 
        contestantButtons: contestantReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

