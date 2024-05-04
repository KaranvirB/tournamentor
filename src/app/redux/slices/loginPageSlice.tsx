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
        },
        goHome: (state) => {
            state.value = false
        }
    },
})

export const { goLogin, goHome } = loginPageSlice.actions
export default loginPageSlice.reducer