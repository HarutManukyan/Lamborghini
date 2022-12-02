import {combineReducers} from "@reduxjs/toolkit";

import nav from './slices/navSlice'
import singleNew from './slices/singleNewSlice'
import singleModel from './slices/singleModelSlice'

export const rootReducer = combineReducers({
    nav,
    singleNew
})