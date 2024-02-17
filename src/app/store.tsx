'use client'
import { configureStore } from "@reduxjs/toolkit";
// import loginButtonReducer from "./features/buttons/loginButton";
// import loginSignUpReducer from "./features/buttons/loginSignup";

export const store = configureStore({
    reducer: {
        // loginButton: loginButtonReducer,
        // loginSignUpButton: loginSignUpReducer, 
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

