import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IPortfolioData, IReviewsData } from "../types"
import { liorAPI } from "../../axios"


type PortfolioState = {
    portfolio_list: IPortfolioData[]
    loading: boolean
    error: null | string
}

const initialState: PortfolioState = {
    portfolio_list: [],
    error: null,
    loading: false,
}

export const fetchByGetPortfolio = createAsyncThunk<IPortfolioData[], void, { rejectValue: string }>(
    'portfolio/fetchByGetPortfolio',
    async (_, { rejectWithValue }) => {
        const res = await liorAPI.getPortfolio()
        console.log(res);

        if (res.status !== 200) {
            return rejectWithValue('Error')
        }

        return res.data as IPortfolioData[]
    }
)


const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByGetPortfolio.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByGetPortfolio.fulfilled, (state, action) => {
            state.portfolio_list = action.payload
            state.loading = false
            state.error = null
        })
        addCase(fetchByGetPortfolio.rejected, (state, action) => {
            state.loading = false
            if (action.error.message) {
                state.error = action.error.message
            }
        })
    }
})

export default portfolioSlice.reducer
