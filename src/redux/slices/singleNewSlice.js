import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    singleNew: [],
    singleModel: {}
}

const singleNewSlice = createSlice({
    name: 'singleNew',
    initialState,
    reducers: {
        setNew: (state, { payload }) => {
            state.singleNew = payload
        },
        setSingleModel: ( state, { payload }) => {
            state.singleModel = payload
        }
    }
})

export const { setNew, setSingleModel } = singleNewSlice.actions

export const newSelector = state => state.singleNew.singleNew
export const modelSelector = state => state.singleNew.singleModel

export default singleNewSlice.reducer