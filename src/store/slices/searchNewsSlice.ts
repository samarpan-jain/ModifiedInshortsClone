import { createSlice, CreateSliceOptions, PayloadAction } from "@reduxjs/toolkit";
import { NewsDetails } from "./newsSlice";

const initialState = {
    newsSearch: [] as NewsDetails[],
    isLoading: false,
}

export const searchNewsSlice = createSlice({
    name:'newsSearch',
    initialState,
    reducers:{
        getSearchNewsRequestAction:(state)=>{
            state.isLoading = true;
        },
        getSearchNewsSuccessAction: (state, action: PayloadAction<NewsDetails[]>) => {
            state.newsSearch = action.payload;
            state.isLoading = false;
        },
        getSearchNewsFailedAction: (state, action: PayloadAction<NewsDetails[]>) => {
            state.newsSearch = action.payload;
            state.isLoading = false;
        },
    }
} as CreateSliceOptions)

export const {getSearchNewsRequestAction, getSearchNewsSuccessAction, getSearchNewsFailedAction} = searchNewsSlice.actions;

export default searchNewsSlice.reducer;