'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ButtonState {
    button1: boolean,
    button2: boolean,
    button3: boolean,
    button4: boolean
}

const initialState: ButtonState = {
    button1: false,
    button2: false,
    button3: false,
    button4: false
}

export const contestantSlice = createSlice({
    name: 'contestants',
    initialState,
    reducers: {
        click2: (state) => {
            state.button1 = !state.button1
            state.button2 = false
            state.button3 = false
            state.button4 = false
        },
        click4: (state) => {
            state.button1 = false
            state.button2 = !state.button2
            state.button3 = false
            state.button4 = false
        },
        click8: (state) => {
            state.button1 = false
            state.button2 = false
            state.button3 = !state.button3
            state.button4 = false
        },
        click16: (state) => {
            state.button1 = false
            state.button2 = false
            state.button3 = false
            state.button4 = !state.button4
        },
        reset: (state) => {
            state.button1 = false
            state.button2 = false
            state.button3 = false
            state.button4 = false
        }
    },
})

export const { click2, click4, click8, click16, reset } = contestantSlice.actions
export default contestantSlice.reducer