'use client'
import { configureStore } from "@reduxjs/toolkit";
import loginPageReducer from "@/app/features/buttons/loginPageSlice";

export const store = configureStore({
    reducer: {
        loginPageButton: loginPageReducer, 
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

