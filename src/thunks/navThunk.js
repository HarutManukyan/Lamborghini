import {createAsyncThunk} from "@reduxjs/toolkit";

export const getNav = createAsyncThunk(
    'nav/get',
    // async () => {
    //     return await fetch('http://localhost:3000/card')
    //         .then(res => res.json())
    // }
)

const getPostsPending = (state) => {
    state.loading = true
    console.log('Loading')
}

const getPostsFulfilled = (state, {payload}) => {
    console.log('asasas')
    state.navInfo = payload
}

const getPostsRejected = (state) => {
    state.loading = false
    state.errorPosts= 'Some error occurred with Posts'
}

export const postsExtraReducer = builder => {
    builder
        .addCase(getNav.pending, getPostsPending)
        .addCase(getNav.fulfilled, getPostsFulfilled)
        .addCase(getNav.rejected, getPostsRejected)
}
