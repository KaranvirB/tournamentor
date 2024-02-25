'use client'
import { createSlice } from "@reduxjs/toolkit";

interface TournamentData {
    name: string,
    contestants: number
}

const initialState: TournamentData = {
    name: "",
    contestants: 0
}


export const tournamentSlice = createSlice ({
    name: "tournamentData",
    initialState,
    reducers: {
        
    }
})
