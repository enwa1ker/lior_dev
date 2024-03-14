import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IReviewsData } from "../types"
import { liorAPI } from "../../axios"


type ReviewState = {
    review_list: IReviewsData[]
    loading: boolean
    error: null | string
}

const initialState: ReviewState = {
    review_list: [],
    error: null,
    loading: false,
}

export const fetchByGetListReviews = createAsyncThunk<IReviewsData[], void, { rejectValue: string }>(
    'review/fetchByGetListReviews',
    async (_, { rejectWithValue }) => {
        const res = await liorAPI.getReviews()
        console.log(res);

        if (res.status !== 200) {
            return rejectWithValue('Error')
        }

        return res.data

    }
)

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByGetListReviews.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByGetListReviews.fulfilled, (state, action) => {
            state.review_list = action.payload
            state.loading = false
            state.error = null
        })
        addCase(fetchByGetListReviews.rejected, (state, action) => {
            state.loading = false
            if (action.error.message) {
                state.error = action.error.message
            }
        })
    }
})

export default reviewSlice.reducer
