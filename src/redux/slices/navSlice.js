import { createSlice } from "@reduxjs/toolkit"
import { postsExtraReducer } from "../../thunks/navThunk"

const initialState = {
    navInfo: [],
    navIsShown: false
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setNav: (state, { payload }) => {
            state.navInfo = payload
        },
        setNavIsShown: (state, { payload }) => {
            state.navIsShown = payload
        }
    },
    extraReducers: builder => {
        postsExtraReducer(builder)
    }
})

export const { setNav, setNavIsShown } = navSlice.actions

export const navSelector = state => state.nav.navInfo
export const navIsShownSelector = state => state.nav.navIsShown


export default navSlice.reducer