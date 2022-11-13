import {combineReducers} from "@reduxjs/toolkit";

import nav from './slices/navSlice'

export const rootReducer = combineReducers({
    nav
})