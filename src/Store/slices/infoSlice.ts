import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IFormData } from "../types"
import { liorAPI } from "../../axios"


type InfoState = {
    message: string
    loading: boolean
    error: null | string
}

const initialState: InfoState = {
    message: '',
    error: null,
    loading: false,
}


export const fetchByAddFeedback = createAsyncThunk<string, IFormData, { rejectValue: string }>(
    'info/fetchByAddFeedback',
    async (data, { rejectWithValue }) => {
        const res = await liorAPI.addForm(data)
        console.log(res);

        if (res.status !== 201) {
            return rejectWithValue('Error')
        }

        return res.statusText

    }
)


const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByAddFeedback.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByAddFeedback.fulfilled, (state, action) => {
            state.message = action.payload
            state.loading = false
            state.error = null
        })
        addCase(fetchByAddFeedback.rejected, (state, action) => {
            state.loading = false
            if (action.error.message) {
                state.error = action.error.message
            }
        })
    }
})

export default infoSlice.reducer
