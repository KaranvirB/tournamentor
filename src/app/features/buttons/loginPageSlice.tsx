'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface PageState {
    value: boolean
}

export const initialState: PageState = {
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