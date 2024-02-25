'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PageState {
    value: boolean
}

const initialState: PageState = {
    value: false
}

export const loginPageSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        goLogin: (state) => {
            state.value = !state.value
        }
    },
})

export const { goLogin } = loginPageSlice.actions
export default loginPageSlice.reducer