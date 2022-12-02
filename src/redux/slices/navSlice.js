import { createSlice } from "@reduxjs/toolkit"
import { postsExtraReducer } from "../../thunks/navThunk"

const initialState = {
    navInfo: [],
    navIsShown: false,
    accessori: {}
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
        },
        setAccessori: (state, { payload }) => {
            state.accessori = payload
        }
    },
    extraReducers: builder => {
        postsExtraReducer(builder)
    }
})

export const { setNav, setNavIsShown, setAccessori } = navSlice.actions

export const navSelector = state => state.nav.navInfo
export const navIsShownSelector = state => state.nav.navIsShown
export const accessoriSelector = state => state.nav.accessori

export default navSlice.reducer