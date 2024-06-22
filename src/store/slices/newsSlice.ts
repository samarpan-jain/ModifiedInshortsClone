import { createSlice, CreateSliceOptions, PayloadAction } from "@reduxjs/toolkit";

interface Source{
    name:string;
}

export interface NewsDetails{
    title:string,
    description:string,
    content: string,
    url:string;
    image:string;
    publishedAt: string;
    source: Source
}

const initialState = {
    news: [] as NewsDetails[],
    isLoading: false,
}

export const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{
        getNewsRequestAction:(state)=>{
            state.isLoading = true;
        },
        getNewsSuccessAction: (state, action: PayloadAction<NewsDetails[]>) => {
            state.news = action.payload;
            state.isLoading = false;
        },
        getNewsFailedAction: (state, action: PayloadAction<NewsDetails[]>) => {
            state.news = action.payload;
            state.isLoading = false;
        },
    }
} as CreateSliceOptions)

export const {getNewsRequestAction, getNewsSuccessAction, getNewsFailedAction} = newsSlice.actions;

export default newsSlice.reducer;